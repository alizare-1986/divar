import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
        borderBottom: "2px solid red",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Link to={"/"}>
          <img src="divar.svg" style={{ width: 60, marginLeft: 40 }} />
        </Link>
        <span>
          <img src="location.svg" style={{ width: 30, marginLeft: 5 }} />
        </span>
        <p style={{ fontSize: 17, fontWeight: "500" }}>تهران</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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
        <Link
          to={"/dashboard"}
          style={{
            border: "1px solid silver",
            padding: 8,
            borderRadius: 15,
            backgroundColor: "#a62626",
            color: "white",
          }}
        >
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
