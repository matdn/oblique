export type ProgramEvent = {
  artist: string;
  title: string;
  time?: string;
  location?: string;
};

export type ProgramDay = {
  day: string;
  date?: string;
  events: ProgramEvent[];
};

export const program2025: ProgramDay[] = [
  {
    day: "Samedi 6 septembre",
    events: [
      {
        artist: "Maintenant que nous sommes ensembles",
        title: "Désobéir | Théâtre",
        time: "16h00 - 16h30",
        location: "Salle des fêtes",
      },
      {
        artist: "Madeline Tual",
        title: "Quelques Sorts | Danse",
        time: "16h30 - 17h00",
        location: "Salle des mariages",
      },
      {
        artist: "Varoujan Chichlian",
        title: "Promenons nous | Performance",
        time: "17h00 - 18h15",
        location: "Friche",
      },
      {
        artist: "Hélène Guilguet",
        title: "Refuges en montagne | Lecture",
        time: "17h00 - 18h15",
        location: "Cour",
      },
      {
        artist: "Aziyadé Abauzit",
        title: "Solastalgie | Court-métrage",
        time: "18h15 - 18h45",
        location: "Salle des fêtes",
      },
      {
        artist: "Estelle x Dorsène",
        title: "Écumes et Silences | Musique et poésie",
        time: "18h45 - 19h15",
        location: "Salle des fêtes",
      },
      {
        artist: "Magda x Saint Etienne",
        title: "L’énigme du sphinx | Danse et DJ",
        time: "19h15 - 20h00",
        location: "Cour",
      },
      {
        artist: "Matis x Arthur",
        title: "DJ set",
        time: "20h00 - 23h00",
        location: "Cour",
      },
    ],
  },
  {
    day: "Dimanche 7 septembre",
    events: [
      {
        artist: "Anémone",
        title: "Quand je serai grande je serai actrice | Théâtre",
        time: "15h00 - 15h30",
        location: "Salle des fêtes",
      },
      {
        artist: "LES GRIFFES",
        title: "Le refuge | Danse",
        time: "15h30 - 16h00",
        location: "Salle des fêtes",
      },
      {
        artist: "Varoujan Chichlian",
        title: "Promenons nous | Performance",
        time: "16h00 - 17h30",
        location: "Friche",
      },
      {
        artist: "Hélène Guilguet",
        title: "Refuges en montagne | Lecture",
        time: "16h00 - 17h30",
        location: "Cour",
      },
      {
        artist: "Les mains dans les poches",
        title: "Seconde main | Théâtre",
        time: "17h30 - 18h00",
        location: "Salle des fêtes",
      },
      {
        artist: "Courant d’air",
        title: "Feux de joie | Chant",
        time: "18h00 - 18h30",
        location: "Salle des fêtes",
      },
      {
        artist: "NEKO trio x Matisse",
        title: "Refuges dans l’univers de Miyazaki | Jazz et chant",
        time: "18h30 - 19h15",
        location: "Salle des fêtes",
      },
    ],
  },
];