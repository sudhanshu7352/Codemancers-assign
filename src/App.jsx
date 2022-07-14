import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
// import { Home } from './components/home'
import { Post } from './components/post';
import { Create } from './components/create';

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts(prevPosts => {
      return [...prevPosts, newPost];
    });
  }

  function deletePost(id) {
    setPosts(prevPosts => {
      return prevPosts.filter((postItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      {/* <Home /> */}
      <Create onAdd={addPost} />
      {posts.map((postItem, index) => {
        return (
          <Post
            key={index}
            id={index}
            title={postItem.title}
            content={postItem.content}
            onDelete={deletePost}
            gif={postItem.gif}
          />
        );
      })}
    </div>
  )
}

export default App
