function Pizza(size, crust, topping, sum) {
    this.size = size;
    this.crust = crust;
    this.toppings = topping;
};
var total = function(sizeprice, crustprice, toppinsprice) {
    return (sizeprice + crustprice + toppinsprice);

};

var price;
var sizeChosen;
var sizePrice;

// var totalPrice;

$(document).ready(function() {
    $('#example-includeSelectAllOption').multiselect({
        includeSelectAllOption: true
    });
    $("#pizzas").click(function() {
        $('#staticBackdrop').modal("show");
    });
    $('.add').click(function() {

    })
    $("#add").click(function() {
        sizeChosen = $("#size :selected").text();
        crustChosen = $('#crust :selected').text();
        toppingsChosen = $('#toppings :selected').text();


        if (sizeChosen == "Small") {
            sizePrice = 500;
        } else if (sizeChosen == "Medium") {
            sizePrice = 600;
        } else if (sizeChosen == "Large") {
            sizePrice = 700;
            return false;
        }
        console.log(sizePrice)

        if (crustChosen == "Crispy") {
            crustPrice = 200;
        } else if (crustChosen == "Stuffed") {
            crustPrice = 250;
        } else if (crustChosen == "Gluten-free") {
            crustPrice = 300;
            return false;
        }
        console.log(crustPrice)
        if (toppingsChosen == "Pepperoni") {
            topPrice = 200;
        } else if (toppingsChosen == "Extra Chesse") {
            topPrice = 300;
        } else if (toppingsChosen == "Chicken") {
            topPrice = 200;
            return false;
        }
        console.log(typeof(topPrice))
        var totalPrice = total(sizePrice, crustPrice, topPrice)

        $("#pizza_table").append(
            '<tr>' +
            '<td>' + sizeChosen + '</td>' +
            '<td>' + crustChosen + '</td>' +
            '<td>' + toppingsChosen + '</td>' +
            '<td>' + totalPrice + '<td>' +
            '</tr>'
        );
        $('.submit').show();

    });
    $('.submit').click(function() {
        $('#checkout').modal('show');
        // $('modal .total_div').append(
        //     '<p>' + "hehe" + '</p>' +
        //     '<p>' + totalPrice + "hehe" + '</p>'
        // )
        // $('.total').innerText = totalPrice;
    });

    $('#checkout_yes').click(function() {
        $('.grand_div').show();
        $('.total_div').hide();
        $('#final_btn').click(function() {
            $('.grand_div').hide();
            $('.final').show();
            var location = $("#locale").val();
            $('.final').append(
                '<p>' + "Your order will be delivered to" + " " + location + '</p>'
            );
        });
    });
    $('#checkout_no').click(function() {
        $('.total_div').hide();
        $('.grand_div').hide();
        $('.final').show();
        $('.total').innerText = totalPrice;

    });
});

// var toppings = ["beef", "fruity", "vegan", "chicken", "aragula"]