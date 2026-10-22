export type Locale = "es" | "va";

export const BUSINESS_INFO = {
  name: "A.C.D. Carlos Soriano",
  legalNote:
    "Carlos Soriano (A.C.D. Carlos Soriano) — Taller de Restauración de Muebles, Ebanistería Artesanal, Tratamientos Antixilófagos y Tapicería (Datos fiscales del titular pendientes de completar antes de publicación definitiva)",
  founder: "Carlos Soriano",
  role: "Maestro Ebanista y Restaurador de Mobiliario, Antigüedades y Tapicería",
  streetAddress: "Calle Arquitecto Arnau, 61, Bajo",
  postalCode: "46020",
  Neighborhood: "Benimaclet · València",
  city: "València",
  province: "Valencia",
  country: "ES",
  phoneDisplay: "670 41 80 08",
  phoneE164: "+34670418008",
  whatsappNumber: "34670418008",
  email: "contacto@carlossorianorestauracion.es",
  historicalDomain: "https://carlossorianorestauracion.es",
  coordinates: {
    lat: 39.4862,
    lng: -0.3588,
  },
  schedule: {
    es: "Lunes a viernes: 09:30 – 14:00 y 16:30 – 20:00 · Sábados mañana con cita previa",
    va: "Dilluns a divendres: 09:30 – 14:00 i 16:30 – 20:00 · Dissabtes matí amb cita prèvia",
    appointmentNoteEs:
      "Atención personalizada en el taller de C/ Arquitecto Arnau, 61 (Benimaclet) mediante cita previa telefónica o por WhatsApp para valorar cada pieza en detalle.",
    appointmentNoteVa:
      "Atenció personalitzada al taller del C/ Arquitecte Arnau, 61 (Benimaclet) mitjançant cita prèvia telefònica o per WhatsApp per valorar cada peça en detall.",
  },
  verifiableMentions: [
    {
      source: "Encargo Institucional · Histórico Tribunal de las Aguas de Valencia",
      detailEs:
        "Autor de la elaboración artesanal en ebanistería y talla de los sillones institucionales para el histórico Tribunal de las Aguas de Valencia, hito del oficio ebanista en nuestra ciudad.",
      detailVa:
        "Autor de l'elaboració artesanal en ebanisteria i talla dels sillons institucionals per a l'històric Tribunal de les Aigües de València.",
    },
    {
      source: "Taller Maestro en Benimaclet (Calle Arquitecto Arnau, 61, València)",
      detailEs:
        "Especialista de referencia en Valencia en restauración de antigüedades, mobiliario clásico y del siglo XX, barnizado a muñequilla con goma-laca y recuperación estructural.",
      detailVa:
        "Especialista de referència a València en restauració d'antiguitats, mobiliari clàssic i del segle XX, envernissat a monyeca amb goma-laca i recuperació estructural.",
    },
    {
      source: "Sanidad de la Madera y Tapicería Artesanal Integral",
      detailEs:
        "Servicio completo en un único taller: ebanistería, tratamientos curativos y preventivos contra carcoma y xilófagos, rejilla clásica y retapizado artesanal.",
      detailVa:
        "Servei complet en un únic taller: ebanisteria, tractaments curatius i preventius contra corc i xilòfags, reixeta clàssica i retapissat artesanal.",
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
    id: "restauracion-antiguedades",
    number: "01",
    titleEs: "Restauración de Muebles Antiguos, Clásicos y Siglo XX",
    titleVa: "Restauració de Mobles Antics, Clàssics i Segle XX",
    subtitleEs: "Cómodas de época, aparadores, consolas, escritorios, marquetería y acabados a muñequilla",
    subtitleVa: "Còmodes d'època, aparadors, consoles, escriptoris, marqueteria i acabats a monyeca",
    descriptionEs:
      "En nuestro taller de la calle Arquitecto Arnau, 61 (Benimaclet) devolvemos la vida y el esplendor original a muebles familiares, antigüedades y piezas de diseño del siglo XX. Respetamos la pátina histórica de la madera aplicando técnicas tradicionales de ebanistería y acabados manuales a muñequilla con goma-laca natural y ceras vírgenes.",
    descriptionVa:
      "Al nostre taller del carrer Arquitecte Arnau, 61 (Benimaclet) retornem la vida i l'esplendor original a mobles familiars, antiguitats i peces del segle XX aplicant tècniques tradicionals d'ebanisteria i goma-laca a monyeca.",
    deliverablesEs: [
      "Limpieza y decapado manual respetuoso sin dañar chapas finas ni marqueterías de época",
      "Barnizado tradicional a muñequilla con goma-laca natural, aceites nobles y cera de carnauba",
      "Reintegración de faltas de chapa de nogal, caoba, roble, teca o palisandro",
      "Eliminación de cercos de humedad, quemaduras superficiales y barnices oxidados",
    ],
    deliverablesVa: [
      "Neteja i decapat manual respectuós sense danyar xapes fines ni marqueteries",
      "Envernissat tradicional a monyeca amb goma-laca natural, olis nobles i cera",
      "Reintegració de faltes de xapa de noguera, caoba, roure o teca",
      "Eliminació de taques d'humitat i vernissos oxidats",
    ],
    typicalPiecesEs:
      "Cómodas isabelinas y alfonsinas, aparadores años 50–70, mesas de comedor, escritorios, consolas, relojes de antesala y mobiliario heredado.",
    typicalPiecesVa:
      "Còmodes d'època, aparadors anys 50–70, taules de menjador, escriptoris, consoles i mobiliari heretat.",
    whatsappPrefill:
      "Hola Carlos, me gustaría valorar la restauración de un mueble en vuestro taller de Benimaclet (C/ Arquitecto Arnau, 61).",
  },
  {
    id: "ebanisteria-autor",
    number: "02",
    titleEs: "Ebanistería Artesanal, Carpintería Fina y Talla en Madera",
    titleVa: "Ebanisteria Artesanal, Fusteria Fina i Talla en Fusta",
    subtitleEs: "Consolidación estructural, reconstrucción de piezas y ebanistería de alta precisión",
    subtitleVa: "Consolidació estructural, reconstrucció de peces i ebanisteria d'alta precisió",
    descriptionEs:
      "Avalados por trabajos singulares para instituciones históricas como los sillones del Tribunal de las Aguas de Valencia, realizamos intervenciones complejas de ebanistería que otros talleres descartan: reconstrucción de patas, molduras talladas a mano, ajuste de colas de milano y consolidación de estructuras desencoladas.",
    descriptionVa:
      "Avalats per treballs singulars com els sillons del Tribunal de les Aigües de València, realitzem intervencions complexes d'ebanisteria: reconstrucció de potes, motlures tallades a mà i consolidació d'estructures.",
    deliverablesEs: [
      "Desmontaje numerado y reencolado estructural de sillas, sillones, mesas y armarios",
      "Tallado y torneado artesanal de piezas faltantes (patas, copetes, molduras y galerías)",
      "Ajuste mecánico de cajoneras, puertas correderas o abatibles, cerraduras y herrajes de bronce",
      "Fabricación y adaptación a medida en maderas nobles macizas",
    ],
    deliverablesVa: [
      "Desmuntatge numerat i reencolat estructural de cadires, sillons, taules i armaris",
      "Tallat i tornejat artesanal de peces faltants (potes, motlures i galeries)",
      "Ajust mecànic de calaixeres, portes, panys i ferratges de bronze",
      "Fabricació i adaptació a mida en fustes nobles massisses",
    ],
    typicalPiecesEs:
      "Sillería clásica y de diseño, sillones de época, portones interiores, vitrinas, librerías y encargos especiales de ebanistería.",
    typicalPiecesVa:
      "Cadirat clàssic i de disseny, sillons d'època, vitrines, llibreries i encàrrecs especials d'ebanisteria.",
    whatsappPrefill:
      "Hola Carlos, tengo un mueble que necesita un trabajo de ebanistería / consolidación estructural y querría enviarte fotos.",
  },
  {
    id: "tratamiento-antixilofagos",
    number: "03",
    titleEs: "Fumigación y Tratamientos Curativos contra Carcoma y Xilófagos",
    titleVa: "Fumigació i Tractaments Curatius contra Corc i Xilòfags",
    subtitleEs: "Erradicación certificada de carcoma (Anobium) y protección preventiva de larga duración",
    subtitleVa: " Eradicació de corc i protecció preventiva de llarga duració per a la fusta",
    descriptionEs:
      "En el clima húmedo de Valencia, la carcoma es el principal enemigo silencioso del mueble antiguo. Aplicamos tratamientos curativos profundos por inyección, impregnación y cámara estanca que eliminan larvas e insectos adultos en el interior de la madera sin alterar el color ni el barniz exterior.",
    descriptionVa:
      "En el clima humit de València, el corc és el principal enemic del moble antic. Apliquem tractaments curatius profunds que eliminen larves i insectes sense alterar el vernís exterior.",
    deliverablesEs: [
      "Inspección técnica para distinguir ataques activos (serrín fresco) de galerías antiguas",
      "Tratamiento curativo profundo por inyección presurizada y cámara de desinsectación",
      "Sellado y consolidación interna de maderas debilitadas mediante resinas reversibles",
      "Estucado invisible de orificios de salida con ceras de ebanista pigmentadas al tono",
    ],
    deliverablesVa: [
      "Inspecció tècnica per distingir atacs actius de galeries antigues",
      "Tractament curatiu profund per injecció i cambra de desinsectació",
      "Segellat i consolidació interna de fustes debilitades",
      "Estucat invisible d'orificis amb ceres d'ebanista al to",
    ],
    typicalPiecesEs:
      "Muebles con agujeros de carcoma, vigas decorativas, arcones, cabeceros, tallas religiosas, marcos dorados y pianos o cajas de madera.",
    typicalPiecesVa:
      "Mobles amb forats de corc, arcons, capçals, talles, marcs daurats i peces de fusta.",
    whatsappPrefill:
      "Hola Carlos, he detectado marcas de carcoma en un mueble y me gustaría consultar el tratamiento en vuestro taller.",
  },
  {
    id: "tapiceria-rejilla-acabados",
    number: "04",
    titleEs: "Tapicería Artesanal, Rejilla Clásica (Cannage) y Dorados",
    titleVa: "Tapissat Artesanal, Reixeta Clàssica (Cannage) i Daurats",
    subtitleEs: "Retapizado tradicional con muelles y cinchas, tejido de rejilla a mano y restauración de marcos",
    subtitleVa: "Retapissat tradicional amb molles i cingles, teixit de reixeta i restauració de marcs",
    descriptionEs:
      "Completamos la restauración integral de tus piezas sin que tengas que acudir a varios talleres: retapizamos butacas, descalzadoras, sillas de comedor y sofás clásicos tras restaurar y encolar su madera, tejemos rejilla vegetal a mano y restauramos espejos y marcos dorados.",
    descriptionVa:
      "Completem la restauració integral de les teues peces: retapissem butaques, cadires de menjador i sofàs clàssics després de restaurar la fusta, teixim reixeta a mà i restaurem marcs daurats.",
    deliverablesEs: [
      "Retapizado artesanal completo (cinchado de yute, muelles atados a mano, crin o espuma HR)",
      "Tejido manual de rejilla de ratán natural (cannage) en respaldos y asientos tipo Thonet",
      "Reintegración de estuco, pan de oro, pátinas y herrajes de bronce en espejos y consolas",
      "Recogida y entrega coordinada en toda Valencia capital y área metropolitana",
    ],
    deliverablesVa: [
      "Retapissat artesanal complet (cinglat, molles lligades a mà i teles d'alta resistència)",
      "Teixit manual de reixeta de ratan natural en respatlers i seients",
      "Reintegració d'estuc, pa d'or, pàtines i ferratges de bronze en miralls i consoles",
      "Recollida i lliurament coordinat a tota València capital i àrea metropolitana",
    ],
    typicalPiecesEs:
      "Butacas orejeras, sillas Thonet o Cesca de rejilla, tresillos clásicos, banquetas de piano, descalzadoras y marcos de época.",
    typicalPiecesVa:
      "Butaques, cadires de reixeta, sofàs clàssics, banquetes de piano, descalçadores i marcs d'època.",
    whatsappPrefill:
      "Hola Carlos, quiero valorar la restauración y retapizado / rejilla de unas sillas o butacas en vuestro taller.",
  },
];

export interface CaseStudyItem {
  id: string;
  code: string;
  category: "ebanisteria" | "mobiliario" | "carcoma" | "tapiceria";
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
    id: "sillones-institucionales-ebanisteria",
    code: "ESP-01 · EBANISTERÍA Y TALLA",
    category: "ebanisteria",
    decade: "Oficio Maestro",
    titleEs: "Ebanistería Histórica, Consolidación y Acabado a Muñequilla en Sillería de Nogal",
    titleVa: "Ebanisteria Històrica, Consolidació i Acabat a Monyeca en Cadirat de Noguera",
    originEs: "Tradición ebanista de Carlos Soriano (autor de los sillones del Tribunal de las Aguas de Valencia)",
    originVa: "Tradició ebanista de Carlos Soriano (autor dels sillons del Tribunal de les Aigües de València)",
    pathologyEs:
      "Holgura severa en cajas y espigas por décadas de uso continuado, desgaste profundo del barniz en brazos tallados, ataque activo de carcoma y pérdida de firmeza en el asiento.",
    pathologyVa:
      "Folgança severa en caixes i espigues per dècades d'ús, desgast del vernís en braços tallats i atac de corc.",
    interventionEs:
      "Desmontaje estructural numerado, tratamiento curativo antixilófagos, reconstrucción de espigas en madera dura, acabado tradicional sedoso con goma-laca a muñequilla y retapizado artesanal con tachuela o pasamanería.",
    interventionVa:
      "Desmuntatge estructural numerat, tractament antixilòfags, reconstrucció d'espigues, acabat amb goma-laca a monyeca i retapissat artesanal.",
    materialsEs: ["Nogal español macizo", "Goma-laca a muñequilla", "Talla manual", "Tapicería tradicional"],
    estimatedTimeEs: "2 a 3 semanas en taller",
    imageUrl:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    imageAltEs:
      "Sillón clásico de madera noble restaurado y tapizado artesanalmente",
    imageCaptionEs:
      "Fotografía ilustrativa de referencia · Especialidad en sillería histórica, ebanistería y tapizado en Benimaclet.",
  },
  {
    id: "aparador-credenza-madera-noble",
    code: "ESP-02 · MOBILIARIO Y MARQUETERÍA",
    category: "mobiliario",
    decade: "Siglo XIX · XX",
    titleEs: "Restauración Integral de Cómoda, Consola y Aparador en Nogal y Caoba",
    titleVa: "Restauració Integral de Còmoda, Consola i Aparador en Noguera i Caoba",
    originEs: "Intervención habitual en el taller de C/ Arquitecto Arnau, 61 (Benimaclet, València)",
    originVa: "Intervenció habitual al taller del C/ Arquitecte Arnau, 61 (Benimaclet, València)",
    pathologyEs:
      "Barniz oscurecido y cuarteado, cercos blancos de humedad en el sobre superior, levantamiento puntual de chapas nobles y cajones con las guías de madera desgastadas.",
    pathologyVa:
      "Vernís enfosquit i clivellat, taques d'humitat al sobre superior, alçament de xapes i calaixos desajustats.",
    interventionEs:
      "Retirada manual del barniz oxidado respetando la pátina de la madera, injertos milimétricos de chapa, recrecido de guías de cajonera en haya maciza y nutrición profunda con goma-laca o ceras naturales.",
    interventionVa:
      "Retirada manual del vernís oxidat respectant la pàtina, empelts de xapa, ajust de calaixera i nutrició profunda.",
    materialsEs: ["Chapa de nogal y caoba", "Goma-laca descerada", "Cera de abeja y carnauba", "Herrajes de bronce"],
    estimatedTimeEs: "3 a 4 semanas en taller",
    imageUrl:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85",
    imageAltEs: "Aparador de madera noble restaurado con veta cálida y natural",
    imageCaptionEs:
      "Fotografía ilustrativa de referencia · Especialidad en cómodas, consolas y aparadores en Valencia.",
  },
  {
    id: "sanidad-madera-carcoma-talla",
    code: "ESP-03 · SANIDAD DE LA MADERA",
    category: "carcoma",
    decade: "Antigüedades",
    titleEs: "Erradicación de Carcoma, Consolidación Interna y Recuperación de Herrajes",
    titleVa: "Eradicació de Corc, Consolidació Interna i Recuperació de Ferratges",
    originEs: "Tratamiento curativo y preventivo para mobiliario familiar en Valencia",
    originVa: "Tractament curatiu i preventiu per a mobiliari familiar a València",
    pathologyEs:
      "Presencia activa de insectos xilófagos (serrín fino), debilitamiento estructural en patas inferiores, cerraduras antiguas bloqueadas y pérdida de brillo natural.",
    pathologyVa:
      "Presència activa d'insectes xilòfags, debilitament en potes inferiors i panys antics bloquejats.",
    interventionEs:
      "Fumigación curativa completa en profundidad, consolidación de las fibras internas de la madera, sellado invisible de orificios con ceras pigmentadas al tono y recuperación mecánica de cerraduras y bocallaves de época.",
    interventionVa:
      "Fumigació curativa completa en profunditat, consolidació de les fibres internes i segellat invisible d'orificis.",
    materialsEs: ["Tratamiento antixilófagos", "Resinas consolidantes", "Ceras pigmentadas", "Latón y bronce"],
    estimatedTimeEs: "2 a 3 semanas en taller",
    imageUrl:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85",
    imageAltEs: "Herramientas de ebanistería y trabajo artesanal sobre madera antigua en taller",
    imageCaptionEs:
      "Fotografía ilustrativa de referencia · Especialidad en fumigación, consolidación y ebanistería tradicional.",
  },
  {
    id: "tapiceria-rejilla-silleria-clasica",
    code: "ESP-04 · TAPICERÍA Y REJILLA",
    category: "tapiceria",
    decade: "Clásico · S. XIX–XX",
    titleEs: "Retapizado Tradicional de Butacas y Tejido Artesanal de Rejilla (Cannage)",
    titleVa: "Retapissat Tradicional de Butaques i Teixit Artesanal de Reixeta (Cannage)",
    originEs: "Recuperación integral de sillería y asientos de época en Benimaclet",
    originVa: "Recuperació integral de cadirat i seients d'època a Benimaclet",
    pathologyEs:
      "Hundimiento de cinchas y muelles antiguos, rotura del tejido de rejilla vegetal en asientos o respaldos, y desencolado del bastidor de madera.",
    pathologyVa:
      "Enfonsament de cingles i molles antigues, trencament del teixit de reixeta vegetal i desencolat del bastidor.",
    interventionEs:
      "Encolado previo del armazón en prensa, colocación de cinchas de yute entrelazadas y muelles biconos atados a mano, tejido manual hebra a hebra de rejilla de ratán natural y acabado en tela o piel con tachuela clásica.",
    interventionVa:
      "Encolat previ de l'armadura, col·locació de cingles de jute i molles lligades a mà, teixit manual de reixeta i acabat en tela o pell.",
    materialsEs: ["Rejilla de ratán natural", "Cinchas de yute y muelles", "Madera de haya y nogal", "Tachuela / Pasamanería"],
    estimatedTimeEs: "2 a 3 semanas en taller",
    imageUrl:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=1200&q=85",
    imageAltEs: "Silla clásica de madera curvada y rejilla restaurada artesanalmente",
    imageCaptionEs:
      "Fotografía ilustrativa de referencia · Tapicería clásica y rejilla artesanal en el taller de Benimaclet.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    titleEs: "Valoración por Fotografía (WhatsApp) o Cita en Benimaclet",
    titleVa: "Valoració per Fotografia (WhatsApp) o Cita a Benimaclet",
    descriptionEs:
      "Envíanos fotografías de tu mueble, sillería o antigüedad por WhatsApp (+34 670 41 80 08) o mediante el formulario técnico. Carlos Soriano evalúa el estado de la madera, ensambles o tapizado y concertamos cita en el taller de C/ Arquitecto Arnau, 61 o visita a domicilio.",
    descriptionVa:
      "Envia'ns fotografies del teu moble o antiguitat per WhatsApp (+34 670 41 80 08) o mitjançant el formulari. Carlos Soriano avalua l'estat de la fusta i concertem cita al taller del C/ Arquitecte Arnau, 61.",
  },
  {
    step: "02",
    titleEs: "Diagnóstico Ebanista y Presupuesto Detallado",
    titleVa: "Diagnòstic Ebanista i Pressupost Detallat",
    descriptionEs:
      "Te explicamos con total transparencia qué intervención requiere la pieza: desde fumigación contra carcoma y encolado de estructura hasta barnizado tradicional a muñequilla con goma-laca o retapizado artesanal.",
    descriptionVa:
      "T'expliquem amb total transparència quina intervenció requereix la peça: des de fumigació contra corc i encolat fins a envernissat tradicional a monyeca o retapissat.",
  },
  {
    step: "03",
    titleEs: "Ejecución Artesanal en el Taller de C/ Arquitecto Arnau, 61",
    titleVa: "Execució Artesanal al Taller del C/ Arquitecte Arnau, 61",
    descriptionEs:
      "Carlos Soriano interviene personalmente cada encargo aplicando técnicas de ebanistería tradicional, respetando las maderas nobles originales, tallas, marqueterías y tiempos naturales de secado.",
    descriptionVa:
      "Carlos Soriano intervé personalment cada encàrrec aplicant tècniques d'ebanisteria tradicional, respectant les fustes nobles originals i temps d'assecat.",
  },
  {
    step: "04",
    titleEs: "Revisión Final, Entrega en Valencia y Garantía",
    titleVa: "Revisió Final, Lliurament a València i Garantia",
    descriptionEs:
      "Revisamos juntos el acabado en el taller antes de la entrega en tu domicilio y te damos las pautas de mantenimiento para que tu mueble o antigüedad se conserve impecable durante generaciones.",
    descriptionVa:
      "Revisem junts l'acabat al taller abans del lliurament al teu domicili perquè el teu moble es conserve impecable durant generacions.",
  },
];

export const FAQS = [
  {
    questionEs: "¿Cómo puedo pedir un presupuesto para restaurar un mueble o tapizar unas sillas?",
    questionVa: "Com puc demanar un pressupost per restaurar un moble o tapissar unes cadires?",
    answerEs:
      "La forma más rápida y cómoda es enviarnos 2 o 3 fotografías de la pieza (una general y otra del detalle o desperfecto) junto con las medidas aproximadas por WhatsApp al +34 670 41 80 08 o a través del formulario de esta web. Carlos Soriano te dará una orientación técnica y económica inicial sin compromiso antes de ver la pieza en el taller de Calle Arquitecto Arnau, 61 (Benimaclet) o en tu domicilio.",
    answerVa:
      "La forma més ràpida és enviar-nos 2 o 3 fotografies de la peça i les mides aproximades per WhatsApp al +34 670 41 80 08 o mitjançant el formulari d'aquesta web.",
  },
  {
    questionEs: "He visto agujeritos o serrín en un mueble antiguo, ¿hacéis tratamiento contra la carcoma?",
    questionVa: "He vist foradets o serradures en un moble antic, feu tractament contra el corc?",
    answerEs:
      "Sí, somos especialistas en sanidad de la madera y fumigación de muebles en Valencia. Aplicamos tratamientos curativos profundos que eliminan la carcoma (Anobium punctatum) y otros xilófagos en todas sus fases (huevo, larva y adulto), consolidando además el interior de la madera y sellando los orificios con ceras al tono sin dañar el acabado original.",
    answerVa:
      "Sí, som especialistes en sanitat de la fusta i fumigació de mobles a València. Apliquem tractaments curatius profunds que eliminen el corc i segellem els orificis amb ceres al to.",
  },
  {
    questionEs: "¿Qué diferencia hay entre un barniz industrial y el acabado a muñequilla con goma-laca que realizáis?",
    questionVa: "Quina diferència hi ha entre un vernís industrial i l'acabat a monyeca amb goma-laca?",
    answerEs:
      "Los barnices sintéticos industriales crean una capa plástica rígida que con los años amarillea, se cuartea y oculta la belleza de la veta. El barnizado tradicional a muñequilla con goma-laca natural y ceras vírgenes —técnica clásica de ebanistería que dominamos en A.C.D. Carlos Soriano— nutre el poro de la madera, ofrece un tacto sedoso inigualable y permite que el mueble pueda regenerarse en el futuro sin perder su valor.",
    answerVa:
      "L'envernissat tradicional a monyeca amb goma-laca natural nodreix el porus de la fusta, ofereix un tacte sedós inigualable i manté el valor històric del moble.",
  },
  {
    questionEs: "¿También realizáis trabajos de tapicería y tejido de rejilla si las sillas están desencoladas?",
    questionVa: "També realitzeu treballs de tapisseria i teixit de reixeta si les cadires estan desencolades?",
    answerEs:
      "Sí. Una de las grandes ventajas de nuestro taller en Benimaclet es que resolvemos tanto la ebanistería (desmontaje, reencolado de espigas, reconstrucción de patas o tallas y barnizado) como la tapicería tradicional (cinchas, muelles, telas) y el tejido artesanal de rejilla vegetal (cannage), entregándote la pieza completamente terminada.",
    answerVa:
      "Sí. Resolem tant l'ebanisteria (reencolat d'espigues i envernissat) com la tapisseria tradicional i el teixit artesanal de reixeta vegetal.",
  },
  {
    questionEs: "¿Cómo se gestiona la recogida y entrega si el mueble es grande y vivo en Valencia o alrededores?",
    questionVa: "Com es gestiona la recollida i lliurament si el moble és gran i visc a València o voltants?",
    answerEs:
      "Para piezas pequeñas o medianas (sillas, butacas, mesillas o espejos), puedes traerlas directamente a nuestro taller en Calle Arquitecto Arnau, 61, Bajo (46020 Benimaclet, València) concertando cita en el 670 41 80 08. Para comedores, aparadores, armarios o piezas de gran volumen en Valencia capital y área metropolitana (Alboraia, Godella, Rocafort, Paterna, Burjassot, Torrent...), coordinamos nosotros mismos la recogida y entrega en domicilio.",
    answerVa:
      "Per a peces mitjanes pots portar-les al taller al C/ Arquitecte Arnau, 61 (Benimaclet). Per a mobles de gran volum a València i voltants, coordinem la recollida i lliurament a domicili.",
  },
  {
    questionEs: "¿Es necesario avisar antes de acercarse al taller de la calle Arquitecto Arnau, 61?",
    questionVa: "És necessari avisar abans d'acostar-se al taller del carrer Arquitecte Arnau, 61?",
    answerEs:
      "Recomendamos llamar o enviar un WhatsApp antes al +34 670 41 80 08, ya que en ocasiones salimos a realizar recogidas, entregas o valoraciones a domicilio en Valencia. Así te aseguras de que Carlos Soriano te atienda personalmente nada más llegar.",
    answerVa:
      "Recomanem telefonar o enviar un WhatsApp abans al +34 670 41 80 08 per assegurar-te que Carlos Soriano t'atenga personalment al taller.",
  },
];

export const UI_TEXT = {
  es: {
    topBanner: "Taller de Restauración y Ebanistería en Benimaclet · C/ Arquitecto Arnau, 61 · València · Tel/WhatsApp: 670 41 80 08",
    nav: {
      services: "Especialidades",
      anatomy: "Anatomía Técnica",
      diagnostic: "Valorar Mueble",
      gallery: "Trabajos",
      process: "El Taller",
      location: "Benimaclet · Contacto",
      cta: "Pedir Presupuesto",
    },
    hero: {
      badge: "RESTAURACIÓN, EBANISTERÍA Y ANTIGÜEDADES EN VALÈNCIA · BENIMACLET",
      title: "Maestría ebanista para devolver la vida a tus muebles antiguos, sillería y maderas nobles.",
      subtitle:
        "En nuestro taller de Calle Arquitecto Arnau, 61 (Benimaclet, València), Carlos Soriano —autor de los sillones del histórico Tribunal de las Aguas de Valencia— restaura artesanalmente mobiliario de época, aplica acabados a muñequilla con goma-laca, erradica la carcoma y recupera tapizados y rejillas tradicionales.",
      primaryCta: "Valorar mi mueble ahora",
      secondaryCta: "Enviar foto por WhatsApp",
      appointmentNotice: "Atención directa de Carlos Soriano en C/ Arquitecto Arnau, 61, Bajo (46020 Benimaclet, València).",
    },
  },
  va: {
    topBanner: "Taller de Restauració i Ebanisteria a Benimaclet · C/ Arquitecte Arnau, 61 · València · Tel/WhatsApp: 670 41 80 08",
    nav: {
      services: "Especialitats",
      anatomy: "Anatomia Tècnica",
      diagnostic: "Valorar Moble",
      gallery: "Treballs",
      process: "El Taller",
      location: "Benimaclet · Contacte",
      cta: "Demanar Pressupost",
    },
    hero: {
      badge: "RESTAURACIÓ, EBANISTERIA I ANTIGUITATS A VALÈNCIA · BENIMACLET",
      title: "Mestria ebanista per retornar la vida als teus mobles antics, cadirat i fustes nobles.",
      subtitle:
        "Al nostre taller del Carrer Arquitecte Arnau, 61 (Benimaclet, València), Carlos Soriano —autor dels sillons de l'històric Tribunal de les Aigües de València— restaura artesanalment mobiliari d'època, aplica acabats a monyeca amb goma-laca, eradica el corc i recupera tapissats i reixetes tradicionals.",
      primaryCta: "Valorar el meu moble ara",
      secondaryCta: "Enviar foto per WhatsApp",
      appointmentNotice: "Atenció directa de Carlos Soriano al C/ Arquitecte Arnau, 61, Baix (46020 Benimaclet, València).",
    },
  },
} as const;
