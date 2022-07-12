import Link from 'next/link';
import axios from 'axios';
import useSWR from 'swr';

export async function getServerSideProps() {
  const { data, error } = await axios.get(`https://jsonplaceholder.typicode.com/users`);

  return {
    props: {
      users: data,
    },
  };
}

function HomePage({ users }) {
  console.log(users)
  return (
   
    <ul>
      
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`} passHref>
            <a> {user.username} </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HomePage;