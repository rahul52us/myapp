import axios from 'axios';
import { makeObservable, observable, action } from 'mobx';

class TeacherStore {
  teacherList = {
    data : [],
    currentPage: 1,
    fetchLoading: false,
    apicalled: false,
  };
  filter = {
    search: undefined,
    startYear: undefined,
    endYear: undefined,
    status: 'ACCEPTED',
    page: this.teacherList.currentPage,
    appliedSelectedFilter: [],
  };

  SingleTeacher = null;
  showType="table"
  fetchTeacherUser = false;
  userTeacher = [];
  constructor() {
    makeObservable(this, {
      teacherList: observable,
      userTeacher: observable,
      showType: observable,
      filter:observable,
      getTeachers: action,
      createTeacher: action,
      getSingleTeacher: action,
      updateTeacher: action,
      getUserTeacher: action,
      getUserSingleTeacher: action,
      downloadTeacherList: action,
      setShowType:action,
      applyFilter:action
    });
  }

  getSingleTeacher = async (id) => {
    try {
      const { data } = await axios.get(`/teacher/single/${id}`);
      this.SingleTeacher = data.data;
      return data.data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  getTeachers = async (sendData) => {
    try {
      this.teacherList.fetchLoading = true;
      this.teacherList.apicalled = true;
      const { data } = await axios.post(`/teacher/get`, sendData);
      this.teacherList = {
        data: data.data.list,
        currentPage: data.data.currentPage,
        fetchLoading: false,
      };

      return data.data;
    } catch (err) {
      this.teacherList.fetchLoading = false
      this.teacherList.apicalled = false
      return Promise.reject(err?.response?.data);
    }
  };

  createTeacher = async (sendData) => {
    try {
      const data = await axios.post(`/teacher/create`, sendData);
      this.teacherList.data.unshift(data.data.data);
      return data.data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  updateTeacher = async (sendData) => {
    try {
      const data = await axios.put(`/teacher/update`, sendData);
      const index = this.teacherList.data.findIndex((item) => item.id === sendData.id);
      if (index !== -1) {
        this.teacherList.data.splice(index, 1, data?.data?.data);
      }
      return data.data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  getUserTeacher = async (sendData) => {
    try {
      const { data } = await axios.post(`/teacher/user/get`, sendData);
      this.fetchTeacherUser = true;
      this.userTeacher = data.data;
      return data.data;
    } catch (err) {
      this.fetchTeacherUser = false;
      return Promise.reject(err?.response?.data);
    }
  };

  getUserSingleTeacher = async (sendData) => {
    try {
      const { data } = await axios.get(`/teacher/user/${sendData.id}`,);
      return data.data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  downloadTeacherList = async (sendData) => {
    try {
      const response = await axios.post('/teacher/download/list', sendData, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'teacher.xlsx');
      document.body.appendChild(link);
      link.click();
      return {
        data: 'Teacher list download successfully',
      };
    } catch (err) {
      return Promise.reject(err);
    }
  };

  setShowType = (type) => {
    this.showType = type;
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
      await this.getTeachers({
        search: filterData.search,
        startYear: filterData.startYear,
        endYear: filterData.endYear,
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

}

export default TeacherStore;
