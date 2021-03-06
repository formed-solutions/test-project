import React, { PropTypes } from 'react';
import Link from './Link';

const Footer = ({ selectedFilter, onSelectFilter }) => (
  <p>
    Show:
    {" "}
    <Link active={ selectedFilter === 'SHOW_ALL' }
      onClick={ () => onSelectFilter('SHOW_ALL') }>
      All
    </Link>
    {", "}
    <Link active={ selectedFilter === 'SHOW_ACTIVE' }
      onClick={ () => onSelectFilter('SHOW_ACTIVE') }>
      Active
    </Link>
    {", "}
    <Link active={ selectedFilter === 'SHOW_COMPLETED' }
      onClick={ () => onSelectFilter('SHOW_COMPLETED') }>
      Completed
    </Link>
  </p>
);

Footer.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired
}

export default Footer;
