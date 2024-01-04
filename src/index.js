import './sass/index.scss';
import { fetchPopularNews, fetchSearchedArticles } from './scripts/newsApi';
import NewsList from './scripts/newsList';

const newsList = new NewsList('.news-list');
const newsListAdapter = newsList => {
  return newsList.map(news => {
    const { title, url, abstract, media } = news;

    return {
      title,
      url,
      abstract,
      // imageSrc: media[0]['media-metadata'][2].url,
    };
  });
};

fetchPopularNews().then(({ results }) => {
  const newsData = newsListAdapter(results);
  newsList.render(newsData);
});
