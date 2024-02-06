import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addCategory } from "services/admin";

function CategoryForm() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const { mutate, error, data } = useMutation({
    mutationFn: addCategory,
    onSuccess: () => queryClient.invalidateQueries("get-categories"),
  });
 
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!form.name || !form.slug || !form.icon) return;

    mutate(form);
  };
  return (
    <form onChange={changeHandler} onSubmit={submitHandler}>
      <h3
        style={{
          marginBottom: "30px",
          borderBottom: "3px solid red",
          width: "fit-content",
          paddingBottom: "5px",
        }}
      >
        دسته بندی جدید
      </h3>
      {data?.status === 201 && (
        <h3
          style={{
            backgroundColor: "green",
            marginBottom: "20px",
            color: "white",
            padding: 5,
            textAlign: "center",
            borderRadius: 5,
          }}
        >
          دسته بندی با موفقیت اظافه شد
        </h3>
      )}
      {!!error && (
        <p
          style={{
            backgroundColor: "#a62626",
            marginBottom: "20px",
            color: "white",
            padding: 5,
            textAlign: "center",
            borderRadius: 5,
          }}
        >
          مشکلی پیش آمده است
        </p>
      )}

      <label
        style={{ display: "block", fontSize: "0.9rem", marginBottom: "10px" }}
        htmlFor="name"
      >
        اسم دسته بندی
      </label>
      <input
        style={{
          display: "block",
          width: "300px",
          padding: "5px",
          border: "1px solid silver",
          marginBottom: "30px",
          borderRadius: 5,
        }}
        type="text"
        name="name"
        id="name"
      />
      <label
        style={{ display: "block", fontSize: "0.9rem", marginBottom: "10px" }}
        htmlFor="slug"
      >
        اسلاگ
      </label>
      <input
        style={{
          display: "block",
          width: "300px",
          padding: "5px",
          border: "1px solid silver",
          marginBottom: "30px",
          borderRadius: 5,
        }}
        type="text"
        name="slug"
        id="slug"
      />
      <label
        style={{ display: "block", fontSize: "0.9rem", marginBottom: "10px" }}
        htmlFor="icon"
      >
        آیکون
      </label>
      <input
        style={{
          display: "block",
          width: "300px",
          padding: "5px",
          border: "1px solid silver",
          marginBottom: "30px",
          borderRadius: 5,
        }}
        type="text"
        name="icon"
        id="icon"
      />
      <button
        style={{
          backgroundColor: "#a62626",
          color: "white",
          border: "none",
          padding: " 10px 25px",
          borderRadius: 5,
          cursor: "pointer",
          fontSize: "0.9rem",
        }}
        type="submit"
      >
        ایجاد
      </button>
    </form>
  );
}

export default CategoryForm;
