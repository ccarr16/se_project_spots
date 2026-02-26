const profileEditButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileExitButton = document.querySelector(".modal__header-button");

const profilePostButton = document.querySelector(".profile__post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostExitButton = newPostModal.querySelector(".modal__header-button");

profileEditButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileExitButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

profilePostButton.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostExitButton.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
