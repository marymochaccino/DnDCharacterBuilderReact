$(function () {
    $("#class").select(function () {
        $('#spellsList').modal('show');
    });

});
function displayResult() {
  document.getElementById("#class").innerHTML = "Have a nice day!";
}
