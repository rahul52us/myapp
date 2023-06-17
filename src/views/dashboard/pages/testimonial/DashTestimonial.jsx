import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import CustomBreadcrumbs from '../../../../component/Breadcrumb/Breadcrumb';
import Title from '../../../../component/DocumentTitle/Title';
import { CircularProgress, Grid } from '@mui/material';
import { useEffect } from 'react';
import store from '../../../../store/store';
import TestimonialCard from './component/TestimonialCard';
import DeleteTestimonial from './component/DeleteTestimonial';
import SkeletanCard from '../../../../component/LineSkeleton/SkeletanCard';
import AddTestimonial from './component/AddTestimonial';
import EditTestimonial from './component/EditTestimonial';
import TableCustomFilter from '../component/common/TableCustomFilter';
import CustomButton from '../../../../component/Button/Button';

const DashTestimonial = observer(() => {
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [addTestimonial, setAddTestimonial] = useState(false);
  const [editTestimonial, setEditTestimonial] = useState(false);
  const [deleteTestimonial, setDeleteTestimonial] = useState(false);
  const {
    TestimonialStore: {
      getTestimonials,
      testimonials: { data, currentPage, loading, hasFetch, hasMore },
      downloadTestimonialList,
    },
    auth: { openNotification },
  } = store;

  useEffect(() => {
    if (!hasFetch) {
      getTestimonials({ page: currentPage })
        .then((data) => {
          openNotification({ message: data?.message, type: 'success' });
        })
        .catch((err) => {
          if (err?.statusCode !== 422) {
            openNotification({
              message: err?.meta?.cause ? err?.meta?.cause : err.message,
              type: 'error',
            });
          } else {
            openNotification({ message: 'cannot fetch testimonials', type: 'error' });
          }
        });
    }
  }, []);

  const downloadSheet = () => {
    setDownloadLoading(true);
    downloadTestimonialList({ standard: 1, status: 'ACCEPTED' })
      .then(() => {
        openNotification({ type: 'success', message: 'download successfully' });
      })
      .catch(() => {
        openNotification({ type: 'error', message: 'something went wrong' });
      })
      .finally(() => {
        setDownloadLoading(false);
      });
  };

  return (
    <>
      <Title title="testimonial list" />
      <CustomBreadcrumbs
        data={[
          { link: '/', title: 'Home' },
          { link: '/dashboard', title: 'Dashboard' },
          { title: 'Testimonial' },
        ]}
      />
      {
        "rhausl" === "rhaul" && <TableCustomFilter
        onClick={downloadSheet}
        createLink={() => setAddTestimonial(true)}
        disabled={downloadLoading}
      />
      }
      <Grid container spacing={2}>
        {data.map((item) => {
          return (
            <Grid item key={item.id} xl={3} xxl={3} md={6} sm={6} xs={12}>
              <TestimonialCard
                item={item}
                setDelete={setDeleteTestimonial}
                setEditTestimonial={setEditTestimonial}
              />
            </Grid>
          );
        })}
      </Grid>

      {loading && hasFetch === false && (
        <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'end' }}>
          {[...Array(8)].map((_, i) => {
            return (
              <Grid item xs={12} md={6} xl={3} sm={12} key={i}>
                <SkeletanCard key={i} style={{ width: '100%', height: '150px' }} />
              </Grid>
            );
          })}
        </Grid>
      )}

      {loading && hasFetch === true && <CircularProgress />}

      {hasMore && (
        <CustomButton onClick={() => getTestimonials({ page: currentPage + 1 })} disabled={loading}>
          Load More
        </CustomButton>
      )}

      {/* render components */}
      {deleteTestimonial && (
        <DeleteTestimonial open={deleteTestimonial} setDelete={setDeleteTestimonial} />
      )}
      {addTestimonial && (
        <AddTestimonial addTestimonial={addTestimonial} setAddTestimonial={setAddTestimonial} />
      )}
      {editTestimonial && (
        <EditTestimonial data={editTestimonial} setEditTestimonial={setEditTestimonial} />
      )}
    </>
  );
});

export default DashTestimonial;
