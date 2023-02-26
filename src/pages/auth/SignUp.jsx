import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../redux/reducer";
import { useSelector, useDispatch } from "react-redux";
import {
  TopBorder,
  Container,
  Form,
  Header,
  LoginBox,
  LoginInput,
  LoginLabel,
  LoginTitle,
  MoveImage,
  SignBtn,
  ForgotLabel,
  CreateLink,
} from "../../components/styles/LoginStyle";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const input1 = useRef(null);
  const auth = useSelector((state) => state.auth.isAuth);
  const [authValues, setAuthValues] = useState({
    username: "",
    password: "",
  });

  const { username, password } = authValues;
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
                <Form id="login">
                  <LoginTitle>Sign Up</LoginTitle>
                  <LoginInput>
                    <div>
                      <LoginLabel htmlFor="login_username" autoComplete="off">
                        Username *
                      </LoginLabel>
                    </div>
                    <input
                      type="text"
                      id="login_username"
                      aria-required="false"
                      aria-invalid="false"
                      name="username"
                    />
                  </LoginInput>
                  <LoginInput>
                    <div>
                      <LoginLabel htmlFor="login_username" autoComplete="off">
                        Email address *
                      </LoginLabel>
                    </div>
                    <input
                      type="text"
                      id="login_username"
                      aria-required="false"
                      aria-invalid="false"
                      name="username"
                    />
                  </LoginInput>
                  <LoginInput>
                    <div>
                      <LoginLabel htmlFor="login_password">
                        Password *
                      </LoginLabel>
                    </div>
                    <input
                      type="password"
                      id="login_password"
                      aria-required="false"
                      aria-invalid="false"
                      required=""
                      minLength="0"
                      name="password"
                    />
                  </LoginInput>
                  <input type="hidden" aria-hidden="true" name="csrftoken" />
                  <SignBtn type="button">Create an Account</SignBtn>
                </Form>
                <CreateLink to={"/signup"} rel="npm:signup">
                  Create Account
                </CreateLink>
              </div>
            </div>
          </LoginBox>
        </Container>
      </TopBorder>
    </>
  );
}
