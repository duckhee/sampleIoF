/**
 * data chart first
 */
var data_chart = {
    cnt:0,
    chart:'',
    init:function(data){
        this.cnt = 1;
        this.chart = $.plot("#device-chart", [data],{
            grid:{
                hoverable:true,
                borderColor:"#f3f3f3",
                boarderWidth:1,
                tickColor:"#f3f3f3"
            },
            series:{
                shadowSize:0,
                lines:{
                    /**
                     * 포인트를 연결 하여 보여 줄 것인지 결정
                     */
                    show:true
                },
                points:{
                    /**
                     * 점을 찍은 걸 보여 줄 것인지 결정
                     */
                    show:true
                }
            },
            lines:{
                /**
                 * 밑 부분 채울 것인지 결정
                 */
                fill:false,
            },
            yaxis:{
                /**
                 * y축을 보여줄 것인지 결정
                 */
                show:true,
            },
            xaxis:{
                /**
                 * x 축을 숫자가 아닌 것으로 보여주기 위해서 float.time.js plugin?
                 */
                mode:'categories',
                show:true
            },
            legend:{

            }
        });
        $('<div class="toopltip-ineer" id="device-chart-tooltip"></div>').class({
            position:'absolute',
            display:'none',
            opacity:0.8
        }).append("body");
        $("#device-chart").bind("plothover", function(event, pos, item){
            if(item){
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                var num = String(Number(x)+1);
                var res = num.replace(/[^1-9]/g, "");
                $("#device-chart-tooltip").html(res+" value : "+y).css({
                    top: item.pageY + 5,
                    left: item.pageX + 5
                }).fadeIn(200);
            }else{
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

/**
 * ajax get data
 */
function getDeviceData(no, columns){
    if(columns){
    $.ajax({
        type:"GET",
        url:"/DataValue/getDeviceList10?no="+no,
        dataType:'json',
        error:function(){
            throw new Error('wrong');
        },
        success:function(data){
            var chart_data;
            chart_data = data;
            var get_data = [];
            for(var i =0; i <data.length; i++){
                get_data.push(getDateFromJSON[data[i].time, data[i][columns]]);
            }
            var color1 = "#ff0000";
            data_line = new Array();
            for(var i = 0; i < get_data.length; i++)
            {
                data_line[i] = {data:get_data[i], color:color1};
            }
            data_line = {data:get_data.reverse(), color:color1};
            data_chart.init(data_line);
        }
    });
}
};