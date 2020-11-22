import React from 'react';

import Modal from '../../components/UI/Modal';
import Aux from '../Aux';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, clearErrors] = useHttpErrorHandler(axios);
    return (
      <Aux>
        <Modal show={error} modalClosed={clearErrors}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default withErrorHandler;
