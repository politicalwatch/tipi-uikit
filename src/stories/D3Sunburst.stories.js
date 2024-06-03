import D3Sunburst from '@/components/Charts/Sunburst/d3.sunburst.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/D3Sunburst',
  component: D3Sunburst,
  tags: ['autodocs'],

  argTypes: {
    config: {
      type: 'object',
    },
    datum: {
      type: 'array',
    },
    title: {
      type: 'text',
    },
    source: {
      type: 'text',
    },
    height: {
      type: 'number',
    },
    download: {
      type: 'text',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    config: {
      key: 'name',
      value: 'value',
      color: {
        key: 'color',
      },
      tooltip: {
        suffix: 'aparición',
        suffixPlural: 'apariciones',
      },
      transition: { duration: 1000 },
    },
    datum: [
      {
        name: 'Results',
        children: [
          {
            name: 'ODS 2',
            color: '#d3a029',
            children: [
              {
                name: '2.1 Acceso universal a alimentos',
                color: '#fcbf31',
                children: [
                  {
                    name: 'ODS 2 | Inflación de precios y coste de los alimentos',
                    color: '#ffe53b',
                    value: 1,
                  },
                ],
              },
              {
                name: '2.c Estabilidad del mercado de la alimentación',
                color: '#fcbf31',
                children: [
                  {
                    name: 'ODS 2 | Estabilidad en mercados alimentarios',
                    color: '#ffe53b',
                    value: 1,
                  },
                ],
              },
            ],
          },
          {
            name: 'ODS 3',
            color: '#4c9f38',
            children: [
              {
                name: '3.8 Cobertura sanitaria universal y medicamentos y vacunas asequibles',
                color: '#5bbe43',
                children: [
                  { name: 'ODS 3 | Medios de protección', color: '#6de350', value: 1 },
                  { name: 'ODS 3 | Personal médico', color: '#6de350', value: 4 },
                  { name: 'ODS 3 | Trabajador sanitario', color: '#6de350', value: 3 },
                  { name: 'ODS 3 | Atención sanitaria', color: '#6de350', value: 1 },
                  { name: 'ODS 3 | Atención médica de urgencia', color: '#6de350', value: 1 },
                  { name: 'ODS 3 | Centro de salud', color: '#6de350', value: 1 },
                  { name: 'ODS 3 | Listas de espera', color: '#6de350', value: 1 },
                  { name: 'ODS 3 | Sistema Nacional de Salud', color: '#6de350', value: 2 },
                ],
              },
              {
                name: '3.3 Epidemias y otras enfermedades transmisibles',
                color: '#5bbe43',
                children: [
                  {
                    name: 'ODS 3 | Enfermedades de transmisión sexual ',
                    color: '#6de350',
                    value: 1,
                  },
                ],
              },
              {
                name: '3.7 Salud sexual y reproductiva',
                color: '#5bbe43',
                children: [
                  { name: 'ODS 3 | Enfermedad de transmisión sexual', color: '#6de350', value: 1 },
                ],
              },
            ],
          },
          {
            name: 'ODS 4',
            color: '#c52333',
            children: [
              {
                name: '4.7 Educación para el desarrollo sostenible',
                color: '#eb2a3d',
                children: [
                  { name: 'ODS 4 | Artes escénicas y cinematografía', color: '#ff3249', value: 2 },
                  { name: 'ODS 4 | Artes plásticas y visuales', color: '#ff3249', value: 1 },
                ],
              },
            ],
          },
          {
            name: 'ODS 5',
            color: '#ed4135',
            children: [
              {
                name: '5.5 Participación plena de las mujeres',
                color: '#ff4e3f',
                children: [
                  { name: 'ODS 5 | Mujeres en política', color: '#ff5d4c', value: 2 },
                  { name: 'ODS 5 | Feminismo', color: '#ff5d4c', value: 1 },
                  { name: 'ODS 5 | Empleo masculinizado', color: '#ff5d4c', value: 1 },
                ],
              },
              {
                name: '5.2 Acabar con la violencia contra las mujeres',
                color: '#ff4e3f',
                children: [
                  { name: 'ODS 5 | Agresión contra una mujer', color: '#ff5d4c', value: 2 },
                  { name: 'ODS 5 | Mujeres asesinadas', color: '#ff5d4c', value: 1 },
                  { name: 'ODS 5 | Víctima de violación', color: '#ff5d4c', value: 1 },
                  { name: 'ODS 5 | Abuso sexual a mujeres', color: '#ff5d4c', value: 1 },
                ],
              },
              {
                name: '5.1 Fin de la discriminación contra las mujeres',
                color: '#ff4e3f',
                children: [{ name: 'ODS 5 | Movimiento feminista', color: '#ff5d4c', value: 1 }],
              },
              {
                name: '5.c Políticas para la igualdad',
                color: '#ff4e3f',
                children: [
                  { name: 'ODS 5 | Mujeres en el deporte', color: '#ff5d4c', value: 2 },
                  { name: 'ODS 5 | Deporte y mujeres', color: '#ff5d4c', value: 1 },
                ],
              },
            ],
          },
          {
            name: 'ODS 14',
            color: '#007dbc',
            children: [
              {
                name: '14.5 Conservación de zonas costeras y marinas',
                color: '#0095e1',
                children: [
                  {
                    name: 'ODS 14 | Leyes de protección de las costas y eventos culturales',
                    color: '#00b3ff',
                    value: 1,
                  },
                ],
              },
              {
                name: '14.2 Protección de ecosistemas marinos',
                color: '#0095e1',
                children: [{ name: 'ODS 14 | Océanos', color: '#00b3ff', value: 2 }],
              },
              {
                name: '14.3 Acidificación de los océanos',
                color: '#0095e1',
                children: [{ name: 'ODS 14 | Temperatura del agua ', color: '#00b3ff', value: 1 }],
              },
            ],
          },
          {
            name: 'ODS 15',
            color: '#5cb84d',
            children: [
              {
                name: '15.3 Lucha contra la desertificación',
                color: '#6edc5c',
                children: [{ name: 'ODS 15 | Sequías', color: '#83ff6e', value: 2 }],
              },
              {
                name: '15.1 Ecosistemas terrestres y de agua dulce',
                color: '#6edc5c',
                children: [
                  {
                    name: 'ODS 15 | Ecosistemas interiores de agua dulce',
                    color: '#83ff6e',
                    value: 6,
                  },
                  {
                    name: 'ODS 15 | Protección de la cultura en ecosistemas terrestres',
                    color: '#83ff6e',
                    value: 1,
                  },
                ],
              },
            ],
          },
          {
            name: 'ODS 16',
            color: '#02558b',
            children: [
              {
                name: '16.6 Rendición de cuentas',
                color: '#0266a6',
                children: [
                  { name: 'ODS 16 | Cortes Generales', color: '#0379c7', value: 7 },
                  { name: 'ODS 16 | Funcionamiento del Congreso', color: '#0379c7', value: 4 },
                  { name: 'ODS 16 | Partidos políticos', color: '#0379c7', value: 27 },
                  { name: 'ODS 16 | Poder Judicial', color: '#0379c7', value: 1 },
                ],
              },
              {
                name: '16.4 Tráfico ilegal y crimen organizado',
                color: '#0266a6',
                children: [
                  { name: 'ODS 16 | Malversación de fondos', color: '#0379c7', value: 6 },
                  { name: 'ODS 16 | Crimen organizado', color: '#0379c7', value: 1 },
                  { name: 'ODS 16 | Delincuencia organizada', color: '#0379c7', value: 1 },
                ],
              },
              {
                name: '16.1 Reducción de la violencia',
                color: '#0266a6',
                children: [
                  { name: 'ODS 16 | Conflicto Palestino-Israelí', color: '#0379c7', value: 5 },
                  { name: 'ODS 16 | Asesinato', color: '#0379c7', value: 5 },
                  { name: 'ODS 16 | Agresión sexual', color: '#0379c7', value: 3 },
                  { name: 'ODS 16 | Violencia sexual', color: '#0379c7', value: 3 },
                  { name: 'ODS 16 | Homicidio', color: '#0379c7', value: 1 },
                  { name: 'ODS 16 | Guerra Ucrania', color: '#0379c7', value: 1 },
                  { name: 'ODS 16 | Guerras', color: '#0379c7', value: 1 },
                ],
              },
              {
                name: '16.5 Reducción de la corrupción',
                color: '#0266a6',
                children: [{ name: 'ODS 16 | Corrupción', color: '#0379c7', value: 3 }],
              },
              {
                name: '16.a Fortalecimiento de las instituciones de seguridad',
                color: '#0266a6',
                children: [
                  {
                    name: 'ODS 16 | Prevención de la violencia y la delincuencia',
                    color: '#0379c7',
                    value: 1,
                  },
                  { name: 'ODS 16 | Ciberseguridad', color: '#0379c7', value: 4 },
                  { name: 'ODS 16 | Dictadura', color: '#0379c7', value: 1 },
                ],
              },
              {
                name: '16.9 Identidad jurídica garantizada',
                color: '#0266a6',
                children: [
                  { name: 'ODS 16 | Documento nacional de identidad', color: '#0379c7', value: 1 },
                ],
              },
            ],
          },
        ],
        color: '#EEE',
      },
    ],
    title: 'Sunburst',
    height: 600,
    download: 'Download',
  },
};
