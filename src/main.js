'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const button = document.querySelector('.btn');

let search;

let page = 1;
let perPage = 15;
let totalPages;

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  search = e.target.elements.search.value;
  if (search === '') {
    return;
  }
  page = 1;
  gallery.innerHTML = '';
  showLoader();
  try {
    const data = await getSearchImg(search);
    renderImg(data.hits);
    totalPages = Math.ceil(data.totalHits / perPage);
    page += 1;
    loadMoreButtonShow();
    scroll();
  } catch (error) {
    console.error(error);
  } finally {
    hideLoader();
  }
  e.target.reset();
});

async function getSearchImg(search) {
  try {
    const searchParams = new URLSearchParams({
      key: '42245077-d2f8998b656235f8798291f32',
      q: `${search}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: `${page}`,
      per_page: `${perPage}`,
    });
    axios.defaults.baseURL = 'https://pixabay.com';
    const response = await axios.get(`/api/?${searchParams}`);
    return response.data;
  } catch (error) {
    return iziToast.error({
      title: 'Error',
      message: 'Error',
      position: 'topCenter',
    });
  } finally {
    hideLoader();
  }
}
function templateImg(images) {
  return images
    .map(
      item =>
        `<li class="gallery-item">
      <a class="gallery-link" href="${item.largeImageURL}">
        <img
          class="gallery-image"
          src="${item.webformatURL}"
          alt="${item.tags}"
          width="360"
        />
      </a>
      <ul class="thumb-block">
        <li class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${item.likes}</p>
        </li>
        <li class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${item.views}</p>
        </li>
        <li class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${item.comments}</p>
        </li>
        <li class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${item.downloads}</p>
        </li>
      </ul>
    </li>`
    )
    .join('');
}

function renderImg(images) {
  if (images.length === 0) {
    return iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again.',
      position: 'topCenter',
    });
  }
  const markup = templateImg(images);
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

button.addEventListener('click', async () => {
  if (page > totalPages) {
    button.style.display = 'none';
    return iziToast.error({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  }
  button.style.display = 'none';
  showLoader();
  try {
    const data = await getSearchImg(search);
    renderImg(data.hits);
    page += 1;
    loadMoreButtonShow();
  } catch (error) {
    return iziToast.error({
      title: 'Error',
      message: 'Error',
      position: 'topCenter',
    });
  }
});

function scroll() {
  if (page > 1) {
    const rect = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();
    window.scrollBy({
      top: rect.height * 2,
      left: 0,
      behavior: 'smooth',
    });
  }
}
function loadMoreButtonShow() {
  if (page > 1) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}
function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}
