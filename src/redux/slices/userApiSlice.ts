
import { apiSlice } from './apiSlice';

interface User {
  password: string;
  name: string;
  email: string;
}
type userResponse= User[]

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<userResponse,null >({
      query: (user) => ({
        url: '/register', // Change the URL to '/register' for registration endpoint
        method: 'POST',   // Use POST method for registration
        body: user,       // Send the user data in the request body
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = userApiSlice;
