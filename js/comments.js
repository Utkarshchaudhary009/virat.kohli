// Load comments from localStorage when the page loads
window.onload = function () {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentsList = document.getElementById('comments-list');
  
    // Display all saved comments with timestamps
    savedComments.forEach((commentObj) => {
      const commentItem = document.createElement('li');
      commentItem.innerHTML = `<strong>${commentObj.text}</strong> <span class="timestamp">(${commentObj.timestamp})</span>`;
      commentsList.appendChild(commentItem);
    });
  };
  
  // Handle posting a new comment
  document.getElementById('submit-comment').addEventListener('click', function () {
    const commentBox = document.getElementById('comment-box');
    const commentText = commentBox.value.trim();
    const commentsList = document.getElementById('comments-list');
  
    if (commentText) {
      const currentTimestamp = new Date().toLocaleString();
  
      // Create a new comment element
      const commentItem = document.createElement('li');
      commentItem.innerHTML = `<strong>${commentText}</strong> <span class="timestamp">(${currentTimestamp})</span>`;
  
      // Add the new comment to the list
      commentsList.appendChild(commentItem);
  
      // Save the comment to localStorage
      const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
      savedComments.push({ text: commentText, timestamp: currentTimestamp });
      localStorage.setItem('comments', JSON.stringify(savedComments));
  
      // Clear the comment box
      commentBox.value = '';
    } else {
      alert('Please write something before posting your comment!');
    }
  });
  