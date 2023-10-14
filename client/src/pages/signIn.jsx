import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Footer } from "@/components";

export function SignIn() {
  return (
    <>

      <div className="absolute inset-0 z-0 h-full w-full bg-[url('SVGs/signUp.svg')]" />
      
      <Card className="absolute top-2/4 left-2/4 mt-14 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
        <CardHeader
          variant="gradient"
          className="bg-black mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input variant="standard" type="email" label="Email" size="lg" />
          <Input
            variant="standard"
            type="password"
            label="Password"
            size="lg"
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don't have an account?
            {/* <Link to="/sign-up"> */}
              <Typography
                as="span"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            {/* </Link> */}
          </Typography>
        </CardFooter>
      </Card>
      
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default SignIn;
