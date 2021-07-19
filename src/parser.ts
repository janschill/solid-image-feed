import * as N3 from "n3"

const parser = new N3.Parser();
parser.parse(
  `PREFIX c: <http://example.org/cartoons#>
   c:Tom a c:Cat.
   c:Jerry a c:Mouse;
           c:smarterThan c:Tom.`,
  (error, quad, prefixes) => {
    if (quad)
      console.log(quad);
    else
      console.log("# That's all, folks!", prefixes);
  });
