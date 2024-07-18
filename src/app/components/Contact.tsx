"use client";

import Image from "next/image";
import contactimg from "../../../public/assets/contact/contactimg.svg";
import contactlogo from "../../../public/assets/contact/contactlogo.svg";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import insta from "../../../public/assets/contact/insta.svg";
import mail from "../../../public/assets/contact/email.svg";
import phone from "../../../public/assets/contact/phone.svg";
import { Link as ScrollLink } from "react-scroll";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  requirements: Yup.string().required("Requirements are required"),
});

const initialValues = {
  name: "",
  mobileNumber: "",
  email: "",
  requirements: "",
};

const options = ["option1", "option2", "option3"];

function Contact() {
  const emailLink = "mailto:storiesbywevow@gmail.com?subject=Stories by we vow";

  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const handleSubmit = async (
    values: typeof initialValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        toast.success("Form submitted successfully");
        resetForm();
      } else {
        const error = await response.json();
        setSubmissionError(error.error);
        toast.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionError(
        "Form submission unsuccessful. Kindly reach out to us via email."
      );
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <p className="font-kalufonia bg-[#FDF7E4] md:text-center text-3xl px-10 md:text-5xl sm:text-6xl text-[#595345] py-4 sm:py-8">
        Inquiry
      </p>
      <div
        id="inquiry"
        className="bg-[#FDF7E4] flex flex-col-reverse md:flex-row relative md:pb-24"
      >
        <ScrollLink
          to="slider"
          smooth={true}
          duration={500}
          className=" hidden md:flex cursor-pointer bottom-0 right-0 md:absolute"
        >
          <Image src={contactlogo} alt="backtotop" />
        </ScrollLink>

        <div className=" w-full md:w-1/2 items-center px-10 md:px-14">
          <div className="md:ml-14">
            <p className="text-[#503C16] text-lg md:text-4xl font-quattrocento font-bold mb-10">
              Get In Touch
            </p>
            <div className="flex-row md:flex-col flex justify-between content-between">
              <div>
                <a
                  href={emailLink}
                  target="_blank"
                  className="flex w-fit cursor-pointer items-center mb-10"
                >
                  <Image
                    src={mail}
                    className="w-[15px] md:w-[30px]"
                    alt="mail"
                  />
                  <p className="font-judson text-sm md:text-xl text-[#503C16] ml-1 md:ml-2">
                    storiesbywevow@gmail.com
                  </p>
                </a>
                <a
                  href="tel:+918124229858"
                  className="flex w-fit cursor-pointer items-center mb-10"
                >
                  <Image
                    src={phone}
                    className="w-[15px] md:w-[30px]"
                    alt="phone"
                  />
                  <p className="font-judson text-sm md:text-xl text-[#503C16] ml-1 md:ml-2">
                    +91 8124229858
                  </p>
                </a>
                <a
                  className="flex w-fit cursor-pointer items-center mb-10"
                  href="https://www.instagram.com/storiesbywevow?igsh=MTVyd2lkc2xjZ253bw=="
                >
                  <Image
                    src={insta}
                    className="w-[15px] md:w-[30px]"
                    alt="insta"
                  />
                  <p className="font-judson text-sm md:text-xl text-[#503C16] ml-1 md:ml-2">
                    storiesbywevow
                  </p>
                </a>
              </div>
              <div className=" justify-end items-end flex md:justify-start md:items-start">
                <div className=" flex w-fit mb-10">
                  <a
                    className="button2 md:scale-125 md:ml-4"
                    target="_blank"
                    href="https://wa.me/+918124229858?text=Hi"
                  >
                    WhatsApp
                    <svg
                      viewBox="0 0 48 48"
                      y="0px"
                      x="0px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                        fill="#fff"
                      ></path>
                      <path
                        d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                        fill="#fff"
                      ></path>
                      <path
                        d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                        fill="#cfd8dc"
                      ></path>
                      <path
                        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                        fill="#40c351"
                      ></path>
                      <path
                        clipRule="evenodd"
                        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                        fillRule="evenodd"
                        fill="#fff"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-20 w-fit">
            <Image src={contactimg} alt="Couple" />
          </div>
        </div>
        <div className=" w-full md:w-1/2 items-center px-10 md:px-14 ">
          <p className="text-[#503C16] text-4xl font-quattrocento hidden md:flex font-bold mb-4">
            Contact
          </p>
          <p className="text-[#503C16] text-lg md:text-3xl font-yrsa md:w-1/2  mb-10">
            Please enter your details below to get in touch
          </p>
          <Toaster position="bottom-center" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="gap-6 sm:gap-8 flex flex-col">
                <div className="flex flex-col h-16  relative">
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="border-b border-[#BBAB8C] text-black py-2 placeholder-[#504531] text-lg sm:text-2xl font-judson bg-transparent focus:outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm absolute bottom-[-5px] left-0"
                  />
                </div>
                <div className="flex flex-col h-16  relative">
                  <Field
                    id="mobileNumber"
                    name="mobileNumber"
                    type="text"
                    placeholder="Mobile Number"
                    className="border-b border-[#BBAB8C] text-black py-2 placeholder-[#504531] text-lg sm:text-2xl font-judson bg-transparent focus:outline-none w-full"
                  />
                  <ErrorMessage
                    name="mobileNumber"
                    component="div"
                    className="text-red-500 text-sm absolute bottom-[-5px] left-0"
                  />
                </div>
                <div className="flex flex-col h-16  relative">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="border-b border-[#BBAB8C] text-black py-2 placeholder-[#504531] text-lg sm:text-2xl font-judson bg-transparent focus:outline-none w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm absolute bottom-[-5px] left-0"
                  />
                </div>
                <div className="flex flex-col h-16  relative">
                  <Field
                    id="requirements"
                    name="requirements"
                    type="text"
                    placeholder="Requirements"
                    className="border-b border-[#BBAB8C] text-black py-2 placeholder-[#504531] text-lg sm:text-2xl font-judson bg-transparent focus:outline-none w-full"
                  />
                  <ErrorMessage
                    name="requirements"
                    component="div"
                    className="text-red-500 text-sm absolute bottom-[-5px] left-0"
                  />
                </div>
                <div className=" flex mb-10 justify-end items-end md:justify-start md:items-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative inline-flex items-center text-lg sm:text-2xl font-judson justify-start py-2 md:py-3 sm:px-12 px-8 overflow-hidden text-[#595345] transition-all duration-150 ease-in-out rounded bg-gray-100 group"
                  >
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#595345] group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"></span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"></span>
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#FDF7E4]">
                      Submit
                    </span>
                  </button>
                </div>
                {submissionError && (
                  <div className="text-red-500 text-sm">{submissionError}</div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Contact;
