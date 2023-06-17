import axios from 'axios';
import { makeObservable, observable, action } from 'mobx';

class StaffStore {
  staffList = {
    data: [],
    currentPage: 1,
    fetchLoading: false,
    apicalled: false,
  };
  filter = {
    search: undefined,
    startYear: undefined,
    endYear: undefined,
    status: 'ACCEPTED',
    page: this.staffList.currentPage,
    appliedSelectedFilter: [],
  };
  SingleStaff = null;
  showType="table"
  constructor() {
    makeObservable(this, {
      staffList: observable,
      showType:observable,
      filter:observable,
      getStaff: action,
      createStaff: action,
      getSingleStaff: action,
      updateStaff: action,
      setShowType:action,
      applyFilter:action
    });
  }

  getSingleStaff = async (id) => {
    try {
      const { data } = await axios.get(`/staff/single/${id}`);
      this.SingleStaff = data.data;
      return data.data;
    } catch (err) {
      return Promise.reject(err?.response?.data);    }
  };

  getStaff = async (sendData) => {
    try {
      this.staffList.fetchLoading = true
      this.staffList.apicalled = true
      const { data } = await axios.post(`/staff/get`,sendData);
      this.staffList = {
        data: data.data.list,
        currentPage: data.data.currentPage,
        fetchLoading: false,
      };
      return data.data;
    } catch (err) {
      this.staffList.fetchLoading = false
      this.staffList.apicalled = false
      return Promise.reject(err?.response?.data)}
  };


  createStaff = async (sendData) => {
    try {
      const data = await axios.post(`/staff/create`, sendData);
      this.staffList.data.unshift(data.data.data)
      return data.data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  updateStaff = async (sendData) => {
    try {
      const data = await axios.put(`/staff/update`, sendData);
      const index = this.staffList.data.findIndex((item) => item.id === sendData.id);
      if (index !== -1) {
        this.staffList.data.splice(index, 1, data?.data?.data);
      }
      return data.data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
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
      await this.getStaff({
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

}

export default StaffStore;
