import styled from "styled-components";

export const Container = styled.div`
  input {
    height: 2.5rem;
    border-radius: .3rem;
    border: 1px solid ${(props) => props.theme.colors.separator};
    padding-inline-start: 1rem;
  }
` 