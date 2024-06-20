# Rendu Node Exam

## Création des marques :

url : **POST** localhost:3000/api/marques

```sql
{
	"nom": "Midway",
	"pays": "France",
	"madeIn":"2022"
}
```

```sql
{
	"nom": "Bally",
	"pays": "France",
	"madeIn":"2022"
}
```

```sql
{
	"nom": "Williams",
	"pays": "France",
	"madeIn":"2022"
}
```

```sql
{
	"nom": "Stern",
	"pays": "France",
	"madeIn":"2022"
}
```

```sql
{
	"nom": "Gottlieb",
	"pays": "France",
	"madeIn":"2022"
}
```

## Création des flippers :

url : **POST** localhost:3000/api/flippers

```sql
{
	"nom": "Flipper Rush Pinball Limited Edition",
	"marque_id": "66742cbfa02a901c5440a77c",
	"caractéristiques":{
		"année":"2022",
		"note":"4",
		"prix":"10000",
		"disponibilité":"disponible"
	},
	"images":[]
}
```

```sql
{
	"nom": "Flipper Avengers : Infinity Quest Premium",
	"marque_id": "66742cbfa02a901c5440a77c",
	"caractéristiques":{
		"année":"2022",
		"note":"4",
		"prix":"10000",
		"disponibilité":"disponible"
	},
	"images":[]
}
```

```sql
{
	"nom": "Flipper Teenage Mutant Ninja Turtles Pro",
	"marque_id": "66742cbfa02a901c5440a77c",
	"caractéristiques":{
		"année":"2022",
		"note":"4",
		"prix":"10000",
		"disponibilité":"disponible"
	},
	"images":[]
}
```

```sql
{
	"nom": "Flipper The Beatles Diamond Edition",
	"marque_id": "66742cbfa02a901c5440a77c",
	"caractéristiques":{
		"année":"2022",
		"note":"4",
		"prix":"10000",
		"disponibilité":"disponible"
	},
	"images":[]
}
```

```sql
{
	"nom": "Flipper Black Knight : Sword of Rage Limited Edition",
	"marque_id": "66742cbfa02a901c5440a77c",
	"caractéristiques":{
		"année":"2022",
		"note":"4",
		"prix":"10000",
		"disponibilité":"disponible"
	},
	"images":[]
}
```

## Explication des choix

J’ai créer un modèle **“Marques”** et un modèle **“Flipper”,** chaque Flipper est associé à une marque par un ID.
J’ai fais le choix de créer un model **“Caractéristique”** dans le model “Flipper” car chaque Flipper à ses caractéristiques.

### Modèle Marques :

```sql
{
  nom: string;
  pays: string;
  madeIn: number;
}
```

### Modèle Flipper :

```sql
{
  nom: string;
  marque_id: Types.ObjectId;
  caractéristiques: ICaracteristiques;
  images: string[];
}
```

### Modèle Caractéristiques :

```sql
{
  année: number;
  note: number;
  prix: number;
  disponibilité: string;
}
```

### Optimisation

Pour optimisé ce projet j'aurais pu ajouter une pagination dans les requetes pour ne pas redescendre toutes les données. 
Actuellement ça ne pose pas de problème car j'ai ajouté 5 marques et 5 Flipper mais au long thermes il y aura beaucoup de données et ce sera intéréssant d'ajouter la pagination