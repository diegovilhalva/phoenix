import { Link, Form } from "react-router-dom"
import PageTitle from "../components/PageTitle"
import { logoLight, logoDark, banner } from "../assets/assets"
import TextField from "../components/TextField"
import Button from "../components/Button"


const Register = () => {
    return (
        <>
            <PageTitle title="Create an account" />
            <div className="relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2">
                <div className="flex flex-col p-4">
                    <Link to={"/"} className="max-w-max mx-auto lg:mx-0">
                        <img src={logoLight} alt="phoenix logo" width={133} height={24} className="dark:hidden" />

                        <img src={logoDark} alt="phoenix logo" width={133} height={24} className="hidden dark:block" />
                    </Link>
                    <div className="flex flex-col gap-2 max-w-[480px] w-full mx-auto">
                        <h2 className="text-displaySmall font-semibold text-light-onBackground text-center">Create an account</h2>
                        <p className="text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant">
                            Register today and gain access to powerful tools that wil supercharge your ideas
                        </p>
                        <Form method="POST" className="">
                            <TextField type="text" name="name" label='Full name' placeholder="Full name" required={true} autoFocus={true} />
                            <TextField type="email" name="email" label="Email" placeholder="Email" />
                            <TextField type="password" name="password" label="Password" placeholder="Enter your password" required={true} />
                            <Button type="submit" >
                                Create account
                            </Button>
                        </Form>
                        <p className="">
                            Already have an account?
                            <Link to="/login" >
                                Sign in
                            </Link>
                        </p>
                    </div>

                    <p className="">
                        &copy; 2024 Diego Vilhalva. All Rights reserved.
                    </p>
                </div >
                <div className="">
                    <img src={banner} alt="" className="img-cover" />
                    <p className="">
                    Chat with Phoenix to supercharge your ideas.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Register