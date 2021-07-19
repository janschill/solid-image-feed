type HtmlString = string

class Figure {
  createdAt: string;
  imageUrl: string;
  figcaption: string;

  constructor(createdAt: string, imageUrl: string, figcaption: string) {
    this.createdAt = createdAt;
    this.imageUrl = imageUrl;
    this.figcaption = figcaption;
  }

  render(): HtmlString {
    return ""
  }
}
