let storyText = document.getElementById('story');
let imageContainer = document.getElementById('image-container');
let leftBtn = document.getElementById('left-btn');
let straightBtn = document.getElementById('straight-btn');
let rightBtn = document.getElementById('right-btn');

function hideAllButtons() {
    leftBtn.classList.add('hidden');
    straightBtn.classList.add('hidden');
    rightBtn.classList.add('hidden');
}

function showMainButtons() {
    leftBtn.classList.remove('hidden');
    straightBtn.classList.remove('hidden');
    rightBtn.classList.remove('hidden');
}

function startAdventure() {
    hideAllButtons();
    showMainButtons();
    document.getElementById('start-btn').classList.add('hidden');
}

function choosePath(path) {
    hideAllButtons();
    switch (path) {
        case 'left':
            storyText.innerHTML = "Te encuentras con un lago. ¿Nadas o rodeas?";
            imageContainer.innerHTML = "<img src='images/lake.jpg' alt='Lake Image' style='width: 600px; height: auto;'>";
            document.getElementById('game-container').innerHTML += "<button onclick='swimOrGoAround(\"swim\")'>Nadar</button>";
            document.getElementById('game-container').innerHTML += "<button onclick='swimOrGoAround(\"goAround\")'>Rodear</button>";
            break;
        case 'right':
            storyText.innerHTML = "Encuentras una cueva oscura. ¿Entrar o continuar?";
            imageContainer.innerHTML = "<img src='images/cave.jpg' alt='Cave Image' style='width: 600px; height: auto;'>";
            document.getElementById('game-container').innerHTML += "<button onclick='enterOrContinue(\"enter\")'>Entrar</button>";
            document.getElementById('game-container').innerHTML += "<button onclick='enterOrContinue(\"continue\")'>Continuar</button>";
            break;
        case 'straight':
            storyText.innerHTML = "Continúas por el sendero y te encuentras con un puente antiguo. ¿Lo cruzas o vuelves atrás?";
            imageContainer.innerHTML = "<img src='images/bridge.jpg' alt='Bridge Image' style='width: 600px; height: auto;'>";
            document.getElementById('game-container').innerHTML += "<button onclick='crossOrGoBack(\"cross\")'>Cruzar</button>";
            document.getElementById('game-container').innerHTML += "<button onclick='crossOrGoBack(\"goBack\")'>Volver</button>";
            break;
        default:
            storyText.innerHTML = "Elige una opción válida.";
    }
}

function swimOrGoAround(choice) {
    switch (choice) {
        case 'swim':
            storyText.innerHTML = "Decides nadar. Te sumerges en las aguas oscuras del lago y descubres un mundo submarino lleno de maravillas y peligros. ¿Podrás encontrar el tesoro oculto en las profundidades?";
            imageContainer.innerHTML = "<img src='images/underwater.jpg' alt='Underwater Image' style='width: 600px; height: auto;'>";
            break;
        case 'goAround':
            storyText.innerHTML = "Decides rodear el lago. Durante tu viaje, te encuentras con una comunidad de elfos en lo profundo del bosque. Te reciben con alegría y te invitan a unirte a ellos en una celebración llena de magia y música.";
            imageContainer.innerHTML = "<img src='images/elves.jpg' alt='Elves Image' style='width: 600px; height: auto;'>";
            break;
        default:
            storyText.innerHTML = "Elige una opción válida.";
    }
}

function enterOrContinue(choice) {
    switch (choice) {
        case 'enter':
            storyText.innerHTML = "Decides entrar en la cueva. Te adentras en la oscuridad y descubres un laberinto de pasadizos llenos de trampas y criaturas misteriosas. ¿Podrás encontrar la salida antes de que sea demasiado tarde?";
            imageContainer.innerHTML = "<img src='images/dark_cave.jpg' alt='Dark Cave Image' style='width: 600px; height: auto;'>";
            break;
        case 'continue':
            storyText.innerHTML = "Decides continuar por el sendero. Te encuentras con un bosque encantado donde los árboles susurran antiguos secretos y las hadas danzan en la luz de la luna. ¿Qué maravillas te esperan más adelante?";
            imageContainer.innerHTML = "<img src='images/enchanted_forest.jpg' alt='Enchanted Forest Image' style='width: 600px; height: auto;'>";
            break;
        default:
            storyText.innerHTML = "Elige una opción válida.";
    }
}

function crossOrGoBack(choice) {
    switch (choice) {
        case 'cross':
            storyText.innerHTML = "Decides cruzar el puente. Al otro lado, te encuentras con un reino en ruinas donde un malvado hechicero ha sumido a la tierra en la oscuridad. ¿Tienes el coraje de desafiarlo y restaurar la luz?";
            imageContainer.innerHTML = "<img src='images/ruined_kingdom.jpg' alt='Ruined Kingdom Image' style='width: 600px; height: auto;'>";
            break;
        case 'goBack':
            storyText.innerHTML = "Decides volver atrás. Mientras regresas al inicio de tu viaje, te encuentras con una majestuosa Quimera, criatura de leyenda, quien reconoce tu valentía y te ofrece su amistad. Juntos, emprenden una nueva aventura hacia horizontes desconocidos.";
            imageContainer.innerHTML = "<img src='images/journey_begins.jpg' alt='Journey Begins Image' style='width: 600px; height: auto;'>";
            break;
        default:
            storyText.innerHTML = "Elige una opción válida.";
    }
}
