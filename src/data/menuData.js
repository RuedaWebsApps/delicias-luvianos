export const menuData = {
  es: {
    hero: {
      tag: "Tradición y Sabor Auténtico de Tierra Caliente",
      title: "Delicias Luvianos",
      subtitle: "Auténtica comida tradicional mexicana en Austin, Texas. Famosos por nuestras tortillas hechas a mano al momento, porciones generosas y exquisito mole de la casa.",
      address: "601 E Rundberg Ln, Austin, TX 78753",
      phone: "(512) 835-1894",
      callUs: "Llamar Ahora",
      viewMenu: "Explorar Menú",
      seeGallery: "Galería de Platillos",
      musicNotice: "Música ambiental tradicional disponible",
    },
    hours: {
      title: "Horario de Atención",
      subtitle: "Ven a disfrutar con tu familia o pide para llevar",
      days: [
        { day: "Lunes", time: "Cerrado", closed: true },
        { day: "Martes - Jueves", time: "8:00 AM - 11:00 PM / 11:30 PM", closed: false },
        { day: "Viernes - Sábado", time: "7:00 AM - 12:00 AM", closed: false },
        { day: "Domingo", time: "6:00 AM - 12:00 AM", closed: false },
      ],
      noticeDeliveryTitle: "Aviso de Entrega a Domicilio",
      noticeDeliveryText: "Actualmente, el servicio de entrega a través de plataformas como Uber Eats o Postmates podría no estar disponible o estar sujeto a restricciones de la zona. ¡Llámanos directamente para ordenar y recoger caliente!",
      features: [
        "Tortillas 100% hechas a mano",
        "Asientos al aire libre cubiertos",
        "Porciones abundantes y generosas",
        "Ambiente 100% familiar y casual"
      ]
    },
    categories: [
      { id: "all", name: "Todos los Platillos" },
      { id: "especialidades", name: "Guisos & Especialidades" },
      { id: "antojitos", name: "Antojitos Mexicanos" },
      { id: "mariscos", name: "Mariscos & Caldos" },
      { id: "sopas", name: "Caldos Tradicionales" },
    ],
    items: [
      {
        id: "mole",
        name: "Pollo en Mole Tradicional",
        category: "especialidades",
        image: "/dishes/Mole.png",
        description: "Nuestra receta estrella artesanal de mole estilo Luvianos con tierna pieza de pollo, arroz mexicano, frijoles y tortillas recién hechas.",
        tags: ["Especialidad de la Casa", "Popular"]
      },
      {
        id: "barbacoa-chivo",
        name: "Barbacoa de Chivo",
        category: "especialidades",
        image: "/dishes/BARBACOA DE CHIVO.png",
        description: "Jugosa barbacoa de chivo cocinada lentamente con hierbas de olor y chiles secos, servida con consomé, cebolla, cilantro y salsas.",
        tags: ["Fin de Semana", "Tradicional"]
      },
      {
        id: "costillas-verdolagas",
        name: "Costillas de Puerco con Verdolagas",
        category: "especialidades",
        image: "/dishes/Costillas de puerco con Verdolagas.png",
        description: "Suaves costillitas de cerdo bañadas en salsa verde con verdolagas frescas. El auténtico sabor casero de campo.",
        tags: ["Casero", "Recomendado"]
      },
      {
        id: "carne-ciruelas",
        name: "Carne de Puerco con Ciruelas",
        category: "especialidades",
        image: "/dishes/Carne de puerco con Ciruelas.png",
        description: "Platillo típico regional con el equilibrio agridulce perfecto de cerdo estofado en salsa especial de ciruelas pasas.",
        tags: ["Exclusivo Luvianos"]
      },
      {
        id: "espinazo-puerco",
        name: "Espinazo de Puerco",
        category: "especialidades",
        image: "/dishes/Espinazo de puerco.png",
        description: "Rico y sustancioso guisado tradicional de espinazo con chile guajillo y especias.",
        tags: ["Auténtico"]
      },
      {
        id: "pollo-tomillo",
        name: "Pollo en Salsa Tomillo",
        category: "especialidades",
        image: "/dishes/pollo en salsa tomillo.png",
        description: "Pollo sazonado en exquisita salsa de tomate y aromático tomillo fresco de monte.",
        tags: ["Aromático"]
      },
      {
        id: "milanesa-pollo",
        name: "Milanesa de Pollo Empanizada",
        category: "especialidades",
        image: "/dishes/milanesa de pollo.png",
        description: "Pechuga de pollo empanizada dorada y crujiente, servida con arroz, frijoles, ensalada fresca y tortillas a mano.",
        tags: ["Favorito"]
      },
      {
        id: "tacos",
        name: "Tacos con Tortilla a Mano",
        category: "antojitos",
        image: "/dishes/TACOS.png",
        description: "Servidos en generosa tortilla de maíz recién palmeada, rellenos de tu carne favorita con cebolla picada, cilantro y limones.",
        tags: ["Más Vendido"]
      },
      {
        id: "burrito",
        name: "Burrito Gigante",
        category: "antojitos",
        image: "/dishes/burrito.png",
        description: "Enorme tortilla de harina rellena de carne al gusto, frijoles, arroz, lechuga, queso y crema.",
        tags: ["Generoso"]
      },
      {
        id: "huarache",
        name: "Huarache Preparado",
        category: "antojitos",
        image: "/dishes/Huarache.png",
        description: "Base alargada de masa de maíz frita rellena de frijoles, cubierta de carne, lechuga fresca, queso fresco y crema.",
        tags: ["Tradicional"]
      },
      {
        id: "sopes",
        name: "Sopes Caseros",
        category: "antojitos",
        image: "/dishes/sopes.png",
        description: "Masa gruesa pellizcada a los lados con frijoles refritos, carne a elegir, lechuga rallada, queso cotija y crema.",
        tags: ["Antojito"]
      },
      {
        id: "gordita",
        name: "Gorditas Rellenas",
        category: "antojitos",
        image: "/dishes/gordita.png",
        description: "Gorditas de maíz hechas a mano rellenas de guisados tradicionales o carne asada con queso.",
        tags: ["A Mano"]
      },
      {
        id: "gringa",
        name: "Gringas de Pastor",
        category: "antojitos",
        image: "/dishes/gringa.png",
        description: "Doble tortilla de harina con carne al pastor sazonada, queso fundido y piña asada.",
        tags: ["Con Queso Fundido"]
      },
      {
        id: "pambazo",
        name: "Pambazo Tradicional",
        category: "antojitos",
        image: "/dishes/pambazo.png",
        description: "Pan bañado en salsa de chile guajillo, doradito y relleno de papas con chorizo, lechuga, queso y crema.",
        tags: ["Especial"]
      },
      {
        id: "torta",
        name: "Torta Mexicana",
        category: "antojitos",
        image: "/dishes/torta.png",
        description: "Pan telera calientito untado con frijoles y mayonesa, con carne a tu elección, aguacate, jitomate y jalapeños.",
        tags: ["Clásico"]
      },
      {
        id: "tostada",
        name: "Tostadas Preparadas",
        category: "antojitos",
        image: "/dishes/tostada.png",
        description: "Crujiente tortilla dorada con frijoles, pollo o carne deshebrada, abundante lechuga, jitomate, aguacate y queso.",
        tags: ["Crujiente"]
      },
      {
        id: "enchiladas-verdes",
        name: "Enchiladas Verdes",
        category: "antojitos",
        image: "/dishes/enchiladas verdes.png",
        description: "Rellenas de pollo y bañadas en salsa verde tomatillo tatemada, gratinadas con queso y crema fresca.",
        tags: ["Recomendado"]
      },
      {
        id: "enchiladas-rojas",
        name: "Enchiladas Rojas",
        category: "antojitos",
        image: "/dishes/enchiladas-rojas.png",
        description: "Tradicionales enchiladas bañadas en suave adobo rojo de chiles secos, servidas con lechuga, cebolla morada y queso.",
        tags: ["Sabor de Casa"]
      },
      {
        id: "flautas",
        name: "Flautas Crujientes",
        category: "antojitos",
        image: "/dishes/flautas.png",
        description: "Tacos dorados y crujientes rellenos de pollo deshebrado, bañados en crema, queso, lechuga y aguacate.",
        tags: ["Crujientes"]
      },
      {
        id: "quesadilla-especial",
        name: "Quesadilla Especial",
        category: "antojitos",
        image: "/dishes/quesadilla espacial.png",
        description: "Tortilla de maíz recién hecha a mano doblada con queso derretido y tu carne favorita o guisado.",
        tags: ["Hecha a Mano"]
      },
      {
        id: "quesadillas-doradas",
        name: "Quesadillas Doradas",
        category: "antojitos",
        image: "/dishes/quesadillas doradas.png",
        description: "Empanaditas de maíz fritas crujientes rellenas de queso derretido, papa o pollo.",
        tags: ["Crujiente"]
      },
      {
        id: "aguachiles",
        name: "Aguachiles Frescos",
        category: "mariscos",
        image: "/dishes/Aguachiles.png",
        description: "Camarones frescos curtidos en jugo de limón recién exprimido con serrano y pepino, cebolla morada y aguacate.",
        tags: ["Fresco", "Picosito"]
      },
      {
        id: "camarones-diabla",
        name: "Camarones a la Diabla",
        category: "mariscos",
        image: "/dishes/Camarones A La Diabla.png",
        description: "Camarones salteados en una salsa ardiente de chiles secos y chipotle con arroz y ensalada.",
        tags: ["Picante", "Mariscos"]
      },
      {
        id: "caldo-camaron",
        name: "Caldo de Camarón",
        category: "mariscos",
        image: "/dishes/caldo de camaron.png",
        description: "Reconfortante caldo costeño de camarones frescos con zanahorias, papas y un toque de epazote.",
        tags: ["Reconfortante"]
      },
      {
        id: "caldo-mariscos",
        name: "Caldo de Mariscos / 7 Mares",
        category: "mariscos",
        image: "/dishes/caldo de mariscos.png",
        description: "Sopa marinera con surtido de mariscos en un concentrado caldo especiado con hierbas finas.",
        tags: ["Completo"]
      },
      {
        id: "caldo-res-albondigas",
        name: "Caldo de Res con Albóndigas",
        category: "sopas",
        image: "/dishes/caldo de res con albondigas.png",
        description: "Suculento caldo con verduras frescas de temporada y sabrosas albóndigas caseras de res.",
        tags: ["Casero"]
      },
      {
        id: "caldo-pollo",
        name: "Caldo de Pollo de Rancho",
        category: "sopas",
        image: "/dishes/caldo de pollo.png",
        description: "Caldo nutritivo y calientito con verduras, arroz y piezas de pollo sazonadas al estilo de mamá.",
        tags: ["Nutritivo"]
      },
      {
        id: "albondigas",
        name: "Albóndigas en Caldillo",
        category: "sopas",
        image: "/dishes/ALBONDIGA.png",
        description: "Esferas de carne molida sazonada con yerbabuena en un caldillo suave de jitomate con verduras.",
        tags: ["Tradición"]
      }
    ],
    physicalMenu: {
      title: "Cartas del Menú Físico",
      subtitle: "Consulta los menús impresos originales del restaurante",
      images: [
        { src: "/menu-base/WhatsApp Image 2026-10-17 at 11.34.11 AM.jpeg", alt: "Menú Impreso Cara 1" },
        { src: "/menu-base/WhatsApp Image 2026-10-17 at 11.34.11 AMyt.jpeg", alt: "Menú Impreso Cara 2" },
        { src: "/menu-base/WhatsApp Image 2026-10-17 at 11.34.12 AM.jpeg", alt: "Menú Impreso Cara 3" }
      ]
    },
    footer: {
      title: "Delicias Luvianos Austin",
      description: "Orgullo guerrerense y mexicano en Rundberg Ln. Te esperamos con el sabor que te transporta a casa.",
      location: "Ubicación",
      contact: "Contacto",
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    hero: {
      tag: "Authentic Mexican Heritage & Flavors",
      title: "Delicias Luvianos",
      subtitle: "Authentic traditional Mexican cuisine in Austin, Texas. Renowned for our fresh handmade corn tortillas, generous portions, and signature homemade mole.",
      address: "601 E Rundberg Ln, Austin, TX 78753",
      phone: "(512) 835-1894",
      callUs: "Call to Order",
      viewMenu: "Explore Menu",
      seeGallery: "Dish Gallery",
      musicNotice: "Traditional background music available",
    },
    hours: {
      title: "Business Hours",
      subtitle: "Come enjoy with your family or call ahead for takeout",
      days: [
        { day: "Monday", time: "Closed", closed: true },
        { day: "Tuesday - Thursday", time: "8:00 AM - 11:00 PM / 11:30 PM", closed: false },
        { day: "Friday - Saturday", time: "7:00 AM - 12:00 AM", closed: false },
        { day: "Sunday", time: "6:00 AM - 12:00 AM", closed: false },
      ],
      noticeDeliveryTitle: "Delivery Service Notice",
      noticeDeliveryText: "Currently, delivery service through third-party platforms such as Uber Eats or Postmates might be unavailable or restricted by area. Please call us directly for fast pick-up!",
      features: [
        "100% Handcrafted Tortillas",
        "Covered Outdoor Patio Seating",
        "Hearty & Generous Portions",
        "Casual Family-Friendly Environment"
      ]
    },
    categories: [
      { id: "all", name: "All Dishes" },
      { id: "especialidades", name: "Specialties & Stews" },
      { id: "antojitos", name: "Mexican Street Food" },
      { id: "mariscos", name: "Seafood" },
      { id: "sopas", name: "Soups & Broths" },
    ],
    items: [
      {
        id: "mole",
        name: "Chicken in Traditional Mole",
        category: "especialidades",
        image: "/dishes/Mole.png",
        description: "Our signature handcrafted Luvianos-style mole sauce served over tender chicken, with Mexican rice, beans, and warm handmade tortillas.",
        tags: ["House Specialty", "Popular"]
      },
      {
        id: "barbacoa-chivo",
        name: "Slow-Braised Goat Barbacoa",
        category: "especialidades",
        image: "/dishes/BARBACOA DE CHIVO.png",
        description: "Juicy slow-cooked goat meat infused with dried peppers and aromatic herbs, served with rich broth, diced onions, cilantro, and limes.",
        tags: ["Weekend Special", "Traditional"]
      },
      {
        id: "costillas-verdolagas",
        name: "Pork Ribs with Verdolagas (Purslane)",
        category: "especialidades",
        image: "/dishes/Costillas de puerco con Verdolagas.png",
        description: "Tender pork ribs simmered in a tangy green tomatillo sauce with fresh purslane greens. Pure country-style Mexican home cooking.",
        tags: ["Homestyle", "Recommended"]
      },
      {
        id: "carne-ciruelas",
        name: "Pork with Prunes Sauce",
        category: "especialidades",
        image: "/dishes/Carne de puerco con Ciruelas.png",
        description: "A cherished regional specialty featuring a harmonious sweet-savory braised pork stewed in special dried plum sauce.",
        tags: ["Luvianos Exclusive"]
      },
      {
        id: "espinazo-puerco",
        name: "Pork Backbone Stew (Espinazo)",
        category: "especialidades",
        image: "/dishes/Espinazo de puerco.png",
        description: "Hearty and deeply flavorful stew cooked with guajillo chilies and authentic Mexican spices.",
        tags: ["Authentic"]
      },
      {
        id: "pollo-tomillo",
        name: "Chicken in Thyme Sauce",
        category: "especialidades",
        image: "/dishes/pollo en salsa tomillo.png",
        description: "Chicken simmered in an aromatic stew of crushed tomatoes and wild mountain thyme.",
        tags: ["Aromatic"]
      },
      {
        id: "milanesa-pollo",
        name: "Crispy Breaded Chicken Cutlet",
        category: "especialidades",
        image: "/dishes/milanesa de pollo.png",
        description: "Golden-crisp breaded chicken breast served with traditional rice, refried beans, fresh garden salad, and handmade tortillas.",
        tags: ["Guest Favorite"]
      },
      {
        id: "tacos",
        name: "Handmade Tortilla Tacos",
        category: "antojitos",
        image: "/dishes/TACOS.png",
        description: "Served on freshly pressed warm corn tortillas, filled with your favorite choice of meat, chopped onions, fresh cilantro, and lime wedges.",
        tags: ["Best Seller"]
      },
      {
        id: "burrito",
        name: "Jumbo Mexican Burrito",
        category: "antojitos",
        image: "/dishes/burrito.png",
        description: "A warm oversized flour tortilla packed with beans, rice, melted cheese, shredded lettuce, crema, and seasoned meat.",
        tags: ["Generous"]
      },
      {
        id: "huarache",
        name: "Artisanal Huarache",
        category: "antojitos",
        image: "/dishes/Huarache.png",
        description: "Oblong fried masa cake stuffed with refried beans, crowned with grilled meat, crisp lettuce, queso fresco, and drizzle of crema.",
        tags: ["Traditional"]
      },
      {
        id: "sopes",
        name: "Homestyle Sopes",
        category: "antojitos",
        image: "/dishes/sopes.png",
        description: "Thick hand-pinched corn cakes spread with refried beans, choice of meat, shredded lettuce, cotija cheese, and crema.",
        tags: ["Street Food"]
      },
      {
        id: "gordita",
        name: "Stuffed Masa Gorditas",
        category: "antojitos",
        image: "/dishes/gordita.png",
        description: "Piping-hot homemade corn pockets stuffed with traditional stews or grilled beef and melting cheese.",
        tags: ["Handcrafted"]
      },
      {
        id: "gringa",
        name: "Al Pastor Gringas",
        category: "antojitos",
        image: "/dishes/gringa.png",
        description: "Double flour tortilla layered with marinated al pastor pork, melted Oaxaca cheese, and sweet grilled pineapple.",
        tags: ["Melted Cheese"]
      },
      {
        id: "pambazo",
        name: "Authentic Pambazo",
        category: "antojitos",
        image: "/dishes/pambazo.png",
        description: "Fluffy roll dipped in vibrant guajillo pepper sauce, toasted on the griddle and stuffed with potatoes, chorizo, crema, and cheese.",
        tags: ["Special"]
      },
      {
        id: "torta",
        name: "Classic Mexican Torta",
        category: "antojitos",
        image: "/dishes/torta.png",
        description: "Toasted telera bread with beans, mayo, choice of grilled meat, creamy avocado slices, tomato, and pickled jalapeños.",
        tags: ["Classic"]
      },
      {
        id: "tostada",
        name: "Crispy Tostadas",
        category: "antojitos",
        image: "/dishes/tostada.png",
        description: "Crunchy fried corn tortilla topped with refried beans, shredded chicken or beef, iceberg lettuce, tomato, avocado, and cotija cheese.",
        tags: ["Crunchy"]
      },
      {
        id: "enchiladas-verdes",
        name: "Green Enchiladas Suizas",
        category: "antojitos",
        image: "/dishes/enchiladas verdes.png",
        description: "Rolled tortillas filled with shredded chicken, smothered in roasted green tomatillo salsa, broiled cheese, and sour cream.",
        tags: ["Recommended"]
      },
      {
        id: "enchiladas-rojas",
        name: "Red Chile Enchiladas",
        category: "antojitos",
        image: "/dishes/enchiladas-rojas.png",
        description: "Tortillas dipped in gentle dried red chile sauce, filled with chicken or queso fresco, served with diced red onions and sour cream.",
        tags: ["Comfort Food"]
      },
      {
        id: "flautas",
        name: "Crispy Taquitos / Flautas",
        category: "antojitos",
        image: "/dishes/flautas.png",
        description: "Golden fried rolled corn tortillas filled with seasoned chicken, garnished with cool lettuce, tomato slices, crema, and cotija cheese.",
        tags: ["Extra Crispy"]
      },
      {
        id: "quesadilla-especial",
        name: "Special Handmade Quesadilla",
        category: "antojitos",
        image: "/dishes/quesadilla espacial.png",
        description: "Large fresh corn masa pressed on the spot, filled with real Mexican melting cheese and savory grilled meats or stews.",
        tags: ["Handmade"]
      },
      {
        id: "quesadillas-doradas",
        name: "Fried Golden Quesadillas",
        category: "antojitos",
        image: "/dishes/quesadillas doradas.png",
        description: "Deep fried corn turnover pockets stuffed with molten cheese, potato, or shredded chicken.",
        tags: ["Crispy"]
      },
      {
        id: "aguachiles",
        name: "Fiery Lime Shrimp Aguachile",
        category: "mariscos",
        image: "/dishes/Aguachiles.png",
        description: "Fresh raw shrimp cured in vibrant lime juice blended with serrano pepper and cucumber, crowned with avocado and red onions.",
        tags: ["Fresh", "Spicy"]
      },
      {
        id: "camarones-diabla",
        name: "Deviled Spicy Shrimp (A La Diabla)",
        category: "mariscos",
        image: "/dishes/Camarones A La Diabla.png",
        description: "Jumbo shrimp sautéed in a fiery, rich red chile and chipotle sauce, accompanied by Mexican rice and crisp salad.",
        tags: ["Spicy", "Seafood"]
      },
      {
        id: "caldo-camaron",
        name: "Coastal Shrimp Soup",
        category: "mariscos",
        image: "/dishes/caldo de camaron.png",
        description: "Steaming traditional coastal broth featuring whole shrimp, carrots, potatoes, and fragrant Mexican epazote herbs.",
        tags: ["Comforting"]
      },
      {
        id: "caldo-mariscos",
        name: "7 Seas Seafood Medley Stew",
        category: "mariscos",
        image: "/dishes/caldo de mariscos.png",
        description: "Hearty fisherman soup loaded with a variety of fresh seafood in a deeply simmered herb and chile reduction.",
        tags: ["House Favorite"]
      },
      {
        id: "caldo-res-albondigas",
        name: "Beef & Meatball Garden Stew",
        category: "sopas",
        image: "/dishes/caldo de res con albondigas.png",
        description: "Simmered beef broth laden with sweet corn, carrots, squash, cabbage, and tender beef meatballs.",
        tags: ["Homestyle"]
      },
      {
        id: "caldo-pollo",
        name: "Homestyle Chicken Broth",
        category: "sopas",
        image: "/dishes/caldo de pollo.png",
        description: "Soothing golden chicken soup with seasonal vegetables, rice, cilantro, and fresh lime on the side.",
        tags: ["Nutritious"]
      },
      {
        id: "albondigas",
        name: "Mexican Meatball Soup",
        category: "sopas",
        image: "/dishes/ALBONDIGA.png",
        description: "Seasoned mint-infused beef meatballs swimming in a savory light roasted tomato and vegetable broth.",
        tags: ["Traditional"]
      }
    ],
    physicalMenu: {
      title: "Original Printed Menus",
      subtitle: "Browse the authentic on-site paper menus from the restaurant",
      images: [
        { src: "/menu-base/WhatsApp Image 2026-10-17 at 11.34.11 AM.jpeg", alt: "Physical Menu Page 1" },
        { src: "/menu-base/WhatsApp Image 2026-10-17 at 11.34.11 AMyt.jpeg", alt: "Physical Menu Page 2" },
        { src: "/menu-base/WhatsApp Image 2026-10-17 at 11.34.12 AM.jpeg", alt: "Physical Menu Page 3" }
      ]
    },
    footer: {
      title: "Delicias Luvianos Austin",
      description: "Heart of Guerrero & Authentic Mexican soul in Austin on Rundberg Ln. Serving you generous portions with genuine handmade love.",
      location: "Location",
      contact: "Contact Us",
      rights: "All rights reserved."
    }
  }
};
