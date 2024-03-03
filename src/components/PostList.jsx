import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPost } from "../services/user";

function PostList() {
  const { data, isLoading } = useQuery(["get-post"], getPost);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  console.log(baseUrl);
  console.log(data);
  return (
    <>
      {data?.data.posts.map((item) => (
        <div key={item._id}>
          <img src={` ${import.meta.env.VITE_BASE_URL}${item.images[0]}`} />
        </div>
      ))}
    </>
  );
}

export default PostList;

//"http://localhost:3400/upload/1708607970728.jpg"
