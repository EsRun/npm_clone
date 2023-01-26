import { Link } from "react-router-dom";
import styled from "styled-components";

export const TopBorder = styled.div`
  height: 1rem;
  display: flex;
  background-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 48rem;
`;
export const Header = styled.div`
  margin: 8rem 0 4rem;
  text-align: center;
  svg {
    width: 14.4rem;
  }
`;
export const LoginBox = styled.div`'
    
  `;

export const MoveImage = styled.div`
  background: #ddd;
  border-radius: 9999px;
  height: 200px;
  margin: 0 auto 20px;
  overflow: hidden;
  position: relative;
  transition: background 200ms ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 200px;
  -webkit-clip-path: circle(100px at center);
    img{
      width: 100%;
    }
    > div{
      animation-name: _26ff033a;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      transform: rotate(-5deg);
      transition-timing-function: ease;
      transform-origin: bottom center;
      will-change: transform;
      > div{
        animation-name: _80e05d29;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        transition-timing-function: ease;
        will-change: transform;
        > div{
          cursor: -webkit-grab;
          position: relative;
          top: 20px;
          transform: translateY(0);
          transition: transform 200ms ease;
          > div{
            animation-name: b847221f;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            transition-timing-function: ease;
            will-change: transform;
            > div{
              left: 50%;
              margin-left: -29px;
              position: absolute;
              top: 100px;
              width: 58px;
                img{
                  left: 0;
                  position: absolute;
                  top: 0;
                  &:nth-child(1){
                    animation-name: _11292128;
                    animation-duration: 3s;
                    animation-iteration-count: infinite;
                    display: block;
                    will-change: opacity;
                  }
                  &:nth-child(2){
                    animation-duration: 3s;
                    animation-iteration-count: infinite;
                    animation-name: _49eaabc4;
                    display: block;
                    will-change: opacity;
                  }
                  &:nth-child(3){

                  }
                }
              }
            }
          }
        }
      }
    }
  `;
export const Form = styled.form`
  color: #000000b3;
`;
export const LoginTitle = styled.h1`
  margin-bottom: 1.6rem;
  padding-bottom: 1.6rem;
  font-size: 2.4rem;
  font-weight: 600;
  border-bottom: 1px solid #0000001a;
`;
export const LoginInput = styled.div`
  font-size: 1.6rem;
  input {
    margin: 0.8rem 0.8rem 0.8rem 0;
    padding: 1.6rem 0.8rem;
    width: 100%;
    height: 38px;
    border: 1px solid #0000001a;
    border-radius: 0.5rem;
  }
`;
export const LoginLabel = styled.label`
  margin: 0.4rem 0 0.8rem;
  font-weight: bold;
`;

export const ForgotLabel = styled.div`
  float: right;
  margin-top: 0.5rem;
  font-size: 1.6rem;
  text-decoration: underline;
`;

export const SignBtn = styled.button`
  margin: 0.8rem 0;
  padding: 0.8rem 1.6rem;
  width: 100%;
  background-color: #fff;
  background-image: linear-gradient(
    -180deg,
    rgba(255, 255, 255, 0.09) 0%,
    rgba(17, 17, 17, 0.04) 100%
  );
  border: 1px solid rgba(22, 22, 22, 0.2);
  border-radius: 0.5rem;
  font-size: 1.6rem;
  color: #000;
`;

export const CreateLink = styled(Link)`
  margin: 1.6rem 0 0.8rem;
  display: block;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
`;
