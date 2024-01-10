const posts = [];

function createPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(post);
            console.log(`Post created:${post}`);
            resolve(post);
        }, 1000);
    });
}

function updateLastUserActivityTime(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const lastActivityTime = new Date().toISOString();
            console.log(`User's last activity time updated:${lastActivityTime}`);
            resolve(lastActivityTime);
        }, 1000);
    });
}

async function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                console.log(`Post deleted:${deletedPost}`);
                resolve();
            } else {
                reject(new Error("No posts to delete"));
            }
        }, 1000);
    });
}

async function main() {
    const userId = 1;
    const postContext = ["Post1","Post2","Post3"];

    try {
        const createdPosts = await Promise.all(postContext.map(createPost));
        const lastActivityTime = await updateLastUserActivityTime(userId);

        console.log(`Posts:[${createdPosts.join(', ')}]`);
        console.log(`Last Activity Time:${lastActivityTime}`);

        await deleteLastPost();
        console.log(`Remaining Posts:[${posts.join(',')}]`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

main();
