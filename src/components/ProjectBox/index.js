import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Grid from 'material-ui/Grid';
import withWidth from 'material-ui/utils/withWidth';

import Colors from '../../assets/colors';
import MessagePropType from '../../utils/IntlProptype';
import SimpleDescriptionBox from '../SimpleDescriptionBox';

const Wrapper = styled.div`
  text-align: center;
  padding: 16px;
  border: 1px solid ${Colors.lightGrey};
  border-radius: 4px;
`;

class ProjectBox extends React.PureComponent {
  render() {
    const { startDate, endDate } = this.props;
    return (
      <Grid item xs={10} sm={4}>
        <Wrapper>
          <SimpleDescriptionBox 
            title={this.props.title}
            subtitle={this.props.subtitle}
            description={this.props.description}
          />
        </Wrapper>
      </Grid>
    );
  }
}

ProjectBox.propTypes = {
  title: MessagePropType.isRequired,
  subtitle: MessagePropType.isRequired,
  description: MessagePropType.isRequired,
};

export default ProjectBox;
