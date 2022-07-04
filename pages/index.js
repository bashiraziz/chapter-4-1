import Link from 'next/link';
import axios from 'axios';
import {useEffect} from 'react'

export async function getServerSideProps() {
  const { data } = await axios.get('https://api.rwnjs.com/04/users');

  return {
   props: {
     users: data,
    },
  };
}

function HomePage({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`} passHref>
            <a> {user.username} </a>
          </Link>
        </li>
      ))}
  n  </ul>
  );
}

export default HomePage;