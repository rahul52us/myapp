import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types';
import moment from 'moment';
import Typography from '../../../../../component/Typography/Typography';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TestimonialCard = ({ item, setDelete , setEditTestimonial}) => {
  const [isLoading, setIsLoading] = React.useState(true); // Track image loading state
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };


  return (
    <Card
      sx={{
        flexShrink: 0,
        margin: 1,
      }}
    >
      <CardHeader
        avatar={
          <Avatar src={item?.pic} aria-label="recipe" onLoad={handleImageLoad} onError={handleImageError}>
            {isLoading && item?.pic && <CircularProgress />}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item?.name}
        subheader={item?.createdAt && moment(item?.createdAt).format('DD-MM-YYYY')}
      />

     <CardContent>
      <Typography variant="body2" color="text.secondary">
         Profession - {item?.profession}
        </Typography>
      </CardContent>
      <CardContent sx={{ minHeight: '150px' }}>
        <Typography variant="body2" color="text.secondary" style={{wordBreak:'break-all'}}>
          {item?.description?.substring(0, 300)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => setEditTestimonial(item)}>
          <EditOutlined />
        </IconButton>
        <IconButton aria-label="share" onClick={() => setDelete(item)}>
          <DeleteOutline />
        </IconButton>
        <ExpandMore
          expand={expanded ? 'true' : null}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description :</Typography>
          <Typography paragraph style={{wordBreak:'break-all'}}>{item.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

TestimonialCard.propTypes = {
  item: PropTypes.object,
  setDelete: PropTypes.func.isRequired,
  setEditTestimonial: PropTypes.func.isRequired
};

export default TestimonialCard;
