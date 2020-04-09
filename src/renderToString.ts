import { Element, Children } from "./Element";

const ranges = [
  "\ud83c[\udf00-\udfff]", // U+1F300 to U+1F3FF
  "\ud83d[\udc00-\ude4f]", // U+1F400 to U+1F64F
  "\ud83d[\ude80-\udeff]", // U+1F680 to U+1F6FF
] as const;

const escape = (word: string | number | boolean): string => {
  if (typeof word === "number") return word.toString();
  if (typeof word === "boolean") return word.toString();

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
};

const toAttr = <P>(props: Element<P>["props"]): string =>
  props
    ? " " +
      Object.entries(props)
        .map(([name, value]) => `${name}="${value}"`)
        .join(" ")
    : "";
const convertElementType = (type: string): string => {
  if (/^amazon/.test(type)) {
    return type.split('-').join(':')
  }
  return type
}

const render = (element: Children | Children[] | null): string => {
  if (!element) return "";

  if (Array.isArray(element)) {
    return element.map((e) => render(e)).join("");
  }

  if (element instanceof Element) {
    const children = render(element.children);
    if (typeof element.type === "function") {
      return render(element.type(element.props));
    }
    const attr = toAttr(element.props);
    const type = convertElementType(element.type)
    return children
      ? `<${type}${attr}>${children}</${type}>`
      : `<${type}${attr}/>`;
  }

  return escape(element);
};

export const renderToString = (element: Element<any>): string =>
  render(element);
