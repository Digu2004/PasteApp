import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: JSON.parse(localStorage.getItem("pastes")) || [],
};

export const slice = createSlice({
  name: "paster",
  initialState,
  reducers: {
    addcreatepaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste created successfully");
    },
    updatecreatepaste: (state, action) => {
      const updatedPaste = action.payload;
      const index = state.pastes.findIndex(p => p._id === updatedPaste._id);
      if (index !== -1) {
        state.pastes[index] = updatedPaste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated successfully");
      }
    },
    removecreatepaste: (state, action) => {
      const id = action.payload;
      state.pastes = state.pastes.filter(p => p._id !== id);//remove the matched item 
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste deleted successfully");
    },
  },
});

export const { addcreatepaste, updatecreatepaste, removecreatepaste } = slice.actions;
export default slice.reducer;
