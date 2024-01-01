import React from "react";

export default function InnerContent({content}) {
  return (
    <div>
      <div
        className="flex max-h-20 text-[0.9rem] overflow-hidden "
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
