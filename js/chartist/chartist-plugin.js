/* ======================================================================
Simple Pie Chart
====================================================================== */
var data = {
  labels: ['Employed: 36.7%', 'Self Employed: 26.5%', 'Further Studies: 16.3%', 'Seeking Employment: 6.1%', 'Not Available: 6.1%', 'Incomplete Data: 8.2%'],
  series: [36.7, 26.5, 16.3, 6.1, 6.1, 8.2]
};

var data1 = {
  labels: ['Employed: 42.6%', 'Self Employed: 13.6%', 'Further Studies: 13%', 'Seeking Employment: 26.6%', 'Not Available: 2.4%', 'Incomplete Data: 1.8%'],
  series: [42.6, 13.6, 13, 26.6, 2.4, 1.8]
};

var options = {
  labelInterpolationFnc: function(value) {
    return value[0]
  }
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 110,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 110,
    chartPadding: 20
  }]
];

new Chartist.Pie('#chartist-bsai', data, options, responsiveOptions);
new Chartist.Pie('#chartist-bsse', data1, options, responsiveOptions);

/* ======================================================================
Simple Line Chart
====================================================================== */
new Chartist.Line('#chartist-line', {
  labels: ['BSAI', 'BSDS', 'BSSE'],
  series: [
    [51, 50, 97],
    [19, 18, 34]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 40
  }

});

/* ======================================================================
Line Scatter Diagram with Responsive Settings
====================================================================== */
var times = function(n) {
  return Array.apply(null, new Array(n));
};

var data = times(52).map(Math.random).reduce(function(data, rnd, index) {
  data.labels.push(index + 1);
  data.series.forEach(function(series) {
    series.push(Math.random() * 100)
  });

  return data;
}, {
  labels: [],
  series: times(4).map(function() { return new Array() })
});

var options = {
  showLine: false,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 13 === 0 ? 'W' + value : null;
    }
  }
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 4 === 0 ? 'W' + value : null;
      }
    }
  }]
];

new Chartist.Line('#chartist-line-scatter', data, options, responsiveOptions);


/* ======================================================================
Line Chart with Area
====================================================================== */
new Chartist.Line('#chartist-line-area', {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [5, 9, 7, 8, 5, 3, 5, 4]
  ]
}, {
  low: 0,
  showArea: true
});

/* ======================================================================
Bi-polar Line Chart with Area Only
====================================================================== */
new Chartist.Line('#chartist-line-bipolar', {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [1, 2, 3, 1, -2, 0, 1, 0],
    [-2, -1, -2, -1, -2.5, -1, -2, -1],
    [0, 0, 0, 1, 2, 2.5, 2, 1],
    [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
  ]
}, {
  high: 3,
  low: -3,
  showArea: true,
  showLine: false,
  showPoint: false,
  fullWidth: true,
  axisX: {
    showLabel: false,
    showGrid: false
  }
});
/* ======================================================================
Overlapping Bars
====================================================================== */
var data = {
  labels: ['Poverty', 'Health', 'Innovation', 'Sustain', '0 Hunger', 'Education', 'Economic Growth', 'Inequality', 'Justice'],
  series: [
    [1, 16, 29, 5, 5, 3, 15, 1, 4],
  ]
};

var internship = {
  labels: ['Poverty', 'Health', 'Innovation', 'Sustain', '0 Hunger', 'Education', 'Economic Growth', 'Inequality', 'Justice'],
  series: [
    [1, 16, 29, 5, 5, 3, 15, 1, 4],
    [1, 16, 29, 5, 5, 3, 15, 1, 4],
    [1, 16, 29, 5, 5, 3, 15, 1, 4]
  ]
};

var options = {
  seriesBarDistance: 10
};

var responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 10,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

new Chartist.Bar('#chartist-bar-overlap', data, options, responsiveOptions);
new Chartist.Bar('#chartist-bar-internship', data, options, responsiveOptions);

/* ======================================================================
Horizontal Bar
====================================================================== */
new Chartist.Bar('#chartist-horizontal-bar', {
  labels: ['A', 'A-', 'B+', 'B', 'B-', 'F', 'Dropped'],
  series: [
    [70, 48, 18, 3, 5, 7, 12]
  ]
}, {
  seriesBarDistance: 5,
  reverseData: true,
  horizontalBars: true,
  axisY: {
    offset: 70
  }
});



/* ======================================================================
Gauge Chart
====================================================================== */
new Chartist.Pie('#chartist-gauge', {
  series: [20, 10, 30, 40]
}, {
  donut: true,
  donutWidth: 60,
  startAngle: 270,
  total: 200,
  showLabel: false
});


