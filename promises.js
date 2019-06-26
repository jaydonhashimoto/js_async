/**
 * The Promise object represents the eventual completion 
 * (or failure) of an asynchronous operation, and its resulting value.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 * promises are cleaner callbacks
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
 * returns a promise which takes in a callback
 * with 2 params
 * @param {*} post  
 */
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            //error checking
            const error = false;
            if (!error) {
                //do task
                resolve();
            } else {
                //do when task fails
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

/**********************************Create and Get Posts************************************/
createPost({ title: 'Post Three', body: 'This is post three' })
    .then(getPosts)
    .catch(err => console.log(err));




/**********************************Async / Await************************************/
/**
 * Async / Await
 * The async function declaration defines an asynchronous function,
 * which returns an AsyncFunction object. An asynchronous function
 * is a function which operates asynchronously via the event loop,
 * using an implicit Promise to return its result. But the syntax
 * and structure of your code using async functions is much more
 * like using standard synchronous functions.
 *
 * An async function can contain an await expression that pauses
 * the execution of the async function and waits for the passed
 * Promise's resolution, and then resumes the async function's
 * execution and returns the resolved value.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * wait for create post before calling getPosts
 */
async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three' });
    getPosts();
}
init();




/**********************************Async / Await with fetch************************************/
/**
 * Async / Await with fetch
 * get users, convert to json, log
 */
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
fetchUsers();




/**********************************Promise.all************************************/
/**
 * The Promise.all() method returns a single Promise that resolves when all of the
 * promises passed as an iterable have resolved or when the iterable contains no promises.
 * It rejects with the reason of the first promise that rejects.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 */
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'Goodbye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));

