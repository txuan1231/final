document.addEventListener('DOMContentLoaded', function(){
    Info();
    Salary();
    Skill();
    Game();
});

function Info(){
    const info = document.getElementById('info');
    info.innerHTML = `
    <h2>Dog Food Tester Description</h2>
    <p>A dog food tester checks the quality, taste, and nutrition of dog food. They taste the food to make sure it’s safe, has a good texture, and follows pet nutrition rules. Some testers also give feedback on how the food smells, feels, and is packaged.</p>
    <img src="DOGimage/dog2.jpg" alt="Dog Food Tester at work" class="img">
    `;
}

function Salary(){
    const salary = document.getElementById('salary');
    salary.innerHTML = `
    <h2>Salary</h2>
    <p>Dog food testers can earn between $30,000 and $75,000 annually, depending on the company and their level of experience in food science or animal nutrition.</p>
    `;
}

function Skill(){
    const skill = document.getElementById('skill');
    skill.innerHTML = `
    <h2>Main Skills</h2>
    <ul>
        <li>Strong sense of taste and smell</li>
        <li>Food science knowledge</li>
        <li>Understanding of pet nutrition</li>
        <li>Attention to detail</li>
        <li>Ability to handle unusual work environments</li>
        <li>Report writing and product analysis</li>
    </ul>
    `;
}

function Game() {
    const training = document.getElementById('game');
    training.innerHTML = `
        <h2>Dog Food Lab</h2>
        <p>Dog food testers work in special labs where they check the taste, smell, and feel of dog food. They wear lab coats and write down how each food tastes. Some foods are soft, others are dry and crunchy.</p>
        <p>The testers also check if the food is safe and healthy for dogs. Later, they give the food to real dogs to see if the dogs like it. It’s a mix of tasting and science!</p>
    <img src="DOGimage/dog1.jpg" alt="Dog Food Tester at work" class="img">
    `;
}

function content(type){
    const box = document.getElementById('box');
    let content = '';

    if(type === 'advantage'){
        content = `
        <h3>Advantages</h3>
        <ul>
            <li>Unique and rare profession</li>
            <li>Often includes travel and testing various brands</li>
            <li>Can lead to careers in pet nutrition or product development</li>
        </ul>
        `;
    } else if(type === 'disadvantage'){
        content = `
        <h3>Disadvantages</h3>
        <ul>
            <li>Testing pet food can be unpleasant</li>
            <li>Not widely understood or respected</li>
            <li>Limited job openings</li>
        </ul>
        `;
    }

    box.innerHTML = content;
    box.classList.remove('hidden');
}