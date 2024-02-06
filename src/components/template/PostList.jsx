import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPosts } from "src/services/user";
import Loader from "../modules/Loader";
import { sp } from "src/utils/replaceNumber";

function PostList() {
  const { data, isLoding } = useQuery({
    queryKey: ["my-post-list"],
    queryFn: getPosts,
  });
  console.log(data);
  if (!data) return;
  return (
    <div
      style={{
        marginTop: 20,
        marginRight: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isLoding ? (
        <Loader />
      ) : (
        <>
          <h1 style={{ borderBottom: "2px solid #a62626" }}>آگهی های من</h1>
          {data.data.posts.map((i) => (
            <div
              key={i._id}
              style={{
                display: "flex",
                padding: 10,
                border: "2px solid gray",
                borderRadius: 10,
                width: "800px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <img
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 10,
                  marginRight: "10px",
                }}
                src={`${import.meta.env.VITE_BASE_URL}${i?.images}`}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 30,
                  marginRight: "60px",
                }}
              >
                <p style={{ borderBottom: "2px solid gray" }}>
                  نام محصول: {i?.options?.title}
                </p>
                <span style={{ borderBottom: "2px solid gray", marginTop: 10 }}>
                  قیمت محصول: {sp(i.amount)} تومان
                </span>
                <h4
                  style={{
                    borderBottom: "2px solid gray",
                    marginTop: 10,
                    display: "flex",
                  }}
                >
                  تاریخ ثبت:{" "}
                  <p style={{ color: "blue", marginRight: 10 }}>
                    {new Date(i.createdAt).toLocaleDateString("fa-IR")}
                  </p>
                </h4>

                <span style={{ borderBottom: "2px solid gray", marginTop: 10 }}>
                  توضیحات: {i?.content}
                </span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
