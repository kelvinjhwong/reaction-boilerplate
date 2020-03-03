import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function fetchBoardsRequest() {
  return { type: types.FETCH_BOARDS_REQUEST };
}

export function fetchBoardsSuccess(boards) {
  return { type: types.FETCH_BOARDS_SUCCESS, boards };
}

export function fetchBoardRequest() {
  return { type: types.FETCH_BOARD_REQUEST };
}

export function fetchBoardSuccess(board) {
  return { type: types.FETCH_BOARD_SUCCESS, board };
}

export function createBoardRequest() {
  return { type: types.CREATE_BOARD_REQUEST };
}

export function createBoardSuccess(board) {
  return { type: types.CREATE_BOARD_SUCCESS, board: board };
}

export function fetchBoards() {
  return function(dispatch) {
    dispatch(fetchBoardsRequest());
    apiClient.getBoards((boards) => dispatch(fetchBoardsSuccess(boards)));
  };
}

export function fetchBoard(id) {
  return function(dispatch) {
    dispatch(fetchBoardRequest());
    apiClient.getBoard(id, (board) => dispatch(fetchBoardSuccess(board)));
  };
}

export function createBoard(board, callback) {
  return function(dispatch) {
    dispatch(createBoardRequest());
    apiClient.createBoard(board, (newBoard) => {
      dispatch(createBoardSuccess(newBoard));

      if (callback) {
        callback(newBoard);
      }
    });
  };
}

export const createListRequest = () => ({
  type: types.CREATE_LIST_REQUEST,
});

export const createListSuccess = (list) => ({
  type: types.CREATE_LIST_SUCCESS,
  list,
});

export const createList = (list, callback) => {
  return (dispatch) => {
    dispatch(createListRequest());
    apiClient.createList(list, (newList) => {
      dispatch(createListSuccess(newList));

      if (callback) {
        callback(newList);
      }
    });
  };
};

export const updateListRequest = () => ({
  type: types.UPDATE_LIST_REQUEST,
});

export const updateListSuccess = (list) => ({
  type: types.UPDATE_LIST_SUCCESS,
  list,
});

export const updateList = (listId, list, callback) => {
  return (dispatch) => {
    dispatch(updateListRequest());
    apiClient.updateList(listId, list, (updatedList) => {
      dispatch(updateListSuccess(updatedList));

      if (callback) {
        callback(updatedList);
      }
    });
  };
};

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
}

export const createCardSuccess = (card) => ({
  type: types.CREATE_CARD_SUCCESS,
  card,
});
