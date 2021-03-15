import {combineReducers} from "redux";
import {branchAddReducer, branchDeleteReducer, branchReducer} from "./branchesReducers";

export const rootReducer = combineReducers({
    branch: branchReducer,
    addBranch: branchAddReducer,
    deleteBranch: branchDeleteReducer
})

export type RootState = ReturnType<typeof rootReducer>