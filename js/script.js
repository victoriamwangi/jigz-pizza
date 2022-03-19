$(document).ready(function() {
    $("#pizzas").click(function() {
        $('#staticBackdrop').modal("show");
    });
    $('.add').click(function() {
        $("#cart").a
    })
    $("#add").click(function() {
        var sizeChosen = $("#size :selected").val();
        var crustChosen = $('#crust :selected').val();
        var toppingsChosen = $('#toppings :selected').val();
        console.log(sizeChosen);
        console.log(crustChosen);
        console.log(toppingsChosen);
    })
});
// var toppings = ["beef", "fruity", "vegan", "chicken", "aragula"]

function Pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.toppings = topping;
}