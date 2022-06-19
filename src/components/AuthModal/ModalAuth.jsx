import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const statusModal = useSelector((state) => state.auth.statusModal);
  const typeModal = useSelector((state) => state.auth.typeModal);
  const errorAuth = useSelector((state) => state.auth.error);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAuth = typeModal === SIGN_UP;
  const {
    Header,
    Title,
    Body,
    Footer,
  } = Modal;
  const closeModal = () => {
    dispatch(toggleModal({ status: false, type: '' }));
  };

  useEffect(() => (isLoggedIn
    ? navigate('user')
    : navigate('/')), [isLoggedIn]);

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
      <Header closeButton>
        <Title>{typeModal}</Title>
      </Header>
      <Formik
        initialValues={isAuth ? AuthInitialValue : RegInitialValue}
        validateOneBlur
        onSubmit={userInitialization}
        validationSchema={isAuth ? validateUserRegistration : validateUserAuthorization}
      >
        <Form>
          <Body>
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
          </Body>
          <Footer>
            {errorAuth && <Alert className="flex-grow-1" variant="danger">{errorAuth}</Alert>}
            <Button className="btn btn-blue me-3" type="submit">{isAuth ? 'Register' : 'Login'}</Button>
            <Button className="btn btn-blue" onClick={closeModal}>Close</Button>
          </Footer>
        </Form>
      </Formik>
    </Modal>
  );
}

export default memo(AuthModal);
