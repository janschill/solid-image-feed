import { NamedNode } from "rdflib";
import FeedElement from "./components/feed-element";
import ImageElement from "./components/image-element";

const SITE_NAME = "Solid Image Feed";
customElements.define('feed-element', FeedElement);
// customElements.define('image-element', ImageElement);

function template(data) {
  return `
    <h1>${data.title}</h1>
    <template>
      <h2>Feed</h2>
    </template>
    <feed-element></feed-element>`;
}

const SolidImageFeed = {
  render: (): HTMLElement => {
    const $app = document.createElement("main");
    $app.innerHTML = template({ title: SITE_NAME, body: "" })

    return $app;
  },
};

export default SolidImageFeed;
