console.log("Hello World", $("#question"));

$(function() {
    console.log("Document full load", $("#question"));
    //Sau khi HTML tải hoàn tất -> Thực hiện các lệnh bên trong. 
    
    $("#question").on("input", function() {
        let remainCharacter =200 - $("#question").val().length;
        $("#remainCharacter").text(remainCharacter);
    });

    $(".nav-item").click(function() {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
});






// $(function() {
//     console.log("Document full load!", $("question"));
//     //Sau khi HTML tải hoàn tất thì sẽ thực hiện các lệnh bên trong

//     $("question").on("input", function() {
//         let remainCharacter = 200 - $("#question").val().length;
//         $("#remainCharacter").text(remainCharacter);
//     });

//     $(".nav-item").click(function() {
//         $(".nav-item").removeClass("active");
//         $(this).addClass("active");
//     });

// });

