import { getGender } from "../../../../../../config/utils/profileConstant";

export const TeacherEditInitialValues = (user) => {
    return {
      id: user?.id ? user?.id : null,
      firstName: user?.firstName ? user.firstName : '',
      lastName: user?.lastName ? user.lastName : '',
      pic: user?.pic ? user.pic : '',
      username: user?.username ? user.username : '',
      dob: user?.profile?.dob ? user?.profile?.dob : '2000-05-02',
      fatherName: user?.profile?.fatherName ? user?.profile?.fatherName : '',
      motherName: user?.profile?.motherName ? user?.profile?.motherName : '',
      phoneNumber:user?.phoneNumber ? user.phoneNumber : '',
      emergencyNumber:user?.profile?.emergencyNumber ? user?.profile?.emergencyNumber : '',
      sibling: user?.profile?.sibling ? user?.profile?.sibling : '',
      gender: user?.profile?.gender ? getGender(user?.profile?.gender) : getGender(0),
      nickName: user?.profile?.nickName ? user.profile?.nickName : '',
      description: user?.profile?.description ? user.profile?.description : '',
      address1: user?.address?.address1 ? user.address?.address1 : '',
      address2: user?.address?.address2 ? user.address?.address2 : '',
      country: user?.address?.country ? user.address?.country : '',
      state: user?.address?.state ? user.address?.state : '',
      city: user?.address?.city ? user.address?.city : '',
      zipCode: user?.address?.zipCode ? user.address?.zipCode : '',
      facebook:user?.ProfileDetails?.facebook ? user?.ProfileDetails?.facebook : '',
      instagram:user?.ProfileDetails?.instagram ? user?.ProfileDetails?.instagram : '',
      linkedIn:user?.ProfileDetails?.linkedIn ? user?.ProfileDetails?.linkedIn : '',
      twitter:user?.ProfileDetails?.twitter ? user?.ProfileDetails?.twitter : '',
      gmail:user?.ProfileDetails?.gmail ? user?.ProfileDetails?.gmail : '',
      youtube:user?.ProfileDetails?.youtube ? user?.ProfileDetails?.youtube : '',
      refrenceVideo:user?.ProfileDetails?.refrenceVideo ? user?.ProfileDetails?.refrenceVideo : '',
      skill:user?.ProfileDetails?.skill ? user?.ProfileDetails?.skill : '',
      details:user?.ProfileDetails?.details ? user?.ProfileDetails?.details : '',
      picture:user?.ProfileDetails?.picture ? user?.ProfileDetails?.picture : '',
      profession:user?.ProfileDetails?.profession ? user?.ProfileDetails?.profession : '',
      expirience:user?.ProfileDetails?.expirience ? user?.ProfileDetails?.expirience : '',
      backgroundPicture:user?.ProfileDetails?.backgroundPicture ? user?.ProfileDetails?.backgroundPicture : '',
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

export const TeacherCreateInitialValues = (user) => {
    return {
      firstName: user?.firstName ? user.firstName : '',
      lastName: user?.lastName ? user.lastName : '',
      pic: user?.pic ? user.pic : '',
      username: user?.username ? user.username : '',
      dob: user?.profile?.dob ? user?.profile?.dob : '2000-05-02',
      fatherName: user?.profile?.fatherName ? user?.profile?.fatherName : '',
      motherName: user?.profile?.motherName ? user?.profile?.motherName : '',
      sibling: user?.profile?.sibling ? user?.profile?.sibling : '',
      password:'',
      confirm_password:'',
      phoneNumber:user?.phoneNumber ? user.phoneNumber : '',
      emergencyNumber:user?.emergencyNumber ? user.emergencyNumber : '',
      gender: user?.profile?.gender ? getGender(user?.profile?.gender) : getGender(0),
      nickName: user?.profile?.nickName ? user.profile?.nickName : '',
      description: user?.profile?.description ? user.profile?.description : '',
      address1: user?.address?.address1 ? user.address?.address1 : '',
      address2: user?.address?.address2 ? user.address?.address2 : '',
      country: user?.address?.address2 ? user.address?.address2 : '',
      state: user?.address?.address2 ? user.address?.address2 : '',
      city: user?.address?.address2 ? user.address?.address2 : '',
      zipCode: user?.address?.zipCode ? user.address?.zipCode : '',
      facebook:user?.ProfileDetails?.facebook ? user?.ProfileDetails?.facebook : '',
      instagram:user?.ProfileDetails?.instagram ? user?.ProfileDetails?.instagram : '',
      gmail:user?.ProfileDetails?.gmail ? user?.ProfileDetails?.gmail : '',
      linkedIn:user?.ProfileDetails?.linkedIn ? user?.ProfileDetails?.linkedIn : '',
      twitter:user?.ProfileDetails?.twitter ? user?.ProfileDetails?.twitter : '',
      youtube:user?.ProfileDetails?.youtube ? user?.ProfileDetails?.youtube : '',
      refrenceVideo:user?.ProfileDetails?.refrenceVideo ? user?.ProfileDetails?.refrenceVideo : '',
      skill:user?.ProfileDetails?.skill ? user?.ProfileDetails?.skill : '',
      details:user?.ProfileDetails?.details ? user?.ProfileDetails?.details : '',
      profession:user?.ProfileDetails?.profession ? user?.ProfileDetails?.profession : '',
      expirience:user?.ProfileDetails?.expirience ? user?.ProfileDetails?.expirience : '',
      picture:user?.ProfileDetails?.picture ? user?.ProfileDetails?.picture : '',
      backgroundPicture:user?.ProfileDetails?.backgroundPicture ? user?.ProfileDetails?.backgroundPicture : '',
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


  export const columns = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'username',
      numeric: false,
      disablePadding: false,
      label: 'UserName',
      align: 'left',
    },
    {
      id: 'gender',
      numeric: false,
      disablePadding: false,
      label: 'Gender',
      align: 'left',
      width:'150px'
    },
    {
      id: 'phonenumber',
      numeric: false,
      disablePadding: false,
      label: 'PhoneNumber',
      align: 'left',
    },
    {
      id: 'dob',
      numeric: false,
      disablePadding: false,
      label: 'DOB',
      align: 'left',
    },
    {
      id: 'fatherName',
      numeric: false,
      disablePadding: false,
      label: 'Father Name',
      align: 'left',
    },
    {
      id: 'motherName',
      numeric: false,
      disablePadding: false,
      label: 'MotherName',
      align: 'left',
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
    { label: 'Status', value: 'status' }
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