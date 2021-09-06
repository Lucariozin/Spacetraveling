import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 5rem 1rem;
`;

export const PostsContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;

  > div + div {
    margin-top: 5rem;
  }
`;

export const LoadMorePosts = styled.a`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--purple-500);
  display: block;
  margin-left: 0.5rem;
  margin-top: 5rem;

  &:hover {
    text-decoration: underline;
  }
`;
