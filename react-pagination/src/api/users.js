const users = [
  {
    id: 1,
    fullName: "Julia Domaschke",
    FullMobileNo: "+62 562 564 5458",
    email: "jdomaschke0@mac.com",
    signupDate: "02/08/2023",
  },
  {
    id: 2,
    fullName: "Ode Ffrench",
    FullMobileNo: "+351 306 407 3841",
    email: "offrench1@oakley.com",
    signupDate: "22/09/2023",
  },
  {
    id: 3,
    fullName: "Gradey Baiyle",
    FullMobileNo: "+55 161 212 5390",
    email: "gbaiyle2@accuweather.com",
    signupDate: "31/12/2023",
  },
  {
    id: 4,
    fullName: "Teodoro Pottberry",
    FullMobileNo: "+502 999 488 9965",
    email: "tpottberry3@technorati.com",
    signupDate: "25/03/2024",
  },
  {
    id: 5,
    fullName: "Vinnie Chicchelli",
    FullMobileNo: "+54 164 113 9940",
    email: "vchicchelli4@scientificamerican.com",
    signupDate: "02/06/2024",
  },
  {
    id: 6,
    fullName: "Shanna Phettis",
    FullMobileNo: "+62 177 834 2705",
    email: "sphettis5@feedburner.com",
    signupDate: "09/03/2024",
  },
  {
    id: 7,
    fullName: "Trey Kohnen",
    FullMobileNo: "+62 948 774 1016",
    email: "tkohnen6@blogspot.com",
    signupDate: "30/04/2024",
  },
  {
    id: 8,
    fullName: "Abdul Affron",
    FullMobileNo: "+256 120 174 7923",
    email: "aaffron7@ning.com",
    signupDate: "03/10/2023",
  },
  {
    id: 9,
    fullName: "Halsey Kolodziej",
    FullMobileNo: "+62 386 580 5490",
    email: "hkolodziej8@51.la",
    signupDate: "24/12/2023",
  },
  {
    id: 10,
    fullName: "Haslett Sanpere",
    FullMobileNo: "+62 398 563 3381",
    email: "hsanpere9@who.int",
    signupDate: "23/09/2023",
  },
  {
    id: 11,
    fullName: "Justino Coate",
    FullMobileNo: "+970 562 376 8650",
    email: "jcoatea@com.com",
    signupDate: "03/06/2024",
  },
  {
    id: 12,
    fullName: "Powell Skeermer",
    FullMobileNo: "+86 359 592 0849",
    email: "pskeermerb@whitehouse.gov",
    signupDate: "12/10/2023",
  },
  {
    id: 13,
    fullName: "Wren Shacklady",
    FullMobileNo: "+420 237 460 5250",
    email: "wshackladyc@sourceforge.net",
    signupDate: "06/08/2023",
  },
  {
    id: 14,
    fullName: "Torry Siemens",
    FullMobileNo: "+7 756 487 6390",
    email: "tsiemensd@163.com",
    signupDate: "12/03/2024",
  },
  {
    id: 15,
    fullName: "Kat Greeding",
    FullMobileNo: "+351 566 197 7951",
    email: "kgreedinge@networkadvertising.org",
    signupDate: "24/11/2023",
  },
  {
    id: 16,
    fullName: "Norean Tressler",
    FullMobileNo: "+351 914 924 8620",
    email: "ntresslerf@dedecms.com",
    signupDate: "07/07/2024",
  },
  {
    id: 17,
    fullName: "Aimee Dreakin",
    FullMobileNo: "+505 369 275 3648",
    email: "adreaking@google.fr",
    signupDate: "12/06/2024",
  },
  {
    id: 18,
    fullName: "Duffy Leven",
    FullMobileNo: "+62 364 777 2981",
    email: "dlevenh@constantcontact.com",
    signupDate: "16/12/2023",
  },
  {
    id: 19,
    fullName: "Lilllie Tolman",
    FullMobileNo: "+62 125 916 2769",
    email: "ltolmani@japanpost.jp",
    signupDate: "19/05/2024",
  },
  {
    id: 20,
    fullName: "Mackenzie Daughtery",
    FullMobileNo: "+86 389 190 7473",
    email: "mdaughteryj@mozilla.org",
    signupDate: "19/04/2024",
  },
  {
    id: 21,
    fullName: "Beverly Di Meo",
    FullMobileNo: "+86 145 695 3206",
    email: "bdik@pcworld.com",
    signupDate: "04/12/2023",
  },
  {
    id: 22,
    fullName: "Carney Eskell",
    FullMobileNo: "+86 248 650 4492",
    email: "ceskelll@engadget.com",
    signupDate: "19/03/2024",
  },
  {
    id: 23,
    fullName: "Wanids Frankton",
    FullMobileNo: "+66 735 223 8088",
    email: "wfranktonm@alexa.com",
    signupDate: "05/06/2024",
  },
  {
    id: 24,
    fullName: "Crichton Dominichetti",
    FullMobileNo: "+54 263 263 9416",
    email: "cdominichettin@latimes.com",
    signupDate: "16/02/2024",
  },
  {
    id: 25,
    fullName: "Sonya Suche",
    FullMobileNo: "+506 494 424 3980",
    email: "ssucheo@desdev.cn",
    signupDate: "09/01/2024",
  },
  {
    id: 26,
    fullName: "Joane Bovaird",
    FullMobileNo: "+62 681 694 7349",
    email: "jbovairdp@aboutads.info",
    signupDate: "16/04/2024",
  },
  {
    id: 27,
    fullName: "Elisha Kulicke",
    FullMobileNo: "+81 181 428 1024",
    email: "ekulickeq@theatlantic.com",
    signupDate: "05/04/2024",
  },
  {
    id: 28,
    fullName: "Tiphanie Aldrin",
    FullMobileNo: "+7 964 207 6543",
    email: "taldrinr@dot.gov",
    signupDate: "09/08/2023",
  },
  {
    id: 29,
    fullName: "Milena Fitchet",
    FullMobileNo: "+372 709 947 4173",
    email: "mfitchets@bbc.co.uk",
    signupDate: "01/02/2024",
  },
  {
    id: 30,
    fullName: "Garik Ferns",
    FullMobileNo: "+55 646 594 0886",
    email: "gfernst@trellian.com",
    signupDate: "05/06/2024",
  },
  {
    id: 31,
    fullName: "Dore Laxton",
    FullMobileNo: "+7 374 804 4329",
    email: "dlaxtonu@smh.com.au",
    signupDate: "13/02/2024",
  },
  {
    id: 32,
    fullName: "Hebert Matuszewski",
    FullMobileNo: "+223 835 513 3720",
    email: "hmatuszewskiv@reference.com",
    signupDate: "31/05/2024",
  },
  {
    id: 33,
    fullName: "Gabi Yockney",
    FullMobileNo: "+86 582 584 2580",
    email: "gyockneyw@addthis.com",
    signupDate: "15/12/2023",
  },
  {
    id: 34,
    fullName: "Abigale Looker",
    FullMobileNo: "+86 656 145 4040",
    email: "alookerx@berkeley.edu",
    signupDate: "29/10/2023",
  },
  {
    id: 35,
    fullName: "Ty O'Cannavan",
    FullMobileNo: "+86 189 394 4878",
    email: "tocannavany@friendfeed.com",
    signupDate: "29/09/2023",
  },
  {
    id: 36,
    fullName: "Thomasa Farlham",
    FullMobileNo: "+7 927 660 5312",
    email: "tfarlhamz@bing.com",
    signupDate: "24/03/2024",
  },
  {
    id: 37,
    fullName: "Titos McClune",
    FullMobileNo: "+86 926 634 1431",
    email: "tmcclune10@samsung.com",
    signupDate: "21/10/2023",
  },
  {
    id: 38,
    fullName: "Adan Scibsey",
    FullMobileNo: "+998 587 447 6029",
    email: "ascibsey11@myspace.com",
    signupDate: "03/08/2023",
  },
  {
    id: 39,
    fullName: "Kalil ffrench Beytagh",
    FullMobileNo: "+1 206 784 6972",
    email: "kffrench12@ibm.com",
    signupDate: "29/01/2024",
  },
  {
    id: 40,
    fullName: "Derry Vase",
    FullMobileNo: "+63 302 920 5939",
    email: "dvase13@google.ru",
    signupDate: "22/12/2023",
  },
  {
    id: 41,
    fullName: "Francklyn Garshore",
    FullMobileNo: "+595 300 628 7184",
    email: "fgarshore14@hp.com",
    signupDate: "25/10/2023",
  },
  {
    id: 42,
    fullName: "Duffie Firle",
    FullMobileNo: "+33 707 755 4410",
    email: "dfirle15@bluehost.com",
    signupDate: "23/06/2024",
  },
  {
    id: 43,
    fullName: "Nikolos Pencott",
    FullMobileNo: "+380 570 101 7663",
    email: "npencott16@flickr.com",
    signupDate: "14/02/2024",
  },
  {
    id: 44,
    fullName: "Coletta Miklem",
    FullMobileNo: "+55 106 786 3589",
    email: "cmiklem17@rediff.com",
    signupDate: "29/05/2024",
  },
  {
    id: 45,
    fullName: "Genni Tregale",
    FullMobileNo: "+62 663 718 0784",
    email: "gtregale18@rambler.ru",
    signupDate: "30/11/2023",
  },
  {
    id: 46,
    fullName: "Chilton Enderlein",
    FullMobileNo: "+52 827 463 7580",
    email: "cenderlein19@salon.com",
    signupDate: "04/08/2023",
  },
  {
    id: 47,
    fullName: "Fionnula Frosdick",
    FullMobileNo: "+62 767 823 8192",
    email: "ffrosdick1a@washingtonpost.com",
    signupDate: "24/03/2024",
  },
  {
    id: 48,
    fullName: "Chico Quantrell",
    FullMobileNo: "+960 969 820 7514",
    email: "cquantrell1b@mac.com",
    signupDate: "30/04/2024",
  },
  {
    id: 49,
    fullName: "Renae Posen",
    FullMobileNo: "+998 600 180 0307",
    email: "rposen1c@spiegel.de",
    signupDate: "15/11/2023",
  },
  {
    id: 50,
    fullName: "Alfy Firbanks",
    FullMobileNo: "+55 798 266 8718",
    email: "afirbanks1d@whitehouse.gov",
    signupDate: "01/05/2024",
  },
  {
    id: 51,
    fullName: "Wanids Hastwell",
    FullMobileNo: "+227 644 393 5512",
    email: "whastwell1e@scientificamerican.com",
    signupDate: "19/09/2023",
  },
  {
    id: 52,
    fullName: "Christye Piken",
    FullMobileNo: "+385 347 385 0652",
    email: "cpiken1f@cisco.com",
    signupDate: "21/07/2023",
  },
  {
    id: 53,
    fullName: "Vania Prebble",
    FullMobileNo: "+1 447 298 3153",
    email: "vprebble1g@deviantart.com",
    signupDate: "18/10/2023",
  },
  {
    id: 54,
    fullName: "Gifford Scolding",
    FullMobileNo: "+994 396 294 9829",
    email: "gscolding1h@shop-pro.jp",
    signupDate: "28/10/2023",
  },
  {
    id: 55,
    fullName: "Hermann MacGeaney",
    FullMobileNo: "+62 894 920 8188",
    email: "hmacgeaney1i@dell.com",
    signupDate: "27/04/2024",
  },
  {
    id: 56,
    fullName: "Carlene Theunissen",
    FullMobileNo: "+55 104 446 6665",
    email: "ctheunissen1j@intel.com",
    signupDate: "29/07/2023",
  },
  {
    id: 57,
    fullName: "Joellen Le Leu",
    FullMobileNo: "+237 136 121 2418",
    email: "jle1k@angelfire.com",
    signupDate: "08/09/2023",
  },
  {
    id: 58,
    fullName: "Jeremy Sedgemond",
    FullMobileNo: "+216 990 876 7716",
    email: "jsedgemond1l@shinystat.com",
    signupDate: "14/09/2023",
  },
  {
    id: 59,
    fullName: "Dore Witchard",
    FullMobileNo: "+62 460 171 0088",
    email: "dwitchard1m@businessinsider.com",
    signupDate: "24/03/2024",
  },
  {
    id: 60,
    fullName: "Marjorie Michelet",
    FullMobileNo: "+212 151 398 5465",
    email: "mmichelet1n@disqus.com",
    signupDate: "22/10/2023",
  },
  {
    id: 61,
    fullName: "Gill Collen",
    FullMobileNo: "+7 740 869 0145",
    email: "gcollen1o@squarespace.com",
    signupDate: "27/06/2024",
  },
  {
    id: 62,
    fullName: "Nadiya Bumphrey",
    FullMobileNo: "+351 410 575 7846",
    email: "nbumphrey1p@sogou.com",
    signupDate: "09/06/2024",
  },
  {
    id: 63,
    fullName: "Patrizio Tellenbrok",
    FullMobileNo: "+251 316 582 8875",
    email: "ptellenbrok1q@github.com",
    signupDate: "28/06/2024",
  },
  {
    id: 64,
    fullName: "Caryn Earp",
    FullMobileNo: "+351 438 734 0309",
    email: "cearp1r@flavors.me",
    signupDate: "05/06/2024",
  },
  {
    id: 65,
    fullName: "Sharia Brothwell",
    FullMobileNo: "+1 888 414 0299",
    email: "sbrothwell1s@berkeley.edu",
    signupDate: "19/03/2024",
  },
  {
    id: 66,
    fullName: "Sollie Osselton",
    FullMobileNo: "+55 263 804 6262",
    email: "sosselton1t@123-reg.co.uk",
    signupDate: "27/02/2024",
  },
  {
    id: 67,
    fullName: "Carolina Clissold",
    FullMobileNo: "+992 737 207 2980",
    email: "cclissold1u@printfriendly.com",
    signupDate: "04/03/2024",
  },
  {
    id: 68,
    fullName: "Timmie Muirden",
    FullMobileNo: "+81 627 162 6941",
    email: "tmuirden1v@devhub.com",
    signupDate: "12/03/2024",
  },
  {
    id: 69,
    fullName: "Olav Bushen",
    FullMobileNo: "+86 302 843 3532",
    email: "obushen1w@dyndns.org",
    signupDate: "28/12/2023",
  },
  {
    id: 70,
    fullName: "Hobart MacMaykin",
    FullMobileNo: "+86 863 117 8883",
    email: "hmacmaykin1x@berkeley.edu",
    signupDate: "28/11/2023",
  },
  {
    id: 71,
    fullName: "Margret Frie",
    FullMobileNo: "+1 858 938 9079",
    email: "mfrie1y@ucsd.edu",
    signupDate: "28/11/2023",
  },
  {
    id: 72,
    fullName: "Danica Ind",
    FullMobileNo: "+66 502 518 6929",
    email: "dind1z@japanpost.jp",
    signupDate: "23/06/2024",
  },
  {
    id: 73,
    fullName: "Legra Bodesson",
    FullMobileNo: "+33 920 168 1873",
    email: "lbodesson20@wiley.com",
    signupDate: "15/06/2024",
  },
  {
    id: 74,
    fullName: "Free Coster",
    FullMobileNo: "+972 677 364 5408",
    email: "fcoster21@boston.com",
    signupDate: "18/09/2023",
  },
  {
    id: 75,
    fullName: "Sybille Headon",
    FullMobileNo: "+62 783 338 1719",
    email: "sheadon22@w3.org",
    signupDate: "31/12/2023",
  },
  {
    id: 76,
    fullName: "Joanna Egglestone",
    FullMobileNo: "+57 971 883 5527",
    email: "jegglestone23@virginia.edu",
    signupDate: "25/08/2023",
  },
  {
    id: 77,
    fullName: "Emmett Ellcome",
    FullMobileNo: "+374 279 478 7151",
    email: "eellcome24@omniture.com",
    signupDate: "19/08/2023",
  },
  {
    id: 78,
    fullName: "Luci Sloat",
    FullMobileNo: "+977 837 898 7344",
    email: "lsloat25@epa.gov",
    signupDate: "20/01/2024",
  },
  {
    id: 79,
    fullName: "Gerik Quimby",
    FullMobileNo: "+1 918 491 0749",
    email: "gquimby26@amazon.de",
    signupDate: "09/02/2024",
  },
  {
    id: 80,
    fullName: "Lizbeth Hassard",
    FullMobileNo: "+7 532 668 5883",
    email: "lhassard27@comcast.net",
    signupDate: "02/12/2023",
  },
  {
    id: 81,
    fullName: "Lynn Witherspoon",
    FullMobileNo: "+86 409 582 0122",
    email: "lwitherspoon28@people.com.cn",
    signupDate: "24/06/2024",
  },
  {
    id: 82,
    fullName: "Erskine Wulfinger",
    FullMobileNo: "+62 808 818 6508",
    email: "ewulfinger29@newsvine.com",
    signupDate: "21/06/2024",
  },
  {
    id: 83,
    fullName: "Kacey le Keux",
    FullMobileNo: "+385 661 557 3194",
    email: "kle2a@devhub.com",
    signupDate: "15/12/2023",
  },
  {
    id: 84,
    fullName: "Christos Learoid",
    FullMobileNo: "+375 317 958 5338",
    email: "clearoid2b@columbia.edu",
    signupDate: "08/08/2023",
  },
  {
    id: 85,
    fullName: "Hyacinth Corneljes",
    FullMobileNo: "+86 953 694 0473",
    email: "hcorneljes2c@microsoft.com",
    signupDate: "26/06/2024",
  },
  {
    id: 86,
    fullName: "Barret MacIan",
    FullMobileNo: "+30 472 460 4978",
    email: "bmacian2d@sciencedaily.com",
    signupDate: "10/11/2023",
  },
  {
    id: 87,
    fullName: "Veriee Lufkin",
    FullMobileNo: "+86 926 918 7412",
    email: "vlufkin2e@mediafire.com",
    signupDate: "06/06/2024",
  },
  {
    id: 88,
    fullName: "Allie Limon",
    FullMobileNo: "+387 473 267 6952",
    email: "alimon2f@naver.com",
    signupDate: "20/01/2024",
  },
  {
    id: 89,
    fullName: "Philippa Duckers",
    FullMobileNo: "+385 655 913 4900",
    email: "pduckers2g@cafepress.com",
    signupDate: "22/03/2024",
  },
  {
    id: 90,
    fullName: "Wat MacGragh",
    FullMobileNo: "+86 699 899 1532",
    email: "wmacgragh2h@vkontakte.ru",
    signupDate: "12/05/2024",
  },
  {
    id: 91,
    fullName: "Rhea Vasiljevic",
    FullMobileNo: "+86 500 661 6511",
    email: "rvasiljevic2i@fc2.com",
    signupDate: "08/05/2024",
  },
  {
    id: 92,
    fullName: "Rich Hurleston",
    FullMobileNo: "+386 729 417 8868",
    email: "rhurleston2j@privacy.gov.au",
    signupDate: "27/09/2023",
  },
  {
    id: 93,
    fullName: "Barde Slocum",
    FullMobileNo: "+86 847 993 6976",
    email: "bslocum2k@cam.ac.uk",
    signupDate: "18/08/2023",
  },
  {
    id: 94,
    fullName: "Waldo Pendrid",
    FullMobileNo: "+86 182 918 9550",
    email: "wpendrid2l@adobe.com",
    signupDate: "11/04/2024",
  },
  {
    id: 95,
    fullName: "Sandro Lawler",
    FullMobileNo: "+46 139 408 1306",
    email: "slawler2m@unblog.fr",
    signupDate: "02/05/2024",
  },
  {
    id: 96,
    fullName: "Jourdain Winspire",
    FullMobileNo: "+86 272 530 4978",
    email: "jwinspire2n@springer.com",
    signupDate: "22/11/2023",
  },
  {
    id: 97,
    fullName: "Pietro Stilldale",
    FullMobileNo: "+1 720 165 3854",
    email: "pstilldale2o@over-blog.com",
    signupDate: "13/12/2023",
  },
  {
    id: 98,
    fullName: "Vite Sandilands",
    FullMobileNo: "+33 622 174 8777",
    email: "vsandilands2p@zdnet.com",
    signupDate: "22/08/2023",
  },
  {
    id: 99,
    fullName: "Roselle Simes",
    FullMobileNo: "+93 398 716 2531",
    email: "rsimes2q@liveinternet.ru",
    signupDate: "09/06/2024",
  },
  {
    id: 100,
    fullName: "Bartholomeus Ubank",
    FullMobileNo: "+7 563 494 7292",
    email: "bubank2r@tripadvisor.com",
    signupDate: "30/12/2023",
  },
];

export const getUsers = (page, limit) => {
  let array = [];
  for (let i = (page - 1) * limit; i < page * limit; i++) {
    array.push(users[i]);
  }

  return array;
};

export const getLength = () => {
  return users.length;
};