class Post {
    constructor (userId, id, title, body) {
        this.userId = userId,
        this.id = id,
        this.title = title,
        this.body = body 
    }
    set_userId(userId) {
        this.userId = userId
    }
    set_id(id) {
        this.id = id
    }
    set_title(title) {
        this.title = title
    }
    set_body(body) {
        this.body = body
    }

}
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(list => list.json())
        .then(data => {
        console.log(JSON.stringify(data));

    const post = new Post(data.userId, data.id, data.title, data.body);
 
    const replyDiv = document.getElementById("reply");
    replyDiv.innerHTML = `
        <p>UserId: ${post.userId}</p>
        <p>Id: ${post.id}</p>
        <p>Title: ${post.title}</p>
        <p>Body: ${post.body}</p>
    `;
})

.catch(error => {
    console.error("An error occurred:", error);
});    
