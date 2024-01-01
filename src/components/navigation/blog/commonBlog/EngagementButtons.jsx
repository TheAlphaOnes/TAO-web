import React from "react";

import upload from "../../../../assets/img/upload.svg";
import like from "../../../../assets/img/like.svg";
import bookmark from "../../../../assets/img/bookmark.svg";

function EngagementButtons({blogLink}) {
    function copyToClipboard() {
        navigator.clipboard.writeText(blogLink)
          .then(function() {
            console.log('Text successfully copied to clipboard');
          })
          .catch(function(err) {
            console.error('Unable to copy text to clipboard', err);
          });
      }
  return (
    <div >
      <div className="hidden md:flex gap-1 px-2  items-start pt-4">
        <a className="w-5 hover:cursor-pointer" title="Bookmark">
          <img src={bookmark} alt="upload" className="active:bg-indigo-900 active:-translate-y-1"/>
        </a>
        <a className="w-5 hover:cursor-pointer" title="Like">
          <img src={like} alt="like" className="active:bg-indigo-900 active:-translate-y-1"/>
        </a>
        <a className="w-5 hover:cursor-pointer" title="Copy Link" onClick={copyToClipboard}>
            <img src={upload} alt="bookmark" className="active:bg-indigo-900 active:-translate-y-1"/>
        </a>
      </div>
    </div>
  );
}

export default EngagementButtons;
