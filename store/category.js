export const state = () => ({
  categories: [
    { id: 1, name: "Turkumlar", route: "/turkumlar" },
    { id: 2, name: "Avtotovarlar", route: "/avtotovarlar" },
    { id: 3, name: "Aksessuarlar", route: "/aksessuarlar" },
    { id: 4, name: "Maishiy texnika", route: "/maishiy-texnika" },
    {
      id: 5,
      name: "Maishiy kimyoviy moddalar",
      route: "/maishiy-kimyoviy-moddalar",
    },
    { id: 6, name: "Dacha, bog' va tomorqa", route: "/dacha-bog-va-tomorqa" },
    { id: 7, name: "Bolalar tovarlari", route: "/bolalar-tovarlari" },
    { id: 8, name: "Salomatlik", route: "/salomatlik" },
    {
      id: 9,
      name: "Hayvonlar uchun tovarlar",
      route: "/hayvonlar-uchun-tovlarlar",
    },
    {
      id: 10,
      name: "Kanselyariya tovarlari",
      route: "/kanselyariya-tovarlari",
    },
    { id: 11, name: "Kitoblar", route: "/kitoblar" },
    { id: 12, name: "Go'zallik va parvarish", route: "/gozallik-va-parvarish" },
    { id: 13, name: "Poyabzallar", route: "/poyabzallar" },
    { id: 14, name: "Kiyim", route: "/kiyim" },
    {
      id: 15,
      name: "Oziq-ovqat mahsulotlari",
      route: "/oziq-ovqat-mahsulotlari",
    },
    { id: 16, name: "Sport va hordiq", route: "/sport-va-hordiq" },
    {
      id: 17,
      name: "Qurilish va ta'mirlash",
      route: "/qurilish-va-ta'mirlash",
    },
    { id: 18, name: "Uy-ro'zg'or buyumlari", route: "/uy-ruzgor-buyumlari" },
    { id: 19, name: "Xobbi va ijod", route: "/xobbi-va-ijod" },
    { id: 20, name: "Elektronika", route: "/elektronika" },
  ],
   catalog :[
    {
      id: 1,
      name: "podarki",
      route: "/podarki",
      data: [
        {
          id: 1,
          title: "Maishiy texnika",
          product: [
            { id: 1, productName: "Soch turmaklash", route: "/soch-turmaklash" },
            { id: 2, productName: "Soch kesish", route: "/soch-kesish" },
            { id: 3, productName: "Elektr ustaralar", route: "/elektr-ustaralar" },
            { id: 4, productName: "Epilyatorlar va aksessuarlar", route: "/epilyatorlar-va-aksessuarlar" },
            { id: 5, productName: "Iqlim texnikasi", route: "/iqlim-texnikasi" },
            { id: 6, productName: "Ventilyatorlar", route: "/ventilyatorlar" },
            { id: 7, productName: "Havoni tozalash va namlantirish", route: "/havoni-tozalash-va-namlantirish" },
            { id: 8, productName: "Konditsionerlar va split tizimlar", route: "/konditsionerlar-va-split-tizimlar" },
            { id: 9, productName: "Isitgichlar", route: "/isitgichlar" },
            { id: 10, productName: "Katta maishiy texnika", route: "/katta-maishiy-texnika" },
            { id: 11, productName: "Suv uchun kulerlar va aksessuarlar", route: "/suv-uchun-kulerlar-va-aksessuarlar" },
            { id: 12, productName: "Katta maishiy texnika uchun aksessuarlar", route: "/katta-maishiy-texnika-uchun-aksessuarlar" },
            { id: 13, productName: "Sovutgichlar va muzlatgichlar", route: "/sovutgichlar-va-muzlatgichlar" },
            { id: 14, productName: "Kir yuvish mashinalari", route: "/kir-yuvish-mashinalari" },
            { id: 15, productName: "Maishiy texnika uchun boshqa aksessuarlar va ehtiyot qismlar", route: "/maishiy-texnika-uchun-boshqa-aksessuarlar-va-ehtiyot-qismlar" }
          ]
        },
        {
          id: 2,
          title: "Goʻzallik uchun texnika",
          product: [
            // Add products related to "Goʻzallik uchun texnika"
          ]
        },
        {
          id: 3,
          title: "Oshxona buyumlari",
          product: [
            // Add products related to "Oshxona buyumlari"
          ]
        },
        {
          id: 4,
          title: "Uy uchun texnika",
          product: [
            // Add products related to "Uy uchun texnika"
          ]
        }
      ]
    },
    {
        id: 2,
        name: "podarki",
        route: "/podarki",
        data: [
          {
            id: 1,
            title: "Maishiy texnika",
            product: [
              { id: 1, productName: "Soch turmaklash", route: "/soch-turmaklash" },
              { id: 2, productName: "Soch kesish", route: "/soch-kesish" },
              { id: 3, productName: "Elektr ustaralar", route: "/elektr-ustaralar" },
              { id: 4, productName: "Epilyatorlar va aksessuarlar", route: "/epilyatorlar-va-aksessuarlar" },
              { id: 5, productName: "Iqlim texnikasi", route: "/iqlim-texnikasi" },
              { id: 6, productName: "Ventilyatorlar", route: "/ventilyatorlar" },
              { id: 7, productName: "Havoni tozalash va namlantirish", route: "/havoni-tozalash-va-namlantirish" },
              { id: 8, productName: "Konditsionerlar va split tizimlar", route: "/konditsionerlar-va-split-tizimlar" },
              { id: 9, productName: "Isitgichlar", route: "/isitgichlar" },
              { id: 10, productName: "Katta maishiy texnika", route: "/katta-maishiy-texnika" },
              { id: 11, productName: "Suv uchun kulerlar va aksessuarlar", route: "/suv-uchun-kulerlar-va-aksessuarlar" },
              { id: 12, productName: "Katta maishiy texnika uchun aksessuarlar", route: "/katta-maishiy-texnika-uchun-aksessuarlar" },
              { id: 13, productName: "Sovutgichlar va muzlatgichlar", route: "/sovutgichlar-va-muzlatgichlar" },
              { id: 14, productName: "Kir yuvish mashinalari", route: "/kir-yuvish-mashinalari" },
              { id: 15, productName: "Maishiy texnika uchun boshqa aksessuarlar va ehtiyot qismlar", route: "/maishiy-texnika-uchun-boshqa-aksessuarlar-va-ehtiyot-qismlar" }
            ]
          },
          {
            id: 2,
            title: "Goʻzallik uchun texnika",
            product: [
              // Add products related to "Goʻzallik uchun texnika"
            ]
          },
          {
            id: 3,
            title: "Oshxona buyumlari",
            product: [
              // Add products related to "Oshxona buyumlari"
            ]
          },
          {
            id: 4,
            title: "Uy uchun texnika",
            product: [
              // Add products related to "Uy uchun texnika"
            ]
          }
        ]
      },
      {
        id: 1,
        name: "podarki",
        route: "/podarki",
        data: [
          {
            id: 1,
            title: "Maishiy texnika",
            product: [
              { id: 1, productName: "Soch turmaklash", route: "/soch-turmaklash" },
              { id: 2, productName: "Soch kesish", route: "/soch-kesish" },
              { id: 3, productName: "Elektr ustaralar", route: "/elektr-ustaralar" },
              { id: 4, productName: "Epilyatorlar va aksessuarlar", route: "/epilyatorlar-va-aksessuarlar" },
              { id: 5, productName: "Iqlim texnikasi", route: "/iqlim-texnikasi" },
              { id: 6, productName: "Ventilyatorlar", route: "/ventilyatorlar" },
              { id: 7, productName: "Havoni tozalash va namlantirish", route: "/havoni-tozalash-va-namlantirish" },
              { id: 8, productName: "Konditsionerlar va split tizimlar", route: "/konditsionerlar-va-split-tizimlar" },
              { id: 9, productName: "Isitgichlar", route: "/isitgichlar" },
              { id: 10, productName: "Katta maishiy texnika", route: "/katta-maishiy-texnika" },
              { id: 11, productName: "Suv uchun kulerlar va aksessuarlar", route: "/suv-uchun-kulerlar-va-aksessuarlar" },
              { id: 12, productName: "Katta maishiy texnika uchun aksessuarlar", route: "/katta-maishiy-texnika-uchun-aksessuarlar" },
              { id: 13, productName: "Sovutgichlar va muzlatgichlar", route: "/sovutgichlar-va-muzlatgichlar" },
              { id: 14, productName: "Kir yuvish mashinalari", route: "/kir-yuvish-mashinalari" },
              { id: 15, productName: "Maishiy texnika uchun boshqa aksessuarlar va ehtiyot qismlar", route: "/maishiy-texnika-uchun-boshqa-aksessuarlar-va-ehtiyot-qismlar" }
            ]
          },
          {
            id: 2,
            title: "Goʻzallik uchun texnika",
            product: [
              // Add products related to "Goʻzallik uchun texnika"
            ]
          },
          {
            id: 3,
            title: "Oshxona buyumlari",
            product: [
              // Add products related to "Oshxona buyumlari"
            ]
          },
          {
            id: 4,
            title: "Uy uchun texnika",
            product: [
              // Add products related to "Uy uchun texnika"
            ]
          }
        ]
      },
  ],
  
});
