import React, { useEffect, useState } from 'react';
import Profile from '../profile';
import { observer } from 'mobx-react-lite';
import store from '../../store/store';
import { ProfileValidation } from '../../config/utils/validation/profileValidation';
import { ProfiieInitialValues } from '../../config/utils/profileConstant';

const UserProfile = observer(() => {
  const [fetchValues, setFetchValues] = useState(false);
  const [initialValues, setInitialValues] = useState(null);
  const {
    auth: { user, updateUserProfile },
  } = store;

  useEffect(() => {
    if (user) {
      setInitialValues(ProfiieInitialValues(user));
      setFetchValues(true);
    }
  }, [user]);

  return (
    <Profile
      setInitialValues={setInitialValues}
      initialValues={initialValues}
      user={user}
      fetchValues={fetchValues}
      setFetchValues={setFetchValues}
      submitFunction={updateUserProfile}
      type="edit"
      validation={ProfileValidation}
      userType={user?.adminType}
      profileLink="/"
    />
  );
});

export default UserProfile;
