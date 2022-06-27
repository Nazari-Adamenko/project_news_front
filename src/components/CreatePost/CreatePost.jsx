import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FormControl, InputGroup } from 'react-bootstrap';
import { Formik, Form } from 'formik';

import { callNewsCreationPage } from '../../redux/actions';
import TextField from '../TextField/TextField';

const initialValue = {
  title: '',
  content: '',
  tags: '',
  image: '',
};

function CreatePost() {
  const dispatch = useDispatch();
  const isOpenModal = useSelector((state) => state.createNews.isShowCreateNews);

  const closeModal = () => {
    dispatch(callNewsCreationPage(false));
  };

  const userInitialization = (data) => {
    // eslint-disable-next-line no-param-reassign
    data.content = initialValue.content;
    // eslint-disable-next-line no-param-reassign
    data.image = initialValue.image;
    console.log(data);
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={closeModal}
      show={isOpenModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p>Create News</p>
        </Modal.Title>
      </Modal.Header>
      <Formik
        onSubmit={userInitialization}
        initialValues={initialValue}
        validateOneBlur
      >
        <Form>
          <Modal.Body>
            <TextField
              label="Title"
              name="title"
              type="text"
              placeholder="Enter title"
            />
            <TextField
              label="Tags"
              name="tags"
              type="text"
              placeholder="Enter tags"
            />
            <InputGroup className="flex-column">
              <TextField
                label="Content News"
                className="w-100 mb-3"
                type="text"
                name="content"
                placeholder="Enter the text of your news"
                onChange={(event) => { initialValue.content = event.target.value; }}
                as="textarea"
                aria-label="With textarea"
              />
            </InputGroup>
            <FormControl
              label="Image"
              name="image"
              type="file"
              placeholder="Add image"
              // eslint-disable-next-line prefer-destructuring
              onChange={(event) => { initialValue.image = event.target.files[0]; }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-blue me-3" type="submit">Create News</Button>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  );
}

export default memo(CreatePost);
