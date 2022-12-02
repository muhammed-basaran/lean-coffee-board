import Card from "../components/Card";
import Header from "../components/Header";
import Form from "../components/Form";
import { useState } from "react";
import styled from "styled-components";

export default function HomePage() {
  const [entries, setEntries] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState();

  const handleEdit = (id) => {
    setEdit(true);
    setEditID(id);
  };

  const handleSubmit = (newEntry) => {
    setEntries([...entries, { ...newEntry }]);
  };

  function handleDelete(id) {
    setEntries(entries.filter((entry) => entry.id !== id));
  }

  return (
    <StyledBody>
      <Header />
      <div></div>
      <Card
        entries={entries}
        onDelete={handleDelete}
        onEdit={handleEdit}
        edit={edit}
        setEdit={setEdit}
        setEntries={setEntries}
        editID={editID}
      />

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

const StyledSection = styled.section`
  position: relative;

  background-color: brown;
  color: white;
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
  padding-left: 20px;
  margin: 20px;
  text-align: left;
`;

const StyledIcon = styled.button`
  position: absolute;
  right: 20px;

  color: black;
  border: 1px solid black;
  width: 50px;
  height: 30px;
  background-color: beige;
  cursor: pointer;
  text-align: center;
  padding-top: 5px;
`;

const StyledIcon2 = styled.button`
  position: absolute;
  right: 20px;
  top: 50px;
  color: black;
  border: 1px solid black;
  width: 50px;
  height: 30px;
  background-color: beige;
  cursor: pointer;
  text-align: center;
  padding-top: 5px;
`;
