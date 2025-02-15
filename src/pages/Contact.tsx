import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact: React.FC = () => {
  const { activeTheme } = useTheme();
  const formRef = useRef();

  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure the input field has a valid name
    if (!name) {
      console.error("Input field is missing a name attribute:", e.target);
      return;
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        "service_vvng91u", // paste your ServiceID here (you'll get one when your service is created).
        "template_rz90ybf", // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: "jester", // put your name here.
          from_email: form.email,
          to_email: "galinojester0603@gmail.com", //put your email here.
          message: form.message,
          subject: form.subject,
        },
        "2ek36LtfO7AEau2wp" //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            title: "Email sent!",
            text: "Thank you. I will get back to you as soon as possible.",
            icon: "success",
            timer: 1500,
            timerProgressBar: true,
          });
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      {loading && (
        <div
          id="global-loader"
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
        >
          <div className="whirly-loader"></div>
        </div>
      )}
      <section
        style={{ backgroundColor: activeTheme.backgroundColor }}
        className="relative flex min-h-[40vh] items-center justify-center bg-blue-600 text-white"
      >
        <div className="container text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
            We're here to help! Reach out to us through any of our contact
            channels
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <Card style={{ backgroundColor: activeTheme.primaryColor }}>
              <CardHeader>
                <Phone
                  style={{ color: activeTheme.backgroundColor }}
                  className="mb-2 h-8 w-8 text-primary"
                />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Main Office: (075) 123-4567
                  <br />
                  Customer Service: (075) 123-4568
                </p>
              </CardContent>
            </Card>
            <Card style={{ backgroundColor: activeTheme.primaryColor }}>
              <CardHeader>
                <Mail
                  style={{ color: activeTheme.backgroundColor }}
                  className="mb-2 h-8 w-8 text-primary"
                />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  General Inquiries: info@magicgroup.com
                  <br />
                  Customer Support: support@magicgroup.com
                </p>
              </CardContent>
            </Card>
            <Card style={{ backgroundColor: activeTheme.primaryColor }}>
              <CardHeader>
                <MapPin
                  className="mb-2 h-8 w-8 text-primary"
                  style={{ color: activeTheme.backgroundColor }}
                />
                <CardTitle>Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Main Street
                  <br />
                  Dagupan City, Pangasinan
                  <br />
                  Philippines
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-16">
        <div className="container max-w-2xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Send Us a Message
          </h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium"
              >
                Subject
              </label>
              <input
                value={form.subject}
                onChange={handleChange}
                type="text"
                name="subject"
                id="subject"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                placeholder="Message subject"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                value={form.message}
                onChange={handleChange}
                id="message"
                name="message"
                rows={6}
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                placeholder="Your message"
              ></textarea>
            </div>
            <Button
              style={{ backgroundColor: activeTheme.backgroundColor }}
              type="submit"
              className="w-full"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
