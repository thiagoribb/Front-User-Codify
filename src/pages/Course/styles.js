import styled from "styled-components";
import tipography from "../../config/typography";

export const Container = styled.body`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: ${tipography.Roboto};

  .accordion {
    width: 80%;
  }
`;

export const temp = 0;
