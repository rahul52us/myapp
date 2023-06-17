import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Title from '../../../../../../component/DocumentTitle/Title';
import { StaffCreateInitialValues } from '../utils/staff.constant';
import { StaffCreateValidation } from '../utils/staff.validation';
import store from '../../../../../../store/store';
import Profile from '../../../../../profile';
import { staff } from '../../../../../../config/routes/dashboard/userRoutes/constantRoutes';

const CreateStaff = observer(() => {
  const [initialValues, setInitialValues] = useState(StaffCreateInitialValues);
  const {
    StaffStore: { createStaff },
    auth: { checkPermission },
  } = store;

  return checkPermission({ key: 'staff', value: 1 }) ?
    <>
    <Title title="Create Staff"/>
    <Profile
      setInitialValues={setInitialValues}
      initialValues={initialValues}
      fetchValues={true}
      submitFunction={createStaff}
      type="create"
      validation={StaffCreateValidation}
      userType="staff"
      profileLink={staff.LIST}
    />
    </>
   : (
    <h1>Dont have persmission</h1>
  );
});

export default CreateStaff;
