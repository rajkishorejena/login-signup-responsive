import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch,useSelector } from "react-redux";
import {addUser} from "../Redux/Slice/UserInfoSlice"
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";


const SignupSchema = Yup.object().shape({
  userName: Yup.string().required("Please enter your username."),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
  password: Yup.string().min(5).required("Please enter your password and length should 5"),
});

const SignupCard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {users}  = useSelector((state)=>state.userInfo)

  const handleSubmit = async(values, { setSubmitting }) => {
 
    // console.log("Form submitted successfully!", values);

    const response  = users.filter((users)=>users.email===values.email)
    if(response.length){
       toast.error("User Already Exits");
       setSubmitting(false);
       return;
    }
    
    const hashedPassword = await bcrypt.hash(values.password, 10);
    dispatch(addUser({...values,password:hashedPassword}));
 
    setSubmitting(false);
    navigate("/")
  };

  return (
    <div className="md:w-2/5 max-w-md">
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="text-center md:text-left">
              <label className="mr-1">SignUp with</label>
              <button
                type="button"
                className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>
              <button
                type="button"
                className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
            </div>
            <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                Or
              </p>
            </div>
            <Field
              type="text"
              name="userName"
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4"
              placeholder="Enter Your User Name"
            />
            <ErrorMessage
              name="userName"
              component="p"
              className="text-red-500 text-sm mb-4"
            />
            <Field
              type="email"
              name="email"
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4"
              placeholder="Email Address"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm mb-4"
            />
            <Field
              type="password"
              name="password"
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm mb-4"
            />

            <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <Field type="checkbox" name="rememberMe" className="mr-1" />
                <span>Remember Me</span>
              </label>
              <a
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                href="#"
              >
                Forgot Password?
              </a>{" "}
            </div>

            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </button>
        

            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Already have an account?{" "}
              <a
                className="text-red-600 hover:underline hover:underline-offset-4"
                href="/"
              >
                Login
              </a>{" "}
            </div>
          </Form>
        )}
      </Formik>

      <ToastContainer />
    </div>
  );
};

export default SignupCard;

