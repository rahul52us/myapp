import React, { useState } from 'react';
import TestimonialForm from './TestimonialForm';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import store from '../../../../../store/store';

const AddTestimonial = observer(({ setAddTestimonial }) => {
  const {
    TestimonialStore: { createTestimonial },
    auth: { openNotification },
  } = store;
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [picFile, setPicFile] = useState();

  const initialValues = {
    name: '',
    profession: '',
    description: '',
  };

  const addData = (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('profession', values.profession);
    formData.append('description', values.description);
    if (files.length) {
      formData.append('pic', files[0]);
    }
    createTestimonial(formData)
      .then((data) => {
        openNotification({ message: data?.message, type: 'success' });
        setAddTestimonial(false);
      })
      .catch((err) => {
        openNotification({
          message: err?.meta?.cause ? err?.meta?.cause : err.message,
          type: 'error',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handlePicFile = () => {
    setFiles([])
    setPicFile(null)
  }

  return (
    <TestimonialForm
      submitForm={addData}
      initialValues={initialValues}
      loading={loading}
      closeForm={() => setAddTestimonial(false)}
      title="Create Testimonial"
      files={files}
      setFiles={setFiles}
      setPicFile={handlePicFile}
      picFile={picFile}
    />
  );
});

AddTestimonial.propTypes = {
  setAddTestimonial: PropTypes.func.isRequired,
};

export default AddTestimonial;
