import { fetchSearchedArticles } from './newsApi';
import NewsList from './newsList';

const newsList = new NewsList('.news-list');
const searchFormRef = document.querySelector('.search');

const newsListAdapter = newsList => {
  return newsList.map(news => {
    const { title, url, abstract, multimedia } = news;
    const baseImageSrc = 'https://static01.nyt.com/';
    const imageSrc =
      multimedia.length > 0 ? `${baseImageSrc}${multimedia[0].url}` : '';

    return {
      title,
      url,
      abstract,
      imageSrc,
    };
  });
};

const searchArticles = query => {
  fetchSearchedArticles(query).then(result => {
    const items = result.response.docs;
    const newsData = newsListAdapter(items);
    // console.log(newsData);
    newsList.render(newsData);
  });
};

const handleSubmit = event => {
  event.preventDefault();

  const { target: form } = event;
  const value = form.elements.search.value;
  // console.log(value);
  searchArticles(value);
};

searchFormRef.addEventListener('submit', handleSubmit);

// fetchSearchedArticles('Poroshenko').then(console.log);
