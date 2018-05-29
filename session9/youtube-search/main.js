$(function () {
    
    $("#keyword").on('input', function () {
        setTimeout(function () {
            youtubeAPI();
        }, 1000);
    })

    $("#search").submit(function (e) {
        e.preventDefault();
        youtubeAPI();
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            youtubeAPI();
        }
    });

    $(document).ajaxStart(function () {
        $("#loading").show();
    })

    $(document).ajaxStop(function () {
        $("#loading").hide();
    })

})


function youtubeAPI() {

    let nextPageToken= '';

    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?`,
        type: "GET",
        dataType: 'json',
        data: {
            part: 'snippet',
            maxResults : '25',
            q: $('#keyword').val(),
            key: 'AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw',
            pageToken : nextPageToken
        },
        success: function (res) {
            console.log("Success", res);


            $("#result-list").empty();

            for (let i = 0; i < 25; i++) {
                $(`<a class ="result col-md-12" href= "https://www.youtube.com/watch?v=${res.items[i].id.videoId}?autoplay=true" target="_blank" >
            <img src= "${res.items[i].snippet.thumbnails.medium.url}" alt = "">
            <div class ="video_info" >
                <h2 class="title">${res.items[i].snippet.title}</h2>
                <p class = "description"> ${res.items[i].snippet.description}</p>
                <span>View >></span>
            </div>
            </a>`)
                    .appendTo("#result-list");
            }

            nextPageToken = res.nextPageToken;
            console.log(nextPageToken);

            

        },
        error: function (response) {
            console.log("Error", response);
        }
    })
}

