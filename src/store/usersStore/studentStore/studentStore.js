import axios from 'axios';
import { makeObservable, observable, action } from 'mobx';

class StudentStore {
  studentList = {
    data: [],
    currentPage: 1,
    fetchLoading: false,
    apicalled: false,
  };

  filter = {
    search: undefined,
    startYear: undefined,
    endYear: undefined,
    standard: undefined,
    status: 'ACCEPTED',
    page: this.studentList.currentPage,
    appliedSelectedFilter: [],
  };

  showType = 'table';
  SingleStudent = null;
  constructor() {
    makeObservable(this, {
      studentList: observable,
      SingleStudent: observable,
      filter: observable,
      showType: observable,
      getStudents: action,
      getSingleStudent: action,
      updateStudent: action,
      createStudent: action,
      downloadStudentList: action,
      downloadTemplate: action,
      setShowType: action,
      applyFilter: action,
    });
  }

  getStudents = async (sendData) => {
    try {
      this.studentList.fetchLoading = true;
      this.studentList.apicalled = true;
      const { data } = await axios.post('/student/get', { ...sendData });
      this.studentList = {
        ...this.studentList,
        data: data.data.list,
        currentPage: data.data.currentPage,
        fetchLoading: false,
      };
    } catch (err) {
      this.studentList = {
        ...this.studentList,
        fetchLoading: false,
        apicalled: false,
      };
      return Promise.reject(err?.response?.data);
    }
  };

  applyFilter = async (
    searchValue,
    startYear,
    endYear,
    status,
    standard,
    currentPage,
    appliedSelectedFilter,
  ) => {
    const filterData = {
      search: searchValue ? searchValue : undefined,
      startYear: startYear ? startYear : undefined,
      endYear: endYear ? endYear : undefined,
      status: status ? status : undefined,
      standard: standard ? standard : undefined,
      page: currentPage ? currentPage : 1,
      appliedSelectedFilter: appliedSelectedFilter ? appliedSelectedFilter : [],
    };
    this.filter = {
      ...filterData,
    };
    try {
      await this.getStudents({
        search: filterData.search,
        startYear: filterData.startYear,
        endYear: filterData.endYear,
        standard: filterData.standard,
        status: filterData.status,
        page: filterData.page,
      });
    } catch (err) {
      if (err.response && err.response.data) {
        const errorMessage = err.response.data.message || 'An error occurred';
        return Promise.reject(errorMessage);
      } else {
        return Promise.reject('An error occurred');
      }
    }
  };

  getSingleStudent = async (id) => {
    try {
      const { data } = await axios.get(`/student/single/${id}`);
      return data.data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  updateStudent = async (sendData) => {
    try {
      const data = await axios.put(`/student/update`, sendData);
      const index = this.studentList.data.findIndex((item) => item.id === sendData.id);
      if (index !== -1) {
        this.studentList.data.splice(index, 1, data?.data?.data);
      }
      return data.data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  createStudent = async (sendData) => {
    try {
      const data = await axios.post(`/student/create`, sendData);
      this.studentList.data.unshift(data.data.data);
      return data.data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  downloadStudentList = async (sendData) => {
    try {
      const response = await axios.post('/student/download/list', sendData, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'students.xlsx');
      document.body.appendChild(link);
      link.click();
      return {
        data: 'Student list download successfully',
      };
    } catch (err) {
      return Promise.reject(err);
    }
  };

  downloadTemplate = async (sendData) => {
    try {
      const response = await axios.post('/student/download/template', sendData, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'invoice.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Error downloading invoice:', err);
    }
  };

  setShowType = (type) => {
    this.showType = type;
  };
}

export default StudentStore;
