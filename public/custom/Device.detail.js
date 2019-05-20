//select sensor selcted
/**
 * sensor desc get show select
 */
function DeviceItemChange(value){
    //select object parser 
    var check = value;
    for(let i = 0; i < check.length; i++)
    {
        check[i].SensorName;
        let seelctItem = $("#sensorName").val();
        if(seelctItem == check[i].SensorName)
        {
            $("#descSensor").empty();
            $("#descSensor").append("<option value=''>select</option>");
            for(let j = 0; j < check[i].DESC.length;j++)
            {
                if(check[i].DESC[j].Field === 'id' || check[i].DESC[j].Field === 'createdAt' || check[i].DESC[j].Field === 'updatedAt' || check[i].DESC[j].Field === 'deviceSensorId'){
                }else{
                    console.log(check[i].DESC[j].Field);
                    var option = $("<option value="+check[i].DESC[j].Field+">"+check[i].DESC[j].Field+"</option>")
                    $("#descSensor").append(option);
                }
            }
        }
    }
}

/**
 * 
 */