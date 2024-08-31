function closeTab() {
    window.close(); // Note: This only works if the tab was opened via script
}

function addComment() {
    var input = document.querySelector('.chat-input input');
    var message = input.value;
    var chatMessages = document.querySelector('.chat-messages');
    if (message.trim() !== '') {
        var p = document.createElement('p');
        p.innerHTML = `New User: ${message} <button class="flag">Flag</button>`;
        var div = document.createElement('div');
        div.classList.add('message');
        div.appendChild(p);
        chatMessages.prepend(document.createElement('hr')); // Adds a separator before the new message
        chatMessages.prepend(div); // Adds the message to the top
        input.value = ''; // Clear input after adding
    } else {
        alert('Please enter a message!');
    }
}

function postComment() {
    var input = document.querySelector('.post-comment-area textarea');
    var message = input.value;
    var commentsList = document.querySelector('.comments-list');
    if (message.trim() !== '') {
        var commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <img src="usericon.png" alt="User Icon" class="user-icon">
            <div class="comment-content">
                <p><strong>New User:</strong> ${message}</p>
                <span>Just now</span>
            </div>
        `;
        commentsList.appendChild(commentDiv);
        input.value = ''; // Clear the textarea after posting
    } else {
        alert('Please enter a comment.');
    }
}

document.querySelectorAll('.icon-container').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.icon-container').forEach(innerItem => {
            innerItem.classList.remove('selected'); // Remove 'selected' from all tabs
        });
        item.classList.add('selected'); // Add 'selected' to the clicked tab
    });
});
