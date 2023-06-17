import { ChairAltOutlined } from '@mui/icons-material';
import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import React from 'react';
import Tooltip from '../Tooltip/Tooltip';
import Typography from '../Typography/Typography';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CustomCard = ({ title, link , subtitle, children, action, ...rest }) => {
  const navigate = useNavigate()
  return (
    <Card
      sx={{
        flexShrink: 0,
      }}
      {...rest}
    >
      {(action || title || subtitle) && (
        <CardHeader
          title={title && <Typography variant="h6" onClick={() => navigate(link)}>{title}</Typography>}
          subheader={subtitle && <Typography>{subtitle}</Typography>}
          action={
            action && (
              <Tooltip title="click me">
                <IconButton sx={{ width: 50, height: 50, p: 1 }}>
                  <ChairAltOutlined sx={{ borderRadius: 50, width: 30, height: 30 }} />
                </IconButton>
              </Tooltip>
            )
          }
        />
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
};

CustomCard.defaultProps = {
  title: '',
  subtitle: '',
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node,
  action: PropTypes.element,
};

export default CustomCard;
