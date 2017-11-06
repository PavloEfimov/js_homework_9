$('document').ready(function() {

    $('#mail').on('click', myFunction);


    function myFunction() {



        //куда
        //что
        //что с этим делать
        $.post(
            "mail.php", {
                "fio": $('input[name=fio]').val(),
                "email": $('input[name=email]').val(),
                "phone": $('input[name=tel]').val()

            },
            function(data) {
                console.log(data);
                $('#res5').html(data);
            }
        );

    }

});