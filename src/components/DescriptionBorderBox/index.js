import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Grid from 'material-ui/Grid';

import Colors from '../../assets/colors';
import MessagePropType from '../../utils/IntlProptype';
import SimpleDescriptionBox from '../SimpleDescriptionBox';

const Wrapper = styled.div`
  text-align: left;
  border: 1px solid ${Colors.lightGrey};
  border-radius: 4px;
  margin-bottom: 40px;
  height: calc(100% - 16px);
`;
// TODO: props custom height

const Image = styled.img`
  padding: 1px;
  width: 100%;
  height: 50%;
`;

const ContentWrapper = styled.div`
  padding: 16px;
`;

const GridItem = styled(Grid)`
  margin-bottom: 20px !important;
`;

class DescriptionBorderBox extends React.PureComponent {
  render() {
    const { imageSrc } = this.props;
    const gridProps = {
      item: true,
      xs: 10,
      sm: this.props.threeColumn ? 4 : 6,
    };

    return (
        <GridItem {...gridProps}>
          <Wrapper>
            {imageSrc && <Image src={imageSrc}/>}
            <ContentWrapper>
              <SimpleDescriptionBox 
                title={this.props.title}
                subtitle={this.props.subtitle}
                description={this.props.description}
              />
              {this.props.children}
            </ContentWrapper>
          </Wrapper>
        </GridItem>
    );
  }
}

DescriptionBorderBox.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  title: MessagePropType.isRequired,
  subtitle: MessagePropType.isRequired,
  description: MessagePropType.isRequired,
  imageSrc: PropTypes.node,
  threeColumn: PropTypes.bool,
};

DescriptionBorderBox.defaultProps = {
  threeColumn: true,
};

export default DescriptionBorderBox;
