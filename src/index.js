import './sass/index.scss';
import {
  fetchPopularNews,
  fetchPopularNewsOnFacebook,
} from './scripts/newsApi';

fetchPopularNews().then(res => console.log(res));
