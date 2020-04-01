"use strict";
$(document).ready(function(){

    //cheese pizza calculations here

    let cheeseCalorieCounter = +$('.calorie_num').val();
    let cheeseFatCounter = +$('.fat_num').val();
    let cheeseCarbCounter = +$('.carb_num').val();
    let cheeseProteinCounter = +$('.protein_num').val();




    $('#original_cheese_pizza').click(function() {

        //bug on hover effect, doesn't apply css except on when you scroll down then scroll back up?????
        //then gets stuck on hover effect
        $('#original_cheese_pizza').hover(
            function() {
                $(this).css('opacity', '0.5');
            },
            function() {
                $(this).css('opacity', '1.0');}
        );

        $('#pizza').append("<img class='cheese_pizza' src=\"img/cheese_pizza.png\">");

        $('#total_fat').html(cheeseFatCounter+=13);
        $('#total_carb').html(cheeseCarbCounter+=33);
        $('#total_protein').html(cheeseProteinCounter+=13);
        $('#total_calories').html(cheeseCalorieCounter+=310);



    });



});
