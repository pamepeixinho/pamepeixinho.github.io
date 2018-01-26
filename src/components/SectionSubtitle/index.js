import Title from '../Title';

const SectionSubtitle = Title.extend`
  text-decoration: underline;
  margin-bottom: 8px;
  text-align: left;
`.withComponent('div');

export default SectionSubtitle;
