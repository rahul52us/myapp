import React, { useState } from 'react';
import TestimonialForm from './TestimonialForm';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import store from '../../../../../store/store';

const EditTestimonial = observer(({ data, setEditTestimonial }) => {
  const {
    TestimonialStore: { editTestimonial },
    auth: { openNotification },
  } = store;
  const [loading, setLoading] = useState(false);
  const [picFile, setPicFile] = useState(data?.pic);
  const [files, setFiles] = useState([]);
  const [formData] = useState(new FormData());

  const initialValues = {
    name: data?.name,
    profession: data?.profession,
    description: data?.description,
    pic: data?.pic,
  };

  const handleDeleteProfile = () => {
    setPicFile(null);
    formData.append('is_deleted', 1);
  };

  const editData = (values) => {
    values.id = data?.id;

    formData.append('id', values.id);
    formData.append('name', values.name);
    formData.append('profession', values.profession);
    formData.append('description', values.description);
    if (files.length) {
      if (initialValues.pic) {
        formData.append('is_deleted', 1);
      }
      formData.append('pic', files[0]);
    }

    setLoading(true);
    editTestimonial(formData, values.id)
      .then((data) => {
        openNotification({ message: data?.message, type: 'success' });
        setEditTestimonial(false);
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

  return (
    <TestimonialForm
      submitForm={editData}
      initialValues={initialValues}
      loading={loading}
      closeForm={() => setEditTestimonial(false)}
      title="Update Testimonial"
      files={files}
      setFiles={setFiles}
      picFile={picFile}
      setPicFile={handleDeleteProfile}
    />
  );
});

EditTestimonial.propTypes = {
  data: PropTypes.object.isRequired,
  setEditTestimonial: PropTypes.func.isRequired,
};

export default EditTestimonial;
