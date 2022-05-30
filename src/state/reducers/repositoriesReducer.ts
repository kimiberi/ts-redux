import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
    loading: boolean;
    error: string | null; // 'null' means default value for the meantime while you're not assigning anything yet
    data: string[];
}

// action -> remember in TS, every action is always be an object that MUST have a type property
// it monitors the action property, (example you mispelled action.pyaloads)

// OPTION 1:
// BEFORE: const reducer = (state: RepositoriesState, action: Action): RepositoriesState => { ... }
// interface Action {
//     type: string;
//     payload?: any; // ?. means may or may not have payload property
// }

const initialState = {
    loading: false,
    error: null,
    data: []
}

// NOTICE under 'search_repositories': we can easily change the 'data' property that we are returning to any kind of value (example -> data: {} or data: 12345 or data: 'asfgkj')
// To avoid this: we MUST apply the 'RETURN TYPE ANNOTATION' to our 'reducer' function by ALWAYS returning the value of interface type 'RepositoriesState'
const reducer = (state: RepositoriesState = initialState, action: Action): RepositoriesState => {
    // Using separate interface action -> 100% certain as it is equivalent to if (action.type === 'search_repositories') { ... }

    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] };
            // loading: true -> we ask new request
            // data: [] -> whatever results we had as we tried to fetch some data don't matter anymore cuz we're trying to do research for now
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload };
            // loading: false -> no longer loading
            // data: action.payload -> contains all that repositories/info we just found, which we received string[]
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] };
            // error: action.payload -> it contains error message
            // data: [] -> reset data to empty array
        default:
            return state;
    }
}

export default reducer