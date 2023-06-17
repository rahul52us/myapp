import { Grid, Icon, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import CustomCard from '../../../../../../component/Card/Card';
import { AddRounded, EmailOutlined, HeadphonesOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Typography from '../../../../../../component/Typography/Typography';

const ContactCustomCard = ({ icon, title, subTitle }) => {

  console.log(subTitle)
  const theme = useTheme();
  return (
    <CustomCard>
      <Grid container p={2}>
        <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
          <Icon sx={{ width: '60px', height: '60px', color: theme.palette.primary.buttonColor }}>
            {icon}
          </Icon>
        </Grid>
        <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
        </Grid>
        <Grid>
          {subTitle.map((it, index) => {
            return <Typography key={index}>{it}</Typography>;
          })}
        </Grid>
      </Grid>
    </CustomCard>
  );
};

ContactCustomCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.array.isRequired,
};

const ContactCard = observer(() => {
  return (
    <Grid container columnSpacing={4} rowSpacing={2} mt={3}>
      <Grid item xl={4} xxl={4} md={4} sm={12} xs={12}>
        <ContactCustomCard
          title="Contact Phone Number"
          icon={<HeadphonesOutlined sx={{ fontSize: '3.2rem' }} subTitle={[]} />}
        />
      </Grid>
      <Grid item xl={4} xxl={4} md={4} sm={12} xs={12}>
        <ContactCustomCard
          title="Our Email Address"
          icon={<EmailOutlined sx={{ fontSize: '3.2rem' }} subTitle={[]} />}
        />
      </Grid>
      <Grid item xl={4} xxl={4} md={4} sm={12} xs={12}>
        <ContactCustomCard
          title="Our Location"
          icon={
            <AddRounded
              sx={{ fontSize: '3.2rem' }}
              subTitle={['5678 Bangla Main Road, cities 580 GBnagla, example 54786']}
            />
          }
        />
      </Grid>
    </Grid>
  );
});

export default ContactCard;
