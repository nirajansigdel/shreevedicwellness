"use client";

import Animated from "@/components/Animated";
import Button from "@/components/Button";
import Input from "@/components/Input";
import React, { useState } from "react";

function Index() {
  const [form1Data, setForm1Data] = useState({
    client_name: "",
    contact_number: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);

  const handleApiOrderSubmit = () => {
    // Handle the form submission logic here
    if (
      !form1Data.client_name ||
      !form1Data.contact_number ||
      !form1Data.email ||
      !form1Data.message
    ) {
      setError(true);
      return;
    }

    // Compose the email link
    const recipientEmail = "cksoli66@gmail.com";
    const subject = `Inquiry from ${form1Data.client_name}`;
    const body = `Contact Number: ${form1Data.contact_number}\nMessage: ${form1Data.message}`;

    // Generate the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the default email client with the pre-filled subject and body
    window.location.href = mailtoLink;
  };

  return (
    <Animated
      className="my-10 px-5 md:px-20 bg-[#F2F9F5] rounded-md py-10"
      id="contact"
    >
      <p className="text-[#4B5563] text-[29px] font-medium text-center">
        Connect with us
      </p>
      <p className="text-[#9CA3AF] max-w-[1000px] mx-auto  text-[13px] mt-3 mb-4 font-medium text-center">
        Are you ready to embark on a journey of self-discovery, inner peace, and
        holistic well-being? Join our Yoga and Meditation class, and connect
        with us to explore the transformative power of mindfulness and movement.
      </p>

      <div className=" flex flex-col md:flex-row gap-20">
        <div className="flex-1 flex flex-col gap-3">
          <Input
            type="text"
            placeholder="Full Name"
            onChange={(e) =>
              setForm1Data({
                ...form1Data,
                client_name: e.target.value,
              })
            }
          />
          <Input
            type="text"
            placeholder="Contact Number"
            onChange={(e) =>
              setForm1Data({
                ...form1Data,
                contact_number: e.target.value,
              })
            }
          />

          <Input
            type="text"
            placeholder="Email address"
            onChange={(e) =>
              setForm1Data({
                ...form1Data,
                email: e.target.value,
              })
            }
          />

          <Input
            type="textarea"
            placeholder="Message"
            className="min-h-[40px] h-[107px]"
            onChange={(e) =>
              setForm1Data({
                ...form1Data,
                message: e.target.value,
              })
            }
          />

          <div className="mt-6">
            <Button
              onClick={() => {
                handleApiOrderSubmit();
              }}
            >
              Submit
            </Button>
          </div>
          {error && (
            <p className="text-center text-sm text-red-500">
              Need to fill the form before submitting.
            </p>
          )}
        </div>
        <div className="flex-1 flex flex-col gap-10 justify-between ">
          {/* <p className="text-sm text-center">
            Feel free to connect with us through the contact details provided
            below for any type of enquiry or to establish a connection.
          </p> */}
          <div className="flex flex-col gap-8">
            <span className="flex text-[#22C55E] text-sm ">
              Feel free to connect with us through the contact details provided
              below for any type of enquiry or to establish a connection. We are
              here to assist you in a positive and helpful manner.
            </span>
            <div className="bg-[#22C55E] px-5 md:px-10 py-5 rounded-md text-white">
              <span className="font-medium text-2xl">Contact</span>
              <div className="flex flex-col mt-4 gap-2">
                <span className="text-sm">
                  <span>Phone no : </span>5714749074
                </span>
                <span className="text-sm">
                  <span>Email : </span>
                  <a
                    href="mailto:shreevedicwellnesscenter@gmail.com"
                    className="font-sm"
                  >
                    shreevedicwellnesscenter@gmail.com
                  </a>
                </span>
              </div>
            </div>

            <div className="bg-[#22C55E] px-5 md:px-10 py-5 rounded-md text-white">
              <span className="font-medium text-2xl">Location</span>
              <div className="flex flex-col mt-4">
                <span className="text-sm">
                  42011 bushclover terrace Aldie Virginia 20105
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Animated>
  );
}

export default Index;
