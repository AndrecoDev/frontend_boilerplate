import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Andrecodev",
  profile: "Developer",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const allUsers = (state: any) => state.user;

export default userSlice.reducer;
