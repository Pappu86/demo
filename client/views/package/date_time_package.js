Template.dateTimePackage.onRendered(function() {
   $('#datetimepicker1').datetimepicker();
   $("#dateTime2").datetimepicker({
        format: 'DD/MM/YYYY',
         pickTime: false,
        autoclose: true,
        todayBtn: true,
        pickerPosition: "bottom-right"
    });
});