import { useEffect } from "react";
import { useState } from "react";

export function useFetch() {
  const [question, setQuestion] = useState({
    name: "",
    id: "",
    text: "",
  });

  useEffect(() => {
    async function getQuestions() {
      try {
        const response = await fetch(
          "https://lean-coffee-board-api-nextjs.vercel.app/api/questions"
        );
        const question = await response.json();
        setQuestion(question);
        console.log(question);
      } catch (error) {
        console.log("try again");
      }
    }
    getQuestions();
  }, [question]);

  return question;
}
