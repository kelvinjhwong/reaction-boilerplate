export default function boards(state = [], action) {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      const { lists, ...boardWithoutList } = action.board;

      if (state.length > 0) {
        const existingCards = state;

        return lists.reduce((acc, list) => {
          const { cards, ...listWithoutCards } = list;

          const newCards = cards.filter((card) => {
            return existingCards.every((existingCard) => {
              return existingCard.id !== card.id;
            });
          });

          return acc.concat(newCards);
        }, existingCards);
      } else {
        return lists.reduce((acc, list) => {
          const { cards, ...listWithoutCards } = list;

          return acc.concat(cards);
        }, []);
      }

      // if (state.length > 0) {
      //   const existingCard = state[0];
      //   return listCards.map((card) => {
      //     if (card.id === existingCard.id) {
      //       return existingCard;
      //     } else {
      //       return card;
      //     }
      //   });
      // } else {
      return listCards;
    // }
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
    case 'UPDATE_CARD_SUCCESS':
      return state.map((card) => {
        if (card.id === action.card.id) {
          return action.card;
        } else {
          return card;
        }
      });
    case 'CREATE_COMMENT_SUCCESS':
      return state.map((card) => {
        if (card.id === action.comment.card_id) {
          return {
            ...card,
            comments: [...card.comments, action.comment],
          };
        } else {
          return card;
        }
      });
    default:
      return state;
  }
}
