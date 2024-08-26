import ExpoModulesCore
import DGCharts

class LineChartSeries: Record {
  @Field
  var color: UIColor = .white
  
  @Field
  var values: [Double] = []
  
  @Field
  var label: String = ""
  
  required init() {}
}

class ExpoLinearChartView: ExpoView {
  let chartView = LineChartView()

  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    clipsToBounds = true
    addSubview(chartView)
    
    // disable grid
    chartView.xAxis.drawGridLinesEnabled = false
    chartView.leftAxis.drawGridLinesEnabled = false
    chartView.rightAxis.drawGridLinesEnabled = false
    
    // disable axis annotations
    chartView.xAxis.drawAxisLineEnabled = false
    chartView.leftAxis.drawLabelsEnabled = false
    chartView.rightAxis.drawLabelsEnabled = false
    
    // disable legend
    chartView.legend.enabled = false
    
    // diable zoom
    chartView.pinchZoomEnabled = false
    chartView.doubleTapToZoomEnabled = false
    
    // remove artifacts around chart area
    chartView.xAxis.enabled = false
    chartView.leftAxis.enabled = false
    chartView.rightAxis.enabled = false
    chartView.drawBordersEnabled = false
    chartView.minOffset = .zero
    
    chartView.xAxis.labelPosition = .bottom
  }

  override func layoutSubviews() {
    chartView.frame = bounds
  }

  func setChartData(data: [LineChartSeries]) {
    var dataSets: [LineChartDataSet] = []
    
    for series in data {
      let entries = series.values.enumerated().map { (index, value) in
        ChartDataEntry(x: Double(index), y: value)
      }
      
      let dataSet = LineChartDataSet(entries: entries, label: series.label)
      dataSet.colors = [series.color]
      dataSet.circleColors = [series.color]
      dataSet.circleHoleColor = series.color
      
      // chart main settings
      dataSet.lineWidth = 3
      dataSet.mode = .cubicBezier // curve smoothing
      dataSet.drawValuesEnabled = false // disble values
      dataSet.drawCirclesEnabled = false // disable circles
      dataSet.drawFilledEnabled = true // gradient setting
      
      // settings for picking values on graph
      dataSet.drawHorizontalHighlightIndicatorEnabled = false // leave only vertical line
      dataSet.highlightLineWidth = 2 // vertical line width
      dataSet.lineWidth = 2
      dataSet.circleRadius = 4
      dataSet.drawCircleHoleEnabled = true
      dataSet.mode = .cubicBezier
      dataSet.cubicIntensity = 0.2
      
      dataSets.append(dataSet)
    }
    
    let chartData = LineChartData(dataSets: dataSets)
    chartView.data = chartData
  }
}
