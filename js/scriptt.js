function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;

}

function total(size, crust, toppings) {
    return size + crust + toppings;
}

// function grandTotal(totals, grandPrice) {
//     return grandPrice + totals;
// }
var sizePrice;

$("#add").click(function() {
    sizeChosen = $("#size :selected").text();
    crustChosen = $('#crust :selected').text();
    toppingsChosen = $('#toppings :selected').text();
    var grandPrice = 0;

    if (sizeChosen == "Small") {
        sizePrice = 500;
    } else if (sizeChosen == "Medium") {
        sizePrice = 600;
    } else if (sizeChosen == "Large") {
        sizePrice = 700;

    }

    if (crustChosen == "Crispy") {
        crustPrice = 200;
    } else if (crustChosen == "Stuffed") {
        crustPrice = 250;
    } else if (crustChosen == "Gluten-free") {
        crustPrice = 300;

    }
    // console.log(crustPrice)
    if (toppingsChosen == "Pepperoni") {
        topPrice = 200;
    } else if (toppingsChosen == "Extra Chesse") {
        topPrice = 300;
    } else if (toppingsChosen == "Chicken") {
        topPrice = 200;

    }
    var totalPrice = total(sizePrice, crustPrice, topPrice)
    console.log(totalPrice);


    $("#pizza_table").append(
        '<tr>' +
        '<td>' + sizeChosen + " " + sizePrice + '</td>' +
        '<td>' + crustChosen + " " + crustPrice + '</td>' +
        '<td>' + toppingsChosen + " " + topPrice + '</td>' +
        '<td>' + totalPrice + '<td>' +
        '</tr>'
    );
    $('#add').hide();
    $('#add2').show();
    $('.submit').show();
    // var newPizza = new Pizza(sizeChosen, crustChosen, toppingsChosen);
    $('#add2').click(function() {
        sizeChosen = $("#size :selected").text();
        crustChosen = $('#crust :selected').text();
        toppingsChosen = $('#toppings :selected').text();
        var grandPrice = 0;

        if (sizeChosen == "Small") {
            sizePrice = 500;
        } else if (sizeChosen == "Medium") {
            sizePrice = 600;
        } else if (sizeChosen == "Large") {
            sizePrice = 700;

        }
        console.log(sizePrice)

        if (crustChosen == "Crispy") {
            crustPrice = 200;
        } else if (crustChosen == "Stuffed") {
            crustPrice = 250;
        } else if (crustChosen == "Gluten-free") {
            crustPrice = 300;

        }
        // console.log(crustPrice)
        if (toppingsChosen == "Pepperoni") {
            topPrice = 200;
        } else if (toppingsChosen == "Extra Chesse") {
            topPrice = 300;
        } else if (toppingsChosen == "Chicken") {
            topPrice = 200;

        }
        var totalPrice = total(sizePrice, crustPrice, topPrice);
        grandPrice = grandPrice + totalPrice;
        // alert(grandPrice)
        var newPizza = new Pizza(sizeChosen, crustChosen, toppings);
        $("#pizza_table").append(
            '<tr>' +
            '<td>' + sizeChosen + " " + sizePrice + '</td>' +
            '<td>' + crustChosen + " " + crustPrice + '</td>' +
            '<td>' + toppingsChosen + " " + topPrice + '</td>' +
            '<td>' + totalPrice + '<td>' +
            // '<td>' + grandprice + '<td>' +


            '</tr>'
        );

    });
    $('.submit').click(function() {
        $('#checkout').modal('show');
        $('.modal .total_div').prepend(

            '<p>' + 'TOTAL:' + totalPrice + '</p>'
        );
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

        $('.modal .final').prepend(
            '<p>' + 'GRAND TOTAL: ' + totalPrice + '</p>'
        );
    });

});