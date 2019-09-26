$('document').ready(function () {
    $('button').click(function () {
        var id = $(this).text();
        var shortname = $("title").text();
        alert("You rated this page " + $(this).text());
        $.ajax({
            type:"post",
            url: "/rate",
            crossDomain: true,
            data: JSON.stringify({ id: id, shortname: shortname}),
            success: function (data) {
                $('#rate').text(data);
            },
            error: function (err) {
                alert(err);
            }
        })
    })
});