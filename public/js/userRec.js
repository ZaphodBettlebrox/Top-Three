$(document).ready(function () {
    //if user selected x category then display all the list in this specific category
    $(".category").on("click", event => {
        const userCatToSearch = event.target.value;
        const catImg = event.target.src
        // console.log(userCatToSearch)
        // console.log(catImg)
        // console.log(`userRec/grabuser/${userCatToSearch}`)
        $.get(`userRec/grabuser/${userCatToSearch}`).then(data => {
            console.log(data)

            //stores data while user is browsing can hold on  to the data page to page
            sessionStorage.setItem("allUserData", JSON.stringify(data));
            sessionStorage.setItem("catImage", catImg)

            //redirects to all user rec page
            location.href = "/alluserrec"

        })
    })

    //store data by session and use it to display on the all user rec page
    // console.log(JSON.parse(sessionStorage.getItem("allUserData")));
    // console.log(sessionStorage.getItem("catImage"))
    let allUserData = JSON.parse(sessionStorage.getItem("allUserData"))
    let categoryImage = sessionStorage.getItem("catImage")


    if (categoryImage != null && allUserData != null) {
        //for loop to append all the data in allUserData array

        allUserData.forEach(data => {
            const displayAllUsers =
                $(`<div class="catContainer col s12 eachRec" >
            <div class="userhandle">
            <h4 id="${data.User.username}">${data.User.username}</h4>
            <img class="responsive_img allUserImg" src="${data.User.profileurl}" alt="">
            <button class="viewRec" value="${data.id}">View ${data.User.username}'s Recommendation</button>
            </div>
            <div class="userinfobox">
            <img class="chosenimg" src = "${categoryImage}"></div>
            </div>
            </div>`)
            $(".userRecContainer").append(displayAllUsers)
        })

        // console.log(allUserData)
        let catTitle = `<h1 class="catTitle">${allUserData[0].category}</h1>`
        $(".Title").prepend(catTitle)
    }

    $(".viewRec").on("click", event => {
        // let userName 
        // let userImg
        let listId = event.target.value;
        console.log(listId)

        $.get(`userrec/grablistproduct/${listId}`).then(data => {
            console.log(data)

            // //stores data while user is browsing can hold on  to the data page to page
            sessionStorage.setItem("indUser", JSON.stringify(data));


            // //redirects to all user rec page
            location.href = "/userRec"
        })
    })

    let indUser = JSON.parse(sessionStorage.getItem("indUser"))


    if (indUser != null) {
        // console.log(indUser)
        const userN = (indUser.User.username)
        const profUrl = (indUser.User.profileurl)
        // console.log(userN)
        // console.log(profUrl)


        const displayUserRec = `<div class="carousel-item white-text" href="#one!">
            <div id="userproductone">
                <h2 id="productonetitle">${indUser.UserRecs[0].Product.p_name}</h2>
                <p id="productonedes" class="white-text c">${indUser.UserRecs[0].body}</p>
            </div>
            <img class="responsive-img userimgbox" src="${indUser.UserRecs[0].rec_img}">
            </img>
        </div>
        <div class="carousel-item white-text" href="#two!">
            <div id="userproducttwo">
                <h2 id="producttwotitle">${indUser.UserRecs[1].Product.p_name}</h2>
                <p id="producttwodesc" class="white-text ">${indUser.UserRecs[1].body}</p>
            </div>
            <img class="responsive-img userimgbox" src="${indUser.UserRecs[1].rec_img}">
            </img>
        </div>
        <div class="carousel-item white-text" href="#three!">
            <div id="userproductthree">
                <h2 id="productthreetitle">${indUser.UserRecs[2].Product.p_name}</h2>
                <p id="productthreedesc" class="white-text">${indUser.UserRecs[2].body}</p>
            </div>
            <img class="responsive-img userimgbox" src="${indUser.UserRecs[2].rec_img}">
            </img>
        </div>`
        $(".userreccarousel").append(displayUserRec)

        const displayUserHandle = `<div id="userinfo">
        <p id="userN">${userN}</p>
        <img class="allUserImg" src="${profUrl}" alt="">
       
    </div>`

    $(".userHandle").append(displayUserHandle)


    }


})