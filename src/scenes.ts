export type Choice = {
  text: string;
  result?: string;
  ending?: Ending;
  video?: string;
};

export type Scene = {
  text?: string;
  img?: string;
  startVideo?: string;
  choices: Choice[];
};

export type Ending =
  | 'Shells fall in'
  | 'Too fishy'
  | 'Too sticky'
  | 'Too gloupy'
  | 'Burnt'
  | 'Too many sprouts'
  | 'Too salty'
  | 'Too watery'
  | 'No taste'
  | 'Gross'
  | 'Too spicy'
  | 'Perfect';

const scene0: Scene = {
  img: 'noodles1.jpg',
  choices: [
    {
      text: 'Start',
    },
  ],
};

const scene1: Scene = {
  text: 'Which ramyeon should I buy?',
  // img: 'noodles1.jpg',
  startVideo: 'scene1.mp4',
  choices: [
    {
      text: 'Buldak',
      ending: 'Too spicy',
      video: 'scene2-buldak.mp4',
    },
    {
      text: 'Cheese',
      ending: 'Gross',
      video: 'scene2-cheese.mp4',
    },
    {
      text: 'Kimchi',
      video: 'scene2-kimchi.mp4',
    },
  ],
};

const scene2: Scene = {
  text: 'Finished shopping. How to go home?',
  // img: 'noodles2.jpg',
  choices: [
    {
      text: 'By Taxi',
      video: 'scene3-taxi.mp4',
    },
    {
      text: 'By bike',
      ending: 'Too watery',
      video: 'scene3-bike.mp4',
    },
    {
      text: 'By foot',
      ending: 'Gross',
      video: 'scene3-walk.mp4',
    },
  ],
};

const scene3: Scene = {
  text: 'Boiling noodles. How many cups of water?',
  img: 'noodles3.jpg',
  choices: [
    {
      text: '1 cup',
      ending: 'Too salty',
      video: 'scene4-water.mp4',
    },
    {
      text: '2 cups',
      video: 'scene4-water.mp4',
    },
    {
      text: '3 cups',
      ending: 'Too watery',
      video: 'scene4-water.mp4',
    },
  ],
};

const scene4: Scene = {
  text: 'Looking in the fridge. Add what?',
  img: 'noodles4.jpg',
  choices: [
    {
      text: 'An egg',
      ending: 'Shells fall in',
      video: 'scene5-eggs.mp4',
    },
    {
      text: 'Soy Sauce',
      video: 'scene5-soy-sauce.mp4',
    },
    {
      text: 'Prawn',
      ending: 'Too fishy',
      video: 'scene5-prawns.mp4',
    },
  ],
};

const scene5: Scene = {
  text: 'Still looking. Add what?',
  // img: 'noodles4.jpg',
  choices: [
    {
      text: 'Rice',
      ending: 'Too gloupy',
      video: 'scene5-rice.mp4',
    },
    {
      text: 'Bok Choi',
      video: 'scene5-bok-choi.mp4',
    },
    {
      text: 'Cheese',
      ending: 'Too sticky',
      video: 'scene5-cheese.mp4',
    },
  ],
};

const scene6: Scene = {
  text: 'Still looking. Add what?',
  // img: 'noodles4.jpg',
  choices: [
    {
      text: 'Sausage',
      video: 'scene5-sausage.mp4',
    },
    {
      text: 'Bean sprouts',
      ending: 'Too many sprouts',
      video: 'scene5-bean-sprouts.mp4',
    },
    {
      text: 'Octopus',
      ending: 'Burnt',
      video: 'scene5-octopus.mp4',
    },
  ],
};

const scene7: Scene = {
  text: 'Cooking now. Boil for how long?',
  img: 'noodles5.jpg',
  choices: [
    {
      text: '2 minutes',
      video: 'scene6-cook.mp4',
    },
    {
      text: '4 minutes',
      video: 'scene6-cook.mp4',
    },
    {
      text: '5 minutes',
      video: 'scene6-cook.mp4',
    },
  ],
};

export const scenes: Scene[] = [
  scene0,
  scene1,
  scene2,
  scene3,
  scene4,
  scene5,
  scene6,
  scene7,
];
