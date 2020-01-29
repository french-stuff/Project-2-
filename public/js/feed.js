let key = localStorage.getItem('key')
$.get("/api/users/find/" + key, function(data){
    if(!data || !data.length){
        location.href = "/"
    } else {
        document.getElementById("user").textContent = data[0].user
        document.getElementById("welcomeUser").textContent = data[0].user
    }
})
$(document).ready(function() {
    document.getElementById("post").addEventListener('click', function(){
        location.href = "/post"
    })

    let postsRE;
    $.get("/api/usersPosts/all", function(data){
        postsRE = data
        initializeRows()
    })
    function initializeRows() {
        var postsToAdd = [];
        for (var i = 0; i < postsRE.length; i++) {
          postsToAdd.push(createNewPost(postsRE[i]));
        }
        feedContainer.append(postsToAdd);
        
    }

    function createNewPost(post){
        let userT = document.createTextNode(post.user)
        let activityT = document.createTextNode(post.activity)
        let dateCut = post.createdAt.substr(0, 10);
        let timeCut = post.createdAt.substr(11, 5)
        let dateT = document.createTextNode(dateCut + " / " + timeCut)
        let messageT = document.createTextNode(post.message)

        
        let user = document.createElement("div")
        let date = document.createElement("div")
        let activity = document.createElement("div")
        let message = document.createElement("p")
        let postCont = document.createElement("div")


        user.className = "user"
        activity.id = "activity"
        activity.className = "activity"
        date.className = "date"
        message.className = "message"
        postCont.className = "postCont"
        postCont.id = "postCont"
        
        user.append(userT)
        activity.append("Activity: ")
        activity.append(activityT)
        date.append(dateT)
        message.append("Status: ")
        message.append(messageT)

        postCont.append(user)
        postCont.append(activity)
        postCont.append(date)
        postCont.append(message)

        feedContainer.prepend(postCont)
        document.getElementById("activity").style.marginLeft = "50px";
        document.getElementById("postCont").style.backgroundColor = "rgba(0, 0, 0, 0.5)";

    }


    document.getElementById("logout").addEventListener('click', function(){
        localStorage.clear();
        location.href = "/"
    })
    

})


    
