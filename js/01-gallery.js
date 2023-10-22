import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join('');
}

const galleryMarkup = createGalleryMarkup(galleryItems);
const galleryList = document.querySelector('.gallery');
galleryList.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
