
// let nom: string = "Lisya"
// console.log(nom)

// function estMajeur(age: number): string {
//     if (age >= 18)
//         return "Tu rentres";
//     else
//         return "Tu rentres pas";
// }

// console.log(estMajeur(1))

// function afficherCoord(coord: [number, number]): string {
//     return `Les coordonnées sont ${coord}`
// }

// console.log(afficherCoord([398091.10, 19039.91]))

// enum Semaine{
//     Lundi = "J-5 avant le week-end...",
//     Mardi = "J-4 avant le week-end...",
//     Mercredi = "J-3 avant le week-end...",
//     Jeudi = "J-2 avant le week-end...",
//     Vendredi = "Dernier jour avant le week-end !"
// }

// let jour = Semaine.Mercredi
// console.log(jour)

// function sommeTableau(numbers: number[]): number {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++){
//         total += numbers[i];
//     }
//     return total;
// }

// console.log(sommeTableau([10, 5, 60.8, 2]))

// interface Personne {
//     nom: string;
//     age: number;
//     adresse: string;
// }

// const lisya: Personne = {
//     nom: "Lisya",
//     age: 20,
//     adresse: "123 Rue de la Paix"
// };

// console.log(lisya); // { nom: 'Lisya', age: 20, adresse: '123 Rue de la Paix' }

// class Dashboard{
//     constructor (public name: string, public projet: string, private rank: number, private valeur: number) {}

//     estimation(): number {
//         return this.rank * this.valeur * 3;
//     }

//     visionGlobale(): string {
//         return `Le projet "${this.name}" au stade ${this.projet} a une valeur de ${this.valeur}€. Son estimation est cependant de ${this.estimation()}€.`;
//     }
// }

// const tableauDeBord = new Dashboard("Immobilier Dubai", "avancé", 5, 1000);
// console.log(tableauDeBord.visionGlobale()); // Le tableau de bord Projet Immobilier Dubai pour le projet Projet Avancé a une valeur de 1000. Son estimation est cependant de 5000.

// class Panier {
//     constructor(public nom: string, public catégorie: string, private achat: number, private marge: number) {}

//     prixFinal(): number{
//         let prix: number;
//         return prix = this.achat * this.marge;
//     }

//     totalInterne(): string {
//         return `Le produit ${this.nom} (${this.catégorie}) a un prix de ${this.prixFinal()}€ après une marge de ${this.marge}.`;
//     }

//     totalClient(): number {
//         return this.prixFinal() * 1.2; // Ajout de 20% de TVA
//     }
// }

// const panier = new Panier("Chaussures de sport", "Vêtements", 50, 3);
// console.log(panier.totalInterne());

// console.log(`Le prix pour le client est de ${panier.totalClient()}€ TTC.`);

// class Panier {
//     private produits: { nom: string; prix: number }[] = [];

//     // Ajouter un produit au panier
//     ajouterProduit(nom: string, prix: number): any {
//         this.produits.push({ nom, prix });
//     }

//     // Calculer le total du panier
//     total(): number {
//         return this.produits.reduce((somme, produit) => somme + produit.prix, 0);
//     }

//     // Afficher les produits (optionnel)
//     afficherProduits(): void {
//         console.log("Produits dans le panier :");
//         this.produits.forEach(p => console.log(`- ${p.nom}: ${p.prix}€`));
//     }
// }

// const monPanier = new Panier();

// monPanier.ajouterProduit("Pomme", 2.5);
// monPanier.ajouterProduit("Pain", 1.2);
// monPanier.ajouterProduit("Lait", 1.8);

// monPanier.afficherProduits(); // (optionnel)
// console.log("Total :", monPanier.total(), "€");

// type ResponseAPI = {
//     code: number;
//     message: string;
// }

function echanger<T, U>(a: T, b: U): [U, T] {
    return [b, a];
}

const result = echanger<string, number>("Hello", 42);
console.log(result); // [42, "Hello"]