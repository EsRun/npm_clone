import styled from "styled-components";

export const Footers = styled.footer`
  border-top: 1px solid #ccc;
  font-size: 1.6rem;
  &:after {
    content: "";
    display: block;
    height: 10px;
    width: 100%;
    background-image: linear-gradient(
      139deg,
      #fb8817,
      #ff4b01,
      #c12127,
      #e02aff
    );
  }
`;
export const FooterBox = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
`;
export const FooterRow = styled.div`
  padding: 3rem;
  letter-spacing: 0.2rem;
  > div {
    padding-top: 2rem;
    width: 5rem;
  }
  > ul {
    > li {
      padding: 1rem 0;
      > a {
        color: #5e5e5e;
      }
    }
  }
  > .footer-row-title {
    margin: 1.7rem 0;
    display: block;
    font-weight: bold;
  }
`;
