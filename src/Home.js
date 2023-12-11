import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const [name, setName] = useState("luigi");

  const deletePost = (idToDelete) => {
    
    const updatedBlogs = blogs.filter(blog => blog.id !== idToDelete);

    setBlogs(updatedBlogs);
  };

  //render the function only at the first rander
  useEffect(() => {
    console.log({name});
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs = {blogs} titlu = "Toate Blogurile" deletePost = {deletePost}></BlogList>
      <button onClick={() => setName("razvan")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
}
 
export default Home;