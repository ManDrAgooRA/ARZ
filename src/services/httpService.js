import axios from 'axios';

export const baseUrl = (path) => {
  return `${process.env.API_KEY}${path}`;
};

export default class HTTPService {
  static get(path) {
    return axios({
      method: 'get',
      url: baseUrl(path),
      withCredentials: true,
    })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
