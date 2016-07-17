// JavaScript Document

//ready
$(document).ready(function(){

    $("#start_battle button").bind( "click" , function(e) {
        e.preventDefault();
        var arm_num = $("#start_battle input[name='arm_num']").val(),
            strategy = $("#start_battle select").val(),
            squad = $("#start_battle input[name='squad']").val(),
            sold = $("#start_battle input[name='sold']").val(),
            vehic = $("#start_battle input[name='vehic']").val();
        var units = Number(sold)+Number(vehic);
        if(arm_num == '' ||
           squad == '' ||
           sold == '' ||
           vehic == ''){
            $("#errors").text('You have empty field(-s).');
            $("#errors").css('display', 'block');
        }
        else if(arm_num < 2){
            $("#errors").text('Incorrect the number of armies.');
            $("#errors").css('display', 'block');
        }
        else if(squad < 2){
            $("#errors").text('Incorrect the number of squads.');
            $("#errors").css('display', 'block');
        }
        else if(units < 5 || units > 10){
            $("#errors").text('Incorrect the number of units.');
            $("#errors").css('display', 'block');
        }
        else {
            $.ajax({
                url: "/form",
                type: "POST",
                data: ({arm_num: arm_num, strategy: strategy, squad: squad, sold: sold, vehic: vehic}),
                dataType: "html",
                success: function (data) {
                    $("body").html(data);
                }
            });
        }
    });
    
});