import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ brandName, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {brandName}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
    brandName: (
        <img
        src="/img/ru_new_logo.png"
        alt="Logo"
        width="100" 
        />
    ),
    description: "",
    socials: [
        {
            color: "blue",
            name: "facebook",
            path: "",
        },
        {
          color: "light-blue",
          name: "twitter",
          path: "",
        }
    ],
    copyright: (
        <>
          Copyright © {year} Rack Up at {" "}
          <a
            href=""
            target="_blank"
            className="text-blue-gray-500 transition-colors hover:text-blue-500"
          >
            www.rackup.com
          </a>
          
        </>
      ),
    
};

export default Footer;
