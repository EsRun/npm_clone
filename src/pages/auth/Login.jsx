import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  const TopBorder = styled.div`
    height: 1rem;
    display: flex;
    background-image: linear-gradient(
      139deg,
      #fb8817,
      #ff4b01,
      #c12127,
      #e02aff
    );
  `;

  const Container = styled.div`
    margin: 0 auto;
    width: 48rem;
  `;
  const Header = styled.div`
    margin: 8rem 0 4rem;
    text-align: center;
    svg {
      width: 14.4rem;
    }
  `;
  const LoginBox = styled.div`'
    
  `;

  const MoveImage = styled.div`
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
  return (
    <>
      <TopBorder>
        <Container>
          <Header>
            <Link to={"/"}>
              <svg viewBox="0 0 780 250">
                <path
                  fill="#231F20"
                  d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"
                ></path>
              </svg>
            </Link>
          </Header>
          <LoginBox>
            <div
              style={{
                boxShadow: "0 10px 20px rgb(0 0 0 / 20%)",
                padding: "40px",
              }}
            >
              <div>
                <MoveImage>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <img
                              src="https://static.npmjs.com/a39ceb9e9ad640f4de8eee094063d890.png"
                              alt=""
                            />
                            <img
                              src="https://static.npmjs.com/ecc2a793db0bd5966246e970f9c9ff5e.png"
                              alt=""
                            />
                            <img
                              src="https://static.npmjs.com/6bf09f9948c3044dbb2c7ed8b85098dc.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <img
                          alt=""
                          src="https://static.npmjs.com/c9e19250d48d66f0e9c70c9b3991bbdb.png"
                        ></img>
                      </div>
                    </div>
                  </div>
                </MoveImage>
              </div>
            </div>
          </LoginBox>
        </Container>
      </TopBorder>
    </>
  );
}
