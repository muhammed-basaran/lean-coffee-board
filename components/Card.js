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
  updateQuestion,
  setEdit,
}) {
  function handleEdit(event) {
    event.preventDefault();
    const newQuestion = event.target.elements.newQuestion.value;
    const newName = event.target.elements.newName.value;

    const editedContent = {
      text: newQuestion,
      name: newName,
    };

    updateQuestion(editID, editedContent);

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
                  {edit && entry.id == editID ? (
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
                <StyledListItem>
                  {edit && entry.id == editID ? (
                    <input
                      name="newQuestion"
                      required
                      placeholder="Edit your thoughts..."
                      id="thoughts"
                      type="text"
                      className="thoughts"
                    ></input>
                  ) : (
                    <span>{entry.text}</span>
                  )}
                </StyledListItem>
              </StyledList>
              {edit && entry.id == editID && (
                <StyledEditButton type="submit"> + </StyledEditButton>
              )}
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
  border-radius: 30px;
  padding: 10px;
  margin: 15px;
  text-align: left;
  overflow: scroll;
`;

const StyledList = styled.ul`
  list-style: none;
`;

const StyledListItem = styled.li`
  width: 350px;
`;

const StyledEditButton = styled.button`
  position: absolute;
  left: 50px;
  bottom: 5px;

  color: black;
  border: 1px solid black;
  width: 30px;
  height: 20px;
  background-color: beige;
  cursor: pointer;
  text-align: center;
  padding-top: 1px;
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
