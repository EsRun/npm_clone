import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../redux/reducer";
import { useSelector, useDispatch } from "react-redux";
import {
  TopBorder,
  Container,
  Form,
  Header,
  AuthBox,
  Input,
  Label,
  Title,
  MoveImage,
  SignBtn,
  ForgotLabel,
  CreateLink,
} from "../../resources/css/auth/AuthStyle";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const input1 = useRef(null);
  const auth = useSelector((state) => state.auth.isAuth);
  const [authValues, setAuthValues] = useState({
    username: "",
    password: "",
  });

  const { username, password } = authValues;
  const handleLogin = () => {
    dispatch(authActions.logIn({ isAuth: true, userName: username }));
    navigate("/");
  };

  // 사용자 정보 설정
  const getUserInfo = (e) => {
    setAuthValues({
      ...authValues,
      [e.target.name]: e.target.value,
    });
  };

  // 로그인 엔터
  const loginEnter = (e) => {
    if (e.keyCode === 13) {
      handleLogin();
    }
  };

  useEffect(() => {
    // 페이지 접속 시 id input에 포커싱
    input1.current.focus();
    // 로그인 상태 시 루트로 이동, replace 옵션 차이가 없음 뭐지?
    if (auth) navigate("/", { replace: false });
  }, [auth]);

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
          <AuthBox>
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
                <Form id="login">
                  <Title>Sign In</Title>
                  <Input>
                    <div>
                      <Label htmlFor="login_username" autoComplete="off">
                        Username
                      </Label>
                    </div>
                    <input
                      type="text"
                      id="login_username"
                      aria-required="false"
                      aria-invalid="false"
                      name="username"
                      value={username}
                      onChange={getUserInfo}
                      onKeyDown={loginEnter}
                      ref={input1}
                    />
                  </Input>
                  <ForgotLabel>
                    <Link to={"/forgot"}>Forgot password?</Link>
                  </ForgotLabel>
                  <Input>
                    <div>
                      <Label htmlFor="login_password">Password</Label>
                    </div>
                    <input
                      type="password"
                      id="login_password"
                      aria-required="false"
                      aria-invalid="false"
                      required=""
                      minLength="0"
                      name="password"
                      value={password}
                      onChange={getUserInfo}
                      element="input"
                    />
                  </Input>
                  <input type="hidden" aria-hidden="true" name="csrftoken" />
                  <SignBtn type="button" onClick={handleLogin}>
                    Sign In
                  </SignBtn>
                </Form>
                <CreateLink to={"/signup"} rel="npm:signup">
                  Create Account
                </CreateLink>
              </div>
            </div>
          </AuthBox>
        </Container>
      </TopBorder>
    </>
  );
}
