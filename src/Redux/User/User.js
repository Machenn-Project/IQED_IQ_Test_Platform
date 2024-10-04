import { createSlice, configureStore } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'UserState',
  initialState: {
    Name: "11111",
    Email: "sss",
    Age: "",
    Password: "",
    School_Name: "",
    Grade: "",
    Mobile_Number: ""
  },
  reducers: {
    UpdateUser: (state, action) => {
      Object.assign(state, action.payload);
    }
  }
});

export const { UpdateUser } = UserSlice.actions;
export default UserSlice.reducer;
