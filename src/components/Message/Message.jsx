import React, { memo } from 'react';

import { string } from 'prop-types';

function Message({ text }) {
  return (
    <div className="alert alert-danger text-center" role="alert">
      Message:
      {' '}
      { text }
    </div>
  );
}

Message.propTypes = {
  text: string.isRequired,
};

export default memo(Message);
