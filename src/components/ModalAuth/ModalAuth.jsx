import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { Modal, Button } from 'react-bootstrap';

import { getModal, createUser } from '../../redux/actions';
import TextField from '../TextField/TextField';

function ModalAuth() {
  const dispatch = useDispatch();
  const statusModal = useSelector((state) => state.auth.statusModal);
  const typeModal = useSelector((state) => state.auth.typeModal);
  const authFailed = useSelector((state) => state.auth.isFetching);

  const isAuth = typeModal === 'Sign Up';
  const closeModal = () => {
    dispatch(getModal({ status: false, type: '' }));
  };

  const registrationUser = (event) => {
    dispatch(createUser(event));
  };

  const validate = yup.object({
    name: yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Password must match')
      .required('Confirm password is require'),
  });

  return (
    <Formik
      initialValues={
        {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }
      }
      validateOneBlur
      onSubmit={
        (values) => {
          registrationUser(values);
        }
      }
      validationSchema={validate}
    >
      <Modal
        show={statusModal}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{typeModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {isAuth && <TextField label="First Name" name="name" type="text" placeholder="Enter name" />}
            <TextField label="Email" name="email" type="email" placeholder="Enter email" />
            <TextField label="Password" name="password" type="password" placeholder="Enter password" />
            {isAuth && <TextField label="Confirm Password" name="confirmPassword" type="password" placeholder="Repeat password" />}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Form>
            <Button className="btn btn-blue me-3" type="submit">{isAuth ? 'Register' : 'Login'}</Button>
            <Button className="btn btn-blue" onClick={closeModal}>Close</Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </Formik>
  );
}

export default memo(ModalAuth);
