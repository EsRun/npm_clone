import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../resources/css/header.css";

export default function Header() {
  return (
    <header>
      <div className="header-box">
        <div className="header-container">
          <div className="header-row">
            <div className="header-logo">
              <span>❤</span>
              <span>Nevertheless Published Mine</span>
            </div>
            <nav className="header-nav">
              <ul>
                <li>
                  <Link>Pro</Link>
                </li>
                <li>
                  <Link>Teams</Link>
                </li>
                <li>
                  <Link>Pricing</Link>
                </li>
                <li>
                  <Link>Documentation</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-row">
            <div className="search-logo">
              <svg viewBox="0 0 780 250">
                <path
                  fill="#231F20"
                  d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
