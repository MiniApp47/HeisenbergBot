// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#2c2c2e');
    tg.setBackgroundColor('#1c1c1d');

    // --- CONFIGURATION DES LIENS DE CONTACT ---
    const contactLinks = [
        {
            name: 'SNAPCHAT 👻',
            url: 'https://www.snapchat.com/cerclesecret',
            id: 'snapchat',
            className: 'snapchat', // Il faudra peut-être ajouter ce CSS (Jaune)
            text: "SNAPCHAT 👻"
        },
        {
            name: 'SIGNAL 📲',
            url: 'https://signal.me/#eu/frankybaby.50',
            id: 'signal',
            className: 'signal', // Il faudra peut-être ajouter ce CSS (Jaune)
            text: "SIGNAL 📲"
        },
        {
            name: 'WHATSAPP 📞',
            url: 'https://wa.me/33745728635',
            id: 'whatsapp',
            className: 'whatsapp', // Il faudra peut-être ajouter ce CSS (Jaune)
            text: "WHATSAPP 📞"
        },
        {
            name: 'TÉLÉGRAM 💙',
            url: 'https://t.me/frankybaby50',
            id: 'telegram-main',
            className: 'telegram', // Garde le style Bleu Telegram
            text: "TÉLÉGRAM 💙"
        },
        {
            name: 'CANAL TÉLÉ 💙',
            url: 'https://t.me/+rl7MYRyOPr04Y2U0',
            id: 'telegram-secours',
            className: 'secours',
            text: "CANAL TÉLÉ 💙"
        },
        {
            name: 'POTATO 🥔',
            url: 'https://dympt.org/RetourP420',
            id: 'potato-feedback',
            className: 'potato', // Style standard ou tu peux remettre 'potato-main'
            text: "POTATO 🥔"
        },
        {
            name: 'CANAL POTATO 🥔',
            url: 'https://tutuduanyu.org/joinchat/sHotQAx0zBf6c9wNPkfQ2A',
            id: 'potato-main',
            className: 'potato', // Garde le style Marron/Doré Potato
            text: "CANAL POTATO 🥔"
        },
        {
            name: 'INSTAGRAM 📸',
            url: 'https://www.instagram.com/leheisenbergest?igsh=MWkxcHN1bjd1bDE1cQ%3D%3D&utm_source=qr',
            id: 'intsagram',
            className: 'insta', 
            text: "INSTAGRAM 📸"
        }
    ];

    // --- DONNÉES DE L'APPLICATION (NOUVELLE STRUCTURE) ---
    const appData = [
        // --- Catégorie 1: Weed Spain 🇪🇸 ---
        {
            id: 'Weed 🌿',
            name: 'Weed 🌿',
            farm: '',
            type: 'Weed 🌿',
            quality: ' Weed 🌿 ',
            image: 'CategWeed.png', // Image de la catégorie

            // La catégorie contient maintenant des "farms"
            farms: [
                {
                    products: [
                        {
                            id: '🍋 Lemon cherry 🍒',
                            flag: '🇪🇸',
                            name: '🍋 Lemon cherry 🍒',
                            farm: '🏠 NoFarm',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductCherry.jpg',
                            video: '',
                            description: 'Cette variété passionnante est un triple croisement entre Sunset Sherbet, Girl Scout Cookies et un spécimen inconnu qui a clairement touché le jackpot génétique. Avec jusqu’à 33 % de THC, les fleurs produisent des résultats presque immédiats et ses effets sont merveilleusement enivrants et relaxants.',
                            tarifs: [
                                { weight: '1G', price: 20.00 },
                                { weight: '3,5G', price: 40.00 },
                                { weight: '7G', price: 80.00 },
                                { weight: '10G', price: 120.00 },
                                { weight: '25G', price: 240.00 },
                                { weight: '50G', price: 400.00 },
                                { weight: '100G', price: 750.00 },


                            ]
                        },
                        {
                            id: 'Amnesia haze hipro 🌟',
                              flag: '🇪🇸',
                            name: 'Amnesia haze hipro 🌟',
                            farm: '🏠 NoFarm',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductHipro.jpg',
                            video: '',
                            description: 'Croisement entre Amnesia et Haze, Amnesia Haze est une variété haut de gamme. Elle produit des rendements impressionnants en intérieur comme en extérieur, elle dégage des odeurs et des goûts riches et elle produit une euphorie psychédélique unique que vous aurez bien du mal à trouver dans une autre variété.',
                            tarifs: [
                                { weight: '1G', price: 20.00 },
                                { weight: '3,5G', price: 40.00 },
                                { weight: '7G', price: 80.00 },
                                { weight: '10G', price: 120.00 },
                                { weight: '25G', price: 240.00 },
                                { weight: '50G', price: 400.00 },
                                { weight: '100G', price: 750.00 },
                            ]
                        },
                        {
                            id: '🌴 Tropicana Banana 🍌',
                              flag: '🇪🇸',
                            name: '🌴 Tropicana Banana 🍌',
                            farm: 'Calimàn 🇯🇲',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductTropicana.jpg',
                            video: '',
                            description: 'Lorsqu’elle est fumée, la Banana Kush se distingue d’autres variétés Kush par sa fraîcheur. Avec ses effets, principalement indica, s’ajoute une belle touche de sativa qui rehaussent de puissants effets corporels.',
                            tarifs: [
                                { weight: '1G', price: 20.00 },
                                { weight: '3,5G', price: 40.00 },
                                { weight: '7G', price: 80.00 },
                                { weight: '10G', price: 120.00 },
                                { weight: '25G', price: 240.00 },
                                { weight: '50G', price: 400.00 },
                                { weight: '100G', price: 750.00 },
                            ]
                        }
                    ]
                }

            ]
        },

       
        // --- Catégorie 3: Cali usa 🇺🇸 ---
        {
            id: 'Cali usa 🇺🇸',
            name: ' Cali usa 🇺🇸',
            farm: '',
            type: 'Cali',
            quality: ' Cali usa 🇺🇸',
            image: 'CategCaliU.png', // Image de la catégorie

            farms: [
                {
                    /*      id: 'WIZARDTREES', // J'ai inventé un ID de farm
                         name: 'Wizard trees 🔮',
                         image: 'Wizard4.png', // Mets une image de farm si tu veux
                         badgeText: '2 produits', */
                    products: [
                        {
                            id: 'Lemonade',
                            flag: '🇺🇸',
                            name: '🍓 Strawberry Limonade 🍸',
                            farm: '🏠 NoFarm', 
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductLemonade.png',
                            video: 'VideoLimonade.mp4',
                            description: 'La Strawberry Lemonade dévoile un profil terpénique ultra fruité qui rend chaque taffe mémorable. Dès la première combustion, on est saisi par un mélange sucré de fraise mûre et de citron acidulé.',
                            tarifs: [
                                { weight: '2g', price: 50.00 },
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 150.00 },
                                { weight: '25g', price: 300.00 },
                            ]
                        },
                        {
                            id: 'Black mamba ⚡️⚡️',
                            flag: '🇺🇸',
                            name: 'Black mamba ⚡️⚡️',
                            farm: '🏠 NoFarm',
                            type: 'Weed',
                            image: 'ProductMamba.png',
                            video: 'VideoMamba.mp4',
                            description: 'C\'est une grande productrice qui possède un effet physique et cérébral à la fois. Elle est très appropriée pour la cultures en intérieur, avec des plantes uniformes et de grandes fleurs principales; Les bourgeons sont nombreux et très resserrés les un des autres, pour former des fleurs parfumées, avec de fortes nuances fruitées. La Black Mamba est une plante également très intéressante pour l’extérieur, où elle atteindra de grandes dimensions , tout en conservant une floraison rapide et une grande résistance aux moisissures.',
                            tarifs: [
                                { weight: '2G', price: 60.00 },
                                { weight: '5G', price: 100.00 },
                                { weight: '10G', price: 180.00 },
                                { weight: '25G', price: 400.00 },
                                { weight: '50G', price: 750.00 },
                            ]
                        },
                        {
                            id: 'IceCream',
                            flag: '🇺🇸',
                            name: 'Ice Cream Cookies 🍪',
                            farm: '🏠 NoFarm',
                            type: 'Weed',
                            image: 'ProductIceCream.png',
                            video: 'VideoIceCream.mp4',
                            description: 'Avec sa fumée puissante et délicieuse, cette Ice cream cali cultivée en intérieur saura faire fondre tous vos soucis',
                            tarifs: [
                                { weight: '2G', price: 60.00 },
                                { weight: '5G', price: 90.00 },
                                { weight: '10G', price: 180.00 },
                                { weight: '25G', price: 360.00 },
                            ]
                        }
                      
                    ]
                }
            ]
        },
        
        // --- Catégorie 4: Cali Canada 🇨🇦 ---
   /*      {
            id: 'Cali Canada 🇨🇦',
            name: ' Cali Canada 🇨🇦',
            farm: '',
            type: 'Cali',
            quality: ' Cali Canada 🇨🇦',
            image: 'CategCaliC.png', // Image de la catégorie

            farms: [
                {
                    /*      id: 'WIZARDTREES', // J'ai inventé un ID de farm
                         name: 'Wizard trees 🔮',
                         image: 'Wizard4.png', // Mets une image de farm si tu veux
                         badgeText: '2 produits', 
                    products: [
                        /* {
                            id: 'Turbo 🐌',
                            flag: '🇨🇦',
                            name: 'Turbo 🐌',
                            farm: '🏠 No Farm',
                            promoEligible: true,
                            type: 'Cali',
                            image: 'ProductTurbo.png',
                            video: 'VideoTurbo.mp4',
                            description: '',
                            tarifs: [
                                { weight: '5G', price: 50.00 },
                                { weight: '10G', price: 100.00 },
                                { weight: '25G', price: 240.00 },
                                { weight: '50G', price: 400.00 },
                            ]
                        } 
                    ]
                } 
            ]
        }, */
        // --- Catégorie 5: Snow cali ❄️ ---
        {
            id: 'Snow cali ❄️',
            name: 'Snow cali ❄️',
            farm: '',
            type: 'Cali',
            quality: 'Snow cali ❄️',
            image: 'CategSnow.png', // Image de la catégorie

            farms: [
                {
                    /*      id: 'WIZARDTREES', // J'ai inventé un ID de farm
                         name: 'Wizard trees 🔮',
                         image: 'Wizard4.png', // Mets une image de farm si tu veux
                         badgeText: '2 produits', */
                    products: [
                        {
                            id: '🍋/🥭/🥤/🍌/🍓',
                            //flag: '🇺🇸',
                            name: '🍋/🥭/🥤/🍌/🍓',
                            farm: '🏠 No Farm',
                            promoEligible: true,
                            type: 'Weed',
                            image: 'ProductSnow.png',
                            video: 'VideoSnow.mp4',
                            description: '',
                            tarifs: [
                                { weight: '1G', price: 30.00 },
                                { weight: '2G', price: 50.00 },
                                { weight: '5G', price: 100.00 },
                                { weight: '10G', price: 180.00 },
                                { weight: '25G', price: 400.00 },
                            ]
                        }
                    ]
                }
            ]
        },
        // --- Catégorie 6: Frozen 🧊 ---
        {
            id: 'Exctraction ☢️',
            name: 'Exctraction ☢️',
            farm: '',
            type: 'Exctraction',
            quality: 'Exctraction ☢️',
            image: 'CategExctra.png', // Image de la catégorie

            farms: [
                {
                    /*      id: 'WIZARDTREES', // J'ai inventé un ID de farm
                         name: 'Wizard trees 🔮',
                         image: 'Wizard4.png', // Mets une image de farm si tu veux
                         badgeText: '2 produits', */
                    products: [
                        {
                            id: 'Mix',
                            //flag: '🇺🇸',
                            name: '🧬 Mix cali usa 🧬',
                            farm: '🥼 Home made',
                            promoEligible: true,
                            type: 'Exctraction',
                            image: 'ProductMix.png',
                            video: 'VideoMix.mp4',
                            description: 'Beuh Hollandaise craquante et poleneuse sans super fort a super bon goût à la bouche 🤪',
                            tarifs: [
                                { weight: '1G', price: 50.00 },
                                { weight: '2G', price: 90.00 },
                                { weight: '3G', price: 120.00 },
                                { weight: '5G', price: 200.00 },
                                { weight: '10G', price: 350.00 },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'HASH 🇲🇦',
            name: ' HASH 🇲🇦',
            farm: '',
            type: 'HASH 🇲🇦',
            quality: 'HASH 🇲🇦',
            image: 'CategHash.png', // Image de la catégorie

            farms: [
                {
                    /*      id: 'WIZARDTREES', // J'ai inventé un ID de farm
                         name: 'Wizard trees 🔮',
                         image: 'Wizard4.png', // Mets une image de farm si tu veux
                         badgeText: '2 produits', */
                    products: [
                                {
                                    id: 'HIGH OCTANE 🚨🚨',
                                    flag: '🇲🇦',
                                    name: 'HIGH OCTANE 🚨🚨',
                                    farm: 'PRIVATE ⭕', 
                                    promoEligible: true,
                                    type: 'HASH',
                                    image: 'ProductOct.png',
                                    video: 'VideoOct.mp4',
                                    description: '',   
                                     tarifs: [
                                        { weight: '5g', price: 50.00 },
                                        { weight: '10g', price: 90.00 },
                                        { weight: '25g', price: 180.00 },
                                        { weight: '50g', price: 330.00 },
                                        { weight: '100g', price: 550.00 },
                                    ]
                                },
                                {
                                    id: 'Sour diesel ⛽',
                                    flag: '🇲🇦',
                                    name: 'Sour diesel ⛽',
                                    farm: '🏠 NoFarm', 
                                    promoEligible: true,
                                    type: 'HASH',
                                    image: 'ProductSour.png',
                                    video: 'VideoSour.mp4',
                                    description: 'Texture mousseuse ultra-friable et aérée. Profil terpénique piquant et gazeux (diesel/agrumes) caractéristique de la lignée Sour. Frappe rapide avec un effet cérébral stimulant et énergisant. Le classique pour la journée.',   
                                     tarifs: [
                                        { weight: '5g', price: 40.00 },
                                        { weight: '10g', price: 80.00 },
                                        { weight: '25g', price: 150.00 },
                                        { weight: '50g', price: 280.00 },
                                        { weight: '100g', price: 450.00 },
                                    ]
                                },
                                {
                                    id: '🧸 Mascot boy',
                                    flag: '🇲🇦',
                                    name: '🧸 Mascot boy',
                                    farm: '🏠 NoFarm', 
                                    promoEligible: true,
                                    type: 'HASH',
                                    image: 'ProductBoy.png',
                                    video: 'VideoBoy.mp4',
                                    description: 'Le standard de fiabilité marocain. Un mousseux classique, légèrement gras à cœur mais qui s\'effrite sans effort. Arômes terreux et épicés avec une note de fond sucrée. Effet corporel lourd et relaxant, idéal pour décompresser.',
                                    tarifs: [
                                        { weight: '5g', price: 40.00 },
                                        { weight: '10g', price: 80.00 },
                                        { weight: '25g', price: 150.00 },
                                        { weight: '50g', price: 280.00 },
                                        { weight: '100g', price: 450.00 },
                                    ]
                                },
                                {
                                    id: '🍊 Orange ice ⛸',
                                    flag: '🇲🇦',
                                    name: '🍊 Orange ice ⛸',
                                    farm: '🏠 NoFarm', 
                                    promoEligible: true,
                                    type: 'HASH',
                                    image: 'ProductOrange.png',
                                    video: 'VideoOrange.mp4',
                                    description: 'Hash premium d\'inspiration US. Frappe terpénique massive dominée par l\'écorce d\'orange douce avec une finition rafraîchissante. Texture pollen/mousseux de haute pureté qui fond sous la chaleur des doigts. Effet hybride équilibré, clair et euphorique.',
                                    tarifs: [
                                        { weight: '5g', price: 50.00 },
                                        { weight: '10g', price: 100.00 },
                                        { weight: '25g', price: 200.00 },
                                        { weight: '50g', price: 350.00 },
                                        { weight: '100g', price: 500.00 },
                                    ]
                                },
                    ]
                }
            ]
        },
        // --- Catégorie 6: Frozen 🧊 ---
        {
            id: 'Frozen 🧊',
            name: 'Frozen 🧊',
            farm: '',
            type: 'Frozen',
            quality: 'Frozen 🧊',
            image: 'CategFrozen.png', // Image de la catégorie

            farms: [
                {
                    /*      id: 'WIZARDTREES', // J'ai inventé un ID de farm
                         name: 'Wizard trees 🔮',
                         image: 'Wizard4.png', // Mets une image de farm si tu veux
                         badgeText: '2 produits', */
                    products: [
                        {
                            id: 'Marrocan Peach 🍑',
                            //flag: '🇺🇸',
                            name: 'Marrocan Peach 🍑',
                            farm: '🐪 SPF X General Genetic 💂',
                            promoEligible: true,
                            type: 'Frozen',
                            image: 'ProductMp.png',
                            video: 'VideoMp.mov',
                            description: 'Moroccan Peaches offers a unique experience, starting with its enticing aroma. The sweet, peachy fragrance is complemented by bright citrus notes and a grounding earthiness.',
                            tarifs: [
                                { weight: '5G', price: 100.00 },
                                { weight: '10G', price: 190.00 },
                                { weight: '25G', price: 450.00 },
                                { weight: '50G', price: 850.00 },
                                { weight: '100G', price: 1600.00 },
                            ]
                        },
                        {
                            id: 'Mandarin OG 🍊',
                            //flag: '🇺🇸',
                            name: 'Mandarin OG 🍊',
                            farm: 'STREET FARM 👨🏻‍🔬',
                            promoEligible: true,
                            type: 'Frozen',
                            image: 'ProductMandarine.png',
                            video: 'VideoMandarine.mp4',
                            description: 'Les variétés de cannabis à saveur orange/mandarine se distinguent par leur profil d\'agrumes , parfois agrémenté de notes sucrées , acidulées et juteuses qui ravissent cultivateurs et consommateurs. Cette catégorie regroupe des génétiques riches en limonène et autres terpènes, offrant des arômes intenses et des effets vibrants. Vous y trouverez de tout, de la Tangie au Mimosa en passant par la Mandarin Cookies.',
                            tarifs: [
                                { weight: '5G', price: 75.00 },
                                { weight: '10G', price: 150.00 },
                                { weight: '25G', price: 320.00 },
                                { weight: '50G', price: 600.00 },
                                { weight: '100G', price: 1000.00 },
                            ]
                        },
                        {
                            id: 'Grape gas ⛽️',
                            //flag: '🇺🇸',
                            name: 'Grape gas ⛽️',
                            farm: 'LASOURCE X WARZ OF TERPZ 👨🏻‍🔬',
                            promoEligible: true,
                            type: 'Frozen',
                            image: 'ProductGrape.png',
                            video: 'VideoGrape.mp4',
                            description: 'Les effets de la Grape Gas sont tout aussi impressionnants. En tant qu\'hybride équilibré, elle t\'offre le meilleur des deux mondes : une euphorie cérébrale initiale qui stimule la créativité et l\'humeur, suivie d\'une relaxation corporelle profonde et apaisante.',
                            tarifs: [
                                { weight: '2G', price: 40.00 },
                                { weight: '5G', price: 80.00 },
                                { weight: '10G', price: 150.00 },
                                { weight: '25G', price: 320.00 },
                                { weight: '50G', price: 600.00 },
                                { weight: '100G', price: 1100.00 },
                            ]
                        },
                        {
                            id: 'Tropical 🌴 cookies 🍪',
                            //flag: '🇺🇸',
                            name: 'Tropical 🌴 cookies 🍪',
                            farm: 'LASOURCE X WARZ OF TERPZ 👨🏻‍🔬',
                            promoEligible: true,
                            type: 'Frozen',
                            image: 'ProductTrop.png',
                            video: 'VideoTrop.mp4',
                            description: 'La variété Tropicana cookie se caractérise par son goût acidulé et citrique sur un fond crémeux et sucré de Girl Scout Cookies, un délice pour les amateurs d\'agrumes et d\'arômes sucrés.',
                            tarifs: [
                                { weight: '2G', price: 40.00 },
                                { weight: '5G', price: 80.00 },
                                { weight: '10G', price: 150.00 },
                                { weight: '25G', price: 320.00 },
                                { weight: '50G', price: 600.00 },
                                { weight: '100G', price: 1100.00 },
                            ]
                        },
                        {
                            id: 'Passion ❤️‍🔥 fruit 🍈',
                            //flag: '🇺🇸',
                            name: 'Passion ❤️‍🔥 fruit 🍈',
                            farm: 'LASOURCE X WARZ OF TERPZ 👨🏻‍🔬',
                            promoEligible: true,
                            type: 'Frozen',
                            image: 'ProductPass.png',
                            video: 'VideoPass.mp4',
                            description: 'La Passion Fruit est une variété hybride indica/sativa qui a été créée en croisant un clone de Sweet Pink Grapefruit avec une Orange Bud.',
                            tarifs: [
                                { weight: '2G', price: 40.00 },
                                { weight: '5G', price: 80.00 },
                                { weight: '10G', price: 150.00 },
                                { weight: '25G', price: 320.00 },
                                { weight: '50G', price: 600.00 },
                                { weight: '100G', price: 1100.00 },
                            ]
                        },
                        {
                            id: 'Mojito strawberry 🍹',
                            //flag: '🇺🇸',
                            name: 'Mojito strawberry 🍹',
                            farm: '🪖 Warz of Terpz 🪖',
                            promoEligible: true,
                            type: 'Fresh Frozen',
                            image: 'ProductMojito.png',
                            video: 'VideoMojito.mp4',
                            description: 'La Mojito, également connue sous le nom de "Mojito #1", est une variété de marijuana hybride à dominante sativa fabriquée en croisant le sentier de la fleur d\'oranger avec le Limégérien',
                            tarifs: [
                                { weight: '10G', price: 150.00 },
                                { weight: '20G', price: 280.00 },
                                { weight: '30G', price: 420.00 },
                                { weight: '40G', price: 550.00 },
                                { weight: '50G', price: 650.00 },
                                { weight: '100G', price: 1200.00 },
                            ]
                        },
                        {
                            id: 'Chocolop 🐥',
                            //flag: '🇺🇸',
                            name: 'Chocolop 🐥',
                            farm: '🪖 Warz of Terpz 🪖',
                            promoEligible: true,
                            type: 'Fresh Frozen',
                            image: 'ProductChoco.png',
                            video: 'VideoChoco.mov',
                            description: 'Amoureux de sativa aux envies gourmandes, préparez-vous à sourire. Chocolope est un hybride presque pur de sativa (Chocolate Thai x Cannalope Haze) au parfum sucré de chocolat et aux puissants effets psychoactifs, rappelant le bon vieux temps de la Chocolate Thai des années 80. Chocolope',
                            tarifs: [
                                { weight: '10G', price: 150.00 },
                                { weight: '20G', price: 280.00 },
                                { weight: '30G', price: 420.00 },
                                { weight: '40G', price: 550.00 },
                                { weight: '50G', price: 650.00 },
                                { weight: '100G', price: 1200.00 },
                            ]
                        }
                    /*     {
                            id: 'Red Bull 🐂',
                            //flag: '🇺🇸',
                            name: 'Red Bull 🐂',
                            farm: '🏠 No Farm',
                            promoEligible: true,
                            type: 'Frozen',
                            image: 'ProductRedbull.png',
                            video: 'VideoRedbull.mp4',
                            description: '',
                            tarifs: [
                                { weight: '10G', price: 180.00 },
                                { weight: '20G', price: 350.00 },
                                { weight: '30G', price: 520.00 },
                                { weight: '40G', price: 700.00 },
                                { weight: '50G', price: 850.00 },
                            ]
                        } */
                    ]
                }
            ]
        },
        // --- Catégorie 7: Fresh Frozen Plasma 🔮 ---

      /*   {
            id: 'Fresh Frozen Plasma 🔮',
            name: 'Fresh Frozen Plasma 🔮',
            farm: '',
            type: 'Frozen',
            quality: 'Fresh Frozen Plasma 🔮',
            image: 'CategPlasma.png', // Image de la catégorie

            farms: [
                {
                 
                    products: [
                      
                    ]
                }
            ]
        }, */
        // --- Catégorie 8: Double static 💥 ---

        {
            id: 'Double static 💥',
            name: 'Double static 💥',
            farm: '',
            type: 'Static',
            quality: 'Double static 💥',
            image: 'CategDoubleStatic.png', // Image de la catégorie

            farms: [
                {
                    /*      id: 'WIZARDTREES', // J'ai inventé un ID de farm
                         name: 'Wizard trees 🔮',
                         image: 'Wizard4.png', // Mets une image de farm si tu veux
                         badgeText: '2 produits', */
                    products: [
                        {
                            id: 'MENTAL RAINBOW 🌈',
                            //flag: '🇺🇸',
                            name: 'MENTAL RAINBOW 🌈',
                            farm: '🐪 SPF X General Genetic 💂',
                            promoEligible: true,
                            type: 'DoubleStatic',
                            image: 'ProductMR.png',
                            video: 'VideoMR.mp4',
                            description: 'La Mental Rainbow F1 Fast Version® est une plante qui se distingue par son profil terpénique fruité et épicé, composé de notes intenses de mangue, de papaye et d\'agrumes, parachevé par des touches terreuses, fumées et épicées.\n\n Dispo uniquement Maroc : Tanger / Rabat / Casablanca / Marrakech ',
                            tarifs: [
                                { weight: '50g', price: 600.00 },
                                { weight: '100G', price: 1000.00 },
                            ]
                        },
                        {
                            id: 'MENTAL RAINBOW SHERBET ꪜ2️⃣',
                            //flag: '🇺🇸',
                            name: 'MENTAL RAINBOW 🌈 SHERBET ꪜ2️⃣',
                            farm: '🐪 SPF X General Genetic 💂',
                            promoEligible: true,
                            type: 'DoubleStatic',
                            image: 'ProductMR2.png',
                            video: 'VideoMR2.mp4',
                            description: 'Rainbow Sherbet est une variété hybride qui allie les meilleures qualités de deux variétés parentes légendaires : Champagne et Blackberry. Ce mélange crée un équilibre harmonieux d\'effets et un profil aromatique riche et complexe qui distingue Rainbow Sherbet des autres variétés \n\n Dispo uniquement Maroc : Tanger / Rabat / Casablanca / Marrakech ',
                            tarifs: [
                                { weight: '2G', price: 100.00 },
                                { weight: '5G', price: 150.00 },
                                { weight: '10G', price: 250.00 },
                                { weight: '20G', price: 500.00 },
                                { weight: '30G', price: 750.00 },
                                { weight: '40G', price: 1000.00 },
                                { weight: '50G', price: 1100.00 },
                                { weight: '100G', price: 2000.00 }
                            ]
                        },
                        {
                            id: 'Mix_SPF_General',
                            name: 'Mix 🧬',
                            farm: '🐪 SPF X General Genetic 💂',
                            promoEligible: true,
                            type: 'Static', // À adapter
                            image: 'ProductMix1.png', // Ton image globale
                            video: 'VideoMix.mov',
                            description: 'PRODUITS DEXCEPTIONS AVEC DE LA PASSION ❤️‍🔥 DES VRAIES GRAINES DE VRAIES PASSIONEES CHAQUE VARIÉTÉS EST UNE EXPLOSION CULINAIRE .',
                            strains: [
                                'Marrocan Peach 🍑', 
                                'Mental rainbow 🌈', 
                                'Mental 🧠 rainbow 🌈 sherbet v2', 
                                'Honey 🍯 banana 🍌'
                            ],
                            badgePromo: '10g 250€<br>50g 1100€<br>100g 2000€',
                            tarifs: [
                                { weight: '10G', price: 250.00 },
                                { weight: '20G', price: 500.00 },
                                { weight: '30G', price: 750.00 },
                                { weight: '40G', price: 1000.00 },
                                { weight: '50G', price: 1100.00 },
                                { weight: '100G', price: 2000.00 }
                            ]
                        },
                        {
                            id: 'Piniacolada 🍍',
                            //flag: '🇺🇸',
                            name: 'Piniacolada 🍍',
                            farm: '🪖 Warz of Terpz 🪖',
                            promoEligible: true,
                            type: 'DoubleStatic',
                            image: 'ProductPinia.png',
                            video: 'VideoPinia.mov',
                            description: 'Avec ses saveurs gourmandes et tropicales, la Pina Colada séduit par son profil fruité et doux',
                            tarifs: [
                                { weight: '10G', price: 180.00 },
                                { weight: '25G', price: 400.00 },
                                { weight: '50g', price: 750.00 },
                                { weight: '100G', price: 1300.00 },
                            ]
                        }
                    ]
                }
            ]
        },
        // --- Catégorie 9: Static ⚡ ---

        {
            id: 'Static ⚡',
            name: 'Static ⚡',
            farm: '',
            type: 'Static',
            quality: 'Static ⚡',
            image: 'CategStatic.png', // Image de la catégorie

            farms: [
                {
                    /*      id: 'WIZARDTREES', // J'ai inventé un ID de farm
                         name: 'Wizard trees 🔮',
                         image: 'Wizard4.png', // Mets une image de farm si tu veux
                         badgeText: '2 produits', */
                    products: [
                      
                       /*  {
                            id: 'Tidirhine 🇲🇦',
                            //flag: '🇺🇸',
                            name: 'Tidirhine 🇲🇦',
                            farm: '🏠 No Farm',
                            promoEligible: true,
                            type: 'Static',
                            image: 'ProductTidi.jpg',
                            video: '',
                            description: 'Le djebel Tidirhine, ou Adrar Tidighine (en tasenhajit : Adrar n Tidighin), est le point culminant du Rif, dans le Nord du Maroc, avec 2 456 m d\'altitude. Il est situé au cœur du territoire des Senhaja Sraïr, une confédération amazighe de la région.',
                            tarifs: [
                                { weight: '2G', price: 40.00 },
                                { weight: '5G', price: 80.00 },
                                { weight: '10G', price: 130.00 },
                                { weight: '25G', price: 250.00 },
                            ]
                        } */
                    ]
                }
            ]
        },
       /*   {
            id: 'Filtre x3 🍦',
            name: 'Filtre x3 🍦',
            farm: '',
            type: 'Filtre x3',
            quality: 'Filtre x3 🍦',
            image: 'CategFiltre.png', // Image de la catégorie

            farms: [
                {
                        id: 'WIZARDTREES', // J'ai inventé un ID de farm
                         name: 'Wizard trees 🔮',
                         image: 'Wizard4.png', // Mets une image de farm si tu veux
                         badgeText: '2 produits', 
                    products: [
                         {
                            id: 'Fruit Cake 🍰',
                            //flag: '🇺🇸',
                            name: 'Willy Wonka 🍰',
                            farm: 'Willy Wonka 🧙🏼‍♂️',
                            promoEligible: true,
                            type: 'Filtrex3',
                            image: 'ProductCake.png',
                            video: 'VideoCake.mp4',
                            description: 'La Fruit Cake est une autre variété parfaite pour les extraits avec un haut rendement, idéale pour la production d\'huile de cannabis, de shatter, de BHO ou de tout autre concentré.',
                            tarifs: [
                                { weight: '2G', price: 50.00 },
                                { weight: '5G', price: 80.00 },
                                { weight: '10G', price: 130.00 },
                                { weight: '25G', price: 260.00 },
                            ]
                        }, 
                         {
                            id: 'Cherry Pie 🍒',
                            //flag: '🇺🇸',
                            name: 'Cherry Pie 🍒',
                            farm: 'Willy Wonka 🧙🏼‍♂️',
                            promoEligible: true,
                            type: 'Filtrex3',
                            image: 'ProductPie.png',
                            video: 'VideoPie.mp4',
                            description: 'Cette variété peut se reconnaître par son parfum-signature, mélange de baies, de tarte à la cerise et des relents de terre. La Cherry Pie est puissante mais pas trop',
                            tarifs: [
                                { weight: '2G', price: 50.00 },
                                { weight: '5G', price: 80.00 },
                                { weight: '10G', price: 130.00 },
                                { weight: '25G', price: 260.00 },
                            ]
                        },
                        {
                            id: 'Grappe Pie 🍇',
                            //flag: '🇺🇸',
                            name: 'Grappe Pie 🍇',
                            farm: 'Willy Wonka 🧙🏼‍♂️',
                            promoEligible: true,
                            type: 'Filtrex3',
                            image: 'ProductPieG.png',
                            video: 'VideoPieG.mp4',
                            description: 'Grape Pie : intense expérience fruitée \n  Avec une bonne teneur en THC de 22 %, Grape Pie offre une expérience prononcée, parfaite pour relaxer le corps entier et améliorer l\'humeur',
                            tarifs: [
                                { weight: '2G', price: 50.00 },
                                { weight: '5G', price: 80.00 },
                                { weight: '10G', price: 130.00 },
                                { weight: '25G', price: 260.00 },
                            ]
                        }, */
                      /*   {
                            id: 'Bubble gum 🫧',
                            //flag: '🇺🇸',
                            name: 'Bubble gum 🫧',
                            farm: '🏠 No Farm',
                            promoEligible: true,
                            type: 'Filtrex3',
                            image: 'ProductBubble.png',
                            video: 'VideoBubble.mp4',
                            description: 'Filtre 73u \n Bubble Gum est un hybride à dominante sativa bien équilibré constitué d\'une génétique à 60 pour cent sativa et à 40 pour cent indica.',
                            tarifs: [
                                { weight: '2G', price: 30.00 },
                                { weight: '5G', price: 40.00 },
                                { weight: '10G', price: 80.00 },
                                { weight: '25G', price: 170.00 },
                            ]
                        }, 
                        {
                            id: 'Ice Cream 🍨',
                            //flag: '🇺🇸',
                            name: 'Ice Cream 🍨',
                            farm: '🏠 No Farm',
                            promoEligible: true,
                            type: 'Filtrex3',
                            image: 'ProductIce.png',
                            video: 'VideoIce.mp4',
                            description: 'Filtre 90u \n L\'Ice Cream présente un goût crémeux qui rappelle la glace. Sa saveur est souvent décrite comme une combinaison de vanille et de sucre, avec une touche de Skunk et de pin',
                            tarifs: [
                                { weight: '2G', price: 40.00 },
                                { weight: '5G', price: 80.00 },
                                { weight: '10G', price: 130.00 },
                                { weight: '25G', price: 250.00 },
                                { weight: '50G', price: 450.00 },
                                { weight: '100G', price: 800.00 },
                            ]
                        },
                        {
                            id: 'Cherry 🍒 Pie',
                            //flag: '🇺🇸',
                            name: 'Cherry 🍒 Pie',
                            farm: '🏠 No Farm',
                            promoEligible: true,
                            type: 'Filtrex3',
                            image: 'ProductPie2.png',
                            video: 'VideoPie2.mp4',
                            description: 'Cherry Pie est une variété de cannabis connue pour son arôme sucré et fruité, qui rappelle à de nombreuses personnes les cerises fraîches.',
                            tarifs: [
                                { weight: '2G', price: 20.00 },
                                { weight: '5G', price: 50.00 },
                                { weight: '10G', price: 100.00 },
                                { weight: '25G', price: 230.00 },
                                { weight: '50G', price: 450.00 },
                                { weight: '100G', price: 800.00 },

                            ]
                        },
                    ]
                }
            ]
        },*/
            // --- Catégorie 10: Bonbon 🍭 ---

            {
                id: 'Pre - rolls 🌯',
                name: 'Pre - rolls 🌯',
                farm: '',
                type: 'Pre - rolls',
                quality: 'Pre - rolls 🌯',
                image: 'CategPre.png', // Image de la catégorie
    
                farms: [
                    {
                        /*      id: 'WIZARDTREES', // J'ai inventé un ID de farm
                             name: 'Wizard trees 🔮',
                             image: 'Wizard4.png', // Mets une image de farm si tu veux
                             badgeText: '2 produits', */
                        products: [
                            {
                                id: 'Cali usa 🌵',
                                //flag: '🇺🇸',
                                name: 'Cali usa 🌵',
                                farm: '🏠 No Farm',
                                clickable: false,
                                promoEligible: true,
                                type: 'Pre-Rolls',
                                image: 'ProductPre.png',
                                video: '',
                                description: 'Rainbow multicolor',
                                tarifs: [
                                    { weight: '1', price: 20.00 },
                                ]
                            },
                            {
                                id: 'Amnesia 🌺',
                                //flag: '🇺🇸',
                                name: 'Amnesia 🌺',
                                farm: '🏠 No Farm',
                                clickable: false,
                                promoEligible: true,
                                type: 'Pre-Rolls',
                                image: 'ProductPre.png',
                                video: '',
                                description: 'Rainbow multicolor',
                                tarifs: [
                                    { weight: '1', price: 15.00 },
                                ]
                            },
                            {
                                id: 'Lemon cherry 🍒',
                                //flag: '🇺🇸',
                                name: 'Lemon cherry 🍒',
                                farm: '🏠 No Farm',
                                clickable: false,
                                promoEligible: true,
                                type: 'Pre-Rolls',
                                image: 'ProductPre.png',
                                video: '',
                                description: 'Rainbow multicolor',
                                tarifs: [
                                    { weight: '1', price: 15.00 },
                                ]
                            }
                        ]
                    }
                ]
            },
                // --- Catégorie 10: Bonbon 🍭 ---

        {
            id: 'Space cake 🎂',
            name: 'Space cake 🎂',
            farm: '',
            type: 'Space cake',
            quality: 'Space cake 🎂',
            image: 'CategSpace.png', // Image de la catégorie

            farms: [
                {
                    /*      id: 'WIZARDTREES', // J'ai inventé un ID de farm
                         name: 'Wizard trees 🔮',
                         image: 'Wizard4.png', // Mets une image de farm si tu veux
                         badgeText: '2 produits', */
                    products: [
                        {
                            id: 'Brownies chocolat 🍫',
                            //flag: '🇺🇸',
                            name: 'Brownies chocolat 🍫',
                            farm: '👨🏻‍🔬 Heis\'Cook 👨🏻‍🔬',
                            // clickable: false, 
                            promoEligible: true,
                            type: 'SpaceCake',
                            image: 'ProductSpaceCookie.png',
                            video: '',
                            description: 'Rainbow multicolor \n\n 🚨 A commander 24h a l\'avance 🚨',
                            tarifs: [
                                { weight: '1', price: 20.00 },
                            ]
                        },
                        {
                            id: 'Cookies 🍪 chocolat 🍫',
                            //flag: '🇺🇸',
                            name: 'Cookies 🍪 chocolat 🍫',
                            farm: '🏠 No Farm',
                            clickable: false, 
                            promoEligible: true,
                            type: 'SpaceCake',
                            image: 'ProductSpace.png',
                            video: '',
                            description: 'Rainbow multicolor',
                            tarifs: [
                                { weight: '1', price: 20.00 },
                            ]
                        }
                    ]
                }
            ]
        },
        // --- Catégorie 10: Bonbon 🍭 ---

        {
            id: 'Bonbon 🍭',
            name: 'Bonbon 🍭',
            farm: '',
            type: 'Bonbon',
            quality: 'Bonbon 🍭',
            image: 'CategBonbon.png', // Image de la catégorie

            farms: [
                {
                    /*      id: 'WIZARDTREES', // J'ai inventé un ID de farm
                         name: 'Wizard trees 🔮',
                         image: 'Wizard4.png', // Mets une image de farm si tu veux
                         badgeText: '2 produits', */
                    products: [
                        {
                            id: '6️⃣ 9️⃣',
                            //flag: '🇺🇸',
                            name: '6️⃣ 9️⃣',
                            farm: '🏠 No Farm',
                            promoEligible: true,
                            type: 'Bonbon',
                            image: 'Product69.png',
                            video: 'Video69.mp4',
                            description: 'Rainbow multicolor',
                            tarifs: [
                                { weight: '10', price: 70.00 },
                                { weight: '20', price: 120.00 },
                                { weight: '30', price: 170.00 },
                                { weight: '50', price: 250.00 },
                            ]
                        }
                    ]
                }
            ]
        },
        // --- Catégorie 11: Neige ⛄ ---

        {
            id: 'Neige ⛄',
            name: 'Neige ⛄',
            farm: '',
            type: 'Neige',
            quality: 'Neige ⛄',
            image: 'CategNeige.png', // Image de la catégorie

            farms: [
                {
                    /*      id: 'WIZARDTREES', // J'ai inventé un ID de farm
                         name: 'Wizard trees 🔮',
                         image: 'Wizard4.png', // Mets une image de farm si tu veux
                         badgeText: '2 produits', */
                    products: [
                        {
                            id: 'Pablo 🤠',
                            //flag: '🇺🇸',
                            name: 'Pablo 🤠',
                            farm: '🇨🇴',
                            promoEligible: true,
                            type: 'Neige',
                            image: 'ProductPablo.png',
                            video: 'VideoPablo.mp4',
                            description: '',
                            tarifs: [
                                { weight: '1G', price: 60.00 },
                                { weight: '2G', price: 110.00 },
                                { weight: '3G', price: 160.00 },
                                { weight: '5G', price: 250.00 },
                                { weight: '10G', price: 550.00 },
                                { weight: '20G', price: 1000.00 },
                            ]
                        },
                        {
                            id: 'Le Yakuza ㊙️',
                            //flag: '🇺🇸',
                            name: 'Le Yakuza ㊙️',
                            farm: '🇨🇴',
                            promoEligible: true,
                            type: 'Neige',
                            image: 'ProductYakuza.png',
                            video: 'VideoYakuza.mp4',
                            description: '',
                            tarifs: [
                                { weight: '1G', price: 70.00 },
                                { weight: '2G', price: 130.00 },
                                { weight: '3G', price: 200.00 },
                                { weight: '5G', price: 300.00 },
                                { weight: '10G', price: 550.00 },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'Envoi Espagne',
            name: 'Envoi Espagne 🇪🇦',
            farm: '',
            type: 'Envoi Espagne 🇪🇦',
            quality: 'Envoi Espagne 🇪🇦',
            image: 'CategEsp.png', // Image de la catégorie

            farms: [
                {
                    /*      id: 'WIZARDTREES', // J'ai inventé un ID de farm
                         name: 'Wizard trees 🔮',
                         image: 'Wizard4.png', // Mets une image de farm si tu veux
                         badgeText: '2 produits', */
                    products: [
                        {
                            id: 'Frozen 🥶 Grappe Gaz ⛽',
                            //flag: '🇺🇸',
                            name: 'Frozen 🥶 Grappe Gaz ⛽',
                            farm: '🏠 La Source x Warz of Terpz',
                            // clickable: false, 
                            promoEligible: true,
                            type: 'EnvoiEspagne',
                            image: 'ProductGaz.png',
                            video: 'VideoGaz.mp4',
                            description: 'Grape Gas est une variété à dominance sativa au profil aromatique distinctif. Elle libère des arômes sucrés de raisin mûr, rappelant un dessert fruité, enveloppés d\'une note marquée de diesel, un contraste net entre douceur et intensité \n\n Prepaiement requis : Crypto Usdt Virement CB paiement \n Envoi relais locker 48h avec suivi ',
                            tarifs: [
                                { weight: '25g', price: 350.00 },
                                { weight: '50g', price: 650.00 },
                                { weight: '100g', price: 1200.00 },
                            ]
                        },
                        {
                            id: 'Frozen 🥶 Passion Fruit 🍹',
                            //flag: '🇺🇸',
                            name: 'Frozen 🥶 Passion Fruit 🍹',
                            farm: '🏠 La Source x Warz of Terpz',
                            // clickable: false, 
                            promoEligible: true,
                            type: 'EnvoiEspagne',
                            image: 'ProductFruit.png',
                            video: 'VideoFruit.mp4',
                            description: 'Sucrée et super fruitée : La Passion Fruitz est bourrée de délicieux terpènes tropicaux et d\'agrumes \n\n Prepaiement requis : Crypto Usdt Virement CB paiement \n Envoi relais locker 48h avec suivi ',
                            tarifs: [
                                { weight: '25g', price: 350.00 },
                                { weight: '50g', price: 650.00 },
                                { weight: '100g', price: 1200.00 },
                            ]
                        },
                        {
                            id: 'Frozen 🥶 Tropical Cookies 🍪',
                            //flag: '🇺🇸',
                            name: 'Frozen 🥶 Tropical Cookies 🍪',
                            farm: '🏠 La Source x Warz of Terpz',
                            // clickable: false, 
                            promoEligible: true,
                            type: 'EnvoiEspagne',
                            image: 'ProductTropical.png',
                            video: 'VideoTropical.mp4',
                            description: 'Pineapple Skunk, le premier parent de Tropical Cookies, est une variété souvent attribuée à la Humboldt Seed Company. Cette Skunk audacieuse et fruitée a été sélectionnée à partir de Big Bud et de différentes autres variétés Skunk et elle est renommée pour son parfum sucré et ses saveurs prononcées. \n\n Prepaiement requis : Crypto Usdt Virement CB paiement \n Envoi relais locker 48h avec suivi ',
                            tarifs: [
                                { weight: '25g', price: 350.00 },
                                { weight: '50g', price: 650.00 },
                                { weight: '100g', price: 1200.00 },
                            ]
                        },
                        {
                            id: 'Frozen 🥶 Lava Cake 👨🏻‍🍳',
                            //flag: '🇺🇸',
                            name: 'Frozen 🥶 Lava Cake 👨🏻‍🍳',
                            farm: '🏠 La Source x Warz of Terpz',
                            // clickable: false, 
                            promoEligible: true,
                            type: 'EnvoiEspagne',
                            image: 'ProductLava.png',
                            video: 'VideoLava.mp4',
                            description: 'Pineapple Skunk, le premier parent de Tropical Cookies, est une variété souvent attribuée à la Humboldt Seed Company. Cette Skunk audacieuse et fruitée a été sélectionnée à partir de Big Bud et de différentes autres variétés Skunk et elle est renommée pour son parfum sucré et ses saveurs prononcées. \n\n Prepaiement requis : Crypto Usdt Virement CB paiement \n Envoi relais locker 48h avec suivi ',
                            tarifs: [
                                { weight: '25g', price: 350.00 },
                                { weight: '50g', price: 650.00 },
                                { weight: '100g', price: 1200.00 },
                            ]
                        }/* ,
                        {
                            id: 'Cookies 🍪 chocolat 🍫',
                            //flag: '🇺🇸',
                            name: 'Cookies 🍪 chocolat 🍫',
                            farm: '🏠 No Farm',
                            clickable: false, 
                            promoEligible: true,
                            type: 'SpaceCake',
                            image: 'ProductSpace.png',
                            video: '',
                            description: 'Rainbow multicolor',
                            tarifs: [
                                { weight: '1', price: 20.00 },
                            ]
                        } */
                    ]
                }
            ]
        },
         {
            id: 'Meet up Maroc',
            name: 'Meet up Maroc 🇲🇦',
            farm: '',
            type: 'Meet up Maroc 🇲🇦',
            quality: 'Meet up Maroc 🇲🇦',
            image: 'CategMeetMaroc.png', // Image de la catégorie

            farms: [
                {
                    /*      id: 'WIZARDTREES', // J'ai inventé un ID de farm
                         name: 'Wizard trees 🔮',
                         image: 'Wizard4.png', // Mets une image de farm si tu veux
                         badgeText: '2 produits', */
                    products: [
                        {
                            id: 'HONEY 🍯 BANANA 🍌',
                            //flag: '🇺🇸',
                            name: 'HONEY 🍯 BANANA 🍌',
                            farm: '🐪 SPF X General Genetic 💂',
                            promoEligible: true,
                            type: 'DoubleStatic',
                            image: 'ProductHB.png',
                            video: 'VideoHB.mp4',
                            description: 'Honey Bananas est une variété hybride dérivant de Honey Boo et Strawberry Bananas. Quand on mélange du miel, des fraises et des bananes, on reçoit un régal délicieusement sucré, et c\'est bien le cas de Honey Bananas.\n\n Dispo uniquement Maroc : Tanger / Rabat / Casablanca / Marrakech ',
                            tarifs: [
                                { weight: '50g', price: 600.00 },
                                { weight: '100G', price: 1000.00 },
                            ]
                        },
                        {
                            id: 'MENTAL RAINBOW 🌈',
                            //flag: '🇺🇸',
                            name: 'MENTAL RAINBOW 🌈',
                            farm: '🐪 SPF X General Genetic 💂',
                            promoEligible: true,
                            type: 'DoubleStatic',
                            image: 'ProductMR.png',
                            video: 'VideoMR.mp4',
                            description: 'La Mental Rainbow F1 Fast Version® est une plante qui se distingue par son profil terpénique fruité et épicé, composé de notes intenses de mangue, de papaye et d\'agrumes, parachevé par des touches terreuses, fumées et épicées.\n\n Dispo uniquement Maroc : Tanger / Rabat / Casablanca / Marrakech ',
                            tarifs: [
                                { weight: '50g', price: 600.00 },
                                { weight: '100G', price: 1000.00 },
                            ]
                        },
                        {
                            id: 'MENTAL RAINBOW SHERBET ꪜ2️⃣',
                            //flag: '🇺🇸',
                            name: 'MENTAL RAINBOW 🌈 SHERBET ꪜ2️⃣',
                            farm: '🐪 SPF X General Genetic 💂',
                            promoEligible: true,
                            type: 'DoubleStatic',
                            image: 'ProductMR2.png',
                            video: 'VideoMR2.mp4',
                            description: 'Rainbow Sherbet est une variété hybride qui allie les meilleures qualités de deux variétés parentes légendaires : Champagne et Blackberry. Ce mélange crée un équilibre harmonieux d\'effets et un profil aromatique riche et complexe qui distingue Rainbow Sherbet des autres variétés \n\n Dispo uniquement Maroc : Tanger / Rabat / Casablanca / Marrakech ',
                            tarifs: [
                                { weight: '50g', price: 600.00 },
                                { weight: '100G', price: 1200.00 },
                            ]
                        },
                    ]
                }
            ]
        }
    ];

    // --- VARIABLES D'ÉTAT ---
    let cart = [];
    let currentFilters = {
        searchTerm: '',
        quality: 'all',
        farm: 'all'
    };
    let currentView = 'categories'; // 'categories', 'farms', ou 'products'
    let currentCategoryId = null; // Garde en mémoire la catégorie sélectionnée
    let currentFarmId = null; // Garde en mémoire la farm sélectionnée
    let appliedPromo = null; // Pour suivre le code promo
    let paymentMethod = 'Espèce'; // Méthode de paiement par défaut
    const MIN_ZONE_1 = 40;  // 50€ pour Zone 1
    const MIN_ZONE_2 = 300;  // 80€ pour Zone 2
    const MIN_ZONE_3 = 500; // 150€ pour Zone 3

    // --- DÉFINIS TES CODES PROMO ICI ---
    const validPromoCodes = {
        "ACTUPLUG33": {
            type: 'fixed', // 'percent' (pourcentage) ou 'fixed' (fixe)
            value: 10,       // 20%
            appliesTo: 'eligible' // 'eligible' (articles marqués) ou 'all' (tout le panier)
        },
        /*  "WELCOME5": {
             type: 'percent',   // 20%
             value: 20,        // 20%
             appliesTo: 'all' // S'applique à tout
         } */
        // Ajoute d'autres codes ici

        // ADD CUMULABLE FONCTION POUR PLUTARD
    };


    // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
    const pages = document.querySelectorAll('.page');
    const productListContainer = document.getElementById('product-list');
    const loaderPage = document.getElementById('page-loader');

    const filterContainer = document.querySelector('.filters');

    // --- NOUVEAUX SÉLECTEURS POUR CHAQUE FILTRE ---
    const searchFilterWrapper = document.getElementById('search-filter').parentElement;
    const qualityFilterWrapper = document.getElementById('quality-filter').parentElement;
    const farmFilterWrapper = document.getElementById('farm-filter').parentElement;
    // --- FIN NOUVEAUX SÉLECTEURS ---

    // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
    function getProductById(productId) {
        for (const category of appData) {
            // Boucle dans les farms de chaque catégorie
            for (const farm of category.farms) {
                const product = farm.products.find(p => p.id === productId);
                if (product) {
                    return product;
                }
            }
        }
        return undefined; // Non trouvé
    }

    // --- NAVIGATION ---
    function showPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        // S'assure que la page existe avant de l'activer
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('active');
        }

        // --- GESTION AUTOMATIQUE DES BOUTONS NAV ---
        const homeNav = document.getElementById('nav-menu');
        const infoNav = document.getElementById('nav-info'); // On ajoute l'info
        const contactNav = document.getElementById('nav-contact');

        // On reset tout
        homeNav.classList.remove('active');
        infoNav.classList.remove('active');
        contactNav.classList.remove('active');

        // On active le bon
        if (pageId === 'page-contact') {
            contactNav.classList.add('active');
        } else if (pageId === 'page-info') {
            infoNav.classList.add('active');
        } else {
            // Pour page-home, page-produit, panier, etc.
            homeNav.classList.add('active');
        }
    }

    // --- LOGIQUE D'AFFICHAGE ---

    // --- MODIFIÉ ( sans sous categorie ): renderHomePage ---

    function renderHomePage() {
        // Toujours afficher le conteneur principal des filtres
        filterContainer.style.display = 'flex';

        // On enlève les anciens boutons "retour"
        const existingBackBtnCat = filterContainer.querySelector('.back-to-categories-btn');
        if (existingBackBtnCat) existingBackBtnCat.remove();
        const existingBackBtnFarm = filterContainer.querySelector('.back-to-farms-btn');
        if (existingBackBtnFarm) existingBackBtnFarm.remove();


        if (currentView === 'categories') {
            renderCategoryList();

            // --- GESTION DES FILTRES (Vue Catégorie) ---
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'flex'; // On montre QUE la qualité

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

        } else if (currentView === 'farms') {
            // --- MIS EN COMMENTAIRE COMME DEMANDÉ ---
            /*
            renderFarmList(currentCategoryId);
    
            // --- GESTION DES FILTRES (Vue Farms) ---
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none'; 
            qualityFilterWrapper.style.display = 'none';
    
            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)'; 
    
            // --- AJOUT BOUTON RETOUR (vers Catégories) ---
            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn'; 
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
            backButton.style.cssText = `background: var(--tertiary-bg-color); border: none; color: white; padding: 10px 15px; border-radius: 10px; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh;font-family: Copperplate;`;
            filterContainer.prepend(backButton);
            */
            // --- FIN DU BLOC COMMENTÉ ---

        } else if (currentView === 'products') {
            // --- MODIFICATION : On ne passe plus currentFarmId ---
            renderProductList(currentCategoryId);

            // --- GESTION DES FILTRES (Vue Produit) ---
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'flex';
            qualityFilterWrapper.style.display = 'none';

            // --- GESTION DU STYLE DE GRILLE ---
            productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; // 2 colonnes

            // --- MODIFICATION : Le bouton "Retour" ramène aux CATÉGORIES ---
            const category = appData.find(c => c.id === currentCategoryId);
            // const farm = category.farms.find(f => f.id === currentFarmId); // <- On n'a plus besoin de ça
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn'; // <-- MODIFIÉ (pour réutiliser le clic)
            backButton.innerHTML = `<svg width="24"
         height="24"
          viewBox="0 0 24 24"
          ><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>  ${category.name}`; // <-- MODIFIÉ (on affiche le nom de la catégorie)
            backButton.style.cssText = ` background: linear-gradient(180deg, black, transparent); 
            border-bottom: 2px solid #03e7f6;
            border-top: none;
            border-left: none;
            border-right: none;
        color: white; padding: 10px 15px; 
        border-radius: 10px; font-size: 1.1rem; 
        font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh;    font-family: Copperplate;
        `;
            filterContainer.prepend(backButton);
        }
    }

    // --- MODIFIÉ : renderCategoryList ---
    // Prend en compte le filtre qualité
    function renderCategoryList() {
        const filteredCategories = appData.filter(category => {
            const searchMatch = category.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            // --- AJOUT ---
            const qualityMatch = currentFilters.quality === 'all' || category.quality === currentFilters.quality;
            return searchMatch && qualityMatch;
            // --- FIN AJOUT ---
        });

        productListContainer.innerHTML = '';
        if (filteredCategories.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
            return;
        }

        filteredCategories.forEach(category => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.categoryId = category.id;

            card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
              
            `;
            productListContainer.appendChild(card);
        });
    }

    // --- NOUVELLE FONCTION ---
    // Affiche la liste des FARMS pour une catégorie
    function renderFarmList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }

        const farms = category.farms; // Pas de filtres ici pour l'instant

        productListContainer.innerHTML = '';
        if (farms.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune farm trouvée pour cette catégorie.</p>';
            return;
        }

        farms.forEach(farm => {
            const card = document.createElement('div');
            card.className = 'farm-card'; // NOUVELLE CLASSE
            card.dataset.farmId = farm.id; // DATASET IMPORTANT

            if (farm.clickable === false) {
                card.classList.add('unclickable');
            }

            const productCount = farm.products.length;

            let badgeHTML = '';
            if (farm.badgeText) {
                badgeHTML = `<div class="card-badge">${farm.badgeText}</div>`;
            }

            card.innerHTML = `
            <div class="card-badge">${productCount > 0 ? productCount + ' produit' + (productCount > 1 ? 's' : '') : farm.badgeText || ''}</div>
            
            <img src="${farm.image}" alt="${farm.name}">
           
        `;
            productListContainer.appendChild(card);
        });
    }

    // Affiche la liste des PRODUITS pour une CATÉGORIE ENTIÈRE
    function renderProductList(categoryId) { // <-- MODIFIÉ (on n'a plus besoin de farmId)
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }

        // --- MODIFICATION MAJEURE ---
        // On récupère TOUS les produits de TOUTES les farms de cette catégorie
        const allProducts = category.farms.flatMap(farm => farm.products);
        // --- FIN MODIFICATION ---

        if (!allProducts || allProducts.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit dans cette catégorie.</p>';
            return;
        }

        const filteredProducts = allProducts.filter(product => { // <-- On filtre la nouvelle liste
            const searchMatch = product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            const farmMatch = currentFilters.farm === 'all' || product.farm === currentFilters.farm;
            return searchMatch && farmMatch;
        });

        productListContainer.innerHTML = '';
        if (filteredProducts.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            // ... (le reste de la fonction est identique)
            const card = document.createElement('div');
            card.className = 'product-card product-item-card';
            card.dataset.productId = product.id;

            if (product.clickable === false) {
                card.classList.add('unclickable');
            }

            let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';

            card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="info">
                <div class="name">${product.name} ${flagHTML}</div>
                <div class="farm">${product.farm}</div>
                <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
            </div>
        `;
            productListContainer.appendChild(card);
        });
    }

// Affiche la page de détail d'un produit
function renderProductPage(productId) {
    // On utilise notre nouvelle fonction "helper"
    const product = getProductById(productId);
    if (!product) return;

    const videoElement = document.querySelector('#page-product .product-video');
    if (product.video) {
        videoElement.src = product.video;
        videoElement.style.display = 'block';
    } else {
        videoElement.style.display = 'none';
    }
    videoElement.poster = product.image;

    document.getElementById('product-page-title').innerText = product.name;
    const detailsContainer = document.getElementById('product-details-content');

    let tarifsHTML = product.tarifs.map(tarif => `
        <div class="tarif-item">
            <div class="box-tarif">
                <div class="tarif-wieght">${tarif.weight}</div>
                <div class="tarif-price">${tarif.price.toFixed(2)}€</div>
            </div>
            <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                <svg width="20" height="20"><use href="#icon-cart"/></svg>
            </button>
        </div>
    `).join('');

    let descriptionHTML = '';
    if (product.description) {
        descriptionHTML = `<div class="product-description">${product.description}</div>`;
    }

    // --- GESTION DES STRAINS ---
    let strainsHTML = '';
    if (product.strains && product.strains.length > 0) {
        strainsHTML = `
            <div class="strain-selector-container" style="margin: 15px 0;">
                <label for="strain-select-${product.id}" style="color: white; font-weight: bold; margin-bottom: 5px; display: block;">🧪 Choisir la Variété :</label>
                <select id="strain-select-${product.id}" style="width: 100%; padding: 10px; border-radius: 8px; background: #2c2c2e; color: white; border: 1px solid #03e7f6; font-size: 1rem;">
                    ${product.strains.map(s => `<option value="${s}">${s}</option>`).join('')}
                </select>
            </div>
        `;
    }

    // --- GESTION DU BADGE PROMO ---
    let promoHTML = '';
    if (product.badgePromo) {
        promoHTML = `
            <div class="promo-solde-badge">
                <span class="promo-solde-title">🔥 FLASH SALE</span>
                <div>${product.badgePromo}</div>
            </div>
        `;
    }

    // On injecte le HTML avec l'alignement Flex (Titre à gauche, Badge à droite)
    detailsContainer.innerHTML = `
        <div class="name">${product.name}</div>
        <div class="farm">${product.farm}</div>
        
        ${descriptionHTML} 
        ${strainsHTML} 
        
        <div style="display: flex; justify-content: space-around; align-items: anchor-center; width: 90%; margin-top: 25px; margin-bottom: 5px; border-top: 1px solid var(--tertiary-bg-color); padding-top: 15px;">
            <h4 class="tarifs-title" style="margin: 0; border: none; padding: 0;">💰 Tarifs :</h4>
            ${promoHTML}
        </div>

        <div class="tarifs-grid-container">
            ${tarifsHTML}
        </div>
    `;
    
    showPage('page-product');
}
    // Met à jour l'affichage du panier (inchangé)
    function renderCart() {
        const cartContainer = document.getElementById('cart-items-container');
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
            document.getElementById('cart-total-price').innerText = '0.00€';
            updateCartCount();
            return;
        }

        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        document.getElementById('cart-total-price').innerText = `${total.toFixed(2)}€`;
        updateCartCount();
    }

  // Affiche la page de confirmation et gere les codes promo
  function renderConfirmation() {
    // --- 1. DÉFINITION DES VARIABLES ET SÉLECTEURS (EN PREMIER !) ---
    const cigToggle = document.getElementById('cigarette-toggle');
    const zoneSelect = document.getElementById('delivery-zone-select'); // Il doit être défini ici !
    const zoneOptions = zoneSelect.options;
    const warningText = document.getElementById('zone-warning-text');
    
    // Calcul initial du panier
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;

    // --- 2. GESTION CIGARETTES (+10€) ---
    // On vérifie si c'est coché pour ajouter 10€
    const cigarettePrice = cigToggle.checked ? 10.00 : 0;

    // Logique visuelle cigarette (Menu déroulant)
    const cigDetails = document.getElementById('cigarette-details');
    if (cigToggle.checked) {
        cigDetails.style.display = 'block';
    } else {
        cigDetails.style.display = 'none';
    }
    
    // Écouteur pour recharger le prix si on coche/décoche
    cigToggle.onchange = function() {
        renderConfirmation(); 
    };

    // --- 3. GESTION PROMO ---
    if (appliedPromo) {
        const promo = validPromoCodes[appliedPromo];
        let discountableAmount = 0;

        if (promo.appliesTo === 'eligible') {
            cart.forEach(item => {
                const product = getProductById(item.productId);
                if (product && product.promoEligible) {
                    discountableAmount += item.totalPrice;
                }
            });
        } else {
            discountableAmount = subTotal;
        }

        if (promo.type === 'percent') {
            discount = (discountableAmount * promo.value) / 100;
        } else {
            discount = promo.value;
        }
    }
    if (discount > subTotal) discount = subTotal;

    // --- 4. TOTAL FINAL ---
    const totalPrice = subTotal - discount + cigarettePrice;

    // --- 5. GESTION DU BONUS AUTOMATIQUE (CASE GRISE) ---
    const bonusCheckbox = document.getElementById('bonus-300-checkbox');
    const bonusWrapper = document.querySelector('.bonus-wrapper');

    if (totalPrice >= 300) {
        bonusCheckbox.checked = true;
        bonusWrapper.classList.add('active');
    } else {
        bonusCheckbox.checked = false;
        bonusWrapper.classList.remove('active');
    }

    // --- 6. GESTION DE L'IMAGE DE LA ZONE (Maintenant que zoneSelect est défini) ---
    const imgContainer = document.getElementById('cart-zone-image-container');
    const imgPreview = document.getElementById('cart-zone-preview');

    const zoneImages = {
        "Zone 1": "Zone1.jpg",
        "Zone 2": "Zone2.jpg",
        "Zone 3": "Zone3.jpg"
    };

    // Fonction locale pour mettre à jour l'image
    const updateZoneImage = () => {
        const selectedVal = zoneSelect.value;
        if (selectedVal && zoneImages[selectedVal]) {
            imgPreview.src = zoneImages[selectedVal];
            imgContainer.style.display = 'block';
        } else {
            imgContainer.style.display = 'none';
        }
    };

    // On lance la mise à jour
    updateZoneImage();

    // Gestionnaire d'événement pour la zone
    // ATTENTION : On doit éviter la boucle infinie. On sépare la logique.
    zoneSelect.onchange = function() {
        updateZoneImage(); 
        // On relance renderConfirmation pour vérifier les minimums de commande (étape 7)
        // Mais comme on est DÉJÀ dans renderConfirmation, on appelle une petite mise à jour UI seulement si besoin
        // Pour faire simple et robuste : on recharge tout.
        renderConfirmation(); 
    };

    // --- 7. VERROUILLAGE DES ZONES (PALIERS PRIX) ---
    warningText.style.display = 'none'; // Reset

    // Zone 1
    if (totalPrice < MIN_ZONE_1) {
        zoneOptions[1].disabled = true;
        zoneOptions[1].text = `🟢 ZONE 1 (Bloqué - Min ${MIN_ZONE_1}€)`;
    } else {
        zoneOptions[1].disabled = false;
        zoneOptions[1].text = `🟢 ZONE 1 : Centre`;
    }

    // Zone 2
    if (totalPrice < MIN_ZONE_2) {
        zoneOptions[2].disabled = true;
        zoneOptions[2].text = `🟡 ZONE 2 (Bloqué - Min ${MIN_ZONE_2}€)`;
    } else {
        zoneOptions[2].disabled = false;
        zoneOptions[2].text = `🟡 ZONE 2 : Banlieue`;
    }

    // Zone 3
    if (totalPrice < MIN_ZONE_3) {
        zoneOptions[3].disabled = true;
        zoneOptions[3].text = `🔴 ZONE 3 (Bloqué - Min ${MIN_ZONE_3}€)`;
    } else {
        zoneOptions[3].disabled = false;
        zoneOptions[3].text = `🔴 ZONE 3 : Grande Couronne`;
    }

    // Vérification : Si la zone choisie devient interdite (ex: on a retiré un article)
    // On vérifie s'il y a une vraie valeur sélectionnée (pas le placeholder vide)
    if (zoneSelect.value !== "" && zoneSelect.selectedOptions[0].disabled) {
        zoneSelect.value = ""; // On désélectionne
        updateZoneImage(); // On cache l'image
        warningText.style.display = 'block';
        warningText.innerText = "⚠️ Votre panier a changé, veuillez re-sélectionner une zone valide.";
    }


    // --- 8. UI ET AFFICHAGE ---
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('confirmation-items-count').innerText = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
    document.getElementById('confirmation-total-price').innerText = `${totalPrice.toFixed(2)}€`;

    // Liste des articles
    const itemsList = document.getElementById('confirmation-items-list');
    itemsList.innerHTML = cart.map((item, index) => `
         <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <div>${index + 1}. ${item.name}</div>
                <div>Quantité: ${item.quantity}x ${item.weight}</div>
                <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
            </div>
        </div>
    `).join('');

    // Promo UI
    const promoInputContainer = document.getElementById('promo-input-container');
    const promoAppliedContainer = document.getElementById('promo-applied-container');
    if (appliedPromo) {
        promoInputContainer.style.display = 'none';
        promoAppliedContainer.style.display = 'flex';
        document.getElementById('promo-applied-text').innerText = `Code "${appliedPromo}" appliqué !`;
    } else {
        promoInputContainer.style.display = 'flex';
        promoAppliedContainer.style.display = 'none';
        document.getElementById('promo-code-input').value = '';
    }

    // Paiement UI
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.method === paymentMethod);
    });

    // Résumé Final en bas
    const summaryContainer = document.getElementById('confirmation-summary');
    let summaryHTML = `
        <div class="summary-line">
            <span>Sous-total:</span>
            <span>${subTotal.toFixed(2)}€</span>
        </div>
    `;
    if (discount > 0) {
        summaryHTML += `
        <div class="summary-line discount">
            <span>Réduction:</span>
            <span>-${discount.toFixed(2)}€</span>
        </div>
        `;
    }
    if (cigarettePrice > 0) {
         summaryHTML += `
        <div class="summary-line" style="color: #ff3b30;">
            <span>🚬 Cigarettes:</span>
            <span>+${cigarettePrice.toFixed(2)}€</span>
        </div>
        `;
    }
    summaryHTML += `
        <div class="summary-line total">
            <span>💰 Total final:</span>
            <span>${totalPrice.toFixed(2)}€</span>
        </div>
    `;
    summaryContainer.innerHTML = summaryHTML;

    // Logique Goodies (inchangée)
    const goodiesToggle = document.getElementById('want-goodies-toggle');
    const goodiesList = document.getElementById('goodies-selection-list');
    const feuilleOption = document.getElementById('goodie-feuille-option');

    const isOnlyNeige = cart.every(item => {
        const product = getProductById(item.productId);
        return product && product.type === 'Neige'; 
    });

    if (isOnlyNeige) {
        feuilleOption.style.display = 'none';
    } else {
        feuilleOption.style.display = 'flex';
    }

    goodiesToggle.onchange = function() {
        if (this.checked) {
            goodiesList.style.display = 'flex';
        } else {
            goodiesList.style.display = 'none';
            document.querySelectorAll('.goodie-checkbox').forEach(cb => cb.checked = false);
        }
    };

    // ENFIN : Afficher la page
    showPage('page-confirmation');
}
    // Affiche la page de contact (inchangé)
    function renderContactPage() {
        const linksContainer = document.getElementById('contact-links-container');
        linksContainer.innerHTML = contactLinks.map(link => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        <svg width="24" height="24"><use href="${link.icon}"/></svg>
            <span>${link.text}</span>
        </a>
        `).join('');
    }

    // Met à jour le compteur du panier (inchangé)
    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    // --- MODIFIÉ : populateFilters ---
    // Prend les données des catégories ET des produits
    function populateFilters() {
        const searchFilter = document.getElementById('search-filter');
        const qualityFilter = document.getElementById('quality-filter');
        const farmFilter = document.getElementById('farm-filter');

        const allNestedProducts = appData.flatMap(category => category.farms.flatMap(farm => farm.products));

        // --- MODIFICATION ---
        /*    const categoryQualities = appData.map(c => c.quality);
                const productQualities = allNestedProducts.map(p => p.quality);
                const qualities = ['all', ...new Set([...categoryQualities, ...productQualities])];
        
                const categoryFarms = appData.map(c => c.farm);
                const productFarms = allNestedProducts.map(p => p.farm);
                const farms = ['all', ...new Set([...categoryFarms, ...productFarms])]; */
        // --- FIN MODIFICATION ---

        // On ne prend les "qualities" QUE des catégories
        const categoryQualities = appData.map(c => c.quality);
        const qualities = ['all', ...new Set(categoryQualities)];

        // On ne prend les "farms" QUE des produits (c'est ce que tu filtres)
        const productFarms = allNestedProducts.map(p => p.farm);
        const farms = ['all', ...new Set(productFarms)];

        qualityFilter.innerHTML = qualities.map(q => `<option value="${q}">${q === 'all' ? 'CATEGORIE' : q}</option>`).join('');
        farmFilter.innerHTML = farms.map(farm => `<option value="${farm}">${farm === 'all' ? 'LES FARM' : farm}</option>`).join('');

        searchFilter.addEventListener('input', (e) => {
            currentFilters.searchTerm = e.target.value;
            renderHomePage();
        });

        qualityFilter.addEventListener('change', (e) => {
            currentFilters.quality = e.target.value;
            renderHomePage();
        });

        farmFilter.addEventListener('change', (e) => {
            currentFilters.farm = e.target.value;
            renderHomePage();
        });
    }

    // --- NOTIFICATION (inchangé) ---
    let notificationTimeout;
    function showNotification(message) {
        const notification = document.getElementById('notification-toast');
        if (!notification) return;

        clearTimeout(notificationTimeout);
        notification.classList.remove('show');
        void notification.offsetWidth;

        notification.innerText = message;
        notification.classList.add('show');

        notificationTimeout = setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // --- LOGIQUE DU PANIER ---
    function addToCart(productId, weight, price, strain = '') {
        // L'ID du panier intègre la strain pour séparer les lignes si variétés différentes
        const cartItemId = strain ? `${productId}-${weight}-${strain}` : `${productId}-${weight}`;
        const existingItem = cart.find(item => item.id === cartItemId);

        const product = getProductById(productId);
        const displayName = strain ? `${product.name} [${strain}]` : product.name;

        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId,
                productId: productId,
                name: displayName, // Affiche le nom + la strain dans le panier et le récap
                image: product.image,
                weight: weight,
                quantity: 1,
                unitPrice: price,
                totalPrice: price
            });
        }
        renderCart();
        tg.HapticFeedback.notificationOccurred('success');
        showNotification('✅ Produit ajouté au panier !');
    }

    // updateQuantity (inchangé)
    function updateQuantity(cartItemId, action) {
        const item = cart.find(i => i.id === cartItemId);
        if (!item) return;

        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease') {
            item.quantity--;
        }

        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== cartItemId);
        } else {
            item.totalPrice = item.quantity * item.unitPrice;
        }
        renderCart();
    }

    function formatOrderMessage() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        // --- Inputs Utilisateur ---
        const addressInput = document.getElementById('order-address').value.trim();
        const infoInput = document.getElementById('order-info').value.trim();
        
        // --- ZONE LIVRAISON (NOUVEAU) ---
        const zoneSelect = document.getElementById('delivery-zone-select');
        const selectedZone = zoneSelect.value ? zoneSelect.value : "⚠️ NON SÉLECTIONNÉE";
        // --------------------------------

        const finalAddress = addressInput ? addressInput : "A convenir en privé";
        const finalInfo = infoInput ? infoInput : "Aucune";

        // Goodies
        const wantGoodies = document.getElementById('want-goodies-toggle').checked;
        let goodiesString = "Non merci";
        if (wantGoodies) {
            const selectedGoodies = Array.from(document.querySelectorAll('.goodie-checkbox:checked')).map(cb => cb.value);
            goodiesString = selectedGoodies.length > 0 ? "Oui : " + selectedGoodies.join(', ') : "Oui (Surprise)";
        }

        // Cigarettes
        const wantCig = document.getElementById('cigarette-toggle').checked;
        const cigBrand = document.getElementById('cigarette-brand').value;
        const cigPrice = wantCig ? 10.00 : 0;
        let cigString = "Non";
        if (wantCig) cigString = `Oui (${cigBrand}) - 10€`;

        // Calcul Prix
        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];
            let discountableAmount = (promo.appliesTo === 'eligible') 
                ? cart.filter(i => getProductById(i.productId)?.promoEligible).reduce((sum, i) => sum + i.totalPrice, 0)
                : subTotal;
            discount = (promo.type === 'percent') ? (discountableAmount * promo.value) / 100 : promo.value;
        }
        if (discount > subTotal) discount = subTotal;
        const totalPrice = subTotal - discount + cigPrice;
        
        // Bonus
        const isBonusUnlocked = totalPrice >= 300 ? "✅ OUI (Commande > 300€)" : "❌ NON";
        const date = new Date();
        const formattedDate = `${date.getDate()} ${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()} a ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

        // --- Construction du Message ---
        let message = "NOUVELLE COMMANDE HEISENBERG 🎩\n\n";
        message += "====================\n";
        message += "RESUME:\n";
        message += `- ${totalItems} article${totalItems > 1 ? 's' : ''}\n`;
        message += `- Paiement: ${paymentMethod} 💳\n`; 
        
        // Ajout de la zone dans le résumé haut
        message += `- Zone: ${selectedZone}\n`; 
        
        message += "====================\n";
        message += `DETAIL DES ARTICLES:\n`;

        cart.forEach((item) => {
            message += `\n- ${item.name}`; 
            message += `\n   Quantite: ${item.quantity}x ${item.weight}`;
            message += `\n   Prix: ${item.totalPrice.toFixed(2)} EUR`;
        });

        message += `\n\n====================\n`;
        message += `SOUS-TOTAL: ${subTotal.toFixed(2)} EUR\n`;
        if (discount > 0) message += `REDUCTION (${appliedPromo}): -${discount.toFixed(2)} EUR\n`;
        if (wantCig) message += `CIGARETTES: +10.00 EUR\n`;
        message += `TOTAL FINAL: ${totalPrice.toFixed(2)} EUR\n`; 
        message += "====================\n";
        
        message += `\n🚚 ZONE CHOISIE : ${selectedZone}\n`; // Rappel ici
        message += `\n📍 ADRESSE :\n${finalAddress}\n`;
        message += `\n📝 INFOS SUPP :\n${finalInfo}\n`;
        message += `\n🎁 GOODIES : ${goodiesString}\n`; 
        
        if (wantCig) {
            message += `\n🚬 CIGARETTES : ${cigString}\n`;
        }
        message += `\n🌟 BONUS PALIER 300€ : ${isBonusUnlocked}\n`;

        message += `\n📅 Commande du: ${formattedDate}\n`;
        return message;
    }
    // --- GESTION DES ÉVÉNEMENTS ---

    // Clics sur la barre de navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            if (!pageId) return;

            // Les lignes gérant la classe 'active' ont été supprimées
            // showPage(pageId) s'en occupe maintenant.

            if (pageId === 'page-contact') {
                renderContactPage();
            }

            if (pageId === 'page-home') {
                currentView = 'categories';
                currentCategoryId = null;
                // On reset TOUS les filtres
                currentFilters.searchTerm = '';
                currentFilters.quality = 'all';
                currentFilters.farm = 'all';
                document.getElementById('search-filter').value = '';
                document.getElementById('quality-filter').value = 'all';
                document.getElementById('farm-filter').value = 'all';

                renderHomePage();
            }

            showPage(pageId);
        });
    });

    // Clics sur le reste de la page
    document.body.addEventListener('click', function (e) {
        const target = e.target;

        if (target.closest('#copy-order-btn')) {
            let message = formatOrderMessage();
            message = message.replace(/\*/g, '');


            // --- AJOUT : Inverser les styles des boutons ---
            const copyBtn = document.getElementById('copy-order-btn');
            const contactBtn = document.getElementById('confirm-order-button');

            // Copier devient Gris (secondary)
            copyBtn.classList.remove('main-action-btn');
            copyBtn.classList.add('secondary-action-btn');

            // Contacter devient Rouge (main) et est activé
            contactBtn.classList.remove('secondary-action-btn');
            contactBtn.classList.add('main-action-btn');
            contactBtn.disabled = false; // <-- ON DÉVERROUILLE LE BOUTON
            return; // On s'arrête là
        }

        // 1. Clic sur une carte CATÉGORIE
        const categoryCard = target.closest('.category-card');
        if (categoryCard) {
            currentView = 'products'; // <-- MODIFIÉ (on saute la vue "farms")
            currentCategoryId = categoryCard.dataset.categoryId;
            // On reset les filtres
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }



        // Gère l'accordéon sur la page contact
        const accordionHeader = target.closest('.accordion-header');
        if (accordionHeader) {
            const accordionItem = accordionHeader.parentElement;

            // On ferme les autres items
            document.querySelectorAll('#page-info .accordion-item.active').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
            });

            // On ouvre/ferme l'item cliqué
            accordionItem.classList.toggle('active');
            return; // On arrête là pour ne pas déclencher d'autres clics
        }


        // 2. NOUVEAU : Clic sur une carte FARM (MIS EN COMMENTAIRE)
        /*    const farmCard = target.closest('.farm-card');
           if (farmCard) {
   
               if (farmCard.classList.contains('unclickable')) {
                   return;
               }
   
               currentView = 'products'; // On va à la vue "products"
               currentFarmId = farmCard.dataset.farmId;
               // On reset les filtres
               currentFilters.searchTerm = '';
               document.getElementById('search-filter').value = '';
               renderHomePage();
               return;
           } */

        // 3. Clic sur une carte PRODUIT
        const productCard = target.closest('.product-item-card');
        if (productCard) {

            if (productCard.classList.contains('unclickable')) {
                return;
            }
            renderProductPage(productCard.dataset.productId);
            return;
        }

        // 4. NOUVEAU : Clic sur le bouton "Retour" (vers Catégories)
        if (target.closest('.back-to-categories-btn')) {
            currentView = 'categories';
            currentCategoryId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // 5. NOUVEAU : Clic sur le bouton "Retour" (vers Farms)
        if (target.closest('.back-to-farms-btn')) {
            currentView = 'farms';
            currentFarmId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        // Clic sur "Appliquer" le code promo
        if (target.closest('#apply-promo-btn')) {
            const input = document.getElementById('promo-code-input');
            const code = input.value.toUpperCase(); // Mets en majuscule

            if (validPromoCodes[code]) {
                appliedPromo = code;
                tg.HapticFeedback.notificationOccurred('success');
                showNotification('✅ Code promo appliqué !');
            } else {
                appliedPromo = null; // Reset au cas où
                tg.HapticFeedback.notificationOccurred('error');
                showNotification('❌ Code promo invalide.');
            }
            renderConfirmation(); // Met à jour la page de confirmation
        }

        // Clic sur "Supprimer" le code promo
        if (target.closest('#remove-promo-btn')) {
            appliedPromo = null;
            showNotification('Code promo retiré.');
            renderConfirmation(); // Met à jour la page
        }

        // Clic sur un bouton de paiement
        if (target.closest('.payment-btn')) {
            paymentMethod = target.closest('.payment-btn').dataset.method;
            // Pas besoin de rafraîchir toute la page, juste les boutons
            document.querySelectorAll('.payment-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.method === paymentMethod);
            });
        }

       // Clic sur "Ajouter au panier"
       if (target.closest('.add-to-cart-btn')) {
        const btn = target.closest('.add-to-cart-btn');
        const productId = btn.dataset.productId;
        
        // On vérifie si un sélecteur de strain existe pour ce produit
        const strainSelect = document.getElementById(`strain-select-${productId}`);
        const selectedStrain = strainSelect ? strainSelect.value : '';

        addToCart(productId, btn.dataset.weight, parseFloat(btn.dataset.price), selectedStrain);
    }

        // Clic sur les boutons de quantité
        if (target.closest('.quantity-btn')) {
            const btn = target.closest('.quantity-btn');
            updateQuantity(btn.dataset.id, btn.dataset.action);
        }

        // Clic sur le bouton "fermer"
        if (target.closest('.close-button')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur "Continuer les achats"
        if (target.closest('#cart-continue-shopping')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur les boutons "retour" (des pages produits, panier...)
        if (target.closest('.back-button')) {
            showPage('page-home');
            // La gestion des classes 'active' est maintenant dans showPage
        }

        // Clic sur le bouton du panier
        if (target.closest('#home-cart-button')) {
            renderCart();
            showPage('page-cart');
        }

        // Clic sur "Commander"
        if (target.closest('#checkout-button')) {
            renderConfirmation();
        }

        // Clic sur "Modifier"
        if (target.closest('#confirmation-modify-order')) {
            showPage('page-cart');
        }

        // Clic sur "Confirmer la commande" (VERSION POTATO)
        /*    if (target.closest('#confirm-order-button')) {
               // 1. Remplace 'TON_PSEUDO_POTATO' par ton VRAI pseudo Potato.
               const targetPotatoUser = 'BPDiSPENSARY';
   
               let message = formatOrderMessage();
               message = message.replace(//g, '');
               const encodedMessage = encodeURIComponent(message);
   
              // 2. On construit le lien Potato.  https://dympt.org/ - `https://potato.im/p/u/${targetPotatoUser}?text=${encodedMessage}`;
   
               // (Utilise 'p/u/' pour un compte utilisateur, ou 'p/s/' pour un bot)
               //const potatoUrl = `https://dympt.org/${targetPotatoUser}?text=${encodedMessage}`;
               const potatoUrl = `https://dympt.org/${targetPotatoUser}`;
   
               // 3. On utilise la même fonction pour ouvrir le lien
               tg.openLink(potatoUrl);
           } */

        // Clic sur "Confirmer la commande" (VERSION COPIER/COLLER - LA SEULE FIABLE)
        if (target.closest('#confirm-order-button')) {

            // 1. TON PSEUDO TELEGRAM
            const targetUsername = 'frankybaby50';

            // 2. On prépare le message
            let message = formatOrderMessage();
            message = message.replace(/\*/g, ''); // On nettoie

            // 3. (Optionnel mais cool) On copie quand même dans le presse-papier en backup
            // copyToClipboard(message);

            // 4. On encode et on ouvre le lien
            const encodedMessage = encodeURIComponent(message);
            const telegramUrl = `https://t.me/${targetUsername}?text=${encodedMessage}`;

            tg.openLink(telegramUrl);
        }

    });

    // --- FONCTIONS VISIONNEUSE D'IMAGE ---
    window.openImageViewer = function(src) {
        const viewer = document.getElementById('image-viewer');
        const img = document.getElementById('full-image');
        viewer.style.display = "block";
        img.src = src;
    }

    window.closeImageViewer = function() {
        document.getElementById('image-viewer').style.display = "none";
    }

    // --- INITIALISATION DE L'APP ---
    function init() {
        setTimeout(() => {
            populateFilters();
            renderHomePage(); // Affiche les catégories au début
            updateCartCount();
            showPage('page-home');
        }, 1500);
    }

    init();
});