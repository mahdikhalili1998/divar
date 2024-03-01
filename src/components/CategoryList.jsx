import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getCategory } from "services/createcategory";
import Loader from "components/Loader";
import { deleteCategory } from "services/createcategory";

function CategoryList() {
  const queryClient = useQueryClient();
  const { refetch, data, isLoading } = useQuery(["getCategories"], getCategory);

  console.log({ data, isLoading });

  const deleteHandler = (id) => {
    deleteCategory(id);
    refetch();
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        data.data?.map((item) => (
          <div
            className="mb-2 mx-2 border-solid border-2  border-slate-200 p-1 flex justify-between items-center rounded-md"
            key={item._id}
          >
            <div>
              <img src={`${item.icon}.svg`} />
              <p>{item.name}</p>
              <p className="mb-[5px]">{`slug : ${item.slug}`}</p>
            </div>
            <span
              onClick={() => deleteHandler(item._id)}
              className="bg-red-700 text-white px-[5px] rounded-lg pt-[3px]"
            >
              X
            </span>
          </div>
        ))
      )}
    </>
  );
}

export default CategoryList;
