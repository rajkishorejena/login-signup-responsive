import CommonCard from "../Components/CommonCard";
import LoginCard from "../Components/LoginCard";

const Login = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <CommonCard />
      <LoginCard />
    </section>
  );
};

export default Login;
