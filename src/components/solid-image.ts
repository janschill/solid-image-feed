export default class SolidImage extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click',
      () => {
        this.style.color === 'red'
          ? this.style.color = 'blue' :
          this.style.color = 'red';
      });
  }
  connectedCallback() {
    this.style.cursor = "pointer";
    /*called when the element is
      connected to the page
    */
    this.style.color = 'blue';
  }
}

