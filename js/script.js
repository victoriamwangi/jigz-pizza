$(document).ready(function() {
    $("#pizzas").click(function() {
        $('#staticBackdrop').modal("show");
    });
    $('.add').click(function() {

    })
    $("#add").click(function() {
        // var sizeChosen = $("#size :selected").val();
        var sizeChosen = $("#size :selected").text();
        var crustChosen = $('#crust :selected').text();
        var toppingsChosen = $('#toppings :selected').text();

        $("#pizza_table").append(
            '<tr>' +
            '<td>' + sizeChosen + '</td>' +
            '<td>' + crustChosen + '</td>' +
            '<td>' + toppingsChosen + '</td>' +
            '<td>' + '<p>' + "hehe" + '</p>' + '<td>' +
            '</tr>'
        )



    })
});
// var toppings = ["beef", "fruity", "vegan", "chicken", "aragula"]

function Pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.toppings = topping;
}