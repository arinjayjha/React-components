import React from "react";
import UserCard from "./UserCard.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";
import ProductList from "./ProductList.jsx";

function App() {
  const pageStyle = {
    padding: "24px",
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial",
    lineHeight: 1.4,
  };

  return (
    <div style={pageStyle}>
      <h1>React Assignments</h1>


      <h2>Assignment 1 – User Cards</h2>
      <UserCard name="Arinjay" email="jha@gmail.com" />
      <UserCard name="Jay" email="me@example.com" age={38} />
      <UserCard name="Divu" email="Darling@sample.com" age={27} />


      <h2>Assignment 2 – Welcome Messages</h2>
      <WelcomeMessage username="Arinjay" greeting="Hi" />
      <WelcomeMessage username="Jay" />
      <WelcomeMessage username="Divyam" greeting="Good Morning" />

      <h2>Assignment 3 – Product List</h2>
      <ProductList />
    </div>
  );
}

export default App;
