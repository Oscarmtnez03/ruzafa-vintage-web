export type Locale = "es" | "va";

export const BUSINESS_INFO = {
  name: "Ruzafa Vintage",
  legalNote:
    "María José Martínez — Taller de Restauración Artesanal y Recuperación de Mobiliario y Luminarias (Datos fiscales del titular pendientes de completar antes de publicación definitiva)",
  founder: "María José Martínez",
  role: "Artesana Restauradora y Especialista en Mobiliario Mid-Century & Lámparas de Araña",
  streetAddress: "Carrer de Puerto Rico, 33, Bajo Derecha",
  postalCode: "46006",
  Neighborhood: "Ruzafa (Russafa) · L'Eixample",
  city: "València",
  province: "Valencia",
  country: "ES",
  phoneDisplay: "657 19 12 24",
  phoneE164: "+34657191224",
  whatsappNumber: "34657191224",
  email: "info@ruzafavintage.es",
  historicalDomain: "https://ruzafavintage.es",
  coordinates: {
    lat: 39.46012,
    lng: -0.37524,
  },
  schedule: {
    es: "Lunes a viernes: 10:00 – 14:00 y 17:00 – 20:00 · Sábados mañana con cita previa",
    va: "Dilluns a divendres: 10:00 – 14:00 i 17:00 – 20:00 · Dissabtes matí amb cita prèvia",
    appointmentNoteEs:
      "Atención personalizada en el taller de C/ Puerto Rico, 33 mediante cita previa telefónica o por WhatsApp para garantizar dedicación exclusiva a cada pieza.",
    appointmentNoteVa:
      "Atenció personalitzada al taller del C/ Puerto Rico, 33 mitjançant cita prèvia telefònica o per WhatsApp per garantir dedicació exclusiva a cada peça.",
  },
  verifiableMentions: [
    {
      source: "Proyecto de Artesanía Contemporánea · Cervezas Alhambra",
      detailEs:
        "Seleccionado en la guía de talleres y artesanos singulares de Valencia por su labor de recuperación de lámparas de araña y mobiliario de las décadas de 1950 a 1980 en el barrio de Ruzafa.",
      detailVa:
        "Seleccionat en la guia de tallers i artesans singulars de València per la seua tasca de recuperació de llums d'aranya i mobiliari de les dècades de 1950 a 1980 al barri de Russafa.",
    },
    {
      source: "Homify España · Directorio de Profesionales de Interiorismo y Restauración",
      detailEs:
        "Perfil profesional verificado como taller especializado en restauración artesanal, reciclaje creativo y personalización de piezas con historia en Valencia.",
      detailVa:
        "Perfil professional verificat com a taller especialitzat en restauració artesanal, reciclatge creatiu i personalització de peces amb història a València.",
    },
    {
      source: "Circuito Artesanal de Ruzafa (Carrer de Puerto Rico, 33)",
      detailEs:
        "Taller a pie de calle en el corazón del distrito creativo de L'Eixample, colaborando con particulares, coleccionistas y estudios de interiorismo de Valencia.",
      detailVa:
        "Taller a peu de carrer al cor del districte creatiu de l'Eixample, col·laborant amb particulars, col·leccionistes i estudis d'interiorisme de València.",
    },
  ],
} as const;

export interface ServiceItem {
  id: string;
  number: string;
  titleEs: string;
  titleVa: string;
  subtitleEs: string;
  subtitleVa: string;
  descriptionEs: string;
  descriptionVa: string;
  deliverablesEs: string[];
  deliverablesVa: string[];
  typicalPiecesEs: string;
  typicalPiecesVa: string;
  whatsappPrefill: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "lamparas-arana",
    number: "01",
    titleEs: "Restauración y Electrificación de Lámparas de Araña",
    titleVa: "Restauració i Electrificació de Llums d'Aranya",
    subtitleEs: "Cristal de Bohemia, Murano, bronce fundido, latón y luminarias años 50–80",
    subtitleVa: " Cristall de Bohèmia, Murano, bronze fos, llautó i lluminàries anys 50–80",
    descriptionEs:
      "Una de las señas de identidad más reconocidas de Ruzafa Vintage en Valencia. Desmontamos cada luminaria pieza a pieza en nuestro taller de la calle Puerto Rico para recuperar el esplendor óptico del cristal, limpiar y estabilizar el bronce o latón sin abrasivos agresivos y renovar íntegramente el cableado eléctrico conforme a los estándares actuales de seguridad.",
    descriptionVa:
      "Una de les senyes d'identitat més reconegudes de Ruzafa Vintage a València. Desmuntem cada lluminària peça a peça al nostre taller del carrer Puerto Rico per recuperar l'esplendor òptic del cristall, netejar i estabilitzar el bronze o llautó i renovar íntegrament el cablejat elèctric.",
    deliverablesEs: [
      "Desmontaje completo y catalogación de lágrimas, prismas, almendras y cadenas de cristal",
      "Reposición de piezas de cristal faltantes y engarzado manual con alambre de latón o bronce",
      "Renovación integral del circuito eléctrico, portalámparas y toma de tierra segura",
      "Limpieza técnica de estructuras de bronce, latón envejecido o cromado mid-century",
    ],
    deliverablesVa: [
      "Desmuntatge complet i catalogació de llàgrimes, prismes i cadenes de cristall",
      "Reposició de peces de cristall i engalzat manual amb filferro de llautó o bronze",
      "Renovació integral del circuit elèctric i portalàmpades amb seguretat",
      "Neteja tècnica d'estructures de bronze, llautó envellit o cromat mid-century",
    ],
    typicalPiecesEs:
      "Lámparas de araña clásicas de techos altos del Eixample, apliques de bronce, lámparas globo años 60 y luminarias Mazzega o Sputnik de los años 70.",
    typicalPiecesVa:
      "Llums d'aranya clàssics de sostres alts de l'Eixample, aplics de bronze, llums globus anys 60 i lluminàries dels anys 70.",
    whatsappPrefill:
      "Hola María José, me gustaría valorar la restauración de una lámpara en vuestro taller de Ruzafa Vintage.",
  },
  {
    id: "mobiliario-midcentury",
    number: "02",
    titleEs: "Restauración de Mobiliario de los Años 50, 60, 70 y 80",
    titleVa: "Restauració de Mobiliari dels Anys 50, 60, 70 i 80",
    subtitleEs: "Aparadores escandinavos, credenzas, mesas de teca, nogal y maderas nobles",
    subtitleVa: "Aparadors escandinaus, credences, taules de teca, noguera i fustes nobles",
    descriptionEs:
      "Recuperamos la honestidad constructiva y la veta original de muebles de mediados del siglo XX. Intervenimos tanto piezas firmadas de diseño europeo como mobiliario familiar con valor sentimental, respetando su pátina original y devolviéndoles la estabilidad estructural para su uso diario.",
    descriptionVa:
      "Recuperem l'honestedat constructiva i la veta original de mobles de mitjan segle XX. Intervenim tant peces de disseny europeu com mobiliari familiar amb valor sentimental, respectant la seua pàtina original.",
    deliverablesEs: [
      "Decapado manual respetuoso sin dañar las chapas finas de teca, palisandro, haya o nogal",
      "Consolidación estructural de ensambles, colas de milano, guías de cajones y herrajes",
      "Reintegración de faltas de chapa, eliminación de cercos de humedad y marcas térmicas",
      "Acabados tradicionales a muñequilla (goma-laca), aceites naturales de teca o ceras de carnauba",
    ],
    deliverablesVa: [
      "Decapat manual respectuós sense danyar les xapes fines de teca, palissandre o noguera",
      "Consolidació estructural d'ensambles, calaixos i ferratges originals",
      "Reintegració de faltes de xapa i eliminació de taques d'humitat",
      "Acabats tradicionals a monyeca (goma-laca), olis naturals o ceres",
    ],
    typicalPiecesEs:
      "Aparadores daneses y españoles años 60, escritorios mid-century, cómodas, mesas de comedor extensibles, sillería y butacas de madera curvada.",
    typicalPiecesVa:
      "Aparadors anys 60, escriptoris mid-century, còmodes, taules de menjador extensibles i butaques de fusta.",
    whatsappPrefill:
      "Hola María José, tengo un mueble que me gustaría restaurar en Ruzafa Vintage y querría enviarte unas fotos para valoración.",
  },
  {
    id: "personalizacion-creativa",
    number: "03",
    titleEs: "Personalización Artesanal y Actualización Contemporánea",
    titleVa: "Personalització Artesanal i Actualització Contemporània",
    subtitleEs: "Adaptación cromática, pátinas a medida y diálogo con interiores actuales",
    subtitleVa: "Adaptació cromàtica, pàtines a mida i diàleg amb interiors actuals",
    descriptionEs:
      "Cuando una pieza antigua o de segunda mitad del siglo XX cuenta con una excelente estructura pero requiere un nuevo lenguaje estético para integrarse en una reforma contemporánea, diseñamos acabados personalizados que realzan sus líneas sin ocultar su carácter artesanal.",
    descriptionVa:
      "Quan una peça antiga compta amb una excel·lent estructura però requereix un nou llenguatge estètic per integrar-se en una reforma contemporània, dissenyem acabats personalitzats.",
    deliverablesEs: [
      "Asesoramiento cromático y de texturas según la luz y carpintería de tu vivienda",
      "Lacados minerales satinados, veladuras, decapados suaves y contrastes con madera natural",
      "Recuperación o sustitución de tiradores de latón macizo, rejilla de ratán (cannage) y cristales",
      "Adaptación funcional de muebles antiguos (pasacables ocultos, refuerzo para lavabos o equipos de audio)",
    ],
    deliverablesVa: [
      "Assessorament cromàtic i de textures segons la llum del teu habitatge",
      "Lacats minerals setinats, veladures i contrastos amb fusta natural",
      "Recuperació o substitució de tiradors de llautó massís i reixeta de ratan",
      "Adaptació funcional de mobles antics per a usos contemporanis",
    ],
    typicalPiecesEs:
      "Vitrinas, alacenas, mesillas de noche, taquillones, espejos biselados y muebles de entrada.",
    typicalPiecesVa:
      "Vitrines, armaris de rebost, tauletes de nit, miralls bisellats i mobles d'entrada.",
    whatsappPrefill:
      "Hola María José, quiero personalizar y actualizar un mueble antiguo para mi casa en Valencia. ¿Podemos comentarlo?",
  },
  {
    id: "sourcing-interiorismo",
    number: "04",
    titleEs: "Búsqueda de Piezas Singulares (Sourcing) para Particulares e Interioristas",
    titleVa: "Recerca de Peces Singulars (Sourcing) per a Particulars i Interioristes",
    subtitleEs: "Selección curada de piezas con alma de los años 50–80 listas para instalar",
    subtitleVa: "Selecció curada de peces amb ànima dels anys 50–80 llestes per a instal·lar",
    descriptionEs:
      "Colaboramos con estudios de arquitectura, interioristas y particulares en Valencia que buscan una pieza protagonista —una lámpara de araña con carácter para un salón de L'Eixample o un aparador auténtico de los años 60— y desean recibirla completamente revisada y restaurada en nuestro taller.",
    descriptionVa:
      "Col·laborem amb estudis d'arquitectura, interioristes i particulars a València que busquen una peça protagonista i desitgen rebre-la completament revisada i restaurada al nostre taller.",
    deliverablesEs: [
      "Búsqueda por encargo según dimensiones exactas, época (1950–1980) y presupuesto",
      "Selección de piezas disponibles en el taller de C/ Puerto Rico, 33 bajo cita previa",
      "Intervención de acabado a medida para adaptarse a la paleta del proyecto de interiorismo",
      "Coordinación de entrega cuidadosa en Valencia capital y área metropolitana",
    ],
    deliverablesVa: [
      "Recerca per encàrrec segons dimensions exactes, època (1950–1980) i pressupost",
      "Selecció de peces disponibles al taller del C/ Puerto Rico, 33 amb cita prèvia",
      "Intervenció d'acabat a mida per adaptar-se al projecte d'interiorisme",
      "Coordinació de lliurament acurat a València capital i àrea metropolitana",
    ],
    typicalPiecesEs:
      "Piezas singulares para viviendas en Ruzafa, Pla del Remei, Ciutat Vella, proyectos contract y locales con identidad.",
    typicalPiecesVa:
      "Peces singulars per a habitatges a Russafa, Pla del Remei, Ciutat Vella i projectes d'interiorisme.",
    whatsappPrefill:
      "Hola María José, estoy buscando una pieza singular (años 50-80 / lámpara) para un proyecto en Valencia y me gustaría concertar cita en el taller.",
  },
];

export interface CaseStudyItem {
  id: string;
  code: string;
  category: "lamparas" | "midcentury" | "personalizacion" | "interiorismo";
  decade: string;
  titleEs: string;
  titleVa: string;
  originEs: string;
  originVa: string;
  pathologyEs: string;
  pathologyVa: string;
  interventionEs: string;
  interventionVa: string;
  materialsEs: string[];
  estimatedTimeEs: string;
  imageUrl: string;
  imageAltEs: string;
  imageCaptionEs: string;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "arana-imperio-eixample",
    code: "ESP-01 · LUMINARIA HISTÓRICA",
    category: "lamparas",
    decade: "Años 1950",
    titleEs: "Recuperación Integral de Lámpara de Araña de Bronce y Cristal Tallado",
    titleVa: "Recuperació Integral de Llum d'Aranya de Bronze i Cristall Tallat",
    originEs: "Intervención habitual para viviendas de techos altos en L'Eixample y Gran Vía (València)",
    originVa: "Intervenció habitual per a habitatges de sostres alts a l'Eixample i Gran Via (València)",
    pathologyEs:
      "Cableado textil original reseco con riesgo de cortocircuito, oxidación superficial en brazos de bronce fundido, pérdida del 15% de lágrimas de cristal y alambres de engarce quebradizos.",
    pathologyVa:
      "Cablejat tèxtil original ressec amb risc de curtcircuit, oxidació superficial en braços de bronze i pèrdua de llàgrimes de cristall.",
    interventionEs:
      "Desmontaje total del cuerpo central y los 8 brazos. Baño ultrasónico y pulido manual del cristal tallado, reposición de almendras y octógonos de época, re-engarzado completo con hilo de latón nuevo y recableado interior homologado.",
    interventionVa:
      "Desmuntatge total del cos central i els 8 braços. Neteja del cristall tallat, reposició d'octògons d'època, re-engalzat complet amb fil de llautó nou i recablejat interior homologat.",
    materialsEs: ["Bronce fundido", "Cristal tallado", "Cableado ignífugo", "Engarce de latón"],
    estimatedTimeEs: "2 a 3 semanas en taller",
    imageUrl:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=85",
    imageAltEs:
      "Detalle de lámpara de araña clásica con prismas de cristal y estructura metálica cálida",
    imageCaptionEs:
      "Fotografía ilustrativa de referencia · Especialidad en restauración y electrificación de lámparas de araña.",
  },
  {
    id: "aparador-danes-teca-1960",
    code: "ESP-02 · MOBILIARIO MID-CENTURY",
    category: "midcentury",
    decade: "Años 1960",
    titleEs: "Restauración de Credenza Escandinava en Madera de Teca y Tiradores Encastrados",
    titleVa: "Restauració de Credença Escandinava en Fusta de Teca i Tiradors Encastats",
    originEs: "Tipología representativa de piezas de los años 60 intervenidas en Ruzafa Vintage",
    originVa: "Tipologia representativa de peces dels anys 60 intervingudes a Ruzafa Vintage",
    pathologyEs:
      "Barniz sintético amarilleado por exposición solar, cercos blanquecinos de humedad en el sobre superior, levantamiento puntual de chapa de teca en cantos y puertas correderas desajustadas.",
    pathologyVa:
      "Vernís sintètic engroguit per exposició solar, taques d'humitat al sobre superior i portes corredisses desajustades.",
    interventionEs:
      "Retirada química y manual del barniz degradado respetando el grueso de la chapa original de teca, tratamiento oxálico sobre manchas de agua, encolado de cantos con prensa térmica y nutrición profunda con aceite de teca y cera natural.",
    interventionVa:
      "Retirada manual del vernís degradat respectant la xapa original de teca, tractament de taques d'aigua i nutrició amb oli de teca i cera natural.",
    materialsEs: ["Chapa de teca birmana", "Haya maciza", "Aceite de teca puro", "Cera de abeja y carnauba"],
    estimatedTimeEs: "3 a 4 semanas en taller",
    imageUrl:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85",
    imageAltEs: "Aparador mid-century de madera cálida de los años 60 en un interior luminoso",
    imageCaptionEs:
      "Fotografía ilustrativa de referencia · Especialidad en aparadores y credenzas de los años 50 a 70.",
  },
  {
    id: "butacas-madera-curvada-70",
    code: "ESP-03 · EBANISTERÍA Y ASIENTO",
    category: "midcentury",
    decade: "Años 1970",
    titleEs: "Consolidación Estructural y Acabado a Muñequilla en Pareja de Butacas de Nogal",
    titleVa: "Consolidació Estructural i Acabat a Monyeca en Parella de Butaques de Noguera",
    originEs: "Intervención técnica de carpintería y acabado tradicional en taller",
    originVa: "Intervenció tècnica de fusteria i acabat tradicional en taller",
    pathologyEs:
      "Holgura severa en las espigas de unión entre brazos y patas traseras, desgaste del acabado original en los reposabrazos por roce continuado y ataques antiguos inactivos de xilófagos.",
    pathologyVa:
      "Folgança en les espigues d'unió entre braços i potes, desgast de l'acabat original en els reposabraços.",
    interventionEs:
      "Desmontaje numerado de la estructura, limpieza de colas antiguas, tratamiento curativo-preventivo antixilófagos por inyección, reencolado animal/PVA de alta resistencia y acabado sedoso con goma-laca descerada aplicada a muñequilla.",
    interventionVa:
      "Desmuntatge numerat de l'estructura, tractament preventiu antixilòfags, reencolat d'alta resistència i acabat amb goma-laca a monyeca.",
    materialsEs: ["Nogal español", "Goma-laca tradicional", "Cera microcristalina", "Espigas de haya"],
    estimatedTimeEs: "2 a 3 semanas en taller",
    imageUrl:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    imageAltEs: "Butaca clásica de diseño mid-century en madera noble y tapizado cálido",
    imageCaptionEs:
      "Fotografía ilustrativa de referencia · Especialidad en recuperación de butacas y sillería años 50–80.",
  },
  {
    id: "vitrina-art-deco-actualizada",
    code: "ESP-04 · RECICLAJE CREATIVO",
    category: "personalizacion",
    decade: "Años 1950 · 1980",
    titleEs: "Actualización Cromática y Recuperación de Herrajes de Latón en Alacena Familiar",
    titleVa: "Actualització Cromàtica i Recuperació de Ferratges de Llautó en Armari Familiar",
    originEs: "Adaptación personalizada para viviendas reformadas en Ruzafa y Ciutat Vella",
    originVa: "Adaptació personalitzada per a habitatges reformats a Russafa i Ciutat Vella",
    pathologyEs:
      "Mueble heredado de madera maciza con barniz oscuro de alto brillo que restaba luminosidad al salón actual, cerraduras bloqueadas y baldas interiores combadas por el peso.",
    pathologyVa:
      "Moble heretat de fusta massissa amb vernís fosc brillant, panys bloquejats i prestatges interiors corbats.",
    interventionEs:
      "Decapado exterior dejando el sobre y las baldas interiores en madera natural lavada y nutrida, aplicación de pátina mineral verde salvia/piedra en el cuerpo exterior y recuperación mecánica de las cerraduras y bocallaves de latón originales.",
    interventionVa:
      "Decapat exterior deixant el sobre i els prestatges en fusta natural, aplicació de pàtina mineral en el cos exterior i recuperació dels panys de llautó.",
    materialsEs: ["Madera maciza recuperada", "Pigmentos minerales", "Latón pulido", "Cristal original"],
    estimatedTimeEs: "2 a 3 semanas en taller",
    imageUrl:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85",
    imageAltEs: "Detalle artesanal de trabajo en madera y herramientas de restauración en taller",
    imageCaptionEs:
      "Fotografía ilustrativa de referencia · Trabajo manual de decapado, pátina y ajuste de herrajes.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    titleEs: "Valoración Inicial por Fotografía o Cita en Taller",
    titleVa: "Valoració Inicial per Fotografia o Cita al Taller",
    descriptionEs:
      "Envíanos fotografías de tu lámpara de araña o mueble por WhatsApp (+34 657 19 12 24) o mediante el formulario técnico. Analizamos la época, materiales y patologías, y concertamos una cita previa en nuestro taller de Carrer de Puerto Rico, 33 (Ruzafa) o visita técnica si la pieza es de gran formato.",
    descriptionVa:
      "Envia'ns fotografies de la teua lluminària o moble per WhatsApp (+34 657 19 12 24) o mitjançant el formulari. Analitzem l'època i materials i concertem cita prèvia al nostre taller del C/ Puerto Rico, 33.",
  },
  {
    step: "02",
    titleEs: "Diagnóstico Técnico y Propuesta de Intervención",
    titleVa: "Diagnòstic Tècnic i Proposta d'Intervenció",
    descriptionEs:
      "Definimos con total honestidad qué necesita la pieza: desde una consolidación conservadora que respete su acabado original hasta un recableado integral de lámpara de araña o una personalización cromática acordada contigo.",
    descriptionVa:
      "Definim amb total honestedat què necessita la peça: des d'una consolidació conservadora fins a un recablejat integral de llum d'aranya o una personalització cromàtica.",
  },
  {
    step: "03",
    titleEs: "Intervención Artesanal Sin Prisas en Ruzafa",
    titleVa: "Intervenció Artesanal Sense Presses a Russafa",
    descriptionEs:
      "María José Martínez ejecuta personalmente el proceso en el taller: desmontaje documentado, limpieza no abrasiva, encolado estructural, nutrición de maderas nobles, engarzado de cristales y pruebas eléctricas.",
    descriptionVa:
      "María José Martínez executa personalment el procés al taller: desmuntatge documentat, neteja no abrasiva, encolat estructural, nutrició de fustes nobles i proves elèctriques.",
  },
  {
    step: "04",
    titleEs: "Revisión Conjunta, Entrega y Pautas de Conservación",
    titleVa: "Revisió Conjunta, Lliurament i Pautes de Conservació",
    descriptionEs:
      "Antes de la entrega, revisamos juntos el acabado en el taller. Te explicamos cómo mantener la madera nutrida o cómo limpiar el cristal y el bronce de tu lámpara para que conserve su valor durante décadas.",
    descriptionVa:
      "Abans del lliurament, revisem junts l'acabat al taller i t'expliquem com mantindre la fusta o el cristall de la teua lluminària durant dècades.",
  },
];

export const FAQS = [
  {
    questionEs: "¿Cómo puedo saber cuánto costará restaurar mi lámpara de araña o mi mueble?",
    questionVa: "Com puc saber quant costarà restaurar el meu llum d'aranya o el meu moble?",
    answerEs:
      "En restauración artesanal cada pieza es única: influyen el número de brazos y lágrimas de cristal en una lámpara, el estado del cableado, la presencia de carcoma o el tipo de madera (maciza o chapada). Para darte una valoración rápida y realista sin desplazarte en balde, puedes enviarnos 2 o 3 fotografías y las medidas aproximadas al WhatsApp +34 657 19 12 24 o a través del formulario de esta web. Con ello te daremos una horquilla orientativa antes de ver la pieza en el taller.",
    answerVa:
      "En restauració artesanal cada peça és única. Per donar-te una valoració ràpida i realista, pots enviar-nos 2 o 3 fotografies i les mides aproximades al WhatsApp +34 657 19 12 24 o a través del formulari d'aquesta web.",
  },
  {
    questionEs: "¿Es necesario pedir cita previa para acudir al taller de la calle Puerto Rico, 33?",
    questionVa: "És necessari demanar cita prèvia per acudir al taller del carrer Puerto Rico, 33?",
    answerEs:
      "Sí, recomendamos siempre concertar cita previa por teléfono o WhatsApp (+34 657 19 12 24). Al tratarse de un taller artesanal donde María José Martínez realiza personalmente tanto las intervenciones delicadas como las recogidas o búsquedas de piezas, la cita previa garantiza que estemos en el local y podamos dedicarte el tiempo que tu pieza merece.",
    answerVa:
      "Sí, recomanem sempre concertar cita prèvia per telèfon o WhatsApp (+34 657 19 12 24) per garantir que estiguem al taller i puguem dedicar-te el temps necessari.",
  },
  {
    questionEs: "¿Restauráis únicamente muebles de los años 50 a 80 o también piezas más antiguas?",
    questionVa: "Restaureu únicament mobles dels anys 50 a 80 o també peces més antigues?",
    answerEs:
      "Aunque nuestra gran pasión y especialización son las décadas de 1950, 1960, 1970 y 1980 (mobiliario mid-century, diseño europeo y luminarias de época), también restauramos muebles familiares anteriores (principios del siglo XX, Art Déco, lámparas de araña clásicas de bronce y cristal) aplicando técnicas tradicionales respetuosas con su época.",
    answerVa:
      "Encara que la nostra gran especialització són les dècades de 1950 a 1980, també restaurem mobles familiars anteriors i llums d'aranya clàssics aplicant tècniques tradicionals.",
  },
  {
    questionEs: "A mi lámpara de araña le faltan lágrimas de cristal y el cable está antiguo, ¿tiene solución?",
    questionVa: "Al meu llum d'aranya li falten llàgrimes de cristall i el cable està antic, té solució?",
    answerEs:
      "Totalmente. Es uno de los encargos más habituales en Ruzafa Vintage. Sustituimos el cableado antiguo por conductores seguros actuales respetando la estética de la lámpara, revisamos o cambiamos los portalámparas y casquillos (imitación vela o latón), y reponemos las lágrimas, almendras, octógonos o cadenas de cristal faltantes con piezas de época equivalentes.",
    answerVa:
      "Totalment. Substituïm el cablejat antic per conductors segurs actuals, revisem els portalàmpades i reposem les llàgrimes o cadenes de cristall amb peces d'època equivalents.",
  },
  {
    questionEs: "¿Cómo se gestiona el transporte si el mueble es grande y vivo en Valencia o alrededores?",
    questionVa: "Com es gestiona el transport si el moble és gran i visc a València o voltants?",
    answerEs:
      "Para piezas manejables (lámparas, sillas, mesillas, butacas o espejos), puedes traerlas directamente al taller en Carrer de Puerto Rico, 33 (en Ruzafa) tras concertar cita. Para aparadores, mesas de comedor o vitrinas de gran volumen en Valencia capital, L'Eixample, Ciutat Vella o municipios cercanos (Alboraia, Paterna, Godella, Rocafort, Torrent), coordinamos la recogida y entrega con transporte especializado de confianza.",
    answerVa:
      "Per a peces manejables pots portar-les al taller al C/ Puerto Rico, 33 amb cita prèvia. Per a mobles de gran volum a València i voltants, coordinem la recollida i lliurament.",
  },
  {
    questionEs: "¿Tenéis también muebles y lámparas ya restaurados a la venta en el taller?",
    questionVa: "Teniu també mobles i llums ja restaurats a la venda al taller?",
    answerEs:
      "Sí. Además de restaurar muebles y lámparas propiedad de nuestros clientes, en el taller disponemos de una selección rotativa de piezas singulares recuperadas (aparadores, lámparas de araña, butacas y objetos decorativos de los años 50–80) y realizamos búsqueda por encargo para particulares e interioristas.",
    answerVa:
      "Sí. A més de restaurar peces dels nostres clients, disposem d'una selecció rotativa de peces recuperades i realitzem recerca per encàrrec per a particulars i interioristes.",
  },
];

export const UI_TEXT = {
  es: {
    topBanner: "Taller artesanal en Ruzafa · Carrer de Puerto Rico, 33 · València · Cita previa: 657 19 12 24",
    nav: {
      services: "Especialidades",
      anatomy: "Anatomía Técnica",
      diagnostic: "Valorar Pieza",
      gallery: "Intervenciones",
      process: "El Taller",
      location: "Ruzafa · Contacto",
      cta: "Solicitar Valoración",
    },
    hero: {
      badge: "TALLER DE RESTAURACIÓN ARTESANAL EN VALÈNCIA · RUZAFA",
      title: "Devolvemos la luz y el alma a tus lámparas de araña y mobiliario de los años 50 a 80.",
      subtitle:
        "En el corazón del barrio de Ruzafa (C/ Puerto Rico, 33), María José Martínez recupera artesanalmente muebles con historia, aparadores mid-century y luminarias clásicas de bronce y cristal tallado para viviendas y estudios de interiorismo en Valencia.",
      primaryCta: "Valorar mi mueble o lámpara",
      secondaryCta: "Enviar foto por WhatsApp",
      appointmentNotice: "Atención personalizada bajo cita previa en Carrer de Puerto Rico, 33, Bajo Derecha (46006 València).",
    },
  },
  va: {
    topBanner: "Taller artesanal a Russafa · Carrer de Puerto Rico, 33 · València · Cita prèvia: 657 19 12 24",
    nav: {
      services: "Especialitats",
      anatomy: "Anatomia Tècnica",
      diagnostic: "Valorar Peça",
      gallery: "Intervencions",
      process: "El Taller",
      location: "Russafa · Contacte",
      cta: "Sol·licitar Valoració",
    },
    hero: {
      badge: "TALLER DE RESTAURACIÓ ARTESANAL A VALÈNCIA · RUSSAFA",
      title: "Retornem la llum i l'ànima als teus llums d'aranya i mobiliari dels anys 50 a 80.",
      subtitle:
        "Al cor del barri de Russafa (C/ Puerto Rico, 33), María José Martínez recupera artesanalment mobles amb història, aparadors mid-century i lluminàries clàssiques de bronze i cristall tallat per a habitatges i estudis d'interiorisme a València.",
      primaryCta: "Valorar el meu moble o llum",
      secondaryCta: "Enviar foto per WhatsApp",
      appointmentNotice: "Atenció personalitzada amb cita prèvia al Carrer de Puerto Rico, 33, Baix Dreta (46006 València).",
    },
  },
} as const;
