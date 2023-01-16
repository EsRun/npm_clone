import styled from "styled-components";
import { Link } from "react-router-dom";
import "../resources/css/header.css";

export default function Header() {
  const HoverTrans = "opacity .15s ease-in";

  const HeaderBox = styled.div`
    order-width: 10px 0 0;
    border-top-style: solid;
    border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
  `;
  const HeaderContainer = styled.div`
    &:first-child {
      border-bottom: 1px solid #000;
    }
  `;
  const HeaderRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.4rem;
  `;
  const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    > span {
      &:first-child {
        font-size: 2rem;
        padding-right: 1rem;
      }
    }
  `;
  const HeaderNav = styled.div`
    font-weight: 600;
    > ul {
      display: flex;
      list-style: none;
      > li {
        padding: 0.3rem;
        > a {
          padding: 1rem;
        }
      }
    }
  `;

  const SearchLogo = styled.div`
    margin-top: 0.8rem;
    > svg {
      width: 7rem;
    }
  `;
  const SearchBar = styled.div`
    margin: 0 2rem;
    display: flex;
    flex-grow: 1;
    > button {
      padding: 0.8rem 3.2rem;
      background-color: #231f20;
      font-size: 1.4rem;
      font-weight: bold;
      letter-spacing: 0.3px;
      color: #fff;
    }
  `;
  const SearchInput = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-grow: 1;
    align-items: center;
    background-color: #f2f2f2;
    > .input {
      width: 100%;
      display: flex;
      align-items: center;
      > span {
        display: block;
        padding: 0 2rem;
      }
      > input {
        width: 100%;
        height: 40px;
        background: none;
        border: none;
        outline: unset;
      }
    }
  `;
  const SignButton = styled(Link)`
    padding: 1.3rem 2.8rem;
    font-weight: bold;

    &:first-child {
      margin-right: 2rem;
      border: 1px solid #ccc;
    }
    &:hover {
      transition: ${HoverTrans};
      color: #ccc;
    }
  `;

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
              </SearchInput>
              <button>Search</button>
            </SearchBar>
            <div className="search-sign">
              <SignButton to={"/signup"}>Sign Up</SignButton>
              <SignButton to={"/login"}>Sign In</SignButton>
            </div>
          </HeaderRow>
        </div>
      </HeaderBox>
    </header>
  );
}
