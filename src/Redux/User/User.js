import { createSlice, configureStore } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'UserState',
  initialState: {
    Name: "",
    Email: "",
    Age: "",
    Password: "",
    School_Name: "",
    Grade: "",
    Mobile_Number: "",
    streak:2
  },
  reducers: {
    UpdateUser: (state, action) => {
      Object.assign(state, action.payload);
    }
  }
});

export const { UpdateUser } = UserSlice.actions;
export default UserSlice.reducer;
