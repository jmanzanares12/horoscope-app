import { Zodiac } from "../types/zodiac"

type horoscopeData = {
    [key in Zodiac]: string
}

export const horoscopes: horoscopeData = {
    Aries: 'Este año, tu desafío es cultivar la paciencia y la diplomacia en tus relaciones personales y profesionales. Eres valiente y decidido, pero a veces actuar impulsivamente puede generar conflictos innecesarios. Aprende a escuchar antes de reaccionar y canaliza tu energía en estrategias bien pensadas.',
    Taurus: 'La estabilidad es tu fuerte, pero este año la clave está en abrirte a nuevas oportunidades sin miedo al cambio. La comodidad es importante, pero no dejes que te estanque. Atrévete a salir de tu zona de confort y descubrirás que el crecimiento personal y profesional llega cuando te desafías a ti mismo.',
    Gemini: 'Tu mente inquieta siempre busca nuevos horizontes, pero este año tu resolución debe ser enfocarte y mantener la constancia en lo que emprendas. Organiza tus ideas y prioriza lo esencial en lugar de dispersarte en múltiples proyectos. La clave de tu éxito será la disciplina sin perder tu creatividad.',
    Cancer: 'Este año, aprender a poner límites será fundamental para tu bienestar emocional. Tu naturaleza empática te lleva a cuidar de los demás, pero no debes olvidar tu propio bienestar. No temas decepcionar a otros si eso significa proteger tu paz interior. Escucha tu intuición y confía en tu voz interior.',
    Leo: 'Tienes un carisma arrollador y un gran espíritu de liderazgo, pero este año es importante que practiques la humildad y aprendas a delegar. Compartir el protagonismo te permitirá construir relaciones más sólidas y evitará que cargues con todo el peso solo. Serás aún más fuerte si permites que otros brillen a tu lado.',
    Virgo: 'La perfección es un ideal que siempre buscas, pero este año tu resolución es aprender a soltar y confiar más en el proceso. No todo necesita ser analizado hasta el más mínimo detalle; a veces, la espontaneidad y la flexibilidad pueden llevarte a soluciones inesperadas y gratificantes.',
    Libra: 'Tomar decisiones sin miedo al conflicto será tu reto este año. A veces, por querer complacer a todos, postergas lo que realmente deseas. Aprende a confiar en tu criterio y no temas defender lo que crees correcto. El equilibrio que buscas en la vida empieza por tomar decisiones firmes.',
    Scorpio: 'Tu intensidad y pasión te hacen único, pero este año es vital que trabajes en la confianza y aprendas a soltar rencores. Guardar resentimiento solo te perjudica a ti mismo. Usa tu poder de transformación para convertir experiencias pasadas en aprendizaje y crecimiento.',
    Sagittarius: 'Siempre estás en busca de la próxima aventura, pero este año tu desafío es aprender a disfrutar del presente sin estar constantemente mirando hacia el futuro. La estabilidad también tiene su magia, y aprender a valorar lo que tienes ahora te traerá más felicidad y equilibrio.',
    Capricorn: 'Tu ética de trabajo es admirable, pero este año tu resolución es equilibrar la productividad con el disfrute. No todo en la vida es trabajo; hacer pausas te permitirá mantener un mejor rendimiento y bienestar. Recuerda que el éxito también se mide en la calidad de vida que construyes.',
    Aquarius: 'Tu mente innovadora siempre busca nuevos caminos, pero este año es importante conectar más con tus emociones y con las personas que te rodean. No todo se soluciona con lógica; a veces, abrir el corazón y dejarse sentir es la clave para el crecimiento personal y la felicidad.',
    Pisces: 'Eres soñador y espiritual, pero este año la resolución es confiar más en ti mismo y dejar de dudar tanto. Tus ideas y talentos tienen mucho valor, y el primer paso para hacerlos realidad es creer en ellos. Toma acción sin miedo y verás cómo tus sueños empiezan a materializarse.',
}
