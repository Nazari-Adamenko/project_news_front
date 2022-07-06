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

const EDIT_PROFILE = 'Edit Profile';
const CREATE_NEWS = 'Create News';
const VALIDATE_LABEL = 'image';

const initialObjectPost = {
  title: '',
  tags: '',
  content: '',
  image: '',
};

const initialObjectUser = {
  name: '',
  image: '',
};

const postCreationFields = ['title', 'tags', 'content', 'image'];
const userEditFields = ['name', 'image'];

function UserModal() {
  const dispatch = useDispatch();
  const [image, setImage] = useState({});

  const isShowModal = useSelector((state) => state.posts.isShowModal);
  const typeOfModal = useSelector((state) => state.posts.typeModal);
  const errorCreatePost = useSelector((state) => state.posts.error);
  const errorEditUser = useSelector((state) => state.userData.error);

  const isEditModal = typeOfModal === EDIT_PROFILE;
  const currentError = isEditModal ? errorEditUser : errorCreatePost;
  const currentFields = isEditModal ? userEditFields : postCreationFields;

  const closeModal = () => {
    dispatch(togglePostModal({ status: false, type: '' }));
  };

  const getPostImage = (value) => {
    setImage(value.target.files[0]);
  };

  const generatePost = (data) => {
    dispatch(createPost({ data, image }));
  };

  const editUser = (data) => {
    dispatch(getChangeUser({ data, image }));
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={closeModal}
      show={isShowModal}
    >
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">
          <p>{typeOfModal}</p>
        </ModalTitle>
      </ModalHeader>
      <Formik
        initialValues={isEditModal ? initialObjectUser : initialObjectPost}
        onSubmit={isEditModal ? editUser : generatePost}
        validationSchema={isEditModal ? validateFormEditUser : validateFormCreatePost}
        validateOneBlur
      >
        {({ handleSubmit, handleChange, handleReset }) => (
          <Form onSubmit={handleSubmit} onReset={handleReset}>
            <ModalBody>
              {currentFields.map((element) => (element !== VALIDATE_LABEL
                ? (
                  <TextField
                    kay={element}
                    label={element}
                    name={element}
                    type="text"
                    onChange={handleChange}
                    placeholder={`Enter name ${element}`}
                  />
                )
                : (
                  <TextField
                    kay={element}
                    label={element}
                    name={element}
                    type="file"
                    placeholder="Add image"
                    onChange={getPostImage}
                  />
                )))}
            </ModalBody>
            <ModalFooter>
              {currentError
              && (
              <Alert className="flex-grow-1" variant="danger">
                {
                  currentError
                }
              </Alert>
              )}
              <Button className="btn btn-blue me-3" type="submit">{isEditModal ? EDIT_PROFILE : CREATE_NEWS}</Button>
              <Button onClick={closeModal}>Close</Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default memo(UserModal);
