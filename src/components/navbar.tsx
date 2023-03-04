import { Link } from "react-router-dom";
import { auth } from "../config/firebase";

export const Navbar = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/Login"}>Log In</Link>
      </div>
      <p>{auth.currentUser?.displayName}</p>
      <img
        src={auth.currentUser?.photoURL || ""}
        width="100"
        height="100"
        alt=""
      />
    </div>
  );
};
