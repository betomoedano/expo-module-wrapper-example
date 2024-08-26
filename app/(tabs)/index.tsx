import {
  ExpoLinearChartView,
  ExpoRadialChartView,
} from "@/modules/expo-radial-chart/src/ExpoRadialChartView";
import { Platform, SafeAreaView, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* <ExpoLinearChartView
          style={{ flex: 1, margin: 16 }}
          data={[
            // {
            //   color: "#71d12e",
            //   values: [0.2, 0.5, 0.5],
            //   label: "Revenue",
            // },
            // {
            //   color: "#2e71d1",
            //   values: [0.5, 0.5, 0.2],
            //   label: "Cost",
            // },
            {
              color: "#d12e71",
              // bitcoin price hsitory
              values: [0.5, 0.2, 0.5, 0.2, 0.5, 0.2, 0.5, 0.2, 0.5],
              label: "Profit",
            },
          ]}
        /> */}
        <ExpoRadialChartView
          style={{ flex: 1, margin: 16 }}
          data={[
            {
              color: "#71d12e",
              percentage: 0.2,
            },
            {
              color: "#2e71d1",
              percentage: 0.5,
            },
            {
              color: "#d12e71",
              percentage: 0.5,
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
}
