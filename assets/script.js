"use strict"

/* <tr>
<th ></th>
<td></td>
<td></td>
</tr> */


async function getAllPost() {
    let tBody = document.querySelector("tbody");
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    let post = "";
    posts.forEach(user => {
        post += `<tr>
        <td>${user.id}</td>
        <td>${user.title}</td>
        <td>${user.body}</td>
        </tr> `
    });

    tBody.innerHTML = post;

}
getAllPost();