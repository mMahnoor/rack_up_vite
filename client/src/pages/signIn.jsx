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
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" preserveAspectRatio="none" viewBox="0 0 1440 560">
        <g mask="url(&quot;#SvgjsMask1507&quot;)" fill="none">
          <rect width="1440" height="560" x="0" y="0" fill="url(&quot;#SvgjsLinearGradient1508&quot;)"></rect>
          <path d="M1283.7807971366346 448.84227325396364L1421.9916984880597 378.5861351835346 1309.6309650492024 302.7978635203638z" fill="rgba(119, 142, 28, 0.4)" class="triangle-float2"></path>
          <path d="M449.527,467.256C495.249,467.561,541.227,452.343,565.802,413.786C592.197,372.374,596.777,318.327,571.152,276.435C546.438,236.032,496.859,222.01,449.527,223.694C405.414,225.263,364.803,246.778,342.021,284.586C318.453,323.698,312.745,372.9,335.906,412.254C358.78,451.121,404.429,466.955,449.527,467.256" fill="rgba(119, 142, 28, 0.4)" class="triangle-float3"></path>
          <path d="M1345.803,308.601C1403.043,311.351,1462.594,289.457,1490.513,239.412C1517.887,190.343,1501.731,130.654,1471.498,83.293C1443.787,39.882,1397.288,11.409,1345.803,12.714C1296.4,13.966,1255.237,46.511,1230.677,89.395C1206.286,131.985,1200.505,183.123,1223.326,226.575C1247.813,273.199,1293.201,306.074,1345.803,308.601" fill="rgba(119, 142, 28, 0.4)" class="triangle-float1"></path>
          <path d="M838.9062935947978 22.215766372328837L899.5169910578136 87.21278182443939 964.5140065099242 26.602084361423614 903.9033090469084-38.394931090686946z" fill="rgba(119, 142, 28, 0.4)" class="triangle-float3"></path>
          <path d="M275.744,521.723C315.38,521.329,348.095,494.216,367.832,459.841C387.475,425.629,395.109,383.297,374.555,349.625C354.667,317.044,313.897,307.821,275.744,308.982C239.937,310.072,205.796,324.947,186.829,355.338C166.673,387.633,162.486,428.128,180.429,461.703C199.396,497.195,235.504,522.123,275.744,521.723" fill="rgba(119, 142, 28, 0.4)" class="triangle-float2"></path>
          <path d="M1466.0037400421859 44.741070348805216L1339.0038759412175 98.64931432170853 1392.912119914121 225.64917842267678 1519.9119840150893 171.74093444977348z" fill="rgba(119, 142, 28, 0.4)" class="triangle-float1"></path>
        </g>
        <defs>
          <mask id="SvgjsMask1507">
              <rect width="1440" height="560" fill="#ffffff"></rect>
          </mask>
          {/* <linearGradient x1="15.28%" y1="-39.29%" x2="84.72%" y2="139.29%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1508">
              <stop stop-color="#0e2a47" offset="0"></stop>
              <stop stop-color="rgba(158, 154, 0, 0)" offset="1"></stop>
          </linearGradient> */}
          <style>
            {`
              @keyframes float1 {
                0%{transform: translate(0, 0)}
                50%{transform: translate(-10px, 0)}
                100%{transform: translate(0, 0)}
              }

              .triangle-float1 {
                animation: float1 5s infinite;
              }

              @keyframes float2 {
                  0%{transform: translate(0, 0)}
                  50%{transform: translate(-5px, -5px)}
                  100%{transform: translate(0, 0)}
              }

              .triangle-float2 {
                  animation: float2 4s infinite;
              }

              @keyframes float3 {
                  0%{transform: translate(0, 0)}
                  50%{transform: translate(0, -10px)}
                  100%{transform: translate(0, 0)}
              }

              .triangle-float3 {
                  animation: float3 6s infinite;
              }
           `}
          </style>
        </defs>
      </svg>
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
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
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default SignIn;
