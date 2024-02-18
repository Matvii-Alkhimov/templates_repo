
import countries from "./countries.json";
import galleryItemTpl from "..//templates/gallery-item.handlebars";

const elements = {
    listEl: document.querySelector(".js-gallery"),
}

elements.listEl.innerHTML = galleryItemTpl(countries);