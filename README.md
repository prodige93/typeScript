## Mon projet TypeScript – Exercices de typage

J’ai rassemblé ici de petits exercices en TypeScript pour pratiquer le typage statique (définition de types, intersections, propriétés optionnelles, génériques, etc.).

### Contenu

- **`made-variables/index.ts`** : exercices de modélisation (personnages, familiers, équipements, héros, magiciens) avec des types et intersections.
- **`use-variable/index.ts`** : typage d’une fonction JavaScript existante (`sayHello`) en ne modifiant que la partie TypeScript.
- **`damage/damage.ts`** : exercice de typage d’une fonction qui inflige des dégâts (objets, interfaces, retours).
- **`type-generique/index.ts`** : exemples de typage générique (types génériques, fonction générique, `Partial<T>`, etc.).
- **`my-file/my-file.ts`** : exemple simple de fonction typée (addition).

### Prérequis

- **Node.js** installé (version récente, par exemple ≥ 18).
- **npm** (fourni avec Node.js).

### Installation

Dans un terminal, à la racine du projet :

```bash
npm install
```

Cela installe TypeScript en dépendance de développement (voir `package.json`).

### Compilation TypeScript

Le projet contient un fichier `tsconfig.json` qui configure le compilateur TypeScript.

Pour vérifier les types sans générer de fichiers JavaScript :

```bash
npx tsc --noEmit
```

Pour générer les fichiers JavaScript :

```bash
npx tsc
```

Par défaut, TypeScript va générer les `.js` à côté des `.ts` (sauf si je configure `rootDir` / `outDir`).

### Exécuter les exemples

Après compilation, je peux lancer les fichiers générés avec Node, par exemple :

```bash
node damage/damage.js
```

Ou encore :

```bash
node use-variable/index.js
```

### Objectif pédagogique

Mon but principal avec ce projet est de m’entraîner à :

- **corriger des erreurs de typage** signalées par TypeScript,
- **créer et combiner des types** (`type`, intersections `&`, propriétés optionnelles, etc.),
- **utiliser des génériques** et quelques types utilitaires,
- **améliorer la sécurité et la clarté du code** sans casser le code existant.

Je modifie les types dans les fichiers `.ts` (là où c’est indiqué) jusqu’à ce que le compilateur ne signale plus d’erreurs.

