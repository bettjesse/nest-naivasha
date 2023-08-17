"use client"
import { useGetUserQuery } from '@/redux/slices/userApiSlice';

interface User {
  id: number;
  name: string;
  email: number;
}

const UserList: React.FC = () => {
  const { data, error, isLoading } = useGetUserQuery(null);

 
 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: </div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data?.map((user: User) => (
          <li key={user.id}>
            Name: {user.name}, Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
