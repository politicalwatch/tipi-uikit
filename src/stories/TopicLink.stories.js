import TipiTopicLink from '@/components/TopicLink/TopicLink.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/TipiTopicLink',
  component: TipiTopicLink,
  tags: ['autodocs'],

  argTypes: {
    color: {
      type: 'text',
    },
    image: {
      type: 'text',
    },
    topic: {
      type: 'object',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    color: '#eb1c2d',
    image: 'ods-1.svg',
    topic: {
      name: 'ODS 1 Fin de la pobreza',
      knowledgebase: 'ods',
      tags: [
        { subtopic: '1.1 Erradicar la pobreza extrema', tag: 'Erradicación de la pobreza extrema' },
        { subtopic: '1.1 Erradicar la pobreza extrema', tag: 'Vulnerabilidad y pobreza extrema' },
        { subtopic: '1.1 Erradicar la pobreza extrema', tag: 'Desigualdad y pobreza extrema' },
        { subtopic: '1.1 Erradicar la pobreza extrema', tag: 'Línea de pobreza' },
        { subtopic: '1.1 Erradicar la pobreza extrema', tag: 'Pobreza extrema' },
        { subtopic: '1.1 Erradicar la pobreza extrema', tag: 'Pobreza internacional' },
        { subtopic: '1.1 Erradicar la pobreza extrema', tag: 'Reducción de la pobreza extrema' },
        { subtopic: '1.1 Erradicar la pobreza extrema', tag: 'Tasa de pobreza mundial' },
        { subtopic: '1.1 Erradicar la pobreza extrema', tag: 'Umbral de pobreza internacional' },
        {
          subtopic: '1.2 Niveles nacionales de pobreza',
          tag: 'Alto Comisionado para la Lucha contra la Pobreza Infantil',
        },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'AROPE' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Ayuda alimentaria' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Baja intensidad laboral ' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Cronificación del desempleo' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Deshaucio y pobreza' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Desigualdad de rentas' },
        {
          subtopic: '1.2 Niveles nacionales de pobreza',
          tag: 'Disminución personas en riesgo de exclusión',
        },
        {
          subtopic: '1.2 Niveles nacionales de pobreza',
          tag: 'Encuesta de Condiciones de Vida (ECV)',
        },
        {
          subtopic: '1.2 Niveles nacionales de pobreza',
          tag: 'Alianza de País Pobreza Infantil Cero',
        },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Garantía Infantil Europea' },
        {
          subtopic: '1.2 Niveles nacionales de pobreza',
          tag: 'Estrategia Nacional de Prevención y Lucha contra la Pobreza y la Exclusión Social',
        },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Feminización de la pobreza' },
        {
          subtopic: '1.2 Niveles nacionales de pobreza',
          tag: 'Fondo de Ayuda Europea para las Personas Más Desfavorecidas',
        },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Hogares pobres' },
        {
          subtopic: '1.2 Niveles nacionales de pobreza',
          tag: 'Indicador público de renta de efectos múltiples ',
        },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Índice de Desarrollo Humano (IDH)' },
        {
          subtopic: '1.2 Niveles nacionales de pobreza',
          tag: 'Índice de Pobreza Multidimensional (IPM)',
        },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Índice Gini y pobreza' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Juvenilización de la pobreza' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Juventud y pobreza' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Mujer y pobreza' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Nivel de pobreza nacional' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Nuevos Riesgos Sociales' },
        {
          subtopic: '1.2 Niveles nacionales de pobreza',
          tag: 'Observatorio Empresarial contra la Pobreza (OECP)',
        },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Patrón de pobreza' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Perfiles de pobreza' },
        {
          subtopic: '1.2 Niveles nacionales de pobreza',
          tag: 'Personas con discapacidad y pobreza',
        },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Tipos de pobreza\n' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Tipos de exclusión\n' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Pobreza económica' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Pobreza infantil' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Pobreza monetaria' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Pobreza multidimensional' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Pobreza y tercera edad ' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Precariedad laboral y pobreza' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Privación material severa' },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Transferencias monetarias',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Sistemas de alerta temprana',
        },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Programa Nacional de Reformas ' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Reducción pobreza' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Riesgo de exclusión social' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Riesgo de pobreza' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'S80/S20' },
        {
          subtopic: '1.2 Niveles nacionales de pobreza',
          tag: 'Salario Mínimo Interprofesional (SMI)',
        },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Salario social' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Sistema de Garantía de Ingresos',
        },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Sinhogarismo' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Tasa de paro y pobreza' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Tasa de pobreza nacional ' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Tasa de riesgo de pobreza' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Trabajadores pobres' },
        {
          subtopic: '1.2 Niveles nacionales de pobreza',
          tag: 'Transmisión\nintergeneracional de la pobreza',
        },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Umbral de pobreza nacional' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Ingresos y pobreza' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Desempleo y pobreza' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Insuficiencia de recursos' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Vulnerabilidad y pobreza' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Exclusión social' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Sistema de protección social ',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Plan PREPARA' },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Aislamiento' },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Aporofobia' },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'ASPIRE' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Atención a personas dependientes',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Ayuda social' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Ayudas a la dependencia',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Carta Social Europea\n' },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Cobertura sanitaria' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Complementos de mínimos ',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Criminalización de la pobreza',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Desempleo y vulnerabilidad',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Educación inclusiva y pobreza',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Cobertura de las prestaciones ',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Escolarización temprana y pobreza',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Estado del Bienestar y pobreza',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Estrategia Juventud 2020',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Estrategia Nacional para la Inclusión de la Población Gitana',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'FEANTSA (European Typology of Homelessness and Housing Exclusion)',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Fomento del empleo ' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Fondo Extraordinario para la Lucha contra la Pobreza Infantil',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Hatento (Observatorio de Delitos de Odio contra personas sin hogar)',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Ingreso Mínimo de Solidaridad ',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Ingreso Mínimo Vital Garantizado',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Inversión social' },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Ley de Dependencia' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Medidas de acompañamiento social',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Observatorio Estatal de la\nDependencia',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Pensión contributiva' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Pensión de fallecimiento',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Pensión de invalidez' },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Pensión de jubilación' },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Pensión de viudedad' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Pensión por discapacidad',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Pensiones mínimas' },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Permiso por paternidad' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Pilar Europeo de Derechos Sociales',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Plan Nacional de\nDerechos Humanos ',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Plan Nacional de Acción para la Inclusión Social',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Políticas activas de empleo',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Prestación a parados' },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Prestación asistencial' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Prestación básica de servicios sociales',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Servicios sociales' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Prestación condicionada ',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Prestación contributiva ',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Prestación no contributiva',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Prestación de ingresos mínimos',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Prestación de jubilación',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Prestación familiar' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Prestación por desempleo',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Prestación por incapacidad',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Prestación por invalidez',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Prestación pública' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Prestación Universal por Hijo a Cargo',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Prestaciones por discapacidad',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Prestaciones por maternidad',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Prestaciones por paternidad',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Prestaciones sociales' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Programa de Activación para el Empleo (PAE)',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Programa de empleo activo ',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Programa de Protección a la Familia y Atención a la pobreza infantil',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Programa para la recualificación profesional de las personas desempleadas',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Programas de intervención temprana',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Protección social' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Protección por desempleo',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Recién nacidos y pobreza',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Renta activa de inserción',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Renta básica' },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Renta básica universal' },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Renta condicionada' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Renta garantizada de ciudadanía',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Renta mínima' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Renta Mínima de Inserción',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Seguridad social' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Seguro Obligatorio de Invalidez',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Seguro Obligatorio de Vejez',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Seguro por Desempleo' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Garantía de ingresos mínimos',
        },
        { subtopic: '1.3 Prácticas y medidas de protección social', tag: 'Sistema de pensiones' },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Subsidio contributivo y no contributivo',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Subsidio Extraordinario por Desempleo',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Transferencias sociales',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Tarjeta Social Universal',
        },
        {
          subtopic: '1.3 Prácticas y medidas de protección social',
          tag: 'Sistema de ingresos mínimos ',
        },
        { subtopic: '1.4 Recursos económicos y servicios básicos', tag: 'Acceso a agua potable' },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Acceso a bienes y servicios',
        },
        { subtopic: '1.4 Recursos económicos y servicios básicos', tag: 'Acceso a electricidad ' },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Acceso a energía sostenible ',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Acceso a instalaciones sanitarias',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Acceso a las nuevas tecnologías',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Acceso a movilidad básica',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Acceso a servicios de gestión de residuos',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Acceso a servicios financieros básicos',
        },
        { subtopic: '1.4 Recursos económicos y servicios básicos', tag: 'Acceso a vivienda' },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Acceso universal a la educación',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Acceso universal a la sanidad',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Acceso universal a servicios básicos',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Asistencia Jurídica Gratuita',
        },
        { subtopic: '1.4 Recursos económicos y servicios básicos', tag: 'Ayudas a la dependencia' },
        { subtopic: '1.4 Recursos económicos y servicios básicos', tag: 'Bono social' },
        { subtopic: '1.4 Recursos económicos y servicios básicos', tag: 'Condiciones de trabajo' },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Derecho a control de la tierra',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Derecho a la asistencia jurídica gratuita',
        },
        { subtopic: '1.4 Recursos económicos y servicios básicos', tag: 'Derecho a la propiedad ' },
        { subtopic: '1.4 Recursos económicos y servicios básicos', tag: 'Derecho a la vivienda' },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Derecho a los recursos económicos',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Derecho a los recursos naturales',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Derecho a los servicios financieros',
        },
        { subtopic: '1.4 Recursos económicos y servicios básicos', tag: 'Desarrollo humano' },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Estrategia Nacional contra\nla Pobreza Energética',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Estrategia Nacional Integral para personas sin hogar',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Transición energética justa',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Fondo Social de Viviendas',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Mercado de trabajo y pobreza',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Plan Estatal de Vivienda 2018/2021',
        },
        { subtopic: '1.4 Recursos económicos y servicios básicos', tag: 'Pobreza energética' },
        { subtopic: '1.4 Recursos económicos y servicios básicos', tag: 'Renta agraria' },
        { subtopic: '1.4 Recursos económicos y servicios básicos', tag: 'Vivienda digna' },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Alianza Clima y Desarrollo/Red de Conocimiento sobre Clima y Desarrollo (CDKN)',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Alianza para la Resiliencia ante\nel Cambio Climático de África ',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Centro de Coordinación de la Información Nacional sobre Incendios Forestales (CCINIF)',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Comité de los derechos del niño',
        },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Convención de los derechos del niño;',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Comité de Lucha contra Incendios Forestales (CLIF)',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Comité Español de la Estrategia Internacional para la Reducción de Desastres',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Directiva Europea sobre Inundaciones',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Estrategia Internacional de Reducción de Desastres de las Naciones\nUnidas (UNISDR)',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Estrategia Internacional para la Reducción de Desastres (EIRD)',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Financiación climática',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Países de ingresos bajos',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Países de ingresos medios',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Fondo de Adaptación',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Fondo Estratégico para el Clima',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Fondo para el Medio Ambiente Mundial',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Fondo Verde del Clima',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Fondos Climáticos Multilaterales',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Fondos de Inversión en el Clima',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Gestión de fenómenos climáticos extremos',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Inversión en el clima',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Mapa de riesgos y desastres naturales',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Mapas de peligrosidad',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Marco de Sendai',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Medios de vida sostenibles',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Personas afectadas por desastres naturales',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Plan Nacional de Adaptación al Cambio Climático (PNACC)',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Planes de Emergencia de abastecimiento urbano',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Planes Especiales de Sequía (PES)',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Planes Hidrológicos de las diferentes Demarcaciones Hidrográficas',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Política Agraria Común (PAC)',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Reducción de Riesgos de Desastres (RRD)',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Resiliencia y cambio climático ',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Resiliencia y pobreza',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Riesgo de desastres',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Seguros agrarios',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Víctimas por desastres',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Vulnerabilidad y desastres climáticos',
        },
        {
          subtopic: '1.a Cooperación internacional',
          tag: 'Apoyo Oficial Total para el Desarrollo Sostenible (TOSSD)',
        },
        {
          subtopic: '1.a Cooperación internacional',
          tag: 'Asociación Latinoamericana de Instituciones Financieras para el Desarrollo (ALIDE)',
        },
        { subtopic: '1.a Cooperación internacional', tag: 'Ayuda Oficial al Desarrollo (AOD)' },
        { subtopic: '1.a Cooperación internacional', tag: 'Banco Europeo de Inversiones (BEI)' },
        {
          subtopic: '1.a Cooperación internacional',
          tag: 'Banco Interamericano de Desarrollo (BID)',
        },
        { subtopic: '1.a Cooperación internacional', tag: 'Bancos de desarrollo' },
        { subtopic: '1.a Cooperación internacional', tag: 'Cooperación al desarrollo y pobreza' },
        { subtopic: '1.a Cooperación internacional', tag: 'Financiación para reducir la pobreza' },
        {
          subtopic: '1.a Cooperación internacional',
          tag: 'Fondos de Apoyo Oficial a la Exportación (MINECO)',
        },
        { subtopic: '1.a Cooperación internacional', tag: 'Gasto público en servicios esenciales' },
        { subtopic: '1.a Cooperación internacional', tag: 'Instituto de Crédito Oficial (ICO)' },
        {
          subtopic: '1.a Cooperación internacional',
          tag: 'Movilización recursos contra la pobreza',
        },
        { subtopic: '1.a Cooperación internacional', tag: 'Países en desarrollo y pobreza' },
        {
          subtopic: '1.a Cooperación internacional',
          tag: 'Programa de Reducción de la Pobreza y Cooperación al Desarrollo',
        },
        { subtopic: '1.4 Recursos económicos y servicios básicos', tag: 'Chabolismo' },
        {
          subtopic: '1.4 Recursos económicos y servicios básicos',
          tag: 'Relator especial sobre la extrema pobreza y los derechos humanos',
        },
        { subtopic: '1.a Cooperación internacional', tag: 'Programas de Reducción de la Pobreza' },
        {
          subtopic: '1.a Cooperación internacional',
          tag: 'Promoción de inversiones de empresas españolas',
        },
        {
          subtopic: '1.a Cooperación internacional',
          tag: 'Plan Director de la Cooperación Española',
        },
        {
          subtopic: '1.b Perspectiva de género en la reducción de la pobreza',
          tag: 'Brecha salarial',
        },
        {
          subtopic: '1.b Perspectiva de género en la reducción de la pobreza',
          tag: 'Desigualdad de género y pobreza',
        },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Brecha generacional y pobreza' },
        { subtopic: '1.2 Niveles nacionales de pobreza', tag: 'Brecha territorial y pobreza' },
        {
          subtopic: '1.b Perspectiva de género en la reducción de la pobreza',
          tag: 'Brecha de género y pobreza',
        },
        {
          subtopic: '1.b Perspectiva de género en la reducción de la pobreza',
          tag: 'Empoderamiento económico\nde las mujeres',
        },
        {
          subtopic: '1.b Perspectiva de género en la reducción de la pobreza',
          tag: 'Estrategias de Reducción de la Pobreza (ERP)',
        },
        {
          subtopic: '1.b Perspectiva de género en la reducción de la pobreza',
          tag: 'Feminización de la pobreza y cooperación ',
        },
        {
          subtopic: '1.b Perspectiva de género en la reducción de la pobreza',
          tag: 'Impacto desproporcional de la pobreza en las mujeres',
        },
        {
          subtopic: '1.b Perspectiva de género en la reducción de la pobreza',
          tag: 'Marcos de Asociación y Alianza País',
        },
        {
          subtopic: '1.b Perspectiva de género en la reducción de la pobreza',
          tag: 'Medidas para erradicar la pobreza',
        },
        {
          subtopic: '1.b Perspectiva de género en la reducción de la pobreza',
          tag: 'Organización para la Cooperación y el Desarrollo Económicos (OCDE)',
        },
        {
          subtopic: '1.b Perspectiva de género en la reducción de la pobreza',
          tag: 'Perspectiva de género y pobreza',
        },
        {
          subtopic: '1.b Perspectiva de género en la reducción de la pobreza',
          tag: 'Programas de Desarrollo Rural',
        },
        {
          subtopic: '1.b Perspectiva de género en la reducción de la pobreza',
          tag: 'Uso sostenible de los recursos naturales',
        },
        { subtopic: '1.4 Recursos económicos y servicios básicos', tag: 'Hogares y contaminación' },
        { subtopic: '1.1 Erradicar la pobreza extrema', tag: 'Aumento de la pobreza y COVID-19' },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Escudo Social y COVID-19',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Ingreso Mínimo Vital y COVID-19',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Percepción bono social por trabajadores autónomos y COVID-19',
        },
        {
          subtopic: '1.5 Protección de los pobres frente a crisis y desastres',
          tag: 'Garantía del suministro de energía eléctrica, gas y agua y COVID-19',
        },
        {
          subtopic: '1.1 Erradicar la pobreza extrema',
          tag: 'Estrategia de Desarrollo Sostenible y pobreza',
        },
      ],
      shortname: 'ODS 1',
      id: 'ods-1',
      description: ['Acabar con la pobreza en todas sus formas en todo el mundo'],
    },
  },
};
