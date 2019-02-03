var multiplier = 1.0;

var regular_price = 54.60;
var foodbank_price = 7.00;

$(document).ready(function() {
    $('.slider').on('input load',function() {
        var donation = $(this).val();
        var quantity_at_regular_price = Math.round(donation/regular_price);
        var quantity_at_foodbank_price = Math.round(donation/foodbank_price*multiplier);
        var img_size = Math.max(200-Math.round(quantity_at_foodbank_price)*4.5,80);
        var space = Math.round(img_size*0.15)+7;
        var offset = (img_size-space)/2;
        $('.itemcontainer').html('');
        for(var i=0;i<Math.floor(quantity_at_foodbank_price);i++) {
            $('.itemcontainer').append(
                '<span class="align-middle overlap'  + (i>quantity_at_regular_price? ' bonus': '') + '" style="width: ' + space + 'px">' +
                    '<img src="img/grocery-bag-icon' + (i>quantity_at_regular_price? '-green': '') + '.png" style="width: ' + img_size + 'px; height: '+ img_size + 'px; left: -' + offset + 'px;">' +
                '</span>');
        }
        $('.donationcontainer').html('An $' + donation + ' donation buys ' + quantity_at_foodbank_price + ' weeks of food');
        $('<div class="smaller">').text('(' + quantity_at_regular_price + ' weeks of food at retail price)').appendTo('.donationcontainer');
    });
});