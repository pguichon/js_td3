# TD3


## 1

Générer trois composants 

- container
- list-item
- detail-item

tips : ng generate component ????


## 2

inclure le container dans l'app.component.html

dans le container créer:


| panel          | panel         
| :------------- | :-------------  
| list-item      | detail-item  
      

dans list-item et detail-item créer un panel


## 3

dans list-item dans l'init initialiser un variable contentant un tableau d'objet
avec pour attribut nom, prenom, date de naissance, diplome (un tableau de chaine de caractere)
avec trois objects construit.

dans le template, parcourir le tableau pour faire une liste de lien ayant le nom et prenom comme text


## 4 

créer une fonction selectionner(personne){
}
et la lier à un clic sur un des liens

## 5

créer un Output personneSelected

et modifier la fonction selectionner pour emettre la personne selectionner



## 6
dans container

créer un Input personnes et l'utiliser à la place du tableau dans le template
 
et modifier le container pour initialiser dans l'init le tableau et le transmettre
à list-item 

## 7

créer  une fonction personneSelected(personne) et l'appeller via list-item

## 8
Afficher le nom de la personne dans le panel container grace à personneSelected

## 9
créer un input personne dans detail-item

## 10 
lier la personne de container via l'input dans detail-item

## 11
afficher les details de la personne (une liste pour les diplomes)


Bon courage
