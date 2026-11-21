// US & Texas (Austin / Travis County) Restaurant Legal, FDA/TFER Food Safety, Allergen, Cookie & ADA Compliance Suite
// Prepared for Delicias Luvianos — 601 E Rundberg Ln, Austin, TX 78753 • (512) 835-1894

export const LEGAL_KINDS = ['allergens', 'privacy', 'terms', 'cookies', 'accessibility'];

export const RESTAURANT_LEGAL_INFO = {
  name: 'Delicias Luvianos',
  address: '601 E Rundberg Ln, Austin, TX 78753',
  city: 'Austin',
  state: 'Texas',
  county: 'Travis County',
  phoneDisplay: '(512) 835-1894',
  phoneHref: 'tel:5128351894',
  effectiveDate: {
    es: '21 de noviembre de 2026',
    en: 'November 21, 2026',
  },
};

export function getLegalLabel(kind, lang = 'es') {
  const labels = {
    es: {
      allergens: 'Aviso de Alérgenos y FDA',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Uso y Menú',
      cookies: 'Política de Cookies',
      accessibility: 'Accesibilidad (ADA)',
    },
    en: {
      allergens: 'Allergen & FDA Advisory',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use & Menu',
      cookies: 'Cookie Policy',
      accessibility: 'Accessibility (ADA)',
    },
  };
  return (labels[lang] || labels.es)[kind] || kind;
}

export function getMenuAdvisoryText(lang = 'es') {
  if (lang === 'en') {
    return {
      badge: 'FDA & Texas Food Code Consumer Advisory',
      title: 'Allergen Notice, Food Safety & Menu Disclaimer',
      rawAdvisory:
        '* CONSUMER ADVISORY (Texas Food Establishment Rules §228.75 / FDA Food Code): Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs (including citrus-cured raw shrimp in Aguachiles) may increase your risk of foodborne illness, especially if you have certain medical conditions.',
      allergenWarning:
        'ALLERGEN DISCLOSURE (FDA FALCPA / FASTER Act): Our authentic Mexican dishes are prepared from scratch in a kitchen that handles major food allergens including crustacean shellfish (shrimp/seafood), fish, peanuts, tree nuts, sesame, wheat/gluten, milk/dairy (queso fresco, cotija, Oaxaca, sour cream), eggs, and soy. Traditional sauces such as our homemade Mole may contain nuts, seeds, wheat, or spices. While we take precautions, cross-contact in shared cooking areas, griddles (comales), and fryers cannot be 100% eliminated. Please alert our staff at (512) 835-1894 before ordering if you have any food allergy or dietary restriction.',
      pricingDisclaimer:
        'MENU & DELIVERY DISCLAIMER: Dish photographs are for illustrative purposes. Dish availability (including weekend specialties like Goat Barbacoa), ingredients, and pricing are subject to change without notice. Delicias Luvianos is not responsible for outdated menus, markups, or service errors on unaffiliated third-party delivery platforms.',
      manageCookiesLabel: 'Cookie Preferences',
    };
  }

  return {
    badge: 'Aviso Oficial FDA y Código Alimentario de Texas',
    title: 'Aviso de Alérgenos, Seguridad Alimentaria y Condiciones del Menú',
    rawAdvisory:
      '* AVISO AL CONSUMIDOR (Reglas de Establecimientos de Alimentos de Texas TFER §228.75 / Código Alimentario de la FDA): El consumo de carnes, aves, mariscos, crustáceos o huevos crudos o poco cocidos (incluyendo camarón crudo curtido en limón en nuestros Aguachiles) puede aumentar el riesgo de contraer enfermedades transmitidas por alimentos, especialmente si usted padece ciertas condiciones médicas.',
    allergenWarning:
      'DECLARACIÓN DE ALÉRGENOS (Ley Federal FALCPA / FASTER de EE. UU.): Nuestros platillos tradicionales se preparan artesanalmente en una cocina que procesa los principales alérgenos alimentarios, incluyendo crustáceos y mariscos (camarón), pescado, cacahuates (maní), frutos secos/nueces, ajonjolí (sésamo), trigo/gluten, leche y derivados lácteos (queso fresco, cotija, Oaxaca, crema), huevo y soya. Salsas tradicionales como nuestro Mole Casero pueden contener semillas, frutos secos, cacahuate, trigo o especias. Aunque tomamos precauciones de higiene, no podemos garantizar la ausencia total de contacto cruzado en comales, freidoras y áreas compartidas. Por favor informe a nuestro personal al (512) 835-1894 antes de ordenar si tiene alguna alergia alimentaria.',
    pricingDisclaimer:
      'AVISO SOBRE EL MENÚ Y ENTREGAS: Las fotografías de los platillos son de carácter ilustrativo. La disponibilidad de platillos (como especialidades de fin de semana), ingredientes, horarios y precios en el restaurante están sujetos a cambios sin previo aviso. Delicias Luvianos no se hace responsable por precios desactualizados o cargos adicionales publicados en plataformas externas de entrega a domicilio.',
    manageCookiesLabel: 'Preferencias de Cookies',
  };
}

export function getLegalDoc(kind, lang = 'es') {
  const b = RESTAURANT_LEGAL_INFO;
  const es = lang !== 'en';
  const updatedLabel = es ? 'Última actualización' : 'Last updated';
  const updated = es ? b.effectiveDate.es : b.effectiveDate.en;

  if (kind === 'allergens') {
    return {
      kind,
      title: es
        ? 'Aviso de Alérgenos, Seguridad Alimentaria (FDA / Texas) y Menú'
        : 'Food Allergen Disclosure, FDA/Texas Consumer Advisory & Menu Notice',
      updatedLabel,
      updated,
      sections: es
        ? [
            {
              h: '1. Aviso al Consumidor sobre Alimentos Crudos o Poco Cocidos (Texas TFER §228.75)',
              p: [
                'De conformidad con el Código Alimentario de la FDA de EE. UU. y las Reglas de Establecimientos de Alimentos de Texas (25 TAC §228.75), informamos a nuestros clientes:',
                '“El consumo de carnes, aves, pescados, mariscos, crustáceos o huevos crudos o poco cocidos puede aumentar su riesgo de contraer enfermedades transmitidas por los alimentos, especialmente si usted tiene ciertas condiciones médicas.”',
                'Este aviso aplica particularmente a platillos de mariscos preparados con camarón curtido en jugo de limón (como Aguachiles) o cualquier platillo solicitado a un término de cocción específico.',
              ],
            },
            {
              h: '2. Declaración de los 9 Principales Alérgenos Alimentarios (FDA FALCPA y FASTER Act)',
              p: [
                `${b.name} prepara comida tradicional mexicana artesanal desde cero en una sola cocina. Nuestros platillos pueden contener o haber estado en contacto con cualquiera de los nueve (9) principales alérgenos reconocidos por la FDA de Estados Unidos:`,
              ],
              ul: [
                'Leche y productos lácteos (queso fresco, queso cotija, queso Oaxaca, crema mexicana).',
                'Crustáceos y mariscos (camarón, mezcla de 7 mares, caldos de mariscos).',
                'Pescado y derivados marinos.',
                'Cacahuates (maní) y frutos secos de árbol (utilizados tradicionalmente en la elaboración artesanal de moles y adobos).',
                'Ajonjolí (semillas de sésamo, presentes en moles y panes tradicionales).',
                'Trigo y gluten (tortillas de harina, pan telera para tortas y pambazos, empanizados de milanesa y espesantes de salsas).',
                'Huevo y soya (aceites vegetales, mayonesa, capeados o aderezos).',
              ],
            },
            {
              h: '3. Prevención de Contacto Cruzado y Responsabilidad del Huésped',
              p: [
                'Debido a que compartimos comales para tortillas hechas a mano, planchas, freidoras y utensilios de preparación, no podemos garantizar que ningún platillo esté 100% libre de trazas de alérgenos. Si usted o algún miembro de su familia padece una alergia alimentaria severa, enfermedad celíaca o restricción médica, debe notificarlo directamente a nuestro personal antes de realizar su pedido llamando al ' +
                  b.phoneDisplay +
                  ' o directamente en el mostrador en ' +
                  b.address +
                  '.',
              ],
            },
          ]
        : [
            {
              h: '1. Raw & Undercooked Food Consumer Advisory (Texas TFER §228.75 / FDA Food Code)',
              p: [
                'In compliance with the U.S. FDA Food Code and the Texas Food Establishment Rules (25 TAC §228.75), we advise all guests:',
                '“Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.”',
                'This advisory applies in particular to citrus-cured raw shrimp dishes (such as Aguachiles) and any dish requested at a custom level of doneness.',
              ],
            },
            {
              h: '2. FDA Major Food Allergen Disclosure (FALCPA & FASTER Act)',
              p: [
                `${b.name} prepares authentic traditional Mexican dishes from scratch in a shared kitchen environment. Menu items may contain or come into contact with any of the nine (9) major U.S. FDA food allergens:`,
              ],
              ul: [
                'Milk and dairy products (queso fresco, cotija cheese, melted Oaxaca cheese, Mexican crema).',
                'Crustacean shellfish (shrimp, 7 Seas seafood medley, coastal broths).',
                'Fish and seafood derivatives.',
                'Peanuts and Tree Nuts (traditionally used in authentic handcrafted Mole sauces and adobos).',
                'Sesame seeds (used in traditional Mole recipes and specialty breads).',
                'Wheat and gluten (flour tortillas, telera rolls for tortas and pambazos, breaded chicken cutlets, and sauce thickeners).',
                'Eggs and Soy (cooking oils, mayonnaise, batters, and condiments).',
              ],
            },
            {
              h: '3. Cross-Contact Notice & Guest Responsibility',
              p: [
                'Because our kitchen utilizes shared griddles (comales), fryers, and preparation surfaces, we cannot guarantee that any menu item is 100% free of allergen cross-contact. Guests with severe allergies, celiac disease, or medical dietary needs must notify our staff directly at ' +
                  b.phoneDisplay +
                  ' or in person at ' +
                  b.address +
                  ' prior to ordering.',
              ],
            },
          ],
    };
  }

  if (kind === 'privacy') {
    return {
      kind,
      title: es ? 'Política de Privacidad (EE. UU. y Texas)' : 'Privacy Policy (U.S. & Texas Compliance)',
      updatedLabel,
      updated,
      sections: es
        ? [
            {
              h: '1. Información General',
              p: [
                `${b.name}, ubicado en ${b.address}, respeta su privacidad y cumple con la Ley de Privacidad y Seguridad de Datos de Texas (TDPSA), la Ley de Privacidad del Consumidor de California (CCPA/CPRA) y las leyes federales aplicables de EE. UU. Este sitio web funciona como menú digital informativo; no exigimos crear cuentas ni procesamos pagos con tarjeta de crédito directamente en este sitio web.`,
              ],
            },
            {
              h: '2. Datos que Recopilamos y Almacenamiento Técnico',
              ul: [
                'Preferencias técnicas locales (localStorage): Guardamos únicamente su preferencia de idioma (ES/EN) y su elección sobre el aviso de cookies.',
                'Registros técnicos estándar del servidor: Dirección IP anónima, tipo de navegador y fecha/hora necesarios para la seguridad y entrega del sitio.',
                'Comunicaciones directas: Si usted nos llama al ' +
                  b.phoneDisplay +
                  ', utilizaremos su número y nombre exclusivamente para atender su pedido o consulta.',
                'Mapa interactivo integrado: La sección de ubicación muestra un mapa de Google Maps, el cual está sujeto a las políticas de privacidad de Google LLC.',
              ],
            },
            {
              h: '3. No Venta ni Compartición de Datos Personales',
              p: [
                `${b.name} NO vende, alquila ni comparte su información personal con terceros ni redes de publicidad comportamental. Usted puede ejercer sus derechos de acceso, eliminación o consulta comunicándose con nosotros al ${b.phoneDisplay} o visitándonos en ${b.address}.`,
              ],
            },
          ]
        : [
            {
              h: '1. Overview & Scope',
              p: [
                `${b.name}, located at ${b.address}, respects your privacy and complies with the Texas Data Privacy and Security Act (TDPSA), the California Consumer Privacy Act (CCPA/CPRA), and applicable U.S. federal privacy laws. This website operates as an informational digital menu; we do not require user accounts or collect payment card details on this website.`,
              ],
            },
            {
              h: '2. Information We Collect',
              ul: [
                'Essential Local Storage: We store only your language preference (ES/EN) and cookie banner choice on your device.',
                'Standard Server Logs: Basic browser type, timestamp, and IP logs strictly for security and content delivery.',
                'Direct Phone Inquiries: When you call us at ' +
                  b.phoneDisplay +
                  ', we use your phone number and name solely to fulfill your takeout order or inquiry.',
                'Embedded Map: Our Location section embeds Google Maps to help guests find ' +
                  b.address +
                  '; interactions with the map are governed by Google LLC’s Privacy Policy.',
              ],
            },
            {
              h: '3. No Sale or Sharing of Personal Information',
              p: [
                `${b.name} does NOT sell, rent, or share personal information for cross-context behavioral advertising. To exercise any privacy rights under Texas or U.S. law, please call ${b.phoneDisplay} or contact us at ${b.address}.`,
              ],
            },
          ],
    };
  }

  if (kind === 'terms') {
    return {
      kind,
      title: es ? 'Términos de Uso y Condiciones del Menú' : 'Terms of Use & Digital Menu Conditions',
      updatedLabel,
      updated,
      sections: es
        ? [
            {
              h: '1. Uso del Menú Digital e Imágenes Ilustrativas',
              p: [
                `El contenido de este sitio web es propiedad de ${b.name} (${b.address}) y tiene fines exclusivamente informativos. Las fotografías de los platillos muestran sugerencias de presentación; el emplatado real, guarniciones y porciones pueden variar ligeramente al prepararse artesanalmente al momento.`,
              ],
            },
            {
              h: '2. Disponibilidad, Precios y Plataformas Externas de Entrega',
              p: [
                'La disponibilidad de ciertos platillos regionales o de fin de semana (como la Barbacoa de Chivo), así como los horarios y precios en el restaurante, están sujetos a cambios sin previo aviso. Por favor confirme precios y disponibilidad vigentes al ordenar por teléfono al ' +
                  b.phoneDisplay +
                  ' o en el establecimiento.',
                'Deslinde sobre plataformas de terceros: ' +
                  b.name +
                  ' no controla ni garantiza la disponibilidad, cargos extra o menús no autorizados publicados por plataformas externas como Uber Eats, Postmates, DoorDash o Grubhub.',
              ],
            },
            {
              h: '3. Ley Aplicable y Jurisdicción (Texas, EE. UU.)',
              p: [
                `Estos Términos se rigen por las leyes del Estado de Texas, EE. UU., sin dar efecto a principios de conflicto de leyes. Cualquier controversia derivada del uso de este sitio se resolverá exclusivamente ante los tribunales competentes en ${b.county}, Texas.`,
              ],
            },
          ]
        : [
            {
              h: '1. Digital Menu & Illustrative Photography',
              p: [
                `This website is operated by ${b.name} (${b.address}) for informational purposes. Dish photographs are illustrative serving suggestions; because every dish is handcrafted fresh to order, actual presentation and garnishes may vary.`,
              ],
            },
            {
              h: '2. Availability, Pricing & Third-Party Delivery Platforms',
              p: [
                'Menu item availability (including weekend specialties such as Goat Barbacoa), operating hours, and in-store pricing are subject to change without notice. Please confirm current pricing and availability when calling ' +
                  b.phoneDisplay +
                  ' or ordering on-site.',
                'Third-Party Platform Disclaimer: ' +
                  b.name +
                  ' does not control and is not liable for unauthorized menu listings, price markups, or delivery restrictions on unaffiliated third-party apps (such as Uber Eats, Postmates, DoorDash, or Grubhub).',
              ],
            },
            {
              h: '3. Governing Law & Venue (State of Texas)',
              p: [
                `These Terms are governed by the laws of the State of Texas, USA. Any dispute arising out of or relating to this website shall be subject to the exclusive jurisdiction of the state and federal courts located in ${b.county}, Texas.`,
              ],
            },
          ],
    };
  }

  if (kind === 'cookies') {
    return {
      kind,
      title: es ? 'Política de Cookies y Almacenamiento Local' : 'Cookie & Local Storage Policy',
      updatedLabel,
      updated,
      sections: es
        ? [
            {
              h: '1. ¿Qué tecnologías de almacenamiento utilizamos?',
              p: [
                `${b.name} utiliza almacenamiento técnico mínimo para garantizar una experiencia rápida, segura y sin rastreo invasivo:`,
              ],
              ul: [
                'Almacenamiento Esencial (localStorage): Guarda su preferencia de idioma (Español/Inglés) y el estado de aceptación del banner de cookies.',
                'Reproductor de Audio Local: La música ambiental tradicional se reproduce directamente desde un archivo de audio local alojado en nuestro propio servidor, sin instalar cookies de YouTube ni rastreadores de video.',
                'Mapa de Ubicación (Terceros): Si usted consiente los servicios externos o interactúa con el mapa de Google Maps en la sección de Ubicación, Google puede establecer cookies técnicas para mostrar el mapa.',
              ],
            },
            {
              h: '2. Cómo gestionar sus preferencias',
              p: [
                'Usted puede elegir “Aceptar” o “Solo Esenciales” en nuestro banner de cookies, o restablecer sus preferencias en cualquier momento desde el enlace “Preferencias de Cookies” en el pie de página, además de poder borrar las cookies desde la configuración de su navegador.',
              ],
            },
          ]
        : [
            {
              h: '1. How We Use Cookies & Local Storage',
              p: [
                `${b.name} uses minimal technical storage to deliver a fast, privacy-respecting digital menu experience:`,
              ],
              ul: [
                'Strictly Necessary Storage (localStorage): Remembers your language selection (ES/EN) and your cookie consent preference.',
                'Self-Hosted Background Audio: Our traditional background music plays natively from a self-hosted audio file on our server—it sets zero YouTube cookies or video ad trackers.',
                'Interactive Map (Third-Party Embed): Our Location section includes an embedded Google Map for ' +
                  b.address +
                  ', which may set functional cookies governed by Google LLC when loaded.',
              ],
            },
            {
              h: '2. Managing Your Preferences',
              p: [
                'You can select “Accept” or “Essential Only” on our cookie notice banner, reopen the banner anytime via the “Cookie Preferences” link in the footer, or clear site data in your browser settings.',
              ],
            },
          ],
    };
  }

  // accessibility (ADA Title III / WCAG 2.1 AA)
  return {
    kind: 'accessibility',
    title: es
      ? 'Declaración de Accesibilidad (ADA y WCAG 2.1 AA)'
      : 'Accessibility Statement (ADA & WCAG 2.1 AA)',
    updatedLabel,
    updated,
    sections: es
      ? [
          {
            h: '1. Compromiso con la Accesibilidad Digital y Física (ADA Title III)',
            p: [
              `${b.name} está comprometido a garantizar que tanto nuestro restaurante en ${b.address} como nuestro menú digital sean accesibles para todas las personas, incluyendo huéspedes con discapacidades visuales, auditivas, motoras o cognitivas, siguiendo las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 Nivel AA y el Título III de la Ley de Estadounidenses con Discapacidades (ADA).`,
            ],
          },
          {
            h: '2. Medidas de Accesibilidad en Este Sitio Web',
            ul: [
              'Textos descriptivos completos y etiquetas alt en los 28 platillos del menú digital y en las cartas del menú físico.',
              'Control total del audio ambiental: Botones accesibles por teclado y lector de pantalla para Pausar, Reproducir o Silenciar (Mute) la música en cualquier momento.',
              'Alto contraste visual, navegación por teclado (incluyendo cierre con tecla Escape en ventanas emergentes) y estructura semántica clara en Español e Inglés.',
            ],
          },
          {
            h: '3. Asistencia Telefónica Directa y Accesibilidad en el Restaurante',
            p: [
              `Si usted utiliza tecnología de asistencia (como lectores de pantalla) y experimenta cualquier dificultad para consultar nuestro menú, o si desea que nuestro personal le lea el menú completo, ingredientes o precios y tome su pedido directamente, llámenos al ${b.phoneDisplay} durante nuestro horario de atención y le atenderemos con prioridad.`,
              `Nuestro establecimiento en ${b.address} cuenta con estacionamiento accesible, área de terraza techada a nivel de piso y da la bienvenida a animales de servicio conforme a la ley ADA.`,
            ],
          },
        ]
      : [
          {
            h: '1. Commitment to Digital & Physical Accessibility (ADA Title III)',
            p: [
              `${b.name} is committed to ensuring that both our physical restaurant at ${b.address} and our digital menu are accessible to all guests, including individuals with visual, hearing, motor, or cognitive disabilities, in alignment with the Americans with Disabilities Act (ADA Title III) and Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.`,
            ],
          },
          {
            h: '2. Website Accessibility Features',
            ul: [
              'Full text descriptions and alt attributes for all 28 digital menu dishes and physical menu cards.',
              'Accessible Audio Controls: Keyboard- and screen-reader-labeled controls to Pause, Play, or Mute background music at any time.',
              'High-contrast typography, semantic landmarks, bilingual ES/EN toggle, and Escape-key dismissal on all dialogs.',
            ],
          },
          {
            h: '3. Direct Telephone Menu Assistance & On-Site Accessibility',
            p: [
              `If you use assistive technology and encounter any difficulty browsing this digital menu, please call us directly at ${b.phoneDisplay}. Our team will gladly read any menu section, ingredient list, or pricing over the phone and assist with your takeout order.`,
              `Our restaurant at ${b.address} features accessible parking, ground-level covered patio seating, and welcomes ADA service animals.`,
            ],
          },
        ],
  };
}
