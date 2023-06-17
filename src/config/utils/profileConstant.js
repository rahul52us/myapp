export const genders = [
  { value: 0, label: 'Male' },
  { value: 1, label: 'Female' },
  { value: 2, label: 'Transgender' },
];

export const standards = [
  { value: 13, label: 'Nursary' },
  { value: 14, label: 'L.K.G' },
  { value: 15, label: 'U.K.G' },
  { value: 1, label: 'Class 1' },
  { value: 2, label: 'Class 2' },
  { value: 3, label: 'Class 3' },
  { value: 4, label: 'Class 4' },
  { value: 5, label: 'Class 5' },
  { value: 6, label: 'Class 6' },
  { value: 7, label: 'Class 7' },
  { value: 8, label: 'Class 8' },
  { value: 9, label: 'Class 9' },
  { value: 10, label: 'Class 10' },
  { value: 11, label: 'Class 11' },
  { value: 12, label: 'Class 12' },
];

export const Medium = [
  { value: 0, label: 'English' },
  { value: 1, label: 'Hindi' },
  { value: 2, label: 'Other' },
];

export const getStandards = (value) => {
  var standard = standards.filter((item) => item.value == value);
  if (standard.length === 1) {
    return standard[0];
  } else {
    return '';
  }
};

export const getGender = (value) => {
  var gender = genders.filter((item) => item.value == value);
  if (gender.length === 1) {
    return gender[0];
  } else {
    return '';
  }
};

export const getMedium = (value) => {
  var med = Medium.filter((item) => item.value == value);
  if (med.length === 1) {
    return med[0];
  } else {
    return '';
  }
};

export const ProfiieInitialValues = (user) => {
  return {
    id: user?.id ? user?.id : null,
    firstName: user?.firstName ? user.firstName : '',
    lastName: user?.lastName ? user.lastName : '',
    pic: user?.pic ? user.pic : '',
    username: user?.username ? user.username : '',
    password: user?.password ? user.password : '',
    confirm_password: user?.confirm_password ? user?.confirm_password : '',
    dob: user?.profile?.dob ? user?.profile?.dob : '2000-05-02',
    phoneNumber: user?.phoneNumber ? user.phoneNumber : '',
    emergencyNumber: user?.profile?.emergencyNumber ? user?.profile?.emergencyNumber : '',
    fatherName: user?.profile?.fatherName ? user?.profile?.fatherName : '',
    motherName: user?.profile?.motherName ? user?.profile?.motherName : '',
    sibling: user?.profile?.sibling ? user?.profile?.sibling : '',
    standard: user?.profile?.standard ? getStandards(user?.profile?.standard) : getStandards(1),
    gender: user?.profile?.gender ? getGender(user?.profile?.gender) : getGender(0),
    medium: user?.profile?.medium ? getMedium(user.profile?.medium) : getMedium(0),
    nickName: user?.profile?.nickName ? user.profile?.nickName : '',
    description: user?.profile?.description ? user.profile?.description : '',
    address1: user?.address?.address1 ? user.address?.address1 : '',
    address2: user?.address?.address2 ? user.address?.address2 : '',
    country: user?.address?.country ? user.address?.country : '',
    state: user?.address?.state ? user.address?.state : '',
    city: user?.address?.city ? user.address?.city : '',
    zipCode: user?.address?.zipCode ? user.address?.zipCode : '',
    facebook: user?.ProfileDetails?.facebook ? user?.ProfileDetails?.facebook : '',
    instagram: user?.ProfileDetails?.instagram ? user?.ProfileDetails?.instagram : '',
    linkedIn: user?.ProfileDetails?.linkedIn ? user?.ProfileDetails?.linkedIn : '',
    twitter: user?.ProfileDetails?.twitter ? user?.ProfileDetails?.twitter : '',
    youtube: user?.ProfileDetails?.youtube ? user?.ProfileDetails?.youtube : '',
    gmail: user?.ProfileDetails?.gmail ? user?.ProfileDetails?.gmail : '',
    refrenceVideo: user?.ProfileDetails?.refrenceVideo ? user?.ProfileDetails?.refrenceVideo : '',
    profession: user?.ProfileDetails?.profession ? user?.ProfileDetails?.profession : '',
    expirience: user?.ProfileDetails?.expirience ? user?.ProfileDetails?.expirience : '',
    skill: user?.ProfileDetails?.skill ? user?.ProfileDetails?.skill : '',
    details: user?.ProfileDetails?.details ? user?.ProfileDetails?.details : '',
    picture: user?.ProfileDetails?.picture ? user?.ProfileDetails?.picture : '',
    backgroundPicture: user?.ProfileDetails?.backgroundPicture
      ? user?.ProfileDetails?.backgroundPicture
      : '',
    permission: {
      student: user?.permission?.student ? user?.permission?.student : [false, false, false, false],
      teacher: user?.permission?.teacher ? user?.permission?.teacher : [false, false, false, false],
      permission: user?.permission?.permission
        ? user?.permission?.permission
        : [false, false, false, false],
        staff: user?.permission?.staff ? user?.permission?.staff : [false, false, false, false],
        changeStatus: user?.permission?.changeStatus ? user?.permission?.changeStatus : [false],
        dashboard:user?.permission?.dashboard ? user?.permission?.dashboard : [false],
    },
  };
};
