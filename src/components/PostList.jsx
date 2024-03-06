import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getPost } from "../services/user";
import { IoIosArrowDown } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";
import { sp } from "../util/ReplaceNumber";

function PostList() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useQuery(["get-post"], getPost);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  // console.log(baseUrl);
  // console.log(data);
  return (
    <div className="mx-2 my-3">
      <h2 className="mb-3 text-lg">آگهی های شما </h2>
      {data?.data.posts.map((item) => (
        <div
          className="mb-3 border-2 border-slate-200 rounded-lg p-1"
          key={item._id}
        >
          {!isOpen ? (
            <div className="flex justify-between">
              <div className="flex gap-2">
                <img
                  className="w-6 h-6 rounded-md"
                  src={` ${import.meta.env.VITE_BASE_URL}${item.images[0]}`}
                />
                <div className="flex flex-col justify-between text-xs py-[5px]">
                  <p>{item.options.title}</p>

                  <p
                    className="flex gap-1 items-center"
                    onClick={() => setIsOpen((open) => !open)}
                  >
                    توضیحات <IoIosArrowDown />
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between text-xs text-left py-[5px]">
                <p>{sp(item.amount)} تومان </p>
                <p>{new Date(item.createdAt).toLocaleDateString("fa-IR")}</p>
              </div>
            </div>
          ) : (
            <div className="text-xs flex justify-between items-center gap-1">
              <p className="px-1 w-[1000px]"> {item.options.content}</p>
              <GrFormClose
                className="w-[1em] text-lg text-red-600"
                onClick={() => setIsOpen((open) => !open)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default PostList;

//"http://localhost:3400/upload/1708607970728.jpg"
