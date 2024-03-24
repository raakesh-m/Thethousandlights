import Image from "next/image";
import contactimg from "../../../public/assets/contact/contactimg.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobileNumber: Yup.string().required("Mobile Number is required"),
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
  return (
    <div className="bg-[#FDF7E4] py-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 2xl:px-32 flex flex-col sm:flex-row">
      <div className="w-full md:w-1/2 md:pr-4">
        <p className="font-judson text-4xl sm:text-6xl text-[#595345] mb-8 sm:mb-14">
          Inquiry
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Handle form submission here
            console.log(values);
            setSubmitting(false);
          }}
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
                  className="font-judson text-lg sm:text-2xl text-[#FDF7E4] bg-[#595345] py-2 px-8 sm:px-10 border border-white transition duration-300 hover:shadow-inset"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
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
