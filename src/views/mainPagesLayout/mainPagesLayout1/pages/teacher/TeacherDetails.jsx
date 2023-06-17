import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';
import UserDetailContainer from '../../common/component/UserDetailContainer/UserDetailContainer';
import store from '../../../../../store/store';
import ContentBannner from '../../common/component/ContentBanner/ContentBanner';
import { Skeleton } from '@mui/material';

const TeacherDetails = observer(() => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recieveData, setRecieveData] = useState(false);
  const {
    TeacherStore: { getUserSingleTeacher },
    auth: { openNotification },
  } = store;

  useEffect(() => {
    getUserSingleTeacher({ id: id })
      .then((dt) => {
        setRecieveData(dt);
      })
      .catch((err) => {
        openNotification({ message: err?.message, type: 'error' });
        navigate('/teachers');
      });
  }, []);

  return (
    <>
      <ContentBannner title="Teacher Details" />
      {recieveData ? <UserDetailContainer item={recieveData} /> : <Skeleton />}
    </>
  );
});

export default TeacherDetails;
