export default class Feed {
  name: string
  innerHTML: string

  constructor(name: string) {
    this.name = name;
    this.innerHTML = this.template()
  }

  template() {
    return `
      ${this.attachStyles()}
      <section class="feed">
        <p>
          My name is ${this.name}
        </p>
        <div class="feed_content"></div>
      </section>
    `;
  }

  render() {
    return this.innerHTML
  }

  attachStyles() {
    return `
      <style>
        .feed {
          padding: 20px;
          border: 1px solid red;
        }
      </style>
    `
  }

  async loadContent() {


  }
}
