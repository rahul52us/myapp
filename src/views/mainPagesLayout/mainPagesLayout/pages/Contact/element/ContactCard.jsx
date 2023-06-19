import { Grid, Icon, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import CustomCard from '../../../../../../component/Card/Card';
import { AddRounded, EmailOutlined, HeadphonesOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Typography from '../../../../../../component/Typography/Typography';

const ContactCustomCard = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <CustomCard>
      <Grid container>
        <Grid item xl={12} xxl={12} md={12} sm={12} xs={12}>
          <Icon sx={{ width: '50px', height: '50px', color: theme.palette.primary.buttonColor }}>
            {icon}
          </Icon>
        </Grid>
        <Grid item xl={12} xxl={12} md={12} sm={12} xs={12} mt={1}>
          <Typography variant="h6" style={{ fontWeight: 'bold',fontSize:'1rem'}}>
            {title}
          </Typography>
        </Grid>
        <Grid item mt={1}>
          {subTitle.map((it, index) => {
            return <Typography key={index} style={{fontSize:'0.95rem'}}>{it}</Typography>;
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
          subTitle={['5678 Bangla Main Road, cities 580 GBnagla, example 54786']}
          icon={<HeadphonesOutlined sx={{ fontSize: '3.2rem' }} />}
        />
      </Grid>
      <Grid item xl={4} xxl={4} md={4} sm={12} xs={12}>
        <ContactCustomCard
          title="Our Email Address"
          subTitle={['5678 Bangla Main Road','cities 580 GBnagla, example 54786']}
          icon={<EmailOutlined sx={{ fontSize: '3.2rem' }} />}
        />
      </Grid>
      <Grid item xl={4} xxl={4} md={4} sm={12} xs={12}>
        <ContactCustomCard
          title="Our Location"
          icon={
            <AddRounded sx={{ fontSize: '3.2rem' }} />
          }
          subTitle={['5678 Bangla Main Road, cities 580 GBnagla, example 54786']}
        />
      </Grid>
    </Grid>
  );
});

export default ContactCard;
