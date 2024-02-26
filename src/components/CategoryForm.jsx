import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { createCategory } from "services/createcategory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CategoryForm() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const { mutate, isLoading, data, error } = useMutation(createCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("getCategories");
    },
  });
  useEffect(() => {
    if (data?.status === 201) {
      toast.success("دسته بندی ایجاد شد", { position: "top-center" });
    }
  }, [data]);

  console.log({ data, isLoading, error });

  const changHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!form.name || !form.slug || !form.icon) return;
    mutate(form);
    // setForm({ name: "", slug: "", icon: "" });
  };

  return (
    <>
      <form
        onChange={changHandler}
        onSubmit={submitHandler}
        className="flex flex-col mt-3 mx-2"
      >
        <h3 className="mb-3 inline text-right w-[8rem] pb-[5px] border-solid border-b-2 border-[#a62626]">
          دسته بندی جدید
        </h3>

        <label className="mb-1">اسم دسته بندی </label>
        <input
          className="rounded  mb-1 w-[8rem] border-solid border-2 border-[#a62626] "
          type="text"
          name="name"
          id="name"
        />

        <label className="mb-1">اسلاگ</label>
        <input
          className="rounded  w-[8rem] mb-1  border-solid border-2 border-[#a62626] "
          type="text"
          name="slug"
          id="slug"
        />

        <label className="mb-1">آیکون</label>
        <input
          className="rounded  w-[8rem]  mb-3 border-solid border-2 border-[#a62626] "
          type="text"
          name="icon"
          id="icon"
        />

        <button
          className="bg-[#a62626] py-[5px] px-[1rem] mr-2 mb-3 text-white text-left w-[4rem] rounded-md disabled:opacity-75"
          type="submit"
          disabled={isLoading}
        >
          ایجاد
        </button>
        <ToastContainer />
      </form>
    </>
  );
}

export default CategoryForm;
