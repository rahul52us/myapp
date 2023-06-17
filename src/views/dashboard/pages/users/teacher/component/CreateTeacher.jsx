import React, { useState } from 'react';
import Profile from '../../../../../profile';
import store from '../../../../../../store/store';
import { observer } from 'mobx-react-lite';
import Title from '../../../../../../component/DocumentTitle/Title';
import { TeacherCreateInitialValues } from '../utils/teacher.constant';
import { TeacherCreateValidation } from '../utils/teacher.validation';
import { teacher } from '../../../../../../config/routes/dashboard/userRoutes/constantRoutes';

const CreateTeacher = observer(() => {
  const [initialValues, setInitialValues] = useState(TeacherCreateInitialValues);
  const {
    TeacherStore: { createTeacher },
    auth: { checkPermission },
  } = store;

  return checkPermission({ key: 'teacher', value: 1 }) ?
    <>
    <Title title="Create Teacher"/>
    <Profile
      setInitialValues={setInitialValues}
      initialValues={initialValues}
      fetchValues={true}
      submitFunction={createTeacher}
      type="create"
      validation={TeacherCreateValidation}
      userType="teacher"
      profileLink={teacher.LIST}
    />
    </>
   : (
    <h1>Dont have persmission</h1>
  );
});

export default CreateTeacher;
