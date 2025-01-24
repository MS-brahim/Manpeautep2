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

### Données :

- Matrice A :

  \[
  A = \begin{pmatrix} 
  1 & 2 & 3 \\
  4 & 5 & 6
  \end{pmatrix}
  \]

- Matrice B :

  \[
  B = \begin{pmatrix}
  10 & 11 \\
  13 & 14 \\
  16 & 17
  \end{pmatrix}
  \]

### Calcul de la multiplication \( A \times B \) :

Le produit des matrices \( A \) et \( B \) est donné par la matrice C :

\[
C = \begin{pmatrix}
84 & 90 \\
201 & 216
\end{pmatrix}
\]

---

## Partie 2 : Rotation dans \( \mathbb{R}^3 \)

La matrice de rotation est calculée autour de la droite \( D_1 \), passant par les points \( (0, 0, 0) \) et \( (255, 255, 255) \).

**Matrice de Rotation** :  
La matrice de rotation dans \( \mathbb{R}^3 \) autour de \( D_1 \) dépend de l'axe de rotation et de l'angle que nous souhaitons appliquer, calculé à l'aide de la formule de Rodrigues.

---

## Bonus : Projection Orthogonale

Pour garantir que les points transformés restent dans l'espace RGB après la rotation, nous appliquons une projection orthogonale à la droite \( D_1 \). Cela permet de conserver les couleurs dans le cube des couleurs.

**Matrice de Projection** :

\[
P = I - \frac{\mathbf{v} \mathbf{v}^T}{\|\mathbf{v}\|^2}
\]

---

## Conclusion

- La **rotation** transforme les points dans l'espace \( \mathbb{R}^3 \) autour de l'axe défini par \( D_1 \).
- La **projection orthogonale** garantit que les couleurs restent dans l'espace RGB tout en préservant la géométrie de la transformation.
