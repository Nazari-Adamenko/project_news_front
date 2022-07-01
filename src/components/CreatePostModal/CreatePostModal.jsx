import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {
  FormControl,
  FormLabel,
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
import TextField from '../TextField/TextField';
import { validateFormCreatePost } from '../../helpers/validate';

const initialValue = {
  title: '',
  tags: '',
  content: '',
};

function CreatePostModal() {
  const dispatch = useDispatch();
  const isShowCreatedNews = useSelector((state) => state.posts.isShowCreatedNews);
  const error = useSelector((state) => state.posts.error);

  const closeModal = () => {
    dispatch(togglePostModal(false));
  };

  const userInitialization = (data) => {
    const postData = { ...data };
    postData.content = initialValue.content;
    postData.image = initialValue.image;
    dispatch(createPost(postData));
  };

  const getPostImage = (value) => {
    initialValue.image = value.target.files;
  };

  const getContentTextarea = (value) => {
    initialValue.content = value.target.value;
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
        onSubmit={userInitialization}
        initialValues={initialValue}
        validateOneBlur
        validationSchema={validateFormCreatePost}
      >
        <Form>
          <ModalBody>
            <TextField
              label="Title"
              name="title"
              type="text"
              placeholder="Enter title"
              as="input"
            />
            <TextField
              label="Tags"
              name="tags"
              type="text"
              placeholder="Enter tags"
              as="input"
            />
            <FormLabel className="m-0">Content news</FormLabel>
            <FormControl
              name="content"
              type="text"
              placeholder="Enter the text of your news"
              onChange={getContentTextarea}
              as="textarea"
            />
            <FormLabel className="m-0">News picture</FormLabel>
            <FormControl
              label="Image"
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
      </Formik>
    </Modal>
  );
}

export default memo(CreatePostModal);
