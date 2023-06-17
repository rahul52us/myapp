import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import CustomSkeleton from './LineSkeleton';

const SkeletanCard = () => {
  return (
    <Card
      sx={{
        flexShrink: 0,
        margin: 1,
      }}
    >
      <CardHeader
        avatar={<CustomSkeleton style={{ width: '60px', height: '60px', borderRadius: '100%' }} />}
        action={
          <IconButton aria-label="settings">
            <CustomSkeleton style={{ width: '5px', height: '50px', borderRadius: '100%' }} />
          </IconButton>
        }
        title={<CustomSkeleton style={{ width: '180px' }} />}
        subheader={<CustomSkeleton style={{ width: '100px' }} />}
      />
      <CardContent sx={{ minHeight: '150px' }}>
        {[...Array(5)].map((_, i) => {
          return <CustomSkeleton key={i} style={{ width: '100%' }} />;
        })}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <CustomSkeleton style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
        </IconButton>
        <IconButton aria-label="share">
          <CustomSkeleton style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default SkeletanCard;
