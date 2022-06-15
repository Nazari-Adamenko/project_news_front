import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import { Modal, Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { validateUserRegistration, validateUserAuthorization } from '../../helpers/validate';

import { getModal, getUser } from '../../redux/actions';
import TextField from '../TextField/TextField';

function ModalAuth() {
  const dispatch = useDispatch();
  const statusModal = useSelector((state) => state.auth.statusModal);
  const typeModal = useSelector((state) => state.auth.typeModal);
  const errorAuth = useSelector((state) => state.auth.error);
  const isAuth = typeModal === 'Sign Up';
  const closeModal = () => {
    dispatch(getModal({ status: false, type: '' }));
  };

  const initializationUser = (data) => {
    dispatch(getUser(data));
  };

  return (
    <Formik
      initialValues={
        isAuth
          ? {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }
          : {
            email: '',
            password: '',
          }
      }
      validateOneBlur
      onSubmit={initializationUser}
      validationSchema={isAuth ? validateUserRegistration : validateUserAuthorization}
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
          {errorAuth && <Alert className="w-100 h-25" variant="danger">{errorAuth}</Alert>}
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
