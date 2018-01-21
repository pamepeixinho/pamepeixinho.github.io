import React from 'react';
import styled from 'styled-components';

import Dimens from '../../assets/dimens';
import SocialLink from '../SocialLink';
import { SocialLinks } from '../../constants';
import { Facebook, Instagram, Linkedin, Twitter, Github } from '../../images/SocialMedia';


const Wrapper = styled.div`
  margin: ${Dimens.defaultSpacing} ${Dimens.defaultSpacing} ${Dimens.boxSeparation};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class SocialMediaRow extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <SocialLink to={SocialLinks.facebook} icon={Facebook} />
        <SocialLink to={SocialLinks.instagram} icon={Instagram} />
        <SocialLink to={SocialLinks.linkedin} icon={Linkedin} />
        <SocialLink to={SocialLinks.twitter} icon={Twitter} />
        <SocialLink to={SocialLinks.github} icon={Github} />
      </Wrapper>
    );
  }
}

export default SocialMediaRow;
