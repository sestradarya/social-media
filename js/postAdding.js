const postsField = document.querySelector(".feeds");

const createPostInput = document.getElementById("create-post");
const createPostBtn = document.getElementById("create-post-btn");

async function getPost() {
  options = {
    method: "GET",
    headers: {
      "app-id": "63b96e7a1953c607f2965a7f",
    },
  };
  const result = await fetch(
    "https://dummyapi.io/data/v1/post?limit=30",
    options
  );
  const data = await result.json();
  return data;
}

async function renderPosts() {
  const data = await getPost();
  const posts = await data.data;

  posts.forEach((post) => {
    const { id, image, likes, owner, text, publishDate } = post;

    postsField.innerHTML += `
                  <div class="feed" id=${id}>
                      <div class="head">
                          <div class="profile-photo">
                              <img src=${owner.picture} alt="" />
                          </div>
                          <div class="info">
                              <h3>${owner.firstName} ${owner.lastName}</h3>
                              <small>${publishDate}</small>
                          </div>
                          <span class="edit">
                              <i class="fa-solid fa-ellipsis"></i>
                          </span>
                      </div>
                      <div class="photo">
                          <img src=${image} alt="" />
                      </div>
                      <div class="action-buttons">
                          <div class="interaction-buttons">
                              <span><i class="fa-regular fa-heart"></i></span>
                              <span><i class="fa-regular fa-comment"></i></span>
                              <span><i class="fa-solid fa-share-nodes"></i></span>
                          </div>
                          <div class="bookmark">
                              <span><i class="fa-regular fa-bookmark"></i></span>
                          </div>
                      </div>
                      <div class="likes">
                          <b>${likes} likes</b>
                      </div>
                      <div class="captions">
                          <p>
                              <b>${owner.firstName} ${owner.lastName}</b>  ${text}
                              <span class="hashtag">#billionair</span>
                          </p>
                      </div>
                      <div class="comments text-muted">View all 112 comments</div>
                  </div>
              `;
  });
}

renderPosts();

createPostBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (createPostInput.value != "") {
    const prevPosts = postsField.innerHTML;

    postsField.innerHTML = `
    <div class="feed">
    <div class="head">
        <div class="profile-photo">
            <img src='./me.jpg' alt="" />
        </div>
        <div class="info">
            <h3>Darina Nguen</h3>
            <small>just now</small>
        </div>
        <span class="edit">
            <i class="fa-solid fa-ellipsis"></i>
        </span>
    </div>
    <div class="text">
        <p>${createPostInput.value}</p>
    </div>
    <div class="action-buttons">
        <div class="interaction-buttons">
            <span><i class="fa-regular fa-heart"></i></span>
            <span><i class="fa-regular fa-comment"></i></span>
            <span><i class="fa-solid fa-share-nodes"></i></span>
        </div>
        <div class="bookmark">
            <span><i class="fa-regular fa-bookmark"></i></span>
        </div>
    </div>
    <div class="likes">
        <b>0 likes</b>
    </div>
    <div class="captions">
        <p>
            <b>Nguen Darina</b>
            <span class="hashtag"></span>
        </p>
    </div>
    <div class="comments text-muted">View all 0 comments</div>
</div>
    `;

    postsField.innerHTML += prevPosts;
    createPostInput.value = "";
  }
});
