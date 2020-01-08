import { renderToString } from "./renderToString";
import { createElement } from "./createElement";
import { Element } from "./Element";

export * from "./renderToString";
export * from "./createElement";
export * from "./Component";
export * from "./Element";
export * from "./jsx";

const ssml = <P>(
  type: Element<P>["type"],
  props: Element<P>["props"],
  ...children: Element<P>["children"]
): Element<P> => createElement<P>(type, props, ...children);
ssml.renderToString = renderToString;
ssml.createElement = createElement;

export default ssml;
