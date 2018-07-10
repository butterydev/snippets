import React, { Component } from 'react';
import View from './view';

export default class extends Component {
	render() {
		return (
			<View {...this.props} />
		);
	}
}