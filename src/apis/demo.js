import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com';


export const getTodo = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`${URL}/todos/${id}`)
      .then((response) => {
        console.log(response);
        resolve(response)
      })
      .catch((error) => {
        console.log(error);
        reject(error)
      });
  })
}

export const createUser = () => {
  return new Promise((resolve, reject) => {
    axios.post('/user', {
      firstName: 'Fred',
      lastName: 'Flintstone',
    })
      .then((response) => {
        console.log(response);
        resolve(response)
      })
      .catch((error) => {
        console.log(error);
        reject(error)
      });
  })
}
