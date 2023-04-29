import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./navbar.css";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to={"/"}>
          <div>Home</div>
        </Link>
        {!user ? (
          <Link to={"/Login"}>
            <div>Log In</div>
          </Link>
        ) : (
          <Link to={"/createpost"}>
            <div>Create post</div>
          </Link>
        )}
      </div>
      {user && (
        <div className="user-pic">
          <p>{user?.displayName}</p>
          <img
            src={user?.photoURL || ""}
            width="100"
            height="100"
            alt=""
            referrerPolicy="no-referrer"
          />
          <button onClick={signUserOut}>Log Out</button>
        </div>
      )}
    </div>
  );
};
