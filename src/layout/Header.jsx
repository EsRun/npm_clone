import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/reducer";
import { Link } from "react-router-dom";
import {
  HeaderBox,
  HeaderLogo,
  HeaderNav,
  HeaderRow,
  SearchBar,
  SearchInput,
  SearchLogo,
  SignButton,
  Profile,
  ProfileUl,
  ProfileDiv,
} from "../resources/css/headerStyle";

export default function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(authActions.logOut({ isAuth: false }));
  };

  useEffect(() => {
    console.log("Header");
    console.log(auth);
  }, [auth]);
  return (
    <header>
      <HeaderBox>
        <div className="container">
          <HeaderRow>
            <HeaderLogo>
              <span>❤</span>
              <span>Nevertheless Published Mine</span>
            </HeaderLogo>
            <HeaderNav>
              <ul>
                <li>
                  <Link to={"/product/pro"}>Pro</Link>
                </li>
                <li>
                  <Link to={"/product/teams"}>Teams</Link>
                </li>
                <li>
                  <Link to={"/product"}>Pricing</Link>
                </li>
                <li>
                  <Link to={"documentation"}>Documentation</Link>
                </li>
              </ul>
            </HeaderNav>
          </HeaderRow>
        </div>
        <div className="container">
          <HeaderRow>
            <SearchLogo>
              <Link to={"/"}>
                <svg viewBox="0 0 780 250">
                  <path
                    fill="#231F20"
                    d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"
                  ></path>
                </svg>
              </Link>
            </SearchLogo>
            <SearchBar>
              <SearchInput>
                <div>
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
              </SearchInput>
              <button>Search</button>
            </SearchBar>
            {auth === false ? (
              <div className="search-sign">
                <SignButton to={"/signup"}>Sign Up</SignButton>
                <SignButton to={"/login"}>Sign In</SignButton>
              </div>
            ) : (
              <Profile>
                <nav>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                    aria-label="Profile menu"
                    aria-expanded="true"
                  >
                    <img
                      style={{
                        width: "40px",
                        borderRadius: "100%",
                        border: "1px solid #000",
                      }}
                      alt="avatar"
                      src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hMWNjYWI4NjQyNDIzNTM2NTZlNzczMDkyOGZlNDUzMT9zaXplPTUwJmRlZmF1bHQ9cmV0cm8ifQ.2Ly7jdtT7TS3c0J2TebQVuFSEufCpOqZCSihSs_E-pE"
                      aria-hidden="true"
                    />
                    <div style={{ paddingLeft: "0.4rem" }} aria-hidden="true">
                      <svg viewBox="0 0 11.64 5.82" height="6px" fill="#666">
                        <g id="6a308a62-c62e-4b78-87b6-759dd1ef54e5">
                          <polygon points="10 0 5 5 0 0 10 0"></polygon>
                        </g>
                      </svg>
                    </div>
                  </button>
                  <span>
                    <ProfileDiv>
                      <h2
                        style={{
                          margin: "0",
                          paddingBottom: "14px",
                          fontSize: "19px",
                          color: "#4d4d4d",
                          borderBottom: "1px solid #e5e5e5",
                          fontWeight: "600",
                        }}
                      >
                        아이디
                      </h2>
                      <ProfileUl>
                        <li>
                          <Link>Profile</Link>
                        </li>
                        <li>
                          <Link>Packages</Link>
                        </li>
                        <li>
                          <Link>Acoount</Link>
                        </li>
                        <li>
                          <Link>Biling Info</Link>
                        </li>
                        <li>
                          <Link>Access Token</Link>
                        </li>
                        <li>
                          <Link>Ad Organization</Link>
                        </li>
                        <li onClick={handleLogout}>
                          <Link>Sign Out</Link>
                        </li>
                      </ProfileUl>
                    </ProfileDiv>
                  </span>
                </nav>
              </Profile>
            )}
          </HeaderRow>
        </div>
      </HeaderBox>
    </header>
  );
}
