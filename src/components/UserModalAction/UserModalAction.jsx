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
  getChangeUser,
} from '../../redux/actions';
import { validateFormCreatePost, validateFormEditUser } from '../../helpers/validate';
import TextField from '../TextField/TextField';

const initialObjectPost = {
  title: '',
  tags: '',
  content: '',
};

const initialObjectUser = {
  name: '',
};

const EDIT_PROFILE = 'Edit Profile';
const CREATE_NEWS = 'Create News';

function UserModalAction() {
  const dispatch = useDispatch();
  const [image, setImage] = useState(0);
  const isShowCreatedNews = useSelector((state) => state.posts.isShowCreatedNews);
  const typeModal = useSelector((state) => state.posts.typeModal);
  const error = useSelector((state) => state.posts.error);
  const isTypeModal = typeModal === EDIT_PROFILE;

  const closeModal = () => {
    dispatch(togglePostModal({ status: false }));
  };

  const getPostImage = (value) => {
    setImage(value.target.files[0]);
  };

  const userInitialization = (data) => {
    if (isTypeModal) {
      dispatch(getChangeUser({ data, image }));
      closeModal();
    } else dispatch(createPost({ data, image }));
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
          <p>{typeModal}</p>
        </ModalTitle>
      </ModalHeader>
      <Formik
        initialValues={isTypeModal ? initialObjectUser : initialObjectPost}
        onSubmit={userInitialization}
        validationSchema={isTypeModal ? validateFormEditUser : validateFormCreatePost}
        validateOneBlur
      >
        {({ handleSubmit, handleChange, handleReset }) => (
          <Form onSubmit={handleSubmit} onReset={handleReset}>
            <ModalBody>
              {isTypeModal
                ? (
                  <>
                    <TextField
                      label="Name"
                      name="name"
                      type="text"
                      onChange={handleChange}
                      placeholder="Enter name"
                    />
                    <TextField
                      label="User picture"
                      name="image"
                      type="file"
                      placeholder="Add image"
                      onChange={getPostImage}
                    />
                  </>
                )
                : (
                  <>
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
                  </>
                )}
            </ModalBody>
            <ModalFooter>
              {error && <Alert className="flex-grow-1" variant="danger">{error}</Alert>}
              <Button className="btn btn-blue me-3" type="submit">{isTypeModal ? EDIT_PROFILE : CREATE_NEWS}</Button>
              <Button onClick={closeModal}>Close</Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default memo(UserModalAction);
