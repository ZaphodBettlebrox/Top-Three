
$(document).ready(function () {
    //if user selected x category then display all the list in this specific category
    $(".category").on("click", event => {
        const userCatToSearch = event.target.value;
        const catImg = document.querySelector('#catImg').src
        console.log(userCatToSearch)
        console.log(catImg)
        console.log(`userRec/grabuser/${userCatToSearch}`)
        $.get(`userRec/grabuser/${userCatToSearch}`).then(data => {
            console.log(data)
          
        
            sessionStorage.setItem("allUserData", JSON.stringify(data));
            sessionStorage.setItem("catImage", catImg)

            location.href="/alluserrec"

        })


    })


    console.log(JSON.parse(sessionStorage.getItem("allUserData")));
    console.log(sessionStorage.getItem("catImage"))
    let allUserData = JSON.parse(sessionStorage.getItem("allUserData"))
    let categoryImage = sessionStorage.getItem("catImage")
    if (categoryImage != null && allUserData != null){
        const catImg = (`<img src = "${categoryImage}">`)
        $("#userinfobox").append(catImg)
    }
});