let app = new Vue({
  el: '#app',
  data: {
    photo: "../images/me.jpg",
    commonInformation: [
      "E-mail: xbhou@bu.edu",
      "Date of Birth: 11/10/1990",
      "Gender: Male",
      "Hobbies: Badminton, Games"
    ],
    index: 0,
    sections: [
      {
        title: "Education Background",
        content: [
          "Micromaster program. The university of British Columbia. Online through edX (Apr. 2021 - Oct)",
          "--Major: Software Development.",
          "Coding camp. Chuanzhi Specialized College. Beijing. (Jun. 2019 - Nov. 2019)",
          "--Major: Program for front-end developer.",
          "Master of Science. Tianjin University of Commerce. (Sep. 2015 - Jun. 2018)",
          "--Major: Refrigeration and Cryogenic Engineering.",
          "--Supervisor: Prof. Tonghua Zou.",
          "Bachelor’s degree. Zhongyuan University of Technology. (Sep. 2011- Jul. 2015)",
          "--Major: Thermal Energy and Dynamic Engineering. Ranking: Top 15 %.",
        ]
      },
      {
        title: "Techniques and Experiences",
        content: [
          "Browser based techniques (HTML, CSS, JavaScript):",
          "--Built a social media platform for users to share their thoughts with words and photos. The users can also interact with each other on this platform.",
          "--Implemented an online shopping platform for the buyer side. The buyers can add products to their shopping bag or wish list and place the order using several methods.",
          "--Designed and built a virtual museum website inspired by the Palace museum. The users can check the details of the exhibits in the museum and the architectures in the Forbidden city. (Team leader)",
          "Databases (mySQL) and Server Side Development (Node.js, Java, C++):",
          "--Defined and categorized data sets for the information involved in the three projects above.",
          "--Created local databases to store:  the users' information and comments in the social media platform, the commodity data and the buyer's behavior in the online shopping platform, and the pictures and descriptions in the virtual museum website.",
          "--Built the local server to transmit the information and enhance the filter process.",
          "Python:",
          "--Got the certificate of “Python for everybody specialization” offered by Umich.",
          "Machine Learning:",
          "--Got the following certificates of Machine learning: Machine learning course offered by Stanford through Coursera and Machine Learning with Python (from Linear Models to Deep Learning) offered by MIT through edX.",
          "Employment History:",
          "--Hitachi (Aug. 2015 - Oct. 2015)--Heating system design",
          "--Haier air conditioning electronics company (Jun. 2018 - May. 2019)--Air conditioning system development"
        ]
      },
      {
        title: "Publication & Patent",
        content: [
          "Xiaobing Hou, Tonghua Zou. Experimental investigation on mechanism of vacuum regeneration of LiCl solution [J]. Chem Ind Eng Prog",
          "Xiaobing Hou,Tonghua Zou. Experimental study on performance of two stage rotary desiccant air conditioning system [J]. Fluid Machinery",
          "Xiaobing Hou, Tonghua Zou. Experimental investigation on LiCl liquid desiccant air dehumidification system [J]. Chem Ind Eng Prog",
          "Xiaobing Hou, Tonghua Zou. A regeneration system of salt solution heat pump based on vacuum [P].",
          "Xiaobing Hou, Tonghua Zou. A regenerator of salt solution in super-heavy vacuum [P].",
          "Xiaobing Hou, Tonghua Zou. A test-bed for boiling characteristics of salt solution based on vacuum [P].",
          "Xiaobing Hou, Tonghua Zou. A kind of refrigeration air conditioning shoes [P]. Transferred."
        ]
      },
      {
        title: "Honor & Awards",
        content: [
          "• 2012-2014 The first-class scholarship for three consecutive years.",
          "• 2014 The second award of the Mathematical Modelling competition in Henan Province. (Top 2/100)",
          "• 2016-2017 The first-class scholarship for two consecutive years (Top 3/35)",
          "• 2017	The outstanding graduate scholarship (Top 3/35)"
        ]
      }

    ]
  },

  methods: {
    left: function () {
      if (this.index >= this.sections.length - 1) {
        this.index = 0
      } else {
        this.index++
      }
    },
    right: function () {
      if (this.index <= 0) {
        this.index = this.sections.length - 1
      } else {
        this.index--
      }
    }
  }
});

let introductionArea = document.querySelector("#introduction-area")
let body = document.body
introductionArea.style.height = body.scrollHeight - 47 - 184 + "px"

window.addEventListener("resize", function () {
  introductionArea.style.height = body.scrollHeight - 47 - 184 + "px"
})
