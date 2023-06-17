import React, { useEffect, useState } from 'react';
import Profile from '../../../../../profile';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Title from '../../../../../../component/DocumentTitle/Title';
import { StaffEditInitialValues } from '../utils/staff.constant';
import { StaffEditValidation } from '../utils/staff.validation';
import store from '../../../../../../store/store';
import { staff } from '../../../../../../config/routes/dashboard/userRoutes/constantRoutes';

const EditStaff = observer(() => {
  const {
    StaffStore: { getSingleStaff, updateStaff },
    auth: { checkPermission },
  } = store;
  const [fetchValues, setFetcValues] = useState(false);
  const [initialValues, setInitialValues] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      getSingleStaff(state)
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

  return checkPermission({ key: 'staff', value: 2 }) ? (
    <>
      <Title title="Edit Staff" />
      <Profile
        setInitialValues={setInitialValues}
        initialValues={StaffEditInitialValues(initialValues)}
        fetchValues={fetchValues}
        submitFunction={updateStaff}
        type="edit"
        validation={StaffEditValidation}
        profileLink={staff.LIST}
        userType="staff"
      />{' '}
    </>
  ) : (
    <h1>do not have permission</h1>
  );
});

export default EditStaff;
