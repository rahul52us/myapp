import React, { useState } from 'react';
import { Collapse, Typography, Box, Icon } from '@mui/material';
import { PlusOne } from '@mui/icons-material';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const CollapsibleSection = observer(({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(
    () => item.pathname === JSON.parse(localStorage.getItem('selectedMenu'))?.parent,
  );
  const [selectedChildren, setSelectedChildren] = useState(() =>
    JSON.parse(localStorage.getItem('selectedMenu')),
  );

  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const handleChildClick = (child) => {
    navigate(child.pathname);
    setSelectedChildren(null);
    localStorage.removeItem('selectedMenu');
    localStorage.setItem(
      'selectedMenu',
      JSON.stringify({ parent: child.parent, children: child.pathname }),
    );
    setSelectedChildren({ parent: child.parent, children: child.pathname });
  };

  return item.heading ? (
    <Typography ml={1.2} mt={0.8} mb={0.8} sx={{ fontSize: '0.9rem' }}>
      {item.title}
    </Typography>
  ) : (
    <>
      <MainContaier
        p={1}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '5px',
        }}
        mb={1}
        onClick={() => {
          handleToggle();
          if (!item.children?.length) {
            navigate(item.pathname);
          }
        }}
        selectedChildren={
          item.children ? selectedChildren?.parent : location.pathname || location.pathname
        }
        pathItem={item}
      >
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon sx={{ marginRight: '1rem' }} className="rightIcon">{item.icon}</Icon>
          {item?.title}
        </Typography>
        {item.children?.length ? <PlusOne /> : <span>p</span>}
      </MainContaier>
      <Collapse in={expanded}>
        <Box sx={{ marginLeft: '2.1rem' }}>
          {item.children?.map((child) => (
            <ChildMainContainer
              key={child.key}
              location={location.pathname}
              pathname={child.pathname}
              child={child}
              handleChildClick={handleChildClick}
            />
          ))}
        </Box>
      </Collapse>
    </>
  );
});

CollapsibleSection.propTypes = {
  item: PropTypes.shape({
    heading: PropTypes.bool,
    title: PropTypes.string,
    pathname: PropTypes.string,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        pathname: PropTypes.string,
        title: PropTypes.string,
        parent: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default CollapsibleSection;

const MainContaier = styled(Box)`
  && {
    background-color: ${(props) =>
      props.selectedChildren === props.pathItem?.parent ? '#dee2e6' : ''};
    &:hover {
      background-color: #dee2e6;
      cursor: pointer;
    }
    .rightIcon {
      color: gray;
    }
  }
`;

const ChildMainContainer = ({ location, pathname, child, handleChildClick }) => {
  const handleChildItemClick = () => {
    handleChildClick(child);
  };

  return (
    <ChildMainContainerWrapper location={location} pathname={pathname}>
      <Typography
        variant="body1"
        key={child.key}
        className="child_container"
        onClick={handleChildItemClick}
      >
        <ChildrenItem>{child.title}</ChildrenItem>
      </Typography>
    </ChildMainContainerWrapper>
  );
};

ChildMainContainer.propTypes = {
  location: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  child: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    title: PropTypes.string,
    parent: PropTypes.string,
  }).isRequired,
  handleChildClick: PropTypes.func.isRequired,
};

const ChildMainContainerWrapper = styled.div`
  .child_container {
    padding: 0.6rem;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${(props) => (props.location === props.pathname ? '#dee2e6' : '')};
    &:hover {
      background-color: #dee2e6;
    }
  }
`;

const ChildrenItem = styled(Link)`
  && {
    color: rgb(91, 98, 107);
    font-size: 0.9rem;
    text-decoration: none;
  }
`;
