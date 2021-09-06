import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 8rem 1rem;
  /* padding-top: 8rem; */
`;

export const MainContent = styled.main`
  max-width: 72rem;
  margin: 0 auto;
`;

export const Banner = styled.img`
  width: 100%;
  max-height: 40rem;
`;

export const Title = styled.h1`
  font-size: 4.8rem;
  font-weight: 700;
`;

export const Details = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const PostedIn = styled.time`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  gap: 0.8rem;
`;

export const Author = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  gap: 0.8rem;
`;

export const postedTime = styled.time`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  gap: 0.8rem;
`;

export const Content = styled.div`
  margin-top: 7rem;
  font-size: 1.8rem;
  overflow-x: hidden;

  h1, h2, h3, h4, h5, h6 {
    font-size: 4rem;
    margin: 3rem 0;
  }

  pre {
    background-color: var(--black-900);
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 2rem 0;
  }

  p {
    line-height: 3rem;
  }

  p + p {
    margin-top: 4rem;
  }

  ul {
    background-color: var(--black-900);
    padding: 1rem;
    line-height: 3rem;
    border-radius: 0.5rem;
    margin: 2rem 0;

    li {
      margin-left: 2rem;
    }
  }
`;
