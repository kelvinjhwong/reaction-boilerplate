import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export const createCardRequest = () => ({
  type: types.CREATE_CARD_REQUEST,
});

export const createCard = (listId, card, callback) => {
  return (dispatch) => {
    dispatch(createCardRequest());
    apiClient.createCard(listId, card, (newCard) => {
      dispatch(createCardSuccess(newCard));

      if (callback) {
        callback(newCard);
      }
    });
  };
};

export const createCardSuccess = (card) => ({
  type: types.CREATE_CARD_SUCCESS,
  card,
});

export const fetchCard = (cardId, callback) => {
  return (dispatch) => {
    dispatch(fetchCardRequest());
    apiClient.fetchCard(cardId, (card) => {
      dispatch(fetchCardSuccess(card));

      if (callback) {
        callback(card);
      }
    });
  };
};

export const fetchCardRequest = () => ({
  type: types.FETCH_CARD_REQUEST,
});

export const fetchCardSuccess = (card) => ({
  type: types.FETCH_CARD_SUCCESS,
  card,
});
