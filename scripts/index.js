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

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
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
  console.log(inputImage.value);
  console.log(inputCaption.value);
  closeModal(newPostModal);
});
