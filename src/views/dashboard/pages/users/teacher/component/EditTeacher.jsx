import React, { useEffect, useState } from 'react';
import Profile from '../../../../../profile';
import { useLocation } from 'react-router-dom';
import store from '../../../../../../store/store';
import { observer } from 'mobx-react-lite';
import Title from '../../../../../../component/DocumentTitle/Title';
import { TeacherEditInitialValues } from '../utils/teacher.constant';
import { TeacherEditValidation } from '../utils/teacher.validation';
import { teacher } from '../../../../../../config/routes/dashboard/userRoutes/constantRoutes';

const EditTeacher = observer(() => {
  const {
    TeacherStore: { getSingleTeacher, updateTeacher },
    auth: { checkPermission },
  } = store;
  const [fetchValues, setFetcValues] = useState(false);
  const [initialValues, setInitialValues] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      getSingleTeacher(state)
        .then((res) => {
          setInitialValues(res);
          setFetcValues(true);
        })
        .catch(() => {
          setInitialValues(false);
          setFetcValues(false);
        });
    }
  }, []);

  return checkPermission({ key: 'teacher', value: 2 }) ? (
    <>
      <Title title="Edit Teacher" />
      <Profile
        setInitialValues={setInitialValues}
        initialValues={TeacherEditInitialValues(initialValues)}
        fetchValues={fetchValues}
        submitFunction={updateTeacher}
        type="edit"
        validation={TeacherEditValidation}
        profileLink={teacher.LIST}
        userType="teacher"
      />{' '}
    </>
  ) : (
    <h1>do not have permission</h1>
  );
});

export default EditTeacher;
