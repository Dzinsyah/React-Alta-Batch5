const initialState = { listNews: [], isLoading: true, search: "" };

export default function newsReducer(stateNews = initialState, action) {
  switch (action.type) {
    case "REQUEST_LIST_NEWS_SUCCESS":
      return {
        ...stateNews,
        isLoading: false,
        listNews: action.payload,
      };
    case "ACTIVATE_LOADING":
      return {
        ...stateNews,
        isLoading: true,
      };
    default:
      return stateNews;
  }
}
