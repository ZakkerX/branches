import {Dispatch} from "redux";
import {BranchAction, BranchActionTypes} from "../../types/branch";
import branches from '../../data/branches.json'

let branchesData = branches

export const fetchBranches = () => (dispatch: Dispatch<BranchAction>) => {
    try {

        dispatch({type: BranchActionTypes.FETCH_BRANCHES})

        setTimeout(() => {
            dispatch({type: BranchActionTypes.FETCH_BRANCH_SUCCESS, payload: branchesData})
        }, 500)
    } catch (e) {

        dispatch({type: BranchActionTypes.FETCH_BRANCH_ERROR, payload: 'Error get Branches'})

    }
}

export const addBranch = (data:any) => (dispatch: Dispatch<BranchAction>) => {
    try {
        dispatch({type: BranchActionTypes.ADD_BRANCH})
        if(data.address === '' || data.phone === '') {
            dispatch({type: BranchActionTypes.ADD_BRANCH_ERROR, payload: 'Required input'})
        } else {
            const id = Math.floor(Math.random() * 100).toString()

            branchesData.push({...data, id})

            setTimeout(() => {
                dispatch({type: BranchActionTypes.ADD_BRANCH_SUCCESS})
            }, 500)
        }

    } catch (e) {
        dispatch({type: BranchActionTypes.ADD_BRANCH_ERROR, payload: 'Error add Branch'})
    }
}

export const deleteBranch = (data:any) => (dispatch: Dispatch<BranchAction>) => {
    try{
        dispatch({type: BranchActionTypes.DELETE_BRANCH})

        branchesData = branchesData.filter((item) => item.id !== data.id)

        setTimeout(() => {
            dispatch({type: BranchActionTypes.DELETE_BRANCH_SUCCESS})
        },500)
    } catch (e) {
        dispatch({type: BranchActionTypes.DELETE_BRANCH_ERROR, payload: 'Error delete Branch'})
    }
}

export const searchTracks = (query: string) => {
    return async (dispatch: Dispatch<BranchAction>) => {
        try {
            dispatch({type: BranchActionTypes.FETCH_BRANCHES})

            if(query === '') {
                dispatch({type: BranchActionTypes.FETCH_BRANCH_SUCCESS, payload: branchesData})
            } else {
                const res = branchesData.filter((item) => {
                    if(item.phone.indexOf(query) !== -1){
                        return item
                    }
                })

                dispatch({type: BranchActionTypes.FETCH_BRANCH_SUCCESS, payload: res})

            }

        } catch (e) {
            dispatch({type: BranchActionTypes.FETCH_BRANCH_ERROR, payload: `${e}, Error get Branches`})
        }
    }
}