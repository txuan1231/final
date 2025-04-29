document.addEventListener("DOMContentLoaded", function () {
  Info();
  Salary();
  Skill();
  Game();
});

function Info() {
  const info = document.getElementById("info");
  info.innerHTML = `
    <h2>Bounty Hunter Description</h2>
    <p>Bounty Hunters are private agents who capture fugitives or criminals for a commission or bounty, typically working for a bail bondsman. They are essentially the enforcers of the private bail system, hired to locate, apprehend, and return individuals who have skipped bail or failed to appear in court. </p>
    <img src="CSCimage/crimeSceneCleaner1.jpg" alt="CrimeSceneCleaner" class="img">
    `;
}

function Salary() {
  const salary = document.getElementById("salary");
  salary.innerHTML = `
    <h2>Salary</h2>
    <p>For a single bounty, the hunter usually profits about 10% - 25% amount of the posted bail bond amount. </p>
    `;
}

function Skill() {
  const skill = document.getElementById("skill");
  skill.innerHTML = `
    <h2>Required Skills</h2>
    <ul>
    <li>Invesitgative and Analytical Skills: The ability to locate, observe, and discern factors and pieces of information that help lead you to your bounty.</li>
    <li>Legal Knowledge: Understand the limitations, and liberties of laws, in the county, state, and nation in which you would operate, so that you do not supersede your jurisdiction.</li>
    <li>Interpersonal Communication: communicates job details with clients and other professionals.</li>
    <li>Resourcefulness and Perserverance: Using what is at your disposal at any given moment to be able to acquire your bounty, with the overall stamina in terms of completing the hunt.</li>
    <li>Athleticism: Ability to operate in various conditions in altering severity rates.</li>
    <li>Safety Training: Ensure the hunt is completed in the safest way for all parties involved.</li>
    <li>Flexibility: Adjust hours of operation as needed, as well as managing fincnaces, and you are essentially your own employer.</li>
    <li>Integrity: Ensuring the job is completed with morality, truthfulness, and justice intact.</li>
    </ul>
    `;
}

function Game() {
  const training = document.getElementById("game");
  training.innerHTML = `
    <h2>Bounty Hunter Game</h2>
    <p>"Once you get tangled with the mob, you will forever be a part of the mob. At least they pay a decent salary and all you have to do is clean up after their dirty work, but you know what you’re doing. So clean crime scenes, earn as much money as you can, and get ready for the next mission."</p>
    <ul>
    <li>Platforms: Xbox Cloud Gaming, GeForce Now, Microsoft Windows, Android</li>
    <li>Developers: President Studio, President Studio S.A.</li>
    <li>Initial release date: September 28, 2023</li>
    <li>Genres: Simulation video game, Action game</li>
    <li>Publishers: President Studio, Digital Melody, PlayWay, President Studio S.A.</li>
    </ul>
    <img src="CSCimage/crimeSceneCleaner.jpg" alt="CrimeSceneCleanerGame" class="img">
    `;
}

function content(type) {
  const box = document.getElementById("box");

  let content = "";

  if (type === "advantage") {
    content = `
        <h3>Advantages</h3>
        <ul>
        <li>Entreprenuership</li>
        <li>Personal freedom in decisions over hours and jobs</li>
        <li>Field work that nearly enforces accountability, especially with working out</li>
        </ul>
        `;
  } else if (type === "disadvantage") {
    content = `
        <h3>Disadvantages</h3>
        <ul>
        <li>Life or death danger risks</li>
        <li>Monetary instability</li>
        </ul>
        `;
  }

  box.innerHTML = content;
  box.classList.remove("hidden");
}
