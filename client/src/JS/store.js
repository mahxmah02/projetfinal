import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import commandeSlice from "./CommandeSlice/commandeSlice"

export const store = configureStore({
  reducer: {
    user: userSlice,
    commande:commandeSlice
  },
});
