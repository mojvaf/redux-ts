interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface searchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface searchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface searchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

type Action =
  | searchRepositoriesAction
  | searchRepositoriesSuccessAction
  | searchRepositoriesErrorAction;

enum ActionType {
  SEARCH_REPOSITORIES = "search-repositories",
  SEARCH_REPOSITORIES_SUCCESS = "search-repositories-success",
  SEARCH_REPOSITORIES_ERROR = "search-repositories-error",
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
