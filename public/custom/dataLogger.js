//line chart init data 
var data_chart = {
    cnt: 0,
    chart: '',
    init: function (data) {
        this.cnt = 1;
        this.chart = $.plot("#line-chart", [data], {
            grid: {
                hoverable: true,
                borderColor: "#f3f3f3",
                borderWidth: 1,
                tickColor: "#f3f3f3"
            },
            series: {
                shadowSize: 0,
                lines: {
                    show: true,
                },
                points: {
                    show: true,
                }
            },
            lines: {
                fill: false,
            },
            yaxis: {
                show: true,
            },
            xaxis: {
                //이 설정은 x축의 보여지는 것이 날짜 기준으로 하기 위해서이다.
                mode: "categories",
                show: true,
            },
            legedn: {
                show: true,
                noColumns: 0,
                container: $("#line-chart")
            }
        });
        //Initialize tooltip on hover
        $('<div class="tooltip-inner" id="line-chart-tooltip"></div>').css({
            position: "absolute",
            display: "none",
            opacity: 0.8
        }).appendTo("body");

        $("#line-chart").bind("plothover", function (event, pos, item) {

            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                var num = String(Number(x) + 1);
                var res = num.replace(/[^1-9]/g, "");
                //$("#sensor-chart-tooltip").html(item.series.label + " of " + x + " = " + y)
                $("#line-chart-tooltip").html(res + " legend : " + y).css({
                    top: item.pageY + 5,
                    left: item.pageX + 5
                }).fadeIn(200);
            } else {
                $("#line-chart-tooltip").hide();
            }
        });
    }
};

//label format setting 
function labelFormatter(label, series) {
    return '<div style="font-size:13px; text-align:center; padding:2px; color: #fff; font-weight: 600;">' +
        label +
        "<br>" +
        Math.round(series.percent) +
        "%</div>";
}

//empty check value function
function emptyCheck(value) {
    if (value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {
        return true;
    } else {
        return false;
    }
}

//ajax get data
function getData(no, column) {
    
    $.ajax({
        type: 'GET',
        asynch:false,
        url: '/data/dataLoggerList10=' + no,
        dataType: 'json',
        error: function () {
            getData = null;
        },
        success: function(data){
            getData = data;
        }
    });

}

//chart data setting
function makeChart(data, getChartData) {
    console.log('data :::', data);
    let chartData;
    chartData = data;
    let InputChartData = [];
    for (var i = 0; i < data.length; i++) {
        let regExp = /^\d+(?:[.]?[\d]?[\d])?$/;
        if (!regExp.test(data[i].columnData)) {
            data[i][getChartData] = 0;
        }
        InputChartData.push(chartData.length - i, data[i][getChartData]);
    }
    //input data end
    let color1 = "#FF0000";
    DataLine = new Array();
    for (var i =0;i< InputChartData.length;i++) {
        DataLine[i] = {
            data: InputChartData[i],
            color: color1
        };
    }
    DataLine = {
        data: InputChartData.reverse(),
        color: color1
    };
    
    data_chart.init(DataLine);
}

//start make chart
function start(no, column) {
    console.log('get data :: ', column);
    $.ajax({
        type: "GET",
        url: "/data/dataLoggerList10?no=" + no,
        dtaType: "json",
        error: function () {
           
        },
        success: function(data){
            makeChart(data,column);
        }
    });
   
}

//default setting
var LoggerDataShowChart = function (no, column) {
    let columnData = column;
    console.log('get data :: ', columnData);
    $.ajax({
        type: "GET",
        url: "/data/dataLoggerList10?no=" + no,
        dtaType: "json",
        error: function () {
            var ajax_data;
            ajax_data = null;
        },
        success: function (data) {
            var chart_data;
            //ajax_data = JSON.stringify(data);
            console.log(data);
            chart_data = data;
            var get_data = [];
            for (var i = 0; i < data.length; i++) {

                let regExp = /^\d+(?:[.]?[\d]?[\d])?$/;
                console.log('regExp testing::: ', regExp.test(data[i][columnData]));

                if (!regExp.test(data[i][columnData])) {
                    data[i][columnData] = 0;
                    console.log('test ::: ', data[i][columnData]);
                }

                get_data.push([data.length - i, data[i][columnData]]);
                //  console.log('test get index name ::: ',);
            }
            var color1 = "#FF0000";
            data_line = new Array();
            for (var i = 0; i < get_data.length; i++) {
                data_line[i] = {
                    data: get_data[i],
                    color: color1
                };
                console.log('data line ::::: ', data_line[i]);
            }
            data_line = {
                data: get_data.reverse(),
                color: color1
            };
            data_chart.init(data_line);
            /*
            if (data_chart.cnt == 0) {
                console.log('first data ')'
                data_chart.init(data_line);
            } else {
                console.log(' data ')'
                console.log('chart data :::: ', data_line);
                data_chart.chart.setData(data_line);
                data_chart.chart.setupGrid();
                data_chart.chart.draw();
            }
            */
        }
    });
};