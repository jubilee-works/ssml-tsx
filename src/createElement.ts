import { Element } from "./Element";

export const createElement = <P>(
  type: Element<P>["type"],
  props: Element<P>["props"],
  ...children: Element<P>["children"]
): Element<P> => new Element(type, props, children);
