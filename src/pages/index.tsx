import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

import { PostCard } from '../components/PostCard';

import * as Styled from './_styles';

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home | spacetraveling</title>
      </Head>

      <Styled.Container>
        <Styled.PostsContainer>

          {posts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              author={post.author}
              onClick={() => router.push(`/${post.slug}`)}
            />
          ))}

          <Link href={`/?posts=${posts.length + 5}`} passHref>
            <Styled.LoadMorePosts>Carregar mais posts</Styled.LoadMorePosts>
          </Link>

        </Styled.PostsContainer>
      </Styled.Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const prismic = getPrismicClient(req);

  const size = (query.posts && Number(query.posts) > 5) ? Number(query.posts) : 5;

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.description', 'post.author'],
    pageSize: size,
  });

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      description: RichText.asText(post.data.description),

      date: format(parseISO(post.last_publication_date), 
      "dd MMM yyyy", 
      { locale: pt }),

      author: RichText.asText(post.data.author),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
