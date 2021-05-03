import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Navbar;
