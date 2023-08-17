import { apiSlice } from './apiSlice';


interface User {
    id: number;
    name: string;
    email: number;
  }

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        getUser: builder.query<User[],null> ({
            query:()=> ({
                url: '/users',
                method: 'GET',
            })
                        
        })
    })
})

export const {useGetUserQuery} = userApiSlice