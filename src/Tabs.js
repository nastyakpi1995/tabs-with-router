
import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
} from 'react-router-dom';

const Tabs = ({ tabs, tabId }) => (
  <div
    className="container"
  >
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
        >
          <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
        </li>
      ))}
    </ul>
    <p>
      {tabId
        ? tabs.find(tab => tab.id === tabId).content : ''}
    </p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.isRequired,
  tabId: PropTypes.string.isRequired,
};

export default Tabs;