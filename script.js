$(document).ready(function () {

    //Dynamic Task Counter:
    function counter() {
        let totaltTask = $('.incomplete,.complete').length;
        let completedTask = $('.complete').length;
        let inCompleted = $('.incomplete').length;
        $('#total-count').html(`Total:${totaltTask} Completed:${completedTask} Uncompleted:${inCompleted}`);
    }

    //Add New Tasks:
    $('#newtask').click(function () {
        if ($('#input-task').val() === '') {
            console.log("empty");
        }
        else {
            let inputValue = $('#input-task').val();
            $('.op-list').append(`<div class="incomplete" id="list-item"><ul>${inputValue}</ul>
                <button class="delete-btn">Delete</button>
                <input type="checkbox" class="complete-checkbox"></div>`).css("text-align", "left");
            $('#input-task').val("");
            counter();
        }

        //Delete Tasks:
    $('.delete-btn').click(function () {
        $(this).parent().fadeOut(1000, function () {
            $(this).remove();
            counter();
        })
    });
    //Mark Tasks as Completed:
    $('.complete-checkbox').change(function () {
        if ($(this).is(':checked')) {
            $(this).parent().removeClass('incomplete').addClass('complete');
            $(this).siblings('ul').toggleClass(function () {
                $(this).css({ "background-color": "gray", "text-decoration": "line-through" });
            })
            counter();
        }
        else {
            $(this).parent().removeClass('complete').addClass('incomplete');
            $(this).siblings('ul').stop(true, true).toggleClass(function () {
                $(this).css({ "background-color": "", "text-decoration": "none" })
            })
            counter();
        }
    });
    //Filter Tasks:
    $('#Complete').click(function () {
        if ($('.complete').is(':checked')) {
            $('.complete').show()
        }
        else {
            $('.complete').closest('#complete').show();
            $('.incomplete').hide();
        }
    })
    //complete
    $('#Complete').click(function () {
        $('.complete').show();
        $('.incomplete').hide();
    });
    //incomplete
    $('#Incomplete').click(function () {
        $('.incomplete').show();
        $('.complete').hide();
    });
    //All
    $('#All').click(function () {
        $('.incomplete').show();
        $('.complete').show();
    });
    });
});