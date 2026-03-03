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
    }); 
  }
});