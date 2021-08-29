import { NamedNode } from "rdflib";
import FeedElement from "./components/feed-element";
import ImageElement from "./components/image-element";
import Feed from "./components/feed";

const SITE_NAME = "Solid Image Feed";
// customElements.define('feed-element', FeedElement);
// customElements.define('image-element', ImageElement);

function template(data) {
  return `
    <h1>${data.title}</h1>
    ${data.body}
  `;
}

const SolidImageFeed = {
  render: (): HTMLElement => {
    const $app = document.createElement("main");
    $app.innerHTML = template({
      title: SITE_NAME, body: new Feed("Jan").render()
    })

    return $app;
  },
};

export default SolidImageFeed;
