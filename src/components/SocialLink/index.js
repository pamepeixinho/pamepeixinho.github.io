import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  padding: 5px;
  &:hover {
    filter: contrast(2);
  }
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
`;

class SocialLink extends React.PureComponent {
  render() {
    return (
      <Link href={this.props.to} target="_blank">
        <Img src={this.props.icon} />
      </Link>
    );
  }
}

SocialLink.proptype = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default SocialLink;
