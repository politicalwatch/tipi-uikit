import TipiCsvDownload from '@/components/CSVDownload/CSVDownload.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/TipiCsvDownload',
  component: TipiCsvDownload,
  tags: ['autodocs'],

  argTypes: {
    initiatives: {
      type: 'array',
    },
    csvItems: {
      type: 'array',
    },
    csvFields: {
      type: 'object',
    },
    label: {
      type: 'text',
    },
    buttonClass: {
      type: 'text',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    initiatives: [
      [
        {
          url: 'https://www.congreso.es/es/busqueda-de-iniciativas?p_p_id=iniciativas&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_iniciativas_mode=mostrarDetalle&_iniciativas_legislatura=XV&_iniciativas_id=161%2F000271',
          authors: ['Grupo Parlamentario Socialista'],
          title:
            'Proposición no de Ley relativa al impulso de medidas destinadas a la promoción de la agricultura familiar.',
          oldid: '0045ea30e955e005c271c275828af16ce86710af',
          initiative_type: '161',
          reference: '161/000271',
          place: 'Comisión de Agricultura, Pesca y Alimentación',
          initiative_type_alt: 'Proposición no de Ley en Comisión',
          status: 'Aprobada',
          id: '161-000271',
          updated: '2024-04-24T00:00:00+00:00',
          deputies: [
            'Faneca López, María Luisa',
            'Matos Castro, Sergio Carlos',
            'Regades Fernández, David',
          ],
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
          created: '2024-02-08T00:00:00+00:00',
        },
      ],
    ],
    csvItems: [
      [
        {
          url: 'https://www.congreso.es/es/busqueda-de-iniciativas?p_p_id=iniciativas&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_iniciativas_mode=mostrarDetalle&_iniciativas_legislatura=XV&_iniciativas_id=161%2F000271',
          authors: ['Grupo Parlamentario Socialista'],
          title:
            'Proposición no de Ley relativa al impulso de medidas destinadas a la promoción de la agricultura familiar.',
          oldid: '0045ea30e955e005c271c275828af16ce86710af',
          initiative_type: '161',
          reference: '161/000271',
          place: 'Comisión de Agricultura, Pesca y Alimentación',
          initiative_type_alt: 'Proposición no de Ley en Comisión',
          status: 'Aprobada',
          id: '161-000271',
          updated: '2024-04-24T00:00:00+00:00',
          deputies: [
            'Faneca López, María Luisa',
            'Matos Castro, Sergio Carlos',
            'Regades Fernández, David',
          ],
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
          created: '2024-02-08T00:00:00+00:00',
          topics:
            'ODS 1 Fin de la pobreza, ODS 13 Acción por el clima, ODS 2 Hambre cero, ODS 5 Igualdad de género',
          tags: 'Política Agraria Común (PAC), Resiliencia y cambio climático , Seguros agrarios, Crisis climática, Resiliencia al cambio climático, Cambio climático, Ayuda alimentaria, Agricultura familiar, Ganadería, Mujeres en el medio rural',
        },
      ],
    ],
    csvFields: {
      title: 'title',
      reference: 'reference',
      initiative_type_alt: 'initiative_type_alt',
      authors: 'authors',
      deputies: 'deputies',
      topics: 'topics',
      tags: 'tags',
      place: 'place',
      status: 'status',
      created: 'created',
      updated: 'updated',
      url: 'url',
    },
    label: 'Descarga los datos',
    buttonClass: 'c-button--compact',
  },
};
