let images = new Array(
    'menta',
    'bacardi',
    'hielo',
    'soda'
)

window.onload = function () {
    $.each(images, function (index, value) {
        $("#ingredients").append("<img id='ingredient' src='images/" + this + ".png' class='ingredient " + this + " hidden' >");
    })
}

$(function () {

    $('#ingredient').draggable();
    $("#recipient").droppable({
        drop: function (event, ui) {
            ingAct = $('.active');
            if ($(ingAct).attr('src') == 'images/limas.png') {
                $(this).append("<img src='images/limas-vaso.png' class='glass-ingredient'>");
                $('#text-ingredient').html('Menta')
            } else if ($(ingAct).attr('src') == 'images/menta.png') {
                $(this).append("<img src='images/menta-vaso.png' class='glass-ingredient'>");
                $('#text-ingredient').html('Bacardi')
            } else if ($(ingAct).attr('src') == 'images/hielo.png') {
                $(this).append("<img src='images/hielo-vaso.png' class='glass-ingredient'>");
                $('#text-ingredient').html('Soda')
            } else if ($(ingAct).attr('src') == 'images/bacardi.png') {
                $(this).append("<img src='images/bacardi-vaso.png' class='glass-ingredient'>");
                $('#text-ingredient').html('Hielo')
            } else if ($(ingAct).attr('src') == 'images/soda.png') {
                $(this).append("<img src='images/soda-vaso.png' class='glass-ingredient'>")
                $('#glass').addClass("hidden");
                $.each($('.glass-ingredient'), function (index, value) {
                    $(this).addClass("hidden");
                })
                $(this).append("<img src='images/soda-vaso.png' class='glass-final'>");
                $('#text-ingredient').remove()
                $('.info').attr("src", 'images/enhorabuena.png');
                $('.arrow').addClass("hidden");
                $('.drag').addClass("hidden");
                $('.pointer').addClass("hidden-imp");
                $(this).append("<img src='images/luz.png' class='light-final'>");
                $(this).append("<img src='images/destello.png' class='shine'>")
                $(this).append("<img src='images/destello-copia.png' class='shine-copy'>")
                $(this).append("<a href='https://www.bacardi.com/'><img src='images/boton.png' class='button'></a>");
            }
            $('.active').addClass("hidden");
            $('.active').removeClass("active");
            $(ingAct).next().addClass("active").draggable();
        }
    });

    $('#auxiliar').hide()

    let timer;
    let touchDuration = 500
    let dragMobile = false
    let element

    $('.draggable').on('touchstart', function (ev) {
        element = this
        timer = setTimeout(function () {
            $('#auxiliar').attr('src', $(element).attr('src'))
            dragMobile = true
        }, touchDuration)
        ev.preventDefault()
    })

    $('.draggable').on('touchend', function (ev) {
        if (timer) {
            clearTimeout(timer)
        }

        if (element) {
            if (dragMobile) {
                ev.preventDefault()
                ev.stopPropagation()
                $('#auxiliar').hide()
                let changedTouch = event.changedTouches[0]

                let elem = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY)

                if ($(elem).hasClass('container')) {
                    $(element).appendTo('#' + elem.id)
                }
                dragMobile = false
            }
        }
    })
})