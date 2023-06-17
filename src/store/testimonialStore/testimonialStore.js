import axios from 'axios';
import { makeObservable, observable, action } from 'mobx';

class TestimonialStore {
  testimonials = {
    data: [],
    currentPage: 1,
    hasMore: false,
    loading: true,
    hasFetch : false
  };

  constructor() {
    makeObservable(this, {
      testimonials: observable,
      getTestimonials: action,
      deleteTestimonial: action,
      createTestimonial: action,
      editTestimonial: action,
      downloadTestimonialList: action,
    });
  }

  getTestimonials = action(async(sendData) => {
    if (localStorage.getItem(process.env.REACT_APP_WEB_INFO_KEY)) {
      this.testimonials.loading = true;
      try {
        const test = JSON.parse(localStorage.getItem(process.env.REACT_APP_WEB_INFO_KEY));
        const { data } = await axios.post(`/testimonial/get`, {
          userId: sendData.userId ? sendData.userId : test.userId,
          ...sendData,
        });
        this.testimonials.data = [...this.testimonials.data, ...data.data];
        this.testimonials.hasMore = data.data.length > 0 ? true : false;
        this.testimonials.hasFetch = true
      } catch (err) {
        return Promise.reject(err?.response?.data);
      } finally {
        this.testimonials.loading = false;
      }
    } else {
      this.testimonials.loading = false;
      return Promise.reject('cannot get the testimonials');
    }
  });

  deleteTestimonial = async (sendData) => {
    try {
      const { data } = await axios.delete(`/testimonial/delete/${sendData.id}`);
      this.testimonials.data = this.testimonials.data.filter((item) => item.id !== sendData.id);
      return data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  createTestimonial = async (sendData) => {
    try {
      const { data } = await axios.post(`/testimonial/create`, sendData);
      this.testimonials.data.unshift(data.data);
      return data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  editTestimonial = async (sendData, id) => {
    try {
      const { data } = await axios.put(`/testimonial/update`, sendData);
      const dd = this.testimonials.data.findIndex((item) => item.id === id);
      if (dd !== -1) {
        this.testimonials.data.splice(dd, 1, data.data);
      }
      return data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  downloadTestimonialList = async (sendData) => {
    try {
      const response = await axios.post('/testimonial/download/list', sendData, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'testimonials.xlsx');
      document.body.appendChild(link);
      link.click();
      return {
        data: 'Testimonial list download successfully',
      };
    } catch (err) {
      return Promise.reject(err);
    }
  };
}

export default TestimonialStore;
