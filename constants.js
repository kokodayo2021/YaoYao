const characters6Star = ['神兽椰羊', '鸽之守护者', '黑之铁匠瓦格纳', '厨神戈登', '风魔龙特瓦林', '愚人众第八席 女士', '应急食物 派蒙'];
const characters5Star = ['迪卢克', '琴', '莫娜', '刻晴', '七七', '可莉', '温蒂'];
const characters4Star = ['菲谢尔', '安柏', '班尼特', '芭芭拉', '丽莎', '凯亚', '重云', '香菱', '行秋', '北斗', '砂糖', '雷泽'];

const bows4star = ['Alley-Hunter', 'Blackcliff-Warbow', 'Compound-Bow', 'Favonius-Warbow', 'Prototype-Crescent', 'Royal-Bow', 'Rust', 'Sacrificial-Bow', 'The-Stringless', 'The-Viridescent-Hunt'];
const catalyst4star = ['Blackcliff-Amulet', 'Eye-of-Perception', 'Favonius-Codex', 'Mappa-Mare', 'Prototype-Malice', 'Royal-Grimoire', 'Scrificial-Fragments', 'Solar-Pearl', 'The-Widsith', 'Wine-and-Song'];
const claymore4star = ['Blackcliff-Slasher', 'Favonius-Greatsword', 'Lithic-Blade', 'Prototype-Aminus', 'Rainslasher', 'Royal-Greatsword', 'Sacrificial-Greatsword', 'Serpent-Spine', 'The-Bell', 'Whiteblind'];
const polearm4star = ['Crescent-Pike', 'Deathmatch', 'Dragon\'s-Bane', 'Favonius-Lance', 'Lithic-Spear', 'Prototype-Grudge'];
const sword4star = ['Blackcliff-Longsword', 'Favonius-Sword', 'Iron-Sting', 'Lion\'s-Roar', 'Prototype-Rancour', 'Royal-Longsword', 'Sacrificial-Sword', 'The-Alley-Flash', 'The-Black-Sword', 'The-Flute'];
const weapons5Star = ['Wolf\'s-Gravestone', 'Aquila-Favonia', 'Lost-Prayer-to-the-Sacred-Winds', 'Skyward-Blade', 'Skyward-Pride', 'Skyward-Harp', 'Primordial-Jade-Winged-Spear', 'Amos\'-Bow'];
const weapons4Star = [...bows4star, ...catalyst4star, ...claymore4star, ...polearm4star, ...sword4star];
const weapons3Star = ['Debate-Club', 'Cold-Steel', 'Sharpshooter\'s-Oath', 'Magic-Guide', 'Harbringer-of-Dawn', 'Raven-Bow', 'Ferrous-Shadow', 'Slingshot'];

const consumables = ['4-Star-Weapon', '5-Star-Weapon'];
const allWeapons = [...weapons3Star, ...weapons4Star, ...weapons5Star];
const allCharacters = [...characters6Star, ...characters5Star, ...characters4Star];

const generalBanner6Star = ['神兽椰羊', '鸽之守护者', '黑之铁匠瓦格纳', '厨神戈登', '风魔龙特瓦林', '愚人众第八席 女士', '应急食物 派蒙'];
const generalBanner5Star = [...characters5Star, ...weapons5Star];
const generalBanner4Star = [...characters4Star, ...weapons4Star];
const generalBanner4StarCharacters = ['菲谢尔', '安柏', '班尼特', '芭芭拉', '丽莎', '凯亚', '重云', '香菱', '行秋', '北斗', '砂糖', '雷泽'];
const generalBanner4StarWeapons = [...weapons4Star];

const kleeBanner5Star = ['迪卢克', '琴', '莫娜', '刻晴', '七七', '可莉'];

module.exports = {
    userInitialState: {
        messageSent: 0,
        primogems: 0,
        pityCounter4star: 1,
        pityCounter5star: 1,
        lastDaily: 0,
        lastWeekly: 0,
        lastMonthly: 0,
        inventory: {
            characters: {},
            weapons: {},
            consumables: {},
        },
    },
    characterInitialState: { 
        rank: 1,
        level: 1,
        constellation_level: 0,
        current_exp: 0,
        current_health: 1, //! CHANGE THIS WITH VALUE FROM CHARACTER CONSTANTS
        equipped_item: "", //! Make this a reference to the inventory value when changed with command
    },
    weaponInitialState: {
        rank: 1,
        level: 1,
        stored_exp: 0,
        isEquipped: "",
    },
    characters6Star: characters6Star,
    characters5Star: characters5Star,
    characters4Star: characters4Star,
    generalBanner6Star: generalBanner6Star,
    generalBanner5Star: generalBanner5Star,
    generalBanner4Star: generalBanner4Star,
    generalBanner4StarCharacters: generalBanner4StarCharacters,
    generalBanner4StarWeapons: generalBanner4StarWeapons,
    kleeBanner5Star: kleeBanner5Star,
    weapons5Star: weapons5Star,
    weapons4Star: weapons4Star,
    weapons3Star: weapons3Star,
    weapons: allWeapons,
    characters: allCharacters,
    consumables: consumables,
}