export type FunctionComponentPropsBase = {
  children?: JSX.Element[];
};

export type FunctionComponent<P = {}> = (
  props: P & FunctionComponentPropsBase
) => JSX.Element | null;

export type FC<P = {}> = FunctionComponent<P>;
