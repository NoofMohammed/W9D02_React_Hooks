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
  let newPosts = () => {
    setPosts([...posts, { userId: userId, id: id, title: title, body: body }]);
  };

  const result = posts.map((elem, i) => {
    // console.log(elem.body)
    console.log(i);
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

      <input
        type="number"
        placeholder="userId"
        onChange={(e) => {
          setuserId(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="id"
        onChange={(e) => {
          setID(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="body"
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <button onClick={newPosts}>click</button>
    </>
  );
};

export default App;
