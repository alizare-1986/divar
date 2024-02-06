import AddPosts from "src/components/template/AddPosts";
import PostList from "src/components/template/PostList";

const DashboardPage = () => {
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
      <AddPosts />
      <PostList />
    </div>
  );
};

export default DashboardPage;
