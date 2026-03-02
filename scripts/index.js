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

profileEditButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  inputProfileName.value = profileName.textContent;
  inputProfileDescription.value = profileDescription.textContent;
});

editProfileExitButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

editProfileModal.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputProfileDescription.value;
  editProfileModal.classList.remove("modal_is-opened");
});

profilePostButton.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostExitButton.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

newPostModal.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(inputImage.value);
  console.log(inputCaption.value);
  newPostModal.classList.remove("modal_is-opened");
});
