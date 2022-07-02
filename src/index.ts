import { createElement } from "./createElement";
import { Element } from "./Element";
import { renderToString } from "./renderToString";

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
/* eslint-disable functional/immutable-data */
ssml.renderToString = renderToString;
ssml.createElement = createElement;
/* eslint-enable functional/immutable-data */

export default ssml;
