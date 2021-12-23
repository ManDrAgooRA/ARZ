export const baseUrl = (path) => {
  return `${process.env.API_KEY}${path}`;
};

export class HTTPService {
  static get(path) {
    return fetch(`${baseUrl(path)}`, {
      headers: {
        'Content-Type': 'aplication/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw Error(err);
      });
  }

  static post(path, requestBody) {
    return fetch(`${baseUrl(path)}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      method: 'POST',
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw Error(err);
      });
  }
}
