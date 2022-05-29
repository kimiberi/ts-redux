interface RepositoriesState {
    loading: boolean;
    error: string | null; // 'null' means default value for the meantime while you're not assigning anything yet
    data: string[];
}

// action -> remember in TS, every action is always be an object that MUST have a type property
// it monitors the action property, (example you mispelled action.pyaloads)

// OPTION 1:
interface Action {
    type: string;
    payload?: any; // ?. means may or may not have payload property
}

// NOTICE under 'search_repositories': we can easily change the 'data' property that we are returning to any kind of value (example -> data: {} or data: 12345 or data: 'asfgkj')
// To avoid this: we MUST apply the 'RETURN TYPE ANNOTATION' to our 'reducer' function by ALWAYS returning the value of interface type 'RepositoriesState'
const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
    switch (action.type) {
        case 'search_repositories':
            return { loading: true, error: null, data: [] };
            // loading: true -> we ask new request
            // data: [] -> whatever results we had as we tried to fetch some data don't matter anymore cuz we're trying to do research for now
        case 'search_repositories_success':
            return { loading: false, error: null, data: action.payload };
            // loading: false -> no longer loading
            // data: action.payload -> contains all that repositories/info we just found, which we received string[]
        case 'search_repositories_error':
            return { loading: false, error: action.payload, data: [] };
            // error: action.payload -> it contains error message
            // data: [] -> reset data to empty array
        default:
            return state;
    }
}

export default reducer