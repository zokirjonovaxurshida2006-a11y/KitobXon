/* ============================================================
   KitobXon — Kitoblar Ma'lumotlari (Books Data)
   ============================================================ */

const CATEGORIES = [
    { id: 'all', name: 'Barchasi', icon: '📚', color: '#6366f1' },
    { id: 'classic', name: 'Klassik adabiyot', icon: '🏛️', color: '#8b5cf6' },
    { id: 'novel', name: 'Roman', icon: '📖', color: '#ec4899' },
    { id: 'science', name: 'Ilmiy', icon: '🔬', color: '#06b6d4' },
    { id: 'philosophy', name: 'Falsafa', icon: '🤔', color: '#f59e0b' },
    { id: 'history', name: 'Tarix', icon: '🏰', color: '#10b981' },
    { id: 'poetry', name: 'She\'riyat', icon: '✍️', color: '#f43f5e' },
    { id: 'children', name: 'Bolalar uchun', icon: '🧒', color: '#a855f7' },
    { id: 'psychology', name: 'Psixologiya', icon: '🧠', color: '#3b82f6' },
    { id: 'business', name: 'Biznes', icon: '💼', color: '#14b8a6' },
    { id: 'adventure', name: 'Sarguzasht', icon: '🗺️', color: '#f97316' },
    { id: 'fantasy', name: 'Fantastika', icon: '🔮', color: '#7c3aed' }
];

const BOOKS = [
    {
        id: 1,
        title: "O'tkan kunlar",
        author: "Abdulla Qodiriy",
        genre: "classic",
        year: 1926,
        pages: 320,
        rating: 4.9,
        reads: 15420,
        language: "O'zbek",
        cover: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        coverEmoji: "🏛️",
        description: "O'zbek adabiyotining birinchi romani. XIX asr oxiri — XX asr boshlarida Toshkent hayotini tasvirlovchi tarixiy roman. Otabek va Kumushning sevgi va fojea to'la hayoti.",
        isNew: false,
        isTrending: true,
        content: [
            "Birinchi bob: Toshkent\n\nXIX asrning oxirgi choragida Toshkent shahri O'rta Osiyoning eng yirik va gavjum shaharlaridan biri edi. Shaharning eski qismida tor ko'chalar, baland devorli hovlilar, hashamatli masjid va madrasalar joylashgan edi.\n\nShu davrda Toshkentning Sebzor dahasida bir boy oila yashardi. Ota — Yusufbek hoji — shaharning hurmatli kishilaridan biri bo'lib, savdo-sotiq bilan shug'ullanardi. Uning yagona o'g'li Otabek yoshligidan aqlli, bilimdon va go'zal yigit bo'lib o'sdi.\n\nOtabek madrasada tahsil oldi, arab va fors tillarini mukammal o'rgandi. Yoshligi bilan birga uning dilida ilm-ma'rifatga bo'lgan muhabbat kuchayib borardi.",
            "Otabek kunlarning birida otasi bilan birga Marg'ilonga safarga chiqdi. Bu safar uning butun hayotini o'zgartiruvchi voqealar boshlanishiga sabab bo'ldi.\n\nMarg'ilonga yetib kelishgach, ular shaharning mashhur savdogarlaridan biri — Qutidor hojining mehmonxonasida to'xtashdi. Qutidor hoji juda boy va obro'li kishi edi. Uning oilasida bir qiz bor edi — Kumush.\n\nKumush — o'z nomiga munosib ravishda — go'zal, nazokatli va aqlli qiz edi. Uning ko'zlari kumush rangida porlab turardi, sochlari qora tundek to'lqinlanib tushardi.",
            "Otabek birinchi marta Kumushni ko'rgan zahoti, uning go'zalligiga mahliyo bo'ldi. Yuragi shu qadar tez ura boshladiki, bu his avvalgi barcha tuyg'ularidan kuchli edi.\n\nKunlar o'tdi. Otabek va Kumush orasida asta-sekin yaqinlik paydo bo'ldi. Ularning yuraklarida muhabbat alangasi yona boshladi. Bu sevgi — pok, samimiy va chuqur edi.\n\nOtabekning otasi Yusufbek hoji o'g'lining ko'nglini bilib, Qutidor hoji bilan gaplashdi. Ikki oila kelishib, Otabek bilan Kumushning to'yiga tayyorgarlik ko'rishdi.",
            "To'y kunlari keldi. Butun Marg'ilon shahri bayram kayfiyatida edi. Otabek va Kumush nikoh qiyishdi va baxtli umr boshladilar.\n\nBiroq, baxt doimo davom etmaydi. Toshkentga qaytgach, Otabekning onasi Oftob oyim Kumushni yoqtirmadi. U o'g'liga boshqa qiz — Zaynabni olmoqchi bo'ldi.\n\nOtabek ikki olov orasida qoldi. Bir tomondan — sevimli Kumushi, ikkinchi tomondan — onasining istagi. Bu ziddiyat uning hayotini tobora murakkablashtirdi.\n\nFojea boshlanmoqda edi...",
            "Kunlar o'tgan sari Oftob oyimning Kumushga bo'lgan munosabati yanada yomonlashdi. U turli bahonalar bilan kelinni xo'rladi, uning hayotini achchiq qildi.\n\nKumush sabr bilan barchasiga chidadi. U Otabekni sevardi va bu sevgi unga kuch berardi. Lekin har bir qattiq so'z uning yuragiga pichoqdek sanchilardi.\n\nOtabek bu ahvolni ko'rib, chuqur iztirob chekardi. U onasiga qarshi chiqolmasdi — chunki o'zbek urf-odatlariga ko'ra, ota-onaga itoat qilish farzandning birinchi burchi edi.\n\nShu tariqa, bu uchta inson — Otabek, Kumush va Oftob oyim — orasidagi mojarolar tobora chuqurlashib bordi."
        ]
    },
    {
        id: 2,
        title: "Mehrobdan chayon",
        author: "Abdulla Qodiriy",
        genre: "classic",
        year: 1929,
        pages: 280,
        rating: 4.8,
        reads: 12300,
        language: "O'zbek",
        cover: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        coverEmoji: "🦂",
        description: "Qo'qon xonligi davrida yashagan yosh yigit Anvar va uning sevgilisi Ranohokning fojiali sevgi hikoyasi. Xonlik zulmi va adolatsizligi aks ettirilgan.",
        isNew: false,
        isTrending: true,
        content: [
            "Birinchi bob: Qo'qon\n\nQo'qon xonligi — O'rta Osiyoning eng qudratli davlatlaridan biri — o'zining shon-sharafli kunlarini boshdan kechirayotgan edi. Xon saroyi hashamat va dabdabaga cho'mgan, ammo oddiy xalq og'ir hayot kechirardi.\n\nShu davrda Qo'qon shahrining bir chekkasida oddiy, lekin ma'rifatli oilada Anvar ismli yigit yashardi. Anvar — aqlli, bilimdon va adolatparvar yosh edi.\n\nU madrasada o'qirdi va kelajakda xalqiga foyda keltirish orzusida edi. Lekin taqdir unga boshqacha sinov tayyorlamoqda edi.",
            "Anvar kunlarning birida shahar bozorida Ranohon ismli go'zal qizni uchratdi. Ranohon — nafaqat go'zalligi, balki aqli va farosati bilan ham ajralib turardi.\n\nUlarning ko'zlari to'qnashgan lahzada, ikkalasining ham yuragida tushuntirish qiyin bo'lgan bir his paydo bo'ldi. Bu — sevgi edi.\n\nAnvar va Ranohon yashirincha uchrasha boshladilar. Ular bog'larda, ko'chalarning xilvet burchaklarida ko'rishardi. Har bir uchrashuv ularning muhabbatini yanada kuchaytirar edi.",
            "Biroq, baxt uzog'a cho'zilmadi. Ranohonning go'zalligi haqidagi xabar xon saroyigacha yetib bordi. Xon Ranohonni o'z harimasiga olmoqchi bo'ldi.\n\nAnvar bu xabarni eshitgach, dunyosi buzildi. U sevgilisini yo'qotishga rozi emas edi. Lekin xonning buyrug'iga qarshi chiqish — hayotdan kechish demak edi.\n\nRanohon ham qattiq tashvishda edi. U Anvardan boshqa hech kimni sevmas, hech kimga tegmas edi. Lekin xon hokimiyati oldida oddiy qiz nima qila olardi?\n\nIkki sevishgan yurak buyuk sinov oldida turardi.",
            "Anvar xonga qarshi kurashish yo'llarini qidira boshladi. U shahardagi boshqa adolatparvar yigitlar bilan aloqa o'rnatdi. Ular yashirincha yig'ilishlar o'tkazib, xon zulmiga qarshi reja tuzishdi.\n\nLekin xonning josuslari hamma joyda edi. Anvarning faoliyati haqida xonga xabar yetdi. Xon g'azabga mindi va Anvarni tutib kelishni buyurdi.\n\nAnvar qo'lga tushdi. Uni zindonga tashladilar. Qorong'i, nam zindon devorlari orasida Anvar sevgilisi Ranohonni o'ylab, ko'z yoshlarini to'kardi.\n\nRanohon esa Anvarning tutilganini eshitib, hushidan ketdi...",
            "Zindon kunlari og'ir o'tardi. Anvar har kuni sevgilisini o'ylab, ozodlik haqida orzu qilardi. U zindondagi boshqa mahbuslar bilan tanishdi va ularning ham xon zulmidan aziyat chekayotganini bildi.\n\nBu orada Ranohon ham bo'sh o'tirmadi. U Anvarni qutqarish uchun turli yo'llar qidirdi. Uning jasur va uddaburon xarakteri bu og'ir paytda ham uni tark etmadi.\n\nLekin taqdir shafqatsiz edi. Voqealar kutilmagan tomonga burildi. Anvar va Ranohonning sevgisi — bu davr adolatsizligining qurboni bo'lmoqda edi.\n\nRoman davomi qiziqarli va hayajonli voqealar bilan to'la..."
        ]
    },
    {
        id: 3,
        title: "Kecha va Kunduz",
        author: "Cho'lpon",
        genre: "novel",
        year: 1936,
        pages: 340,
        rating: 4.7,
        reads: 11200,
        language: "O'zbek",
        cover: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        coverEmoji: "🌗",
        description: "XX asr boshlaridagi O'zbekiston hayotini tasvirlovchi roman. Zebi va Miryoqub sevgisi fonida jamiyatdagi o'zgarishlar ko'rsatilgan.",
        isNew: false,
        isTrending: true,
        content: [
            "Birinchi bob\n\nXX asrning birinchi choragida O'zbekistonda katta o'zgarishlar ro'y bermoqda edi. Eski turmush tarzi bilan yangilik orasidagi kurash avjiga chiqqan payt edi.\n\nShu davrda bir kichik shaharchada Zebi ismli qiz yashardi. Zebi — go'zal, aqlli va bilimga chanqoq qiz edi. U o'z davrining ilg'or fikrli qizlaridan biri bo'lib, o'qish va bilim olishni orzu qilardi.\n\nLekin an'anaviy jamiyat qizlarning o'qishiga qarshi edi. Zebi bu to'siqlarni yengish uchun kurashishi kerak edi.",
            "Zebi madrasaning yonida maxfiy ravishda dars olardi. Uni bir yosh muallim — Miryoqub o'qitardi. Miryoqub ham ilg'or fikrli yigit bo'lib, jadidchilik harakatining faol a'zosi edi.\n\nUlar dars jarayonida bir-birlariga yaqinlashdilar. Bilimga bo'lgan umumiy muhabbat ularni birlashtirdi. Asta-sekin bu do'stlik sevgiga aylandi.\n\nMiryoqub Zebiga yangi dunyo haqida gapirib berardi — erkinlik, tenglik, ma'rifat haqida. Zebi esa bu g'oyalarni jon-jahdi bilan qabul qilardi.\n\nLekin ularning yo'lida ko'plab to'siqlar kutmoqda edi.",
            "Zebining otasi — Mardonqul ota — qattiq konservativ kishi edi. U qizining o'qishiga, ayniqsa, erkak muallim bilan uchrashishiga qat'iyan qarshi edi.\n\nMardonqul ota Zebi haqidagi mish-mishlarni eshitgach, g'azabga mindi. U qizini uyga qamab qo'ydi va boshqa hech qayerga chiqarmaslikka qaror qildi.\n\nZebi uyda yig'lab, Miryoqubni sog'indi. U erkinlik va ilm uchun kurashishga qaror qildi, lekin otasining qahriga duchor bo'lishdan ham qo'rqardi.\n\nBu — faqat sevgi emas, balki eski va yangi dunyo orasidagi kurash edi.",
            "Miryoqub Zebining ahvolini bilib, chuqur tashvishga tushdi. U Zebini qutqarish va uning ilm olish huquqini himoya qilish uchun harakatga o'tdi.\n\nU jadidchi do'stlari bilan birga Mardonqul otaga ta'sir ko'rsatishga harakat qildi. Lekin eski fikrli kishilar ham bo'sh o'tirmadi — ular Miryoqubga qarshi turishdi.\n\nShahar ikki lagerga bo'linib ketdi: bir tomondan yangilik tarafdorlari, ikkinchi tomondan eski tartib himoyachilari.\n\nBu kurash — butun O'zbekistonni qamrab olayotgan katta jarayonning kichik ko'rinishi edi.",
            "Voqealar tobora keskinlashdi. Miryoqub qamoqqa olindi. Zebini esa otasi majburan boshqa kishiga uzatmoqchi bo'ldi.\n\nLekin Zebi bo'ysunmadi. U jasurlik bilan otasiga qarshi chiqdi va o'z sevgisini, o'z erkinligini himoya qildi.\n\nRomanning yakunida «kecha va kunduz» — ya'ni eski va yangi orasidagi kurash o'z yechimini topadi. Lekin bu yechim oson bo'lmaydi...\n\nCho'lponning bu asari — nafaqat sevgi romani, balki butun bir davrning badiiy qomusi hisoblanadi."
        ]
    },
    {
        id: 4,
        title: "Sarob",
        author: "Abdulla Qahhor",
        genre: "novel",
        year: 1937,
        pages: 290,
        rating: 4.6,
        reads: 9800,
        language: "O'zbek",
        cover: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
        coverEmoji: "🏜️",
        description: "O'zbek qishloq hayotini tasvirlovchi roman. Dehqonlarning og'ir turmushi, ularning orzu-umidlari va kurashi.",
        isNew: false,
        isTrending: false,
        content: [
            "Birinchi bob: Qishloq\n\nO'zbekistonning bir chekkasida, tog'lar etaklaridagi kichik qishloqda hayot o'z odatiy yo'nalishida davom etmoqda edi. Dehqonlar har kuni tongdan kechgacha dalada mehnat qilishardi.\n\nShu qishloqda Sulton ismli dehqon yashardi. U — oddiy, mehnatkash va halol odam edi. Butun umrini yerga, dalachilikka bag'ishlagan edi.\n\nAmmo uning barcha mehnati foyda bermayotgandek tuyulardi. Yer egalari va boylar dehqonlarning mehnatini o'zlashtirib, ularni qashshoqlikda saqlab turishardi.\n\nSulton bu adolatsizlikka qarshi nimanidir qilishi kerakligini his qilardi, lekin qanday?",
            "Sultonning oilasida xotini Oybibi va ikki farzandi bor edi. Ular kamtar hayot kechirishardi — kichik uy, bir parcha yer va bir necha qo'y.\n\nOybibi sabr va matonatli ayol edi. U erining og'ir mehnatini ko'rib, doimo unga dalda berardi. Farzandlari esa hali kichik bo'lib, ularning kelajagi noaniqlik pardasi ostida edi.\n\nSulton farzandlarining yaxshi hayot kechirishini istardi. U ularni o'qitmoqchi, bilimli qilmoqchi edi. Lekin buning uchun pul kerak edi, pul esa yo'q edi.\n\nU ko'pincha kechqurunlari uyning tomida o'tirib, yulduzli osmonga tikilib, kelajak haqida o'ylardi.",
            "Qishloqqa yangi odam keldi — shahardan kelgan yosh o'qituvchi Karim. U qishloqda maktab ochish uchun kelgan edi.\n\nKarim ilg'or fikrli yigit bo'lib, dehqonlarning ahvolini ko'rib, ularning huquqlari uchun kurashish zarurligini tushundi.\n\nSulton Karim bilan tez do'stlashdi. Ular kechqurunlari uzoq suhbatlashishardi — hayot, adolat, kelajak haqida.\n\nKarim Sultonga yangi g'oyalar haqida gapirib berdi: erkinlik, tenglik, ilm-ma'rifat haqida. Sultonning ko'zlari ochildi — u birinchi marta o'z hayotiga boshqacha nuqtai nazardan qaradi.",
            "Karimning faoliyati qishloq boylarini xavotirga solib qo'ydi. Ular dehqonlarning uyg'onishini istamashardi.\n\nBoy Rahmatulla — qishloqning eng badavlat va ta'sirli kishisi — Karimga qarshi fitna uyushtira boshladi. U Karimni shahardan quvilgan deb, xalqni buzuvchi deb mish-mishlar tarqatdi.\n\nSulton bu mish-mishlarga ishonmadi. U Karimning haq ekanligini bilardi. Lekin boshqa dehqonlar orasida shubha va qo'rquv paydo bo'la boshladi.\n\nQishloqda ikki kuch — eski va yangi — o'rtasida ziddiyat kuchayib borardi.",
            "Voqealar keskinlashdi. Rahmatulla o'z odamlarini yig'ib, Karimni qishloqdan haydashga qaror qildi.\n\nLekin Sulton va bir necha jasur dehqonlar Karim tarafida turdilar. Ular boylarning zulmiga qarshi birlashdilar.\n\nBu kurash oson bo'lmadi. Qurbonlar ham bo'ldi. Lekin dehqonlarning birligi va jasuratlari oxir-oqibat g'alaba qozondi.\n\nRoman dehqonlarning erkinlik uchun kurashini, ularning qiyinchiliklarini va umidlarini ta'sirli tasvirlab beradi. 'Sarob' — bu cho'lda ko'rinadigan ilinjdek, uzoqdagi orzularni anglatadi."
        ]
    },
    {
        id: 5,
        title: "Alisher Navoiy",
        author: "Oybek",
        genre: "history",
        year: 1945,
        pages: 480,
        rating: 4.9,
        reads: 14500,
        language: "O'zbek",
        cover: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        coverEmoji: "👑",
        description: "Buyuk o'zbek shoiri va davlat arbobi Alisher Navoiy hayotiga bag'ishlangan tarixiy-biografik roman.",
        isNew: false,
        isTrending: true,
        content: [
            "Birinchi bob: Hirot\n\nXV asr. Temuriylar davlati. Hirot — O'rta Sharqning eng gullab-yashnagan shaharlaridan biri. Bu yerda ilm-fan, san'at va adabiyot ravnaq topgan edi.\n\nShu davrda, 1441-yil 9-fevralda Hirotda bir go'dak dunyoga keldi. Ota-onasi unga Nizomiddin Mir Alisher deb ism qo'ydilar. Bu bola — kelajakda butun turkiy dunyoning faxri bo'ladigan buyuk shoir, mutafakkir va davlat arbobi edi.\n\nAlisher yoshligidanoq o'zining ajoyib iste'dodi bilan ajralib turdi. U uch yoshida she'r yod olaolardi, to'rt yoshida esa o'zi she'r to'qiy boshladi.",
            "Yosh Alisher Hirotning eng yaxshi madrasalarida ta'lim oldi. U arab, fors va turkiy tillarni mukammal o'rgandi. Shu bilan birga, tarix, falsafa, matematika va astronomiya ilmlarini ham chuqur o'rgandi.\n\nMadrasada u Husayn Boyqaro bilan tanishdi va do'stlashdi. Bu do'stlik umrbod davom etdi va kelajakda ikkalasining ham taqdirida muhim rol o'ynadi.\n\nAlisherning she'riy iste'dodi yosh chog'idanoq barcha e'tiborini tortdi. Uning g'azallari, qasidalari va ruboiylari odamlarning og'zidan tushmay qoldi.",
            "Alisher katta bo'lgach, Husayn Boyqaro Hirot taxtiga o'tirdi. U do'stini — Alisherning buyuk vazirlik lavozimiga taklif qildi.\n\nNavoiy (u endi shu taxallus bilan mashhur edi) nafaqat shoir, balki buyuk davlat arbobi ham bo'ldi. U mamlakatda ko'plab islohotlar o'tkazdi:\n\n— Madrasalar va kutubxonalar qurdirdi\n— Ilm-fan va san'atni qo'llab-quvvatladi\n— Kambag'allarga yordam berdi\n— Suvni taqsimlash tizimini yaxshiladi\n— Ko'priklar va karvonsaroylar qurdirdi\n\nU haqiqiy xalq xizmatkori edi.",
            "Navoiyning adabiy merosi ulkan. U beshta doston — \"Xamsa\" ni yaratdi:\n\n1. Hayrat ul-abror\n2. Farhod va Shirin\n3. Layli va Majnun\n4. Sab'ai sayyor\n5. Saddi Iskandariy\n\nBu dostonlar turkiy adabiyotning durdonalari hisoblanadi. Navoiy birinchi marta turkiy tilda Nizomiy va Dehlaviy bilan teng kela oladigan asarlar yaratdi.\n\nUning g'azallari — sevgi, go'zallik, hayot ma'nosi haqida — hanuzgacha odamlarning qalbini larzaga keltiradi.",
            "Navoiy umrining oxirigacha xalqiga xizmat qilib yashadi. U hech qachon oila qurmadi — butun umrini ilm, adabiyot va davlat ishlariga bag'ishladi.\n\n1501-yil 3-yanvarda Alisher Navoiy 59 yoshida vafot etdi. Butun Hirot yig'ladi. Xalq o'zining eng buyuk farzandini yo'qotdi.\n\nLekin Navoiy vafot etmadi — u o'z asarlari orqali abadiy yashaydi. Uning she'rlari, dostonlari va falsafiy asarlari bugun ham o'qiladi, o'rganiladi va sevib hurmat qilinadi.\n\nAlisher Navoiy — nafaqat o'zbek, balki butun turkiy dunyoning faxri va g'ururidir."
        ]
    },
    {
        id: 6,
        title: "Shum bola",
        author: "G'afur G'ulom",
        genre: "children",
        year: 1936,
        pages: 180,
        rating: 4.8,
        reads: 18200,
        language: "O'zbek",
        cover: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        coverEmoji: "👦",
        description: "O'zbek bolalar adabiyotining durdonasi. Quvnoq va sho'x bolaning sarguzashtlari haqida hazil-mutoyibaga boy qissa.",
        isNew: false,
        isTrending: true,
        content: [
            "Birinchi bob: Mening ismim\n\nMening ismim — ha, aytmoqchi, mening ismim nima ekan? Bilasizmi, meni hamma \"shum bola\" deydi. Onam ham, otam ham, qo'shnilar ham — hammasi.\n\nNega shum bola deysizlar, deb so'rasam, onam kuladi: \"Chunki sen shumsan-da!\" — deydi.\n\nXo'sh, men shummanmi? Bilmayman. Lekin qiziq narsalar qilaman, bu rost. Masalan, kecha qo'shnimizning mushugini cho'miltirib qo'ydim. Mushuk sho'rlik suvdan qo'rqar ekan — shunday qochib ketdiki, hali ham topilmadi.\n\nOnam buni eshitib, qulog'imdan tortdi. Lekin men ko'p og'riqni sezmadim — chunki qulog'im tortilishga odatlangan.",
            "Maktabda ham meni hamma taniydi. O'qituvchim Hamid aka har doim: \"O, shum bola keldi!\" — deb bosh chayqaydi.\n\nLekin men yomon bola emasman. Men faqat qiziquvchanman. Hamma narsani bilmoqchiman, hamma narsani ko'rmoqchiman, hamma narsani sinab ko'rmoqchiman.\n\nMasalan, o'tgan hafta men derazadan sakrab tushdim. Nima uchun? Qush qanday uchishini sinab ko'rmoqchi edim. Natija? Tizzam shilinib ketdi va onam meni bir hafta uydan chiqarmadi.\n\nLekin men hali ham qush bo'lib ucha olishimga ishonaman. Faqat biroz mashq qilish kerak.",
            "Mening eng yaxshi do'stim — Hasanboy. U ham men kabi sho'x. Ikkalamiz birga bo'lsak, butun mahalla bezovta bo'ladi.\n\nBir kuni biz bozorga bordik. Bozorda juda ko'p qiziq narsalar bor edi: mevalar, o'yinchoqlar, hayvonlar...\n\nBiz bir paytda eshak minib ko'rishga qaror qildik. Eshak egasi bizni ko'rib hayron bo'ldi, lekin ruxsat berdi.\n\nMen eshakka mindim. Eshak birinchi oldinga yurdi, keyin to'satdan orqaga tisarildi. Men sakrab tushdim — to'g'ridan-to'g'ri ariq suviga!\n\nButun bozor kuldi. Men ham kuldim. Nima bo'libdi? Sal ho'l bo'ldim, xolos.",
            "Qishda biz qor o'ynadik. Men eng katta qor odamni yasadim — u menikidan ham baland edi!\n\nQor odamga sabzi burun, ko'mir ko'z va eski shlyapa qo'ydim. U juda chiroyli chiqdi.\n\nLekin ertasiga quyosh chiqqanda qor odam erib ketdi. Men yig'ladim. Onam kuldi: \"Qor odam baribir eriydi, bolam,\" — dedi.\n\nMen o'ylab qoldim: demak, hamma narsa o'tkinchi ekan. Lekin xotiralar saqlanib qoladi.\n\nShu kundan beri men har qishda qor odam yasayman. Va har safar u eriydi. Lekin men boshqasini yasayman. Chunki hayot shunday — davom etadi.",
            "Yoz keldi. Men tatiliga chiqdim. Bobomning qishlog'iga bordim.\n\nQishloqda hayot shahardagidan butunlay boshqacha. Bu yerda daraxtlar ko'p, havo toza, daryo bor.\n\nMen har kuni daryoga cho'milgani bordim, daraxtlarga chirdim, dalada yugurdim. Bu — eng yaxshi kunlar edi.\n\nBobom menga ko'p narsalarni o'rgatdi: baliq tutishni, otga minishni, non yopishni. U juda dono odam.\n\nBobom aytdi: \"Bolam, shum bo'lishing yomon emas. Lekin shumliging bilan birovga zarar berma. Yaxshi ishlar qil — shunda hamma seni yaxshi ko'radi.\"\n\nMen bobomning so'zlarini eslab qoldim. Va biroz kamroq shumlik qila boshladim. Biroz..."
        ]
    },
    {
        id: 7,
        title: "Ikki eshik orasi",
        author: "O'tkir Hoshimov",
        genre: "novel",
        year: 1986,
        pages: 350,
        rating: 4.7,
        reads: 10500,
        language: "O'zbek",
        cover: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
        coverEmoji: "🚪",
        description: "O'zbek oilasi hayotini, avlodlar orasidagi munosabatlarni va insoniy qadriyatlarni tasvirlovchi roman-esse.",
        isNew: false,
        isTrending: false,
        content: [
            "Birinchi bob\n\nHar bir insonning hayotida ikki eshik bor: biri — tug'ilish, ikkinchisi — o'lim. Bu ikki eshik orasida biz yashayapmiz, sevayapmiz, kurashamiz va orzu qilamiz.\n\nMen bu kitobda o'z oilam haqida, ota-onam haqida, bolaligim haqida so'zlamoqchiman. Chunki oila — hayotning asosi, uning negizi.\n\nMening otam — oddiy o'zbek kishisi edi. U urush ko'rgan, qiyinchiliklarni boshdan kechirgan, lekin hech qachon ruhiy kuchini yo'qotmagan inson edi.\n\nOnam esa — sabr va mehribonlikning timsoli. U oilamizning haqiqiy ustuni edi.",
            "Men bolaligimni eslayman — u go'zal va sehrli davr edi. Mahallada bolalar bilan o'ynardik, ko'chada yugurib yurar edik.\n\nO'sha paytda hayot oddiy, lekin to'liq edi. Biz ko'p narsaga ega emas edik, lekin baxtli edik. Chunki bizda eng muhim narsa bor edi — oila mehri.\n\nOtam kechqurunlari bizga ertaklar aytib berardi. U juda yaxshi hikoyachi edi. Uning ovozida sehrli kuch bor edi — biz uning har bir so'ziga quloq solib, boshqa dunyoga sayohat qilardik.\n\nO'sha ertaklar mening adabiyotga bo'lgan muhabbatimning boshlanishi edi.",
            "Vaqt o'tdi. Men o'sdim, maktabga bordim, keyin institutga kirdim. Hayot murakkablasha boshladi.\n\nLekin oilam — har doim mening tayanch nuqtam bo'lib qoldi. Qiyinchiliklarda otamning maslahatini so'rardim, g'amgin bo'lganimda onamning bag'riga bosh qo'yardim.\n\nO'zbek oilasi — bu kichik davlat. Bu yerda o'z qonunlari, o'z an'analari, o'z qadriyatlari bor. Va bu qadriyatlar — hurmat, mehribonlik, sabr, mehmondo'stlik — avloddan avlodga o'tadi.\n\nMen bu kitobda shu qadriyatlar haqida yozmoqchiman.",
            "Otam qariganda, men uning har bir so'ziga alohida e'tibor bera boshladim. Chunki bilardim — bu so'zlar bebaho.\n\nU menga dedi: \"O'g'lim, hayotda eng muhim narsa — odamiylik. Qancha muvaffaqiyatga erishsang ham, agar odamiyliging yo'q bo'lsa — hammasi behuda.\"\n\nBu so'zlar mening hayotiy dasturimga aylandi.\n\nOtam vafot etganda, men katta bo'shliqni his qildim. Lekin uning so'zlari, uning o'gitlari, uning namunasi — hammasi men bilan birga qoldi.\n\nBirinchi eshikdan otam kiritgan edi, ikkinchi eshikdan esa o'zi chiqib ketdi...",
            "Endi men o'zim otaman. Va men o'z farzandlarimga otamdan olgan qadriyatlarni bermoqdaman.\n\nHayotning ma'nosi — bu zanjirni davom ettirish. Avloddan avlodga bilim, tajriba, muhabbat va insoniylikni uzatish.\n\nMen bu kitobni yozar ekanman, o'tmishga nazar tashlayman va kelajakka umid bilan qarayman.\n\nIkki eshik orasi — bu bizning hayotimiz. Va bu hayotni qanday yashaymiz — bu bizning o'z qo'limizda.\n\nMuhimi — bu ikki eshik orasida iz qoldirish. Yaxshi iz. Inson bo'lib yashash. Va sevish. Har doim sevish."
        ]
    },
    {
        id: 8,
        title: "Dunyoning ishlari",
        author: "Tog'ay Murod",
        genre: "novel",
        year: 1995,
        pages: 310,
        rating: 4.5,
        reads: 8700,
        language: "O'zbek",
        cover: "linear-gradient(135deg, #c3cfe2 0%, #f5f7fa 100%)",
        coverEmoji: "🌍",
        description: "Zamonaviy o'zbek hayoti, insoniy munosabatlar va ruhiy izlanishlar haqida chuqur roman.",
        isNew: true,
        isTrending: false,
        content: [
            "Birinchi bob: Tong\n\nTong otdi. Yana bir kun boshlandi. Yana bir kun — umrdan bir kun kam.\n\nMen derazadan tashqariga qaradim. Ko'cha hali jim. Faqat uzoqda xo'roz qichqiryapti va qo'shni hovlidan sigir mo'rayotganini eshityapman.\n\nMen — Rustam. Oddiy o'zbek kishisiman. Qirq yoshdaman. Xotinim bor, ikki farzandim bor. Shahar chekkasidagi oddiy uyda yashayman.\n\nHayotim oddiy. Lekin oddiy hayot ichida ham qancha murakkabliklar borligini bilasizmi?",
            "Ishga yo'l oldim. Avtobus to'la — odamlar bir-birini siqib turibdi. Har kimning o'z tashvishi, o'z g'ami bor.\n\nMen ofisda ishlayman — oddiy xizmatchi. Oyligim katta emas, lekin oilani boqishga yetadi. Zo'rg'a yetadi.\n\nIshda xo'jayinning buyruqlari, hamkasblarning gaplari, hujjatlarning g'arami... Kunlar shunday o'tadi — bir xil, takroriy.\n\nLekin bugun boshqacha kun. Bugun mening hayotimda muhim voqea bo'ldi.",
            "Ishdan qaytayotib, eski do'stim Bahodirga duch keldim. Biz o'n yil ko'rishmagan edik.\n\nBahodir o'zgarmagan — hanuz xushchaqchaq, hanuz hazilkash. Lekin uning ko'zlarida nimadir o'zgargan edi.\n\nBiz choyxonaga o'tirdik va uzoq gaplashdik. U menga o'z hayoti haqida aytib berdi — muvaffaqiyatlari va muvaffaqiyatsizliklari, quvonchlari va g'amlari haqida.\n\nMen esa o'z hayotim haqida o'yladim. Bahodirning hayoti men bilganidan butunlay boshqacha ekan.\n\nHar bir insonning o'z dunyosi bor ekan — va bu dunyo tashqaridan ko'ringandan ko'ra kattaroq.",
            "O'sha suhbatdan keyin men ko'p narsalarni qayta o'ylab ko'rdim.\n\nMen baxtlimidim? Bilmasdim. Muvaffaqmidim? Bu nima — muvaffaqiyat? Pul? Martaba? Obro'?\n\nYo'q, muvaffaqiyat — bu ichki tinchlik, deb o'yladim. Bu — oilangning sog'-salomatligi, farzandlarning kulishi, xotinning mamnunligi.\n\nMen bu oddiy haqiqatlarni unutib qo'ygan ekanman. Kundalik tashvishlar ichida eng muhim narsalarni ko'rmaydigan bo'lib qolganman.\n\nShu oqshomdan boshlab men hayotimga boshqacha qaray boshladim.",
            "Kunlar o'tdi. Men o'zgardim. Ko'proq oilamga e'tibor bera boshladim. Farzandlarim bilan o'ynay boshladim. Xotinim bilan ko'proq gaplasha boshladim.\n\nVa hayotim — xuddi shu oddiy hayotim — yaxshiroq bo'la boshladi. Rang-barang bo'la boshladi.\n\nDunyoning ishlari — bu katta-katta voqealar emas. Bu — har kungi kichik lahzalar. Ertalabki choy, bolaning kulishi, kechqurungi suhbat.\n\nMen tushundim: baxt — bu yerda, shu lahzada. Uni uzoqdan qidirish shart emas.\n\nDunyoning ishlari — oddiy, lekin shu oddiylik ichida buyuklik bor."
        ]
    },
    {
        id: 9,
        title: "Boburnoma",
        author: "Zahiriddin Muhammad Bobur",
        genre: "history",
        year: 1530,
        pages: 520,
        rating: 4.9,
        reads: 16800,
        language: "O'zbek",
        cover: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
        coverEmoji: "📜",
        description: "Buyuk sarkarda va shoir Boburning o'z qo'li bilan yozgan xotiralari. Jahon adabiyotining nodir durdonasi.",
        isNew: false,
        isTrending: true,
        content: [
            "Bismillahir rahmonir rahim\n\nMen — Zahiriddin Muhammad Bobur. Temur avlodidan bo'lgan podshohi faqirman. Bu kitobda o'z hayotim, ko'rgan-kechirganlarim va bilganlarimni yozib qoldirmoqchiman.\n\nO'n ikki yoshimda Farg'ona viloyatining podshosi bo'ldim. Otam — Umarshayx Mirzo — vafot etganida, men hali bola edim. Lekin taxt menga o'tdi va men podsholik yukini zimmamlarga oldim.\n\nFarg'ona — go'zal yurt. Tog'lari baland, daryolari to'la, bog'lari sermeva. Men bu yurtni juda sevardim.",
            "Yoshligimda ko'p janglar qildim. Samarqandni uch marta oldim va uch marta yo'qotdim. Bu — taqdir edi.\n\nSamarqand — bobom Temurning poytaxti — men uchun orzu shahri edi. U yerga har borgan sari, uning go'zalligiga, uning buyukligiga hayrat bilan qaradim.\n\nLekin siyosat shafqatsiz. Do'stlar dushman bo'ladi, dushmanlar do'st bo'ladi. Bugun taxtda o'tirasan, ertaga qochqinsan.\n\nMen bularning hammasini boshdan kechirdim. Lekin hech qachon umidimni yo'qotmadim.",
            "Yigirma yoshimda vatanimdan — Farg'onadan ajraldim. Og'ir kunlar boshlandi. Tog'larda sarson bo'ldim, qor va sovuqda kezib yurdim.\n\nLekin men yiqilmadim. Har bir qiyinchilik meni kuchli qildi. Har bir mag'lubiyat menga yangi saboq berdi.\n\nOxiri Kobilga — Afg'onistonga yo'l oldim. Bu yerda yangi hayot boshladim. Kobil — go'zal shahar, havosi yoqimli, odamlari mehribon.\n\nMen Kobilni poytaxt qildim va yangi davlat qurish ishiga kirishdim.",
            "1526-yilning 20-aprelida Panipat jangida Hindiston sultoni Ibrohim Lo'diyni yengdim. Bu — mening eng katta g'alabam edi.\n\nOltinog'iz mingga yaqin lashkarim bilan yuz mingdan ortiq dushman qo'shinini yengdim. Bu g'alaba tarixda Panipat jangi nomi bilan mashhur bo'ldi.\n\nShu jangdan keyin men Hindistonning podshosi bo'ldim va Boburiylar sulolasiga asos soldim. Bu sulola uch yuz yildan ortiq Hindistonda hukmronlik qildi.\n\nLekin men hech qachon vatanimni — Farg'onani, Samarqandni unutmadim.",
            "Men nafaqat sarkarda, balki shoir ham edim. She'r yozish — mening eng sevimli mashg'ulotim edi.\n\nMen turkiy tilda she'rlar yozdim, bog'lar haqida, sevgi haqida, vatan sog'inchi haqida:\n\n\"O'zga yurtda podshoman — vatanimni sog'inaman,\nTaxtim bor, tojim bor — tog'larimni sog'inaman.\"\n\nMen ham tabiatshunoslik bilan shug'ullandim. Hindistonning o'simliklarini, hayvonlarini, iqlimini sinchiklab o'rganib, yozib qoldirdim.\n\nBoburnoma — bu faqat tarix emas, bu bir insonning — podshoh bo'lsa-da, oddiy inson tuyg'ulari bilan yashagan kishining — chin yurakdan yozgan hikoyasi."
        ]
    },
    {
        id: 10,
        title: "Atomik odatlar",
        author: "Jeyms Klir",
        genre: "psychology",
        year: 2018,
        pages: 320,
        rating: 4.8,
        reads: 22000,
        language: "O'zbek (tarjima)",
        cover: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        coverEmoji: "⚛️",
        description: "Yaxshi odatlarni shakllantirish va yomon odatlardan xalos bo'lishning ilmiy usullari haqida jahon bestselleri.",
        isNew: true,
        isTrending: true,
        content: [
            "Kirish: Kichik o'zgarishlarning kuchi\n\nHar bir katta muvaffaqiyat kichik qadam bilan boshlanadi. Bu kitobda men sizga kundalik kichik odatlar qanday qilib hayotingizni tubdan o'zgartira olishini ko'rsataman.\n\nFaraz qilaylik, siz har kuni atigi 1% yaxshilansangiz. Bu juda kam ko'rinadi, to'g'rimi? Lekin bir yil davomida siz 37 marta yaxshilangan bo'lasiz!\n\nAksincha, har kuni 1% yomonlashsangiz, yil oxirida deyarli nolga tushib qolasiz.\n\nShu sababli, kichik odatlar — atomik odatlar — hayotingizdagi eng kuchli qurol bo'la oladi.",
            "1-qoida: Odatni ko'rinadigan qiling\n\nBirinchi qadam — siz o'zgartirmoqchi bo'lgan odatingizni aniq belgilash. Ko'p odamlar \"men yaxshiroq bo'lmoqchiman\" deydi, lekin bu juda noaniq.\n\nBuning o'rniga ayting: \"Men har kuni ertalab soat 7:00 da 20 daqiqa kitob o'qiyman.\"\n\nAniqlik — muvaffaqiyatning kaliti.\n\nUsullar:\n• Odatlar kundaligini yuritish — har kungi odatlaringizni yozib boring\n• Muhit dizayni — atrofingizdagi muhitni odatingizga yordam beradigan qilib o'zgartiring\n• Ko'rinadigan qilish — masalan, kitobni yotoq stolga qo'ying",
            "2-qoida: Odatni jozibador qiling\n\nInsonga yoqmaydigan narsa uzoq davom etmaydi. Shuning uchun odatingizni yoqimli qilish muhim.\n\nUsullar:\n• Odatlar to'plami — yoqimli va foydali odatlarni birlashtiring\n  (Masalan: \"Yugurgandan keyin sevimli serialimni ko'raman\")\n• Ijtimoiy muhit — o'zingiz xohlagan odatga ega odamlar bilan birga bo'ling\n• Motivatsiya rituali — har bir odatdan oldin o'zingizni ruhlantiradigan bir narsa qiling\n\nMiya yoqimli tajribalarni takrorlashga moyil. Shuning uchun odatingizni quvonch bilan bog'lang.",
            "3-qoida: Odatni oson qiling\n\nEng yaxshi reja — eng oddiy reja. Agar odatingiz juda qiyin bo'lsa, uni tashlab yuborasiz.\n\n«Ikki daqiqa qoidasi»: Har qanday yangi odatni ikki daqiqadan boshlang.\n\n— \"Har kuni yuguraman\" → \"Sportga kiyinib, eshikdan chiqaman\"\n— \"Har kuni kitob o'qiyman\" → \"Bir sahifa o'qiyman\"\n— \"Har kuni meditatsiya qilaman\" → \"Ikki daqiqa jim o'tiraman\"\n\nBoshlash — eng qiyin qism. Ikki daqiqa bilan boshlang, keyin vaqt o'tishi bilan kengaytiring.\n\nEnergiyangiz cheklangan — uni oqilona sarflang.",
            "4-qoida: Odatni qoniqtiruvchi qiling\n\nBiz qayta-qayta qiladigan narsa — bu bizga yoqimli natija beradigan narsa.\n\nUsullar:\n• Darhol mukofot — har bir muvaffaqiyatli kun uchun o'zingizni taqdirlang\n• Kuzatish — taraqqiyotingizni kuzatib boring (kalendarda belgilang)\n• Hech qachon ketma-ket ikki kun o'tkazmang — bir kun o'tkazib yuborsangiz, ertasi kuni albatta qaytaring\n\nXulosa:\nAtomik odatlar — bu kichik, doimiy va izchil o'zgarishlar. Ular yig'ilib, katta natijalar beradi.\n\nSiz bugun qanday odam bo'lmoqchi bo'lsangiz, shu odamning odatlarini bugun boshlang.\n\nHar bir lahza — yangi boshlash uchun imkoniyat."
        ]
    },
    {
        id: 11,
        title: "Farhod va Shirin",
        author: "Alisher Navoiy",
        genre: "poetry",
        year: 1484,
        pages: 280,
        rating: 4.9,
        reads: 13700,
        language: "O'zbek (eski)",
        cover: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        coverEmoji: "💕",
        description: "Navoiyning Xamsasidagi eng mashhur doston. Farhod va Shirin sevgisi — fidoyilik va sadoqatning ramzi.",
        isNew: false,
        isTrending: false,
        content: [
            "Bismillahir rahmonir rahim\n\nBu doston — sevgi haqida. Lekin oddiy sevgi emas — buyuk, fidoiyona, abadiy sevgi haqida.\n\nFarhod — Chin (Xitoy) podshosining o'g'li edi. U — aqlli, kuchli, jasur va go'zal yigit. Lekin uning eng katta fazilati — uning toza qalbi edi.\n\nFarhod yoshligidanoq ilm va hunar bilan shug'ullandi. U tog' kovlashni o'rgandi va bu hunarida tengsiz usta bo'ldi.\n\nUning shuhrati butun dunyoga yoyildi. Lekin u hali sevgini bilmas edi...",
            "Kunlarning birida Farhod Armaniston malikasi Shirin haqida eshitdi. Shirin — nafaqat go'zal, balki aqlli, olijanob va mehribon malika edi.\n\nFarhod Shirinning ta'rifini eshitgach, uning suratin ko'rgach, oshiq bo'ldi. U Shirinni topish va unga muhabbatini bildirish uchun yo'lga chiqdi.\n\nUzoq yo'l, og'ir sinovlar — lekin Farhodning sevgisi uni oldinga boshlab bordi.\n\nNihoyat, u Armanistonga yetib keldi va Shirinni ko'rdi. Va Shirin ham Farhodga oshiq bo'ldi.\n\nIkki qalb bir-birini topdi.",
            "Lekin sevgi yo'lida to'siq ko'p edi. Eron shohi Xusrav ham Shiringa oshiq edi. U Farhodga raqib bo'ldi.\n\nXusrav — boy, qudratli, lekin ayyor hukmdor edi. U Farhoddan Shirinni tortib olish uchun turli hiylalar ishlatdi.\n\nXusrav Farhodga shart qo'ydi: \"Agar sen Bisutun tog'idan suv o'tkazib bersang, Shirinni senga beraman.\"\n\nFarhod rozi bo'ldi. U Bisutun tog'ini kovlay boshladi — yolg'iz, faqat o'z kuchi va sevgisi bilan.\n\nKunlar, oylar o'tdi. Farhod tog'ni kovlab, suv yo'lini ochdi. Bu — insoniy kuch va sevgining mo''jizasi edi.",
            "Xusrav Farhodning muvaffaqiyatini ko'rib, qo'rqib ketdi. U yangi hiyla o'ylab topdi.\n\nU bir kampirni Farhod oldiga yuborib, yolg'on xabar aytdi: \"Shirin vafot etdi.\"\n\nFarhod bu xabarni eshitgach, dunyosi buzildi. Sevgisiz yashashning ma'nosi yo'q edi. U o'zini tog'dan tashlab, halok bo'ldi.\n\nShirin Farhodning o'limini eshitgach, dod solib yig'ladi. U Farhodning jasadini topdi va uning yoniga kelib, o'zini ham halok qildi.\n\nIkki sevishgan — hayotda bo'lmagan bo'lsa-da — o'limda birga bo'ldi.",
            "Navoiy bu dostonni yozar ekan, sevgining qudratini, uning buyukligini va uning fojiasini ko'rsatdi.\n\nFarhod va Shirin — bu faqat ikki oshiq emas. Bu — haqiqiy sevgining ramzi. Sadoqat, fidoyilik va poklik ramzi.\n\nNavoiy yozadi:\n\n\"Sevgi daryosida g'arq bo'lgan kishi,\nTopadi oxirda sevgi baxtin ishi.\nGarchi jismi o'lsa, ruhi o'lmas abod,\nSevgi birla yashaydi to qiyomat sod.\"\n\nBu doston — o'zbek adabiyotining eng go'zal asarlaridan biri. U beshta asrdan beri odamlarning yuragini larzaga keltirib kelmoqda."
        ]
    },
    {
        id: 12,
        title: "Boylik sirri",
        author: "Napoleon Xill",
        genre: "business",
        year: 1937,
        pages: 300,
        rating: 4.6,
        reads: 19500,
        language: "O'zbek (tarjima)",
        cover: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
        coverEmoji: "💰",
        description: "Muvaffaqiyat va boylik qo'lga kiritishning 13 ta asosiy tamoyili haqida jahon bestselleri. 20 yillik tadqiqot natijasi.",
        isNew: true,
        isTrending: true,
        content: [
            "Kirish: Fikr — bu kuch\n\nBu kitob 20 yillik tadqiqot natijasi. Men 500 dan ortiq muvaffaqiyatli insonni o'rganib, ularning umumiy xususiyatlarini aniqladim.\n\nBirinchi va eng muhim kashfiyot: FIKR — bu haqiqiy kuch.\n\nSiz nima haqida o'ylasangiz — shunga aylanasiz. Bu mistika emas, bu ilmiy haqiqat.\n\nMiyamiz — kuchli magnitga o'xshaydi. U bizning fikrlarimizga mos keluvchi imkoniyatlarni tortib oladi.\n\nMuvaffaqiyatli odamlar va muvaffaqiyatsiz odamlar orasidagi farq — ularning fikrlash tarzi.\n\nSiz bugun fikrlashingizni o'zgartirsangiz — ertaga hayotingiz o'zgaradi.",
            "1-tamoyil: Kuchli istak\n\nHar bir muvaffaqiyat kuchli istak bilan boshlanadi. Oddiy \"yaxshi bo'lardi\" emas, balki yonib-kuyib istamoq.\n\nTomas Edison elektr lampochkani ixtiro qilgunicha 10,000 marta muvaffaqiyatsizlikka uchradi. Lekin u to'xtamadi. Chunki uning istagi — juda kuchli edi.\n\n6 qadam:\n1. Nima xohlashingizni aniq belgilang\n2. Buning evaziga nima berishga tayyorligingizni aniqlang\n3. Aniq muddatni belgilang\n4. Reja tuzing\n5. Hammasini yozib qo'ying\n6. Har kuni ikki marta — ertalab va kechqurun — ovoz chiqarib o'qing",
            "2-tamoyil: Ishonch\n\nIshonch — bu miyangizga berilgan buyruq. Siz nimaga ishonsangiz — miyangiz uni amalga oshirish uchun ishlaydi.\n\nQanday qilib o'z-o'ziga ishonchni kuchaytirish mumkin?\n\n• Autosuggestion — o'zingizga ijobiy gaplar aytish\n• Vizualizatsiya — muvaffaqiyatingizni ko'z oldingizga keltirish\n• Amaliy tajriba — kichik g'alabalarni qo'lga kiritish\n\nHar kuni o'zingizga ayting:\n\"Men muvaffaqiyatga erishaolaman va erishaman!\"\n\"Men har kuni har jihatdan yaxshilanib bormoqdaman!\"\n\nBu gaplarni his qilib ayting — va miyangiz ishonadi.",
            "3-tamoyil: Rejalashtirish\n\nMaqsadsiz inson — rulingiz yo'q mashinaga o'xshaydi. Qayerga borishingizni bilmasangiz, hech qayerga yeta olmaysiz.\n\nQanday reja tuzish kerak:\n1. Yirik maqsadni kichik bo'laklarga bo'ling\n2. Har bir bo'lakka muddatni belgilang\n3. Har kuni kamida bitta qadam tashlang\n4. Muvaffaqiyatsizliklardan o'rganing\n5. Rejani muntazam yangilab boring\n\n4-tamoyil: Mastermind guruhi\n\nYolg'iz yurgan — yo'lda qolgan. O'zingizga o'xshash maqsadli odamlar bilan birlashing.\n\nIkki yoki undan ko'p inson bir maqsad uchun birlashganda — ularning kuchi ikki barobarga emas, balki ko'p barobarga oshadi.",
            "Xulosa: Muvaffaqiyat formulasi\n\nMuvaffaqiyat — bu sirli narsa emas. Bu — aniq tamoyillarga amal qilish natijasi.\n\n13 tamoyilni qisqacha takrorlaymiz:\n\n1. Kuchli istak\n2. Ishonch\n3. Autosuggestion\n4. Maxsus bilim\n5. Tasavvur\n6. Rejalashtirish\n7. Qaror qilish\n8. Qat'iyatlilik\n9. Mastermind kuchi\n10. Jinsiy energiyani yo'naltirish\n11. Osti ong\n12. Miya\n13. Oltilinchi sezgi\n\nBu tamoyillarni o'rganib, amalda qo'llang. Natija — sizni hayratda qoldiradi.\n\nEsda tuting: Siz nima o'ylasangiz — shunga aylanasiz. Katta o'ylang!"
        ]
    }
];
