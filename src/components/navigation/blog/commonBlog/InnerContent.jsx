import React from "react";

export default function InnerContent({content}) {
  return (
    <div>
      <div
        className="flex overflow-hidden "
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
