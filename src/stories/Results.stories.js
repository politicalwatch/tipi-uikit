import { vueRouter } from 'storybook-vue3-router';
import TipiResults from '@/components/Results/Results.vue';
import { topicsStyles } from './mocks';

const customRoutes = [
  {
    path: '/',
    name: 'home',
    component: TipiResults,
  },
  {
    path: '/initiative/:id',
    name: 'initiative',
    params: { id: '161-000792' },
    component: TipiResults,
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/TipiResults',
  component: TipiResults,
  decorators: [vueRouter(customRoutes)],
  tags: ['autodocs'],

  argTypes: {
    loadingResults: {
      type: 'boolean',
    },
    initiatives: {
      type: 'array',
    },
    queryMeta: {
      type: 'object',
    },
    layout: {
      type: 'text',
    },
    topicsStyles: {
      type: 'object',
    },
    metaDeputies: {
      type: 'text',
    },
    metaGroupsOthers: {
      type: 'text',
    },
    metaColors: {
      type: 'object',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    loadingResults: false,
    initiatives: [
      {
        tagged: [
          {
            knowledgebase: 'ods',
            topics: ['ODS 12 Producción y consumo responsables', 'ODS 2 Hambre cero'],
            tags: [
              {
                topic: 'ODS 12 Producción y consumo responsables',
                subtopic: '12.3 Reducción de desperdicio de alimentos',
                tag: 'Alimentos ecológicos',
                times: 3,
              },
              {
                topic: 'ODS 12 Producción y consumo responsables',
                subtopic: '12.3 Reducción de desperdicio de alimentos',
                tag: 'Industrias alimentarias',
                times: 1,
              },
              {
                topic: 'ODS 12 Producción y consumo responsables',
                subtopic: '12.3 Reducción de desperdicio de alimentos',
                tag: 'Pérdida de alimentos',
                times: 1,
              },
              {
                topic: 'ODS 2 Hambre cero',
                subtopic: '2.1 Acceso universal a alimentos',
                tag: 'Disponibilidad de alimentos',
                times: 2,
              },
              {
                topic: 'ODS 2 Hambre cero',
                subtopic: '2.1 Acceso universal a alimentos',
                tag: 'Escasez de comida',
                times: 1,
              },
              {
                topic: 'ODS 2 Hambre cero',
                subtopic: '2.1 Acceso universal a alimentos',
                tag: 'FAO',
                times: 1,
              },
              {
                topic: 'ODS 2 Hambre cero',
                subtopic: '2.c Estabilidad del mercado de la alimentación',
                tag: 'Cadena agroalimentaria',
                times: 3,
              },
              {
                topic: 'ODS 2 Hambre cero',
                subtopic: '2.c Estabilidad del mercado de la alimentación',
                tag: 'Precios de los alimentos',
                times: 1,
              },
            ],
          },
        ],
        title:
          'Proposición no de Ley sobre medidas para defender la competitividad de los alimentos españoles.',
        status: 'Aprobada',
        reference: '161/000592',
        authors: ['Grupo Parlamentario Popular'],
        deputies: ['Marcos Ortega, Milagros', 'Sayas López, Sergio'],
        id: '161-000592',
        place: 'Comisión Mixta para Coordinación y Seguimiento Estrategia Española ODS',
        url: 'https://www.congreso.es/es/busqueda-de-iniciativas?p_p_id=iniciativas&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_iniciativas_mode=mostrarDetalle&_iniciativas_legislatura=XV&_iniciativas_id=161%2F000592',
        created: '2024-04-05T00:00:00+00:00',
        oldid: 'ba0d0e064c6b4cd28a6675b26b6b3f8ac8b227eb',
        initiative_type: '161',
        initiative_type_alt: 'Proposición no de Ley en Comisión',
        updated: '2024-04-29T00:00:00+00:00',
      },
      {
        tagged: [
          {
            knowledgebase: 'ods',
            topics: [
              'ODS 1 Fin de la pobreza',
              'ODS 13 Acción por el clima',
              'ODS 2 Hambre cero',
              'ODS 5 Igualdad de género',
            ],
            tags: [
              {
                topic: 'ODS 1 Fin de la pobreza',
                subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
                tag: 'Política Agraria Común (PAC)',
                times: 3,
              },
              {
                topic: 'ODS 1 Fin de la pobreza',
                subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
                tag: 'Resiliencia y cambio climático ',
                times: 1,
              },
              {
                topic: 'ODS 1 Fin de la pobreza',
                subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
                tag: 'Seguros agrarios',
                times: 1,
              },
              {
                topic: 'ODS 13 Acción por el clima',
                subtopic: '13.1 Adaptación frente a desastres naturales',
                tag: 'Crisis climática',
                times: 1,
              },
              {
                topic: 'ODS 13 Acción por el clima',
                subtopic: '13.1 Adaptación frente a desastres naturales',
                tag: 'Resiliencia al cambio climático',
                times: 1,
              },
              {
                topic: 'ODS 13 Acción por el clima',
                subtopic: '13.2 Planes nacionales contra el cambio climatico',
                tag: 'Cambio climático',
                times: 1,
              },
              {
                topic: 'ODS 2 Hambre cero',
                subtopic: '2.1 Acceso universal a alimentos',
                tag: 'Ayuda alimentaria',
                times: 1,
              },
              {
                topic: 'ODS 2 Hambre cero',
                subtopic: '2.3 Duplicar la productividad agrícola',
                tag: 'Agricultura familiar',
                times: 6,
              },
              {
                topic: 'ODS 2 Hambre cero',
                subtopic: '2.3 Duplicar la productividad agrícola',
                tag: 'Ganadería',
                times: 1,
              },
              {
                topic: 'ODS 5 Igualdad de género',
                subtopic: '5.a Derecho a los recursos económicos',
                tag: 'Mujeres en el medio rural',
                times: 2,
              },
            ],
          },
        ],
        title:
          'Proposición no de Ley relativa al impulso de medidas destinadas a la promoción de la agricultura familiar.',
        status: 'Aprobada',
        reference: '161/000271',
        authors: ['Grupo Parlamentario Socialista'],
        deputies: [
          'Faneca López, María Luisa',
          'Matos Castro, Sergio Carlos',
          'Regades Fernández, David',
        ],
        id: '161-000271',
        place: 'Comisión de Agricultura, Pesca y Alimentación',
        url: 'https://www.congreso.es/es/busqueda-de-iniciativas?p_p_id=iniciativas&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_iniciativas_mode=mostrarDetalle&_iniciativas_legislatura=XV&_iniciativas_id=161%2F000271',
        created: '2024-02-08T00:00:00+00:00',
        oldid: '0045ea30e955e005c271c275828af16ce86710af',
        initiative_type: '161',
        initiative_type_alt: 'Proposición no de Ley en Comisión',
        updated: '2024-04-24T00:00:00+00:00',
      },
      {
        tagged: [
          {
            knowledgebase: 'ods',
            topics: [
              'ODS 10 Reducción de las desigualdades',
              'ODS 17 Alianzas para lograr los objetivos',
              'ODS 2 Hambre cero',
              'ODS 3 Salud y bienestar',
            ],
            tags: [
              {
                topic: 'ODS 10 Reducción de las desigualdades',
                subtopic: '10.2 Inclusión social, económica y política',
                tag: 'Ayudas de Emergencia Social',
                times: 1,
              },
              {
                topic: 'ODS 10 Reducción de las desigualdades',
                subtopic: '10.6 Representación de países en desarrollo',
                tag: 'ONU',
                times: 1,
              },
              {
                topic: 'ODS 10 Reducción de las desigualdades',
                subtopic: '10.7 Facilitar la migración',
                tag: 'Refugiados',
                times: 12,
              },
              {
                topic: 'ODS 10 Reducción de las desigualdades',
                subtopic: '10.b Asistencia oficial al desarrollo',
                tag: 'Agencia Española de Cooperación Internacional para el Desarrollo (AECID)',
                times: 2,
              },
              {
                topic: 'ODS 10 Reducción de las desigualdades',
                subtopic: '10.b Asistencia oficial al desarrollo',
                tag: 'Ayuda de emergencia',
                times: 1,
              },
              {
                topic: 'ODS 10 Reducción de las desigualdades',
                subtopic: '10.b Asistencia oficial al desarrollo',
                tag: 'Ayuda humanitaria',
                times: 2,
              },
              {
                topic: 'ODS 10 Reducción de las desigualdades',
                subtopic: '10.b Asistencia oficial al desarrollo',
                tag: 'Cooperación Internacional al Desarrollo',
                times: 1,
              },
              {
                topic: 'ODS 17 Alianzas para lograr los objetivos',
                subtopic: '17.2 Asistencia oficial al desarrollo',
                tag: 'AECID',
                times: 2,
              },
              {
                topic: 'ODS 17 Alianzas para lograr los objetivos',
                subtopic: '17.2 Asistencia oficial al desarrollo',
                tag: 'Ayuda oficial al desarrollo multilateral',
                times: 1,
              },
              {
                topic: 'ODS 17 Alianzas para lograr los objetivos',
                subtopic: '17.2 Asistencia oficial al desarrollo',
                tag: 'Cooperación internacional para el desarrollo',
                times: 1,
              },
              {
                topic: 'ODS 2 Hambre cero',
                subtopic: '2.1 Acceso universal a alimentos',
                tag: 'Ayuda alimentaria',
                times: 1,
              },
              {
                topic: 'ODS 2 Hambre cero',
                subtopic: '2.2 Fin de la malnutrición',
                tag: 'Desnutrición',
                times: 1,
              },
              {
                topic: 'ODS 2 Hambre cero',
                subtopic: '2.2 Fin de la malnutrición',
                tag: 'Desnutrición aguda',
                times: 1,
              },
              {
                topic: 'ODS 3 Salud y bienestar',
                subtopic: '3.8 Sanidad universal',
                tag: 'Centro de salud',
                times: 1,
              },
              {
                topic: 'ODS 3 Salud y bienestar',
                subtopic: '3.8 Sanidad universal',
                tag: 'Refugiados y sanidad',
                times: 1,
              },
            ],
          },
        ],
        title: 'Proposición no de Ley relativa a apoyar la vital labor de la UNRWA.',
        status: 'Aprobada',
        reference: '162/000168',
        authors: ['Grupo Parlamentario Socialista'],
        deputies: ['Guijarro Ceballos, María', 'Ros Martínez, Susana'],
        id: '162-000168',
        place: 'Pleno',
        url: 'https://www.congreso.es/es/busqueda-de-iniciativas?p_p_id=iniciativas&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_iniciativas_mode=mostrarDetalle&_iniciativas_legislatura=XV&_iniciativas_id=162%2F000168',
        created: '2024-03-13T00:00:00+00:00',
        oldid: '7c6a4729daf0951da2abecc85e57b843e07d074a',
        initiative_type: '162',
        initiative_type_alt: 'Proposición no de Ley ante el Pleno',
        updated: '2024-04-23T00:00:00+00:00',
      },
    ],
    queryMeta: { total: 3, pages: 1, page: 1, per_page: 20 },
    layout: undefined,
    topicsStyles,
    metaDeputies: 'Diputada/o',
    metaGroupsOthers: 'Autor',
    metaColors: undefined,
  },
};
