import TipiInitiativeMeta from '@/components/InitiativeMeta/InitiativeMeta.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/TipiInitiativeMeta',
  component: TipiInitiativeMeta,
  tags: ['autodocs'],

  argTypes: {
    initiative: {
      type: 'object',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    initiative: {
      id: '130-000096',
      created: '2023-05-12T00:00:00+00:00',
      authors: ['Gobierno'],
      reference: '130/000096',
      updated: '2023-07-06T00:00:00+00:00',
      oldid: 'bae7d6e4a95882e8b862ab8c689a3d7298438210',
      url: 'https://www.congreso.es/es/busqueda-de-iniciativas?p_p_id=iniciativas&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_iniciativas_mode=mostrarDetalle&_iniciativas_legislatura=XIV&_iniciativas_id=130%2F000096',
      tagged: [],
      initiative_type_alt: 'Real Decreto-Ley',
      deputies: [],
      title:
        'Real Decreto-ley 4/2023, de 11 de mayo, por el que se adoptan medidas urgentes en materia agraria y de aguas en respuesta a la sequía y al agravamiento de las condiciones del sector primario derivado del conflicto bélico en Ucrania y de las condiciones climatológicas, así como de promoción del uso del transporte público colectivo terrestre por parte de los jóvenes y prevención de riesgos laborales en episodios de elevadas temperaturas.',
      place: '',
      initiative_type: '130',
      status: 'Convalidada',
    },
  },
};
