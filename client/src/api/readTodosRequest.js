const API_URL = 'http://localhost:8080';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3MzUyNzEwMX0.ze0lHEo0IAk01Pzl20Inuj69UTGGvhPj9jf_VuQIzYo';

export default () => {
  return fetch(`${API_URL}/todos`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json'
    }
  })
    .then(res => res.json())
}