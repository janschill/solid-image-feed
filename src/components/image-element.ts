import * as ShadyCSS from '@webcomponents/shadycss';

import SolidImage from "../models/solid-image";

interface Data {
  title: string,
  url: URL,
  alt: string
}

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      padding: 10px;
    }

    :host .slot-container {
      // border: 1px solid blue;
    }

    :host div slot figure {
      border: 1px solid green;
    }
  </style>
  <div class="slot-container">
    <slot></slot>
  </div>
`;

ShadyCSS.prepareTemplate(template, "image-element");

class ImageElement extends HTMLElement {
  constructor(image: SolidImage) {
    super();

    this.attachShadow({ mode: 'open' });

    this.innerHTML = this.template({
      title: image.title,
      url: image.url,
      alt: image.title
    })

    this.addEventListener("click",
      () => { console.log("image-element clicked") });
  }

  connectedCallback() {
    ShadyCSS.styleElement(this);
    this.shadowRoot.appendChild(
      document.importNode(template.content, true)
    );
  }

  template(data: Data) {
    return `
    <figure>
      <img src="${data.url}" alt="${data.alt}">
      <figcaption>${data.title}</figcaption>
    </figure>
    `
  }
}

window.customElements.define('image-element', ImageElement);

export default ImageElement;
