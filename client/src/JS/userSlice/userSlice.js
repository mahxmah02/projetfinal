import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const serveurRegister = createAsyncThunk("serveur/register", async (serveur) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/serveur/register",
      serveur
    );
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const serveurLogin = createAsyncThunk("serveur/login", async (serveur) => {
  try {
    let response = await axios.post("http://localhost:5000/serveur/login", serveur);
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const serveurCurrent = createAsyncThunk("serveur/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/serveur/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const getuser=createAsyncThunk('serveur/get',async()=>{
  try{
let result=axios.get('http://localhost:5000/serveur/all')
return result
  }catch(error){
  console.log(error)
  }
})
export const deleteuser=createAsyncThunk('serveur/delete',async(id)=>{
  try{
let result=axios.delete(`http://localhost:5000/serveur/${id}`)
return result
  }catch(error){
  console.log(error)
  }
})

export const updateuser=createAsyncThunk('serveur/update',async({id, user})=>{
  try{
let result=axios.put(`http://localhost:5000/serveur/${id}`,user)
return result
  }catch(error){
  console.log(error)
  }
})
const initialState = {
  serveur: null,
  status: null,
};

export const serveurSlice = createSlice({
  name: "serveur",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.serveur = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [serveurRegister.pending]: (state) => {
      state.status = "pending";
    },
    [serveurRegister.fulfilled]: (state, action) => {
      state.status = "succcessssss";
      state.serveur = action.payload.data.newserveurToken;
      localStorage.setItem("token", action.payload?.data?.token);
    },
    [serveurRegister.rejected]: (state) => {
      state.status = "fail";
    },
    [serveurLogin.pending]: (state) => {
      state.status = "pending";
    },
    [serveurLogin.fulfilled]: (state, action) => {
      state.status = "succcessssss";
      state.serveur = action.payload?.data?.serveur;
      localStorage.setItem("token", action.payload?.data?.token);
    },
    [serveurLogin.rejected]: (state) => {
      state.status = "fail";
    },
    [serveurCurrent.pending]: (state) => {
      state.status = "pending";
    },
    [serveurCurrent.fulfilled]: (state, action) => {
      state.status = "succcessssss";
      state.serveur = action.payload?.data?.user;
    },
    [serveurCurrent.rejected]: (state) => {
      state.status = "fail";
    },
    [getuser.pending]:(state)=>{
      state.status="pending";
  },
  [getuser.fulfilled]:(state,action)=>{
      state.status="success";
      state.user=action.payload?.data?.list
  },
  [getuser.rejected]:(state,action)=>{
      state.status="failed";
  },
  [deleteuser.pending]:(state)=>{
      state.status="pending";
  },
  [deleteuser.fulfilled]:(state,action)=>{
      state.status="success";
  },
  [deleteuser.rejected]:(state,action)=>{
      state.status="failed";
  },
  [updateuser.pending]:(state)=>{
      state.status="pending";
  },
  [updateuser.fulfilled]:(state,action)=>{
      state.status="success";
      state.user=action.payload?.data?.user
  },
  [updateuser.rejected]:(state,action)=>{
      state.status="failed";
  }
  },
});

// Action creators are generated for each case reducer function
export const { logout } = serveurSlice.actions;

export default serveurSlice.reducer;
