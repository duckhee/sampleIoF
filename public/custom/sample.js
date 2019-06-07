var option = {
    grid: {
        hoverable: true,
        borderColor: "#f3f3f3",
        boarderWidth: 1,
        tickColor: "#f3f3f3"
    },
    series: {
        shadowSize: 0,
        lines: {
            /**
             * 포인트를 연결 하여 보여 줄 것인지 결정
             */
            show: true
        },
        points: {
            /**
             * 점을 찍은 걸 보여 줄 것인지 결정
             */
            show: true
        }
    },
    lines: {
        /**
         * 밑 부분 채울 것인지 결정
         */
        fill: false,
    },
    yaxis: {
        /**
         * y축을 보여줄 것인지 결정
         */
        show: true,
    },
    xaxis: {
        /**
         * x 축을 숫자가 아닌 것으로 보여주기 위해서 float.time.js plugin?
         */
        mode: 'categories',
        show: true
    },
    legend: {

    }
};

const option1 = {
    grid: {
        hoverable: true,
        borderColor: "#f3f3f3",
        boarderWidth: 1,
        tickColor: "#f3f3f3"
    },
    series: {
        shadowSize: 0,
        lines: {
            /**
             * 포인트를 연결 하여 보여 줄 것인지 결정
             */
            show: true
        },
        points: {
            /**
             * 점을 찍은 걸 보여 줄 것인지 결정
             */
            show: true
        }
    },
    lines: {
        /**
         * 밑 부분 채울 것인지 결정
         */
        fill: false,
    },
    yaxis: {
        /**
         * y축을 보여줄 것인지 결정
         */
        show: true,
    },
    xaxis: {
        /**
         * x 축을 숫자가 아닌 것으로 보여주기 위해서 float.time.js plugin?
         */
        mode: 'categories',
        show: true
    },
    legend: {

    }
};

const option2 = {
    grid: {
        hoverable: true,
        borderColor: "#f3f3f3",
        boarderWidth: 1,
        tickColor: "#f3f3f3"
    },
    series: {
        shadowSize: 0,
        lines: {
            /**
             * 포인트를 연결 하여 보여 줄 것인지 결정
             */
            show: true
        },
        points: {
            /**
             * 점을 찍은 걸 보여 줄 것인지 결정
             */
            show: true
        }
    },
    lines: {
        /**
         * 밑 부분 채울 것인지 결정
         */
        fill: false,
    },
    yaxis: {
        /**
         * y축을 보여줄 것인지 결정
         */
        show: true,
    },
    xaxis: {
        /**
         * x 축을 숫자가 아닌 것으로 보여주기 위해서 float.time.js plugin?
         */
        mode: 'categories',
        show: true
    },
    legend: {

    }
};

const option3 = {
    grid: {
        hoverable: true,
        borderColor: "#f3f3f3",
        boarderWidth: 1,
        tickColor: "#f3f3f3"
    },
    series: {
        shadowSize: 0,
        lines: {
            /**
             * 포인트를 연결 하여 보여 줄 것인지 결정
             */
            show: true
        },
        points: {
            /**
             * 점을 찍은 걸 보여 줄 것인지 결정
             */
            show: true
        }
    },
    lines: {
        /**
         * 밑 부분 채울 것인지 결정
         */
        fill: false,
    },
    yaxis: {
        /**
         * y축을 보여줄 것인지 결정
         */
        show: true,
    },
    xaxis: {
        /**
         * x 축을 숫자가 아닌 것으로 보여주기 위해서 float.time.js plugin?
         */
        mode: 'categories',
        show: true
    },
    legend: {

    }
};

/**
 * data chart first
 */
var data_chart = {
    cnt: 0,
    chart: '',
    init: function (data) {
        this.cnt = 1;
        this.chart = $.plot("#cell1-chart", [data], option);
        $('<div class="toopltip-ineer" id="cell1-chart-tooltip"></div>').class({
            position: 'absolute',
                display: 'none',
                opacity: 0.8
        }).append("body");
        $("#device-chart").bind("plothover", function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                var num = String(Number(x) + 1);
                var res = num.replace(/[^1-9]/g, "");
                $("#device-chart-tooltip").html(res + " value : " + y).css({
                    top: item.pageY + 5,
                    left: item.pageX + 5
                }).fadeIn(200);
            } else {
                $("#device-chart-tooltip").hide();
            }
        });
    }
};

/**
 * data char label formatter
 */
function labelFormatter(label, series) {
    return '<div style="font-size:13px; text-align:center; padding:2px; color: #fff; font-weight: 600;">' +
        label +
        "<br>" +
        Math.round(series.percent) +
        "%</div>";
}