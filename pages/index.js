import Card from "../components/Card";
import Header from "../components/Header";
import Form from "../components/Form";
import { useState } from "react";
import styled from "styled-components";

export default function HomePage() {
  const [entries, setEntries] = useState([]);

  const handleSubmit = (newEntry) => {
    setEntries([...entries, { ...newEntry }]);
  };

  return (
    <StyledBody>
      <Header />
      <div></div>
      <Card entries={entries} />
      <footer>
        <Form onSubmit={handleSubmit} />
      </footer>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  text-align: center;
  border: 2px solid black;
  height: 100vh;
  width: 100vw;
  background-color: beige;
`;
