import Card from "../components/Card";
import Header from "../components/Header";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function HomePage() {
  const [entries, setEntries] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState();

  async function getQuestion() {
    try {
      const response = await fetch(
        "https://lean-coffee-board-api-nextjs.vercel.app/api/questions"
      );
      const entries = await response.json();
      setEntries(entries);
    } catch (error) {
      console.log("try again");
    }
  }
  useEffect(() => {
    getQuestion();
  }, []);

  async function postQuestion(newCard) {
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
      }
    );
    getQuestion();
  }

  async function deleteQuestion(id) {
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/" + id,
      {
        method: "DELETE",
      }
    );
    getQuestion();
  }

  async function updateQuestion(id, updateQuestion) {
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateQuestion),
      }
    );
    getQuestion();
  }

  const handleEdit = (id) => {
    setEdit(true);
    setEditID(id);
  };

  return (
    <StyledBody>
      <Header />
      <div></div>
      <Card
        entries={entries}
        onDelete={deleteQuestion}
        onEdit={handleEdit}
        edit={edit}
        setEdit={setEdit}
        updateQuestion={updateQuestion}
        editID={editID}
      />

      <footer>
        <Form onSubmit={postQuestion} />
      </footer>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  text-align: center;
  border: 2px solid black;
  height: 100vh;
  width: 100vw;
  background-color: rgb(222, 170, 136);
  overflow: scroll;
`;
