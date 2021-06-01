import { GetServerSideProps, NextPage } from 'next';

interface Props {
  host: string;
}

const Home: NextPage<Props> = ({ host }) => {
  return <div>App | Host: {host}</div>;
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  return {
    props: {
      host: ctx.req.headers.host,
    },
  };
};
