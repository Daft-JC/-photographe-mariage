// Pages locales /photographe-mariage/[ville] : un contenu propre par zone.
// Ne pas y mentionner de mariages ou de lieux où Alessio n'a pas réellement travaillé.

export type Ville = {
  slug: string;
  nom: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  lieuxTitre: string;
  lieux: string[];
  conseil: string;
  photos: { src: string; alt: string }[];
  faq: { q: string; a: string }[];
};

export const VILLES: Ville[] = [
  {
    slug: 'marseille',
    nom: 'Marseille',
    metaTitle: 'Photographe mariage Marseille — photo & vidéo',
    metaDescription:
      "Photographe et vidéaste de mariage à Marseille : reportage naturel et élégant, du Vieux-Port aux calanques. Photos + film de mariage, formules dès 1 400 €.",
    h1: 'Photographe de mariage à Marseille',
    intro:
      "Marseille a une lumière à part : franche, dorée, qui rebondit sur la pierre blanche et la mer. Basé tout près, à Martigues, j'accompagne les couples qui se marient à Marseille avec un reportage photo et vidéo discret, pensé pour raconter leur journée telle qu'elle a été vécue.",
    lieuxTitre: 'Se marier à Marseille : des décors variés',
    lieux: [
      "Le Vieux-Port, le Pharo et la Corniche pour des portraits de couple face à la mer",
      "Les ruelles colorées du Panier et le Vallon des Auffes pour une ambiance authentique",
      "Les calanques et la côte, à réserver aux séances couple ou day-after bien préparées",
      "Les bastides et domaines des alentours, d'Allauch à Aubagne, pour la réception",
    ],
    conseil:
      "À Marseille, le vent et le soleil de midi sont les deux paramètres à anticiper. Je vous aide à caler le planning pour que la séance couple tombe en fin d'après-midi, quand la lumière devient douce sur la mer. Pour les sites naturels protégés comme les calanques, il faut parfois anticiper les autorisations : on en parle ensemble en amont.",
    photos: [
      { src: '/portfolio/amore/DSC01259.jpg', alt: 'Mariés souriants devant un escalier en pierre, photo de mariage en noir et blanc' },
      { src: '/portfolio/ispirazione/DSC01982.jpg', alt: 'Photo de mariage artistique — Maison La Martina' },
      { src: '/portfolio/dettagli/DSC05328.jpg', alt: 'Détail de décoration de mariage' },
    ],
    faq: [
      {
        q: 'Vous déplacez-vous partout à Marseille et dans ses environs ?',
        a: "Oui : Marseille, Aubagne, Cassis, Allauch, La Ciotat et toute la métropole. Les éventuels frais de déplacement sont indiqués clairement dans le devis.",
      },
      {
        q: 'Proposez-vous la photo et la vidéo ensemble ?',
        a: 'Oui, toutes les formules incluent la captation photo et vidéo : de 300 à 400 photos retouchées et, selon la formule, un teaser, un film de 20 à 45 minutes ou une vidéo longue de la journée.',
      },
    ],
  },
  {
    slug: 'aix-en-provence',
    nom: 'Aix-en-Provence',
    metaTitle: "Photographe mariage Aix-en-Provence — photo & vidéo",
    metaDescription:
      "Photographe et vidéaste de mariage à Aix-en-Provence et dans le pays d'Aix : bastides, domaines viticoles, Sainte-Victoire. Reportage élégant, formules dès 1 400 €.",
    h1: 'Photographe de mariage à Aix-en-Provence',
    intro:
      "Entre ses fontaines, ses façades ocre et les domaines qui l'entourent, Aix-en-Provence est l'un des plus beaux cadres de mariage de la région. J'y propose un reportage photo et vidéo naturel, attentif aux détails comme aux émotions.",
    lieuxTitre: "Le pays d'Aix, terre de bastides",
    lieux: [
      "Le centre historique, du cours Mirabeau à la place de l'Hôtel de Ville, pour la cérémonie civile",
      "Les bastides et châteaux du pays d'Aix, typiques des réceptions provençales",
      "Les domaines viticoles au pied de la montagne Sainte-Victoire",
      "Les allées de platanes et champs d'oliviers pour la séance couple",
    ],
    conseil:
      "En été, la chaleur peut être forte en début d'après-midi dans le pays d'Aix : je conseille de prévoir la séance couple en fin de journée, quand la Sainte-Victoire se colore. Les vignes et les allées de platanes offrent alors une lumière rasante idéale.",
    photos: [
      { src: '/portfolio/amore/DSC01920.jpg', alt: 'Mariée souriante tenant le visage de son mari dans un parc' },
      { src: '/portfolio/il-giorno/DSC01941.jpg', alt: 'Reportage du jour du mariage — Maison La Martina' },
      { src: '/portfolio/dettagli/DSC00142.jpg', alt: 'Détail de décoration de mariage' },
    ],
    faq: [
      {
        q: "Travaillez-vous dans les domaines et bastides autour d'Aix ?",
        a: "Oui, partout dans le pays d'Aix : Aix-en-Provence, Puyricard, Venelles, Trets, Rousset, Gardanne et leurs alentours.",
      },
      {
        q: 'Quand recevons-nous nos photos ?',
        a: 'Les photos retouchées sont livrées sous 2 à 4 semaines, les vidéos sous 2 à 3 mois.',
      },
    ],
  },
  {
    slug: 'martigues',
    nom: 'Martigues',
    metaTitle: 'Photographe mariage Martigues & Côte Bleue — photo & vidéo',
    metaDescription:
      "Photographe et vidéaste de mariage basé à Martigues : canaux de la Venise provençale, Côte Bleue, étang de Berre. Reportage photo et film, formules dès 1 400 €.",
    h1: 'Photographe de mariage à Martigues et sur la Côte Bleue',
    intro:
      "Martigues, c'est ma base. Ses canaux, ses quais colorés et les criques de la Côte Bleue font partie de mon quotidien. Pour un mariage à Martigues ou autour de l'étang de Berre, c'est un vrai avantage pour trouver la bonne lumière au bon moment.",
    lieuxTitre: 'La Venise provençale et la Côte Bleue',
    lieux: [
      "Le quartier de l'Île et le Miroir aux oiseaux, avec ses façades colorées et ses barques",
      "Les canaux et les ponts de Martigues pour des portraits de couple pleins de caractère",
      "La Côte Bleue — Carro, La Couronne, Sausset-les-Pins — pour une séance au coucher du soleil",
      "Les rives de l'étang de Berre, d'Istres à Saint-Mitre-les-Remparts",
    ],
    conseil:
      "Sur la Côte Bleue, le soleil se couche sur la mer : c'est le moment parfait pour une séance couple ou une séance day-after. Je vous aide à choisir le spot en fonction du vent et de la saison.",
    photos: [
      { src: '/portfolio/amore/DSC05335.jpg', alt: 'Portrait de couple de mariés — Maison La Martina' },
      { src: '/portfolio/ispirazione/DSC00797.jpg', alt: 'Photo de mariage artistique en lumière naturelle' },
      { src: '/portfolio/il-giorno/DSC01757.jpg', alt: 'Moment du jour du mariage — reportage photo' },
    ],
    faq: [
      {
        q: 'Où êtes-vous basé ?',
        a: "À Martigues. J'interviens à Martigues, Port-de-Bouc, Châteauneuf-les-Martigues, Sausset-les-Pins, Carry-le-Rouet, Istres, Fos-sur-Mer et partout autour de l'étang de Berre.",
      },
      {
        q: 'Proposez-vous des séances couple avant ou après le mariage ?',
        a: "Oui, la Côte Bleue s'y prête particulièrement. Contactez-moi pour en parler et connaître les disponibilités.",
      },
    ],
  },
  {
    slug: 'provence',
    nom: 'Provence',
    metaTitle: 'Photographe mariage Provence — Alpilles, Luberon, Camargue',
    metaDescription:
      "Photographe et vidéaste de mariage en Provence : mas, domaines et bastides des Alpilles, du Luberon et de Camargue. Reportage naturel et élégant, formules dès 1 400 €.",
    h1: 'Photographe de mariage en Provence',
    intro:
      "Mas en pierre sèche, allées d'oliviers, champs de lavande et lumière dorée du soir : la Provence est une évidence pour un mariage. Depuis les Bouches-du-Rhône, je me déplace dans toute la région pour photographier et filmer votre journée.",
    lieuxTitre: 'Les grands décors provençaux',
    lieux: [
      "Les Alpilles — Saint-Rémy-de-Provence, Les Baux, Eygalières — et leurs mas",
      "Le Luberon et ses villages perchés, de Gordes à Lourmarin",
      "La Camargue, ses étangs et ses manades pour un mariage plus sauvage",
      "Le Var et le pays d'Aix pour les domaines viticoles",
    ],
    conseil:
      "Les lavandes fleurissent en général de fin juin à mi-juillet selon l'altitude et la météo : si vous rêvez d'une séance dans les champs, on cale la date ensemble. Pour les mariages en plein été, la séance couple se fait idéalement dans la dernière heure avant le coucher du soleil.",
    photos: [
      { src: '/portfolio/ispirazione/DSC02085.jpg', alt: 'Photo de mariage artistique en Provence' },
      { src: '/portfolio/amore/DSC01855.jpg', alt: 'Portrait de couple de mariés' },
      { src: '/portfolio/dettagli/DSC01944.jpg', alt: 'Détail de décoration de mariage' },
    ],
    faq: [
      {
        q: 'Vous déplacez-vous partout en Provence ?',
        a: "Oui : Bouches-du-Rhône, Vaucluse, Var, Alpes-de-Haute-Provence et au-delà, en France comme en Italie. Les frais de déplacement sont indiqués dans le devis.",
      },
      {
        q: 'Combien coûte un photographe et vidéaste de mariage ?',
        a: 'Les formules vont de 1 400 € (Eternità) à 1 800 € (Per Sempre), photo et vidéo incluses, hors frais de déplacement. Le détail est sur la page Services.',
      },
    ],
  },
];
