

function add()
{
   $("#message").show();
   if($("#num1").val()=="" || $("#num2").val()=="")
   {
      $("#message").html("<font color='red'>Pls.Enter the Values</font>");
   }
   else
   {
    var answer=parseInt($("#num1").val()) + parseInt($("#num2").val())  
    $("#message").html("<font color='green'><b>"+answer+"</b></font>");
    $("#num3").val(answer);   
   }
}
