export default function lists(state = [], action) {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      const { lists, ...boardWithoutList } = action.board;

      return lists.map((list) => {
        const { cards, ...listWithoutCards } = list;
        return listWithoutCards;
      });
    case 'CREATE_LIST_SUCCESS':
      const newList = action.list;

      return state.concat(newList);
    case 'UPDATE_LIST_SUCCESS':
      const updatedList = action.list;

      return state.map((list) => {
        if (list.id === updatedList.id) {
          return updatedList;
        } else {
          return list;
        }
      });
    default:
      return state;
  }
}
