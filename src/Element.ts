import { renderToString } from "./renderToString";
import { FunctionComponent } from "./Component";

export type Children = Element<any> | string | number | boolean;

export class Element<P> {
  type: string | FunctionComponent<P>;
  props: P | null;
  children: Children[];

  constructor(
    type: Element<P>["type"],
    props: Element<P>["props"],
    children: Element<P>["children"]
  ) {
    this.type = type;
    this.props = props;
    this.children = children;
  }

  toString(): string {
    return renderToString(this);
  }
}
