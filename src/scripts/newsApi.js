const key = 'nPt8A5GxBmIFNZ0hpZq0Ks9ccQCfzk8G';
const baseUrl = 'https://api.nytimes.com/svc/mostpopular/v2';

export const fetchPopularNews = () => {
  return fetch(`${baseUrl}/emailed/7.json?api-key=${key}`).then(res =>
    res.json()
  );
};

export const fetchPopularNewsOnFacebook = () => {
  return fetch(`${baseUrl}/shared/1/facebook.json?api-key=${key}`).then(res =>
    res.json()
  );
};

export default { fetchPopularNews, fetchPopularNewsOnFacebook };
