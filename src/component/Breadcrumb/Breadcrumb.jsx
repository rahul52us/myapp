import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
// import GrainIcon from '@mui/icons-material/Grain';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function handleClick(event) {
  event.preventDefault();
}

const CustomBreadcrumbs = ({ data = [] , ...rest }) => {
  const navigate = useNavigate();
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{marginBottom : '20px', ...rest}}>
        {data.map((item, index) => {
          return item.link ? (
            <Link
              key={index}
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center', ...rest }}
              color="inherit"
              href="/"
              onClick={() => navigate(item.link)}
            >
              <HomeIcon sx={{ mr: 0.5, ...rest }} fontSize="inherit" />
               {item.title}
            </Link>
          ) : (
            <Link
              key={index}
              sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' , ...rest }}
              color="inherit"
            >
              {item.title}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

CustomBreadcrumbs.propTypes = {
  data: PropTypes.array,
};

export default CustomBreadcrumbs;
