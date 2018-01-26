import React from 'react';

import Experience from './Experience';
import Education from './Education';
import Events from './Events';
import Articles from './Articles';
import Awards from './Awards';
import Projects from './Projects';
import Skills from './Skills';

class Content extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Experience />
        <Education />
        <Projects />
        <Awards />
        <Articles />
        <Events />
        <Skills />
      </React.Fragment>
    );
  }
}

export default Content;
