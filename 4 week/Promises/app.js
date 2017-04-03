"use strict"


var randomButtonElement = document.getElementById('randomize');
var randomUserElement = document.getElementById('user');
var errorElement = document.getElementById('error');

console.log(randomButtonElement);
console.log(randomUserElement);
console.log(errorElement);

randomButtonElement.onclick = function () {
  makeGetRequest('https://api.github.com/users')
    .then(
      response => {
        var data = JSON.parse(response);
        return data;
      })
    .then (data => {
      var user = data[Math.floor(Math.random() * data.length)];
      loadImage(user.avatar_url, function() {
        hideError();
        drawUser(user);
      }, showError);
    });
};

function makeGetRequest (url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) return;
      if (xhr.status != 200) {
         var error = new Error('Ошибка' + this.status);
         error.code = this.statusText;
         reject(error);
      } else {
        resolve(this.response);
      }
    }
    xhr.send();
  });
}


function showError(err) {
  errorElement.textContent = err;
  errorElement.classList.remove('hidden');
  randomUserElement.classList.add('hidden');
}

function hideError() {
  errorElement.classList.add('hidden');
  randomUserElement.classList.remove('hidden');
}


function loadImage(imageUrl, successCallback, errorCallback) {
  var img = new Image();

  img.onload = function () {
    successCallback(img);
  };

  img.onerror = function () {
    errorCallback(new Error('Что-то пошло не так'));
  };
  img.src = imageUrl;
}

function drawUser(data) {
  var img = randomUserElement.querySelector('img');
  var link = randomUserElement.querySelector('a');
  img.src = data.avatar_url;
  img.alt = data.login;
  link.href = data.html_url;
  link.textContent = data.login;
}
