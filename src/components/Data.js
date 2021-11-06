import React from 'react';
import PropTypes from 'prop-types';
import useJsonFetch from '../hooks/useJsonFetch';
import LoaderInline from './LoaderInline';

function Data({ pathname, description }) {
  const [data, isLoading, error] = useJsonFetch(`${process.env.REACT_APP_URL}${pathname}`);

  return (
    <div className="Data">
      {description}
      :
      { isLoading && <LoaderInline /> }
      { error && <p style={{ color: 'red' }}>Internal Server Error</p> }
      { data && <p style={{ color: 'green' }}>{data.status}</p> }
    </div>
  );
}

Data.defaultProps = {
  description: '',
};

Data.propTypes = {
  pathname: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Data;
