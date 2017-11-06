$('document').ready(function() {

    $('#good').on('click', myFunction);


    function myFunction() {



        //куда
        //что
        //что с этим делать
        $.get(
            "goods.php", {
                "art": $('input[name=six]:checked').val()

            },
            function(data) {
                console.log($('input[name=six]:checked').val());
                data = JSON.parse(data);
                console.log(data);


                var result = 'name ' + data.name + '<br>';
                result += 'weight ' + data.weight + '<br>';
                result += 'cost ' + data.cost + '<br>' + '<img src="' + data.img + '" alt="">';
                $('#res6').html(result);
            }
        );

    }

});