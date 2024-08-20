function choosePath(path) {
    document.getElementById('options').style.display = 'none';
    let message = '';
    if (path === 'home') {
        message = 'Você decidiu voltar para casa e vive uma vida longa e feliz. Fim da aventura.';
        document.getElementById('result').innerHTML = `
            <p>${message}</p>
            <button onclick="restart()">Reiniciar Aventura</button>
        `;
    } else if (path === 'forest') {
        message = 'Você se depara com uma bifurcação na floresta. Você pode ir para o caminho dos lobos ou para o caminho dos morcegos.';
        document.getElementById('result').innerHTML = `
            <p>${message}</p>
            <button onclick="chooseSubPath('wolves')">Ir para o caminho dos lobos</button>
            <button onclick="chooseSubPath('bats')">Ir para o caminho dos morcegos</button>
        `;
    }
}

function chooseSubPath(subPath) {
    document.getElementById('options').style.display = 'none';
    let message = '';
    if (subPath === 'wolves') {
        message = 'Os lobos rosnam ameaçadoramente. Você pode atacar os lobos ou seguir em frente.';
        document.getElementById('result').innerHTML = `
            <p>${message}</p>
            <button onclick="handleWolves('attack')">Atacar os lobos</button>
            <button onclick="handleWolves('pass')">Seguir em frente</button>
        `;
    } else if (subPath === 'bats') {
        message = 'Os morcegos atacam você, deixando-o totalmente arranhado. Você se livra dos morcegos e encontra duas novas opções: um caminho com plantas venenosas ou um caminho vazio.';
        document.getElementById('result').innerHTML = `
            <p>${message}</p>
            <button onclick="chooseFinalPath('poisonous')">Ir para o caminho das plantas venenosas</button>
            <button onclick="chooseFinalPath('empty')">Ir para o caminho vazio</button>
        `;
    }
}

function handleWolves(action) {
    document.getElementById('options').style.display = 'none';
    let message = '';
    if (action === 'attack') {
        message = 'Os lobos atacam e devoram você. Fim de jogo.';
    } else if (action === 'pass') {
        message = 'Você segue em frente e encontra uma árvore gigante. De um lado há um lago radioativo e do outro um caminho reto.';
        document.getElementById('result').innerHTML = `
            <p>${message}</p>
            <button onclick="chooseFinalPath('lake')">Ir para o lago</button>
            <button onclick="chooseFinalPath('path')">Ir pelo caminho reto</button>
        `;
    }
    document.getElementById('result').innerText = message;
}

function chooseFinalPath(finalPath) {
    document.getElementById('options').style.display = 'none';
    let message = '';
    if (finalPath === 'poisonous') {
        message = 'As plantas venenosas e cheias de espinhos arranham você, mas você encontra a cabana vazia. Fim da aventura.';
    } else if (finalPath === 'empty') {
        message = 'Você encontra um homem encapuzado no caminho vazio. Ele o mata. Fim de jogo.';
    } else if (finalPath === 'lake') {
        message = 'O lago parece bonito, mas é radioativo. Você derrete ao entrar. Fim de jogo.';
    } else if (finalPath === 'path') {
        message = 'Você segue pelo caminho reto e chega a um penhasco vazio sob a luz da lua. Fim da aventura.';
    }
    document.getElementById('result').innerHTML = `
        <p>${message}</p>
        <button onclick="restart()">Reiniciar Aventura</button>
    `;
}

function restart() {
    document.getElementById('options').style.display = 'block';
    document.getElementById('result').innerHTML = '';
    document.getElementById('description').innerText = 'Você está na entrada de uma floresta sinistra. O que deseja fazer?';
}
