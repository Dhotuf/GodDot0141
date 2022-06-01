window.addEventListener('DOMContentLoaded', function() {
    const loading_p = document.getElementById('text-loading');
    const posts_div = document.getElementById('posts');
    setTimeout(() => {
        loading_p.parentNode.removeChild(loading_p);
        let i = 0;
        while (i < 10) {
            const new_post = document.createElement('div');
            new_post.setAttribute('class', 'div-post');
            new_post.setAttribute('id', i.toString());
            new_post.innerHTML = "추가된 p태그";
            posts_div.appendChild(new_post);
            i++;
        }
    }, 1000);
});