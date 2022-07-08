import React, { memo, useState } from 'react';
// import { useDispatch } from 'react-redux';

import { Form, DropdownButton, Dropdown } from 'react-bootstrap';
// import { saveQueryParams } from '../../redux/actions';

import './SearchForm.css';

const DEFAULT_TITLE_DROPDOWN = 'All';

function SearchForm() {
  // const dispatch = useDispatch();
  const [currentTitle, setCurrentTitle] = useState(DEFAULT_TITLE_DROPDOWN);

  const getDropdownValue = (event) => {
    setCurrentTitle(event.target.innerText);
  };

  const getCurrentValue = (event) => {
    console.log(event);
    // dispatch(saveQueryParams({ filter: currentTitle, search: event.target.value }));
  };

  return (
    <Form className="search-form">
      <DropdownButton title={currentTitle}>
        <Dropdown.Item onClick={getDropdownValue} href="#/action-1">All</Dropdown.Item>
        <Dropdown.Item onClick={getDropdownValue} href="#/action-1">Tags</Dropdown.Item>
        <Dropdown.Item onClick={getDropdownValue} href="#/action-2">Authors</Dropdown.Item>
      </DropdownButton>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={getCurrentValue}
      />
    </Form>
  );
}

export default memo(SearchForm);
