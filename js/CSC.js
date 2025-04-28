document.addEventListener('DOMContentLoaded', function(){
    Info();
    Salary();
    Skill();
    Game();
})

function Info(){
    const info = document.getElementById('info');
    info.innerHTML=`
    <h2>Crime Scene Cleaner Description</h2>
    <p>A crime scene cleaner specializes in sanitizing and cleaning areas affected by crime or traumatic events, including those involving biohazards. They use specialized tools and chemicals to remove blood, bodily fluids, and other hazardous materials, ensuring the environment is thoroughly sanitized and safe.</p>
    <img src="CSCimage/crimeSceneCleaner1.jpg" alt="CrimeSceneCleaner" class="img">
    `;
}

function Salary(){
    const salary = document.getElementById('salary');
    salary.innerHTML=`
    <h2>Salary</h2>
    <p>The national average salary for a crime scene cleaner is $8,293 per year</p>
    `;
}

function Skill(){
    const skill = document.getElementById('skill');
    skill.innerHTML = `
    <h2>Main Skill</h2>
    <ul>
    <li>Cognizant: Identifies deficiencies and ensures removal of all hazardous waste.</li>
    <li>Compassion: maintains empathy and professionalism when engaging with victims.</li>
    <li>Interpersonal Communication: communicates job details with clients and other professionals.</li>
    <li>Biohazard Knowledge: Understand how to deal with blood borne pathogens.</li>
    <li>Physical Strength: Facing long hours of intense work.</li>
    <li>Safety Training: Ensure cleaning is done safely through certification.</li>
    <li>Flexibility: Adjust work hours as needed.</li>
    <li>Integrity: ensure confidentiality and respect on the job.</li>
    </ul>
    `;
}

function Game(){
    const training = document.getElementById('game');
    training.innerHTML=`
    <h2>Crime Scene Cleaner Game</h2>
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

function content(type){
    const box = document.getElementById('box');

    let content = '';

    if(type === 'advantage'){
        content =`
        <h3>Advantage</h3>
        <ul>
        <li>Stable Income</li>
        <li>Job Fulfillment</li>
        <li>Growing Demand in the Industry</li>
        </ul>
        `;
    }else if(type === 'disadvantage'){
        content = `
        <h3>Disadvantage</h3>
        <ul>
        <li>Facing bloody scenes</li>
        <li>Psychologically stressful</li>
        </ul>
        `;
    }

    box.innerHTML = content;
    box.classList.remove('hidden');
}