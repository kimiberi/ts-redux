import { ActionType } from "../action-types"

// OPTION 2: Separate each Action Type (action.type) and Payload (action.payload) Interface
// AFTER: const reducer = (state: RepositoriesState, action: SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction): RepositoriesState => { ... }
interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload: string[] // contains all that repositories/info we just found
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR,
    payload: string // error message
}

// OPTION 2.1
// it represents ALL different possible actions that can be process by ALL different Reducers
// List different types of interface 'action'
export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction