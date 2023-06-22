import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./slices/userDetails";

const store = configureStore({
    reducer : {
        user : userDetail
    }
})

export default store;