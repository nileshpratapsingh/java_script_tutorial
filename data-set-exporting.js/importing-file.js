import { user, settings } from './data-set.js';

function showUser() {
  console.log(user.name); // Nilesh
}

function showSettings() {
  console.log(settings.theme); // dark
}

showUser();
showSettings();
