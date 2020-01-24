$(document).ready(function () {
    // $('select').formSelect();
    $("#category-select").on("change", event => {
        const catToSearch = event.target.value;
        $.get(`/rec/grablist/${catToSearch}`).then(data => {
            console.log(data);
            $('#product-one').empty();
            $('#product-two').empty();
            $('#product-three').empty();
            $("#product-one").append("<option>----------</option>")
            $("#product-two").append("<option>----------</option>")
            $("#product-three").append("<option>----------</option>")
            data.forEach(product => {
                const prodOption = $(`<option name=${product.p_name} value=${product.id}>${product.p_name}</option>`);
                console.log(prodOption);
                $("#product-one").append(prodOption);
            })
            data.forEach(product => {
                const prodOption = $(`<option name=${product.p_name} value=${product.id}>${product.p_name}</option>`);
                console.log(prodOption);
                $("#product-two").append(prodOption);
            })
            data.forEach(product => {
                const prodOption = $(`<option name=${product.p_name} value=${product.id}>${product.p_name}</option>`);
                console.log(prodOption);
                $("#product-three").append(prodOption);
            })
        })
    })

    //entry page category id
$(function() {
    $(".category").on("click", function(event) {
        event.preventDefault()
      var id = $(this).attr("id");
        console.log(id);
    });

    });
  

    $("#recDone").click(function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let listid = $("#category-select").val().trim();
        let productOneId = $("#product-one").val().trim();
        let commentOne = document.getElementById("comment-one").value;
        let productTwoId = $("#product-two").val().trim();
        let commentTwo = document.getElementById("comment-two").value;
        let productThreeId = $("#product-three").val().trim();
        let commentThree = document.getElementById("comment-three").value;



        console.log(listid);
        console.log(productOneId);
        console.log(commentOne);
        console.log(productTwoId);
        console.log(commentTwo);
        console.log(productThreeId);
        console.log(commentThree);


        let recOne = {
            // ListId: $("#category-select").val().trim(),
            ProductId: $("#product-one").val().trim(),
            body: document.getElementById("comment-one").value,
            rec_img: "http://via.placeholder.com/640x360"
        }
        let recTwo = {
            // ListId: $("#category-select").val().trim(),
            ProductId: $("#product-two").val().trim(),
            body: document.getElementById("comment-two").value,
            rec_img: "http://via.placeholder.com/640x360"
        }
        let recThree = {
            // ListId: $("#category-select").val().trim(),
            ProductId: $("#product-three").val().trim(),
            body: document.getElementById("comment-three").value,
            rec_img: "http://via.placeholder.com/640x360"
        }

        // Send the POST request.
        $.ajax("/rec", {
            type: "POST",
            data: {
                recOne:recOne,
                recTwo:recTwo,
                recThree:recThree,
                category:  $("#category-select").val().trim()
            }
        }).then(
            function () {
                console.log("created new recommendation");
                // Reload the page to get the updated list
                location.reload();
            }
        )
    });



});
