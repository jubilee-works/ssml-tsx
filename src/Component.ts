export interface FunctionComponentPropsBase {
  children?: JSX.Element[];
}

export interface FunctionComponent<P = unknown> {
  (props: P & FunctionComponentPropsBase): JSX.Element | null;
}

export interface FC<P = unknown> extends FunctionComponent<P> {}
