export default function boards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS":
      return action.cards;
    case "CREATE_CARD_SUCCESS":
      const newCard = action.card;
      return state.concat(newCard);
    default:
      return state;
  }
}
