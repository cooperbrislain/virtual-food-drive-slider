var multiplier = 1.0;

var meal_regular_price = 2.60;
var meal_foodbank_price = 0.33;
var regular_price = 54.60;
var foodbank_price = 7.00;

$(document).ready(function() {
    $('.slider').on('input load',function() {
        var donation = $(this).val();
        if (donation/foodbank_price*multiplier > 1) {
            var quantity_at_foodbank_price = Math.round(donation/foodbank_price*multiplier);
            var quantity_at_regular_price = Math.round(donation/regular_price);
            var icon = 'grocery-bag-icon';
            var unit_name = 'weeks of food';
        } else {
            var quantity_at_foodbank_price = Math.round(donation/meal_foodbank_price*multiplier);
            var quantity_at_regular_price = Math.round(donation/meal_regular_price);
            var icon = 'meal-icon';
            var unit_name = 'meals';
        }
        var img_size = Math.max(200-Math.round(quantity_at_foodbank_price)*4.5,80);
        var space = Math.round(img_size*0.15)+7;
        var offset = (img_size-space)/2;
        $('.itemcontainer').html('');
        for(var i=0;i<Math.floor(quantity_at_foodbank_price);i++) {
            $('.itemcontainer').append(
                '<span class="align-middle overlap'  + (i>quantity_at_regular_price? ' bonus': '') + '" style="width: ' + space + 'px">' +
                    '<img src="img/' + icon + (i>quantity_at_regular_price? '-green': '') + '.png" style="width: ' + img_size + 'px; height: '+ img_size + 'px; left: -' + offset + 'px;">' +
                '</span>');
        }
        $('.donationcontainer span[data-donation-amount]').text(donation);
        $('.donationcontainer span[data-units-at-foodbank-price]').text(quantity_at_foodbank_price);
        $('.donationcontainer span[data-unit-term]').text(unit_name);
        $('.donationcontainer span[data-units-at-regular-price]').text(quantity_at_regular_price);
        $('.donationcontainer span[data-units-difference]').text(quantity_at_foodbank_price-quantity_at_regular_price);
    });
});