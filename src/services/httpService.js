export const baseUrl = (path) => {
  return `${process.env.API_KEY}${path}`;
};
export default class HTTPService {
  static get(path) {
    console.log(`${baseUrl(path)}`);
    return fetch(`${baseUrl(path)}`)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
