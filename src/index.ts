import { NamedNode } from "rdflib";
import SolidImage from "./components/image";

const name = "Solid Image Feed";
customElements.define('solid-image', SolidImage);

function template(data) {
  return `
    <h1>${data.title}</h1>
    <p>${data.body}</p>
    <solid-image>Solid Image click me</solid-image>`;
}

const SolidImageFeed = {
  render: (): HTMLElement => {
    const $app = document.createElement("div");
    $app.innerHTML = template({ title: name, body: "This is our site body" })

    return $app;
  },
};
export default SolidImageFeed;
