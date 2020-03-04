export default function boards(state = [], action) {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      const { lists, ...boardWithoutList } = action.board;

      const listCards = lists.reduce((acc, list) => {
        const { cards, ...listWithoutCards } = list;
        return acc.concat(cards);
      }, []);

      return listCards;
    case 'CREATE_CARD_SUCCESS':
      const newCard = action.card;
      return state.concat(newCard);
    case 'FETCH_CARD_SUCCESS':
      if (state.length === 0) {
        return [action.card];
      } else {
        return state.map((card) => {
          if (card.id === action.card.id) {
            return action.card;
          } else {
            return card;
          }
        });
      }
    default:
      return state;
  }
}
