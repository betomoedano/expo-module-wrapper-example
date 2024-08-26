import { ViewStyle } from "react-native/types";

export type ChangeEventPayload = {
  value: string;
};

type Series = {
  color: string;
  percentage: number;
};

type LineChartSeries = {
  color: string;
  values: number[];
  label: string;
};

export type ExpoRadialChartViewProps = {
  style?: ViewStyle;
  data: Series[];
};

export type ExpoLinearChartViewProps = {
  style?: ViewStyle;
  data: LineChartSeries[];
};
