import Login from '../components/LoginForm';

const Index = () => (
  <Login />
);

export async function getServerSideProps({ req: { cookies } }) {
  if (cookies.AUTH) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    };
  }
  return { props: {} };
}

export default Index;
