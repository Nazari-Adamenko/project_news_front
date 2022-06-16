import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Alert from 'react-bootstrap/Alert';
import { validateUserRegistration, validateUserAuthorization } from '../../helpers/validate';

import { toggleModal, getUser } from '../../redux/actions';
import TextField from '../TextField/TextField';
import { SIGN_UP } from '../../constants';

function AuthModal() {
  const dispatch = useDispatch();
  const statusModal = useSelector((state) => state.auth.statusModal);
  const typeModal = useSelector((state) => state.auth.typeModal);
  const errorAuth = useSelector((state) => state.auth.error);
  const isAuth = typeModal === SIGN_UP;
  const {
    Header,
    Title,
    Body,
    Footer,
  } = Modal;
  const formikInitialValue = isAuth
    ? {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
    : {
      email: '',
      password: '',
    };
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
      <Header closeButton>
        <Title>{typeModal}</Title>
      </Header>
      <Formik
        initialValues={formikInitialValue}
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
            {errorAuth && <Alert className="w-100 h-25" variant="danger">{errorAuth}</Alert>}
            <Button className="btn btn-blue me-3" type="submit">{isAuth ? 'Register' : 'Login'}</Button>
            <Button className="btn btn-blue" onClick={closeModal}>Close</Button>
          </Footer>
        </Form>
      </Formik>
    </Modal>
  );
}

export default memo(AuthModal);
