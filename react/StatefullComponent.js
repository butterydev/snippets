// imports
import React from 'react';

// component lifecycle docs
// https://facebook.github.io/react/docs/react-component.html

class StatefullComponent extends React.Component {
  // called before it is mounted
  constructor(props) {
    // should call super(props) before any other statement
    // otherwise, this.props will be undefined in the constructor
    super(props);

    // initialize state based on props if you know what you're doing
    // instead of syncing props to state, you often want to lift the state up
    // https://facebook.github.io/react/docs/lifting-state-up.html
    this.state = {
      property1: props.property1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // invoked immediately before mounting occurs
  // it is called before render()
  componentWillMount() {

  }

  // invoked immediately after a component is mounted
  // initialization that requires DOM nodes should go here
  componentDidMount() {

  }

  // invoked before a mounted component receives new props
  componentWillReceiveProps(nextProps) {

  }

  // invoked before rendering when new props or state are being received
  shouldComponentUpdate(nextProps, nextState) {

  }

  // invoked immediately before rendering when new props or state are being received
  componentWillUpdate(nextProps, nextState) {

  }

  // invoked immediately after updating occurs
  // this method is not called for the initial render
  componentDidUpdate(prevProps, prevState) {

  }

  // invoked immediately before a component is unmounted and destroyed
  // perform any necessary cleanup in this method
  componentWillUnmount() {

  }

  handleClick() {

  }

  render() {
    return (
      <div>
        <div>My Component</div>
        <button onClick={this.handleClick}>My Button</button>
      </div>
    );
  }
};

StatefullComponent.propTypes = {
  property1: React.PropTypes.string,
};

StatefullComponent.defaultProps = {
  property1: 'Default value for property1.',
};

export default StatefullComponent;
