/* eslint-disable nonblock-statement-body-position */
/* eslint-disable implicit-arrow-linebreak */
// ** React Imports
import React from 'react';

import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

const ProfileImageUpload = ({ files, picFile, setPicFile, setFiles, acceptFiles, children }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      '': acceptFiles ? acceptFiles : ['.jpeg', '.png'],
    },
    useFsAccessApi: false,
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length === 1) {
        setFiles(acceptedFiles);
      } else {
        alert('upload one file at a time');
      }
    },
  });

  return (
    <>
      <div {...getRootProps({ className: 'dropzone custom_dropzone' })}>
        <input {...getInputProps()} />
        {children}
      </div>
      {(files?.length || picFile) && (
        <IconButton onClick={setPicFile}>
          <DeleteOutline />
        </IconButton>
      )}
    </>
  );
};

ProfileImageUpload.propTypes = {
  children: PropTypes.node,
  acceptFiles: PropTypes.array,
  files: PropTypes.array,
  setFiles: PropTypes.func,
  acceptedFiles: PropTypes.array,
  picFile: PropTypes.any,
  setPicFile: PropTypes.func,
};

export default ProfileImageUpload;
