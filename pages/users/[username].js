import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps(ctx) {
  const { username } = ctx.query;
  const { status, data } = await axios.get(`https://jsonplaceholder.typicode.com/users/?username=${username}`, {
    // headers: {
    //   authorization: process.env.API_TOKEN,
    // },
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: data,
    },
  
   };
  
}

function UserPage({ user }) {
 console.log(user) 
 return (
    <div>
      <div>
        <Link href="/" passHref>
          Back to home
        </Link>
      </div>
      <hr />
      <div style={{ display: 'flex' }}>
        {/* <img src={user.profile_picture} alt={user.username} width={150} height={150} /> */}
        <div>
          <div> 
          {console.log(user)}
            <b>Username:</b> {String(user.username)}
          </div>
          <div>
            <b>Full name:</b> {user.id} {user.last_name}
          </div>
          <div>
            <b>Email:</b> {user.email}
          </div>
          <div>
            <b>Company:</b> {user.company}
          </div>
          <div>
            <b>Job title:</b> {user.job_title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;