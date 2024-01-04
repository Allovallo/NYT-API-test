import { fetchSearchedArticles } from './newsApi';
import newsList from '../templates/newsList.hbs';
import NewsList from './newsList';

const newsList = new NewsList('.news-list');
const searchFormRef = document.querySelector('.search');

const newsListAdapter = newsList => {
  newsList.map(news => {
    const { title, url, abstract, multimedia } = news;
    const baseImageSrc = 'https://static01.nyt.com/';
    return {
      title,
      url,
      abstract,
      imageSrc: `${baseImageSrc}${multimedia[0].url}`,
    };
  });
};

const searchArticles = query => {
  fetchSearchedArticles(value).then(result => {
    const items = result.response.docs;
    const newsData = newsListAdapter(items);
    newsList.render(newsData);
  });
};

const handleSubmit = event => {
  event.preventDefault();

  const { target: form } = event;
  const value = form.elements.search.value;
  searchArticles(value);
};

searchFormRef.addEventListener('submit', handleSubmit);

fetchSearchedArticles('Poroshenko').then(console.log);
