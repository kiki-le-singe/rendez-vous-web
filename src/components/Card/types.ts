export type flexDirectionValues = "row" | "column";

export type CardProps = React.PropsWithChildren<{
  flexDirection?: flexDirectionValues;
  className?: string;
}>;
