var multiplier = 1.85;

$(document).ready(function() {
    $('.slider').on('input',function() {
        $('#price').val($(this).val());
        $('.itemcontainer').html('');
        for(var i=0;i<$(this).val()*multiplier;i++) {
            $('.itemcontainer').append('<span class="overlap'  + (i>$(this).val()? ' bonus': '') + '">&#x1F96B;</span>');
        }
        if($(this).val()%1.0) {
            $('.itemcontainer').append('<span class="overlap partial'  + (i>$(this).val()*multiplier? ' bonus': '') + '" style="width: '+ (($(this).val()%1).toFixed(2)*12)+'px" ">&#x1f32e;</span>');
        }
        $('#quantity').val(($(this).val()*multiplier).toFixed(2));
    });
});