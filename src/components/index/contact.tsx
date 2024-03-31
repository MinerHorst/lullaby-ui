import React, { useState, FormEvent, useRef, MutableRefObject } from "react";
import emailjs from "@emailjs/browser";
import Input from "../ui/input";
import Button from "../ui/button";
import TextArea from "../ui/textarea";
import { Send } from "lucide-react";
import { toast } from "sonner";

export const Form = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Getting all Input elements within the form
    const Inputs = form.current?.querySelectorAll<HTMLInputElement>("Input");

    // Checking if any Input field is empty
    if (Inputs) {
      let isEmpty = false;
      Inputs.forEach((Input) => {
        if (!Input.value.trim()) {
          isEmpty = true;
        }
      });

      if (isEmpty) {
        toast.error("Field Empty!", {
          description: "Please fill in the required information.",
          duration: 3000,
        });
        return;
      }
    }

    if (form.current) {
      emailjs
        .sendForm("service_4yyd8rc", "template_1g2mtae", form.current, {
          publicKey: "JyPL6wojPntUbcVj6",
        })

        .then(
          () => {
            if (Inputs) {
              Inputs.forEach((Input) => {
                Input.value = "";
              });
            }
            toast.success("Contact Submitted!", {
              description: "Thank you for getting in contact.",
              duration: 3000,
            });
          },
          (error) => {
            console.log("FAILED...");
          },
        );
    } else {
      console.error("Form ref is null");
    }
  };

  return (
    <div
      className="z-[100] grid h-fit w-full rounded-lg bg-slate-500/10 px-4 py-4 text-white"
      id="contact"
    >
      <div className="flex h-fit w-full flex-col justify-between space-y-4">
        <h1 className="font-bold leading-none [font-size:_clamp(2em,2.5vw,8em)]">
          Contact
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="poppins flex h-fit w-full flex-col space-y-10"
        >
          <div className="flex w-full flex-col gap-4 space-y-4 md:flex-row md:space-y-0">
            <div className="flex justify-between md:w-1/3 md:flex-row">
              <Input
                id="name"
                name="name"
                content="name"
                placeholder="Full Name"
              />
            </div>
            <div className="flex flex-col justify-between md:w-1/3">
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex flex-col justify-between md:w-1/3">
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div className="hidden w-full flex-col justify-between md:flex">
            <TextArea
              className="w-full"
              id="projectinfo"
              name="projectinfo"
              placeholder="Tell us something about your project."
            />
          </div>
          <div className="flex w-full flex-col justify-between md:hidden ">
            <TextArea
              className="w-full"
              id="projectinfo"
              name="projectinfo"
              placeholder="What do you need?"
            />
          </div>

          <div className="">
            <Button
              display="custom"
              customText="Submit"
              type="submit"
              customIcon={<Send size={16} />}
              className="h-[3rem] w-fit rounded-full border bg-white px-8 text-black"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function ContactComponent() {
  return <Form />;
}
