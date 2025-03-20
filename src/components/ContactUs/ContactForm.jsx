import React from 'react';

const ContactForm = () => {
    return (
      <form className="bg-green-300 p-6 z-10  mt-50 rounded-xl shadow-md h-[500px] w-[400px] m-16">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input type="text" placeholder="Placeholder" className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input type="text" placeholder="Placeholder" className="w-full p-2 border rounded-md" />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Email Address</label>
          <input type="email" placeholder="Placeholder" className="w-full p-2 border rounded-md" />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Your Subject</label>
          <input type="text" placeholder="Placeholder" className="w-full p-2 border rounded-md" />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Message</label>
          <textarea placeholder="Placeholder" className="w-full p-2 border rounded-md h-24"></textarea>
        </div>
        <button className="w-full mt-4 p-3 bg-green-600 text-white font-semibold rounded-md">Send Message</button>
      </form>
    );
  };

  export default ContactForm;
