document.addEventListener('DOMContentLoaded', function () {
  const hintBtn = document.getElementById('button');
  const startBtn = document.getElementById('start');
  const output = document.getElementById('output');

  if (!output) return; // nothing to do without output element

  if (hintBtn) {
    hintBtn.addEventListener('click', function () {
      output.textContent ='Maybe organizing the books can help.';
    });
  }

  if (startBtn) {
    startBtn.addEventListener('click', function () {
      output.textContent = "Let's get started!";
      let objectToHide = document.getElementById('room-title2971')
      objectToHide.style.display = 'none';
      let storyToHide = document.getElementById('library-start-story');
      storyToHide.style.display = 'none';
      let buttonToHide = document.getElementById('start')
      buttonToHide.style.display = 'none';
      let TextToHide = document.getElementById('horror-shelf')
      TextToHide.style.display = 'block';
      myElement = document.getElementById('fantasy-shelf');   
      myElement.style.display = 'block';   
      myElement = document.getElementById('action-shelf');
      myElement.style.display = 'block';
      myElement = document.getElementById('non-fiction-shelf');
      myElement.style.display = 'block';
    }); 
  }
});
if (XBtn)
    XBtn.addEventListener('click', function () {
      output.textContent = "Exiting...";
 });
    // Play and loop audio
      const audio = document.getElementById('background-audio');
      if (audio) {
        audio.play().catch(err => console.error('Error playing audio:', err));
      }
    }); 