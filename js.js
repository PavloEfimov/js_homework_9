$('document').ready(function() {

    $('button').on('click', myFunction);


    function myFunction() {

        //куда
        //что
        //что с этим делать

        $.post(
            "a1.php", {
                "num1": $('#n1').val(),
                "num2": $('#n2').val()
            },
            function(data) {
                console.log(data);
                $('#res1').html(data);

            }
        );


    }

});