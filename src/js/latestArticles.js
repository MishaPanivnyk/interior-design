//  // Масив з даними про статті
//  import { articlesItems } from '../latestArticlesItems';

//  // Функція для створення карточки
//  function createCard(article) {
//    const cardElement = document.createElement('div');
//    cardElement.classList.add('card');

//    const imgElement = document.createElement('img');
//    imgElement.src = article.img;
//    imgElement.classList.add('card-img');
//    imgElement.alt = article.title;
//    cardElement.appendChild(imgElement);

//    const titleElement = document.createElement('h3');
//    titleElement.textContent = article.title;
//    cardElement.appendChild(titleElement);

//    const dateElement = document.createElement('p');
//    dateElement.textContent = article.date;
//    cardElement.appendChild(dateElement);

//    const authorElement = document.createElement('p');
//    authorElement.textContent = `By ${article.author}`;
//    cardElement.appendChild(authorElement);

//    const commentsElement = document.createElement('p');
//    commentsElement.textContent = article.comments;
//    cardElement.appendChild(commentsElement);

//    return cardElement;
//  }

//  // Функція для створення всіх карточок і додавання їх у контейнер
//  function createAllCards() {
//    const cardsContainer = document.getElementById('latestArticles-container');

//    articlesItems.forEach((article) => {
//      const cardElement = createCard(article);
//      cardsContainer.appendChild(cardElement);
//    });
//  }

//  // Виклик функції для створення всіх карточок після завантаження сторінки
//  createAllCards();
import { articlesItems } from '../latestArticlesItems';

const cardsContainer = document.querySelector('.latestArticles-container'); 

const cardsHtml = articlesItems.map(item => {
  return `
    <div class="card">
      <img class="card-image" src="${item.img}" alt="${item.title}">
      <h2 class="card-title">${item.title}</h2>
      <p class="card-date">${item.date}</p>
      <p class="card-author">${item.author}</p>
      <p class="card-comments">${item.comments}</p>
    </div>
  `;
});

cardsContainer.innerHTML = cardsHtml.join('');
