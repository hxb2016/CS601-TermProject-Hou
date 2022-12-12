let festivals = new Vue({
    el: '#festivals',
    data: {
        festivals: [
            {
                src: "../images/cj.jpg",
                name: "Spring Festival",
                des: `The Spring Festival, namely the Chinese Lunar New Year, commonly known as the Spring Festival, Xinsui, Dan, etc., is also known orally as the Spring Festival, Danian. The Spring Festival has a long history, evolved from the ancient times to pray for the New Year. All things this day, this is the ancestor, pray for the age of worship, worship day Fazu, report the reverse beginning also. The origin of the Spring Festival contains profound cultural connotation, carrying rich historical and cultural deposits in the process of inheritance and development. During the Spring Festival, all over the country are held a variety of activities to celebrate the Spring Festival, with strong local characteristics. These activities mainly focus on eliminating the old and the new, exorcising evil spirits and dealing with disasters, worshipping gods and ancestors, and praying for good fortune and good luck. They embody the essence of traditional Chinese culture in various forms.`
            },
            {
                src: "../images/yx.jpg",
                name: "Lantern Festival",
                des: `Yuanxiao, originally meaning "the night of the Lantern Festival", because the fifteenth day of the first month "Shangyuan Festival" is the main activity of the night to eat Yuanxiao and admire the moon, later the name of the festival also evolved into "Lantern Festival". The Lantern Festival is celebrated on the 15th day of the first lunar month, bringing the celebration, which begins on New Year's Eve, to another climax. On the night of the Lantern Festival, the streets are decorated with lanterns. People enjoy the lanterns, guess lantern riddles and eat the Lantern Festival, which has become a custom for generations. During the reign of Emperor Wen of the Han Dynasty, it was decreed that the fifteenth day of the first month should be the Lantern Festival. During the reign of Emperor Wudi of the Han Dynasty, "Taiyi God" was held on the fifteenth day of the first lunar month. (Tai One: God who rules the universe). When Sima Qian created the "Taichu calendar", the Lantern Festival has been identified as a major festival.`
            },
            {
                src: "../images/qm.jpg",
                name: "Qingming Festival",
                des: `Tomb-sweeping Day, also known as Taqing Festival, line Qing Festival, March Festival, ancestor worship Festival, etc., the festival in mid-spring and late spring. The Tomb-sweeping Day comes from the ancestor belief and the spring sacrifice ritual in ancient times. It is the most grand festival of ancestor worship in the Chinese nation. Tomb-sweeping Day has both natural and cultural connotations. It is both a natural solar term point and a traditional festival. Tomb-sweeping, ancestor worship and outing are the two major themes of the traditional etiquette and custom of Tomb-sweeping Day.`
            },
            {
                src: "../images/dw.jpg",
                name: "Dragon Boat Festival",
                des: `The Dragon Boat Festival, also known as the Duanyang Festival, Dragon Boat Festival, Double Fifth Festival, Tianzhong Festival, etc., dates in the fifth day of the fifth lunar month every year, is a collection of worship, praying for evil spirits, celebrating entertainment and eating as one of the folk festival. The Dragon Boat Festival originates from the worship of natural sky, which evolved from the ancient times. During the Dragon Boat Festival in midsummer, Canglong Qisu flies to the center of due south, in the most "central" position of the whole year, just like in the fifth line of the Book of Changes · Qiangua: "Flying dragon in the sky". Dragon Boat Festival is the auspicious day of "flying dragon in the sky", dragon and dragon boat culture has been running through the history of the Dragon Boat Festival.`
            },
            {
                src: "../images/qx.jpg",
                name: "Qixi Festival",
                des: `Qixi Festival, also known as Qiqiao Festival, Qijie Festival, Daughter's Day, Qiqiao Festival, Qiniang Festival, Qixi Festival, Ox and Bull Pony Day, Qiaoxi, is a traditional Chinese folk festival. The Qixi Festival evolved from the worship of stars. It is the traditional seventh sister's birthday. Because the worship of "the seventh sister" was held on the seventh evening of July, it was named "Qixi". It is the traditional customs of Qixi Festival to worship Qijie, pray for wishes, beg for skillful skills, sit and watch the cowherd and vega, pray for marriage, and store water on Qixi Festival. Through historical development, Qixi has been endowed with the beautiful love legend of "Cowherd and Weaver Girl", making it a festival symbolizing love, which is considered to be the most romantic traditional festival in China, and has produced the cultural meaning of "Chinese Valentine's Day" in modern times.`
            },
            {
                src: "../images/zq.jpg",
                name: "Mid-Autumn Festival",
                des: `The Mid-Autumn Festival, also known as the Moon Festival, moonlight birthday, lunar evening, Autumn Festival, Midautumn Festival, worship festival, moon Festival, Moon Festival, Reunion Festival, etc., is a traditional Chinese folk festival.  Since ancient times, the Mid-Autumn Festival has been offering sacrifices to the moon, enjoying the moon, eating moon cakes, watching lanterns, appreciating osmanthus, drinking osmanthus wine and other folk customs, spread to the present, lasting.`
            }
        ]
    },

    methods: {
        mouseenter: function (event, n) {
            if (event.currentTarget.children[1].children.length < 1) {
                let p = document.createElement("p")
                p.innerHTML = this.festivals[n].name
                event.currentTarget.children[1].appendChild(p)
            }
        }
    }
});



