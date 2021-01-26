import { createSlice } from '@reduxjs/toolkit';

export const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
    cameraImage: null,
  },  
  reducers: {
   
    setCameraImage: (state, action) => {
      state.cameraImage = action.payload;
    },
    reseatCameraImage: (state) => {
        state.cameraImage = null;

    }
  },
});

export const { setCameraImage, reseatCameraImage } = cameraSlice.actions;



export const selectCameraImage = (state) => state.camera.cameraImage;

export default cameraSlice.reducer;
