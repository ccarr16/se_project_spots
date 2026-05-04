const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Golden Gate",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
];

const profileEditButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileExitButton = document.querySelector(".modal__header-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const inputProfileName = editProfileModal.querySelector("#input-profile-name");
const inputProfileDescription = editProfileModal.querySelector(
  "#input-profile-description",
);

const profilePostButton = document.querySelector(".profile__post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostExitButton = newPostModal.querySelector(".modal__header-button");
const inputImage = newPostModal.querySelector("#input-image");
const inputCaption = newPostModal.querySelector("#input-caption");

const cardsContainer = document.querySelector(".cards__content");
const cardTemplate = document.querySelector("#card-template");

const previewImageModal = document.querySelector("#preview-image-modal");
const previewImage = previewImageModal.querySelector(".modal__image");
const previewImageCaption = previewImageModal.querySelector(
  ".modal__image-caption",
);
const previewImageCloseButton = previewImageModal.querySelector(
  ".modal__close-button",
);

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}
function getCardElement(data) {
  let cardElement = cardTemplate.content.cloneNode(true);
  let cardTitle = cardElement.querySelector(".card__caption");
  let cardImage = cardElement.querySelector(".card__image");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  cardImage.addEventListener("click", function () {
    previewImageCaption.textContent = data.name;
    previewImage.src = data.link;
    previewImage.alt = data.name;
    openModal(previewImageModal);
  });

  let likeButton = cardElement.querySelector(".card__heart-button");
  likeButton.addEventListener("click", function (event) {
    likeButton.classList.toggle("card__heart-button_active");
  });
  let deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function (event) {
    deleteButton.closest(".card").remove();
  });
  return cardElement;
}

profileEditButton.addEventListener("click", function () {
  openModal(editProfileModal);
  inputProfileName.value = profileName.textContent;
  inputProfileDescription.value = profileDescription.textContent;
});

editProfileExitButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

editProfileModal.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputProfileDescription.value;
  closeModal(editProfileModal);
});

profilePostButton.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostExitButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

newPostModal.addEventListener("submit", function (event) {
  event.preventDefault();
  let cardInfo = {};
  cardInfo["link"] = inputImage.value;
  cardInfo["name"] = inputCaption.value;
  closeModal(newPostModal);
  let card = getCardElement(cardInfo);
  cardsContainer.prepend(card);
});

previewImageCloseButton.addEventListener("click", function () {
  closeModal(previewImageModal);
});

initialCards.forEach(function (item) {
  let card = getCardElement(item);
  cardsContainer.prepend(card);
});
