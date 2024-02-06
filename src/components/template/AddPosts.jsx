import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { getCategory } from "src/services/admin";
import { getCookie } from "src/utils/cookie";

function AddPosts() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: null,
    images: null,
  });
  const { data } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategory,
  });
  const formHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };
  const addHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }
    const token = getCookie("accessToken");
    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => toast.success("اگهی با موفقیت ایجاد شد"))
      .catch((error) => toast.error("در ایجاد آگهی مشکلی پیش آمده است"));
   
  };
  return (
    <form
      onChange={formHandler}
      style={{
        display: "flex",
        width: "30%",
        border: "2px solid black",
        alignItems: "center",
        borderRadius: 10,
        justifyContent: "center",
        marginTop: 50,
        height:"900px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 10,
          width: "400px",
        }}
      >
        <h2
          style={{
            borderBottom: "5px solid #a62626",
            textAlign: "center",
            margin: 20,
          }}
        >
          ایجاد آگهی
        </h2>
        <label
          style={{
            borderBottom: "2px solid #a62626",
            textAlign: "center",
            margin: 20,
          }}
          htmlFor="title"
        >
          عنوان
        </label>
        <input type="text " name="title" id="title" />
        <label
          style={{
            borderBottom: "2px solid #a62626",
            textAlign: "center",
            margin: 20,
          }}
          htmlFor="content"
        >
          توضیحات
        </label>
        <textarea style={{ height: "100px" }} name="content" id="content" />
        <label
          style={{
            borderBottom: "2px solid #a62626",
            textAlign: "center",
            margin: 20,
          }}
          htmlFor="amount"
        >
          قیمت
        </label>
        <input type="number" name="amount" id="amount" />
        <label
          style={{
            borderBottom: "2px solid #a62626",
            textAlign: "center",
            margin: 20,
          }}
          htmlFor="city"
        >
          شهر
        </label>
        <input type="text " name="city" id="city" />
        <label
          style={{
            borderBottom: "2px solid #a62626",
            textAlign: "center",
            margin: 20,
          }}
          htmlFor="category"
        >
          دسته بندی
        </label>
        <select name="category" id="">
          {data?.data.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <label
          style={{
            borderBottom: "2px solid #a62626",
            textAlign: "center",
            margin: 20,
          }}
          htmlFor="images"
        >
          عکس
        </label>
        <input type="file" name="images" id="images" />
        <button
          style={{
            borderBottom: "2px solid #a62626",
            textAlign: "center",
            margin: 20,
            width: "100px",
            border: "1px solid #a62626",
            borderRadius: 5,
            backgroundColor: "#a62626",
            color: "white",
            padding: 4,
          }}
          onClick={addHandler}
        >
          ایجاد
        </button>
      </div>
     
    </form>
  );
}

export default AddPosts;
