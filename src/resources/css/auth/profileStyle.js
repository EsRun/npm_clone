import styled from "styled-components";

export const ProfileBox = styled.div`
  position: relative;
`;

export const ProfileDiv = styled.div`
  position: absolute;
  display: ${(props) => (props.toggle ? "block" : "none")};
  cursor: auto;
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0px 2px 7px rgb(0 0 0 / 12%);
  border: 1px solid #ccc;
  border-radius: 7px;
  right: -8px;
  top: 141%;

  &::before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    top: -18px;
    right: 25px;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 18px solid #ccc;
  }
  &::after {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    top: -16px;
    right: 25px;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 18px solid white;
  }
`;

export const ProfileUl = styled.ul`
  > li {
    min-width: 20rem;
    > a {
      padding: 0.8rem;
      font-size: 1.7rem;
      font-weight: 600;
    }
  }
`;
