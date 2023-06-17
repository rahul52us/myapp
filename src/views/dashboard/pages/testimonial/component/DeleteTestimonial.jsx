import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DialogBox from '../../../../../component/Dialog/Dialog';
import Typography from '../../../../../component/Typography/Typography';
import store from '../../../../../store/store';
import CustomFormButton from '../../../../../component/common/CustomFormButton/CustomFormButton';

const DeleteTestimonial = ({ open, setDelete }) => {
  const {
    TestimonialStore: { deleteTestimonial },
    auth: { openNotification },
  } = store;
  const [loading, setLoading] = useState(null);
  const deleteFun = () => {
    setLoading(true);
    deleteTestimonial({ id: open.id })
      .then((data) => {
        openNotification({ message: data?.message, type: 'success' });
        setDelete(false);
      })
      .catch((err) => {
        openNotification({
          message: err?.meta?.cause ? err?.meta?.cause : err.message,
          type: 'error',
        });
      })
      .finally(() => {
        setLoading(null);
      });
  };

  return (
    <DialogBox open={true} close={setDelete} title="Delete Testimonial">
      <Typography
        variant="h6"
        paragraph
      >{`Are you sure , you want to delete ${open?.name} testimonial`}</Typography>
      <CustomFormButton
        submitButton={deleteFun}
        loading={loading}
        submitText={'Delete'}
        cancelText="Cancel"
        cancelButton={() => setDelete(false)}
      />
    </DialogBox>
  );
};

DeleteTestimonial.propTypes = {
  open: PropTypes.object,
  setDelete: PropTypes.func,
};

export default DeleteTestimonial;
