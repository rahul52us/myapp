import AuthStore from './authStore/authStore';
import LayoutStore from './layoutStore/LayoutStore';
import DashStore from './authStore/dashStore';
import GalleryStore from './galleryStore/galleryStore';
import WebStore from './webStore/webStore';
import TestimonialStore from './testimonialStore/testimonialStore';
import userStore from './usersStore/userStore';
import { configure } from 'mobx';
configure({ enforceActions: 'never' });

const store = {
  auth: new AuthStore(),
  layout: new LayoutStore(),
  DashStore: new DashStore(),
  GalleryStore: new GalleryStore(),
  WebStore : new WebStore(),
  TestimonialStore : new TestimonialStore(),
  ...userStore
};
export default store;
