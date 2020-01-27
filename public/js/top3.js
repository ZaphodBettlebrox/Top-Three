$(document).ready(function () {
    $("#upload_widget").on("click", function () {
        var myWidget = cloudinary.createUploadWidget({
            cloudName: 'top3project',
            uploadPreset: 'yb5bx9uo'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Done! Here is the image info: ', result.info);
                //create an ajax call to send result.info.url to table of user as profileurl .
                $.ajax("/profile/setprofileurl", {
                    type: "POST",
                    data: {
                        profileurl: result.info.url,
                    }
                }).then(
                    function () {
                        console.log("created url route for profile picture");
                        alert("Hitting top3.js code");
                        // Reload the page to get picture.
                        location.reload();
                    });
            }
        });
        myWidget.open();
        console.log("hi");
    });
    $('.carousel').carousel();

    $('.ListID').on("click", function () {
        $.ajax("/profile/delete/:id"), {
            type: "delete",
            data: {
                id: require.session.user.id
            }
        }
    })
    

});
