import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function AcceptFile() {
  const onDropRejected = useCallback(() => {
    console.log('rejected');
  }, []);

  const onDrop = useCallback(async (acceptedFiles) => {
    console.log('onDrop called');
    console.log('file:', acceptedFiles);
    console.log('call uploadapi');
    for (const file of acceptedFiles) {
      const data = new FormData();
      data.append('userfile', file, file.name);
      data.append('key1', 'value1');
      //       headers: {
      //         'Content-Type': 'multipart/form-data',
      //       },
      for (const pair of data.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
      // axios.post
    }
  }, []);

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: 'text/plain, image/png',
    multiple: true,
    onDropRejected,
    onDrop,
  });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path}
      {' '}
      -
      {file.size}
      {' '}
      bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path}
      {' '}
      -
      {file.size}
      {' '}
      bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only *.txt and *.png images will be accepted)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
}

export default AcceptFile;
