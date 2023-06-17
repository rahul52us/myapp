/* eslint-disable nonblock-statement-body-position */
/* eslint-disable implicit-arrow-linebreak */
// ** React Imports
import React, { Fragment } from 'react';

// ** Third Party Components
// import { read, utils } from "xlsx";
// import toast from "react-hot-toast";
import { useDropzone } from 'react-dropzone';

// ** Custom Components
// import ExtensionsHeader from "@components/extensions-header";
// ** Styles
// import '@styles/react/libs/file-uploader/file-uploader.scss';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const FileUpload = ({ setFiles, files, uploadSingleFiles, acceptFiles }) => {
  console.log(uploadSingleFiles);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      '': acceptFiles ? acceptFiles : ['.jpeg', '.png'],
    },
    useFsAccessApi: false,
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (files.length < 1) {
        setFiles([...files, ...acceptedFiles.map((file) => Object.assign(file))]);
      } else {
        // toast((t) => (
        //   <ToastContent
        //     t={t.id}
        //     message="You can upload one image at a time"
        //     icon={<X size={12} />}
        //     color="error"
        //   />
        // ));
      }
    },
  });

  const renderFilePreview = (file) => {
    if (file.type.startsWith('image')) {
      return (
        <img
          className="rounded"
          alt={file.name}
          src={URL.createObjectURL(file)}
          height="28"
          width="28"
        />
      );
    } else {
      //   return <FileText size="28" />;
    }
  };

  const handleRemoveFile = (file) => {
    const uploadedFiles = files;
    const filtered = uploadedFiles.filter((i) => i.name !== file.name);
    setFiles([...filtered]);
  };

  const renderFileSize = (size) => {
    if (Math.round(size / 100) / 10 > 1000) {
      return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`;
    } else {
      return `${(Math.round(size / 100) / 10).toFixed(1)} kb`;
    }
  };

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  const fileList = files.map((file, index) => (
    <div
      key={`${file.name}-${index}`}
      className="d-flex align-items-center justify-content-between"
    >
      <div className="file-details d-flex align-items-center">
        <div className="file-preview me-1">{renderFilePreview(file)}</div>
        <div>
          <p className="file-name mb-0">{file.name}</p>
          <p className="file-size mb-0">{renderFileSize(file.size)}</p>
        </div>
      </div>
      <Button onClick={() => handleRemoveFile(file)}>Remove</Button>
    </div>
  ));

  return (
    <Fragment>
      <div {...getRootProps({ className: 'dropzone custom_dropzone' })}>
        <input {...getInputProps()} />
        <div className="d-flex align-items-center justify-content-center flex-column">
          {/* <DownloadCloud size={64} /> */}
          <h5>Drop Files here or click to upload</h5>
          <p className="text-secondary">
            Drop files here or click{' '}
            <a href="/" onClick={(e) => e.preventDefault()}>
              browse
            </a>{' '}
            thorough your machine
          </p>
        </div>
      </div>

      {files.length ? (
        <Fragment>
          <div className="my-2">{fileList}</div>
          <div className="d-flex justify-content-end">
            <Button onClick={handleRemoveAllFiles}>Remove All</Button>
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

FileUpload.propTypes = {
  acceptFiles: PropTypes.array,
  files: PropTypes.array,
  setFiles: PropTypes.func,
  acceptedFiles: PropTypes.array,
  uploadSingleFiles: PropTypes.func,
};

export default FileUpload;
