import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";
import {
  ExpoRadialChartViewProps,
  ExpoLinearChartViewProps,
} from "./ExpoRadialChart.types";
import { Platform } from "react-native";

const RadialChartNativeView: React.ComponentType<ExpoRadialChartViewProps> =
  requireNativeViewManager("ExpoRadialChart");

const LinearChartNativeView: React.ComponentType<ExpoLinearChartViewProps> =
  requireNativeViewManager("ExpoLinearChart");

export function ExpoRadialChartView(props: ExpoRadialChartViewProps) {
  return <RadialChartNativeView {...props} />;
}

export function ExpoLinearChartView(props: ExpoLinearChartViewProps) {
  return Platform.select({
    ios: <LinearChartNativeView {...props} />,
    android: <></>,
  });
}
