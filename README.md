## Projet TypeScript – Exercices de typage

Ce dépôt contient de petits exercices en TypeScript pour pratiquer le typage statique (définition de types, intersections, options, etc.).

### Contenu

- **`made-variables/index.ts`** : exercices autour des types pour modéliser des personnages, animaux de compagnie, équipements, héros et magiciens.
- **`use-variable/index.ts`** : exemple simple de typage d’une fonction JavaScript existante (`sayHello`) sans modifier le code JS.

### Prérequis

- **Node.js** installé (version récente, par exemple ≥ 18).
- **npm** (fourni avec Node.js).

### Installation

Dans un terminal, à la racine du projet :

```bash
npm install
```

Cela installe uniquement TypeScript en dépendance de développement (voir `package.json`).

### Compilation TypeScript

Le projet contient un fichier `tsconfig.json` qui configure le compilateur TypeScript.

Pour compiler les fichiers TypeScript, vous pouvez par exemple utiliser la commande suivante :

```bash
npx tsc --noEmit
```

Cette commande demande à TypeScript de vérifier les types sans générer de fichiers JavaScript, ce qui est pratique pour valider vos solutions aux exercices.

Si vous préférez générer du JavaScript, vous pouvez lancer simplement :

```bash
npx tsc
```

et ajuster au besoin les options `rootDir` / `outDir` dans `tsconfig.json`.

### Exécuter les exemples

Une fois compilé (ou en utilisant `ts-node` si vous l’installez), vous pouvez exécuter les exemples, par exemple pour `use-variable` :

```bash
node use-variable/index.js
```

### Objectif pédagogique

Le but principal de ce projet est de vous entraîner à :

- **corriger des erreurs de typage** signalées par TypeScript,
- **créer et combiner des types** (`type`, intersections `&`, propriétés optionnelles, etc.),
- **améliorer la sécurité et la clarté du code** tout en gardant le JavaScript existant intact.

N’hésitez pas à modifier les types dans les fichiers `.ts` (uniquement là où c’est indiqué dans les commentaires) jusqu’à ce que le compilateur ne signale plus d’erreurs.

