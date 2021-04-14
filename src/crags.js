const Information = {
  name: "Information",
  h1: "Welcome to Climb Taiwan!",
  p1: "Our goal is to be your one-stop shop for everything outdoor climbing related in Taiwan.",
  p2: "Whilst there is a wealth of useful information and some excellent resources already out there, everything is in different places and can often be hard to find. Additionally, some of the most useful Taiwan climbing websites are no longer being updated. Therefore, we are working hard to bring you all of the latest information in one place.",
  p3: "Over the coming months we are hoping to add more features to the website, including the ability to create an account and log the routes you have climbed, as well as a partner finder. If you have any suggestions for other features you would like to see, or would just like to say hello, please feel free to contact us ",
  warning: "WARNING: Rock climbing is a dangerous activity. Proper safety equipment and knowledge of how to use it correctly are essential. You are ultimately responsible for your own safety. Climb Taiwan accepts no liability or responsibility for injury resulting from the use of this site.",
  imgURL: "./Images/introduction.jpg",
}

const LongDong = {
    name: "Long Dong",
    overview: "Long Dong is considered by many to be the premier climbing destination in Taiwan. Here you will find world class climbing on gorgeous sandstone sea cliffs against an atmospheric ocean backdrop. There are a huge number of established routes at Long Dong, with a good mixture of sport and traditional climbing across a wide range of grades, as well as a handful of bouldering and deep water solo (DWS) routes.",
    travel: "By Bus from Taipei: There is a direct bus (1811) departing daily at 8:50 am (every day) and 10:20 am (Saturday and Sunday only) from directly outside Taipei Main Station Exit M1. For School Gate entrance get off at Long Dong Harbour (龍洞港) bus stop. For Backdoor get off at Buddha Temple (佛祖廟). To get back to Taipei, simply take bus 791 back to Keelung and then take bus 1813 from Kuo-Kuang Bus Station (Stand No. 1) back to Taipei Main Station (or alternatively you can take a train from Keelung Station).",
    guidebook: [
      {
        text: "A copy of the Long Dong guidebook by Matt Robertson can be purchased from here:",
        url: "http://climbstone.com",
        urlText: "Rock Climbing Taiwan | 台灣龍洞攀岩"
      },
      {
        text: "There is an ongoing re-bolting project at Long Dong, testing the current bolts and replacing any old steel bolts with newer titanium bolts that are resistant to corrosion by seawater. The Long Dong re-bolting team’s website, which provides information on the status of the bolts can be accessed here:",
        url: "https://longdong.climbio.org",
        urlText: "Climbio"
      },
      {
        text: "Please also refer to the Taiwan Outdoor Climber’s Coalition website for the latest safety information and accident reports for Long Dong:",
        url: "https://www.tocc-climbing.org/ld-safety-information",
        urlText: "Taiwan Outdoor Climber’s Coalition"
      }
    ],
    mapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14451.275212940061!2d121.9205135!3d25.1079943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d439fc992c2d7%3A0x539f17e22ef63038!2sDragon%20Caves!5e0!3m2!1sen!2stw!4v1617077890107!5m2!1sen!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    mobileMapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14451.275212940061!2d121.9205135!3d25.1079943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d439fc992c2d7%3A0x539f17e22ef63038!2sDragon%20Caves!5e0!3m2!1sen!2stw!4v1617078560727!5m2!1sen!2stw" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    imgURL: "./Images/longDong.jpg",
    totalClimbs: 563,
    rocks: [
        {
            name: "Back Door - B1",
            routes: [
                {
                  "name": "Bo",
                  "rating": 5.7,
                  "style": "Boulder"
                },
                {
                  "name": "Po",
                  "rating": 5.5,
                  "style": "Boulder"
                },
                {
                  "name": "Mo",
                  "rating": 5.6,
                  "style": "Boulder"
                },
                {
                  "name": "Fo",
                  "rating": 5.7,
                  "style": "Boulder"
                },
                {
                  "name": "Do",
                  "rating": 5.8,
                  "style": "Boulder"
                },
                {
                  "name": "To",
                  "rating": "5.10b",
                  "style": "Boulder"
                },
                {
                  "name": "Grass Hat Sister-In-Law",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "Elder Dragon Blues",
                  "rating": "5.10a",
                  "style": "Top Rope"
                },
                {
                  "name": "Southern Arete",
                  "rating": 5.8,
                  "style": "Top Rope"
                },
                {
                  "name": "Easy Dihedral",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Under The Staircase",
                  "rating": 5.6,
                  "style": "Sport"
                },
                {
                  "name": "Into Thin Air",
                  "rating": "5.10c",
                  "style": "Sport"
                },
                {
                  "name": "Watch Your Step",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Back Door Man",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Hell Night",
                  "rating": "5.12d",
                  "style": "Trad"
                },
                {
                  "name": "RCC",
                  "rating": "5.11d",
                  "style": "Trad"
                },
                {
                  "name": "Jeff",
                  "rating": "5.11a",
                  "style": "Trad"
                },
                {
                  "name": "Sidestep",
                  "rating": "5.10a",
                  "style": "Sport"
                },
                {
                  "name": "Another Overhang",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Jeff's RP Crack",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Slab, Eh",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "Cresting Wave",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Slabby",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Slab Sea",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Slab Dee",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Flying Teeth",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Water Heater Route",
                  "rating": 5.8,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Back Door - Basement Steps",
              routes: [
                {
                  "name": "Mirrored Vee",
                  "rating": 5.9,
                  "style": "Boulder"
                },
                {
                  "name": "Crackface",
                  "rating": 5.9,
                  "style": "Boulder"
                },
                {
                  "name": "Dihedral Fifty-Five",
                  "rating": 5.5,
                  "style": "Boulder"
                },
                {
                  "name": "Sickle",
                  "rating": 5.7,
                  "style": "Boulder"
                },
                {
                  "name": "Hanging Arete",
                  "rating": "5.10b",
                  "style": "Boulder"
                },
                {
                  "name": "Boulder Project",
                  "rating": "5.13a",
                  "style": "Boulder"
                },
                {
                  "name": "Two-Faced",
                  "rating": "5.11b",
                  "style": "Boulder"
                },
                {
                  "name": "Cheating Fists",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Backdoor Fistcrack",
                  "rating": "5.10d",
                  "style": "Trad"
                },
                {
                  "name": "Face",
                  "rating": 5.8,
                  "style": "Top Rope"
                },
                {
                  "name": "Scramble",
                  "rating": 5.4,
                  "style": "Boulder"
                },
                {
                  "name": "Lowdown",
                  "rating": 5.4,
                  "style": "Boulder"
                },
                {
                  "name": "Lakeside",
                  "rating": 5.5,
                  "style": "Boulder"
                },
              ]
            },
            {
              name: "Back Door Basement",
              routes: [
                {
                  "name": "Dragon Pole",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Cellar Dweller",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Don't Cross The Line",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Basement Corner",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "Olive Branch",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Who Fooled Who?",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Vita",
                  "rating": "5.11d",
                  "style": "Sport"
                },
                {
                  "name": "Yum Yum",
                  "rating": "5.11b",
                  "style": "Trad"
                },
                {
                  "name": "Everybody's Welfare",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Incomparable",
                  "rating": "5.13a",
                  "style": "Sport"
                },
                {
                  "name": "Xiao Ao Jiang Hu",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "Open Project",
                  "rating": "5.14a",
                  "style": "Sport"
                },
                {
                  "name": "Phantom Fright",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "High Class Quickdraw",
                  "rating": "5.10d",
                  "style": "Sport"
                },
                {
                  "name": "Mantel",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "Twisting",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Good Guy A-Lang",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "One Tough Move",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Redhead",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Coach Demonstrates",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "Big Rock Falling",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Dragon with Matches",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Harley-Davidson",
                  "rating": "5.10d",
                  "style": "Sport"
                },
                {
                  "name": "Motorcycle",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "New Ferrari",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Just Five-Thirteen",
                  "rating": "5.10b",
                  "style": "Sport"
                },
                {
                  "name": "Cowboy Arete",
                  "rating": "5.10a",
                  "style": "Sport"
                },
                {
                  "name": "Rodeo Clown",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Loose on the Town",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Crabwalk",
                  "rating": "5.11d",
                  "style": "Sport"
                },
                {
                  "name": "Hsiao Shiang's Third Strike",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "Basement Traverse",
                  "rating": "5.10c",
                  "style": "Boulder"
                },
              ]
            },
            {
              name: "Back Door - Old Man Wall",
              routes: [
                {
                  "name": "Hermit Crab",
                  "rating": 5.9,
                  "style": "Sport"
                },
                {
                  "name": "Hermit Crab P2",
                  "rating": 5.9,
                  "style": "Sport"
                },
                {
                  "name": "Hey Hey Hey",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Lion Queen",
                  "rating": "5.10c",
                  "style": "Sport"
                },
                {
                  "name": "Lion Queen P2",
                  "rating": 5.7,
                  "style": "Sport"
                },
                {
                  "name": "Lava Tube",
                  "rating": "5.10d",
                  "style": "Sport"
                },
                {
                  "name": "Bird's Nest",
                  "rating": "5.10d",
                  "style": "Sport"
                },
                {
                  "name": "Eagle's Aerie",
                  "rating": "5.10b",
                  "style": "Sport"
                },
                {
                  "name": "Straight Up",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Napolean's Reach",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "Taller Reach",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "Eagle Undercling",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "Marry the Empress – Direct Start Variation",
                  "rating": 5.13,
                  "style": "Sport"
                },
                {
                  "name": "Marry the Empress",
                  "rating": "5.12d",
                  "style": "Sport"
                },
                {
                  "name": "Who's Afraid of Whom",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "Ambiguous",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "Dyspraxia",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "Best Performer",
                  "rating": "5.13b",
                  "style": "Sport"
                },
              ]
            },
            {
              name: "Back Door - Crocodile Cape",
              routes: [
                {
                  "name": "Unknown",
                  "rating": "5.10d",
                  "style": "Trad"
                },
                {
                  "name": "Three-Legged Dog",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Show Them Your Best",
                  "rating": "5.10a",
                  "style": "Top Rope"
                },
                {
                  "name": "Deep Thought",
                  "rating": "5.12c",
                  "style": "Top Rope"
                },
                {
                  "name": "Rock and a Hard Place",
                  "rating": "5.11d",
                  "style": "Top Rope"
                },
                {
                  "name": "Shi Hsing Da Fa",
                  "rating": "5.11c",
                  "style": "Top Rope"
                },
                {
                  "name": "Sky Blue Sky",
                  "rating": "5.10b",
                  "style": "Top Rope"
                },
              ]
            },
            {
              name: "Back Door - P.O. Wall",
              routes: [
                {
                  "name": "Perfectly Overhung",
                  "rating": "5.10d",
                  "style": "Trad"
                },
                {
                  "name": "Dragon Pool",
                  "rating": 5.7,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Golden Valley - The Cathouse",
              routes: [
                {
                  "name": "Lap Dance",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Rastafarian Seabirds",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Dangerous Games",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Stalker",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Psycho Killer",
                  "rating": "5.11d",
                  "style": "Trad"
                },
                {
                  "name": "BA Insanity",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Cunning Linguist",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Love You Long Time",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Fillet Show",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Happy Endings",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "The Cat's Away",
                  "rating": 5.9,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Golden Valley - Catwalk",
              routes: [
                {
                  "name": "Catfight",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Catapult",
                  "rating": "5.10b",
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Golden Valley South - Euro Wall",
              routes: [
                {
                  "name": "Ocean's Eleven",
                  "rating": "5.10c",
                  "style": "Sport"
                },
                {
                  "name": "Wet and Hairy",
                  "rating": "5.11b",
                  "style": "Sport"
                },
                {
                  "name": "Bi Color",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Let's Do the Trad",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Prelude",
                  "rating": 5.5,
                  "style": "Sport"
                },
                {
                  "name": "Climax",
                  "rating": "5.10c",
                  "style": "Sport"
                },
                {
                  "name": "Come Again",
                  "rating": "5.10b",
                  "style": "Sport"
                },
                {
                  "name": "Tanz in Den Mai",
                  "rating": "5.10c",
                  "style": "Sport"
                },
                {
                  "name": "Tofu Tower",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Snake Alley",
                  "rating": "5.10b",
                  "style": "Sport"
                },
                {
                  "name": "Tangerine Trip",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Orange Juice",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Great Pumpkin",
                  "rating": "5.11c",
                  "style": "Sport"
                },
              ]
            },
            {
              name: "Golden Valley South - Golden Wall",
              routes: [
                {
                  "name": "Cold Sushi",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Pearl Necklace",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Bring the Betel Nut",
                  "rating": "5.12b",
                  "style": "Trad"
                },
                {
                  "name": "Goldline",
                  "rating": "5.11a",
                  "style": "Trad"
                },
                {
                  "name": "Golden Shower",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Goldenrod",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Goldmember",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Gold Club",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Golddigger",
                  "rating": "5.10b",
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Golden Valley South - Black Wall",
              routes: [
                {
                  "name": "Nugget",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Glitter",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "YumYum Slab",
                  "rating": "5.10d",
                  "style": "Trad"
                },
                {
                  "name": "White-Faced Man",
                  "rating": "5.11b",
                  "style": "Sport"
                },
                {
                  "name": "Black-Faced Man",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "West Coast",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "I Love Taiwan",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "East Coast",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Black Gold",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Black & Tan",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Black Magic Woman",
                  "rating": "5.10b",
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Golden Valley Central - Legend Wall",
              routes: [
                {
                  "name": "Just Dyno",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "Conditional Reality",
                  "rating": "5.11b",
                  "style": "Sport"
                },
                {
                  "name": "TC Route",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Thierry",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Golden Legend",
                  "rating": "5.13d",
                  "style": "Sport"
                },
                {
                  "name": "The Real Legend",
                  "rating": "5.13a",
                  "style": "Sport"
                },
                {
                  "name": "Mr. Anonymous",
                  "rating": "5.11d",
                  "style": "Sport"
                },
                {
                  "name": "Inconvenient",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Very Inconvenient",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Convenient",
                  "rating": 5.9,
                  "style": "Sport"
                },
              ]
            },
            {
              name: "Golden Valley Central - Bikini Cave",
              routes: [
                {
                  "name": "No Time to Wait",
                  "rating": "5.13a",
                  "style": "Sport"
                },
                {
                  "name": "Chockstone",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Kevlar Vest",
                  "rating": "5.10d",
                  "style": "Trad"
                },
                {
                  "name": "String Bikini",
                  "rating": "5.11a",
                  "style": "Trad"
                },
                {
                  "name": "Banana Hammock",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Latex Cap",
                  "rating": 5.8,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Golden Valley - Tower Wall",
              routes: [
                {
                  "name": "Dihedral",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Gold",
                  "rating": "5.11d",
                  "style": "Trad"
                },
                {
                  "name": "Orange Peel",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Warmup II",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Warmup I",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Entrance Eight",
                  "rating": 5.8,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Golden Valley Entrance - Dragon Boat Wall",
              routes: [
                {
                  "name": "Around the Corner",
                  "rating": 5.9,
                  "style": "Sport"
                },
                {
                  "name": "Teamwork",
                  "rating": "5.10c",
                  "style": "Sport"
                },
                {
                  "name": "Aus der Traum",
                  "rating": "5.10b",
                  "style": "Sport"
                },
                {
                  "name": "Aus der Traum (Variation Start)",
                  "rating": "5.10d",
                  "style": "Sport"
                },
                {
                  "name": "Yosemite Crack",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Never",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Dragon's Back",
                  "rating": "5.10b",
                  "style": "Sport"
                },
                {
                  "name": "One Fine Rainy Day",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Dripping Dragon",
                  "rating": 5.7,
                  "style": "Sport"
                },
                {
                  "name": "Smutje",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "Dragon's Nose",
                  "rating": 5.8,
                  "style": "Sport"
                },
                {
                  "name": "Quartzriss",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "One Fine Sunny Day",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "Stay on the Dragon's Face",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Stephan's Size 13 Shoes",
                  "rating": 5.5,
                  "style": "Sport"
                },
              ]
            },
            {
              name: "Golden Valley Entrance - Lost Dragon Spire",
              routes: [
                {
                  "name": "Notch",
                  "rating": 5.6,
                  "style": "Sport"
                },
                {
                  "name": "Lasso",
                  "rating": 5.7,
                  "style": "Sport"
                },
                {
                  "name": "Baby Dragon",
                  "rating": 5.4,
                  "style": "Sport"
                },
                {
                  "name": "Cercatori d'emozioni",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Twin Cracks",
                  "rating": 5.5,
                  "style": "Sport"
                },
                {
                  "name": "Matt's Idea",
                  "rating": "5.11c",
                  "style": "Trad"
                },
                {
                  "name": "Squirrel Lust",
                  "rating": "5.11d",
                  "style": "Sport"
                },
                {
                  "name": "Cima Grande",
                  "rating": "5.11d",
                  "style": "Sport"
                },
                {
                  "name": "South Face",
                  "rating": 5.6,
                  "style": "Sport"
                },
              ]
            },
            {
              name: "Second Cave - Back Porch",
              routes: [
                {
                  "name": "Wei Bin's Route",
                  "rating": "5.11c",
                  "style": "Trad"
                },
                {
                  "name": "Koala Bear",
                  "rating": "5.10d",
                  "style": "Trad"
                },
                {
                  "name": "Yum Yum's Hard Work",
                  "rating": "5.13b",
                  "style": "Trad"
                },
                {
                  "name": "Back Porch Saloon",
                  "rating": "5.12c",
                  "style": "Trad"
                },
                {
                  "name": "Taiwan Down Amigo",
                  "rating": "5.12c",
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Second Cave - Sunshine Wall",
              routes: [
                {
                  "name": "Dinosaur",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Ragged Robin",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Operation Odyssey Down",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "Purple People Eater",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "Sunshine Daydream",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Sunshine Overhang",
                  "rating": 5.9,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Second Cave - Entrance Cracks",
              routes: [
                {
                  "name": "Crack a Smile",
                  "rating": "5.11c",
                  "style": "Trad"
                },
                {
                  "name": "Hammer Time",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Stone Age",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Manic Crack",
                  "rating": "5.11b",
                  "style": "Trad"
                },
                {
                  "name": "Face Off",
                  "rating": "5.11c",
                  "style": "Trad"
                },
                {
                  "name": "Manic Crack II",
                  "rating": "5.12a",
                  "style": "Trad"
                },
                {
                  "name": "Left Arch",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Have a Leg",
                  "rating": "5.12d",
                  "style": "Sport"
                },
                {
                  "name": "Zhong Jiang Soup",
                  "rating": "5.11c",
                  "style": "Sport"
                },
              ]
            },
            {
              name: "Second Cave - Rain Wall",
              routes: [
                {
                  "name": "Lucky Streaks",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Keep Your Powder Dry",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Grotto",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Box of Rain",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Rain Dance",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Rain on My Parade",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "Singing in the Rain",
                  "rating": 5.5,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Second Cave - Cave Rock",
              routes: [
                {
                  "name": "CRE1",
                  "rating": "5.11d",
                  "style": "Trad"
                },
                {
                  "name": "CRE2",
                  "rating": "5.10d",
                  "style": "Trad"
                },
                {
                  "name": "Stepcrack Chimney",
                  "rating": 5.4,
                  "style": "Trad"
                },
                {
                  "name": "Gator Skin",
                  "rating": 5.5,
                  "style": "Trad"
                },
                {
                  "name": "RightFacing Dihedral",
                  "rating": 5.4,
                  "style": "Trad"
                },
                {
                  "name": "Cave Rock Handcrack",
                  "rating": 5.5,
                  "style": "Trad"
                },
                {
                  "name": "Slabby OW",
                  "rating": 5.5,
                  "style": "Trad"
                },
                {
                  "name": "Small Pillar-Right Side",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "Breezy",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Westbound Road",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Ancient Wind",
                  "rating": "5.11c",
                  "style": "Trad"
                },
                {
                  "name": "Old Tree",
                  "rating": "5.11a",
                  "style": "Trad"
                },
                {
                  "name": "One Floor Down",
                  "rating": "5.12d",
                  "style": "Trad"
                },
                {
                  "name": "The Crow",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Crack Line",
                  "rating": "5.11c",
                  "style": "Trad"
                },
                {
                  "name": "Hornet's Nest",
                  "rating": "5.11a",
                  "style": "Trad"
                },
                {
                  "name": "The Desert",
                  "rating": "5.12d",
                  "style": "Trad"
                },
                {
                  "name": "Muddy Undercling",
                  "rating": "5.10c",
                  "style": "Trad"
                },
              ]
            },
            {
              name: "First Cave - Headwall",
              routes: [
                {
                  "name": "Taipei Flower",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "Building on the Building",
                  "rating": "5.12a",
                  "style": "Sport"
                },
              ]
            },
            {
              name: "First Cave - South End",
              routes: [
                {
                  "name": "Agar Jelly",
                  "rating": "5.10b",
                  "style": "Sport"
                },
                {
                  "name": "Family Route",
                  "rating": "5.11d",
                  "style": "Sport"
                },
                {
                  "name": "Papa Carry Kid",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "The Music is Over (And the People Are Gone)",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Climbing is Great",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Climbing is Good",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "Going to Hokkaido",
                  "rating": "5.12a",
                  "style": "Sport"
                },
              ]
            },
            {
              name: "First Cave - West Wall",
              routes: [
                {
                  "name": "The Ramp",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "The Ramp Flake",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Wonderland Fairy",
                  "rating": "5.10b",
                  "style": "Sport"
                },
                {
                  "name": "Genesis",
                  "rating": "5.12d",
                  "style": "Sport"
                },
                {
                  "name": "Twilight Crack",
                  "rating": "5.11b",
                  "style": "Sport"
                },
                {
                  "name": "New World",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Bird of Paradise",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "Crow",
                  "rating": "5.13a",
                  "style": "Sport"
                },
                {
                  "name": "Sandwich",
                  "rating": "5.12c",
                  "style": "Sport"
                },
              ]
            },
            {
              name: "First Cave - Northeast Wall",
              routes: [
                {
                  "name": "Mantou Double Crack",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Long March",
                  "rating": "5.14a",
                  "style": "Sport"
                },
                {
                  "name": "Duet",
                  "rating": "5.13a",
                  "style": "Sport"
                },
                {
                  "name": "Three Days 30 Meters",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Pigeon",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "Endless",
                  "rating": "5.12d",
                  "style": "Sport"
                },
                {
                  "name": "Hug the Tree",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "Overhand Arete",
                  "rating": "5.14b",
                  "style": "Sport"
                },
                {
                  "name": "Skipping Work",
                  "rating": "5.13a",
                  "style": "Sport"
                },
                {
                  "name": "National Day",
                  "rating": "5.13c",
                  "style": "Sport"
                },
                {
                  "name": "October Ten",
                  "rating": "5.13b",
                  "style": "Sport"
                },
                {
                  "name": "Up and Up",
                  "rating": "5.12d",
                  "style": "Sport"
                },
                {
                  "name": "Bin Lang Road",
                  "rating": "5.12b",
                  "style": "Sport"
                },
              ]
            },
            {
              name: "First Cave - Outer Wall",
              routes: [
                {
                  "name": "Valentine's Gift",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Heart-Shaped Rice Cake",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "Black Heart's Pig Blood",
                  "rating": "5.11d",
                  "style": "Sport"
                },
                {
                  "name": "Good Morning Long Dong",
                  "rating": "5.12b",
                  "style": "Sport"
                },
              ]
            },
            {
              name: "First Cave - Lower Dragon Ridge",
              routes: [
                {
                  "name": "Sorry Erica",
                  "rating": "5.10a",
                  "style": "Sport"
                },
                {
                  "name": "Happy Valentine's Day",
                  "rating": "5.10a",
                  "style": "Sport"
                },
                {
                  "name": "Wilson Overhang",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Fen Yuan Trap",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Heaven's Falling",
                  "rating": 5.9,
                  "style": "Sport"
                },
                {
                  "name": "Deceiving Arete",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Lower Commissary",
                  "rating": "5.10a",
                  "style": "Sport"
                },
                {
                  "name": "Commissary Crack",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Reggae",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Calypso",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Clean Face",
                  "rating": "5.12d",
                  "style": "Sport"
                },
                {
                  "name": "Walkway",
                  "rating": "5.11b",
                  "style": "Sport"
                },
                {
                  "name": "Noodle Line",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "History",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "Dragon Arete",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Tough Kids and Power Tools",
                  "rating": 5.6,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "First Cave - Yellow Wall",
              routes: [
                {
                  "name": "La La La",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Floweret",
                  "rating": "5.11d",
                  "style": "Sport"
                },
                {
                  "name": "Grass",
                  "rating": "5.10a",
                  "style": "Sport"
                },
                {
                  "name": "Kimchi",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Dumplings in Spicy Sauce",
                  "rating": "5.10d",
                  "style": "Sport"
                },
                {
                  "name": "Yunnan Thin Slice",
                  "rating": "5.11d",
                  "style": "Sport"
                },
                {
                  "name": "Taiwan Rechao",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Notebook",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Wisteria",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Cape to the Sky",
                  "rating": "5.10d",
                  "style": "Sport"
                },
              ]
            },
            {
              name: "Grand Auditorium - Upper Dragon Ridge",
              routes: [
                {
                  "name": "Upper Dragon Ridge",
                  "rating": 5.7,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Grand Auditorium - South Side (Dragon Ridge North)",
              routes: [
                {
                  "name": "Dragon Ridge Left",
                  "rating": 5.4,
                  "style": "Trad"
                },
                {
                  "name": "Dragon Ridge Center",
                  "rating": 5.5,
                  "style": "Trad"
                },
                {
                  "name": "Dragon Ridge Right",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "Junk Slab",
                  "rating": 5.7,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Grand Auditorium - Great Slab",
              routes: [
                {
                  "name": "Two-timer",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Think Crack",
                  "rating": "5.11c",
                  "style": "Trad"
                },
                {
                  "name": "Secret Switch",
                  "rating": "5.10d",
                  "style": "Trad"
                },
                {
                  "name": "Womb",
                  "rating": "5.11d",
                  "style": "Trad"
                },
                {
                  "name": "Face the Wall",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "Canaleta",
                  "rating": 5.4,
                  "style": "Trad"
                },
                {
                  "name": "Great Slab Dihedral",
                  "rating": 5.6,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Grand Auditorium - West Wall",
              routes: [
                {
                  "name": "Pure Filippino",
                  "rating": "5.11b",
                  "style": "Trad"
                },
                {
                  "name": "The Great Roof",
                  "rating": "5.13b",
                  "style": "Trad"
                },
                {
                  "name": "Ten",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Freedom Crack",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Topout",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Giza Flake",
                  "rating": 5.9,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Grand Auditorium - Verdon Wall",
              routes: [
                {
                  "name": "Boundless Sea and Sky",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "Bastille Day",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Arupa",
                  "rating": "5.10d",
                  "style": "Sport"
                },
                {
                  "name": "Upside Down",
                  "rating": "5.11d",
                  "style": "Sport"
                },
                {
                  "name": "No Class Today",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Verdon du Taiwan",
                  "rating": "5.10b",
                  "style": "Sport"
                },
                {
                  "name": "Provence Roof",
                  "rating": "5.11a",
                  "style": "Sport"
                },
              ]
            },
            {
              name: "Grand Auditorium - Dragon Point Buttress",
              routes: [
                {
                  "name": "Via del Drago",
                  "rating": "5.10c",
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Music Hall - Broken Faces (South Face)",
              routes: [
                {
                  "name": "Fat Cow",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "Skinny Horse",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Straight Up",
                  "rating": "5.12b",
                  "style": "Trad"
                },
                {
                  "name": "Last Overhang",
                  "rating": "5.11d",
                  "style": "Trad"
                },
                {
                  "name": "Last Huge Wall",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Indistinct",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Nose Crack",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "The Third Nose",
                  "rating": "5.11d",
                  "style": "Trad"
                },
                {
                  "name": "Ti Spacco la Faccia",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Direct Attempt",
                  "rating": "5.11d",
                  "style": "Sport"
                },
                {
                  "name": "Nancy's Attempt",
                  "rating": "5.11d",
                  "style": "Sport"
                },
                {
                  "name": "Steal Your Face",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Three Right Feet",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Right Feet Direttissima",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Big Nose Valentino",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Big Nose Right",
                  "rating": 5.9,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Music Hall - Left Face",
              routes: [
                {
                  "name": "Comeback Crack",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Comeback Arete",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Come Back",
                  "rating": "5.10a",
                  "style": "Sport"
                },
                {
                  "name": "Henchman",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Hubble",
                  "rating": "5.12c",
                  "style": "Trad"
                },
                {
                  "name": "Reluctant",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Don't be Reluctant",
                  "rating": "5.10d",
                  "style": "Trad"
                },
                {
                  "name": "Marmolada",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "White Arete",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Seaside Tea",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Lento",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Undercling Jam",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Pyramid",
                  "rating": 5.8,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Music Hall - Main Face",
              routes: [
                {
                  "name": "Musical Chimney",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "ROC",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "ROK",
                  "rating": "5.11d",
                  "style": "Trad"
                },
                {
                  "name": "Super Face",
                  "rating": "5.13b",
                  "style": "Trad"
                },
                {
                  "name": "Rocket",
                  "rating": "5.11d",
                  "style": "Trad"
                },
                {
                  "name": "Bird Man",
                  "rating": "5.12a",
                  "style": "Trad"
                },
                {
                  "name": "Composure",
                  "rating": "5.10a",
                  "style": "Sport"
                },
                {
                  "name": "The Nut Pitch",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Broad Chimney",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Fucking Fall",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Long Fatang",
                  "rating": "5.11d",
                  "style": "Trad"
                },
                {
                  "name": "Big Drum",
                  "rating": "5.11b",
                  "style": "Sport"
                },
                {
                  "name": "Fustration",
                  "rating": "5.10c",
                  "style": "Sport"
                },
                {
                  "name": "Fingercrack",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Musical Arete",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "Chimney Connector",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "Traffic Jam Traverse",
                  "rating": "5.11c",
                  "style": "Sport"
                },
              ]
            },
            {
              name: "Music Hall - North Face",
              routes: [
                {
                  "name": "The Eighth Eleven",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Seven-Eleven-A",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Seven-Eleven-B",
                  "rating": "5.11b",
                  "style": "Sport"
                },
                {
                  "name": "Seven-Eleven-C",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Seven-Eleven-D",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Seven-Eleven-E",
                  "rating": "5.11b",
                  "style": "Sport"
                },
                {
                  "name": "Seven-Eleven-F",
                  "rating": "5.11b",
                  "style": "Sport"
                },
                {
                  "name": "Seven-Eleven-G",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Wedding Route",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Northeast Coast",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "B2G Traverse",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "Seven Eleven Traverse",
                  "rating": "5.12c",
                  "style": "Sport"
                },
                {
                  "name": "Great Wall Traverse",
                  "rating": "5.13a",
                  "style": "Sport"
                },
                {
                  "name": "Small Triangle",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Big Triangle",
                  "rating": "5.11d",
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Music Hall - Recital Hall",
              routes: [
                {
                  "name": "RH1",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "RH2",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "RH3",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "RH4",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "RH5",
                  "rating": 5.3,
                  "style": "Trad"
                },
                {
                  "name": "Small Violin",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Chinese Fiddle",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Devil's Challenge",
                  "rating": "5.13b",
                  "style": "Trad"
                },
                {
                  "name": "Stagehand",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Backdrop",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Chinese Fiddle Roofs",
                  "rating": "5.10c",
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Music Hall - Balcony",
              routes: [
                {
                  "name": "Balcony Dihedral",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Balcony Seven",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Balcony Cruise",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Balcony Party",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Yum Yum Sky Wall 4",
                  "rating": "5.11d",
                  "style": "Sport"
                },
                {
                  "name": "Yum Yum Sky Wall 3",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "Yum Yum Sky Wall 2",
                  "rating": "5.11b",
                  "style": "Sport"
                },
                {
                  "name": "Yum Yum Sky Wall 1",
                  "rating": "5.11a",
                  "style": "Sport"
                },
              ]
            },
            {
              name: "Music Hall - Whale's Head",
              routes: [
                {
                  "name": "Harmless Slab",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Harmless Corner",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Harmless Horror",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Harmless Shield",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Peaceful Sword",
                  "rating": "5.12a",
                  "style": "Trad"
                },
                {
                  "name": "Shield",
                  "rating": "5.11b",
                  "style": "Trad"
                },
                {
                  "name": "Sword",
                  "rating": "5.12a",
                  "style": "Trad"
                },
                {
                  "name": "Easy Dick",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Moby Dick",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Mural Wall",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Captain Arab",
                  "rating": "5.11a",
                  "style": "Trad"
                },
                {
                  "name": "Call me Ishmael",
                  "rating": 5.5,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Long Lane - Bulliten Board",
              routes: [
                {
                  "name": "Edge of the Universe",
                  "rating": "5.10d",
                  "style": "Trad"
                },
                {
                  "name": "Black Hole Left",
                  "rating": "5.11a",
                  "style": "Trad"
                },
                {
                  "name": "Black Hole",
                  "rating": "5.11d",
                  "style": "Trad"
                },
                {
                  "name": "Sky Ladder Dihedral",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Sky Ladder",
                  "rating": "5.10b",
                  "style": "Sport"
                },
                {
                  "name": "Inconceivable",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Plausible",
                  "rating": "5.10b",
                  "style": "Sport"
                },
                {
                  "name": "Guava Banana",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Rhino Dihedral",
                  "rating": "5.11b",
                  "style": "Sport"
                },
                {
                  "name": "Golden Gate Slab",
                  "rating": 5.8,
                  "style": "Sport"
                },
                {
                  "name": "Golden Gate Roof",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "Rated R",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "Rated PG",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Rated G",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Fireman's Ladder",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Virtues on a Street Sign",
                  "rating": 5.9,
                  "style": "Sport"
                },
                {
                  "name": "Zhongxiao",
                  "rating": "5.10a",
                  "style": "Sport"
                },
                {
                  "name": "Renai",
                  "rating": "5.10b",
                  "style": "Sport"
                },
                {
                  "name": "Xinyi",
                  "rating": "5.10b",
                  "style": "Sport"
                },
                {
                  "name": "Heping",
                  "rating": "5.10c",
                  "style": "Sport"
                },
                {
                  "name": "Fear Only Fear Itself",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Birth Canal",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Reach for the Sky",
                  "rating": "5.11b",
                  "style": "Sport"
                },
                {
                  "name": "Long Lane Dihedral",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Long Lane Loose",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "In the Saddle",
                  "rating": "5.11b",
                  "style": "Trad"
                },
                {
                  "name": "Four Points Frozen",
                  "rating": "5.11d",
                  "style": "Trad"
                },
                {
                  "name": "Skyhook",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Pocket Dihedral",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Pocket Overhang",
                  "rating": "5.10a",
                  "style": "Sport"
                },
                {
                  "name": "Family",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Fifty-Two",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "A-Fei",
                  "rating": "5.12b",
                  "style": "Trad"
                },
                {
                  "name": "Long Lane Arete",
                  "rating": "5.11c",
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Long Lane - Wooden Bridge",
              routes: [
                {
                  "name": "Greenpeace",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Cross",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Once Upon a Painted Sea",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Slayer Direct",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Dragonslayer",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Dreams of White Dragons",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Bridge Eight",
                  "rating": 5.8,
                  "style": "Sport"
                },
                {
                  "name": "Golden Dihedral",
                  "rating": 5.7,
                  "style": "Sport"
                },
                {
                  "name": "Goldfinger",
                  "rating": 5.9,
                  "style": "Sport"
                },
                {
                  "name": "Supper Ballet",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "Moonbridge Traverse",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Dragonfly",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Snapdragon",
                  "rating": 5.6,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Clocktower Area - Discipline Area",
              routes: [
                {
                  "name": "Caterpillar",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Probation Officer",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Blind Reach",
                  "rating": "5.11c",
                  "style": "Trad"
                },
                {
                  "name": "Reach Around",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Trauncy",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Concave",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Highway",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Detention",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Suspended",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Eliminate",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Civil Disobedience",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Fal Buligee",
                  "rating": "5.12a",
                  "style": "Trad"
                },
                {
                  "name": "Skin Friction",
                  "rating": "5.10c",
                  "style": "Sport"
                },
                {
                  "name": "Discipline Chimney",
                  "rating": 5.6,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Clocktower Area - Pondside Wall",
              routes: [
                {
                  "name": "Albatross",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Pondside Chimney",
                  "rating": 5.5,
                  "style": "Trad"
                },
                {
                  "name": "Fish Face",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Big Green Turtle",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Tiny Blue Fish",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Sea Dogs",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Save Our Seas",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Pondside Dihedral",
                  "rating": 5.7,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Clocktower Area - Left Tower",
              routes: [
                {
                  "name": "Cockroach Nest",
                  "rating": "5.11c",
                  "style": "Trad"
                },
                {
                  "name": "Tides Rise and Fall",
                  "rating": "5.13a",
                  "style": "Trad"
                },
                {
                  "name": "Desert Number 1",
                  "rating": "5.12d",
                  "style": "Trad"
                },
                {
                  "name": "Scarface",
                  "rating": "5.11c",
                  "style": "Trad"
                },
                {
                  "name": "Indonesian",
                  "rating": "5.12a",
                  "style": "Trad"
                },
                {
                  "name": "Stars Pass Over the Sky",
                  "rating": "5.12b",
                  "style": "Trad"
                },
                {
                  "name": "One Single Cave",
                  "rating": "5.11d",
                  "style": "Trad"
                },
                {
                  "name": "Moderate Left",
                  "rating": "5.10d",
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Clocktower Area - Clocktower",
              routes: [
                {
                  "name": "South by Southwest",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Jungle Fever",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Hippie Crack",
                  "rating": "5.11a",
                  "style": "Trad"
                },
                {
                  "name": "Return Trip",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "One Way Ticket",
                  "rating": "5.10c",
                  "style": "Trad"
                },
                {
                  "name": "Hippie Ticket",
                  "rating": "5.11a",
                  "style": "Trad"
                },
                {
                  "name": "Wedding Day",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Direct East Arete",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Diagonal",
                  "rating": "5.10d",
                  "style": "Trad"
                },
                {
                  "name": "North by Northeast",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Buddha Sun Meditation",
                  "rating": "5.10d",
                  "style": "Trad"
                },
                {
                  "name": "Bomb Fuse",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Firecracker",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Northeast Buttress of Higher",
                  "rating": 5.4,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Clocktower Area - Four Presidents",
              routes: [
                {
                  "name": "Black President",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Oval Office",
                  "rating": "5.11a",
                  "style": "Trad"
                },
                {
                  "name": "Jefferson",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Monument to Presidents",
                  "rating": 5.9,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "Clocktower Area - Short Lane",
              routes: [
                {
                  "name": "Crystal Blue Temptation",
                  "rating": 5.8,
                  "style": "DWS"
                },
              ]
            },
            {
              name: "Clocktower Area - Sea Wall",
              routes: [
                {
                  "name": "Sea Urchin",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "Blue Ocean",
                  "rating": "5.12a",
                  "style": "Trad"
                },
                {
                  "name": "Green Ocean, Blue Sky",
                  "rating": "5.11c",
                  "style": "Trad"
                },
                {
                  "name": "Sea-Watching Day",
                  "rating": "5.10a",
                  "style": "Trad"
                },
              ]
            },
            {
              name: "School Gate - Disco Buttress",
              routes: [
                {
                  "name": "Television Man",
                  "rating": 5.9,
                  "style": "Trad"
                },
                {
                  "name": "Little Creature Chimney",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "V-Groove",
                  "rating": "5.10b",
                  "style": "Sport"
                },
                {
                  "name": "Man of Nowhere",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Nowhere Man",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Piranha",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Fight",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Don't Look Down",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Disco Fistcrack",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Nose Crack",
                  "rating": "5.11a",
                  "style": "Trad"
                },
                {
                  "name": "Right Disco Crack",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Triple",
                  "rating": "5.12c",
                  "style": "Trad"
                },
                {
                  "name": "Triple Cruxes",
                  "rating": "5.13b",
                  "style": "Sport"
                },
                {
                  "name": "Inimitable",
                  "rating": "5.14a",
                  "style": "Sport"
                },
                {
                  "name": "Blackface-Arete",
                  "rating": "5.11d",
                  "style": "Sport"
                },
                {
                  "name": "Obviously Tiny",
                  "rating": "5.12d",
                  "style": "Sport"
                },
                {
                  "name": "Black Corner",
                  "rating": 5.5,
                  "style": "Trad"
                },
                {
                  "name": "Warm-up Route",
                  "rating": "5.10c",
                  "style": "Sport"
                },
              ]
            },
            {
              name: "School Gate Crag - South Face",
              routes: [
                {
                  "name": "Twin Cracks",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Emerging",
                  "rating": "5.10a",
                  "style": "Trad"
                },
                {
                  "name": "Tai Ma Fan",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Stepover",
                  "rating": "5.10b",
                  "style": "Sport"
                },
                {
                  "name": "Stairway to Heaven",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Meditation",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "Ride 'em Cowboy",
                  "rating": "5.12b",
                  "style": "Sport"
                },
                {
                  "name": "Reincarnation",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Bull King Dihedral",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Oh No!",
                  "rating": "5.11c",
                  "style": "Sport"
                },
                {
                  "name": "Oh!",
                  "rating": 5.8,
                  "style": "Sport"
                },
              ]
            },
            {
              name: "School Gate Crag - East Face",
              routes: [
                {
                  "name": "Tiger's Tooth",
                  "rating": "5.11b",
                  "style": "Sport"
                },
                {
                  "name": "Surprise Crack",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Staircase",
                  "rating": 5.4,
                  "style": "Trad"
                },
                {
                  "name": "Sea Arete",
                  "rating": 5.5,
                  "style": "Trad"
                },
                {
                  "name": "Seaface Left",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "Seaface Right",
                  "rating": 5.7,
                  "style": "Trad"
                },
                {
                  "name": "Seacrack",
                  "rating": 5.7,
                  "style": "Trad"
                },
              ]
            },
            {
              name: "School Gate - Apprentice Rock",
              routes: [
                {
                  "name": "Tong Tong",
                  "rating": "5.10b",
                  "style": "Trad"
                },
                {
                  "name": "Tzuo Bi",
                  "rating": "5.11b",
                  "style": "Trad"
                },
                {
                  "name": "Fei Yan",
                  "rating": "5.11d",
                  "style": "Trad"
                },
                {
                  "name": "Choose Your Size",
                  "rating": 5.8,
                  "style": "Trad"
                },
                {
                  "name": "Baby Crack",
                  "rating": 5.6,
                  "style": "Trad"
                },
                {
                  "name": "Small Baby Crack",
                  "rating": 5.4,
                  "style": "Trad"
                },
                {
                  "name": "Last Emperor",
                  "rating": "5.11c",
                  "style": "Trad"
                },
              ]
            },
            {
              name: "School Gate - Illusion Wall",
              routes: [
                {
                  "name": "First Corner",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Above the Groove",
                  "rating": "5.11a",
                  "style": "Sport"
                },
                {
                  "name": "Final Crux",
                  "rating": "5.12a",
                  "style": "Sport"
                },
                {
                  "name": "Thinset",
                  "rating": "5.11b",
                  "style": "Trad"
                },
                {
                  "name": "Stone Z",
                  "rating": "5.11a",
                  "style": "Sport"
                }
              ]
            },
    ]
}

const ReHai = {
    name: "Re Hai",
    overview: "Re Hai is a small outcrop of volcanic rock overlooking the Xinbeitou district of Taipei. It has a distinct jungly feel with scenic views of Xinbeitou and Yangmingshan National Park from the top. There are a total of 23 documented routes, up to around 15 meters in length. All areas are in the shade until around noon. Whilst the trees do provide some cover from the sun in the afternoon, unfortunately they are also prime territory for mosquitos!",
    travel: "Re Hai is approximately a 30 minute walk from the Xinbeitou MRT station. From the MRT station, you need to walk along Guangming Road past Beitou Park (and Burger King) until you get to the Spa Sring Resort. From here, follow the road up to the right and continue walking along Wenquan Road until you reach a steep upward winding road. Follow the road round to the second bend until you arrive at a trail entrance marked by a post inscribed with red painted Chinese characters (GPS coordinates 25.135342, 121.516474). Head up the trail until you reach a large boulder and then take the path the to the right. Continue upwards and shortly after the path levels out you will arrive at the First Wall.",
    guidebook: [
      {
        text: "A guidebook called Rock Climbing Taiwan put together by Nate Ball provides useful topos of each of the routes listed below. A copy of Rock Climbing Taiwan can be accessed below. Scroll down to page 16 for the start of the Re Hai chapter.",
        url: "https://docs.google.com/document/d/18SPGo4IxsBq9iFy81ke-uDGK8QnE1L6oZCaPvV-B0Ic/edit",
        urlText: "Rock Climbing Taiwan – Nate Ball"
      }
    ],
    mapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5822.527063963946!2d121.5118703!3d25.1344678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae6822c013c3%3A0xd882b3905c2a9e81!2z5YyX5oqV54ax5rW35bKp5aC0!5e1!3m2!1sen!2stw!4v1617078782265!5m2!1sen!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    mobileMapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5822.527063963946!2d121.5118703!3d25.1344678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae6822c013c3%3A0xd882b3905c2a9e81!2z5YyX5oqV54ax5rW35bKp5aC0!5e1!3m2!1sen!2stw!4v1617078782265!5m2!1sen!2stw" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    imgURL: "./Images/ReHai.jpg",
    totalClimbs: 23,
    rocks: [
        {
            name: "First Wall",
            routes: [
                {
                    name: "Yi",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Er",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "San",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Si",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Wu",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Liu",
                    rating: 5.9,
                    style: "Sport"
                }
            ]
        },
        {
            name: "Overhang Wall",
            routes: [
                {
                    name: "Left Arete",
                    rating: 5.7,
                    style: "Sport"
                },
                {
                    name: "Layback Roof",
                    rating: 5.8,
                    style: "Sport"
                },
                {
                    name: "Dual Overhangs",
                    rating: "5.11b",
                    style: "Sport"
                },
                {
                    name: "Crack Romp",
                    rating: 5.8,
                    style: "Sport"
                },
                {
                    name: "Crack Jump",
                    rating: "5.10a",
                    style: "Sport"
                },
                {
                    name: "Gully Route",
                    rating: "5.10a",
                    style: "Sport"
                }
            ]
        },
        {
            name: "Skinny Wall",
            routes: [
                {
                    name: "Skinny Arete",
                    rating: "5.10a",
                    style: "Sport"
                },
                {
                    name: "Skinny Slab",
                    rating: 5.7,
                    style: "Sport"
                }
            ]
        },
        {
            name: "Fat Wall",
            routes: [
                {
                    name: "Fat Bulge",
                    rating: 5.5,
                    style: "Sport"
                },
                {
                    name: "Fat Jugs",
                    rating: 5.8,
                    style: "Sport"
                }
            ]
        },
        {
            name: "White-streak Wall",
            routes: [
                {
                    name: "Left Edge",
                    rating: 5.8,
                    style: "Sport"
                },
                {
                    name: "White Streak",
                    rating: "5.10b",
                    style: "Sport"
                }
            ]
        },
        {
            name: "Last Wall",
            routes: [
                {
                    name: "Chimney Face",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Crack Face",
                    rating: 5.8,
                    style: "Sport"
                },
                {
                    name: "Slab Left",
                    rating: "5.10b",
                    style: "Sport"
                },
                {
                    name: "Slab Right",
                    rating: 5.9,
                    style: "Sport"
                },
                {
                    name: "Crimpfest",
                    rating: "5.11a",
                    style: "Sport"
                }
            ]
        }
    ]
}



const BigCannonCliff = {
    name: "Big Cannon Cliff",
    overview: "Big Cannon Cliff was the first climbing area developed in Taiwan and has a row of distinctive blocky towers around 10 meters in height. The routes themselves are not bolted for sport climbing and there is little possibility for placing trad gear. However, there are bolts at the top of each of the towers, allowing most of the routes to be set up for top roping from above. Whilst the routes could be attempted as high-ball boulder boulder problems, the ground at the base of the towers is very rocky and uneven and so particular care must be taken. The style of climbing at Big Cannon Cliff is mostly crimpy technical problems, with some crack climbing.",
    travel: "The easiest way to get to Big Cannon Cliff is take the MRT to Xinbeitou Station, take Exit 1, and then cross the road to the Beitou Park bus stop opposite KFC. From there take the 230 bus to Dahuangzui (大磺嘴), which is the stop after Beitou Museum. Buses depart around every 30 minutes. It is also possible to walk to Big Cannon Cliff from Xinbeitou Station in around 45 minutes (it is useful to note that the walk back to Xinbeitou Station is downhill).  ",
    guidebook: [
      {
        text: "A very useful document prepared by Ron Heinsman provides topos of each of the routes listed below. A copy of this document can be accessed here:",
        url: "http://www.taiwanrock.50webs.com/big_cannon_cliff_guide.pdf",
        urlText: "Big Cannon Cliff Climbing & Bouldering Guide – Ron Heinsman"
      }
    ],
    mapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7223.602044300907!2d121.5177629!3d25.1424171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae6ca93b9f77%3A0x5ed3b965d43a72bc!2z5YyX5oqV5aSn56Cy5bKp5aC0!5e0!3m2!1sen!2stw!4v1617078842753!5m2!1sen!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    mobileMapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7223.602044300907!2d121.5177629!3d25.1424171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae6ca93b9f77%3A0x5ed3b965d43a72bc!2z5YyX5oqV5aSn56Cy5bKp5aC0!5e0!3m2!1sen!2stw!4v1617078842753!5m2!1sen!2stw" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    imgURL: "./Images/BigCannonCliff.jpg",
    totalClimbs: 111,
    rocks: [
        {
            name: "All Routes",
            routes: [
                {
                  "name": "Crack",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.5",
                  "style": "Top Rope"
                },
                {
                  "name": "Overhang",
                  "rating": "5.5",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.11",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.5",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.9",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.10",
                  "style": "Top Rope"
                },
                {
                  "name": "South Mountain",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "South Mountain (don’t step on arete)",
                  "rating": "5.10",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Saddle Up",
                  "rating": "5.2",
                  "style": "Top Rope"
                },
                {
                  "name": "LiangDaLung",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.11b",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.10",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.9",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.10",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Beef Steak",
                  "rating": "5.11",
                  "style": "Top Rope"
                },
                {
                  "name": "Rebecca",
                  "rating": "5.12d",
                  "style": "Top Rope"
                },
                {
                  "name": "Continue Rising",
                  "rating": "5.12d",
                  "style": "Top Rope"
                },
                {
                  "name": "Rapid Advancement",
                  "rating": "5.11d",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Face/Corner",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.5",
                  "style": "Top Rope"
                },
                {
                  "name": "Mushroom Grinder",
                  "rating": "5.10a",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "?",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "High Dive",
                  "rating": "5.11d",
                  "style": "Top Rope"
                },
                {
                  "name": "High Stance Rock Carry",
                  "rating": "5.10d",
                  "style": "Top Rope"
                },
                {
                  "name": "Overhang",
                  "rating": "5.11",
                  "style": "Top Rope"
                },
                {
                  "name": "Face/Corner",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Balance Face",
                  "rating": "5.9",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Big Chimney",
                  "rating": "5",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Sunshine Face",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Sunshine Crack",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Corner",
                  "rating": "5.5",
                  "style": "Top Rope"
                },
                {
                  "name": "Hand Plucked Chicken",
                  "rating": "5.9",
                  "style": "Top Rope"
                },
                {
                  "name": "Sunshine Overhang",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Face (don’t use horizontal cracks)",
                  "rating": "5.10",
                  "style": "Top Rope"
                },
                {
                  "name": "Parting Tune",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.4",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Crack",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Flying Bird #2",
                  "rating": "5.12d",
                  "style": "Top Rope"
                },
                {
                  "name": "Flying Bird #2 (start under the route)",
                  "rating": "5.12c",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.12a",
                  "style": "Top Rope"
                },
                {
                  "name": "Face/Corner",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Bird’s Head",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Flying Bird",
                  "rating": "5.11b",
                  "style": "Top Rope"
                },
                {
                  "name": "Flying Bird (don’t use horizontal crack)",
                  "rating": "5.11c",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "?",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Sloping Crack",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Small Chimney",
                  "rating": "5.2",
                  "style": "Top Rope"
                },
                {
                  "name": "“Red Earth”",
                  "rating": "5.11a",
                  "style": "Top Rope"
                },
                {
                  "name": "Flying Ape’s Difficult Crossing",
                  "rating": "5.11c",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.11a",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Double Ten Crack",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Ten Side Ambush",
                  "rating": "5.9",
                  "style": "Top Rope"
                },
                {
                  "name": "Ten Side Ambush (don’t use horizontal crack or hole)",
                  "rating": "5.10",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Crack to Arete",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "Crack",
                  "rating": "5.4",
                  "style": "Top Rope"
                },
                {
                  "name": "Overhang",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Overhang",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Chimney",
                  "rating": "5.4",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.5",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.11b",
                  "style": "Top Rope"
                },
                {
                  "name": "Eight-cornered Pavillion",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Dragon’s Eight Steps",
                  "rating": "5.9",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Golden Pagoda",
                  "rating": "5.10a",
                  "style": "Top Rope"
                },
                {
                  "name": "Corner & Slab",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Mushroom Grinder #2",
                  "rating": "5.10d",
                  "style": "Top Rope"
                },
                {
                  "name": "No Hole, No Hole",
                  "rating": "5.11a",
                  "style": "Top Rope"
                },
                {
                  "name": "Crack & Slab",
                  "rating": "5.2",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.3",
                  "style": "Top Rope"
                },
                {
                  "name": "The Last Overhang",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Overhang & Crack",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Overhang & Face",
                  "rating": "5.9",
                  "style": "Top Rope"
                },
                {
                  "name": "Arete/Overhang/Arete",
                  "rating": "5.10a",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.13?",
                  "style": "Top Rope"
                },
                {
                  "name": "Dihedral",
                  "rating": "5.5",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Squeeze Chimney",
                  "rating": "5.2",
                  "style": "Top Rope"
                },
                {
                  "name": "Face",
                  "rating": "5.2",
                  "style": "Top Rope"
                },
                {
                  "name": "Traverse between 11 and 13",
                  "rating": "5.6",
                  "style": "Top Rope"
                },
                {
                  "name": "Traverse between 15 and 17",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Traverse between 18 and 25",
                  "rating": "5.8",
                  "style": "Top Rope"
                },
                {
                  "name": "Traverse between 30 and 26",
                  "rating": "5.11",
                  "style": "Top Rope"
                },
                {
                  "name": "Traverse between 30 and 32",
                  "rating": "5.10",
                  "style": "Top Rope"
                },
                {
                  "name": "Traverse between 39 and 49",
                  "rating": "5.7",
                  "style": "Top Rope"
                },
                {
                  "name": "Traverse between 86 and 88",
                  "rating": "5.8",
                  "style": "Top Rope"
                }
               ]
        }
    ]
}

const GuanZiLing = {
    name: "Guan Zi Ling",
    overview: "Guan Zi Ling is a famous hot spring sightseeing area located between Jiayi (嘉義) and Tainan (台南).The climbing area is just up the road from the hot spring area and has a number of limestone walls. The ethos here is sport, with grades ranging from 5.8 up to 5.14a. Guan Zi Ling’s prime seasons are autumn and winter. Early spring depends largely on the amount of rain. Late spring and summer are generally hot, muggy and full of mosquitos.",
    travel: "Guan Zi Ling is accessible from Highway 3. Take the Baihe Exit from Highway 3, and then head East on Route 172 for around 10 mins until you reach Xian Cao Pu (仙草舖). Take a right onto Route 96 heading South, and after about 4.8 km you will pass the Bi Yun Temple (碧雲寺) on your left. Keep going uphill, and after about 1.8 km you will pass an iron gate next to a two-storey house. Keep going for another 500 meters until you arrive at a wooden railing on your right. Go through the wood railing and after 200 meters the entrance to the Ultimate Wall will be on your left hand side.",
    guidebook: [
      {
        text: "A copy of the Guan Zi Ling Guidebook by Hung-Hsiang Wang can be purchased from Alpine Direct by following the link below. Alternatively you can purchase a copy from the Red Rock Bouldering Gym in Shilin.",
        url: "http://www.alpinedirect.com.tw/ProductShow.asp?ProductID=306&KindHeadID=25",
        urlText: "Alpine Direct: Guan Zi Ling Guidebook"
      },
      {
        text: "A copy of the Guan Zi Ling Quickguide by Dom Benson can be downloaded here:",
        url: "https://drive.google.com/file/d/0BwOlAvKBJd_TWXZYbENFWXpPVjg/view",
        urlText: "Guan Zi Ling Quickguide"
      }
    ],
    mapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14654.628673892372!2d120.48207943504426!3d23.328194399999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e8d7340adbe05%3A0xdd22a977aeb95bf2!2z6Zec5a2Q5ba65bKp5aC0!5e0!3m2!1sen!2stw!4v1617682622021!5m2!1sen!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    mobileMapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14654.628673892372!2d120.48207943504426!3d23.328194399999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e8d7340adbe05%3A0xdd22a977aeb95bf2!2z6Zec5a2Q5ba65bKp5aC0!5e0!3m2!1sen!2stw!4v1617682622021!5m2!1sen!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    imgURL: "./Images/GuanZiLing.jpg",
    totalClimbs: 50,
    rocks: [
        {
          name: "Ultimate Wall",
          routes: [
            {
              "name": "The Flying Squirrel in the Field",
              "rating": "5.12c",
              "style": "Sport"
            },
            {
              "name": "The Flying Fox in Snow Mountain",
              "rating": "5.12c",
              "style": "Sport"
            },
            {
              "name": "Under the Banyan",
              "rating": "5.11b",
              "style": "Sport"
            },
            {
              "name": "The Dragon Dances in the Air",
              "rating": "5.13b",
              "style": "Sport"
            },
            {
              "name": "The Frog Prince",
              "rating": "5.12d",
              "style": "Sport"
            },
            {
              "name": "Ultimate Right",
              "rating": "5.10c",
              "style": "Sport"
            },
            {
              "name": "Ultimate Left",
              "rating": "5.11d",
              "style": "Sport"
            },
            {
              "name": "BabuBabu",
              "rating": "5.12d",
              "style": "Sport"
            },
          ]
        },
        {
          name: "Flying Boulder",
          routes: [
            {
              "name": "Meeting Daily",
              "rating": "5.10a",
              "style": "Top Rope"
            },
            {
              "name": "The Right Hand",
              "rating": "5.11a",
              "style": "Top Rope"
            },
            {
              "name": "The Left Hand",
              "rating": "5.10b",
              "style": "Top Rope"
            },
          ]
        },
        {
          name: "Assembling Field",
          routes: [
            {
              "name": "The Blue Sky",
              "rating": "5.10d",
              "style": "Sport"
            },
            {
              "name": "The Rightist",
              "rating": "5.11d",
              "style": "Sport"
            },
            {
              "name": "Ice Cream",
              "rating": "5.12a",
              "style": "Sport"
            },
            {
              "name": "A Broken Mirror Joined Together",
              "rating": "5.12a",
              "style": "Sport"
            },
            {
              "name": "The Beauty with a Mirror",
              "rating": "5.11b",
              "style": "Sport"
            },
            {
              "name": "The Spider Web",
              "rating": "5.11b",
              "style": "Sport"
            },
            {
              "name": "The Xie’s Family",
              "rating": 5.8,
              "style": "Sport"
            },
            {
              "name": "The New Driver",
              "rating": 5.6,
              "style": "Sport"
            },
            {
              "name": "Try Again",
              "rating": "5.10b",
              "style": "Sport"
            },
            {
              "name": "Unnamed",
              "rating": 5.6,
              "style": "Sport"
            },
          ]
        },
        {
          name: "Taiwan Boulder",
          routes: [
            {
              "name": "Arête",
              "rating": "5.12d",
              "style": "Sport"
            },
            {
              "name": "The Taoist Priest",
              "rating": "5.10c",
              "style": "Sport"
            },
            {
              "name": "One-Shot",
              "rating": "5.11a",
              "style": "Sport"
            },
            {
              "name": "Minority Beta",
              "rating": "5.12b",
              "style": "Sport"
            },
            {
              "name": "The Fiend Region",
              "rating": "V5",
              "style": "Boulder"
            },
            {
              "name": "Travel Around the World",
              "rating": "5.12b",
              "style": "Sport"
            },
            {
              "name": "The Taiwan Around Trip",
              "rating": "5.10c",
              "style": "Sport"
            },
            {
              "name": "Seek Shelter from China",
              "rating": "5.12a",
              "style": "Sport"
            },
            {
              "name": "The Hopping Tactic",
              "rating": "5.12b",
              "style": "Sport"
            },
          ]
        },
        {
          name: "Mysterious Valley",
          routes: [
            {
              "name": "The Thumb",
              "rating": 5.6,
              "style": "Sport"
            },
            {
              "name": "The Ring Finger",
              "rating": 5.6,
              "style": "Sport"
            },
            {
              "name": "The Right Ear",
              "rating": "5.10a",
              "style": "Sport"
            },
            {
              "name": "The Left Ear",
              "rating": "5.10b",
              "style": "Sport"
            },
            {
              "name": "One Rigid Finger",
              "rating": "5.11b",
              "style": "Sport"
            },
            {
              "name": "The Beautiful Snake",
              "rating": "5.10d",
              "style": "Sport"
            },
            {
              "name": "The Nostril",
              "rating": "5.10c",
              "style": "Sport"
            },
            {
              "name": "The Bridge of the Nose",
              "rating": "5.11c",
              "style": "Sport"
            },
            {
              "name": "Pain",
              "rating": "5.10b",
              "style": "Sport"
            },
            {
              "name": "Fear",
              "rating": "5.12c",
              "style": "Sport"
            },
          ]
        },
        {
          name: "Doucilin",
          routes: [
            {
              "name": "The White Tiger",
              "rating": "5.11d",
              "style": "Sport"
            },
            {
              "name": "Chicken Rice",
              "rating": "5.12d",
              "style": "Sport"
            },
            {
              "name": "Project",
              "rating": "5.14a",
              "style": "Sport"
            },
            {
              "name": "The Phoenix out of Fire",
              "rating": "5.13a",
              "style": "Sport"
            },
            {
              "name": "The Little Bee",
              "rating": "5.12c",
              "style": "Sport"
            },
            {
              "name": "The Pathway to Paradise",
              "rating": "5.12c",
              "style": "Sport"
            },
            {
              "name": "The Square Cookie",
              "rating": "5.12d",
              "style": "Sport"
            },
            {
              "name": "One Hand Clip",
              "rating": "5.12b",
              "style": "Sport"
            },
            {
              "name": "The White Ghost",
              "rating": "5.10c",
              "style": "Sport"
            },
            {
              "name": "The Black Ghost",
              "rating": "5.10d",
              "style": "Sport"
            }
          ]
        },
      ]
}

const ShouShan = {
    name: "Shou Shan",
    overview: "Shou Shan is a limestone mountain located in a nature park to the north of Kaohsiung city. The nature park contains a number of different climbing areas, many of which are in narrow valleys with high walls on both sides which provide lots of shade. The climbs here are almost exclusively bolted sport routes on densely pocketed overhanging walls with the occasional drippy feature. Since most of the climbing areas are collapsed cave features, the lower portions of the walls often retain moisture, making them slick to the touch after long wet periods. The winter typically brings weeks of sunshine and lower temperatures. Please be mindful that the nature park, while aware of the climbing activity, has no official management plan. Access could be denied at any time. For the latest information regarding access or to find climbing partners, please refer to the Facebook group below.",
    travel: "Shou Shan is a limestone mountain located in a nature park to the north of Kaohsiung city. The nature park contains a number of different climbing areas, many of which are in narrow valleys with high walls on both sides which provide lots of shade. The climbs here are almost exclusively bolted sport routes on densely pocketed overhanging walls with the occasional drippy feature. Since most of the climbing areas are collapsed cave features, the lower portions of the walls often retain moisture, making them slick to the touch after long wet periods. The winter typically brings weeks of sunshine and lower temperatures. Please be mindful that the nature park, while aware of the climbing activity, has no official management plan. Access could be denied at any time. For the latest information regarding access or to find climbing partners, please refer to the Facebook group below.",
    guidebook: [
      {
        text: "A guidebook called Rock Climbing Taiwan put together by Nate Ball provides useful topos of each of the routes listed below. A copy of Rock Climbing Taiwan can be accessed below. Scroll down to page 23 for the start of the Shou Shan chapter.",
        url: "https://docs.google.com/document/d/18SPGo4IxsBq9iFy81ke-uDGK8QnE1L6oZCaPvV-B0Ic/edit",
        urlText: "Rock Climbing Taiwan – Nate Ball"
      }
    ],
    mapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3682.7787018482713!2d120.27190650288293!3d22.624737599999985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e040b3ad00197%3A0x7dc5882b10ceb66b!2z5aO95bGx5bKp5aC0!5e0!3m2!1sen!2stw!4v1617682534693!5m2!1sen!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    mobileMapHTML: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3682.7787018482713!2d120.27190650288293!3d22.624737599999985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e040b3ad00197%3A0x7dc5882b10ceb66b!2z5aO95bGx5bKp5aC0!5e0!3m2!1sen!2stw!4v1617682534693!5m2!1sen!2stw" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    imgURL: "./Images/ShouShan.jpg",
    totalClimbs: 36,
    rocks: [
        {
          name: "White Wall",
          routes: [
            {
              "name": "Whodunnet",
              "rating": 5.11,
              "style": "Sport"
            },
            {
              "name": "White Terror",
              "rating": 5.1,
              "style": "Sport"
            },
            {
              "name": "Poop Stinks",
              "rating": 5.11,
              "style": "Sport"
            },
            {
              "name": "Best Trad Climb in Gaoxiong",
              "rating": 5.9,
              "style": "Trad"
            },
            {
              "name": "Jugs-A-Plenty",
              "rating": 5.11,
              "style": "Sport"
            },
            {
              "name": "Out of the Refrigerator",
              "rating": 5.1,
              "style": "Sport"
            },
          ]
        },
        {
          name: "Hobo Wall",
          routes: [
            {
              "name": "Luckiest Climber",
              "rating": 5.1,
              "style": "Sport"
            },
            {
              "name": "Behind the Curtain",
              "rating": 5.1,
              "style": "Sport"
            },
            {
              "name": "Tope Rope Option",
              "rating": 5.9,
              "style": "Top Rope"
            },
            {
              "name": "No Name",
              "rating": 5.1,
              "style": "Sport"
            },
          ]
        },
        {
          name: "Skyline",
          routes: [
            {
              "name": "Squatting Mokey, Hidden Nuggets",
              "rating": 5.1,
              "style": "Sport"
            },
            {
              "name": "Unhappy Endings",
              "rating": 5.1,
              "style": "Sport"
            },
            {
              "name": "Skyline Fun",
              "rating": 5.1,
              "style": "Sport"
            },
            {
              "name": "Skyline Awesome",
              "rating": 5.11,
              "style": "Sport"
            },
            {
              "name": "Skyline Awkward",
              "rating": 5.12,
              "style": "Sport"
            },
            {
              "name": "Ay Caramba!",
              "rating": 5.11,
              "style": "Sport"
            },
            {
              "name": "Hard Right",
              "rating": 5.11,
              "style": "Sport"
            },
            {
              "name": "Who’s Your Daddy",
              "rating": 5.11,
              "style": "Sport"
            },
            {
              "name": "Sack Up Then Send",
              "rating": 5.11,
              "style": "Sport"
            },
            {
              "name": "Steebun 1",
              "rating": 5.1,
              "style": "Sport"
            },
            {
              "name": "Steebun 2",
              "rating": 5.11,
              "style": "Sport"
            },
            {
              "name": "Little Sky Right",
              "rating": 5.7,
              "style": "Sport"
            },
            {
              "name": "Little Sky Left",
              "rating": 5.9,
              "style": "Sport"
            },
            {
              "name": "Naturally Sculpted",
              "rating": 5.6,
              "style": "Sport"
            },
            {
              "name": "Show Me The Money",
              "rating": 5.6,
              "style": "Sport"
            },
          ]
        },
        {
          name: "AC Wall",
          routes: [
            {
              "name": "Deception",
              "rating": 5.1,
              "style": "Sport"
            },
            {
              "name": "The Secret Route",
              "rating": 5.12,
              "style": "Sport"
            },
            {
              "name": "Gaoxiong 101",
              "rating": 5.1,
              "style": "Sport"
            },
            {
              "name": "The Next Generation",
              "rating": 5.11,
              "style": "Sport"
            },
            {
              "name": "Who Stole My Crux?",
              "rating": 5.11,
              "style": "Sport"
            },
            {
              "name": "It’s Too Dirty!",
              "rating": 5.12,
              "style": "Sport"
            },
            {
              "name": "Strange Coffee",
              "rating": 5.11,
              "style": "Sport"
            },
            {
              "name": "Afternoon Delight",
              "rating": 5.11,
              "style": "Sport"
            },
          ]
        },
        {
          name: "Dirty Wall",
          routes: [
            {
              "name": "La Dirty Dirty",
              "rating": 5.1,
              "style": "Sport"
            },
            {
              "name": "You Dirty Bird",
              "rating": 5.1,
              "style": "Sport"
            },
            {
              "name": "Dirty Deeds",
              "rating": 5.11,
              "style": "Sport"
            }
          ]
        },
      ]
}

const crags = []

crags.push(Information);
crags.push(LongDong);
crags.push(ReHai);
crags.push(BigCannonCliff);
crags.push(GuanZiLing);
crags.push(ShouShan);

export {
    crags
}