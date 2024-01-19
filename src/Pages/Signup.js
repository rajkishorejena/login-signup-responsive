import CommonCard from "../Components/CommonCard"
import SignupCard from "../Components/SignupCard"


const SignUp = () =>{
    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <CommonCard />
        < SignupCard/>
      </section>
    )
};

export default SignUp;