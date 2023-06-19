import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import ComponentTitle from '../../common/component/ComponentTitle';
import CustomInput from '../../../../../../component/Input/Input';
import CustomPaper from '../../../../../../component/Paper/Paper';
import styled from 'styled-components';

const ContactFormContainer = observer(() => {
  return (
    <Grid container mt={3} columnSpacing={2} rowSpacing={2}>
      <Grid item xl={7} xxl={7} md={6} sm={12} xs={12}>
        <ContactImageContainer>
          <img src="http://localhost:3000/static/media/login.7cc526d27f42d7eb6d7f.png" alt="" />
        </ContactImageContainer>
      </Grid>
      <Grid item xl={5} xxl={5} md={6} sm={12} xs={12}>
        <CustomPaper sx={{ padding: '1rem' }} elevation={3}>
          <ComponentTitle title="Contact Form" proSubTitle="This is pro sub title" />
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xl={12} sm={12} xs={12}>
              <CustomInput type="text" placeholder="Enter The Name" required={true} label="Name" />
            </Grid>
            <Grid item xl={12} sm={12} xs={12}>
              <CustomInput
                type="email"
                placeholder="Enter The Email"
                required={true}
                label="Email"
              />
            </Grid>
            <Grid item xl={12} sm={12} xs={12}>
              <CustomInput
                type="text"
                placeholder="Message"
                required={true}
                label="Message"
                rows={4}
                multiline
              />
            </Grid>
          </Grid>
        </CustomPaper>
      </Grid>
    </Grid>
  );
});

export default ContactFormContainer;

const ContactImageContainer = styled.div`
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
