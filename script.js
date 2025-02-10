function searchPosts() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        let title = post.querySelector("h2 a").textContent.toLowerCase();
        let excerpt = post.querySelector(".excerpt").textContent.toLowerCase();
        
        if (title.includes(input) || excerpt.includes(input)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}
