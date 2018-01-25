import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Grid from 'material-ui/Grid';

import Colors from '../../assets/colors';
import MessagePropType from '../../utils/IntlProptype';
import SimpleDescriptionBox from '../SimpleDescriptionBox';

const Wrapper = styled.div`
  text-align: left;
  padding: 16px;
  border: 1px solid ${Colors.lightGrey};
  border-radius: 4px;
  height: calc(100% - 16px);
`;

class DescriptionBorderBox extends React.PureComponent {
  render() {
    return (
      <Grid item xs={10} sm={4}>
        <Wrapper>
          <SimpleDescriptionBox 
            title={this.props.title}
            subtitle={this.props.subtitle}
            description={this.props.description}
          />
          {this.props.children}
        </Wrapper>
      </Grid>
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
};

export default DescriptionBorderBox;
