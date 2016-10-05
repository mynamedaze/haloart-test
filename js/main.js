'use strict';

var openCloseBtn = (document).querySelector('.main-nav__open-close');
var mainNavList = (document).querySelector('.main-nav__list');

var applyBtn = (document).querySelector('.form-apply-send__submit-apply');
var closePopup = (document).querySelector('.popup__confirm-button');
var popup = (document).querySelector('.popup');

var techBtnCall = (document).querySelector('.tech__btn-call');
var techForm = (document).querySelector('.tech__form-field');

openCloseBtn.classList.remove('main-nav__open-close--active');
mainNavList.classList.remove('main-nav__list--active');

openCloseBtn.addEventListener('click', function (evt) {
  if (openCloseBtn.classList.contains('main-nav__open-close--active')) {
    evt.preventDefault();
    openCloseBtn.classList.remove('main-nav__open-close--active');
    mainNavList.classList.remove('main-nav__list--active');
  } else {
    evt.preventDefault();
    openCloseBtn.classList.add('main-nav__open-close--active');
    mainNavList.classList.add('main-nav__list--active');
  }
});

applyBtn.addEventListener('click', function (evt) {
  if (popup.classList.contains('popup--active')) {
    return;
  } else {
    evt.preventDefault();
    popup.classList.add('popup--active');
  }
});
closePopup.addEventListener('click', function (evt) {
  if (popup.classList.contains('popup--active')) {
    popup.classList.remove('popup--active');
  } else {
    return;
  }
});

techBtnCall.addEventListener('click', function (evt) {
  if (techForm.classList.contains('tech__form-field--active')) {
    techForm.classList.remove('tech__form-field--active');
  } else {
    techForm.classList.add('tech__form-field--active');
  }
});
