const products = [
  {
    productId: 0,
    productName: "Trouble",
    productOwnerName: "Keita Terazono",
    developers: [
      "Park Hanbin",
      "Lee Jeonghyeon",
      "Yoo Seugeoun",
      "Ji Yunseo",
      "Mun Junghyun",
    ],
    scrumMasterName: "Park Jihoo",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/1",
  },
  {
    productId: 1,
    productName: "New Kidz on the Block",
    productOwnerName: "Sung Hanbin",
    developers: [
      "Kim Jiwoong",
      "Zhang Hao",
      "Seok Matthew",
      "Kim Taerae",
      "Shen Ricky",
    ],
    scrumMasterName: "Park Gyuvin",
    startDate: "2023/07/14",
    methodology: "Waterfall",
    location: "github.com/bcgov/2",
  },
  {
    productId: 2,
    productName: "Literal Kids",
    productOwnerName: "Park Gunwook",
    developers: ["Park Gunwook", "Han Yujin"],
    scrumMasterName: "Park Gunwook",
    startDate: "2023/07/14",
    methodology: "Agile",
    location: "github.com/bcgov/1",
  },
  {
    productId: 3,
    productName: "Trouble",
    productOwnerName: "Keita Terazono",
    developers: [
      "Park Hanbin",
      "Lee Jeonghyeon",
      "Yoo Seugeoun",
      "Ji Yunseo",
      "Mun Junghyun"
    ],
    scrumMasterName: "Park Jihoo",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/3"
  },
  {
    productId: 4,
    productName: "WidgetMaster",
    productOwnerName: "Alice Johnson",
    developers: [
      "Bob Smith",
      "Charlie Brown"
    ],
    scrumMasterName: "Eve Davis",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/4"
  },
  {
    productId: 5,
    productName: "InnovateNow",
    productOwnerName: "David Rodriguez",
    developers: [
      "Emily White",
      "Frank Martinez",
      "Grace Lee",
      "Hannah Taylor"
    ],
    scrumMasterName: "Isabella Allen",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/5"
  },
  {
    productId: 6,
    productName: "TechSolutions",
    productOwnerName: "Michael Wang",
    developers: [
      "Olivia Adams",
      "Peter Johnson",
      "Quincy Carter",
      "Rachel Scott",
      "Samuel Walker"
    ],
    scrumMasterName: "Sophia Hall",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/6"
  },
  {
    productId: 7,
    productName: "DataInsights",
    productOwnerName: "Lily Chen",
    developers: [
      "Tom Davis",
      "Nina Smith"
    ],
    scrumMasterName: "William Taylor",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/7"
  },
  {
    productId: 8,
    productName: "EcoSolutions",
    productOwnerName: "Sophia Lee",
    developers: [
      "John Wilson",
      "Mia Johnson"
    ],
    scrumMasterName: "Lucas Adams",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/8"
  },
  {
    productId: 9,
    productName: "HealthPlus",
    productOwnerName: "Emily Miller",
    developers: [
      "Chris Turner"
    ],
    scrumMasterName: "Ella Hall",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/9"
  },
  {
    productId: 10,
    productName: "FinanceHub",
    productOwnerName: "Daniel Johnson",
    developers: [
      "Grace Davis",
      "Henry Wilson",
      "Isabella Smith"
    ],
    scrumMasterName: "Olivia Adams",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/10"
  },
  {
    productId: 11,
    productName: "TravelEasy",
    productOwnerName: "Liam Martinez",
    developers: [
      "Chloe Wilson",
      "Zoe Brown",
      "Ethan Taylor",
      "Ava Johnson",
      "Noah Davis"
    ],
    scrumMasterName: "Olivia White",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/11"
  },
  {
    productId: 12,
    productName: "RetailRevolution",
    productOwnerName: "Sophia Hall",
    developers: [
      "Benjamin Wilson",
      "Lucas Davis",
      "Lily Smith",
      "Daniel Brown"
    ],
    scrumMasterName: "Zoe Turner",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/12"
  },
  {
    productId: 13,
    productName: "SmartCity",
    productOwnerName: "Ella Adams",
    developers: [
      "Ethan Wilson"
    ],
    scrumMasterName: "John Turner",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/13"
  },
  {
    productId: 14,
    productName: "TechGuru",
    productOwnerName: "Ava Johnson",
    developers: [
      "Noah Davis",
      "Olivia White"
    ],
    scrumMasterName: "Sophia Lee",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/14"
  },
  {
    productId: 15,
    productName: "InnovationX",
    productOwnerName: "Mia Johnson",
    developers: [
      "Henry Wilson",
      "Isabella Smith",
      "Lucas Davis"
    ],
    scrumMasterName: "Daniel Johnson",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/15"
  },
  {
    productId: 16,
    productName: "DataMasters",
    productOwnerName: "Oliver Taylor",
    developers: [
      "Sophia Smith",
      "Michael Davis",
      "Ella Wilson"
    ],
    scrumMasterName: "William Turner",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/16"
  },
  {
    productId: 17,
    productName: "HealthTech",
    productOwnerName: "Ethan Davis",
    developers: [
      "Chloe Brown",
      "Zoe Turner",
      "Benjamin Wilson"
    ],
    scrumMasterName: "Ava Martinez",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/17"
  },
  {
    productId: 18,
    productName: "FinancePro",
    productOwnerName: "Lily Turner",
    developers: [
      "Lucas White",
      "Isabella Adams",
      "Mia Smith",
      "Henry Davis"
    ],
    scrumMasterName: "Ella Hall",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/18"
  },
  {
    productId: 19,
    productName: "TravelXpress",
    productOwnerName: "Zoe Smith",
    developers: [
      "Ava Turner",
      "Noah Davis",
      "Sophia Lee"
    ],
    scrumMasterName: "Ethan Wilson",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/19"
  },
  {
    productId: 20,
    productName: "RetailRush",
    productOwnerName: "Daniel Brown",
    developers: [
      "Benjamin Smith",
      "Olivia Adams",
      "Lucas Wilson"
    ],
    scrumMasterName: "Liam Turner",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/20"
  },
  {
    productId: 21,
    productName: "SmartVillage",
    productOwnerName: "Sophia Adams",
    developers: [
      "John Smith",
      "Ella Davis",
      "Sophia White"
    ],
    scrumMasterName: "Noah Turner",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/21"
  },
  {
    productId: 22,
    productName: "TechGenius",
    productOwnerName: "Lucas White",
    developers: [
      "Michael Smith",
      "William Davis",
      "Chloe Turner"
    ],
    scrumMasterName: "Mia Adams",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/22"
  },
  {
    productId: 23,
    productName: "InnovationWave",
    productOwnerName: "Ella Wilson",
    developers: [
      "Henry Smith",
      "Isabella Davis"
    ],
    scrumMasterName: "Henry Adams",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/23"
  },
  {
    productId: 24,
    productName: "DataInsights",
    productOwnerName: "Benjamin Turner",
    developers: [
      "Lucas Adams",
      "Lily Smith"
    ],
    scrumMasterName: "Daniel Martinez",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/24"
  },
  {
    productId: 25,
    productName: "EcoSolutions",
    productOwnerName: "Grace Davis",
    developers: [
      "Sophia Adams",
      "Samuel Davis"
    ],
    scrumMasterName: "Mia White",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/25"
  },
  {
    productId: 26,
    productName: "HealthPlus",
    productOwnerName: "William Smith",
    developers: [
      "Ella Adams",
      "John Turner",
      "Olivia Lee"
    ],
    scrumMasterName: "Michael Davis",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/26"
  },
  {
    productId: 27,
    productName: "FinanceHub",
    productOwnerName: "Liam White",
    developers: [
      "Isabella Turner",
      "Noah Davis",
      "Henry Wilson"
    ],
    scrumMasterName: "Olivia Smith",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/27"
  },
  {
    productId: 28,
    productName: "TravelEasy",
    productOwnerName: "Mia Adams",
    developers: [
      "Ella Smith",
      "Sophia Davis",
      "Benjamin Turner",
      "Lucas Brown",
      "Ava Turner"
    ],
    scrumMasterName: "Zoe Wilson",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/28"
  },
  {
    productId: 29,
    productName: "RetailRevolution",
    productOwnerName: "Henry Turner",
    developers: [
      "Sophia Adams",
      "Lucas Wilson",
      "Ella Davis",
      "Benjamin Brown"
    ],
    scrumMasterName: "Ethan Adams",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/29"
  },
  {
    productId: 30,
    productName: "SmartCity",
    productOwnerName: "Isabella Davis",
    developers: [
      "Chloe Smith",
      "Zoe Turner",
      "Ethan Brown",
      "Ava Davis",
      "Noah White"
    ],
    scrumMasterName: "John Davis",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/30"
  },
  {
    productId: 31,
    productName: "TechGuru",
    productOwnerName: "Lucas Davis",
    developers: [
      "Olivia Turner",
      "Benjamin Davis",
      "Sophia Turner"
    ],
    scrumMasterName: "Lily Wilson",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/31"
  },
  {
    productId: 32,
    productName: "InnovationX",
    productOwnerName: "Sophia White",
    developers: [
      "Michael Smith",
      "William Davis",
      "Chloe Adams"
    ],
    scrumMasterName: "Daniel Turner",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/32"
  },
  {
    productId: 33,
    productName: "DataMasters",
    productOwnerName: "Ella Turner",
    developers: [
      "Henry Smith",
      "Isabella Turner"
    ],
    scrumMasterName: "Henry Adams",
    startDate: "2023/09/19",
    methodology: "Agile",
    location: "github.com/bcgov/33"
  },
  {
    productId: 34,
    productName: "HealthTech",
    productOwnerName: "Benjamin Turner",
    developers: [
      "Lucas Adams",
      "Lily Smith",
      "John Martinez"
    ],
    scrumMasterName: "Olivia Wilson",
    startDate: "2023/09/19",
    methodology: "Waterfall",
    location: "github.com/bcgov/34"
  }
]

module.exports = products;