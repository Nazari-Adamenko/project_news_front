import React, { memo } from 'react';
import { bool, string } from 'prop-types';

import Spinner from '../Spinner/Spinner';
import Message from '../Message/Message';

function Notification({ isFetching, error }) {
  if (isFetching) {
    return <Spinner />;
  }
  if (error) {
    return <Message text={error} />;
  }
}

Notification.propTypes = {
  isFetching: bool.isRequired,
  error: string,
};

Notification.defaultProps = {
  error: null,
};

export default memo(Notification);
