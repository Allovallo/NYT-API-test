import newsList from '../templates/newsList.hbs';

export default class NewsList {
  constructor(selector) {
    this.ref = document.querySelector(selector);
    this.items = [];
  }

  render(items) {
    this.items = items;
    this.ref.innerHTML = newsList(items);
  }
}
