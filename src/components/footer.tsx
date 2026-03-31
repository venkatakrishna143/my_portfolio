import { Typography, Button } from "@material-tailwind/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="mt-2 px-8 pt-1">
        <div className="container mx-auto">
          <div className="mt-14 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
            <Typography className="text-center font-normal !text-gray-700">
              &copy; {CURRENT_YEAR} Made with{" "}
              <a
                href="https://www.material-tailwind.com"
                target="_blank"
                rel="noreferrer"
              >
                Material Tailwind
              </a>{" "}
              by{" "}
              <a
                href="https://www.creative-tim.com"
                target="_blank"
                rel="noreferrer"
              >
                Krishna Manepalli
              </a>
              .
            </Typography>
            <ul className="flex gap-8 items-center">
              {LINKS.map((link) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </Typography>
                </li>
              ))}
              <Button color="gray">Subscribe</Button>
            </ul>
          </div>
        </div>
      </footer>

      {/* Floating Social Media Bar */}
      <div className="fixed top-1/3 right-4 flex flex-col gap-4 z-50">
        <a
          href="https://www.linkedin.com/in/manepalli-venkata-krishna-86674a1a0"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-900 transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-400 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </>
  );
}

export default Footer;
