$('document').ready(function() {

    $('#ideal').on('click', myFunction);


    function myFunction() {

        console.log($('input[name=range]').val());

        //куда
        //что
        //что с этим делать
        $.post(
            "a3.php", {
                "sex": $('input[name=sex]:checked').val(),
                "height": $('input[placeholder=height]').val()

            },
            function(data) {
                console.log(data);
                $('#res3').html(data);
            }
        );

    }

});