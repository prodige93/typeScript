





































type Character = {
  name: string;
  life: number;
  attack: number;
  defense: number;
};
type Equipment = {
    price: number;
    attack: number;
    defense: number;
};

type ShopOfString = {
    name: string;
    items: Array<string>;
};

type ShopOfNumber = {
    name: string;
    items: Array<number>;
}

type ShofOfBoolean = {
    name: string;
    items: Array<boolean>;
}
// ! Déclaration Typage générique
type Shop <ItemType> = {
    name: string;
    owner: Character;
    items: Array<ItemType>;
};
// ! Utilisation Typage générique
type ShopOfStrings = Shop<string>;
type ShopOfNumbers = Shop<number>;
type ShopOfBooleans = Shop<boolean>;

// Équivalent du type générique que nous venons de voir, avec une interface
interface boutique<ItemType> {
    name: string;
    owner: Character;
    items: Array<ItemType>;
};

// Une fonction générique
function createShop<ItemType>(name: string, owner: Character, items: Array<ItemType>): Shop<ItemType> {
    return { name, owner, items };
}
// Appel de la fonction générique
const armory = createShop<Equipment>('My armory', { name: 'Bob', life: 100, attack: 1, defense: 2 }, []);
console.log(armory);

// Une fonction qui retourne simplement ce qu'elle reçoit en paramètre
function returnParameter<T>(x: T): T {
    return x;
}
// Ceci fonctionne, c'est ce que nous avons vu jusque-là
const a = returnParameter<number>(1);
// Mais puisque le type "T" est utilisé pour typer le paramètre "x",
// il n'est pas nécessaire de le préciser en appelant la fonction.
// Avec la ligne ci-dessous, TypeScript devine tout seul que "T" est "number" !
const a2 = returnParameter(1);


/**
 * ! Partial<T>
 * ? Ce type utilitaire prend en paramètre un type représentant un objet, 
 * ? et il retourne un type représentant ce même objet, 
 * ? mais avec toutes ces propriétés marquées comme étant optionnelles.
 */
type Characterr = {
    // Toutes les propriétés sont requises (elles n'ont pas le signe "?")
    name: string;
    life: number;
    attack: number;
    defense: number;
};
const myCharacter: Partial<Characterr> = {
    // On ne fournit que le nom, pas le reste des propriétés.
    // On n'a pas d'erreur car "Partial" rend
    // toutes les propriétés optionnelles.
    name: 'Mario',
};



/**
 * ! Record<KeyType, ValueType>
 * ? Cet utilitaire permet de définir des types d’objets. 
 * ? Jusque-là, nous avons utilisé la notation avec les accolades {}  , 
 * ? mais il peut être plus adapté d’utiliser le générique  Record<KeyType, ValueType>   , 
 * ? comme dans les exemples qui suivent :

 */
// On définit un type représentant un objet dont les clés
// sont des chaînes de caractères (n'importe lesquelles)
// et les valeurs sont des nombres
type CollectionOfNumbers = Record<string, number>;
const statss: CollectionOfNumbers = {
    age: 45,
    life: 100,
    magic: 10,
    whateverTheNameItMustContainANumber: 20,
};

// On peut utiliser une union pour n'autoriser que des clés spécifiques
type StatisticNames = 'life' | 'attack' | 'defense';
const stats: Record<StatisticNames, number> = {
    life: 100,
    attack: 10,
    defense: 20,
};