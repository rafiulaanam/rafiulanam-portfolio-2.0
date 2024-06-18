
import { TProject } from '@/interface/project';
import {  createSlice } from '@reduxjs/toolkit';


// interface project {
//   _id: string;
//   title: string;
//   image: string;
//   content: string;
//   updatedAt: string;
//   category: string; 
//   // data: object
// }

interface AuthState {
  user: object | null;
  token: string | null;
}
const initialState:AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
    setUser: (state, action) => {
      const {user, token} = action.payload;
        state.user = user;
        state.token = token;
    },
   

  }
});

export const {
 setUser
} = authSlice.actions;

export default authSlice.reducer;
