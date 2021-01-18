'use strict';

document.querySelector('.item__zoom--1').onmousemove = function(event) {
  zoom(event);
};

document.querySelector('.item__zoom--2').onmousemove = function(event) {
  zoom(event);
};

document.querySelector('.item__zoom--3').onmousemove = function(event) {
  zoom(event);
};

function zoom(e) {
  const zoomer = e.currentTarget;
  let offsetX;
  let offsetY;

  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX;

  const x = offsetX / zoomer.offsetWidth * 100;
  const y = offsetY / zoomer.offsetHeight * 100;

  zoomer.style.backgroundPosition = x + '% ' + y + '%';
};

// Dropbox
const selectSingle = document.querySelector('.select');
const selectSingleAll = document.querySelectorAll('.select');
const selectSingleTitle = selectSingle.querySelector('.select__title');
const selectSingleLabels = selectSingle.querySelectorAll('.select__label');

// Toggle menu
for (let i = 0; i < selectSingleAll.length; i++) {
  selectSingleAll[i].addEventListener('click', (e) => {
    if (e.currentTarget.getAttribute('data-state') === 'active') {
      e.currentTarget.setAttribute('data-state', '');
    } else {
      e.currentTarget.setAttribute('data-state', 'active');
    }
  });
};

// Close when click to option
for (let i = 0; i < selectSingleLabels.length; i++) {
  selectSingleLabels[i].addEventListener('click', (e) => {
    selectSingleTitle.textContent = e.target.textContent;
    e.currentTarget.setAttribute('data-state', '');
  });
};

document.addEventListener('click', function(e) {
  const input = e.target.parentElement.querySelector('.item__count');

  if (
    e.target.classList.contains('item__increase')
    && input.value >= 1
  ) {
    ++input.value;

    e.target.closest('.item')
      .querySelector('.item__price').innerHTML = `${input.value * 200} грн`;
  } else if (
    e.target.classList.contains('item__decrease')
    && input.value !== '1'
  ) {
    --input.value;

    e.target.closest('.item')
      .querySelector('.item__price').innerHTML = `${input.value * 200} грн`;
  }
});

document.addEventListener('click', function(e) {
  const container = e.target;

  container.classList.toggle('checked-icon');
});
