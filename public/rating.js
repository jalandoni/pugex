$('document').ready(function () {
    $('button').click(function () {
        var id = $(this).text();
        $.ajax({
            url: "http://localhost:8080/rate",
            data: { id: id, shortname: $('title').text() },
            success: function (data) {
                $('#rate').text(data)
            },
            error: function (err) {
                console.log(err);

            }
        })
    })
});