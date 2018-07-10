import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
  const styles = {
    container: {
      backgroundColor: '#f00',
    },
  };

  return (
    <div style={styles.container}>{props.myProp}</div>
  );
};

MyComponent.propTypes = {
  myProp: PropTypes.string,
};

MyComponent.defaultProps = {
  myProp: 'Default value for myProp.',
};

export default MyComponent;