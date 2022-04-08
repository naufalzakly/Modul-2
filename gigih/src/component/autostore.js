import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./autoreduce";

export default configureStore({
    reducer: {
        auth: AuthReducer
    }
})
