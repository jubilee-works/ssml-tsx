export type FunctionComponentPropsBase = {
  children?: JSX.Element[];
};

export type FunctionComponent<P = unknown> = (
  props: P & FunctionComponentPropsBase
) => JSX.Element | null;

export type FC<P = unknown> = FunctionComponent<P>;
