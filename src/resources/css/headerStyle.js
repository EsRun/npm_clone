import styled from "styled-components";
import { Link } from "react-router-dom";

export const HovereEaseIn = {
  transition: "opacity .15s ease-in",
  opacity: ".5",
};

export const HeaderBox = styled.div`
  order-width: 10px 0 0;
  border-top-style: solid;
  border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
`;
export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  > span {
    &:first-child {
      font-size: 2rem;
      padding-right: 1rem;
    }
  }
`;
export const HeaderNav = styled.div`
  font-weight: 600;
  > ul {
    display: flex;
    list-style: none;
    > li {
      padding: 0.3rem;
      > a {
        padding: 1rem;
      }
      > a:hover {
        opacity: 0.5;
        transition: opacity 0.15s ease-in;
      }
    }
  }
`;

export const SearchLogo = styled.div`
  margin-top: 0.8rem;
  svg {
    width: 7rem;
  }
`;
export const SearchBar = styled.div`
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
    cursor: pointer;
  }
`;
export const SearchInput = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-grow: 1;
  align-items: center;
  background-color: #f2f2f2;
  > div {
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
export const SignButton = styled(Link)`
  padding: 1.3rem 2.8rem;
  font-weight: bold;

  &:first-child {
    margin-right: 2rem;
    border: 1px solid #ccc;
  }
  &:hover {
    ${HovereEaseIn};
  }
`;

export const Profile = styled.div``;
