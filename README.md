# Learning Platform

### Structure du projet :
db.js : Gère les connexions aux bases de données MongoDB et Redis.
env.js : Contient les variables d'environnement.
routes/ : Contient les routes de l'application.
controllers/ : Gère la logique des requêtes.
services/ : Contient les services métier.

### Installation et lancement  : 
###{ Cloner mon dépot :
```
git clone https://github.com/mreckah/learning-platform-nosql
```
#### Lancer le Projet :

```
npm start
```

### Choix techniques :
Utilisation de MongoDB et Redis pour leur complémentarité (NoSQL + cache).
Séparation des responsabilités dans des modules dédiés.

### Réponses aux questions posées dans les commentaires:
##### Pourquoi créer un module séparé pour les connexions aux bases de données ?
Pour améliorer la maintenabilité en centralisant les modifications liées à la gestion des bases de données.
##### Comment gérer proprement la fermeture des connexions ?
Utiliser des méthodes comme mongoClient.close() pour MongoDB et redisClient.quit() pour Redis.
##### Pourquoi est-il important de valider les variables d'environnement au démarrage ?
Pour garantir que l'application dispose de toutes les informations nécessaires et éviter des erreurs imprévues pendant l'exécution.
##### Que se passe-t-il si une variable requise est manquante ?
L'application risque de rencontrer des erreurs critiques, comme une erreur de connexion aux services externes.
##### Quelle est la différence entre un contrôleur et une route ?
Une route définit l'URL et la méthode HTTP, tandis qu'un contrôleur gère la logique métier associée à cette route.
##### Pourquoi séparer la logique métier des routes ?
Pour un code plus organisé et maintenable, facilitant les tests unitaires et la réutilisabilité.
##### Pourquoi séparer les routes dans différents fichiers ?
Cela améliore la lisibilité, la maintenabilité et facilite l'extension du code.
##### Comment organiser les routes de manière cohérente ?
Organiser les routes par domaine ou fonctionnalité, avec une hiérarchie logique et des préfixes clairs.
##### Pourquoi créer des services séparés ?
Pour centraliser la logique métier, améliorer la réutilisabilité et faciliter la maintenance.
##### Comment gérer efficacement le cache avec Redis ?
Utiliser des fonctions génériques pour stocker (set) et récupérer (get) des données avec un TTL pour éviter les données obsolètes.
##### Quelles sont les bonnes pratiques pour les clés Redis ?
Utiliser des clés structurées et explicites (ex : user:123:profile) pour faciliter la gestion et éviter les conflits.
##### Comment organiser le point d'entrée de l'application ?
Créer un fichier principal (souvent server.js ou app.js) pour centraliser les connexions aux bases de données, la configuration des middlewares et le montage des routes.
##### Quelle est la meilleure façon de gérer le démarrage de l'application ?
Utiliser une fonction asynchrone pour gérer les connexions aux bases de données et démarrer le serveur, avec une gestion propre des erreurs et des signaux système (comme SIGINT ou SIGTERM) pour un arrêt en douceur.
##### Quelles sont les informations sensibles à ne jamais commiter ?
Ne jamais commettre des clés API, mots de passe, identifiants de base de données ou autres données sensibles.
##### Pourquoi utiliser des variables d'environnement ?
Pour sécuriser les informations sensibles et faciliter la configuration des environnements sans modifier le code source.

### Demonstration
![img1](https://github.com/user-attachments/assets/76770a39-45ec-45f8-9d54-4dc64a3b9ce1)

![image](https://github.com/user-attachments/assets/a1af9369-0cc0-47f3-ae52-deb27c7a2662)

![img2](https://github.com/user-attachments/assets/bbd341e1-1bba-479f-a978-0134fcec62bf)


