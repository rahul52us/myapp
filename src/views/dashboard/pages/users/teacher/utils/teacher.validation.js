import * as Yup from 'yup';

export const TeacherEditValidation = Yup.object({
  username: Yup.string()
    .min(4, 'user name should be minimum of 4 word')
    .max(80, 'user name should not be greature than 80 word')
    .required('user name is required')
    .typeError('user name is required'),
  firstName: Yup.string()
    .min(1, 'First Name should be minimum of 1 word')
    .max(50, 'First Name should not be greature than 50 word')
    .trim('only space is not allowed')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(1, 'Last Name should be minimum of 1 word')
    .max(50, 'Last Name should not be greature than 50 word')
    .trim('only space is not allowed')
    .required('Last Name is required'),
  fatherName: Yup.string()
    .min(1, 'Father Name should be minimum of 1 word')
    .max(50, 'Father Name should not be greature than 50 word')
    .trim('only space is not allowed')
    .required('father Name is required'),
  motherName: Yup.string()
    .min(1, 'mother Name should be minimum of 1 word')
    .max(50, 'mother Name should not be greature than 50 word')
    .trim('only space is not allowed')
    .required('mother Name is required'),
  nickName: Yup.string()
    .min(1, 'nick Name should be minimum of 1 word')
    .max(50, 'nick Name should not be greature than 50 word')
    .trim('only space is not allowed')
    .required('nick Name is required'),
  sibling: Yup.number().required('slibling is required').typeError('please enter a valid number'),
  phoneNumber: Yup.string()
    .trim()
    .min(10)
    .max(20)
    .required('phone number is required')
    .typeError('phone number is required'),
  emergencyNumber: Yup.string().min(10).max(20),
  address1: Yup.string()
    .trim()
    .min(3, 'address 1 should be of 3 character')
    .required()
    .typeError('address 1 is required'),
  zipCode: Yup.string()
    .trim()
    .min(2, 'Zip Code should be of 2 character')
    .required()
    .typeError('Zip Code is required'),
  gender: Yup.object().required('please select the gender').typeError('please select the gender'),
  country: Yup.string().trim().required('country is required').typeError('country is required'),
  state: Yup.string().trim().required('state is required').typeError('state is required'),
  city: Yup.string().trim().required('city is required').typeError('city is required'),
  dob: Yup.string()
    .required('please select the date of birth')
    .typeError('please select the date of birth'),
  facebook: Yup.string().url('please enter the valid url').typeError('please provide a valid url'),
  instagram: Yup.string().url('please enter the valid url').typeError('please provide a valid url'),
  twitter: Yup.string().url('please enter the valid url').typeError('please provide a valid url'),
  linkedIn: Yup.string().url('please enter the valid url').typeError('please provide a valid url'),
  gmail: Yup.string().url('please enter the valid url').typeError('please provide a valid url'),
  youtube: Yup.string().url('please enter the valid url').typeError('please provide a valid url'),
  refrenceVideo: Yup.string()
    .url('please enter the valid url')
    .typeError('please provide a valid url'),
  skill: Yup.string()
    .max(200, 'max 1200 characters are allowed')
    .typeError('please provide a correct skill'),
  details: Yup.string()
    .max(1200, 'max 1200 characters are allowed')
    .typeError('please provide a correct details'),
  picture: Yup.string(),
  backgroundPicture: Yup.string(),
  profession: Yup.string(),
  expirience: Yup.string(),
});

export const TeacherCreateValidation = Yup.object({
  username: Yup.string()
    .min(4, 'user name should be minimum of 4 word')
    .max(80, 'user name should not be greature than 80 word')
    .required('user name is required')
    .typeError('user name is required'),
  firstName: Yup.string()
    .min(1, 'First Name should be minimum of 1 word')
    .max(50, 'First Name should not be greature than 50 word')
    .trim('only space is not allowed')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(1, 'Last Name should be minimum of 1 word')
    .max(50, 'Last Name should not be greature than 50 word')
    .trim('only space is not allowed')
    .required('Last Name is required'),
  fatherName: Yup.string()
    .min(1, 'Father Name should be minimum of 1 word')
    .max(50, 'Father Name should not be greature than 50 word')
    .trim('only space is not allowed')
    .required('father Name is required'),
  motherName: Yup.string()
    .min(1, 'mother Name should be minimum of 1 word')
    .max(50, 'mother Name should not be greature than 50 word')
    .trim('only space is not allowed')
    .required('mother Name is required'),
  nickName: Yup.string()
    .min(1, 'nick Name should be minimum of 1 word')
    .max(50, 'nick Name should not be greature than 50 word')
    .trim('only space is not allowed')
    .required('nick Name is required'),
  password: Yup.string()
    .min(1, 'password is required')
    .max(50, 'password is required')
    .trim('only space is not allowed')
    .required('password is required'),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
  sibling: Yup.number().required('slibling is required').typeError('please enter a valid number'),
  phoneNumber: Yup.string()
    .trim()
    .min(10)
    .max(20)
    .required('phone number is required')
    .typeError('phone number is required'),
  emergencyNumber: Yup.string().trim().min(10).max(20),
  address1: Yup.string()
    .trim()
    .min(3, 'address 1 should be of 3 character')
    .required()
    .typeError('address 1 is required'),
  zipCode: Yup.string()
    .trim()
    .min(2, 'Zip Code should be of 2 character')
    .required()
    .typeError('Zip Code is required'),
  gender: Yup.object().required('please select the gender').typeError('please select the gender'),
  country: Yup.string().trim().required('country is required').typeError('country is required'),
  state: Yup.string().trim().required('state is required').typeError('state is required'),
  city: Yup.string().trim().required('city is required').typeError('city is required'),
  dob: Yup.string()
    .required('please select the date of birth')
    .typeError('please select the date of birth'),
  facebook: Yup.string().url('please enter the valid url').typeError('please provide a valid url'),
  instagram: Yup.string().url('please enter the valid url').typeError('please provide a valid url'),
  twitter: Yup.string().url('please enter the valid url').typeError('please provide a valid url'),
  linkedIn: Yup.string().url('please enter the valid url').typeError('please provide a valid url'),
  youtube: Yup.string().url('please enter the valid url').typeError('please provide a valid url'),
  gmail: Yup.string().url('please enter the valid url').typeError('please provide a valid url'),
  refrenceVideo: Yup.string()
    .url('please enter the valid url')
    .typeError('please provide a valid url'),
  skill: Yup.string()
    .max(200, 'max 1200 characters are allowed')
    .typeError('please provide a correct skill'),
  details: Yup.string()
    .max(1200, 'max 1200 characters are allowed')
    .typeError('please provide a correct details'),
  picture: Yup.string(),
  backgroundPicture: Yup.string(),
  profession: Yup.string(),
  expirience: Yup.string(),
});
