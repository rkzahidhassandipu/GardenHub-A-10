import { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const {createUser, setUser, updateUserInfo, googleSignIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();



  const handleSignUP = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const { email, password, fullName, imageUrl } = Object.fromEntries(formData.entries());

  // ✅ Password validation regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

  if (!passwordRegex.test(password)) {
    toast.error("Password must be at least 8 characters and include 1 uppercase, 1 lowercase, and a special character.");
    return;
  }

  createUser(email, password)
    .then((result) => {
      const user = result.user;
      updateUserInfo({
        displayName: fullName,
        photoURL: imageUrl,
      }).then(() => {
        setUser({ ...user, displayName: fullName, photoURL: imageUrl });
        toast.success("Account created successfully!");
        navigate(location.state || "/");
      }).catch((error) => {
        toast.error("Failed to update profile info");
      });
    })
    .catch((error) => {
      toast.error("Failed to create user: " + error.message);
      form.reset();
    });
};


  const handleSignUpWithGooglePopup = () => {
    googleSignIn()
    .then(result => {
      console.log("You are Sign In with Google. successfully!", result.user.name)
      const user = result.user;
      if(user){
        navigate(`${location.state? location.state : "/"}`)
      }
    })
    .catch(error => {
      console.log("your email not valid", error)
    })
  }

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-800">
      <Helmet>
        <title>Sign Up</title>
        <meta
          name="description"
          content="View and manage all your shared gardening tips."
        />
      </Helmet>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-700 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md text-white">
            <h2 className="mt-6 text-center text-3xl font-extrabold ">
              Create Your Gardener Account
            </h2>
            <p className="mt-2 text-center text-sm ">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Login
              </a>
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSignUP}>
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Your Name"
                required
                className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>


            {/* Image URL */}
            <div>
              <label
                htmlFor="imageUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL
              </label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="url"
                placeholder="https://example.com/your-photo.jpg"
                className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Email (existing) */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Password (existing) */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleSignUpWithGooglePopup}
                type="button"
                className="w-full cursor-pointer inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FcGoogle className="w-5 h-5 mr-2" />
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
