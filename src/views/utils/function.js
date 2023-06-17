import store from '../../store/store';
const {
  auth: { openNotification },
} = store;

export const handleErrorMessage = (err) => {
  openNotification({
    message: err?.meta?.cause
      ? err?.meta?.cause
      : err?.message
      ? err?.message
      : 'Something went wrong Internal server erorr',
    type: 'error',
  });
};

export const handleSuccessMessage = (res) => {
  openNotification({ message: res?.message ? res?.message : 'Success Completed', type: 'success' });
};
