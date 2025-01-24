# Exercice 1 : Structure de la Base de Données (Firestore)

```
{
  "produits": {
    "<code_barre>": {
      "nom": "Nom du produit",
      "description": "Description du produit",
      "date_expiration": "2025-02-02", 
      "magasins": {
        "<id_magasin_1>": {
          "nom_magasin": "Magasin 1",
          "quantite": 10,
          "reservations": 5
        },
        "<id_magasin_2>": {
          "nom_magasin": "Magasin 2",
          "quantite": 20,
          "reservations": 0
        },
        "<id_magasin_3>": {
          "nom_magasin": "Magasin 3",
          "quantite": 15,
          "reservations": 3
        }
      }
    },
    "<code_barre_2>": {
      "nom": "Autre produit",
      "description": "Autre description",
      "date_expiration": "2025-05-15", 
      "magasins": {
        "<id_magasin_1>": {
          "nom_magasin": "Magasin 1",
          "quantite": 30,
          "reservations": 2
        },
        "<id_magasin_3>": {
          "nom_magasin": "Magasin 3",
          "quantite": 5,
          "reservations": 1
        }
      }
    }
  }
}

```


# Exercice 2 : Mathématiques

## Partie 1 : Multiplication de matrices

On nous donne les matrices suivantes :
- Matrice A :
  \[
  A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}
  \]
- Matrice B :
  \[
  B = \begin{pmatrix} 10 & 11 \\ 13 & 14 \\ 16 & 17 \end{pmatrix}
  \]

Le produit des matrices \( A \times B \) est :
\[
C = \begin{pmatrix} 84 & 90 \\ 201 & 216 \end{pmatrix}
\]

## Partie 2 : Rotation dans \( \mathbb{R}^3 \)

### Matrice de rotation autour de la droite \( D_1 \) (passant par \( (0, 0, 0) \) et \( (255, 255, 255) \)) :

La matrice de rotation dans \( \mathbb{R}^3 \) peut être définie à l'aide de la formule de Rodrigues et du vecteur directeur \( \mathbf{v} = (255, 255, 255) \).

### Transformation bonus (projection orthogonale) :

- Après une rotation, une projection orthogonale est appliquée pour maintenir les couleurs dans l'orthogonal de \( D_1 \).
- La matrice de projection est :
  \[
  P = I - \frac{\mathbf{v} \mathbf{v}^T}{\|\mathbf{v}\|^2}
  \]
- Cette transformation permet de garder les couleurs dans l'espace RGB après la rotation.
