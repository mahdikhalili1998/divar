import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPost } from "../services/user";

function PostList() {
  const { data, isLoading } = useQuery(["get-post"], getPost);
  console.log(data);
  return <div>PostList</div>;
}

export default PostList;
