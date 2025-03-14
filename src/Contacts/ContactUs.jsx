import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white">
      {/* Заголовок */}
      {/* <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <p className="text-sm uppercase">Home / Contact</p>
          <h1 className="text-4xl font-bold">Contact</h1>
        </div>
      </div> */}

      {/* Блоки информации */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">About</h2>
          <p>
            Lorem ipsum is simply free text used by copytypinh refreshing. Neque
            porro est qui.
          </p>
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>+1 (246) 333-0079</p>
          <p>support@agrios.com</p>
          <p>Mon - Fri: 7:00 am - 6:00 pm</p>
        </div>
        <div className="bg-yellow-400 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Address</h2>
          <p>
            66 Broklun Road Golden Street, New Your United States of America
          </p>
        </div>
      </div>

      {/* Карта и форма */}
      <div className="container mx-auto px-4 pb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <iframe
          className="w-full h-96 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4886.098484224592!2d-0.11954306086422827!3d51.50332476827482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c5cb39b0a5%3A0x1c5a90e5d20606e7!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2suk!4v1640842801234!5m2!1sen!2suk"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Write a Message</h2>
          <form className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <textarea
              placeholder="Write a Message"
              className="w-full mt-4 p-3 border rounded-md h-32"
            ></textarea>
            <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-md">
              Send a Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
