import { FiCalendar, FiUser } from 'react-icons/fi';

import * as Styled from './styles';

interface PostCardProps {
  title: string;
  description: string;
  date: string;
  author: string;
  onClick: () => void;
}

export function PostCard({ title, description, date, author, onClick }: PostCardProps) {
  return (
    <Styled.Container onClick={onClick}>
      <Styled.Title>{title}</Styled.Title>

      <Styled.Description>{description}</Styled.Description>

      <Styled.Details>
        <Styled.Date>
          <FiCalendar size={20} /> {date}
        </Styled.Date>

        <Styled.Author>
          <FiUser size={20} /> {author}
        </Styled.Author>
      </Styled.Details>
    </Styled.Container>
  );
}
