

// export interface IBranch {
//     id: string
//     address: string
//     phone: string
//     officeManager: string
//     officeAdministrator: string
//     status: boolean
// }

export interface BranchState {
    branches: any[]
    loading: boolean
    error: null | string
}

export interface BranchAddState {
    success: boolean
    loading: boolean
    error: null | string
}

export interface BranchDeleteState {
    success: boolean
    loading: boolean
    error: null | string
}

export enum BranchActionTypes {
    FETCH_BRANCHES = 'FETCH_BRANCHES',
    FETCH_BRANCH_SUCCESS = 'FETCH_BRANCH_SUCCESS',
    FETCH_BRANCH_ERROR = 'FETCH_BRANCH_ERROR',

    ADD_BRANCH = 'ADD_BRANCH',
    ADD_BRANCH_SUCCESS = 'ADD_BRANCH_SUCCESS',
    ADD_BRANCH_ERROR = 'ADD_BRANCH_ERROR',

    DELETE_BRANCH = 'DELETE_BRANCH',
    DELETE_BRANCH_SUCCESS = 'DELETE_BRANCH_SUCCESS',
    DELETE_BRANCH_ERROR = 'DELETE_BRANCH_ERROR'
}

interface FetchBranchesAction {
    type: BranchActionTypes.FETCH_BRANCHES
}

interface FetchBranchesSuccessAction {
    type: BranchActionTypes.FETCH_BRANCH_SUCCESS
    payload: any[]
}

interface FetchBranchesErrorAction {
    type: BranchActionTypes.FETCH_BRANCH_ERROR
    payload: string
}

interface AddBranchesAction {
    type: BranchActionTypes.ADD_BRANCH
}

interface AddBranchesSuccessAction {
    type: BranchActionTypes.ADD_BRANCH_SUCCESS
}

interface AddBranchesErrorAction {
    type: BranchActionTypes.ADD_BRANCH_ERROR
    payload: string
}

interface DeleteBranchesAction {
    type: BranchActionTypes.DELETE_BRANCH
}

interface DeleteBranchesSuccessAction {
    type: BranchActionTypes.DELETE_BRANCH_SUCCESS
}

interface DeleteBranchesErrorAction {
    type: BranchActionTypes.DELETE_BRANCH_ERROR
    payload: string
}

export type BranchAction =
    FetchBranchesAction |
    FetchBranchesErrorAction |
    FetchBranchesSuccessAction |
    AddBranchesAction |
    AddBranchesSuccessAction |
    AddBranchesErrorAction |
    DeleteBranchesAction |
    DeleteBranchesSuccessAction |
    DeleteBranchesErrorAction