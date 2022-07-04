import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import Button from 'react-bootstrap/Button';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import { validateUserRegistration, validateUserAuthorization } from '../../helpers/validate';
import { toggleModal, getUser } from '../../redux/actions';
import TextField from '../TextField/TextField';
import { SIGN_UP } from '../../constants';

const AuthInitialValue = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const RegInitialValue = {
  email: '',
  password: '',
};

function AuthModal() {
  const dispatch = useDispatch();
  const statusModal = useSelector((state) => state.auth.statusModal);
  const typeModal = useSelector((state) => state.auth.typeModal);
  const errorAuth = useSelector((state) => state.auth.error);
  const isAuth = typeModal === SIGN_UP;
  const closeModal = () => {
    dispatch(toggleModal({ status: false, type: '' }));
  };

  const userInitialization = (data) => {
    dispatch(getUser(data));
  };

  return (
    <Modal
      show={statusModal}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ModalTitle>{typeModal}</ModalTitle>
      </ModalHeader>
      <Formik
        initialValues={isAuth ? AuthInitialValue : RegInitialValue}
        validateOneBlur
        onSubmit={userInitialization}
        validationSchema={isAuth ? validateUserRegistration : validateUserAuthorization}
      >
        <Form>
          <ModalBody>
            {isAuth && (
              <TextField
                label="First Name"
                name="name"
                type="text"
                placeholder="Enter name"
              />
            )}
            <TextField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
            />
            {isAuth && (
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Repeat password"
              />
            )}
          </ModalBody>
          <ModalFooter>
            {errorAuth && <Alert className="flex-grow-1" variant="danger">{errorAuth}</Alert>}
            <Button
              className="btn btn-blue me-3"
              type="submit"
            >
              {isAuth ? 'Register' : 'Login'}
            </Button>
            <Button className="btn btn-blue" onClick={closeModal}>Close</Button>
          </ModalFooter>
        </Form>
      </Formik>
    </Modal>
  );
}

export default memo(AuthModal);
