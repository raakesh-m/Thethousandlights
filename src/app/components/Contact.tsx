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
    <>
      <div className=" bg-[#FDF7E4] h-fit py-20 px-44 w-full flex ">
        <div className="w-1/2 px-14">
          <p className=" font-judson text-6xl text-[#595345] mb-14">Inquiry</p>
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
              <Form className=" gap-7 flex flex-col">
                <div className="flex flex-col ">
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="border-b border-[#BBAB8C] text-black py-1 placeholder-[#BBAB8C] text-[32px] font-judson bg-transparent focus:outline-none w-full"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex flex-col ">
                  <Field
                    id="mobileNumber"
                    name="mobileNumber"
                    type="text"
                    placeholder="Mobile Number"
                    className="border-b border-[#BBAB8C] text-black py-1 placeholder-[#BBAB8C] text-[32px] font-judson bg-transparent focus:outline-none w-full"
                  />
                  <ErrorMessage
                    name="mobileNumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex flex-col ">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="border-b border-[#BBAB8C] text-black py-1 placeholder-[#BBAB8C] text-[32px] font-judson bg-transparent focus:outline-none w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex flex-col ">
                  <Field
                    id="option"
                    as="select"
                    name="option"
                    className="border-b border-[#BBAB8C] py-1 text-[32px] text-[#BBAB8C] font-judson bg-transparent focus:outline-none w-full"
                  >
                    <option
                      disabled
                      hidden
                      value=""
                      className="text-[32px] font-judson text-[#BBAB8C] "
                    >
                      Options
                    </option>
                    {options.map((option) => (
                      <option
                        className="text-[32px] py-1 font-judson text-[#BBAB8C] bg-[#FDF7E4] "
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

                <div className="flex flex-col ">
                  <Field
                    id="requirements"
                    name="requirements"
                    type="text"
                    placeholder="Requirements"
                    className="border-b border-[#BBAB8C] text-black py-1 placeholder-[#BBAB8C] text-[32px] font-judson bg-transparent focus:outline-none w-full"
                  />
                  <ErrorMessage
                    name="requirements"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex items-end justify-end">
                  <button
                    className="font-judson text-[32px] text-[#FDF7E4] bg-[#595345] py-1 px-10 border border-white"
                    style={{
                      transition: "box-shadow 0.3s",
                      boxShadow: "0 2px 0 0 #FFF",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "inset 0 -3px 0 0 #FFF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                    }}
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
        <div className="w-1/2 flex items-end justify-end ">
          <Image src={contactimg} alt="Couple" />
        </div>
      </div>
    </>
  );
}

export default Contact;
