"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+961) 71 480 594",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mabzaytoun@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Beirut, Lebanon",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [alert, setAlert] = useState(null);
  const [alertType, setAlertType] = useState(""); // To differentiate success or error
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle button locking

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null); // Clear alert after 6 seconds
      }, 6000);

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [alert]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate phone number input to accept only numbers
    if (name === "phone" && value && !/^\d*$/.test(value)) {
      setAlertType("error");
      setAlert("Phone number must contain only numbers.");
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const validateForm = () => {
    const { firstname, lastname, email, phone, service, message } = formData;
    if (!firstname || !lastname || !email || !phone || !service || !message) {
      setAlertType("error");
      setAlert("Please fill in all fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setAlertType("error");
      setAlert("Please enter a valid email address.");
      return false;
    }

    const phoneRegex = /^\d{8,15}$/; // Accepts 8 to 15 digits
    if (!phoneRegex.test(phone)) {
      setAlertType("error");
      setAlert("Please enter a valid phone number (8-15 digits).");
      return false;
    }

    setAlert(null);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true); // Lock the button
    setAlert(null);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setAlertType("success");
        setAlert("Message sent successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setAlertType("error");
        setAlert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setAlertType("error");
      setAlert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false); // Unlock the button
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60 ">
                I'm a developer ready to bring your ideas to life. Whether it's
                a project, a question, or a collaboration, feel free to reach
                out. Let's create something amazing together!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder="Select a service"
                    value={formData.service}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Android Development">
                      Android Development
                    </SelectItem>
                    <SelectItem value="Backend Development">
                      Backend Development
                    </SelectItem>
                    <SelectItem value="IT Administration">
                      IT Administration
                    </SelectItem>
                    <SelectItem value="Technical Support">
                      Technical Support
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                size="md"
                className={`max-w-40 ${
                  isSubmitting ? "bg-green-700" : "bg-green-500"
                }`} // Change button color dynamically
                disabled={isSubmitting} // Lock button during submission
              >
                {isSubmitting ? "Sending..." : "Send message"}{" "}
                {/* Update text */}
              </Button>
              {alert && (
                <div
                  className={`text-white/80 mt-4 p-2 rounded ${
                    alertType === "success" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {alert}
                </div>
              )}
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
