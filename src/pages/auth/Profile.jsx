import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ProfileArrowIcon,
  ProfileBox,
  ProfileBtn,
  ProfileBtnImg,
  ProfileMenu,
  ProfileMenuBox,
  ProfileUl,
  ProfileLi,
} from "../../resources/css/auth/profileStyle";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/reducer";
import { useEffect } from "react";

export default function Profile() {
  const auth = useSelector((state) => state.auth);
  const [profileToggle, setProfileToggle] = useState(false);
  const dispatch = useDispatch();

  // 로그아웃
  const handleLogout = (e) => {
    dispatch(authActions.logOut(auth));
  };

  // 프로필 토글
  const profileToggleFn = (e) => {
    setProfileToggle((el) => !el);
  };

  useEffect(() => {
    console.log("profile component");
  }, []);
  return (
    <>
      <ProfileBox>
        <nav>
          <ProfileBtn onClick={profileToggleFn}>
            <ProfileBtnImg
              alt="avatar"
              src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hMWNjYWI4NjQyNDIzNTM2NTZlNzczMDkyOGZlNDUzMT9zaXplPTUwJmRlZmF1bHQ9cmV0cm8ifQ.2Ly7jdtT7TS3c0J2TebQVuFSEufCpOqZCSihSs_E-pE"
            />
            <ProfileArrowIcon>
              <svg viewBox="0 0 11.64 5.82" height="6px" fill="#666">
                <g id="6a308a62-c62e-4b78-87b6-759dd1ef54e5">
                  <polygon points="10 0 5 5 0 0 10 0"></polygon>
                </g>
              </svg>
            </ProfileArrowIcon>
          </ProfileBtn>
          <ProfileMenuBox>
            <ProfileMenu toggle={profileToggle}>
              <h2
                style={{
                  margin: "0",
                  paddingBottom: "14px",
                  fontSize: "19px",
                  color: "#4d4d4d",
                  borderBottom: "1px solid #e5e5e5",
                  fontWeight: "600",
                }}
              >
                {auth.userName}
              </h2>
              <ProfileUl>
                <ProfileLi>
                  <Link>Profile</Link>
                </ProfileLi>
                <ProfileLi>
                  <Link>Packages</Link>
                </ProfileLi>
                <ProfileLi>
                  <Link>Acoount</Link>
                </ProfileLi>
                <ProfileLi>
                  <Link>Biling Info</Link>
                </ProfileLi>
                <ProfileLi>
                  <Link>Access Token</Link>
                </ProfileLi>
                <ProfileLi>
                  <Link>Add Organization</Link>
                </ProfileLi>
                <ProfileLi onClick={handleLogout}>
                  <Link>Sign Out</Link>
                </ProfileLi>
              </ProfileUl>
            </ProfileMenu>
          </ProfileMenuBox>
        </nav>
      </ProfileBox>
    </>
  );
}
