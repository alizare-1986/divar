import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getProfile } from "src/services/user";

function Role() {
  const { data} = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  return (
    <div>
      {!data ? (
        <Link to={"/auth"} style={{ marginLeft: "30px" }}>
          {" "}
          <img src="profile.svg" style={{ width: 30, marginLeft: 10 }} />
        </Link>
      ) : (
        <>
          {data?.data.role === "ADMIN" ? (
            <Link to={"/admin"}>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img src="profile.svg" style={{ width: 30, marginLeft: 10 }} />
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: "500",
                    marginLeft: 40,
                    color: "gray",
                  }}
                >
                  آدمین
                </p>
              </span>
            </Link>
          ) : (
            <Link to={"/auth"}>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img src="profile.svg" style={{ width: 30, marginLeft: 10 }} />
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: "500",
                    marginLeft: 40,
                    color: "gray",
                  }}
                >
                  دیوار من
                </p>
              </span>
            </Link>
          )}{" "}
        </>
      )}
    </div>
  );
}

export default Role;
