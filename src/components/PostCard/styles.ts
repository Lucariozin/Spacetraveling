import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 1rem;
  border-radius: 1rem;

  transition: all .2s ease-in-out;

  &:hover {
    background-color: var(--black-900);
  }
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
`;

export const Details = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  margin-top: 1rem;
`;

export const Date = styled.time`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Author = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
