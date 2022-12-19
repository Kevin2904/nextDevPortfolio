import { useEffect, useState } from "react";
import axios from "axios";
import ModalResponse from "./contact/modalResponse";
export default function Contact() {
  const [displyModal, setDisplayModal] = useState(false);
  const [emptyName, setEmptyName] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [emailSent, setEmailSent] = useState({
    icon: "",
    title: "",
    text: "",
  });
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (!displyModal) {
      setEmailSent({
        icon: "",
        title: "",
        text: "",
      });
    }
  }, [displyModal]);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validateEmptyFields = (name, email, message) => {
    if (name == "" || email == "" || message == "") {
      return false;
    } else {
      return true;
    }
  };

  const defineErrors = (name, email, message) => {
    if (name == "") {
      setEmptyName(true);
    }

    if (email == "") {
      setEmptyEmail(true);
    }

    if (message == "") {
      setEmptyMessage(true);
    }

    if (!validateEmail(email)) {
      setInvalidEmail(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      validateEmptyFields(values.name, values.email, values.message) &&
      validateEmail(values.email)
    ) {
      setDisplayModal(true);
      try {
        const request = await fetch("http://localhost:3000/api/send", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (request.status == 200) {
          setEmailSent({
            icon: "/assets/icons/check.png",
            title: "Thank you!",
            text: "I'll be in touch soon.",
          });

          setValues({
            name: "",
            email: "",
            message: "",
          });
        }
      } catch (err) {
        setEmailSent({
          icon: "/assets/icons/error.png",
          title: "Ooops!",
          text: "Something went wrong, please try again.",
        });
      }
    } else {
      defineErrors(values.name, values.email, values.message);
    }
  };

  const handleChange = (e) => {
    const newData = { ...values };
    console.log(e.target.value);
    newData[e.target.id] = e.target.value;
    setValues(newData);
  };

  return (
    <div
      id="contact"
      className=" w-full h-screen bg-[#072966] flex flex-col justify-center  items-center  relative "
    >
      <div className=" absolute top-0 flex flex-col justify-center  items-center mt-20">
        <div className=" w-[800px] h-[550px] bg-[#1f3a8a]  rounded-md mt-10 border-4 border-[#2196f3] pl-10  grid grid-cols-3 ">
          <div className=" col-span-2 pt-5">
            <div className=" w-full flex flex-row  justify-start items-center ">
              <h1 className=" text-white text-5xl  font-bold">Contact</h1>
            </div>

            <div className=" mt-10">
              <form method="post" onSubmit={(e) => handleSubmit(e)}>
                <div className=" flex flex-col w-[70%]">
                  <input
                    type="text"
                    id="name"
                    className=" bg-inherit border-b-2 border-b-white outline-none text-white w-full  placeholder-white"
                    placeholder="Your name"
                    onChange={handleChange}
                    value={values.name}
                    autoComplete="off"
                    onClick={() => {
                      setEmptyName(false);
                    }}
                  />
                  <span
                    className={`${
                      emptyName
                        ? " bg-red-700 text-white text-lg visible w-full rounded-b-md px-2 block"
                        : " hidden"
                    }`}
                  >
                    Name is a must
                  </span>
                </div>

                <div className=" flex flex-col w-[70%]">
                  <input
                    type="text"
                    id="email"
                    className=" bg-inherit border-b-2 border-b-white outline-none text-white w-full placeholder-white mt-10"
                    placeholder="Your email"
                    onChange={handleChange}
                    value={values.email}
                    autoComplete="off"
                    onClick={() => {
                      setEmptyEmail(false);
                      setInvalidEmail(false);
                    }}
                  />
                  <span
                    className={`${
                      emptyName || invalidEmail
                        ? " bg-red-700 text-white text-lg visible w-full rounded-b-md px-2"
                        : " hidden"
                    }`}
                  >
                    {emptyEmail
                      ? "Email is a must"
                      : invalidEmail
                      ? "Please provide a valid email"
                      : ""}
                  </span>
                </div>

                <div className=" flex flex-col w-[70%]">
                  {" "}
                  <textarea
                    id="message"
                    rows="4"
                    className="block mt-10 w-full text-white outline-none placeholder-white bg-inherit rounded-t-md border-b-2 border-gray-300"
                    placeholder="Your message"
                    onChange={handleChange}
                    value={values.message}
                    onClick={() => {
                      setEmptyMessage(false);
                    }}
                  ></textarea>
                  <span
                    className={`${
                      emptyMessage
                        ? " bg-red-700 text-white text-lg visible w-full rounded-b-md px-2 block"
                        : " hidden"
                    }`}
                  >
                    Name is a must
                  </span>
                </div>

                <button
                  type="submit"
                  className=" text-[#072966] font-bold rounded-full w-fit h-fit px-10 py-2 bg-white mt-10"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className=" w-full h-full relative grid grid-rows-2 justify-start bg-[#2196f3] px-2 pt-5">
            <div className="">
              <h3 className=" text-white text-3xl font-bold">
                Let&apos;s keep in touch!
              </h3>
              <p className=" text-white mt-5">
                I&apos;m also interested in freelance opportunities. If you have
                an idea, question or comment please feel free to use the form.
              </p>
            </div>
            <div className="">
              <div className=" object">
                <img
                  src="assets/images/rocket.png "
                  className=" w-[250px] h-[300px] "
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalResponse
        icon={emailSent.icon}
        title={emailSent.title}
        text={emailSent.text}
        display={displyModal}
        active={setDisplayModal}
      />
    </div>
  );
}
