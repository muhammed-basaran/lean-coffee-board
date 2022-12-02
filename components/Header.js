import styled from "styled-components";

export default function Header() {
  return <StyledHeader>Lean Coffee Board</StyledHeader>;
}

const StyledHeader = styled.h1`
  border: 1px solid 222, 170, 136;
  margin-bottom: 50px;
  padding: 20px;
  background-color: RGB(205, 133, 63);
  color: white;
`;
