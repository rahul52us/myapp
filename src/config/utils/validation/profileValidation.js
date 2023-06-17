import * as Yup from 'yup';

export const ProfileValidation = Yup.object({
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
  sibling: Yup.number()
    .required('slibling is required').typeError('please enter a valid number'),
  standard: Yup.object()
    .required('please select the standard')
    .typeError('please select the standard'),
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
  dob: Yup.string()
    .required('please select the date of birth')
    .typeError('please select the date of birth'),
});
