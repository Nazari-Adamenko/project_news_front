import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {
  FormControl,
  FormLabel,
} from 'react-bootstrap';

import {
  togglePostModal,
  createPost,
  cannotCreatePost,
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
  const {
    Header,
    Body,
    Footer,
    Title,
  } = Modal;

  const closeModal = () => {
    dispatch(togglePostModal(false));
    dispatch(cannotCreatePost(null));
  };

  const userInitialization = (data) => {
    data.content = initialValue.content;
    data.image = initialValue.image;
    dispatch(createPost(data));
  };

  const getPostImage = (value) => {
    const [files] = value.target.files;
    initialValue.image = files;
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
      <Header closeButton>
        <Title id="contained-modal-title-vcenter">
          <p>Create News</p>
        </Title>
      </Header>
      <Formik
        onSubmit={userInitialization}
        initialValues={initialValue}
        validateOneBlur
        validationSchema={validateFormCreatePost}
      >
        <Form>
          <Body>
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
          </Body>
          <Footer>
            {error && <Alert className="flex-grow-1" variant="danger">{error}</Alert>}
            <Button className="btn btn-blue me-3" type="submit">Create News</Button>
            <Button onClick={closeModal}>Close</Button>
          </Footer>
        </Form>
      </Formik>
    </Modal>
  );
}

export default memo(CreatePostModal);
