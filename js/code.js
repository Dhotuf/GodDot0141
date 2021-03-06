window.addEventListener('DOMContentLoaded', function() {
    const loading_p = document.getElementById('text-loading');
    const posts_div = document.getElementById('posts');
    fetch('https://goddot.kr/posts.json', {
        method: 'GET',
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        announcement_length = data['posts'].length;
        announcement_json = data;
    });
    setTimeout(() => {
        loading_p.parentNode.removeChild(loading_p);
        let i = announcement_length;
        while (i > 0) {
            // Some variables
            const new_post = document.createElement('div');
            const new_post_title = document.createElement('a');
            const new_post_description = document.createElement('p');
            const new_post_image = document.createElement('div');
            // Post Div
            new_post.setAttribute('class', 'div-post');
            new_post.setAttribute('id', 'div-post-' + i.toString());
            new_post.innerHTML = "";
            // Post's title, desc, img
            new_post_title.setAttribute('class', 'post-title');
            new_post_title.setAttribute('href', announcement_json['posts'][i - 1]['linkUrl'].toString());
            new_post_title.setAttribute('target', '_self');
            new_post_title.innerHTML = announcement_json['posts'][i - 1]['title'].toString();
            new_post_description.setAttribute('class', 'post-desc');
            new_post_description.innerHTML = announcement_json['posts'][i - 1]['description'].toString();
            new_post_image.setAttribute('class', 'post-img');
            new_post_image.setAttribute('style', 'background-image:url(\'' + announcement_json['posts'][i - 1]['image'].toString() +'\');');
            new_post_image.innerHTML = "";
            // Add
            posts_div.appendChild(new_post);
            new_post.appendChild(new_post_image);
            new_post.appendChild(new_post_title);
            new_post.appendChild(new_post_description);
            i--;
        }
        i = announcement_length % 4;
        while (i > 0) {
            const new_empty_post = document.createElement('div');
            new_empty_post.setAttribute('class', 'div-post-empty');
            new_empty_post.innerHTML = "";
            posts_div.appendChild(new_empty_post);
            i--;
        }
    }, 1000); // Loading Delay(Default: 1000ms)
});