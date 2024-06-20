import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";
import Loader from "../../ui/Loader";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";

const SigninForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  // ============================== SIGN IN

  const signInAccount = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
      setLoading(false);
      console.log(result);
    } catch (error) {
      console.error("An error occurred:");
      toast({ title: "Incorrect Email and Password" });
      setLoading(isLoading);
      // toast({ title: "Login failed. Please try again."});
    }
  };

  return (
    <div className="flex w-full sm:w-[60%] mx-auto mt-[5em] md:mt-1 p-3 justify-center items-center flex-col">
      {/* <img src="/assets/images/logo.svg" alt="logo" /> */}

      <h2 className="text-[30px] text-white font-bold pt-5 sm:pt-1">
        Log in to your account
      </h2>
      <p className="text-primary_A2 small-medium md:base-regular mt-2">
        Welcome back! Please enter your details.
      </p>
      <div className="flex flex-col gap-5 w-full mt-4">
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="......54@gmail.com"
            className="shad-input w-full px-3 mt-2 rounded-md"
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="shad-input w-full px-3 mt-2 rounded-md"
            required
          />
        </div>

        <Button
          type="submit"
          onClick={signInAccount}
          className="bg-primary_A1 text-white p-3 rounded-md"
        >
          {isLoading ? (
            <div className="flex gap-3 justify-center items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
              Loading...
            </div>
          ) : (
            "Log in"
          )}
        </Button>

        <p className="text-small-regular text-light-2 text-center mt-2">
          Don&apos;t have an account?
          <Link
            to="/sign-up"
            className="text-primary_A2 text-small-semibold ml-1"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;
