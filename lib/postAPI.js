import { useEffect } from "react";
import { useState } from "react";

async function postQuestions() {
  const response = await fetch(
    "https://lean-coffee-board-api-nextjs.vercel.app/api/questions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCard),
    }
  );
}

getQuestion();
