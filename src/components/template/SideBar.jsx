import { useQuery } from "@tanstack/react-query";
import { getCategory } from "src/services/admin";

function SideBar() {
    const { data } = useQuery({
        queryKey: ["get-categories"],
        queryFn: getCategory,
      });
      if(!data)return
      
  return (
    <div style={{width:"200px",marginTop:40}}>
      {
        data.data.map((i)=>(
            <div key={i._id} style={{display:"flex",margin:30,alignItems:"center"}}>
                <img style={{marginLeft:10}} src={`${i.icon}.svg`} />
                <p>{i.name}</p>
            </div>
        ))
      }
    </div>
  )
}

export default SideBar
