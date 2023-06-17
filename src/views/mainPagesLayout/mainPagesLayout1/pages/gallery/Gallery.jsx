import { observer } from 'mobx-react-lite';
import React from 'react';
import ContentBannner from '../../common/component/ContentBanner/ContentBanner';
import TitleContainer from '../../common/component/TitleContainer/TitleContainer';
import store from '../../../../../store/store';
import { useEffect } from 'react';
import GalleryTab from './component/GalleryTab'

const Gallery = observer(() => {
  const {
    GalleryStore: { getGalleryCategory, galleryCategory },
    auth: { user, openNotification },
  } = store;

  useEffect(() => {
    if (!galleryCategory.length) {
      getGalleryCategory(user?.id)
        .then(() => {})
        .catch((err) => {
          openNotification({ message: err?.message, type: 'error' });
        });
    }
  }, [user]);

  return (
    <div>
      <ContentBannner title="Gallery" />
      <TitleContainer
        title="Welcome To Umang Academy"
        subTitle="The concept of school and pre-school education consists of 3 programs of development and training in our academy."
      />
      <GalleryTab galleryCategory={galleryCategory} />
    </div>
  );
});

export default Gallery;
