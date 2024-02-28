// @flow

import * as React from 'react';
import './SiteWrapper.css';
import { Site } from 'tabler-react';
import Copyright from './components/Copyright';
import FooterNote from './components/FooterNote';

class SiteWrapper extends React.Component {
  render() {
    return (
      <Site.Wrapper
        headerProps={{
          href: '/',
          alt: "Othaim Surprise Random Picker",
          imageURL: 'images/Othaim_Logo.svg',
          navItems: <>Othaim Surprise Random Picker</>,
        }}
        footerProps={{
          note: <FooterNote />,
          copyright: <Copyright />,
        }}
      >
        <div className="container main-section">{this.props.children}</div>
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
