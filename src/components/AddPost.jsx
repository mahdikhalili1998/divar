import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCategory } from "services/createcategory";
import { getCookis } from "util/cooki";
import axios from "axios";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    info: "",
    city: "",
    category: "",
    price: null,
    pic: null,
  });

  const { data, isLoading } = useQuery(["getCategories"], getCategory);
  // console.log({ data, isLoading });

  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "pic") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target?.files[0] });
    }
  };

  const addHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }
    const token = getCookis("accessToken");
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <form
      onChange={changeHandler}
      className="flex flex-col gap-2 items-start mr-2 my-4"
    >
      <h3 className="mb-2">افزودن آگهی</h3>
      <div className="flex items-center gap-1">
        <label className="ml-[5px]" htmlFor="name-">
          عنوان
        </label>
        <input
          className="rounded border-solid border-2 border-[#a62626] focus:outline-none"
          id="name"
          name="title"
          type="text"
        />
      </div>
      <div className="flex items-center gap-1">
        <label htmlFor="info">توضیحات</label>
        <textarea
          className="rounded border-solid border-2 border-[#a62626] focus:outline-none"
          id="info"
          name="info"
        />
      </div>
      <div className="flex items-center gap-1">
        <label htmlFor="price">قیمت</label>
        <input
          className="rounded border-solid border-2 border-[#a62626] focus:outline-none "
          id="price"
          name="price"
        />
      </div>
      <div className="flex items-center gap-1">
        <label htmlFor="city">شهر </label>
        <input
          className="rounded border-solid border-2 border-[#a62626] focus:outline-none"
          id="city"
          name="city"
        />
      </div>
      <div>
        <label htmlFor="category"> دسته بندی </label>
        <select
          className="w-[10rem] rounded border-solid border-2 border-[#a62626]"
          id="category"
          name="category"
        >
          {data?.data.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="pic">عکس</label>
        <input id="pic" name="pic" type="file" />
      </div>
      <button
        onClick={addHandler}
        className="bg-[#a62626] text-white px-1 py-[5px] rounded-md"
      >
        ایجاد
      </button>
    </form>
  );
}

export default AddPost;
