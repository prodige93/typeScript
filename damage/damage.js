// * Notre fonction est correctement typer 
// * elle s'attend a avoir un objet de propriété .life qui est de type number et d'un dégat de type number avec une reponse number
;
function damage(characterToDamage, amount) {
    characterToDamage.life -= amount;
    return characterToDamage.life;
}
;
var result = damage({ life: 100 }, 20);
console.log(result);
// type infoEliass = {
//     vie: number;
//     prenom?: string;
//     nom?: string;
// };
// interface info extends infoEliass{
//     prenom?: 'eliass';
//     nom?: 'rachid';
//     vie: 100;
// };
// function dommage(eliass: info, amount: number):number {
//     eliass.vie -= amount;
//     return eliass.vie;
// };
// const resultat = dommage({vie: 100},20);
// console.log(resultat);
function domage(eliass, amount) {
    eliass.vie -= amount;
    return eliass.vie;
}
var resultat = domage({ prenom: 'eliass', nom: 'rachid', vie: 100 }, 20);
console.log(resultat);
// ! Documentation 
/**
 * * Ce paramètre est utilisé comme un objet : on essaie en effet de manipuler sa propriété life  via characterToDamage.life
 * * Pour définir qu’une variable est un objet,
 * !TypeScript utilise la même syntaxe que JavaScript, à savoir des accolades :

 * ? function damage(characterToDamage: {}, amount: number): number {```
 * * Juste en appliquant ce changement, TypeScript nous signale cette erreur :

 * ? > Property 'life' does not exist on type '{}'.
 * * Comme on vient de le voir, on essaye de manipuler la propriété life  , mais TypeScript ne sait pas encore que characterToDamage  la possède : il faut donc le lui dire !

 * ? function damage(characterToDamage: { life: number }, amount: number): number {```
 * * Et c’est tout ! Le code complet devient donc :

 * ?    function damage(characterToDamage: { life: number }, amount: number): number {
 * ?        characterToDamage.life -= amount;
 * ?        return characterToDamage.life;
 * ?    }
 * ?    const result = damage({ life: 100 }, 12);
 * ?    console.log(result);



 * * Amusez-vous à modifier l’appel à la fonction damage  en envoyant des arguments erronés.
 * * Essayez par exemple  damage({ life: 'douze' }, 12)   ,  damage({ vie: 100 }, 12)   , ou encore  damage({ life: 100, magic: 20 }, 12)
 * * TypeScript réagit à chaque fois en vous alertant sur les erreurs qu’il détecte.
 * * Plutôt sympa d’avoir un outil qui nous prévient de la sorte, non ? 😎


 */ 
