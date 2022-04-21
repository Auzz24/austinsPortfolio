import React from 'react';
import { Link } from 'react-router-dom';

function NavTabs() {
  return (
    <nav class="shift">
    <ul id="nav">
      <li>
        <Link
          to="/"
        >
          ABOUT
        </Link>
      </li>
      <li>
        <Link
          to="/early"
        >
          EARLY-WORK
        </Link>
      </li>
      <li>
      <Link
          to="/projects"
        >
          PROJECTS
        </Link>
      </li>
      <li>
        <a
          href="/contact"
        >
          CONTACT
        </a>
      </li>
    </ul>
    </nav>
  );
}

export default NavTabs;
