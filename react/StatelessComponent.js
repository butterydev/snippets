// imports
import React from 'react';

const StatelessComponent = (props) => {
  const inlineStyle = {
    objectToStyle: {
      cssProperty: 'value',
    },
  };

  return (
    <div>{props.property1}</div>
  );
};

StatelessComponent.propTypes = {
  property1: React.PropTypes.string,
};

StatelessComponent.defaultProps = {
  property1: 'Default value for property1.',
};

export default StatelessComponent;
