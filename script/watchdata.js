const watchData = [
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: '40 Series - 40MM',
    price: '$120',
    quantity: 15,
    style: 'Classic',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/WhiteTanLeather.Front_280x.jpg?v=1510683461',
    model: 'Classic - 45MM',
    price: '$95',
    quantity: 16,
    style: 'Modern',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/BlackGold.Front_7512ebdb-317b-440f-9eb5-52087c3ff3be_280x.jpg?v=1510683201',
    model: 'Classic - 45MM',
    price: '$115',
    quantity: 17,
    style: 'Vintage',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Mens02.Front_280x.jpg?v=1510684692',
    model: '40 Series - 40MM',
    price: '$120',
    quantity: 18,
    style: 'Edgy',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/WhiteSilver.Front_280x.jpg?v=1510683449',
    model: 'Classic - 45MM',
    price: '$100',
    quantity: 19,
    style: 'Classic',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Chrono - 45MM',
    price: '$135',
    quantity: 20,
    style: 'Modern',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Vacheron Constantin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MR01-RGGR.Front._Glare_280x.jpg?v=1510685256',
    model: 'Revolver - 41MM',
    price: '$140',
    quantity: 21,
    style: 'Vintage',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Blancpain',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Classic - 45MM',
    price: '$110',
    quantity: 10,
    style: 'Edgy',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Modern Sport - 42MM',
    price: '$160',
    quantity: 11,
    style: 'Classic',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MV-359.Front_280x.jpg?v=1510178322',
    model: 'Voyager - 42MM',
    price: '$150',
    quantity: 12,
    style: 'Modern',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Mens30.Front_280x.jpg?v=1510684654',
    model: '40 Series - 40MM',
    price: '$120',
    quantity: 13,
    style: 'Vintage',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MS01-BROGR.Front.edit_280x.jpg?v=1523050505',
    model: 'Modern Sport - 42MM',
    price: '$145',
    quantity: 14,
    style: 'Edgy',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MM01-GRGR.Front_280x.jpg?v=1519330565',
    model: 'Classic - 45MM',
    price: '$110',
    quantity: 15,
    style: 'Classic',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Vacheron Constantin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/WhiteCarmelLeather.front_280x.jpg?v=1519431098',
    model: 'Chrono - 45MM',
    price: '$135',
    quantity: 16,
    style: 'Modern',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Blancpain',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Chrono - 45MM',
    price: '$140',
    quantity: 17,
    style: 'Vintage',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Voyager07.Front_55a5df62-2230-44cb-88c4-abda652be139_280x.jpg?v=1510685004',
    model: 'Voyager - 42MM',
    price: '$145',
    quantity: 18,
    style: 'Edgy',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MM01-GR.Front_280x.jpg?v=1520372181',
    model: 'Classic - 45MM',
    price: '$115',
    quantity: 19,
    style: 'Classic',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Mens41.Front_1f5f2ed5-0380-4711-a574-061ac1d83ad7_280x.jpg?v=1510684738',
    model: '40 Series - 40MM',
    price: '$125',
    quantity: 1,
    style: 'Modern',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/BlackBlackLeather.Front.EDIT_280x.jpg?v=1510683927',
    model: 'Chrono - 45MM',
    price: '$135',
    quantity: 2,
    style: 'Vintage',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Chrono - 45MM',
    price: '$140',
    quantity: 3,
    style: 'Edgy',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Vacheron Constantin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/M.MC02-BROGR.Front_280x.jpg?v=1510683524',
    model: 'Chrono - 40MM',
    price: '$135',
    quantity: 4,
    style: 'Classic',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Blancpain',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/WhiteBlackTanLeather.Front_EDIT_89672f0c-96d4-4385-9dbc-a1c6202edea4_280x.jpg?v=1510684530',
    model: 'Chrono - 45MM',
    price: '$135',
    quantity: 5,
    style: 'Modern',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Voyager - 42MM',
    price: '$145',
    quantity: 6,
    style: 'Vintage',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Chrono_BlackRose.Front_280x.jpg?v=1510683961',
    model: 'Chrono - 45MM',
    price: '$140',
    quantity: 7,
    style: 'Edgy',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: '40 Series - 40MM',
    price: '$120',
    quantity: 8,
    style: 'Classic',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/GoldBlackLeather.Front.EDIT_280x.jpg?v=1510684050',
    model: 'Chrono - 45MM',
    price: '$135',
    quantity: 9,
    style: 'Modern',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Mens37.Front_e0435337-82ea-4472-86aa-0e34e1b2c3e8_280x.jpg?v=1510684726',
    model: '40 Series - 40MM',
    price: '$120',
    quantity: 10,
    style: 'Vintage',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Vacheron Constantin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MR01-BBL.Front._Glare_280x.jpg?v=1510685244',
    model: 'Revolver - 41MM',
    price: '$140',
    quantity: 35,
    style: 'Edgy',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Blancpain',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Voyager_BlackRose.Front_280x.jpg?v=1510685031',
    model: 'Voyager - 42MM',
    price: '$150',
    quantity: 36,
    style: 'Classic',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Revolver - 41MM',
    price: '$140',
    quantity: 37,
    style: 'Modern',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Revolver - 41MM',
    price: '$150',
    quantity: 38,
    style: 'Vintage',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/ModernSport03.Front_1285e443-b6f6-4b40-96db-89cfbb5bbc10_280x.jpg?v=1510685074',
    model: 'Modern Sport - 42MM',
    price: '$145',
    quantity: 39,
    style: 'Edgy',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Modern Sport - 42MM',
    price: '$145',
    quantity: 40,
    style: 'Classic',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Modern Sport - 42MM',
    price: '$145',
    quantity: 41,
    style: 'Modern',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Vacheron Constantin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/M.MC02-BLGR.Front_280x.jpg?v=1510683511',
    model: 'Chrono - 40MM',
    price: '$135',
    quantity: 17,
    style: 'Vintage',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Blancpain',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Classic - 45MM',
    price: '$110',
    quantity: 18,
    style: 'Edgy',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Modern Sport - 42MM',
    price: '$160',
    quantity: 19,
    style: 'Classic',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Classic - 45MM',
    price: '$110',
    quantity: 20,
    style: 'Modern',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MT01-GR.Front_280x.jpg?v=1519331192',
    model: '40 Series - 40MM',
    price: '$120',
    quantity: 21,
    style: 'Vintage',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Nordstrom.Mens.Chrono.RoseGoldDarkBrownLeather.Fron_280x.jpg?v=1508959787',
    model: 'Chrono - 45MM',
    price: '$135',
    quantity: 22,
    style: 'Edgy',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MR01-BTL.Front._Glare_97f5c551-9dbb-4550-acec-dc46ddd02f0b_280x.jpg?v=1510685318',
    model: 'Revolver - 41MM',
    price: '$140',
    quantity: 23,
    style: 'Classic',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Vacheron Constantin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Voyager09.Front_908807a4-a08b-4016-848c-054d5551a9a6_280x.jpg?v=1510685043',
    model: 'Voyager - 42MM',
    price: '$150',
    quantity: 24,
    style: 'Modern',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Blancpain',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MR01-RGBRL.Front._Glare_a3ec6195-b078-441c-a6db-650bc317bf2d_280x.jpg?v=1508272576',
    model: 'Revolver - 41MM',
    price: '$140',
    quantity: 25,
    style: 'Vintage',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Revolver - 41MM',
    price: '$150',
    quantity: 26,
    style: 'Edgy',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/RoseGoldBrownLeather.Front_280x.jpg?v=1510683347',
    model: 'Classic - 45MM',
    price: '$110',
    quantity: 27,
    style: 'Classic',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Chrono - 45MM',
    price: '$135',
    quantity: 28,
    style: 'Modern',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/BlackBlack.Front_d6c0738d-2139-4553-a8da-d6e350eaa1fe_280x.jpg?v=1519748049',
    model: 'Classic - 45MM',
    price: '$100',
    quantity: 29,
    style: 'Vintage',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MM01-BROGR.Front_Colroedit_280x.jpg?v=1523048040',
    model: 'Classic - 45MM',
    price: '$110',
    quantity: 30,
    style: 'Edgy',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Vacheron Constantin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/SilverBlackLeather.Front_280x.jpg?v=1510683977',
    model: 'Chrono - 45MM',
    price: '$135',
    quantity: 1,
    style: 'Classic',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Blancpain',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/M.MC02-BBGR.Front_280x.jpg?v=1510683538',
    model: 'Chrono - 40MM',
    price: '$140',
    quantity: 2,
    style: 'Modern',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MR01-BB.Front._Glare_280x.jpg?v=1510685232',
    model: 'Revolver - 41MM',
    price: '$150',
    quantity: 3,
    style: 'Vintage',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Voyager03.Front_280x.jpg?v=1513297794',
    model: 'Voyager - 42MM',
    price: '$140',
    quantity: 4,
    style: 'Edgy',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Chrono - 40MM',
    price: '$140',
    quantity: 5,
    style: 'Classic',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Voyager04.Front_280x.jpg?v=1510684967',
    model: 'Voyager - 42MM',
    price: '$140',
    quantity: 6,
    style: 'Modern',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/WhiteBlackTanLeather.Front_d6be8871-f59e-4368-93e3-b81f0a8da0be_280x.jpg?v=1510683420',
    model: 'Classic - 45MM',
    price: '$100',
    quantity: 7,
    style: 'Vintage',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Vacheron Constantin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Nordstrom.Mens.Chrono.SilverDarkBrownLeather.Front_280x.jpg?v=1508959796',
    model: 'Chrono - 45MM',
    price: '$135',
    quantity: 8,
    style: 'Edgy',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Blancpain',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Nordstrom.Mens.Classic.SilverNaturalLeather.Front_280x.jpg?v=1508959632',
    model: 'Classic - 45MM',
    price: '$110',
    quantity: 9,
    style: 'Classic',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/M.MC02-RGNA.Front_280x.jpg?v=1510683809',
    model: 'Chrono - 40MM',
    price: '$135',
    quantity: 10,
    style: 'Modern',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/BlackTanLeather.Front_60857724-a484-4a9f-9d9b-6a541a6c2efb_280x.jpg?v=1510683293',
    model: 'Classic - 45MM',
    price: '$95',
    quantity: 11,
    style: 'Vintage',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: '40 Series - 40MM',
    price: '$120',
    quantity: 12,
    style: 'Edgy',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Voyager - 42MM',
    price: '$145',
    quantity: 13,
    style: 'Classic',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MV01-GR.Front_280x.jpg?v=1519331419',
    model: 'Voyager - 42MM',
    price: '$150',
    quantity: 14,
    style: 'Modern',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Vacheron Constantin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/WhiteBlackLeather.Front_280x.jpg?v=1510683408',
    model: 'Classic - 45MM',
    price: '$95',
    quantity: 15,
    style: 'Vintage',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Blancpain',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/SilverBlackLeather.Front_07aa3d4b-3571-41d7-b757-77d360482c4e_280x.jpg?v=1510683281',
    model: 'Classic - 45MM',
    price: '$100',
    quantity: 16,
    style: 'Edgy',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Revolver - 41MM',
    price: '$140',
    quantity: 17,
    style: 'Classic',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Classic - 45MM',
    price: '$95',
    quantity: 18,
    style: 'Modern',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Voyager - 42MM',
    price: '$150',
    quantity: 19,
    style: 'Vintage',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: '40 Series - 40MM',
    price: '$120',
    quantity: 20,
    style: 'Edgy',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Voyager - 42MM',
    price: '$145',
    quantity: 21,
    style: 'Classic',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Vacheron Constantin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Chrono_Gun_Metal_Black_Leather_Front.EDIT_280x.jpg?v=1510684236',
    model: 'Chrono - 45MM',
    price: '$135',
    quantity: 22,
    style: 'Modern',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Blancpain',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/ClassicLeather_BlackRose.Front_51aecee5-de24-40a2-bdaf-dd003aa2def8_280x.jpg?v=1510683266',
    model: 'Classic - 45MM',
    price: '$110',
    quantity: 23,
    style: 'Vintage',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Chrono - 45MM',
    price: '$140',
    quantity: 24,
    style: 'Edgy',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: '40 Series - 40MM',
    price: '$120',
    quantity: 25,
    style: 'Classic',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MT01-WT.Front_280x.jpg?v=1510172946',
    model: '40 Series - 40MM',
    price: '$120',
    quantity: 26,
    style: 'Modern',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Classic - 45MM',
    price: '$115',
    quantity: 2,
    style: 'Vintage',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Nordstrom.Mens.Chrono.TitaniumYellow.Front_280x.jpg?v=1508959805',
    model: 'Chrono - 45MM',
    price: '$140',
    quantity: 3,
    style: 'Edgy',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Vacheron Constantin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MM01-WBR.Front_280x.jpg?v=1510172534',
    model: 'Classic - 45MM',
    price: '$110',
    quantity: 4,
    style: 'Classic',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Blancpain',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Voyager02.Front_280x.jpg?v=1510684993',
    model: 'Voyager - 42MM',
    price: '$140',
    quantity: 5,
    style: 'Modern',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MR01-GML.Front._Glare_b7b2d5c5-5ccd-499d-ab55-b2d74459fbc3_280x.jpg?v=1510685307',
    model: 'Revolver - 41MM',
    price: '$140',
    quantity: 6,
    style: 'Vintage',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MC02-BBLGR.Front_280x.jpg?v=1519330406',
    model: 'Chrono - 40MM',
    price: '$135',
    quantity: 7,
    style: 'Edgy',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Mens38.Front_a6f15de9-580f-4c04-9930-5036c7a2f07e_280x.jpg?v=1510684589',
    model: '40 Series - 40MM',
    price: '$125',
    quantity: 8,
    style: 'Classic',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Voyager06.Front_280x.jpg?v=1510684956',
    model: 'Voyager - 42MM',
    price: '$140',
    quantity: 9,
    style: 'Modern',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: '40 Series - 40MM',
    price: '$120',
    quantity: 10,
    style: 'Vintage',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Vacheron Constantin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MR01-BSL.Front._Glare_b9d6b76c-6b61-4e1d-9b88-12ac111bcd9a_280x.jpg?v=1527206022',
    model: 'Revolver - 41MM',
    price: '$140',
    quantity: 11,
    style: 'Edgy',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Blancpain',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MT01-GU.Front_280x.jpg?v=1510172231',
    model: '40 Series - 40MM',
    price: '$125',
    quantity: 12,
    style: 'Classic',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MR01-GU.Front._Glare_2b9c9f3f-6f23-46c5-9f7a-39ee62c64fee_280x.jpg?v=1510685198',
    model: 'Revolver - 41MM',
    price: '$150',
    quantity: 13,
    style: 'Modern',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/RoseGoldBrownLeather.Front.EDIT_280x.jpg?v=1510684302',
    model: 'Chrono - 45MM',
    price: '$135',
    quantity: 14,
    style: 'Vintage',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Chrono - 45MM',
    price: '$135',
    quantity: 15,
    style: 'Edgy',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/BlueBrownLeather.Front_280x.jpg?v=1510683308',
    model: 'Classic - 45MM',
    price: '$110',
    quantity: 16,
    style: 'Classic',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Mens40.Front_e1709d8c-2755-4b82-9d82-2b3bc8ba720a_280x.jpg?v=1510684629',
    model: '40 Series - 40MM',
    price: '$125',
    quantity: 17,
    style: 'Modern',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Vacheron Constantin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MR01-SGR.Front._Glare_280x.jpg?v=1510685267',
    model: 'Revolver - 41MM',
    price: '$140',
    quantity: 18,
    style: 'Vintage',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Blancpain',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Chrono - 40MM',
    price: '$140',
    quantity: 19,
    style: 'Edgy',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MV-GU.Front_280x.jpg?v=1510178144',
    model: 'Voyager - 42MM',
    price: '$150',
    quantity: 20,
    style: 'Classic',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Modern Sport - 42MM',
    price: '$160',
    quantity: 21,
    style: 'Modern',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/ModernSport06.Front_280x.jpg?v=1510685172',
    model: 'Modern Sport - 42MM',
    price: '$160',
    quantity: 22,
    style: 'Vintage',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Gunmetal.Front.EDIT_280x.jpg?v=1510684070',
    model: 'Chrono - 45MM',
    price: '$140',
    quantity: 23,
    style: 'Edgy',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/SilverBrownLeather.Front_280x.jpg?v=1510684503',
    model: 'Chrono - 45MM',
    price: '$135',
    quantity: 24,
    style: 'Classic',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Vacheron Constantin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Nordstrom.Mens.Classic.RoseGoldGrayLeather.Front_280x.jpg?v=1508959783',
    model: 'Classic - 45MM',
    price: '$110',
    quantity: 25,
    style: 'Modern',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Blancpain',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/40s_BlackRose.Front_aeaf504c-45d5-400b-b0d0-9cb31ecbd4f8_280x.jpg?v=1510684602',
    model: '40 Series - 40MM',
    price: '$125',
    quantity: 4,
    style: 'Vintage',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Mens35.Front_bff3a157-e83e-411b-a3e4-609a318e96eb_280x.jpg?v=1510684666',
    model: '40 Series - 40MM',
    price: '$120',
    quantity: 5,
    style: 'Edgy',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/WhiteGoldLeather.Front_280x.jpg?v=1510683437',
    model: 'Classic - 45MM',
    price: '$110',
    quantity: 6,
    style: 'Classic',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/MR01-BROGR.Front.edit_280x.jpg?v=1523049368',
    model: 'Revolver - 41MM',
    price: '$140',
    quantity: 7,
    style: 'Modern',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Modern Sport - 42MM',
    price: '$160',
    quantity: 8,
    style: 'Vintage',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Voyager - 42MM',
    price: '$140',
    quantity: 9,
    style: 'Edgy',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Vacheron Constantin',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/M.MC02-SBLU.Front_280x.jpg?v=1510683794',
    model: 'Chrono - 40MM',
    price: '$140',
    quantity: 10,
    style: 'Classic',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Blancpain',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Mens43.Front_280x.jpg?v=1510684767',
    model: '40 Series - 40MM',
    price: '$120',
    quantity: 11,
    style: 'Modern',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Audemars Piguet',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Voyager - 42MM',
    price: '$145',
    quantity: 12,
    style: 'Vintage',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'Patek Philippe',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/ModernSport02.Front_280x.jpg?v=1510685134',
    model: 'Modern Sport - 42MM',
    price: '$145',
    quantity: 13,
    style: 'Edgy',
    tier: 'Daily',
    gender: 'Gentleman',
    brand: 'Rolex',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Mens31.Front_3364270f-b56c-4d27-8046-9c9be01ca568_280x.jpg?v=1510684577',
    model: '40 Series - 40MM',
    price: '$120',
    quantity: 14,
    style: 'Classic',
    tier: 'Luxurious',
    gender: 'Gentleman',
    brand: 'Ulysse Nardin',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    model: 'Voyager - 42MM',
    price: '$145',
    quantity: 15,
    style: 'Modern',
    tier: 'Casual',
    gender: 'Gentleman',
    brand: 'IWC Schaffhausen',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Crux.Front_280x.jpg?v=1510688491',
    price: '$150',
    model: 'Nova - 38MM',
    brand: 'Audemars Piguet',
    quantity: 15,
    tier: 'Luxurious',
    style: 'Classic',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/FJ01-RGBL.Front_287becf9-e800-4333-9a42-80ff4966cd30_280x.jpg?v=1510689062',
    price: '$125',
    model: 'Boulevard - 38MM',
    brand: 'Patek Philippe',
    quantity: 16,
    tier: 'Casual',
    style: 'Modern',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Womens14.Front_280x.jpg?v=1510688045',
    price: '$115',
    model: 'Boulevard - 38MM',
    brand: 'Rolex',
    quantity: 17,
    tier: 'Daily',
    style: 'Vintage',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/W.Chrono.AllRoseGold.Front_280x.jpg?v=1510688512',
    price: '$115',
    model: 'Avenue - 28MM',
    brand: 'Ulysse Nardin',
    quantity: 18,
    tier: 'Luxurious',
    style: 'Edgy',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/W.VineBLVD.Front_280x.jpg?v=1510688376',
    price: '$125',
    model: 'Avenue - 28MM',
    brand: 'IWC Schaffhausen',
    quantity: 19,
    tier: 'Casual',
    style: 'Classic',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Womens03.Front_ROSE_GOLD_ADD_280x.jpg?v=1510687973',
    price: '$115',
    model: 'Signature - 38MM',
    brand: 'Vacheron Constantin',
    quantity: 20,
    tier: 'Daily',
    style: 'Modern',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/FJ01-RGBL.Front_287becf9-e800-4333-9a42-80ff4966cd30_280x.jpg?v=1510689062',
    price: '$135',
    model: 'Gala - 32MM',
    brand: 'Blancpain',
    quantity: 21,
    tier: 'Luxurious',
    style: 'Vintage',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Womens14.Front_280x.jpg?v=1510688045',
    price: '$115',
    model: 'Boulevard - 38MM',
    brand: 'Audemars Piguet',
    quantity: 10,
    tier: 'Casual',
    style: 'Edgy',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/W.VineBLVD.Front_280x.jpg?v=1510688376',
    price: '$115',
    model: 'Boulevard - 38MM',
    brand: 'Patek Philippe',
    quantity: 11,
    tier: 'Daily',
    style: 'Classic',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/W.VineBLVD.Front_280x.jpg?v=1510688376',
    price: '$135',
    model: 'Gala - 32MM',
    brand: 'Rolex',
    quantity: 12,
    tier: 'Luxurious',
    style: 'Modern',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Womens17.Front_280x.jpg?v=1510688422',
    price: '$115',
    model: 'Boulevard - 38MM',
    brand: 'Ulysse Nardin',
    quantity: 13,
    tier: 'Casual',
    style: 'Vintage',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/W.VineBLVD.Front_280x.jpg?v=1510688376',
    price: '$115',
    model: 'Boulevard - 38MM',
    brand: 'IWC Schaffhausen',
    quantity: 14,
    tier: 'Daily',
    style: 'Edgy',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Vela.Front_280x.jpg?v=1510688580',
    price: '$145',
    model: 'Nova - 38MM',
    brand: 'Vacheron Constantin',
    quantity: 15,
    tier: 'Luxurious',
    style: 'Classic',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/FB01-RGNU.Front_2_280x.jpg?v=1514397379',
    price: '$125',
    model: 'Boulevard - 38MM',
    brand: 'Blancpain',
    quantity: 16,
    tier: 'Casual',
    style: 'Modern',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/W.MiniBlvd.Madison.Front_280x.jpg?v=1510688991',
    price: '$115',
    model: 'Avenue - 28MM',
    brand: 'Audemars Piguet',
    quantity: 17,
    tier: 'Daily',
    style: 'Vintage',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/FB01-RGNU.Front_2_280x.jpg?v=1514397379',
    price: '$105',
    model: 'Mod - 32MM',
    brand: 'Patek Philippe',
    quantity: 18,
    tier: 'Luxurious',
    style: 'Edgy',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Sunset_Front.COLOR.EDIT_280x.jpg?v=1510688434',
    price: '$125',
    model: 'Boulevard - 38MM',
    brand: 'Rolex',
    quantity: 19,
    tier: 'Casual',
    style: 'Classic',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/FB01-RGNU.Front_2_280x.jpg?v=1514397379',
    price: '$160',
    model: 'Boulevard - 38MM',
    brand: 'Ulysse Nardin',
    quantity: 1,
    tier: 'Daily',
    style: 'Modern',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/FB01-RGS.Front__2_280x.jpg?v=1514397495',
    price: '$115',
    model: 'Mod - 32MM',
    brand: 'IWC Schaffhausen',
    quantity: 2,
    tier: 'Luxurious',
    style: 'Vintage',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/FB01-RGNU.Front_2_280x.jpg?v=1514397379',
    price: '$115',
    model: 'Mod - 32MM',
    brand: 'Vacheron Constantin',
    quantity: 3,
    tier: 'Casual',
    style: 'Edgy',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/W.FigueroaBLVD.RoseGoldLeather.Front_280x.jpg?v=1510688066',
    price: '$115',
    model: 'Boulevard - 38MM',
    brand: 'Blancpain',
    quantity: 4,
    tier: 'Daily',
    style: 'Classic',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/W.Chrono.AllRoseGold.Front_280x.jpg?v=1510688512',
    price: '$150',
    model: 'Nova - 38MM',
    brand: 'Audemars Piguet',
    quantity: 5,
    tier: 'Luxurious',
    style: 'Modern',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Womens02.Front_112203af-975e-426d-b207-ca6a5b4db44d_280x.jpg?v=1510687961',
    price: '$115',
    model: 'Signature - 38MM',
    brand: 'Patek Philippe',
    quantity: 6,
    tier: 'Casual',
    style: 'Vintage',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/FB01-RGNU.Front_2_280x.jpg?v=1514397379',
    price: '$115',
    model: 'Avenue - 28MM',
    brand: 'Rolex',
    quantity: 7,
    tier: 'Daily',
    style: 'Edgy',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/FB01-TI.Front_3_280x.jpg?v=1514397026',
    price: '$115',
    model: 'Mod - 32MM',
    brand: 'Ulysse Nardin',
    quantity: 8,
    tier: 'Luxurious',
    style: 'Classic',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Stella.Front_280x.jpg?v=1510688570',
    price: '$150',
    model: 'Nova - 38MM',
    brand: 'IWC Schaffhausen',
    quantity: 9,
    tier: 'Casual',
    style: 'Modern',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/FB01-RGNU.Front_2_280x.jpg?v=1514397379',
    price: '$105',
    model: 'Mod - 32MM',
    brand: 'Vacheron Constantin',
    quantity: 10,
    tier: 'Daily',
    style: 'Vintage',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Sunset_Front.COLOR.EDIT_280x.jpg?v=1510688434',
    price: '$145',
    model: 'Nova - 38MM',
    brand: 'Blancpain',
    quantity: 35,
    tier: 'Luxurious',
    style: 'Edgy',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/Stella.Front_280x.jpg?v=1510688570',
    price: '$135',
    model: 'Gala - 32MM',
    brand: 'Audemars Piguet',
    quantity: 36,
    tier: 'Casual',
    style: 'Classic',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/W.MalibuBLVD.Front_280x.jpg?v=1510688365',
    price: '$125',
    model: 'Boulevard - 38MM',
    brand: 'Patek Philippe',
    quantity: 37,
    tier: 'Daily',
    style: 'Modern',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/FB01-RGNU.Front_2_280x.jpg?v=1514397379',
    price: '$145',
    model: 'Nova - 38MM',
    brand: 'Rolex',
    quantity: 38,
    tier: 'Luxurious',
    style: 'Vintage',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image:
      '//cdn.shopify.com/s/files/1/0377/2037/products/W.MiniBlvd.Lexington.Front_280x.jpg?v=1510688981',
    price: '$125',
    model: 'Avenue - 28MM',
    brand: 'Ulysse Nardin',
    quantity: 39,
    tier: 'Casual',
    style: 'Edgy',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    price: '$125',
    model: 'Boulevard - 38MM',
    brand: 'IWC Schaffhausen',
    quantity: 40,
    tier: 'Daily',
    style: 'Classic',
    gender: 'Ladies',
    sellerId: 1
  },
  {
    image: 'http://www.pkicon.com/icons/31929/Clock-256.png',
    price: '$160',
    model: 'Boulevard - 38MM',
    brand: 'Vacheron Constantin',
    quantity: 41,
    tier: 'Luxurious',
    style: 'Modern',
    gender: 'Ladies',
    sellerId: 1
  }
];

module.exports = watchData;
