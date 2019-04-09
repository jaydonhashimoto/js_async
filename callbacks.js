/**
 * A callback function is a function passed into 
 * another function as an argument, which is then 
 * invoked inside the outer function to complete 
 * some kind of routine or action.
 * https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 */

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

/**
 * mimic a POST request with a 1 sec delay
 */
function getPosts() {
    setTimeout(() => {
        let output = '';
        //iterate through posts and add titles to list
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        //add list to html
        document.body.innerHTML = output;
    }, 1000);
}

/**
 * mimic create post with 2 sec delay
 * 
 * takes in callback func which will be called 
 * right after post gets added
 * @param {*} post 
 * @param {*} callback 
 */
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);