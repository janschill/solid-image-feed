import { NamedNode } from "rdflib";

const name = "Solid Image Feed";

function template(data) {
  return `
    <h1>${data.title}</h1>
    <p>${data.body}</p>`;
}

const SolidImageFeed = {
  render: (): HTMLElement => {
    const $app = document.createElement("div");
    $app.innerHTML = template({ title: name, body: "This is our site body" })

    return $app;
  },
};
export default SolidImageFeed;
