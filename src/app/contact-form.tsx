"use client";
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="mb-4 text-5xl font-semibold text-blue-gray-900">
          Contact Us
        </h2>
        <p className="mx-auto w-full lg:w-5/12 text-gray-500">
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </p>
      </div>
      <div>
        <div className="container mx-auto border border-gray-200 rounded-lg shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <h4 className="text-2xl font-semibold text-white mb-2">
                Contact Information
              </h4>
              <p className="mb-8 text-base text-gray-500">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              <div className="flex items-center gap-5 mb-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <p className="text-lg text-white">+62(856) 9509 1825</p>
              </div>
              <div className="flex items-center gap-5 mb-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <p className="text-lg text-white">
                  arifhidayat@arifhida.my.id
                </p>
              </div>
              <div className="flex items-center gap-5">
                <a href="https://facebook.com" className="text-white">
                  <i className="fa-brands fa-facebook text-lg" />
                </a>
                <a href="https://instagram.com" className="text-white">
                  <i className="fa-brands fa-instagram text-lg" />
                </a>
                <a href="https://github.com" className="text-white">
                  <i className="fa-brands fa-github text-lg" />
                </a>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <Image
                width={1024}
                height={1024}
                alt="team work"
                src="/image/profile.jpg"
                className="h-[36rem] w-full rounded-xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
