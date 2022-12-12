let historicalSites = new Vue({
    el: '#historicalSites',
    data: {
        historicalSites: [
            {
                src: "../images/xsq.jpg",
                name: "Neolithic Age",
                des: `Xishan ruins, located in Tiancun, 23 kilometers away from the northern part of Zhengzhou City, Henan Province, is a part of the culture of the Neolithic Age. The West Mountain site was discovered in 1983. From the fall of 1993 to the spring of 1995, the State Administration of Cultural Heritage conducted a large-scale excavation of the site. The site covers a large area and has thick accumulation, which spans the early, middle and late Yangshao periods. It is one of the few Neolithic sites excavated by large-scale scientific archaeology in Central Henan. The discovery of the Xishan site is of great significance to the study of the origin and formation of the early Chinese civilization and the historical role of the Central Plains in it. In 1996, Xishan Site was announced by The State Council as the fourth batch of national key cultural relics protection units.`
            },
            {
                src: "../images/chm.jpg",
                name: "Chenghuang Temple",
                des: `Chenghuang Temple, located in the north of Chengcheng Road, Zhengzhou City, (full name of Chenghuang Ling Youhou Temple). Built in the early Ming Dynasty, Hongzhi 14 years (1501) to rebuild, after repeated repairs.
                Town God's Temple is located in the north facing south, the main buildings are the gate, front hall, Le Lou, hall, bed palace, etc. The buildings are covered with glazed tiles, with rolling shed and cornices, exquisite shape and compact structure. Le Lou is 15 meters high, a two-storey building with the style of the brook mountain. The positive ridge relief of the dragon is several, there are phoenix dancing up and down, there are lotus flowers, lions in the left and right, extremely vivid.`
            },
            {
                src: "../images/ryc.jpg",
                name: "Xingyang Old City",
                des: `Xingyang Old City, Han Dynasty, the sixth batch of national key cultural relic protection units, located in the northwest of Zhengzhou ancient Yingtown, is the Han city ruins, the Central Plains military town. [1] East of the gulf (Warring States ancient canal), to the west bank of Yingze Guangwushan Yang, so called Xingyang Town. It has been an important military transportation area since ancient times and was built repeatedly in Qin and Han dynasties. It is 2,000 meters long from north to south and 1,500 meters wide from east to west. Wall layout, residual height 20 meters, 10 meters wide, 30 meters wide base. The eastern city wall has been destroyed by the Yellow River, only the northeast, southeast two corners of the city. There are three breaches in the west wall, which must be the remains of the West Gate. Therefore, there are building foundations, rammed earth platform, water pipes and other facilities found in the city.`
            },
            {
                src: "../images/sdyz.jpg",
                name: "Ruins of Shang Dynasty",
                des: `In 1950, the ruins of the Shang Dynasty in Zhengzhou were discovered. The Shang Dynasty ruins in Zhengzhou cover an area of about 25 square kilometers, starting from Fenghuang Tai in the east, Xisha Kou in the west, Huayuan Road in the north and Erigang in the south. They include three wall sites, palace sites, settlement sites, burial sites, handmade workshop sites, cellar pits and other types of sites. A large number of stone tools, pottery, bronze, jade, bone and other production tools and living utensils have been unearthed. Among them, the (inner city) wall site with a circumference of about 7 kilometers and the palace area site with a huge distribution area are the most complete and have the most historical and cultural value`
            },
            {
                src: "../images/dyh.jpg",
                name: "The Grand Canal",
                des: `The Zhengzhou section of Tongji Canal of China Grand Canal is located in the north of Huiji District, Zhengzhou City. The current channel is called Suoxu River. It starts from Boqiao in the north of Huiji District in the west and joins Jialu River in Xiangyunsi Village in the east, with a total length of about 15 kilometers. It is a section of the Yellow River channel, starting from Niuzhuang King Temple in the north of Huiji District on the south bank of the Yellow River, flowing through Huiji Bridge and Tieluzhai Village, emptying into Tongji Canal in Diwan Village and turning east. Now collected in Zhengzhou City ancient Yinghan Iron Metallurgy Site Museum.`
            },
            {
                src: "../images/qzs.jpg",
                name: "The Mosque",
                des: `Zhengzhou Mosque is also known as Beidajie Mosque, Beidajie Mosque or Beidaji Temple because it is located in the North Street. It is the earliest and largest mosque built by Islam in Zhengzhou. It began at the end of Yuan Dynasty and the beginning of Ming Dynasty. Zhengzhou North Mosque has two Ming Dynasty Xuande furnace, a rare thing. The Temple is one of the cultural relic protection units of Henan Province. Zhengzhou is a national tourist attraction, the number of people who came to the temple for sightseeing and worship is very large. Zhengzhou Mosque is a symbol of Islam.`
            },
            {
                src: "../images/eqt.jpg",
                name: "27 Tower",
                des: `Zhengzhou 27 Strike Memorial Tower and Memorial Hall are located respectively at No. 82 in the middle of Qiantang Road and Erqi Square, Erqi District, Zhengzhou City, Henan Province. Among them, Zhengzhou 27 Strike Memorial Tower covers an area of 352 square meters and Zhengzhou 27 strike Memorial Hall covers an area of 6440 square meters.
                Zhengzhou 27 strike memorial tower for reinforced concrete structure, the plane is two pentagonal parallel, is a unique architectural antique twin tower. Zhengzhou 27 Strike Memorial Hall building on the west east, divided into the main building and two sides of the building, are two floors, black brick, pointed roof, red tile roof, is a brick and wood structure of the memorial building, is one of the earliest commemorative buildings of new China.`
            }
        ]
    },

    methods: {
        mouseenter: function (event, n) {
            if (event.currentTarget.children[1].children.length < 1) {
                let p = document.createElement("p")
                p.innerHTML = this.historicalSites[n].name
                event.currentTarget.children[1].appendChild(p)
            }
        }
    }
});



