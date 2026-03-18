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
      output.textContent = "In the magical land of Eldoria, dragons fly across the skies and forests whisper ancient secrets. A young farm boy named Lorian discovers that he has a mysterious power when a glowing crystal appears in his hands during a storm. Soon he learns that the crystal is one of the last magical relics that keeps darkness from spreading across the kingdom. An evil sorcerer named Malveron is searching for the crystal to gain unlimited power. If he finds it, he could cover the world in shadow and rule over every kingdom. With the help of a brave elf archer, a clever dwarf inventor, and a talking fox, Lorian begins a dangerous journey across enchanted mountains, hidden cities, and monster-filled caves. Along the way, he learns how to use his magic and discovers that courage and friendship can be stronger than any spell. In the final battle at the ancient castle of Eldoria, Lorian must decide whether he is brave enough to face the sorcerer and protect the magical world forever. (2)";
    });
  }

  if (book2) {
    book2.addEventListener("click", () => {
      output.textContent = "With this book you are going to explore the real oceans of Earth and explain why they are important for life on our planet. It describes how oceans formed millions of years ago, how ocean currents move water around the globe, and how marine animals—from tiny plankton to giant whales—survive in different ocean environments. The book also explains how scientists study the ocean using research ships, satellites, and deep-sea robots. Readers learn about coral reefs, deep-sea trenches, and the role oceans play in controlling Earth’s climate. In addition, the book discusses real environmental challenges such as pollution, overfishing, and climate change. It shows how these problems affect ocean life and what people around the world are doing to protect marine ecosystems. Through clear explanations and real scientific facts, the book helps readers understand how the oceans work and why protecting them is important for the future of our planet. (3)";
    });
  }

  if (book3) {
    book3.addEventListener("click", () => {
      output.textContent = "When a dangerous criminal group steals a powerful new weapon from a secret military lab, former special agent Jake Carter is pulled back into action. The group plans to sell the weapon to the highest bidder, which could put thousands of lives at risk. Jake teams up with a skilled hacker and a fearless pilot to track the criminals across several countries. Their mission leads them through high-speed car chases, intense shootouts, and daring escapes from enemy hideouts. As the clock ticks down, Jake must rely on his training, quick thinking, and courage to stop the criminals before the weapon is used. In a final showdown at an abandoned fortress, Jake faces the leader of the group in a fight that will decide the fate of many innocent people. Filled with danger, fast-paced battles, and heroic risks, the story follows one man’s fight to stop a global threat before it’s too late. (4)";
    });
  }

  if (book4) {
    book4.addEventListener("click", () => {
      output.textContent = "After moving to a small, quiet town, sixteen-year-old Mara begins hearing strange noises in her new home. Every night at exactly 3:13 a.m., footsteps echo through the hallway—even though everyone in the house is asleep. At first, Mara thinks the old house is just settling. But then doors start opening by themselves, cold whispers come from the walls, and shadows move where nothing should be. When Mara searches the town’s history, she learns something terrifying: years ago, a family disappeared in the same house, and no one ever found out why. Soon Mara realizes the house is not empty. Something is still there, watching, waiting, and growing stronger each night. As the haunting becomes more violent, Mara must uncover the truth about what happened in the house before the same dark force takes her too. But the deeper she digs, the more she begins to fear that some secrets were meant to stay buried. (1)";
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
      output.textContent = 'Numbers of the shelves are order, numbers in the end of the books are parts of the password. Orgonise books by genres';
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
      if (passwordInput.value === "2431") {
        output.textContent = "Congrats! A new message appears on the computer screen: report to the Nurses Office. Under the text is one letter: E. Could this be important later? On the screen below the message all sorts of information is displayed about rats and the effect of their bites. This must be a way to find out about the rat's bite! Maybe there will be a solution. Slowly you open the door and creep down the hallway, making sure to avoid being loud in case you disturb the rat. !";// place for change to another escape room
      } else {
        output.textContent = "Wrong code!";// place for screamer
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