import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featchPost } from "./asyncActions/feacthPost";
import { addPost, deletePost } from "./store/postsReducer";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts)
  const [name, setName] = useState("")
  const addPostClick = (e) => {
    e.preventDefault();
    dispatch(addPost({id: Date.now(), "title": name}))
    setName("")
  }
  const deletePostClick = (id) => {
    dispatch(deletePost(id))
  }
  const getPostsClick = () => {
    dispatch(featchPost())
  }
  return (
    <div className="App">
      {posts.map(item =>
        <h2 key={item.id} onClick = {() => deletePostClick(item.id)}>{item.title}</h2>
      )}
      <form onSubmit={addPostClick}>
        <input type="text"
          value={name}
          onChange={e => setName(e.target.value)} />
        <button type="submit">Добавить</button>
      </form>
      <button type="button" onClick={getPostsClick}>Получить</button>

    </div>
  );
}

export default App;
