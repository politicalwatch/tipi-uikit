import { vueRouter } from 'storybook-vue3-router';
import TipiInitiativeCard from '@/components/InitiativeCard/InitiativeCard.vue';

const customRoutes = [
  {
    path: '/',
    name: 'home',
    component: TipiInitiativeCard,
  },
  {
    path: '/initiative/:id',
    name: 'initiative',
    params: { id: '161-000792' },
    component: TipiInitiativeCard,
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/TipiInitiativeCard',
  component: TipiInitiativeCard,
  decorators: [vueRouter(customRoutes)],
  tags: ['autodocs'],

  argTypes: {
    initiative: {
      type: 'object',
    },
    topicsStyles: {
      type: 'object',
    },
    extendedLayout: {
      type: 'boolean',
    },
    metaDeputies: {
      type: 'string',
    },
    metaGroupOthers: {
      type: 'string',
    },
    metaColors: {
      type: 'object',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    initiative: {
      tagged: [
        {
          knowledgebase: 'ods',
          topics: ['ODS 16 Paz, justicia e instituciones sólidas', 'ODS 5 Igualdad de género'],
          tags: [
            {
              topic: 'ODS 16 Paz, justicia e instituciones sólidas',
              subtopic: '16.1 Redución de la violencia',
              tag: 'Violencia de género',
              times: 1,
            },
            {
              topic: 'ODS 16 Paz, justicia e instituciones sólidas',
              subtopic: '16.a Fortalecimiento de las instituciones de seguridad',
              tag: 'Prevención de la violencia y la delincuencia',
              times: 1,
            },
            {
              topic: 'ODS 5 Igualdad de género',
              subtopic: '5.2 Acabar con la violencia contra las mujeres',
              tag: 'Ley 1/2004',
              times: 1,
            },
            {
              topic: 'ODS 5 Igualdad de género',
              subtopic: '5.2 Acabar con la violencia contra las mujeres',
              tag: 'Violencia de género',
              times: 1,
            },
          ],
        },
      ],
      title:
        'Proposición no de Ley sobre lucha contra la violencia de género en el ámbito digital.',
      status: 'En tramitación',
      reference: '161/000792',
      authors: ['Grupo Parlamentario Socialista'],
      deputies: [],
      id: '161-000792',
      place: 'Comisión de Igualdad',
      url: 'https://www.congreso.es/es/busqueda-de-iniciativas?p_p_id=iniciativas&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_iniciativas_mode=mostrarDetalle&_iniciativas_legislatura=XV&_iniciativas_id=161%2F000792',
      created: '2024-05-10T00:00:00+00:00',
      oldid: 'e351228585d59fe61d31d7590de8f386a9288e2d',
      initiative_type: '161',
      initiative_type_alt: 'Proposición no de Ley en Comisión',
      updated: '2024-05-14T00:00:00+00:00',
    },
    topicsStyles: {
      'ODS 1 Fin de la pobreza': {
        shortname: 'ODS 1',
        color: '#eb1c2d',
        image: 'ods-1.svg',
        orgs_logos: ['caritas.png'],
      },
      'ODS 2 Hambre cero': {
        shortname: 'ODS 2',
        color: '#d3a029',
        image: 'ods-2.svg',
        orgs_logos: ['fao.png'],
      },
      'ODS 3 Salud y bienestar': {
        shortname: 'ODS 3',
        color: '#4c9f38',
        image: 'ods-3.svg',
        orgs_logos: ['salud_por_der.png', 'isglobal.png'],
      },
      'ODS 4 Educación de calidad': {
        shortname: 'ODS 4',
        color: '#c52333',
        image: 'ods-4.svg',
        orgs_logos: ['cmi.png'],
      },
      'ODS 5 Igualdad de género': {
        shortname: 'ODS 5',
        color: '#ed4135',
        image: 'ods-5.svg',
        orgs_logos: ['cedawsombra.png', 'coordinadora.png', 'fpfe_g.png'],
      },
      'ODS 6 Agua limpia y saneamiento': {
        shortname: 'ODS 6',
        color: '#00aed9',
        image: 'ods-6.svg',
        orgs_logos: ['catedra-aquae.png', 'ongawa.png'],
      },
      'ODS 7 Energía asequible y no contaminante': {
        shortname: 'ODS 7',
        color: '#fdb713',
        image: 'ods-7.svg',
        orgs_logos: ['esf.png'],
      },
      'ODS 8 Trabajo decente y crecimiento económico': {
        shortname: 'ODS 8',
        color: '#8f1838',
        image: 'ods-8.svg',
        orgs_logos: ['ccoo.png'],
      },
      'ODS 9 Industria, innovación e infraestructura': {
        shortname: 'ODS 9',
        color: '#f06a38',
        image: 'ods-9.svg',
        orgs_logos: ['foretica.png'],
      },
      'ODS 10 Reducción de las desigualdades': {
        shortname: 'ODS 10',
        color: '#dd1367',
        image: 'ods-10.svg',
        orgs_logos: ['congde.png', 'caritas.png'],
      },
      'ODS 11 Ciudades y comunidades sostenibles': {
        shortname: 'ODS 11',
        color: '#f69c39',
        image: 'ods-11.svg',
        orgs_logos: ['idl_uam.png', 'itgespub.png'],
      },
      'ODS 12 Producción y consumo responsables': {
        shortname: 'ODS 12',
        color: '#cf8d2a',
        image: 'ods-12.svg',
        orgs_logos: ['hispacoop.png'],
      },
      'ODS 13 Acción por el clima': {
        shortname: 'ODS 13',
        color: '#48773e',
        image: 'ods-13.svg',
        orgs_logos: ['wwf.png'],
      },
      'ODS 14 Vida submarina': {
        shortname: 'ODS 14',
        color: '#007dbc',
        image: 'ods-14.svg',
        orgs_logos: ['oceana.png'],
      },
      'ODS 15 Vida de ecosistemas terrestres': {
        shortname: 'ODS 15',
        color: '#5cb84d',
        image: 'ods-15.svg',
        orgs_logos: ['greenpeace.png'],
      },
      'ODS 16 Paz, justicia e instituciones sólidas': {
        shortname: 'ODS 16',
        color: '#02558b',
        image: 'ods-16.svg',
        orgs_logos: [],
      },
      'ODS 17 Alianzas para lograr los objetivos': {
        shortname: 'ODS 17',
        color: '#183668',
        image: 'ods-17.svg',
        orgs_logos: ['mauec.png'],
      },
      'no-topic': { shortname: 'Sin relación con la Agenda2030' },
    },
    extendedLayout: true,
    metaDeputies: 'Diputada/o',
    metaGroupOthers: 'Autor',
    metaColors: undefined,
  },
};
