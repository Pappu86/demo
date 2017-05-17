Template.dateTimePackage.onRendered(function() {
   $('#datetimepicker1').datetimepicker();
   $("#dateTime2").datetimepicker({
        format: "dd MM yyyy - hh:ii",
        autoclose: true,
        todayBtn: true
        //pickerPosition: "bottom-right"
    });
});