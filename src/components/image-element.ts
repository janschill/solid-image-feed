import SolidImage from "../models/solid-image";

interface Data {
  title: string,
  url: URL,
  alt: string
}

export default class ImageElement extends HTMLElement {
  constructor(image: SolidImage) {
    super();

    this.innerHTML = this.template({
      title: image.title,
      url: image.url,
      alt: image.title
    })

    this.addEventListener('click',
      () => {
        this.style.color === 'red'
          ? this.style.color = 'blue' :
          this.style.color = 'red';
      });
  }

  connectedCallback() {
    this.style.cursor = "pointer";
    this.style.color = 'blue';
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
