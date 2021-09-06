import { useRouter } from 'next/dist/client/router';
import * as Styled from './styles';

export function Header() {
  const router = useRouter();

  return (
    <Styled.Container>
      <Styled.Wrapper>
        
        <Styled.Logo 
          src="/logo.svg" 
          alt="Spacetraveling Logo" 
          onClick={() => router.push('/')} 
        />

      </Styled.Wrapper>
    </Styled.Container>
  );
}
