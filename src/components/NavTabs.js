import React from 'react';
import { Link } from 'react-router-dom';

function NavTabs() {
  return (
    <section>
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
      <Link
          to="/contact"
        >
          CONTACT
        </Link>
      </li>
    </ul>
    </nav>
    </section>
  );
}

export default NavTabs;
