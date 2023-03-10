import React, { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  TopBorder,
  Container,
  Form,
  Header,
  AuthBox,
  Input,
  Label,
  Title,
  SignBtn,
  CreateLink,
} from "../../resources/css/auth/AuthStyle";

export default function SignUp() {
  const inputRef = useRef([]); // 배열로 ref 선언
  const [signUpValues, setSignUpValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  //if(inputRef.current[0].value === "") alert('이름을 입력해 주세요.');

  // input state update
  const setSignUp = (e) => {
    setSignUpValues({
      ...signUpValues,
      [e.target.name]: [e.target.value],
    });
  };

  // 회원가입 버튼
  const handleSignUp = () => {
    console.log(JSON.stringify(signUpValues));
    Navigate("/");
  };

  useEffect(() => {
    console.log("signUp component");
  }, []);
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
                <Form id="login">
                  <Title>Sign Up</Title>
                  <Input>
                    <div>
                      <Label htmlFor="login_username" autoComplete="off">
                        Username *
                      </Label>
                    </div>
                    <input
                      type="text"
                      aria-required="false"
                      aria-invalid="false"
                      name="username"
                      onChange={setSignUp}
                      ref={(el) => (inputRef.current[0] = el)}
                    />
                  </Input>
                  <Input>
                    <div>
                      <Label htmlFor="login_username" autoComplete="off">
                        Email address *
                      </Label>
                    </div>
                    <input
                      type="text"
                      aria-required="false"
                      aria-invalid="false"
                      name="email"
                      onChange={setSignUp}
                      ref={(el) => (inputRef.current[1] = el)}
                    />
                    <p>
                      Your email address will be added to the metadata of
                      packages that you publish, so it may be seen publicly.
                    </p>
                  </Input>
                  <Input>
                    <div>
                      <Label htmlFor="login_password">Password *</Label>
                    </div>
                    <input
                      type="password"
                      id="login_password"
                      aria-required="false"
                      aria-invalid="false"
                      required=""
                      minLength="0"
                      name="password"
                      onChange={setSignUp}
                      ref={(el) => (inputRef.current[2] = el)}
                    />
                    <p>
                      Minimum of 10 characters and must meet our{" "}
                      <Link
                        to={"https://docs.npmjs.com/creating-a-strong-password"}
                        aria-label="Minimum of 10 characters and must meet our  password guidelines."
                      >
                        password guidelines
                      </Link>
                    </p>
                  </Input>
                  <input type="hidden" aria-hidden="true" name="csrftoken" />
                  <SignBtn type="button" onClick={handleSignUp}>
                    Create an Account
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
