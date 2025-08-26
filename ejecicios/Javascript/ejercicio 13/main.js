const API_URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(API_URL)
//     .then((response) => response.json())
//     .then((posts) => {
//         console.log(posts)
//     })
//     .catch((err) => {
//       throw new Error("Error fetching posts");
//     });

async function getPosts() {
  return new Promise((resolve, reject) => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((posts) => resolve(posts))
      .catch((err) => reject(err));
  });
}

function showPosts(posts, view) {
  posts.forEach((post) => {
    const article = document.createElement("article");
    article.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
    view.appendChild(article);
  });
}

const postsView = document.querySelector(".posts-view");

// getPosts()
//   .then((posts) => {
//     showPosts(posts, postsView)
//   })
//   .catch((err) => console.error(err));`

async function main() {
  const posts = await getPosts();
  showPosts(posts, postsView);
}

main();
