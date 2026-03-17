document.addEventListener('DOMContentLoaded', function () {

  const hintBtn = document.getElementById('button');
  const startBtn = document.getElementById('start');
  const output = document.getElementById('output');

  const book1 = document.getElementById("book-1");
  const book2 = document.getElementById("book-2");
  const book3 = document.getElementById("book-3");
  const book4 = document.getElementById("book-4");

  const laptop = document.getElementById("laptop");
  const exitBtn = document.getElementById("exit");

  const passwordContainer = document.getElementById("password-container");
  const passwordInput = document.getElementById("password-input");
  const submitBtn = document.getElementById("submit-password");

  if (book1) {
    book1.addEventListener("click", () => {
      output.textContent = "Fantasy story... (2)";
    });
  }

  if (book2) {
    book2.addEventListener("click", () => {
      output.textContent = "Non-fiction ocean book... (3)";
    });
  }

  if (book3) {
    book3.addEventListener("click", () => {
      output.textContent = "Action story... (4)";
    });
  }

  if (book4) {
    book4.addEventListener("click", () => {
      output.textContent = "Horror story... (1)";
    });
  }

  if (startBtn) {
    startBtn.addEventListener('click', function () {
      output.textContent = "Let's get started!";

      document.getElementById('room-title2971').style.display = 'none';
      document.getElementById('library-start-story').style.display = 'none';
      startBtn.style.display = 'none';

      document.getElementById('horror-shelf').style.display = 'block';
      document.getElementById('fantasy-shelf').style.display = 'block';
      document.getElementById('action-shelf').style.display = 'block';
      document.getElementById('non-fiction-shelf').style.display = 'block';

      const audio = document.getElementById('background-audio');
      if (audio) audio.play().catch(() => {});
    });
  }

  if (hintBtn) {
    hintBtn.addEventListener('click', () => {
      output.textContent = 'Maybe organizing the books can help.';
    });
  }

  if (laptop) {
    laptop.addEventListener("click", function () {

      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = "black";

      const elementsToHide = [
        "book-1", "book-2", "book-3", "book-4",
        "fantasy-shelf", "action-shelf", "non-fiction-shelf", "horror-shelf",
        "button"
      ];

      elementsToHide.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
      });

      passwordContainer.style.display = "block";
      output.textContent = "Enter Password";
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", function () {
      if (passwordInput.value === "4321") {
        output.textContent = "Access Granted!";
      } else {
        output.textContent = "Wrong code!";
      }
    });
  }

  if (exitBtn) {
    exitBtn.addEventListener("click", function () {

      document.body.style.backgroundImage = "url('background.jpg')";
      document.body.style.backgroundColor = "dodgerblue";

      const elementsToShow = [
        "book-1", "book-2", "book-3", "book-4",
        "fantasy-shelf", "action-shelf", "non-fiction-shelf", "horror-shelf",
        "button"
      ];

      elementsToShow.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "block";
      });

      passwordContainer.style.display = "none";
      output.textContent = "Back in the library.";
    });
  }

});