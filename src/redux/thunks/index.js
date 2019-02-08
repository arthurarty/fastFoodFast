const apiUrl = 'https://arty-fast.herokuapp.com/v1/';
const jwt = sessionStorage.getItem('access_token');
let header;

const fetchData = (dispatch, input, endPoint, actionCreator, auth) => {
  let data;
  if (auth) {
    header = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    };
  } else {
    header = { 'Content-Type': 'application/json' };
  }
  if (input.price !== undefined) {
    data = {
      food_name: input.food_name,
      desc: input.desc,
      price: Number(input.price),
    };
  } else {
    data = input;
  }
  return fetch(apiUrl + endPoint, {
    method: 'POST',
    mode: 'cors',
    headers: header,
    body: JSON.stringify({ ...data }),
  }).then(res => res.json())
    .then(response => dispatch(actionCreator(response)))
    .catch(err => console.log(err));
};

export function postDataThunk(input, endPoint, actionCreator, auth) {
  return (dispatch) => { fetchData(dispatch, input, endPoint, actionCreator, auth); };
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
