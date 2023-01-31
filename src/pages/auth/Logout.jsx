import { authActions } from "../../redux/reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Logout() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(authActions.logOut({ isAuth: false }));
  };
  return <div>Logout</div>;
}
