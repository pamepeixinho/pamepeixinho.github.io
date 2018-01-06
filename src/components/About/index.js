import React from 'react';
import styled from 'styled-components';

import Dimens from '../../assets/dimens';
import Colors from '../../assets/colors';
import ProfilePicture from '../../images/profilepicture.png';
import RoundedPicture from '../../components/RoundedPicture';
import SocialMediaRow from '../../components/SocialMediaRow';

const ProfileRoundedPicture = RoundedPicture.extend`
  width: 120px;
`;

const TitleName = styled.span`
  font-size: 48px;
  color: ${Colors.secondary};
`;

const BoldTitleName = TitleName.extend`
  font-weight: 600;
  color: ${Colors.primary};
`;

const ContentWrapper = styled.div`
  margin-top: ${Dimens.defaultSpacing};
`;

const Description = ContentWrapper.extend`
  margin: 0 auto;
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
        <ContentWrapper>
          <TitleName>Pamela</TitleName> <BoldTitleName>Peixinho</BoldTitleName>
        </ContentWrapper>
        <Description>
          <p>
          I am a Software Engineer at startup QuintoAndar, developing apps for iOS, Android, Web application, Restful backends, a little of machine learning. I have finished BS in Computer Science at FEI
          </p>
        </Description>
        <SocialMediaRow />
      </Wrapper>
    );
  }
}

export default About;
