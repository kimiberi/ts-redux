import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

// make request to NPM API and manually dispatch action directly to the redux store and get those all process by a reducer
// we'll use redux thunk in order to write up ASYNC action creator
export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })

        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            })

            const names = data.objects?.map((result: any) => {
                return result.package.name;
            })

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })

        } catch (err) {
            // NOTE: if you get this error:"Object is of type 'unknown'", update the tsconfig.json
            // tsconfig.json -> "useUnknownInCatchVariables": false
            // works only on Typescript v4.4 or higher
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message
            })
        }
    }
}