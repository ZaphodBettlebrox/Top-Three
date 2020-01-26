$(document).ready(function () {
    //if user selected x category then display all the list in this specific category
    $(".category").on("click", event => {
        const userCatToSearch = event.target.value;
        const catImg = event.target.src
        // console.log(userCatToSearch)
        console.log(catImg)
        console.log(`userRec/grabuser/${userCatToSearch}`)
        $.get(`userRec/grabuser/${userCatToSearch}`).then(data => {
            // console.log(data)

            //stores data while user is browsing can hold on  to the data page to page
            sessionStorage.setItem("allUserData", JSON.stringify(data));
            sessionStorage.setItem("catImage", catImg)

            //redirects to all user rec page
            location.href = "/alluserrec"

        })
    })

    //store data by session and use it to display on the all user rec page
    console.log(JSON.parse(sessionStorage.getItem("allUserData")));
    console.log(sessionStorage.getItem("catImage"))
    let allUserData = JSON.parse(sessionStorage.getItem("allUserData"))
    let categoryImage = sessionStorage.getItem("catImage")
    if (categoryImage != null && allUserData != null) {
        //for loop to append all the data in allUserData array
        allUserData.forEach(data => {
            const displayUsers = $(`<div class="catContainer col s12"><div class="displayUserinfo" value="${data.id}"><div class="userinfobox"><h4>${data.User.username}</h4><img class="responsive_img allUserImg" src="${data.User.profileurl}" alt=""></div>`)
            $(".container").append(displayUsers)
            const catImg = (`<h4 class="centered">${data.category}</h4><img class="chosenimg" src = "${categoryImage}">
            </div></div>`)
            $(".userinfobox").append(catImg)
        })
    }


    $(".displayUserinfo").on("click", event => {
        let userName 
        let userImg
        let listId

        console.log(event.target.value)
    })



});