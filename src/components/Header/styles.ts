import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  border-bottom: 0.2rem solid var(--black-900);
  padding: 0 1rem;
`;

export const Wrapper = styled.div`
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 24rem;
  height: 2.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;
