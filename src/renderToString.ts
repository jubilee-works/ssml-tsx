import { Element } from "./Element";

const ranges = [
  "\ud83c[\udf00-\udfff]", // U+1F300 to U+1F3FF
  "\ud83d[\udc00-\ude4f]", // U+1F400 to U+1F64F
  "\ud83d[\ude80-\udeff]" // U+1F680 to U+1F6FF
] as const;

const escape = (word: any) => {
  if (typeof word === "string") {
    return (
      word
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;")
        // strip emojis
        .replace(new RegExp(ranges.join("|"), "g"), "")
    );
  }
  if (typeof word === "number") {
    return word.toString();
  }
  if (typeof word === "boolean") {
    return word.toString();
  }

  throw new Error("received invalid type " + typeof word);
};

const toAttr = <P>(props: Element<P>["props"]) =>
  props
    ? " " +
      Object.entries(props)
        .map(([name, value]) => `${name}="${value}"`)
        .join(" ")
    : "";

const render = (element: any | any[]): string => {
  if (!element) return "";

  if (Array.isArray(element)) {
    return element.map(e => render(e)).join("");
  }

  if (element instanceof Element) {
    const children = render(element.children);
    if (typeof element.type === "function") {
      return render(element.type(element.props));
    }
    const attr = toAttr(element.props);
    return children
      ? `<${element.type}${attr}>${children}</${element.type}>`
      : `<${element.type}${attr}/>`;
  }

  return escape(element);
};

export const renderToString = (element: Element<any>): string =>
  render(element);
