import * as Yup from 'yup';

export const LoginValidation = Yup.object({
  username: Yup.string().min(4,'Invalid username').trim().required('username is required').typeError('Invalid username'),
  password: Yup.string().min(4,'Incorrect password').trim().required('password is required').typeError('Incorrect password'),
  remember_me : Yup.string().required('please tick this checkbox').typeError('please tick this checkbox')
});

export const ForgotValidation = Yup.object({
  username: Yup.string().min(4,'Invalid username').trim().required('username is required').typeError('Invalid username')
})

export const RegisterValidation = Yup.object({
  firstName: Yup.string().min(2,'Minimum 2 character of First Name').trim().required('First Name is required').typeError('Invalid First Name'),
  lastName: Yup.string().min(2,'Minimum 2 character of Last Name').trim().required('Last Name is required').typeError('Invalid Last Name'),
  username: Yup.string().min(4,'Invalid username').trim().required('username is required').typeError('Invalid username'),
  password: Yup.string().min(4,'Incorrect password').trim().required('password is required').typeError('Incorrect password'),
  remember_me : Yup.string().required('please tick this checkbox').typeError('please tick this checkbox')
});
