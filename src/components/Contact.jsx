"use client"

import Image from "next/image"
import Heading from "./sub-components/Heading"

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;

        const mailtoLink = `mailto:m.zaid.connect@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div id="contact" className="h-screen py-20 px-16 lg:px-24 lg:h-auto lg:my-20">
            <Heading text={"Get in touch"} />
            <div className="w-full h-full my-auto flex flex-col lg:flex-row items-center justify-center gap-10">
                <div className="flex justify-center">
                    <Image
                        src={"/contact.gif"}
                        alt="Contact Image"
                        width={400}
                        height={400}
                        className="w-full max-w-[250px] md:max-w-[300px] rounded-md opacity-80"
                    />
                </div>
                <form onSubmit={handleSubmit} className="w-full max-w-[600px] lg:max-w-[400px] flex flex-col gap-4">
                    <div className="w-full flex flex-col lg:flex-row gap-3">
                        <input
                            type="text"
                            name="name"
                            className="dark:bg-gray-700 dark:text-gray-200 w-full border border-yellow-500 rounded-md bg-zinc-50 px-3 py-2 text-sm tracking-wider text-gray-500 outline-none"
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            className="dark:bg-gray-700 dark:text-gray-200 w-full border border-yellow-500 rounded-md bg-zinc-50 px-3 py-2 text-sm tracking-wider text-gray-500 outline-none"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        className="dark:bg-gray-700 dark:text-gray-200 w-full border border-yellow-500 rounded-md bg-zinc-50 px-3 py-2 text-sm tracking-wider text-gray-500 outline-none"
                        placeholder="Subject"
                        required
                    />
                    <textarea
                        name="message"
                        className="dark:bg-gray-700 dark:text-gray-200 max-h-[250px] min-h-[150px] w-full border border-yellow-500 rounded-md bg-zinc-50 px-3 py-2 text-sm tracking-wider text-gray-500 outline-none"
                        placeholder="Write Me..."
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full border border-yellow-500 rounded-md bg-yellow-500 text-white px-4 py-2 text-sm font-light tracking-wider outline-none hover:bg-yellow-600 transition-colors cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
