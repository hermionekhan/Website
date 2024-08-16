document.querySelectorAll('.menu-item a').forEach(link => {
    link.addEventListener('mouseover', function() {
        const imagePreview = document.getElementById('image-preview');
        const imagePreviewContainer = document.getElementById('image-preview-container');
        
        // Retrieve the value of the data-image attribute from the link
        const imagePath = this.getAttribute('data-image');
        imagePreview.src = imagePath;

        // Temporarily display the image preview container to get its width
        imagePreviewContainer.style.opacity = '0'; // Ensure it's hidden initially
        imagePreviewContainer.style.visibility = 'hidden'; // Ensure it's not clickable initially
        imagePreviewContainer.style.display = 'block'; // Ensure it takes space for width calculation

        const containerWidth = imagePreviewContainer.offsetWidth;

        // Get the dimensions and position of the link
        const rect = this.getBoundingClientRect();

        // Center the image preview container horizontally under the link
        imagePreviewContainer.style.left = `${rect.left + (this.offsetWidth / 2) - (containerWidth / 2)}px`;
        imagePreviewContainer.style.top = `${rect.bottom + window.scrollY + 5}px`; // Add 5px for spacing and handle scroll

        // Show the image preview container with fade-in
        imagePreviewContainer.style.opacity = '1';
        imagePreviewContainer.style.visibility = 'visible';
    });

    link.addEventListener('mouseout', function() {
        const imagePreviewContainer = document.getElementById('image-preview-container');
        // Hide the image preview container with fade-out
        imagePreviewContainer.style.opacity = '0';
        imagePreviewContainer.style.visibility = 'hidden';
    });
});







  
