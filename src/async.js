// you can paste this directly into DevTools' console to see it in action.
// It will tell you undefined but ignore it.
// Then just call simpleAsyncFunction() still in the console window.
// Voila!

const simpleAsyncFunction = async () => {
    try {
        const usersResponse = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );

        const users = await usersResponse.json();
        const xUser = users[0]; // first user for example. would need to check size of returned collection.

        console.log(xUser); // lets have a look...

        const postsResponse = await fetch (
            'https://jsonplaceholder.typicode.com/posts?userId=' + xUser.id
        );

        const posts = await postsResponse.json();

        console.log(posts); // see what xUser has written
    } catch (err) {
        console.log('Oops! Something unexpected happened.');
    }
};

// to see the error handling fire, try a typo in the jsonplaceholder URL.