const apiUrl = 'http://127.0.0.1:5000/v1/';
const jwt = localStorage.getItem('access_token');

const fetchData = (dispatch, data, endPoint, actionCreator) => {
  return fetch(apiUrl + endPoint, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data }),
  }).then(res => res.json())
    .then(response => dispatch(actionCreator(response)))
    .catch(err => console.log(err));
};

export function postDataThunk(data, endPoint, actionCreator) {
  return (dispatch) => { fetchData(dispatch, data, endPoint, actionCreator); };
}

export function getDataThunk(endPoint, actionCreator) {
  return (dispatch) => {
    return fetch(apiUrl + endPoint, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    }).then(res => res.json())
      .then(response => dispatch(actionCreator(response)))
      .catch(err => console.log(err));
  };
}

export default postDataThunk;
