
    const gifElement = document.getElementById('interactive-gif');

    // Define GIF source URLs
    const hoverGif = 'CSS/Assets/thesix_in.gif';
    const unhoverGif = 'CSS/Assets/thesix_out.gif';

    new Image().src = hoverGif;

    // Play hover GIF from frame 1
    gifElement.addEventListener('mouseenter', () => {
      gifElement.src = `${hoverGif}?t=${Date.now()}`;
      });

    // Play unhover GIF from frame 1
    gifElement.addEventListener('mouseleave', () => {
      gifElement.src = `${unhoverGif}?t=${Date.now()}`;
    });









  
