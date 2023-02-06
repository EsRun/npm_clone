import { useState } from "react";
import { Link } from "react-router-dom";
import { ProfileDiv, ProfileUl } from "../../resources/css/headerStyle";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../redux/reducer";

export default function Profile() {
  const [profileToggle, setProfileToggle] = useState(false);
  const dispatch = useDispatch();

  // 로그아웃
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(authActions.logOut({ isAuth: false }));
  };

  // 프로필 토글
  const profileToggleFn = (e) => {
    e.preventDefault();
    setProfileToggle((el) => !el);
  };

  return (
    <>
      <Profile onClick={profileToggleFn}>
        <nav>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
            aria-label="Profile menu"
            aria-expanded="true"
          >
            <img
              style={{
                width: "40px",
                borderRadius: "100%",
                border: "1px solid #000",
              }}
              alt="avatar"
              src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hMWNjYWI4NjQyNDIzNTM2NTZlNzczMDkyOGZlNDUzMT9zaXplPTUwJmRlZmF1bHQ9cmV0cm8ifQ.2Ly7jdtT7TS3c0J2TebQVuFSEufCpOqZCSihSs_E-pE"
              aria-hidden="true"
            />
            <div style={{ paddingLeft: "0.4rem" }} aria-hidden="true">
              <svg viewBox="0 0 11.64 5.82" height="6px" fill="#666">
                <g id="6a308a62-c62e-4b78-87b6-759dd1ef54e5">
                  <polygon points="10 0 5 5 0 0 10 0"></polygon>
                </g>
              </svg>
            </div>
          </button>
          <span>
            <ProfileDiv toggle={profileToggle}>
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
                아이디
              </h2>
              <ProfileUl>
                <li>
                  <Link>Profile</Link>
                </li>
                <li>
                  <Link>Packages</Link>
                </li>
                <li>
                  <Link>Acoount</Link>
                </li>
                <li>
                  <Link>Biling Info</Link>
                </li>
                <li>
                  <Link>Access Token</Link>
                </li>
                <li>
                  <Link>Ad Organization</Link>
                </li>
                <li onClick={handleLogout}>
                  <Link>Sign Out</Link>
                </li>
              </ProfileUl>
            </ProfileDiv>
          </span>
        </nav>
      </Profile>
    </>
  );
}
