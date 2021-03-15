import {BranchAction, BranchActionTypes, BranchAddState, BranchDeleteState, BranchState} from "../../types/branch";


const initialState: BranchState = {
    branches: [],
    loading: false,
    error: null
}

const initialAddState: BranchAddState = {
    success: false,
    loading: false,
    error: null
}

const initialDeleteState: BranchAddState = {
    success: false,
    loading: false,
    error: null
}

export const branchReducer = (state = initialState, action: BranchAction): BranchState => {
    switch (action.type) {
        case BranchActionTypes.FETCH_BRANCHES:
            return {loading: true, error: null, branches: []}
        case BranchActionTypes.FETCH_BRANCH_SUCCESS:
            return {loading: false, error: null, branches: action.payload}
        case BranchActionTypes.FETCH_BRANCH_ERROR:
            return {loading: false, error: action.payload, branches: []}
        default:
            return state
    }
}

export const branchAddReducer = (state = initialAddState, action: BranchAction): BranchAddState => {
    switch (action.type) {
        case BranchActionTypes.ADD_BRANCH:
            return {loading: true, error: null, success: false}
        case BranchActionTypes.ADD_BRANCH_SUCCESS:
            return {loading: false, error: null, success: true}
        case BranchActionTypes.ADD_BRANCH_ERROR:
            return {loading: false, error: action.payload, success: false}
        default:
            return state
    }
}

export const branchDeleteReducer = (state = initialDeleteState, action: BranchAction): BranchDeleteState => {
    switch (action.type) {
        case BranchActionTypes.DELETE_BRANCH:
            return {loading: true, error: null, success: false}
        case BranchActionTypes.DELETE_BRANCH_SUCCESS:
            return {loading: false, error: null, success: true}
        case BranchActionTypes.DELETE_BRANCH_ERROR:
            return {loading: false, error: action.payload, success: false}
        default:
            return state
    }
}