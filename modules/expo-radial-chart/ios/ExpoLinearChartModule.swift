import ExpoModulesCore

public class ExpoLinearChartModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoLinearChart")

    View(ExpoLinearChartView.self) {
      Prop("data") { (view: ExpoLinearChartView, prop: [LineChartSeries]) in
        view.setChartData(data: prop)
      }
    }
  }
}
