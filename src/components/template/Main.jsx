import { sp } from "src/utils/replaceNumber";

function Main({ data }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: 20,
      }}
    >
      {data?.data?.posts.map((i) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "430px",
            border: "2px solid silver",
            margin: 10,
            padding: 20,
            borderRadius: 10,
          }}
        >
          <div style={{marginRight:10}}>
            <p style={{fontSize:18,fontWeight:"500"}}>{i.options.title}</p>
            <p style={{marginTop:60}}>{sp(i.amount)}</p>
            <p style={{marginTop:10}}>{i.options.city}</p>

            <p style={{ color: "blue",marginTop:10}}>
              {new Date(i.createdAt).toLocaleDateString("fa-IR")}
            </p>
          </div>
          <img
            style={{
              width: 200,
              height: 200,
              borderRadius: 10,
              marginRight: "80px",
            }}
            src={`${import.meta.env.VITE_BASE_URL}${i?.images}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Main;
