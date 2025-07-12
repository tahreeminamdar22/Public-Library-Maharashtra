import React from "react";

export default function BookIframe({ file }) {
  return (
    <iframe
      src={file}
      className="w-full h-[90vh] border rounded"
      title="Book Preview"
    />
  );
}
