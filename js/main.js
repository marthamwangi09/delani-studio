
$('#send').click(function (e) {
    if ($('#name').val() && $('#email').val() && $('#text').val() == '')
    {
        e.preventDefault();
        e.stopImmediatePropagation();
        alert('Input can not be left blank');
        
    } else {
        $("#message").submit(function (e) {
            $("form").trigger("reset");
            e.preventDefault();
            e.stopImmediatePropagation();
            alert("Message has been received,Thank you for reaching out!");
            
           
        
        });
    }
});


//Toggle action Desingn icon

$(document).ready(function () {
    $("#design").click(function () {
        $(".des-caption").css('visibility', 'visible');
        $("#design").css('visibility', 'hidden');

    });
});
$(document).ready(function () {
    $(".des-caption").click(function () {
        $("#design").css('visibility', 'visible');
        $(".des-caption").css('visibility', 'hidden');
    });
});

//Toggle Development icon
$(document).ready(function () {
    $("#development").click(function () {
        $(".dev-caption").css('visibility', 'visible');
        $("#development").css('visibility', 'hidden');

    });
});
$(document).ready(function () {
    $(".dev-caption").click(function () {
        $("#development").css('visibility', 'visible');
        $(".dev-caption").css('visibility', 'hidden');
    });
});

//Toggle product icon

$(document).ready(function () {
    $("#product").click(function () {
        $(".prod-caption").css('visibility', 'visible');
        $("#product").css('visibility', 'hidden');

    });
});
$(document).ready(function () {
    $(".prod-caption").click(function () {
        $("#product").css('visibility', 'visible');
        $(".prod-caption").css('visibility', 'hidden');
    });
});

// hover images

$(document).ready(function () {
    $('.gallery-item').hover(function () {
        $(this).stop().animate({
            opacity: .4
        }, 200);
        $('#img-'+ this.id).css('visibility','visible');
    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 500);
        $('#img-' + this.id).stop().css('visibility','hidden');
    });
});
