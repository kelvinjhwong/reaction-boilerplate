import axios from 'axios';
import * as routes from '../constants/ApiRoutes';

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error('Error: ', errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

const apiClient = {
  getBoards: function(callback) {
    return axios
      .get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  getBoard: function(id, callback) {
    return axios
      .get(`${routes.BOARDS_INDEX_URL}/${id}.json`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  createBoard: function(board, callback) {
    return axios
      .post(routes.CREATE_BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  createList: function(list, callback) {
    return axios
      .post(routes.CREATE_LIST_URL, list)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  updateList: function(listId, list, callback) {
    return axios
      .put(routes.UPDATE_LIST_URL + `/${listId}`, list)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  createCard: function(listId, card, callback) {
    return axios
      .post(routes.CREATE_CARD_URL, { list_id: listId, card })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  fetchCard: function(cardId, callback) {
    return axios
      .get(`${routes.CARDS_INDEX_URL}/${cardId}.json`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  updateCard: function(cardId, attrs, callback) {
    return axios
      .put(`${routes.UPDATE_CARD_URL}/${cardId}`, attrs)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },

  createComment: (cardId, attrs, callback) => {
    return axios
      .post(`${routes.CREATE_COMMENT_URL}`, attrs)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
};

export default apiClient;
