import { Element } from "./Element";

export const createElement = <P>(
  type: Element<P>["type"],
  props: Element<P>["props"],
  ...children: Element<P>["children"]
) => new Element(type, props, children);
