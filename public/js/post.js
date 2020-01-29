let key = localStorage.getItem('key')
$.get("/api/users/find/" + key, function(data){
    if(!data || !data.length){
        location.href = "/"
    } else {
        document.getElementById("user").textContent = data[0].user
        document.getElementById("welcomeUserFeed").textContent = data[0].user
    }
})

$(document).ready(function() {
    document.getElementById("feed").addEventListener('click', function(){
        location.href = "/feed"
    })

    $.get("/api/usersPosts/find/" + key, function(data){
        postsRE = data
        initializeRows()
    })    

    document.getElementById("newPost").addEventListener('click', function(){
        document.getElementById("postToCreate").style.display = "block"
        document.getElementById("history").style.display = "none"
    })

    let postsRE;
    let history = document.getElementById("history")
    document.getElementById("historyPost").addEventListener('click', function(){
        document.getElementById("postToCreate").style.display = "none"
        history.style.display = "block"
        while(history.firstChild){
            history.removeChild(history.firstChild);
        }
        $.get("/api/usersPosts/find/" + key, function(data){
            postsRE = data
            initializeRows()
        })       
    })
    function initializeRows() {
        var postsToAdd = [];
        for (var i = 0; i < postsRE.length; i++) {
          postsToAdd.push(createNewPost(postsRE[i]));
        }
        history.append(postsToAdd);
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
        
        //let del = document.createElement("button")
        //del.value = post.id
        //del.className = "delete"
        //del.textContent = "X"
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
    /*let deletePost = document.getElementsByClassName('delete');
    for(var i = 0; i < deletePost.length; i++){
        deletePost[i].addEventListener('click', function(){
            console.log("sd")
        })
    }*/
     

    
    document.getElementById("submit").addEventListener('click', function(){

        $.get("/api/users/find/" + key, function(data){
            name = data[0].user
            let userPost = {
                user: data[0].user,
                code: key,
                activity: document.getElementById("activity").value,
                message: document.getElementById("message").value
            }
            runPost(userPost)
        })
        
    })
    function runPost(value){
        $.post("/api/usersPosts/new", value)
        document.getElementById("activity").value = ""
        document.getElementById("message").value = ""
    }

    document.getElementById("logout").addEventListener('click', function(){
        localStorage.clear();
        location.href = "/"
    })

})