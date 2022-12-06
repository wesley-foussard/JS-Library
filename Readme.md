# Objectif

créer une application permettant d'enrregistrer mes livres possédés, de les évaluer, d'ajouter des notes etc.

## fonctionnalités

- afficher les livres enregistrés masi pas l'utilisateur associé
- s'authentifier
- ajouter des livres par le biai de leur code ISBN (ISBNDB)
- accéder à la caméra pour lire l'ISBN (QUAGGA ?)
- ajouter des notes sur les livres enregistrés (form)
- ajouter une évaluation (form)
- modifier un livre existant (form)
- ajouter un livre sans ISBN (form)

## Fonctionnalités techniques

- 1 BDD
  - 1 table livre (titre auteur editeur nombre de pages résumé)
  - 1 table éditeur ( nom(issu de livre), site)
  - 1 table compte utilisateur (  notes, évaluations, livres enregistrés)
  - 1 table genre
  - 1 table auteur
  - les associations requises (MCD pas à jour)
- 2 API
  - QUAGGA : <https://www.postgresql.org/docs/current/sql-createrole.html>
  - ISBNDB: <https://isbndb.com/apidocs/v2>
- prototype ici : <https://www.geeksforgeeks.org/how-to-build-library-management-system-using-node-js/>
