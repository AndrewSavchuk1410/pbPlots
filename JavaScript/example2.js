var fs = require('fs');

eval(fs.readFileSync('pbPlots.js')+'');
eval(fs.readFileSync('supportLib.js')+'');

var series = GetDefaultScatterPlotSeriesSettings();
series.xs = [-2, -1, 0, 1, 2];
series.ys = [2, -1, -2, -1, 2];
series.linearInterpolation = true;
series.lineType = "dashed";
series.lineThickness = 2;
series.color = GetGray(0.3);

var settings = GetDefaultScatterPlotSettings();
settings.canvas = CreateImage(800, 600, GetWhite());
settings.autoBoundaries = true;
settings.autoPadding = true;
settings.title = "x^2 - 2";
settings.xLabel = "X axis";
settings.yLabel = "Y axis";
settings.scatterPlotSeries = [series];

DrawScatterPlotFromSettings(settings);

var pngdata = ConvertToPNG(settings.canvas);
WriteToFile(pngdata, "example2.png");
DeleteImage(settings.canvas);
