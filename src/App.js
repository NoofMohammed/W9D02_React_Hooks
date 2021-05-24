import React, { useState } from "react";

// jsx
const App = () => {
  const [posts, setPosts] = useState([
    { userId: 3, id: "200", title: "cook", body: "how cook" },
    { userId: "4", id: "300", title: "play", body: "how play" },
  ]);
  const [userId, setuserId] = useState(0);
  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
let newPosts = ()=>{
  setPosts([...posts,{userId:userId,id:id,title:title,body:body}]);
}
axios
      .get(`https://jsonplaceholder.typicode.com/users`)

  const result = posts.map((elem, i) => {
    // console.log(elem.body)
    console.log(i)
    return (
      <>
        {/* useState() */}
        <div key={i}>
          <p>BODY: {elem.body}</p>
          <p>title: {elem.title}</p>
        </div>
        
      </>
    );
  });
  return (
    <>
      <div>
        <h1>Blog App</h1>
        </div>
        <p>{result}</p>
      
      <button></button>
        {/* <input onChange={}/>
        <input onChange={}/>
        <input onChange={}/>
        <input onChange={}/> */}
    </>
  );
};

export default App;
