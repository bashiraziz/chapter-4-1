import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps(context) {

  const { username } = context.query;
  
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
 
  const userIndex = user.findIndex(x => x.username ===`${x.username}`);
  console.log(userIndex);

 return (
    <div>
      <div>
        <Link href="/" passHref>
          Back to home
        </Link>
      </div>
      <hr />
      <div style={{ display: 'flex' }}>
         <img src='https://picsum.photos/200' alt={user[userIndex].username} width={150} height={150} />
        <div>
          <div> 
          {console.log(user)}
            <b>Username:</b> {user[userIndex].username}
          </div>
          <div>
            <b>Full name:</b> {user[userIndex].name}
          </div>
          <div>
            <b>Email:</b> {user[userIndex].email}
          </div>
          <div>
            <b>Company:</b> {user[userIndex].company.name}
          </div>
          <div>
            <b>ID:</b> {user[userIndex].id}
          </div>
          <div>
            <b>Phone:</b> {user[userIndex].phone}
          </div>
          <div>
            <b>Web Site:</b> {user[userIndex].website}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;