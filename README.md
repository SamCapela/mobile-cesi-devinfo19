# mobile-cesi-devinfo19 : Projet d'application de partage de photos par mail
APK disponible dans **android/app/build/outputs/apk/app-release.apk**
## Commit 1 : Projet squelette Typescript
> npx react-native init MyApp --template react-native-template-typescript

Initialiser le fichier .git
> git init

Ajouter toutes les modifications du projet local
> git add .

Commit les modifications et nommer la version
> git commit -m "Squelette TypeScript" 

Envoyer toutes les modifications à la branche main
> git push origin main

## Commit 2 : Application lancée sur un device
Créer le package.json afin de pouvoir visualiser l'application mobile sur un device
>npm init

Installer le package react-native-cli
>npm install -g react-native-cli

Penser a clean gradle
>gradlew clean

Lancer l'application (depuis le dossier MyApp)
>npm start

## Commit 3 : Ajout de react-native-camera 
>npm install react-native-camera --save

>cd .. android/

>gradlew clean

>cd ..

>npm run android

Grace à RNCamera, je peux maintenant prendre une photo, puis l'afficher dans une <Image><Image/> avec son URI.

## Commit 4 : Utilisation de react-native-share
Installer react-native-share
>npm install react-native-share

Mettre à jour le type de Share
>npm install @types/react-native-share

## Commit 5 : Ajout du component Home pour alléger le code

## Commandes utiles afin de supprimer tous les changements depuis le dernier commit : 
>git log --oneline -1

>git reset --hard