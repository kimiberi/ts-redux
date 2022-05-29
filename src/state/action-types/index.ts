// Just list and access ALL different action types
// instead of multiple string and avoid error, it is advisable to create list of it
// We can now use it (example: ActionType.SEARCH_REPOSITORIES)
export enum ActionType {
    SEARCH_REPOSITORIES = 'search_repositories',
    SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
    SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}