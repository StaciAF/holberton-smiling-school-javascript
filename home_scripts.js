$(document).ready(function () {
    $.ajax({
        url: 'https://randomuser.me/api/?results=2',
        dataType: 'json',
        beforeSend: function () {
            // Show image container
            $("#loader").show();
            $('#pro_1').hide();
            $('#pro_2').hide();
        },
        success: function (data) {
            console.log(data['results'][0].name.first);
            first1 = data['results'][0].name.first;
            console.log(data['results'][0].name.last);
            last1 = data['results'][0].name.last;
            console.log(data['results'][0].location.timezone.description);
            quote1 = data['results'][0].location.timezone.description;
            pic1 = data['results'][0].picture.thumbnail;
            console.log(data['results'][1].name.first);
            first2 = data['results'][1].name.first;
            console.log(data['results'][1].name.last);
            last2 = data['results'][1].name.last;
            console.log(data['results'][1].location.timezone.description);
            quote2 = data['results'][1].location.timezone.description;
            pic2 = data['results'][1].picture.thumbnail;
            replaceName(first1, last1, first2, last2);
            replaceContent(quote1, quote2, pic1, pic2);
        },
        complete: function (data) {
            // Hide image container
            $("#loader").hide();
            $('#pro_1').show();
            $('#pro_2').show();
        }
    });

    function replaceName(param1, param2, param3, param4) {
        document.getElementById('client_name1').innerHTML = "-" + param1 + " " + param2;
        document.getElementById('client_name2').innerHTML = "-" + param3 + " " + param4;
    };

    function replaceContent(param1, param2, param3, param4) {
        document.getElementById('client_quote1').innerHTML = '" The Intentional Method improved my business in ' + param1 + '."';
        document.getElementById('client_quote2').innerHTML = '" The Intentional Method improved my business in ' + param2 + '."';
        $('#pro1_pic').attr('src', param3);
        $('#pro2_pic').attr('src', param4);
    }

    $('#carousel').carousel({
        interval: 2000
    });
})
