export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS":
      return action.lists;
    case "CREATE_LIST_SUCCESS":
      const newList = action.list;
      return state.concat(newList);
    default:
      return state;
  }
}
