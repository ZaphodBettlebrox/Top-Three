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
    

});


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
