import {Dispatch} from "redux";
import {BranchAction, BranchActionTypes} from "../../types/branch";

import axios from 'axios'


export const fetchBranches = () => async (dispatch: Dispatch<BranchAction>) => {
    try {
        dispatch({type: BranchActionTypes.FETCH_BRANCHES})

        const {data} = await axios.get(`${process.env.PUBLIC_URL}/data/branches.json`)

        dispatch({type: BranchActionTypes.FETCH_BRANCH_SUCCESS, payload: data})

    } catch (e) {

        dispatch({type: BranchActionTypes.FETCH_BRANCH_ERROR, payload: 'Error get Branches'})

    }
}
