import SolidImage from "../models/solid-image";

interface Data {
  title: string,
  url: URL,
  alt: string
}

class ImageElement extends HTMLElement {
  constructor(image: SolidImage) {
    super();

    this.innerHTML = this.template({
      title: image.title,
      url: image.url,
      alt: image.title
    })

    this.addEventListener("click",
      () => { console.log("image-element clicked") });
  }

  template(data: Data) {
    return `
    <figure class="feed-figure">
      <img class="feed-figure__image" src="${data.url}" alt="${data.alt}">
      <figcaption class="feed-figure__figcaption">${data.title}</figcaption>
    </figure>
    `
  }
}

export default ImageElement;
