import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div>
        <Link to={"/"}>Home</Link>
        {!user ? (
          <Link to={"/Login"}>Log In</Link>
        ) : (
          <Link to={"/createpost"}>Create post</Link>
        )}
      </div>
      {user && (
        <div>
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
