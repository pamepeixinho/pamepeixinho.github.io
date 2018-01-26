import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Chip from 'material-ui/Chip';

import AnchorsName from '../../../constants';
import Section from '../../../components/Section';
import SectionSubtitle from '../../../components/SectionSubtitle';
import globalMessages from '../../../messages';
import messages from './messages';
import SkillsList from './SkillsList';


const ChipsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0;
  justify-content: left;
`;

const MaterialChip = styled(Chip)`
  margin: 8px 8px 8px 0;
`;

const ChipsGroupWrapper = styled.div`
  margin-bottom: 32px;
`;

class Skills extends React.Component {
  skills = [
    {
      title: messages.languagesTools,
      list: SkillsList.programmingLanguagesTools,
    },
    {
      title: messages.workflow,
      list: SkillsList.workflow,
    },
  ]

  renderSkillChip = (key, skill) => {
    return (
      <MaterialChip key={key} label={skill} />
    );
  }

  renderSkillsGroupList = (key, { title, list }) => {
    return (
      <ChipsGroupWrapper key={key}>
        <SectionSubtitle>
          <FormattedMessage {...title} />
        </SectionSubtitle>
        <ChipsWrapper>
          {list.map((skill, index) => this.renderSkillChip(index, skill))}
        </ChipsWrapper>
      </ChipsGroupWrapper>
    )
  }


  render() {
    return (
      <Section title={globalMessages.skills} id={AnchorsName.skills}>
        {this.skills.map((skillGroup, index) =>
          this.renderSkillsGroupList(index, {...skillGroup}))
        }
      </Section>
    );
  }
}

export default Skills;
