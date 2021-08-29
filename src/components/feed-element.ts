import SolidImage from "../models/solid-image";
import ImageElement from "./image-element";

export default class SolidFeed extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click",
      () => { console.log("SolidFeed clicked") });
  }

  // Called when element connected to page
  async connectedCallback() {
    const template = document.querySelector("template");
    const clone = document.importNode(template.content, true);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(clone);

    // fetch here the images
    const images = await SolidImage.all();
    images.forEach(image => {
      const solidImage = new ImageElement(image);
      this.shadowRoot.appendChild(solidImage);
    })
  }

  attachStyles() {
    this.style.padding = "20px";
  }
}
