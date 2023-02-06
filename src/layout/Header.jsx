import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/reducer";
import Profile from "../pages/auth/Profile";
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
} from "../resources/css/headerStyle";

export default function Header() {
  const [profileToggle, setProfileToggle] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);

  // 로그아웃
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(authActions.logOut({ isAuth: false }));
  };

  // 프로필 토글
  const profileToggleFn = (e) => {
    e.preventDefault();
    setProfileToggle((el) => !el);
  };

  useEffect(() => {
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
            {!auth ? (
              <div className="search-sign">
                <SignButton to={"/signup"}>Sign Up</SignButton>
                <SignButton to={"/login"}>Sign In</SignButton>
              </div>
            ) : (
              "ㅇㅇ"
            )}
          </HeaderRow>
        </div>
      </HeaderBox>
    </header>
  );
}
