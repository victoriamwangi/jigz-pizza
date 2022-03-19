function Pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.toppings = topping;
}

var total = function(sizeprice, crustprice, toppinsprice) {
    return (sizeprice + crustprice + toppinsprice);
}


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
        $('.submit').show()

    });
    $('.submit').click(function() {
        $('#checkout').modal('show');
        $('.total_div   ').show();

    })
    $('#checkout_yes').click(function() {
        $('.grand_div').show();
        $('.total_div').hide();
        $('#final_btn').click(function() {
            $('.grand_div').hide();
            $('.final').show();
            var location = $("#locale").val();
            $('.final').append(
                '<p>' + "YOur order will be delivered to" + " " + location + '</p>'
            )
        })

    });

    $('#checkout_no').click(function() {
        $('.total_div').hide();
        $('.grand_div').hide();
        $('.final').show();
    });
});

// var toppings = ["beef", "fruity", "vegan", "chicken", "aragula"]