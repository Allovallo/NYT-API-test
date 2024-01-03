import { fetchSearchedArticles } from './newsApi';

const searchFormRef = document.querySelector('.search');
const handleSubmit = event => {
  event.preventDefault();

  const { target: form } = event;
  const value = form.elements.search.value;
  fetchSearchedArticles(value).then(console.log);
  console.log(value);
};

searchFormRef.addEventListener('submit', handleSubmit);
