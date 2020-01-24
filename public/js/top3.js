// $(document).ready(function(){
// $('.carousel').carousel();
// });

// $(document).ready(function(){
//     $('select').formSelect();
// });

$(document).ready(function () {
    // when user selects a category from dropdown grab all the product data related to that specific category and render in the product dropdown
    $("#category-select").on("change", event => {
        const catToSearch = event.target.value;
        $.get(`/rec/grablist/${catToSearch}`).then(data => {
            // console.log(data);
            $('#product-one').empty();
            $('#product-two').empty();
            $('#product-three').empty();
            $("#product-one").append("<option>----------</option>")
            $("#product-one").append("<option id='create1'>Create Product</option>")
            $("#product-two").append("<option>----------</option>")
            $("#product-two").append("<option id='create2'>Create Product</option>")
            $("#product-three").append("<option>----------</option>")
            $("#product-three").append("<option id='create3'>Create Product</option>")
            data.forEach(product => {
                const prodOption = $(`<option name=${product.p_name} value=${product.id}>${product.p_name}</option>`);
                // console.log(prodOption);
                $("#product-one").append(prodOption);
            })
            data.forEach(product => {
                const prodOption = $(`<option name=${product.p_name} value=${product.id}>${product.p_name}</option>`);
                // console.log(prodOption);
                $("#product-two").append(prodOption);
            })
            data.forEach(product => {
                const prodOption = $(`<option name=${product.p_name} value=${product.id}>${product.p_name}</option>`);
                // console.log(prodOption);
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

    $("#product-one").on("change", event => {
        //when user selects "create product" append an input element so user can create new product
        // document.getElementById("create1").value
        let test = event.target.value
        console.log(test)
        if (test = "Create Product") {
            let inputEl = $(`<input type="text" id="newProduct1" placeholder="Enter Product"><button id="btn1">Add Product</button>`)
            $("#createProductOne").prepend(inputEl)
        }

        $("#btn1").on("click", event => {
            event.preventDefault();
            let cat = document.getElementById("category-select").value;
            let p1 = document.getElementById("newProduct1").value;
            let newProd = {
                p_name: p1,
                category: cat
            }

            // Send the POST request.
            $.ajax("/rec/newProd", {
                type: "POST",
                data: newProd
            }).then(
                function () {
                    console.log("created new product");
                    // Reload the page to get the updated list
                    location.reload();
                }
            )
            $("#newProduct1").hide()
            $("#btn1").hide()

        })

    })



    $("#product-two").on("change", event => {
        //when user selects "create product" append an input element so user can create new product
        // document.getElementById("create1").value
        let test = event.target.value
        console.log(test)
        if (test = "Create Product") {
            let inputEl = $(`<input type="text" id="newProduct2" placeholder="Enter Product"><button id="btn2">Add Product</button>`)
            $("#createProductTwo").prepend(inputEl)
        }

        $("#btn2").on("click", event => {
            event.preventDefault();
            let cat = document.getElementById("category-select").value;
            let p1 = document.getElementById("newProduct2").value;
            let newProd = {
                p_name: p1,
                category: cat
            }

            // Send the POST request.
            $.ajax("/rec/newProd", {
                type: "POST",
                data: newProd
            }).then(
                function () {
                    console.log("created new product");
                    // Reload the page to get the updated list
                    location.reload();
                }
            )
            $("#newProduct1").hide()
            $("#btn1").hide()

        })
    })

    $("#product-three").on("change", event => {
        //when user selects "create product" append an input element so user can create new product
        // document.getElementById("create1").value
        let test = event.target.value
        console.log(test)
        if (test = "Create Product") {
            let inputEl = $(`<input type="text" id="newProduct3" placeholder="Enter Product"><button id="btn3">Add Product</button>`)
            $("#createProductThree").prepend(inputEl)
        }

        $("#btn3").on("click", event => {
            event.preventDefault();
            let cat = document.getElementById("category-select").value;
            let p1 = document.getElementById("newProduct3").value;
            let newProd = {
                p_name: p1,
                category: cat
            }

            // Send the POST request.
            $.ajax("/rec/newProd", {
                type: "POST",
                data: newProd
            }).then(
                function () {
                    console.log("created new product");
                    // Reload the page to get the updated list
                    location.reload();
                }
            )
            $("#newProduct1").hide()
            $("#btn1").hide()

        })
    })



    //when user clicks done it will send the data to the endpoint and the route will insert 3 new recommendations
    $("#recDone").click(function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log(recUrl);
        let listid = $("#category-select").val().trim();
        let productOneId = $("#product-one").val().trim();
        let commentOne = document.getElementById("comment-one").value;
        //let widgetOne = document.getElementById("widgetOne").url;
        // shouldn't widgetOne reference the result URL returned?
        let productTwoId = $("#product-two").val().trim();
        let commentTwo = document.getElementById("comment-two").value;
        let productThreeId = $("#product-three").val().trim();
        let commentThree = document.getElementById("comment-three").value;


        console.log(listid);
        console.log(productOneId);
        console.log(commentOne);
        console.log (widgetOne);
        console.log(productTwoId);
        console.log(commentTwo);
        console.log(productThreeId);
        console.log(commentThree);


        let recOne = {
            // ListId: $("#category-select").val().trim(),
            ProductId: $("#product-one").val().trim(),
            body: document.getElementById("comment-one").value,
            rec_img: recUrl
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
                recOne: recOne,
                recTwo: recTwo,
                recThree: recThree,
                category: $("#category-select").val().trim()
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

