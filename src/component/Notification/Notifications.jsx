import * as React from 'react';
import store from '../../store/store';
import { observer } from 'mobx-react-lite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notifications = observer(() => {
  const {
    auth: { notification, closeNotication },
  } = store;

  React.useEffect(() => {
    if (notification) {
      switch (notification.type) {
        case 'success':
          toast.success(notification.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          break;
        case 'error':
          toast.error(notification.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          break;
        default:
          toast.success(notification.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
      }
      closeNotication();
    }
  }, [notification]);

  return <ToastContainer style={{zIndex:9999999999999}}/>;
});

export default Notifications;
