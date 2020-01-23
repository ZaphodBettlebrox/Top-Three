


$(document).ready(function () {
    // $('select').formSelect();
    $("#category-select").on("change",event=>{
        const catToSearch = event.target.value;
        $.get(`/rec/grablist/${catToSearch}`).then(data=>{
            console.log(data);
            $('#product-one').empty();
            $('#product-two').empty();
            $('#product-three').empty();
            $("#product-one").append("<option>----------</option>")
            $("#product-two").append("<option>----------</option>")
            $("#product-three").append("<option>----------</option>")
            data.forEach(product=>{
                const prodOption = $(`<option value=${product.id}>${product.p_name}</option>`);
                console.log(prodOption);
                $("#product-one").append(prodOption);
            })
            data.forEach(product=>{
                const prodOption = $(`<option value=${product.id}>${product.p_name}</option>`);
                console.log(prodOption);
                $("#product-two").append(prodOption);
            })
            data.forEach(product=>{
                const prodOption = $(`<option value=${product.id}>${product.p_name}</option>`);
                console.log(prodOption);
                $("#product-three").append(prodOption);
            })
        })
    })

});



  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });
      

