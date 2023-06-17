import React, { useEffect, useState } from 'react';
import Profile from '../../../../../profile';
import { useLocation } from 'react-router-dom';
import store from '../../../../../../store/store';
import { observer } from 'mobx-react-lite';
import { StudentEditValidation } from '../utils/student.validation';
import { StudentEditInitialValues } from '../utils/student.constant';
import Title from '../../../../../../component/DocumentTitle/Title';
import { student } from '../../../../../../config/routes/dashboard/userRoutes/constantRoutes';

const EditStudent = observer(() => {
  const {
    StudentStore: { getSingleStudent, updateStudent },
    auth: { checkPermission },
  } = store;
  const [fetchValues, setFetcValues] = useState(false);
  const [initialValues, setInitialValues] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      getSingleStudent(state)
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

  return checkPermission({ key: 'student', value: 2 }) ? (
    <>
      <Title title="Edit Student" />
      <Profile
        setInitialValues={setInitialValues}
        initialValues={StudentEditInitialValues(initialValues)}
        fetchValues={fetchValues}
        submitFunction={updateStudent}
        type="edit"
        validation={StudentEditValidation}
        profileLink={student.LIST}
        userType="student"
      />{' '}
    </>
  ) : (
    <h1>do not have permission</h1>
  );
});

export default EditStudent;
