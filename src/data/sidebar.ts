// src/data/sidebar.ts

import type { SidebarItem } from '../components/types'

export const sidebarItemsFirst: SidebarItem[] = [
  {
    id: 'modern-warfare',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2000950/ss_c15d3bbc88fb942c72663e89cb6e0e23aad6cec3.1920x1080.jpg?t=1678294805',
    title: 'Call of Duty®: Modern Warfare® - Standard Edition',
    platform: '-90%', // скидка
    date: '721,00 kr/72,10 kr',
    url: 'https://store.steampowered.com/app/2000950/Call_of_Duty_Modern_Warfare/',
  },
  {
    id: 'red-dead-redemption-2',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/ss_bac60bacbf5da8945103648c08d27d5e202444ca.1920x1080.jpg?t=1759502961',
    title: 'Red Dead Redemption 2',
    platform: '-75%',
    date: '719,00 kr/179,75 kr',
    url: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/',
  },
  {
    id: 'ea-sports-fc-26',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3405690/7570de99060a6abd39202cd3fe532b2e2d6f0f21/ss_7570de99060a6abd39202cd3fe532b2e2d6f0f21.1920x1080.jpg?t=1773426592',
    title: 'EA SPORTS FC™ 26',
    platform: '-70%',
    date: '799,00 kr/239,70 kr',
    url: 'https://store.steampowered.com/app/3405690/EA_SPORTS_FC_26/',
  },
  {
    id: 'ready-or-not',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1144200/987e58774c746af82402934262e23c887977ebe9/ss_987e58774c746af82402934262e23c887977ebe9.1920x1080.jpg?t=1773353028',
    title: 'Ready Or Not',
    platform: '-50%',
    date: '389,00 kr/194,50 kr',
    url: 'https://store.steampowered.com/app/1144200/Ready_or_Not/',
  },
  {
    id: 'resident-evil-3',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/952060/ss_ef618256720e6e665f4b8b5dd11726a561e0b16e.1920x1080.jpg?t=1768956538',
    title: 'RESIDENT EVIL 3',
    platform: '-90%',
    date: '449,00 kr-44,90 kr',
    url: 'https://store.steampowered.com/app/952060/Resident_Evil_3/',
  },
  {
    id: 'cyberpunk-2077',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/ss_4eb068b1cf52c91b57157b84bed18a186ed7714b.1920x1080.jpg?t=1769690377',
    title: 'Cyberpunk 2077',
    platform: '-65%',
    date: '579,00 kr/202,65 kr',
    url: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/',
  },
];

export const sidebarItemsMain: SidebarItem[] = [
  {
    id: 'gumroad-pack',
    image: '/swagnews/link/content/créative web/Cover gumroad (3).png',
    title: 'Мертіграл продає свій пак з мокапами',
    platform: 'Gumroad',
    date: '14/04/2025',
    url: 'https://mertygraal.gumroad.com/l/fzach',
  },
  {
    id: 'brand-tg',
    image: '/swagnews/link/content/créative web/INDEPENDENT INTERNATIONAL UKRAINIAN KIDS.png',
    title: 'Мертіграл опублікував свій майбутній бренд у тг',
    platform: 'telegram',
    date: '10/04/2025',
    url: 'https://t.me/creativewebtg/2795',
  },
  {
    id: 'csgo-work',
    image: '/swagnews/link/content/créative web/lol relationshit.png',
    title: 'Остання робота з теми csgo',
    platform: 'Pinterest',
    date: '05/04/2025',
    url: 'https://pin.it/4sOAM1xuS',
  },
]

export const sidebarItemsExtra: SidebarItem[] = [

]