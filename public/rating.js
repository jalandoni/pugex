$(document).ready(function() {
    $("#1").on('click', function() {            
            $.ajax({
                url: "/rate",
                type: 'POST',
                crossDomain:true,
                data: JSON.stringify({shortname:"cebu" , rate:"1"}),
                success: function (data) {                   
                   alert("saved!")
                }      
            });
           
    });

    $("#2").on('click', function() {
        alert("good")
        $.ajax({
            url:  "/rate",
            crossDomain: 'true',
            data: JSON.stringify({
                rate: "2",
            }),
            type: 'POST',
            success: function(response) {
                console.log("rated");

            },
            error: function(err) {


            }
        })
    });

    $("#3").on('click', function() {
        alert("hi")
        var pathname = window.location.pathname;
        $.ajax({
            url:  "/rate",
            crossDomain: 'true',
            data: JSON.stringify({
                rate: "3",
            }),
            type: 'POST',
            success: function(response) {
                console.log("rated");

            },
            error: function(err) {


            }
        })
    });

    $("#4").on('click', function() {
        alert("hi")
        $.ajax({
            url:  "/rate",
            crossDomain: 'true',
            data: JSON.stringify({
                rate: "4",
            }),
            type: 'POST',
            success: function(response) {
                console.log("rated");

            },
            error: function(err) {


            }
        })
    });

    $("#5").on('click', function() {
        $.ajax({
            url: "/rate",
            crossDomain: 'true',
            data: JSON.stringify({
                rate: "5",
            }),
            type: 'POST',
            success: function(response) {
                console.log("rated");

            },
            error: function(err) {


            }
        })
    });



});