import React from 'react';
import styled from 'styled-components';

import dimens from '../../assets/dimens';
import ProfilePicture from '../../images/profilepicture.png';
import RoundedPicture from '../../components/RoundedPicture';

const ProfileRoundedPicture = RoundedPicture.extend`
  width: 120px;
`;

const TitleName = styled.span`
  font-size: 16px;
`;

const BoldTitleName = TitleName.extend`
  font-weight: 600;
`;

const TitleWrapper = styled.div`
  margin-top: ${dimens.defaultSpacing};
`;

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <ProfileRoundedPicture src={ProfilePicture} alt="profile picture" />
        <TitleWrapper>
          <TitleName>Pamela</TitleName> <BoldTitleName>Peixinho</BoldTitleName>
        </TitleWrapper>
      </header>
    );
  }
}

export default Header;
