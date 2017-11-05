$('document').ready(function() {

    $('button').on('click', myFunction);


    function myFunction() {

        //куда
        //что
        //что с этим делать

        $.post(
            "a2.php", {
                "year": $('#n3').val()

            },
            function(data) {
                console.log(data);
                $('#res2').html(data);
            }
        );


    }

});