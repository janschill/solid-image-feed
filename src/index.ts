import { NamedNode } from "rdflib";
import SolidFeed from "./components/solid-feed";
import SolidImage from "./components/solid-image";

const name = "Solid Image Feed";
customElements.define('solid-feed', SolidFeed);
customElements.define('solid-image', SolidImage);

function template(data) {
  return `
    <h1>${data.title}</h1>
    <template>
      <h2>Feed</h2>
    </template>
    <solid-feed></solid-feed>`;
}

const SolidImageFeed = {
  render: (): HTMLElement => {
    const $app = document.createElement("main");
    $app.innerHTML = template({ title: name, body: "This is our site body" })

    return $app;
  },
};

export default SolidImageFeed;
