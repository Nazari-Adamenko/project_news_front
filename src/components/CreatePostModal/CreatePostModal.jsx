import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from 'react-bootstrap';

import {
  togglePostModal,
  createPost,
} from '../../redux/actions';
import { validateFormCreatePost } from '../../helpers/validate';
import TextField from '../TextField/TextField';

const initialObject = {
  title: '',
  tags: '',
  content: '',
};

function CreatePostModal() {
  const dispatch = useDispatch();
  const [image, setImage] = useState(0);
  const isShowCreatedNews = useSelector((state) => state.posts.isShowCreatedNews);
  const error = useSelector((state) => state.posts.error);

  const closeModal = () => {
    dispatch(togglePostModal(false));
  };

  const getPostImage = (value) => {
    setImage(value.target.files[0]);
  };

  const userInitialization = (data, actions) => {
    actions.setSubmitting(false);
    dispatch(createPost({ data, image }));
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={closeModal}
      show={isShowCreatedNews}
    >
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">
          <p>Create News</p>
        </ModalTitle>
      </ModalHeader>
      <Formik
        initialValues={initialObject}
        onSubmit={userInitialization}
        validationSchema={validateFormCreatePost}
        validateOneBlur
      >
        {({ handleSubmit, handleChange, handleReset }) => (
          <Form onSubmit={handleSubmit} onReset={handleReset}>
            <ModalBody>
              <TextField
                label="Title"
                name="title"
                type="text"
                onChange={handleChange}
                placeholder="Enter title"
              />
              <TextField
                label="Tags"
                name="tags"
                type="text"
                onChange={handleChange}
                placeholder="Enter title"
              />
              <TextField
                label="Content"
                name="content"
                type="text"
                onChange={handleChange}
                placeholder="Enter title"
                as="textarea"
              />
              <TextField
                label="News picture"
                name="image"
                type="file"
                placeholder="Add image"
                onChange={getPostImage}
              />
            </ModalBody>
            <ModalFooter>
              {error && <Alert className="flex-grow-1" variant="danger">{error}</Alert>}
              <Button className="btn btn-blue me-3" type="submit">Create News</Button>
              <Button onClick={closeModal}>Close</Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default memo(CreatePostModal);
