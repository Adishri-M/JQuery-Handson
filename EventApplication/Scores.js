$(document).ready(function()
{
$(".txt").keyup(function()
{
calculateSum();
});

function calculateSum()
{
var sum=0;
$(".txt").each(function()
{
if($(this).val()!=0)
{
sum+=Number($(this).val());
}
});

$("#value").val(sum.toFixed(2));
}
});