import React from "react";

import { FaFax } from "react-icons/fa6";
import { IoHomeSharp, IoMail } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa6";
import logo from "../../images/download.png";

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="basis-auto flex justify-between  bg-black w-4/4 h-40 mt-20">
                <div className="w-1/4 p-4 justify-items-center  ">
                    <p className="text-blue-600  mb-3">
                        <span className="font-extrabold block text-2xl ">
                            Medical
                        </span>
                        <span className="text-white text-sm">
                            Focus on your Health Our Hospital serveice is good
                            plaease come and get Good treatment Good doctor good
                            nurse
                        </span>
                    </p>
                </div>
                <div className="w-1/4 p-4 justify-items-center ">
                    <p className="text-white  mb-3">
                        <span className="font-bold block "> Medicines</span>
                        <span className="inline  text-sm ">
                            Pharmacy only
                            <br />
                            Prescription only medication
                            <br />
                            Controlled drugs
                            <br />
                            Herbal medicines
                            <br />
                        </span>
                    </p>
                </div>
                <div className=" mr-20 p-3 justify-items-center">
                    <p className="text-white  mb-3">
                        <span className="font-bold block "> Services</span>
                        <span className="inline  text-sm ">
                            Pharmacy
                            <br />
                            Laboratory
                            <br />
                            Emergency
                            <br />
                            Medicines
                            <br />
                        </span>
                    </p>
                </div>
                <div className="w-1/4 justify-items-center p-3  ">
                    <p className="text-white  mb-3">
                        <span className="font-bold block"> Contact</span>

                        <div className="text-sm text-white space-y-3">
                            <div className="flex items-center gap-2">
                                <IoHomeSharp />
                                <span>Alvai East Jaffna</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <IoMail />
                                <span>Media45@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FaFax />
                                <span>+94 563737377</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FaPhone />
                                <span>021 2265754</span>
                            </div>
                        </div>
                    </p>
                </div>
            </div>

            <hr className=" mx-auto border-t border-blue-900 my-4" />
            <div>
                <div className="flex  gap-96   h-20 ">
                    <img src={logo} alt="logo" className="h-20 ml-16" />

                    <p className="text-center text-white mt-6  ">
                        @2025 Copyright:Medical Hospital
                    </p>

                    <p className="text-white mt-6  ">
                        <span className="flex  text-lg space-x-3 ">
                            {" "}
                            <p>
                                <FaFacebook />
                            </p>{" "}
                            <p>
                                <FaInstagram />
                            </p>{" "}
                            <p>
                                <FaLinkedin />
                            </p>{" "}
                            <p>
                                {" "}
                                <FaPhone />
                            </p>{" "}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
