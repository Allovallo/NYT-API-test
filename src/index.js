import './sass/index.scss';
import { fetchPopularNews, fetchSearchedArticles } from './scripts/newsApi';
import newsTemplate from './templates/news.hbs';

const newsListRef = document.querySelector('.news-list');

// title, url, abstract, media[0].media-metadata[2];

const newsListTemplate = newsList => {
  return newsList
    .map(news => {
      const { title, url, abstract, media } = news;

      return newsTemplate({
        title,
        url,
        abstract,
        // imageSrc: media[0]['media-metadata'][2].url,
      });
    })
    .join('');
};

fetchPopularNews().then(({ results }) => {
  const newsListView = newsListTemplate(results);
  newsListRef.innerHTML = newsListView;
  // console.log(newsListView);
});

// fetchSearchedArticles('Ukraine').then(console.log);
