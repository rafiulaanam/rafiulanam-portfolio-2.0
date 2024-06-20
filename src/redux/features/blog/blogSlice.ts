
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

interface ProjectState {
  currentProject: TProject[] | null;
  error: string | null;
  loading: boolean;
}
const initialState:ProjectState = {
  currentProject: null,
  error: null,
  loading: false,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    waitingForProject: (state) => {
      state.loading = true;
      state.error = null;
      },
    getProjectSuccess: (state, action) => {
      state.currentProject = action.payload;
        state.loading = false;
        state.error = null;
    },
    getProjectFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteProjectSuccess: (state, action) => {
      state.currentProject = (state.currentProject || []).filter((item) => item?._id === action.payload);
      state.loading = false;
      state.error = null;
    },

    updateProjectSuccess: (state, action) => {
      const updatedProjectId = action.payload._id;
    
      // Find the index of the project to be updated
      const projectIndex = (state.currentProject || []).findIndex(item => item?._id === updatedProjectId);
    
      if (projectIndex !== -1) {
        // Create a new project object with the updated properties
        const updatedProject = {
          ...((state.currentProject || [])[projectIndex] as Record<string, any>), // Type assertion here
          ...action.payload,
        };
    
        // Update the project in the array
        ((state.currentProject || [])[projectIndex] as Record<string, any>) = updatedProject; // Type assertion here
      }
    
      state.loading = false;
      state.error = null;
    }
    
  

  }
});

export const {
  waitingForProject,
  getProjectSuccess,
  getProjectFailure,
  deleteProjectSuccess,
  updateProjectSuccess

  // signInSuccess,
  // signInFailure,
  // updateStart,
  // updateSuccess,
  // updateFailure,
  // deleteUserStart,
  // deleteUserSuccess,
  // deleteUserFailure,
  // signoutSuccess,
} = projectSlice.actions;

export default projectSlice.reducer;
