import SolidModel from "./solid-model";

export default class SolidImage extends SolidModel {
  title: string
  url: URL

  constructor(title: string, url: URL) {
    super()
    this.title = title;
    this.url = url;
  }

  static async all() {
    const url1 = new URL("https://i.picsum.photos/id/352/200/300.jpg?hmac=JRE6d4eB1tvPUpBESG8XEM2_22EaXNe2luRrVkydr2E")
    const url2 = new URL("https://i.picsum.photos/id/1067/200/300.jpg?hmac=9UpH9GvB6swkUWpIG1N53lIk9vdO4YcIwlH59M8er18")
    return [
      new SolidImage("Image1", url1), new SolidImage("ImageB", url2)]
  }
}
