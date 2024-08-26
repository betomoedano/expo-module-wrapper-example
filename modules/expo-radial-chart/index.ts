import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to ExpoRadialChart.web.ts
// and on native platforms to ExpoRadialChart.ts
import ExpoRadialChartModule from "./src/ExpoRadialChartModule";
import {
  ChangeEventPayload,
  ExpoRadialChartViewProps,
  ExpoLinearChartViewProps,
} from "./src/ExpoRadialChart.types";
import {
  ExpoRadialChartView,
  ExpoLinearChartView,
} from "./src/ExpoRadialChartView";

// Get the native constant value.
export const PI = ExpoRadialChartModule.PI;

export function hello(): string {
  return ExpoRadialChartModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoRadialChartModule.setValueAsync(value);
}

const emitter = new EventEmitter(
  ExpoRadialChartModule ?? NativeModulesProxy.ExpoRadialChart
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export {
  ExpoRadialChartView,
  ExpoLinearChartView,
  ExpoLinearChartViewProps,
  ExpoRadialChartViewProps,
  ChangeEventPayload,
};
