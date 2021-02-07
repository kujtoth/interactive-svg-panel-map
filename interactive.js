marhaReszSzoveg = document.getElementById('marharesszoveg');
let bociterkep = document.querySelector('#tetris');

Array.prototype.forEach.call(bociterkep.children, marhaResz => {
    marhaResz.classList.add("inactive-marharesz");
    let megnevezes = marhaResz.id.replace('-', ' ').replace('--', '/ ').replace(/[0-9]/, ' ');

    marhaResz.onmouseenter = function hovero() {
        marhaResz.classList.add("active-marharesz");
        marhaReszSzoveg.innerHTML = megnevezes;
    };
    marhaResz.onmouseleave = function leavo() {
        marhaResz.classList.remove("active-marharesz");
        marhaReszSzoveg.innerHTML = "Termékeink";
    };
    marhaResz.onclick = function clearo(linkesitett) {
        let marhaReszAnchor = linkesito(megnevezes);
    };
});

function linkesito(eredeti) {
    let linkesitett = `#${eredeti.toLowerCase().toLowerCase().replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ö/g, 'o').replace(/ő/g, 'o').replace(/ú/g, 'u').replace(/ü/g, 'u').replace(/ű/g, 'u').replace(/ /g, '-').replace(/[0-9]/g, '').replace(/\s/g, '')}`;
    window.location.href = linkesitett;
}

