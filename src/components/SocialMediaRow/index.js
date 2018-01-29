import React from 'react';
import styled from 'styled-components';

import Dimens from '../../assets/dimens';
import SocialLink from '../SocialLink';
import { SocialLinks } from '../../constants';
import { Facebook, Instagram, Linkedin, Twitter, Github } from '../../images/SocialMedia';

const SocialMediaWrapper = styled.div`
  margin-top: ${Dimens.defaultSpacing}
`;

const Wrapper = styled.div`
  margin: 8px ${Dimens.defaultSpacing} ${Dimens.boxSeparation};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Link = styled.a`
  color: #646464;
  &:hover {
    filter: contrast(3);
  }
`;

class SocialMediaRow extends React.PureComponent {
  render() {
    return (
      <SocialMediaWrapper>
      <Link href="mailto:pamepeixinho@gmail.com" target="_top">pamepeixinho@gmail.com</Link>
      <Wrapper>
        <SocialLink to={SocialLinks.facebook} icon={Facebook} />
        <SocialLink to={SocialLinks.instagram} icon={Instagram} />
        <SocialLink to={SocialLinks.linkedin} icon={Linkedin} />
        <SocialLink to={SocialLinks.twitter} icon={Twitter} />
        <SocialLink to={SocialLinks.github} icon={Github} />
      </Wrapper>
      </SocialMediaWrapper>
    );
  }
}

export default SocialMediaRow;
