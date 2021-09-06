import { GetStaticPaths, GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from 'prismic-dom';
import { format, formatDistance, parseISO } from 'date-fns';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { BiTimeFive } from 'react-icons/bi';
import Head from "next/head";
import pt from 'date-fns/locale/pt-BR';

import * as Styled from './_styles';

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    author: string;
    bannerUrl: string;
    postedIn: string;
    postedTime: string;
  }
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.slug}</title>
      </Head>

      <Styled.Banner src={post.bannerUrl} alt="Banner do post" />

      <Styled.Container>
        <Styled.MainContent>
          
          <Styled.Title>{post.title}</Styled.Title>

          <Styled.Details>
            <Styled.PostedIn>
              <FiCalendar size={20} /> {post.postedIn}
            </Styled.PostedIn>

            <Styled.Author>
              <FiUser size={20} /> {post.author}
            </Styled.Author>

            <Styled.postedTime>
              <BiTimeFive size={20} /> {post.postedTime}
            </Styled.postedTime>
          </Styled.Details>

          <Styled.Content dangerouslySetInnerHTML={{ __html: post.content }} />

        </Styled.MainContent>
      </Styled.Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { slug: 'como-renomear-varios-arquivos-de-uma-vez-usando-o-terminal' }
      }
    ],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient();

  try {
    const { data, last_publication_date } = await prismic.getByUID('post', String(params.slug), {});

    const post = {
      slug: params.slug,
      title: RichText.asText(data.title),
      content: RichText.asHtml(data.content),
      author: RichText.asText(data.author),
      bannerUrl: data.banner.url,
      postedIn: format(new Date(last_publication_date), 'dd MMM yyyy', { locale: pt }),
      postedTime: formatDistance(parseISO(last_publication_date), new Date(), { locale: pt }),
    };
  
    return {
      props: {
        post,
      },
      revalidate: 60 * 60 * 3, // 3 hours
    };

  } catch {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    };
  }
};
