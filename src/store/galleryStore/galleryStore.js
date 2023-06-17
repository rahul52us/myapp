import axios from 'axios';
import { makeObservable, observable, action } from 'mobx';

class GalleryStore {
  galleryCategory = [];

  constructor() {
    makeObservable(this, {
      galleryCategory: observable,
      getGalleryCategory:action
    });
  }

  getGalleryCategory = async (id) => {
    try {
      const { data } = await axios.get(`gallery/categories/${id}`);
      this.galleryCategory = data.data;
      return this.galleryCategory
    } catch (err) {
      return Promise.reject(err?.response?.data)}
  };
}

export default GalleryStore;
