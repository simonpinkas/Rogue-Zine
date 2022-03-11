# Rogue Zine

Publication underground traitants de thèmes "interdits" dans certains pays. Le site sera publié comme hidden service sur Tor. L'adresse sera distribuée dans des lieux de confiance.

Le premier volume traitera des Credit Suisse Leaks, depuis la Suisse. Créé dans le cadre du LAB GR+ID à l'Eracom, semestre de printemps 2022.

- [Pré-requis](#pré-requis)
- [Installation](#installation)
- [Vite](#vite)
- [Composants](#composants)
- [Ajouter des pages](#ajouter-des-pages)

## Pré-requis

- [VSCode](https://code.visualstudio.com)
- [Node.js](https://nodejs.org/en/)

## Installation

1. Faites un fork de ce répo et clonez le sur votre machine

2. Ouvrez le dossier téléchargé dans VSCode et ouvrez le terminal de VSCode

3. Lancez le programme avec les commandes suivantes:

```bash
npm install
npm run dev
```

4. Ouvrez votre navigateur sur [localhost:3000](http://localhost:3000)

https://piccalil.li/blog/a-modern-css-reset/

## Vite

Ce projet utilise le bundler [Vite](https://vitejs.dev), dans l'optique d'optimiser notre code le plus possible.

Chaque page doit avoir un fichier JavaScript qui lui est associé. le fichier **index.html** est lié au fichier **index.js**. Le fichier **about/index.html** est lui associé à **about/about.js**.

```html
<!-- Dans index.html -->
<script type="module" src="./index.js"></script>

<!-- Dans about.js -->
<script type="module" src="./about.js"></script>
```

Le but de cette de démarche est d'éviter de charger du JavaScript inutile par page, connaissant les limitations de Tor en termes de vitesse de chargement.

## Composants

Du code qui serait partagé entre les pages peuvent être implémentés dans des fichiers séparés qui seraient ensuite importés là où c'est nécessaire. Référez-vous à la documentation de l'instruction [export](https://developer.mozilla.org/fr/docs/web/javascript/reference/statements/export). Ces composants réutilisables seront stockés dans le dossier **components**.

Pour pouvoir importer une fonction dans un autre fichier, il faut d'abord dire que celle-ci est exportable, puis l'importer dans le fichier où vous souhaitez l'utiliser:

```javascript
// Dans un fichier components/truc.js
export const nom_de_la_fonction = function () {};

// Dans le fichier index.js (ou un autre directement lié au html)
import nom_de_la_fonction from "./components/truc.js";

nom_de_la_fonction();
```

## Ajouter des pages

Si vous souhaitez ajouter des pages à votre site, suivez la structure existante (vous pouvez aussi dupliquer le dossier "about" et modifier les noms de fichiers):

1. Créez un dossier qui correspond au nom de votre page.
2. Créez un fichier index.html dans ce dossier.
3. Créez un fichier javascript dans ce dossier et importez-y les feuilles de style.
4. Faites le lien entre le html et le javascript

il faudra informer Vite de leur existence. Pour ce faire, éditez le le fichier **vite.config.js** et ajoutez une page à l'objet input:

```javascript
module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        about: resolve(__dirname, "about/index.html"),
        // Ajoutez une page ici
        archives: resolve(__dirname, "archives/index.html")
      }
    }
  }
});
```
