import React from "react";
import PropTypes from "prop-types";

const ContactCard = ({ icon: Icon, title, details }) => {
  return (
    <div className="flex items-center p-4 bg-white shadow-md rounded-xl gap-4">
      {Icon && <Icon className="text-green-600 text-2xl" />}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{details}</p>
      </div>
    </div>
  );
};





export default ContactCard;
