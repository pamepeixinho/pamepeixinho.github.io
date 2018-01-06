import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Colors from '../../assets/colors';

const LineSeparator = styled.div`
  height: 1px;
  background-color: ${Colors.secondary};
`;

class Section extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        <p>{this.props.title}</p>
        <LineSeparator />
        {this.props.children}
      </div>
    );
  }
}

Section.proptype = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
