document.addEventListener('mousemove', function(e) {
    var cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.clientX + 'px'; /* Set the horizontal position of the cursor */
    cursor.style.top = e.clientY + 'px'; /* Set the vertical position of the cursor */
});

