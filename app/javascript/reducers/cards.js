export default function boards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      const { lists, ...boardWithoutList } = action.board;

      const listCards = lists.reduce((acc, list) => {
        const { cards, ...listWithoutCards } = list;
        return acc.concat(cards);
      }, []);
      
      return listCards;
    case "CREATE_CARD_SUCCESS":
      const newCard = action.card;
      return state.concat(newCard);
    default:
      return state;
  }
}
