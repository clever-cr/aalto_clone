import Image from "next/image";
import React from "react";
import {
  FaInstagramSquare,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaSnapchatGhost,
  FaBlog,
} from "react-icons/fa";
import Button from "../ui/button";
import Links from "../ui/Links";
import logo from "/public/images/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-[56px]">
      <div className="border-t ">
        <div className="px-[80px] py-[24px] sm:px-5">
          <div className="grid grid-cols-4  sm:grid-cols-1 sm:px-5 ">
            <div className="space-y-[24px]">
              <Image src={logo} alt="logo" />
              <div className="text-lg leading-[26px] text-gray">
                <p>Aalto University</p>
                <p>P.O. Box 11000 (Otakaari 1B)</p>
                <p>FI-00076 AALTO</p>
                <p>Switchboard: +358 9 47001</p>
              </div>
              <div className="space-y-[8px]">
                <h2 className="text-[21px] leading-[25px] text-gray">
                  Follow us:
                </h2>
                <div className="flex gap-x-[20px] sm:justify-between">
                  <FaFacebookF />
                  <FaLinkedinIn />
                  <FaTwitter />
                  <FaInstagramSquare />
                  <FaYoutube />
                  <FaSnapchatGhost />
                  <FaBlog />
                </div>
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-y-[25px] sm:grid-cols-1 sm:pt-[48px] sm:pb-[25px]">
              <div>
                <Links
                  title="QuickLinks"
                  links={[
                    "Research and artistic outputs",
                    " Library – Learning Centre",
                    "Admissions",
                    "Alumni",
                    "Media",
                    "IT services",
                    "Open University",
                    "Aalto University Shop",
                  ]}
                />
              </div>
              <div>
                <Links
                  title="Contact"
                  links={["Campus maps", "Contact information"]}
                />
              </div>
              <div>
                <Links title="Latest" links={["News", "Events", "Careers"]} />
              </div>
              <div>
                <Links
                  title="For students"
                  links={[
                    "Student Guide",
                    "Webmail",
                    "MyCourses",
                    "MyStudies",
                    "Sisu",
                  ]}
                />
              </div>
            </div>
            <div className="space-y-[24px]  sm:border-t  flex flex-col">
              <div className="space-y-[16px] sm:py-[25px]">
                <h2 className="text-[28px] leading-[33px] text-gray">
                  Together towards a better world.
                </h2>
                <p className="text-lg leading-[26px] text-gray">
                  Support new ideas, research, work and leadership development
                  towards a stronger Finland.
                </p>
              </div>

              <button className="px-[31px] py-2.5 bg-black text-white rounded-full  hover:bg-yellow hover:text-black">
                Donate to Aalto University
              </button>
            </div>
          </div>
          <div className="pt-[33px]">
            <div className="flex justify-between border-t py-[24px] sm:flex-col sm:gap-y-[41px]">
              <div className="flex gap-x-[19px] underline sm:flex-col gap-y-[17px]">
                {[
                  "Privacy",
                  "notice",
                  "Cookie",
                  "policy",
                  "Feedback",
                  "Accessibility",
                  "statement",
                  "Cookie",
                  "settings",
                ].map((link, index) => {
                  return (
                    <Link
                      className="hover:bg-light text-base leading-[19px] text-gray hover:w-fit"
                      href="#"
                      key={index}
                    >
                      {link}
                    </Link>
                  );
                })}
              </div>
              <div className="flex gap-x-[19px] sm:flex-col sm:gap-y-[17px] hover:w-fit">
                {["Suomeksi", "Svenska"].map((link, index) => {
                  return (
                    <Link
                      key={index}
                      href="#"
                      className="hover:bg-light text-base leading-[19px] text-gray underline"
                    >
                      {link}
                    </Link>
                  );
                })}
                <Link className="hover:bg-light hover:underline" href="#">
                  {" "}
                  English
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
