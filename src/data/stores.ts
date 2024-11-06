export interface Store {
  title: string;
  imageName: string;
  alt: string;
  horario: string;
  categoria:
    | 'Autoservicio'
    | 'Tiendas departamentales'
    | 'Servicios, bancos y cajeros'
    | 'Ropa y accesorios'
    | 'Tiendas especializadas'
    | 'Comidas'
    | 'Entretenimiento'
    | 'Ópticas, salud y belleza'
    | 'Electrónicos y telefonía'
    | 'Otros';
}

export const stores: Store[] = [
  {
    title: 'BODEGA AURRERA',
    imageName: 'logo-aurrera.png',
    alt: 'Logo Bodega Aurrera',
    horario: `<strong>L-D:</strong> 07:00 - 22:00`,
    categoria: 'Autoservicio',
  },
  {
    title: 'MERCA ASIA',
    imageName: 'logo-mercaasia.jpg',
    alt: 'Logo Merca Asia',
    horario: `<strong>L-D:</strong> 10:00 - 21:00`,
    categoria: 'Tiendas departamentales',
  },
  {
    title: 'ELEKTRA',
    imageName: 'logo-elektra.png',
    alt: 'Logo Elektra',
    horario: `<strong>L-D:</strong> 09:00 - 21:00`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'SALVAJE TENTACIÓN',
    imageName: 'logo-salvajetentacion.png',
    alt: 'Logo Salvaje Tentación',
    horario: `<strong>L-D:</strong> 09:00 - 21:00`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'ITALIKA',
    imageName: 'logo-italika.png',
    alt: 'Logo Italika',
    horario: `<strong>L-D:</strong> 09:00 - 19:00`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'KFC',
    imageName: 'logo-kfc.png',
    alt: 'Logo KFC',
    horario: `<strong>L-D:</strong> 10:00 - 22:00`,
    categoria: 'Comidas',
  },
  {
    title: 'CINEMEX',
    imageName: 'logo-cinemex.png',
    alt: 'Logo Cinemex',
    horario: `<strong>L-D:</strong> 11:00 - 12:00`,
    categoria: 'Entretenimiento',
  },
  {
    title: 'LITTLE CAESAR’S',
    imageName: 'logo-littlecaesars.png',
    alt: 'Logo Little Caesar’s',
    horario: `<strong>L-D:</strong> 10:00 - 22:00`,
    categoria: 'Comidas',
  },
  {
    title: 'SPORTOWN FITNESS CLUB',
    imageName: 'logo-sportownfitness.jpg',
    alt: 'Logo SPORTOWN FITNESS CLUB',
    horario: `<strong>L-D:</strong> 06:00 - 22:00`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'KINKAYU',
    imageName: '',
    alt: 'Logo KINKAYU',
    horario: `<strong>L-D:</strong> 12:00 - 20:00`,
    categoria: 'Comidas',
  },
  {
    title: 'VIANNEY',
    imageName: 'logo-vianney.png',
    alt: 'Logo Vianney',
    horario: `<strong>L-D:</strong> 09:00 - 19:00`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'MODATELAS',
    imageName: 'logo-modatelas.png',
    alt: 'Logo Modatelas',
    horario: `<strong>L-D:</strong> 09:00 - 20:00`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'COPPEL',
    imageName: 'logo-coppel.png',
    alt: 'Logo Coppel-Canada',
    horario: `<strong>L-D:</strong> 11:00 - 20:00`,
    categoria: 'Tiendas departamentales',
  },
  {
    title: 'MAPLE EMPEÑO',
    imageName: 'logo-mapleempeno.png',
    alt: 'Logo Maple Empeño',
    horario: `<strong>L-D:</strong> 10:00 - 19:00`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'FRANCK LUCK',
    imageName: 'logo-franckluck.jpg',
    alt: 'Logo Franck Luck',
    horario: `<strong>L-D:</strong> 12:00 - 19:00`,
    categoria: 'Comidas',
  },
  {
    title: 'TROPIC',
    imageName: 'logo-tropic.png',
    alt: 'Logo Tropic',
    horario: `<strong>L-D:</strong> 10:00 - 21:00`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'JFM LENCERIA Y BELLEZA',
    imageName: '',
    alt: 'Logo JFM Lenceria y Belleza',
    horario: `<strong>L-D:</strong> 10:00 - 20:00`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'OPTICA ARISTA',
    imageName: 'logo-opticaarista.jpg',
    alt: 'Logo Optica Arista',
    horario: `<strong>L-D:</strong> 09:00 - 19:00`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'COMEX',
    imageName: 'logo-comex.png',
    alt: 'Logo Comex',
    horario: `<strong>L-D:</strong> 09:00 - 19:00`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'BEREL',
    imageName: 'logo-berel.jpg',
    alt: 'Logo Berel',
    horario: `<strong>L-D:</strong> 09:00 - 19:00`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'EFECTIMUNDO',
    imageName: 'logo-efectimundo.png',
    alt: 'Logo Efectimundo',
    horario: `<strong>L-D:</strong> 10:00 - 19:00`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'ARTE Y CULTURA COLORES DE MEXICO',
    imageName: '',
    alt: 'Logo Arte y Cultura Colores de México',
    horario: `<strong>L-D:</strong> 11:00 - 20:00`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'MOVISTAR',
    imageName: 'logo-movistar.png',
    alt: 'Logo Movistar',
    horario: `<strong>L-D:</strong> 11:00 - 19:00`,
    categoria: 'Electrónicos y telefonía',
  },
  {
    title: 'INEA',
    imageName: 'logo-inea.jpg',
    alt: 'Logo INEA',
    horario: `<strong>M-J:</strong> 11:00 - 13:30`,
    categoria: 'Otros',
  },
  {
    title: 'SANTA ALITAS',
    imageName: 'logo-santaalitas.png',
    alt: 'Logo Santa Alitas',
    horario: 'Próxima Apertura',
    categoria: 'Comidas',
  },
  {
    title: 'HBF MAKE UP & ACCESORIOS',
    imageName: '',
    alt: 'Logo HBF MAKE UP & ACCESORIOS',
    horario: `<strong>L-D:</strong> 11:00 - 20:00`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'INTERLAB',
    imageName: 'logo-interlab.png',
    alt: 'Logo INTERLAB',
    horario: `<strong>L-D:</strong> 07:00 - 19:00`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'BUFETE CHINO',
    imageName: '',
    alt: 'Logo Bufete Chino',
    horario: 'Próxima Apertura',
    categoria: 'Comidas',
  },
  {
    title: 'OLIVER’S COFFEE SA DE CV',
    imageName: 'logo-oliverscoffee.jpg',
    alt: 'Logo Oliver’s Coffee SA de CV',
    horario: `<strong>L-D:</strong> 09:00 - 22:00`,
    categoria: 'Comidas',
  },
  {
    title: 'SOLO PARA PEKES',
    imageName: '',
    alt: 'Logo Solo para Pekes',
    horario: `<strong>L-D:</strong> 10:30 - 21:00`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'JFM BOLSAS Y CINTURONES',
    imageName: '',
    alt: 'Logo JFM Bolsas y Cinturones',
    horario: `<strong>L-D:</strong> 11:00 - 21:00`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'CASH APOYO EFECTIVO',
    imageName: 'logo-cash.png',
    alt: 'Logo Cash Apoyo Efectivo',
    horario: `<strong>L-D:</strong> 09:00 - 18:30`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'MONCAR BAGUETTS & SALADS',
    imageName: 'logo-moncar.jpg',
    alt: 'Logo Moncar Baguetts & Salads',
    horario: `<strong>L-D:</strong> 11:30 - 22:00`,
    categoria: 'Comidas',
  },
  {
    title: 'JUMPING',
    imageName: '',
    alt: 'Logo Jumping',
    horario: `<strong>L-D:</strong> 10:30 - 21:00`,
    categoria: 'Entretenimiento',
  },
  {
    title: 'COSMETICOS E ICNIUHTLI',
    imageName: '',
    alt: 'Logo COSMETICOS E ICNIUHTLI',
    horario: 'Cerrado',
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'SPYRAL',
    imageName: 'logo-spyral.png',
    alt: 'Logo SPYRAL',
    horario: `<strong>L-D:</strong> 12:00 - 20:00`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'ACCESORIOS PARA TU CELULAR',
    imageName: 'logo-accesorioscelular.jpg',
    alt: 'Logo Accesorios para tu Celular',
    horario: `<strong>L-D:</strong> 10:00 - 20:00`,
    categoria: 'Electrónicos y telefonía',
  },
];
