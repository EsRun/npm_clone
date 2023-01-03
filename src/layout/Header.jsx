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
              <span className="logo">❤</span>
              <span className="text">Nevertheless Published Mine</span>
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
        </div>
        <div className="header-container">
          <div className="header-row">
            <div className="search-logo">
              <svg viewBox="0 0 780 250">
                <path
                  fill="#231F20"
                  d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"
                ></path>
              </svg>
            </div>
            <div className="search-bar">
              <div className="search-input">
                <div className="input">
                  <span>
                    <svg
                      width="15px"
                      height="15px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 18 18"
                      aria-hidden="true"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g stroke="#777777" strokeWidth="1.3">
                          <g>
                            <path d="M13.4044,7.0274 C13.4044,10.5494 10.5494,13.4044 7.0274,13.4044 C3.5054,13.4044 0.6504,10.5494 0.6504,7.0274 C0.6504,3.5054 3.5054,0.6504 7.0274,0.6504 C10.5494,0.6504 13.4044,3.5054 13.4044,7.0274 Z"></path>
                            <path d="M11.4913,11.4913 L17.8683,17.8683"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <input placeholder="Search packages"></input>
                </div>
              </div>
              <button>Search</button>
            </div>
            <div className="search-sign">
              <Link className="sign-up">Sign Up</Link>
              <Link className="sign-in">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
