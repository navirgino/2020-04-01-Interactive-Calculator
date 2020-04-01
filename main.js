"use strict";
$(document).ready(function(){

    //cheese pizza calculations here

    let cheeseCalorieCounter = +$('.calorie_num').val();
    let cheeseFatCounter = +$('.fat_num').val();
    let cheeseCarbCounter = +$('.carb_num').val();
    let cheeseProteinCounter = +$('.protein_num').val();

    $('#cheese').click(function() {
        $(".calorie_num").val(cheeseCalorieCounter+=cheeseCalorieCounter);
        $(".fat_num").val(cheeseFatCounter+=cheeseFatCounter);
        $(".carb_num").val(cheeseCarbCounter+=cheeseCarbCounter);
        $(".protein_num").val(cheeseProteinCounter+=cheeseProteinCounter);

    });



});
