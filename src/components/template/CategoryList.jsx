import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategory } from "src/services/admin";
import Loader from "../modules/Loader";
import { deleteCategory } from "src/services/admin";

function CategoryList() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategory,
  });
  const { mutate, error } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => queryClient.invalidateQueries("get-categories"),
  });
  
  if (!data) return isLoading;
  const deleteHandler = (id) => {
    mutate(id);
  };
  return (
    <div style={{ margin: "50px 200px 70px", width: "100%" }}>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((category) => (
          <div
            key={category._id}
            style={{
              display: "flex",
              margin: "20px 0",
              padding: "15px",
              border: "2px solid #eaeaea",
              borderRadius: "5px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                border: "3px solid silver",
                padding: 3,
                alignItems: "center",
                display: "flex",
                borderRadius: 10,
                boxShadow: "5px 5px lightblue",
              }}
            >
              <img src={`${category.icon}.svg`} />
            </div>
            <h3 style={{ marginRight: 10, fontSize: "0.9rem", width: "120px" }}>
              {category.name}
            </h3>
            <p style={{ width: "100%", textAlign: "left", color: "#a62626" }}>
             {category.slug}/
            </p>
            <button
              style={{
                marginRight: 30,
                padding: 5,
                width: 60,
                color: "#a62626",
                backgroundColor: "white",
                borderRadius: 10,
              }}
              onClick={() => deleteHandler(category._id)}
            >
              حذف
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
