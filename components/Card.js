import React from "react";
import { FaTrash } from "react-icons/fa";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";

export default function Card({
  entries,
  onDelete,
  onEdit,
  edit,
  editID,
  setEntries,
  setEdit,
}) {
  function handleEdit(event) {
    event.preventDefault();
    const newQuestion = event.target.elements.newQuestion.value;
    const newName = event.target.elements.newName.value;

    setEntries(
      entries.map((entry) => {
        if (entry.id === editID) {
          return { id: entry.id, name: newName, thoughts: newQuestion };
        }

        return entry;
      })
    );
    setEdit(false);
    console.log(entries);
  }

  return (
    <>
      <section>
        {entries.map((entry) => (
          <StyledSection key={nanoid()}>
            <StyledIcon onClick={() => onDelete(entry.id)}>
              <FaTrash size="20px" />
            </StyledIcon>
            <StyledIcon2 onClick={() => onEdit(entry.id)}>
              <FaEdit size="20px" />
            </StyledIcon2>
            <form onSubmit={handleEdit}>
              <StyledList>
                <li>
                  {" "}
                  {edit ? (
                    <input
                      name="newName"
                      id="name"
                      type="text"
                      required
                      placeholder="Edit your name..."
                      className="name"
                    ></input>
                  ) : (
                    <span>{entry.name}</span>
                  )}
                </li>
                <li>
                  {edit ? (
                    <input
                      name="newQuestion"
                      required
                      placeholder="Edit your thoughts..."
                      id="thoughts"
                      type="text"
                      className="thoughts"
                    ></input>
                  ) : (
                    <span>{entry.thoughts}</span>
                  )}
                </li>
              </StyledList>
              {edit && <button type="submit"> + </button>}
            </form>
          </StyledSection>
        ))}
      </section>
    </>
  );
}

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

const StyledList = styled.ul`
  list-style: none;
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
