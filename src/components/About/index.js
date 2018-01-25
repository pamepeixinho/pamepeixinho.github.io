import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Dimens from '../../assets/dimens';
import Colors from '../../assets/colors';
import ProfilePicture from '../../images/profilepicture.png';
import RoundedPicture from '../../components/RoundedPicture';
import SocialMediaRow from '../../components/SocialMediaRow';
import messages from './messages';

const ProfileRoundedPicture = RoundedPicture.extend`
  width: 120px;
  @media (max-width: 960px) {
    margin-top: 32px;
  }
`;

const TitleName = styled.span`
  font-size: 48px;
  color: ${Colors.secondary};
`;

const BoldTitleName = TitleName.extend`
  font-weight: 600;
  color: ${Colors.primary};
`;

const Description = styled.div`
  margin: ${Dimens.defaultSpacing} auto;
  font-weight: 300;
  color: ${Colors.secondary};
`;

const Wrapper = styled.div`
  margin: ${Dimens.defaultSpacing};
`;

class About extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <ProfileRoundedPicture src={ProfilePicture} alt="profile picture" />
        <div>
          <TitleName>Pamela</TitleName> <BoldTitleName>Peixinho</BoldTitleName>
        </div>
        <Description>
          <FormattedMessage {...messages.miniDescription} />
        </Description>
        <SocialMediaRow />
      </Wrapper>
    );
  }
}

export default About;
