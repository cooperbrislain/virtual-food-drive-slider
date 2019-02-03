var multiplier = 2.0;

var regular_price = 1.85;
var foodbank_price = 0.85;

$(document).ready(function() {
    $('.slider').on('input',function() {
        var donation = $(this).val();
        var quantity_at_regular_price = Math.round(donation/regular_price);
        var quantity_at_foodbank_price = Math.round(donation/foodbank_price*multiplier);

        $('.itemcontainer').html('');
        for(var i=0;i<quantity_at_foodbank_price;i++) {
            $('.itemcontainer').append('<span class="overlap'  + (i>quantity_at_regular_price? ' bonus': '') + '"><image src="/img/' + (i>quantity_at_regular_price? 'bonus-': '') + 'grocery-bag.png"></span>');
        }
        $('.donationcontainer').html('An $' + donation + ' donation buys ' + quantity_at_foodbank_price + ' days of groceries');
        $('<div class="smaller">').text('(' + quantity_at_regular_price + ' days at regular price)').appendTo('.donationcontainer');
    });
});