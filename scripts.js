let savedTweets = [];

document.addEventListener('DOMContentLoaded', () => {
    displayTweets(savedTweets);
});

function postTweet() {
    const tweetInput = document.getElementById('tweetInput');
    const tweetText = tweetInput.value.trim();

    if (tweetText !== '') {
        const newTweet = {
            text: tweetText,
            likes: 0,
            comments: [],
        };

        savedTweets.push(newTweet);

        displayTweets(savedTweets);

        tweetInput.value = '';
    }
}

function displayTweets(tweets) {
    const tweetContainer = document.getElementById('tweetContainer');
    tweetContainer.innerHTML = '';

    tweets.forEach((tweet, index) => {
        const tweetCard = document.createElement('div');
        tweetCard.classList.add('tweetCard');

        const tweetText = document.createElement('p');
        tweetText.textContent = tweet.text;
        tweetCard.appendChild(tweetText);

        const likeButton = document.createElement('span');
        likeButton.classList.add('likeButton');
        likeButton.textContent = `❤ ${tweet.likes}`;
        likeButton.addEventListener('click', () => likeTweet(index));
        tweetCard.appendChild(likeButton);

        const deleteButton = document.createElement('span');
        deleteButton.classList.add('deleteButton');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTweet(index));
        tweetCard.appendChild(deleteButton);

        tweetContainer.appendChild(tweetCard);
    });
}

function likeTweet(index) {
    savedTweets[index].likes++;

    // Display tweets
    displayTweets(savedTweets);
}

function deleteTweet(index) {
    savedTweets.splice(index, 1);

    // Display tweets
    displayTweets(savedTweets);
}
