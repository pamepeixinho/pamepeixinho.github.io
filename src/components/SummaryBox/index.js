import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Dimens from '../../assets/dimens';
import Colors from '../../assets/colors';
import ProfilePicture from '../../images/profilepicture.png';
import RoundedPicture from '../../components/RoundedPicture';

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${Colors.grey}
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${Colors.lightGrey}
`;

const Description = styled.p`
  font-weight: 300;
  color: ${Colors.grey}
`;

const DateDescription = styled.p`
  font-size: 16px;
  color: ${Colors.primary}
`;

class SummaryBox extends React.PureComponent {
  render() {
    return (
      <div>
        <Title>{this.props.title}</Title>
        <Subtitle>{this.props.subtitle}</Subtitle>
        <Description>{this.props.description}</Description>
        <DateDescription>{this.props.date}</DateDescription>
      </div>
    );
  }
}

SummaryBox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default SummaryBox;
