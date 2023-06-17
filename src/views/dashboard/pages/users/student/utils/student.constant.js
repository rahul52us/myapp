import { getMedium } from '../../../../../../config/utils/profileConstant';
import { getGender } from '../../../../../../config/utils/profileConstant';
import { getStandards } from '../../../../../../config/utils/profileConstant';
import * as moment from 'moment';

export const StudentEditInitialValues = (user) => {
  return {
    id: user?.id ? user?.id : null,
    firstName: user?.firstName ? user.firstName : '',
    lastName: user?.lastName ? user.lastName : '',
    pic: user?.pic ? user.pic : '',
    username: user?.username ? user.username : '',
    dob: user?.profile?.dob ? user?.profile?.dob : '2000-05-02',
    fatherName: user?.profile?.fatherName ? user?.profile?.fatherName : '',
    motherName: user?.profile?.motherName ? user?.profile?.motherName : '',
    phoneNumber: user?.phoneNumber ? user.phoneNumber : '',
    emergencyNumber: user?.profile?.emergencyNumber ? user?.profile?.emergencyNumber : '',
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
      dashboard: user?.permission?.dashboard ? user?.permission?.dashboard : [false],
    },
  };
};

export const StudentCreateInitialValues = (user) => {
  return {
    firstName: user?.firstName ? user.firstName : '',
    lastName: user?.lastName ? user.lastName : '',
    pic: user?.pic ? user.pic : '',
    username: user?.username ? user.username : '',
    dob: user?.profile?.dob ? user?.profile?.dob : '2000-05-02',
    fatherName: user?.profile?.fatherName ? user?.profile?.fatherName : '',
    motherName: user?.profile?.motherName ? user?.profile?.motherName : '',
    sibling: user?.profile?.sibling ? user?.profile?.sibling : '',
    password: '',
    confirm_password: '',
    startYear: moment().format('YYYY-MM-DD'),
    endYear: moment().add(1, 'year').format('YYYY-MM-DD'),
    phoneNumber: user?.phoneNumber ? user.phoneNumber : '',
    emergencyNumber: user?.emergencyNumber ? user.emergencyNumber : '',
    standard: user?.profile?.standard ? getStandards(user?.profile?.standard) : getStandards(1),
    gender: user?.profile?.gender ? getGender(user?.profile?.gender) : getGender(0),
    medium: user?.profile?.medium ? getMedium(user.profile?.medium) : getMedium(0),
    nickName: user?.profile?.nickName ? user.profile?.nickName : '',
    description: user?.profile?.description ? user.profile?.description : '',
    address1: user?.address?.address1 ? user.address?.address1 : '',
    address2: user?.address?.address2 ? user.address?.address2 : '',
    country: user?.address?.address2 ? user.address?.address2 : '',
    state: user?.address?.address2 ? user.address?.address2 : '',
    city: user?.address?.address2 ? user.address?.address2 : '',
    zipCode: user?.address?.zipCode ? user.address?.zipCode : '',
    facebook: user?.ProfileDetails?.facebook ? user?.ProfileDetails?.facebook : '',
    instagram: user?.ProfileDetails?.instagram ? user?.ProfileDetails?.instagram : '',
    linkedIn: user?.ProfileDetails?.linkedIn ? user?.ProfileDetails?.linkedIn : '',
    twitter: user?.ProfileDetails?.twitter ? user?.ProfileDetails?.twitter : '',
    youtube: user?.ProfileDetails?.youtube ? user?.ProfileDetails?.youtube : '',
    gmail: user?.ProfileDetails?.gmail ? user?.ProfileDetails?.gmail : '',
    refrenceVideo: user?.ProfileDetails?.refrenceVideo ? user?.ProfileDetails?.refrenceVideo : '',
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
      dashboard: user?.permission?.dashboard ? user?.permission?.dashboard : [false],
    },
  };
};

export const columns = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
    width: '200px',
  },
  {
    id: 'username',
    numeric: false,
    disablePadding: false,
    label: 'UserName',
    align: 'left',
    width: '230px',
  },
  {
    id: 'gender',
    numeric: false,
    disablePadding: false,
    label: 'Gender',
    align: 'left',
    width: '130px',
  },
  {
    id: 'phonenumber',
    numeric: false,
    disablePadding: false,
    label: 'PhoneNumber',
    align: 'left',
    width: '200px',
  },
  {
    id: 'standard',
    numeric: true,
    disablePadding: false,
    label: 'Class',
    align: 'left',
    width: '150px',
  },
  {
    id: 'dob',
    numeric: false,
    disablePadding: false,
    label: 'DOB',
    align: 'left',
    width: '160px',
  },
  {
    id: 'fatherName',
    numeric: false,
    disablePadding: false,
    label: 'Father Name',
    align: 'left',
    width: '200px',
  },
  {
    id: 'motherName',
    numeric: false,
    disablePadding: false,
    label: 'MotherName',
    align: 'left',
    width: '180px',
  },
  {
    id: 'actions',
    numeric: false,
    disablePadding: false,
    label: 'Actions',
    align: 'center',
  },
];

export const filterOptions = [
  { label: 'Status', value: 'status' },
  { label: 'Standard', value: 'standard' },
  { label: 'Date Range', value: 'date_range' },
];

export const statusOptions = [
  {
    value: 'ACCEPTED',
    label: 'ACCEPTED',
  },
  {
    value: 'REJECTED',
    label: 'REJECTED',
  },
];
