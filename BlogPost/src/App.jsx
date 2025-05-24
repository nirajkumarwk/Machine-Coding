import "./App.css";
import PostCard from "./PostCard";
import postData from "./postData";
function App() {
  return (
    <div className="m-4">
      <h1 className="font-bold text-2xl mb-4">Blog Post</h1>
      <div className="flex flex-col space-y-4">
        {postData.map((post) => {
          return (
            <PostCard
              key={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
              reactions={post.reactions}
              views={post.views}
              tags={post.tags}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
