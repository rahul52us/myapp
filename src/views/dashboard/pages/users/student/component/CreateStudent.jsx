import React, { useState } from 'react';
import Profile from '../../../../../profile';
import store from '../../../../../../store/store';
import { observer } from 'mobx-react-lite';
import { StudentCreateValidation } from '../utils/student.validation';
import { StudentCreateInitialValues } from '../utils/student.constant';
import Title from '../../../../../../component/DocumentTitle/Title';
import { student } from '../../../../../../config/routes/dashboard/userRoutes/constantRoutes';

const CreateStudent = observer(() => {
  const [initialValues, setInitialValues] = useState(StudentCreateInitialValues);
  const {
    StudentStore: { createStudent },
    auth: { checkPermission },
  } = store;

  return checkPermission({ key: 'student', value: 1 }) ?
    <>
    <Title title="Create Student"/>
    <Profile
      setInitialValues={setInitialValues}
      initialValues={initialValues}
      fetchValues={true}
      submitFunction={createStudent}
      type="create"
      validation={StudentCreateValidation}
      userType="student"
      profileLink={student.LIST}
    />
    </>
   : (
    <h1>Dont have persmission</h1>
  );
});

export default CreateStudent;
