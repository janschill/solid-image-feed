import SolidImage from "./solid-image";

export default class SolidFeed extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click",
      () => { console.log("SolidFeed clicked") });
  }

  // Called when element connected to page
  connectedCallback() {
    const template = document.querySelector("template");
    const clone = document.importNode(template.content, true);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(clone);

    const solidImage = new SolidImage();
    solidImage.innerHTML = `<h3>First image</h3>`
    this.shadowRoot.appendChild(solidImage);
  }

  attachStyles() {
    this.style.padding = "20px";
  }
}

