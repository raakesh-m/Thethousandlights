import Image from "next/image";
import contactimg from "../../../public/assets/contact/contactimg.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  option: Yup.string().required("Please select an option"),
  requirements: Yup.string().required("Requirements are required"),
});

const initialValues = {
  name: "",
  mobileNumber: "",
  email: "",
  option: "",
  requirements: "",
};

const options = ["option1", "option2", "option3"];

function Contact() {
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const handleSubmit = async (
    values: typeof initialValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    try {
      // console.log("values are", values);
      const response = await fetch("/nodemailer/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      console.log("Form submitted successfully");
      resetForm();
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
    <div className="bg-[#FDF7E4] py-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 2xl:px-32 flex flex-col sm:flex-row">
      <div className="w-full md:w-1/2 md:pr-4">
        <p className="font-judson text-4xl sm:text-6xl text-[#595345] mb-8 sm:mb-14">
          Inquiry
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="gap-6 sm:gap-8 flex flex-col">
              <div className="flex flex-col">
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="border-b border-[#BBAB8C] text-black py-2 placeholder-[#BBAB8C] text-lg sm:text-2xl font-judson bg-transparent focus:outline-none w-full"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="flex flex-col">
                <Field
                  id="mobileNumber"
                  name="mobileNumber"
                  type="text"
                  placeholder="Mobile Number"
                  className="border-b border-[#BBAB8C] text-black py-2 placeholder-[#BBAB8C] text-lg sm:text-2xl font-judson bg-transparent focus:outline-none w-full"
                />
                <ErrorMessage
                  name="mobileNumber"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="flex flex-col">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="border-b border-[#BBAB8C] text-black py-2 placeholder-[#BBAB8C] text-lg sm:text-2xl font-judson bg-transparent focus:outline-none w-full"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="flex flex-col">
                <Field
                  id="option"
                  as="select"
                  name="option"
                  className="border-b border-[#BBAB8C] py-2 text-lg sm:text-2xl text-black font-judson bg-[#FDF7E4]  w-full"
                >
                  <option disabled hidden value="" className="">
                    Options
                  </option>
                  {options.map((option) => (
                    <option
                      className=" bg-[#FDF7E4] text-black"
                      key={option}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="option"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="flex flex-col">
                <Field
                  id="requirements"
                  name="requirements"
                  type="text"
                  placeholder="Requirements"
                  className="border-b border-[#BBAB8C] text-black py-2 placeholder-[#BBAB8C] text-lg sm:text-2xl font-judson bg-transparent focus:outline-none w-full"
                />
                <ErrorMessage
                  name="requirements"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="flex items-end justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative inline-flex items-center text-lg sm:text-2xl font-judson justify-start py-3 sm:px-12 px-8 overflow-hidden  text-[#595345] transition-all duration-150 ease-in-out rounded bg-gray-100 group"
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
      <div className="hidden md:flex w-1/2  items-center justify-end">
        <Image src={contactimg} alt="Couple" />
      </div>
    </div>
  );
}

export default Contact;
