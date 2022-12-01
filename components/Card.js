import React from "react";
import { FaTrash } from "react-icons/fa";
import { nanoid } from "nanoid";
import styled from "styled-components";

export default function Card({ entries, onDelete }) {
  function handleDelete() {}

  return (
    <>
      <section>
        {entries.map((entry) => (
          <StyledSection key={nanoid()}>
            <StyledIcon onClick={handleDelete}>
              <FaTrash />
            </StyledIcon>
            <h2>{entry.thoughts}</h2>
            <p>{entry.name}</p>
          </StyledSection>
        ))}
      </section>
    </>
  );
}

const StyledSection = styled.section`
  background-color: brown;
  color: white;
  border: 2px solid black;
  border-radius: 20px;
  padding: 10px;
  padding-left: 20px;
  margin: 20px;
  text-align: left;
`;

const StyledIcon = styled.div`
  color: black;
  border: 1px solid black;
  width: 50px;
  height: 30px;
  background-color: beige;
  cursor: pointer;
  text-align: center;
  padding-top: 5px;
`;
