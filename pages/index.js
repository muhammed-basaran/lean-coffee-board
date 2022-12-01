import Header from "../components/Header";
import Form from "../components/Form";
import Card from "../components/Card";
import { useState } from "react";

export default function HomePage() {
  const [entries, setEntries] = useState([]);

  const handleSubmit = (newEntry) => {
    setEntries([...entries, { ...newEntry }]);
  };
  console.log();

  return (
    <div>
      <Header />
      <div></div>
      <Card entries={entries} />
      <footer>
        <Form onSubmit={handleSubmit} />
      </footer>
    </div>
  );
}

const thoughtsArray = {
  id: "",
  thoughts: "",
  name: "",
};
