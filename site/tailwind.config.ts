import type { Config } from 'tailwindcss'

import {
    grass,
    grassA,
    olive,
    oliveA,
    blue,
    blueA,
    plum,
    plumA,
    amber,
    amberA

} from '@radix-ui/colors';

const config: Config = {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: grass.grass9,
                    1: grass.grass1,
                    2: grass.grass2,
                    3: grass.grass3,
                    4: grass.grass4,
                    5: grass.grass5,
                    6: grass.grass6,
                    7: grass.grass7,
                    8: grass.grass8,
                    9: grass.grass9,
                    10: grass.grass10,
                    11: grass.grass11,
                    12: grass.grass12,

                    a: {
                        DEFAULT: grassA.grassA9,
                        1: grassA.grassA1,
                        2: grassA.grassA2,
                        3: grassA.grassA3,
                        4: grassA.grassA4,
                        5: grassA.grassA5,
                        6: grassA.grassA6,
                        7: grassA.grassA7,
                        8: grassA.grassA8,
                        9: grassA.grassA9,
                        10: grassA.grassA10,
                        11: grassA.grassA11,
                        12: grassA.grassA12,
                    }

                },
                secondary: {
                    DEFAULT: blue.blue9,
                    1: blue.blue1,
                    2: blue.blue2,
                    3: blue.blue3,
                    4: blue.blue4,
                    5: blue.blue5,
                    6: blue.blue6,
                    7: blue.blue7,
                    8: blue.blue8,
                    9: blue.blue9,
                    10: blue.blue10,
                    11: blue.blue11,
                    12: blue.blue12,

                    a: {
                        DEFAULT: blueA.blueA9,
                        1: blueA.blueA1,
                        2: blueA.blueA2,
                        3: blueA.blueA3,
                        4: blueA.blueA4,
                        5: blueA.blueA5,
                        6: blueA.blueA6,
                        7: blueA.blueA7,
                        8: blueA.blueA8,
                        9: blueA.blueA9,
                        10: blueA.blueA10,
                        11: blueA.blueA11,
                        12: blueA.blueA12,
                    }
                },
                third: {
                    DEFAULT: amber.amber9,
                    1: amber.amber1,
                    2: amber.amber2,
                    3: amber.amber3,
                    4: amber.amber4,
                    5: amber.amber5,
                    6: amber.amber6,
                    7: amber.amber7,
                    8: amber.amber8,
                    9: amber.amber9,
                    10: amber.amber10,
                    11: amber.amber11,
                    12: amber.amber12,

                    a: {
                        DEFAULT: amberA.amberA9,
                        1: amberA.amberA1,
                        2: amberA.amberA2,
                        3: amberA.amberA3,
                        4: amberA.amberA4,
                        5: amberA.amberA5,
                        6: amberA.amberA6,
                        7: amberA.amberA7,
                        8: amberA.amberA8,
                        9: amberA.amberA9,
                        10: amberA.amberA10,
                        11: amberA.amberA11,
                        12: amberA.amberA12,
                    }
                },
                gray: {
                    DEFAULT: olive.olive9,
                    1: olive.olive1,
                    2: olive.olive2,
                    3: olive.olive3,
                    4: olive.olive4,
                    5: olive.olive5,
                    6: olive.olive6,
                    7: olive.olive7,
                    8: olive.olive8,
                    9: olive.olive9,
                    10: olive.olive10,
                    11: olive.olive11,
                    12: olive.olive12,
                    a: {
                        DEFAULT: oliveA.oliveA9,
                        1: oliveA.oliveA1,
                        2: oliveA.oliveA2,
                        3: oliveA.oliveA3,
                        4: oliveA.oliveA4,
                        5: oliveA.oliveA5,
                        6: oliveA.oliveA6,
                        7: oliveA.oliveA7,
                        8: oliveA.oliveA8,
                        9: oliveA.oliveA9,
                        10: oliveA.oliveA10,
                        11: oliveA.oliveA11,
                        12: oliveA.oliveA12,
                    }

                }
            }
        },
    },
    plugins: [],
};

export default config;
