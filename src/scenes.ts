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
      result: 'Got home. ',
    },
    {
      text: 'By bike',
      result: 'Sachet fell out. ',
      ending: 'Too watery',
    },
    {
      text: 'By foot',
      result: 'Dropped in sewer. ',
      ending: 'Gross',
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
    },
    {
      text: '2 cups',
    },
    {
      text: '3 cups',
      ending: 'Too watery',
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
    },
    {
      text: 'Soy Sauce',
    },
    {
      text: 'Prawn',
      ending: 'Too fishy',
    },
  ],
};

const scene5: Scene = {
  text: 'Still looking. Add what?',
  img: 'noodles4.jpg',
  choices: [
    {
      text: 'Rice',
      ending: 'Too gloupy',
    },
    {
      text: 'Bok Choi',
    },
    {
      text: 'Cheese',
      ending: 'Too sticky',
    },
  ],
};

const scene6: Scene = {
  text: 'Still looking. Add what?',
  img: 'noodles4.jpg',
  choices: [
    {
      text: 'Sausage',
    },
    {
      text: 'Bean sprouts',
      ending: 'Too many sprouts',
    },
    {
      text: 'Squid',
      ending: 'Burnt',
    },
  ],
};

const scene7: Scene = {
  text: 'Cooking now. Boil for how long?',
  img: 'noodles5.jpg',
  choices: [
    {
      text: '2 minutes',
    },
    {
      text: '4 minutes',
    },
    {
      text: '5 minutes',
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
