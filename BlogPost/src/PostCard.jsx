import React from "react";

const PostCard = ({
  title, 
  body,
  tags,
  reactions,
  views,
}) => {
  return (
    <div className="bg-gray-200 w-2xl px-6 py-6 rounded-lg space-y-4">
      <h2 className="font-bold">{title}</h2>
      <p>{body}</p>
      <div className="flex space-x-3">
        {tags.map((tag, index) => {
          return <div className="text-[#0000FF]" key={index}>#{tag}</div>;
        })}
      </div>
      <div className="flex space-x-3 items-center">
        <div>👍 {reactions.likes}</div>
        <div>|</div>
        <div>👎 {reactions.dislikes}</div>
        <div>|</div>
        <div>👀 {views} views</div>
      </div>
    </div>
  );
};

export default PostCard;
