import { createSlice } from "@reduxjs/toolkit";

const photo = createSlice({
  name: "photos",
  initialState: [],
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      const removePhotoId = action.payload;
      return state.filter((photo) => photo.id === removePhotoId);
    },
    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);
      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto
      }
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto } = actions;
export default reducer;
