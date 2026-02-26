;
// Une fonction générique
function createShop(name, owner, items) {
    return { name: name, owner: owner, items: items };
}
// Appel de la fonction générique
var armory = createShop('My armory', { name: 'Bob', life: 100, attack: 1, defense: 2 }, []);
console.log(armory);
// Une fonction qui retourne simplement ce qu'elle reçoit en paramètre
function returnParameter(x) {
    return x;
}
// Ceci fonctionne, c'est ce que nous avons vu jusque-là
var a = returnParameter(1);
// Mais puisque le type "T" est utilisé pour typer le paramètre "x",
// il n'est pas nécessaire de le préciser en appelant la fonction.
// Avec la ligne ci-dessous, TypeScript devine tout seul que "T" est "number" !
var a2 = returnParameter(1);
var myCharacter = {
    // On ne fournit que le nom, pas le reste des propriétés.
    // On n'a pas d'erreur car "Partial" rend
    // toutes les propriétés optionnelles.
    name: 'Mario',
};
var statss = {
    age: 45,
    life: 100,
    magic: 10,
    whateverTheNameItMustContainANumber: 20,
};
var stats = {
    life: 100,
    attack: 10,
    defense: 20,
};
