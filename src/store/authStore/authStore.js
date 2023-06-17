import axios from 'axios';
import { action, makeObservable, observable } from 'mobx';

class AuthStore {
  user = null;
  notification = null;
  isRememberCredential = true;

  constructor() {
    this.initiatAppOptions();
    makeObservable(this, {
      user: observable,
      notification: observable,
      login: action,
      register: action,
      doLogout: action,
      openNotification: action,
      closeNotication: action,
      checkPermission: action,
      updateUserProfile: action,
      uploadUserPic: action,
      sendNotification: action,
    });
  }

  setAppAxiosDefaults = async () => {
    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL;
  };

  initiatAppOptions = () => {
    this.loading = true;
    this.setAppAxiosDefaults();
    let token = localStorage.getItem(process.env.REACT_APP_AUTHORIZATION_TOKEN);
    if (token && token !== 'undefined') {
      axios.defaults.headers = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      };
      this.setUserOptions(token);
    } else {
      this.loading = false;
      this.user = null;
      this.clearLocalStorage();
    }
  };

  setUserOptions = () => {
    axios
      .post('/auth/me')
      .then(({ data }) => {
        this.user = data.data;
      })
      .catch(() => {
        this.loading = false;
        this.clearLocalStorage();
        this.initiatAppOptions();
      });
  };

  clearLocalStorage = () => {
    localStorage.removeItem(process.env.REACT_APP_AUTHORIZATION_TOKEN);
    localStorage.removeItem(process.env.REACT_APP_WEB_INFO_KEY);
  };

  updateUserProfile = async (sendData) => {
    try {
      const { data } = await axios.put('/auth/update-profile', sendData);
      this.user = data.data;
      return data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  login = async (sendData) => {
    try {
      this.isRememberCredential = sendData.remember_me;
      const { data } = await axios.post('/auth/login', {
        username: sendData.username,
        password: sendData.password,
      });
      this.user = data.data;
        axios.defaults.headers = {
          Accept: 'application/json',
          Authorization: `Bearer ${data.data.authorizationToken}`,
        };
        localStorage.setItem(
          process.env.REACT_APP_AUTHORIZATION_TOKEN,
          data.data.authorizationToken,
        );
      return data.data;
    } catch (err) {
      return Promise.reject(err?.response?.data);
    }
  };

  doLogout = () => {
    this.user = null;
    this.clearLocalStorage();
  };

  register = () => {
    console.log(this.user);
  };

  openNotification = (data, action) => {
    this.notification = {
      message: data.message,
      type: data.type ? data.type : 'success',
      placement: data.placement ? data.placement : 'bottom',
      action: action ? action : null,
    };
  };

  closeNotication = () => {
    this.notification = null;
  };

  checkPermission = (check) => {
    if (this.user?.adminType === 'admin') {
      return true;
    } else {
      if (this.user?.permission) {
        var status = false;
        Object.entries(this.user.permission).forEach((item) => {
          if (item[0] === check?.key) {
            if (item[1][check.value]) {
              status = true;
            } else {
              status = false;
            }
          }
        });
        return status;
      }
    }
  };

  uploadUserPic = async (sendData) => {
    try {
      const { data } = await axios.post('/auth/upload-pic', sendData);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  sendNotification = async (sendData) => {
    try {
      const { data } = await axios.post('/notification/create', sendData);
      return data;
    } catch (err) {
      return Promise.reject(err);
    }
  };
}

export default AuthStore;
