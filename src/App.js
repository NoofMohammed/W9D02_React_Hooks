import React, { useState }  from 'react';


// jsx
const App = () => {
  const [posts, setPosts] = useState([{userId:3, id:"200", title:"cook", body: "how cook" },{userId:"4", id:"300", title:"play", body: "how play" }])
  return (
    <>
    <div>
  <h1>Blog App</h1>
  </div>
  </>
  );
};

export default App 