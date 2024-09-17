import React from "react";

const CopyEmailButton = () => {
  const email = "ksnavneeth614@gmail.com"; //

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email);
        alert("Email copied to clipboard!");
      } else {
        alert("Clipboard API not supported");
      }
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Failed to copy email");
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
    >
      Copy Email
    </button>
  );
};

export default CopyEmailButton;
