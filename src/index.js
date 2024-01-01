import './sass/index.scss';
import {
  fetchPopularNews,
  fetchPopularNewsOnFacebook,
} from './scripts/newsApi';
import newsTemplate from './templates/news.hbs';

//title, url, abstarct, media[0].media-metadata[2]

const newsListTemplate = newsList => {
  return newsList.map(news => {
    const { title, url, abstarct, media } = news;

    return newsTemplate({
      title,
      url,
      abstarct,
      //   imageSrc: media[0]['media-metadata'][2],
    });
  });
};

fetchPopularNews().then(({ results }) => {
  const newsList = newsListTemplate(results);
  console.log(newsList);
});
