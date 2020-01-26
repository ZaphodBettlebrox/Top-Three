
$(document).ready(function () {
    //if user selected x category then display all the list in this specific category
    $(".category").on("click", event => {
        const userCatToSearch = event.target.value;
        const catImg = document.querySelector('#catImg').src
        console.log(userCatToSearch)
        console.log(catImg)
        // $.get(`/useRec/grabuser/${userCatToSearch}`).then(data => {
        //     console.log(data)




        // })


    })

});