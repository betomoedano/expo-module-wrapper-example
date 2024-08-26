package expo.modules.radialchart

import android.content.Context
import android.graphics.Color
import androidx.annotation.ColorInt
import com.github.mikephil.charting.charts.PieChart
import com.github.mikephil.charting.data.PieData
import com.github.mikephil.charting.data.PieDataSet
import com.github.mikephil.charting.data.PieEntry
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.records.Field
import expo.modules.kotlin.records.Record
import expo.modules.kotlin.views.ExpoView

class Series: Record {
    @Field
    val color: String = "#ff0000"

    @Field
    val percentage: Float = 0.0f
}

class ExpoRadialChartView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
  internal val chartView = PieChart(context).also {
    it.layoutParams = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT)
    addView(it)
  }

  fun setChartData(data: ArrayList<Series>) {
    val entries: ArrayList<PieEntry> = ArrayList()
    val colors: ArrayList<Int> = ArrayList()
    for (series in data) {
      entries.add(PieEntry(series.percentage))
      colors.add(Color.parseColor(series.color))
    }
    val dataSet = PieDataSet(entries, "DataSet");
    dataSet.colors = colors;
    val pieData = PieData(dataSet);
    chartView.data = pieData;
    chartView.invalidate();
  }
}