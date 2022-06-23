import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import system from '../../dominio/system.mjs';
import user from '../../dominio/user.mjs';
import collection from '../../dominio/collection.mjs';
import nft from '../../dominio/nft.mjs';


const textFieldTitle = new MDCTextField(document.getElementById('title'));
const textFieldYear = new MDCTextField(document.getElementById('year'));
const selectGenre = new MDCSelect(document.querySelector('.mdc-select'));

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const botonInicio= new MDCRipple(document.getElementById('home'));
botonInicio.listen('click', () => {
  document.body.style.backgroundImage = 'url("../styles/background1.png")';
  document.querySelectorAll(".content").forEach(element => {
    element.classList.add("sample-content--hidden");
  }
  );
});


const botonMejora= new MDCRipple(document.getElementById('upgradeButton'));
botonMejora.listen('click', () => {
  document.body.style.backgroundImage = 'url("../styles/background2.png")';
  document.querySelectorAll(".content").forEach((element, index) => {
    if (index === 1) {
      element.classList.remove("sample-content--hidden");
    } else {
      element.classList.add("sample-content--hidden");
    }
  });
});

const botonCuenta = new MDCRipple(document.getElementById('accountButton'));
botonCuenta.listen('click', () => {
  document.body.style.backgroundImage = 'url("../styles/background2.png")';
  document.querySelectorAll(".content").forEach((element, index) => {
    if (index === 0) {
      element.classList.remove("sample-content--hidden");
    } else {
      element.classList.add("sample-content--hidden");
    }
  });
}
);

const addButton = new MDCRipple(document.getElementById('addButton'));
addButton.listen('click', () => {
  let title = textFieldTitle.value;
  let year = textFieldYear.value;
  let genre = selectGenre.value;
  try {
    let newPelicula = new Pelicula(title, genre, year);
    listaPeliculas.agregar(newPelicula);
  } catch (error) {
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = error.message;
    snackbar.open();
  } finally {
    let peliculas = listaPeliculas.getPeliculas();
    console.log(peliculas);
  }
})