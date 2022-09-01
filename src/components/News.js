import React, { useState } from "react";
import Newsitem from "./Newsitem";

const News = () => {
  let articles = [
    {
      source: {
        id: null,
        name: "Protothema.gr",
      },
      author: null,
      title:
        "Νορβηγία: Σε απεργία πείνας οδηγοί Tesla γιατί τα αυτοκίνητα είναι ελαττωματικά",
      description:
        "Προβλήματα με τα  ηλεκτρικά και ηλεκτρονικά συστήματα διαπιστώνουν οι οδηγοί στη Νορβηγία, οι οποίοι ευλεπιστούν ότι οι διαμαρτυρίες θα φτάσουν και στα αυτιά της εταιρείας | Νορβηγία | Tesla | Απεργία πείνας | Κόσμος",
      url: "https://www.protothema.gr/world/article/1279341/norvigia-se-apergia-peinas-odigoi-tesla-giati-ta-autokinita-einai-elattomatika/",
      urlToImage:
        "https://i1.prth.gr/images/640x360share/files/2021-03-09/tesla.jpg",
      publishedAt: "2022-08-31T16:38:03Z",
      content: "She-Hulk: Attorney at Law, Vodafone TV",
    },
    {
      source: {
        id: null,
        name: "Jneurosci.org",
      },
      author: "Miyata, T., Benson, N. C., Winawer, J., Takemura, H.",
      title:
        "Structural Covariance and Heritability of the Optic Tract and Primary Visual Cortex in Living Human Brains",
      description:
        "Individual differences among human brains exist at many scales, spanning gene expression, white matter tissue properties, and the size and shape of cortical areas. One notable example is an approximately 3-fold range in the size of human primary visual cortex…",
      url: "https://www.jneurosci.org/content/42/35/6761?rss=1",
      urlToImage:
        "https://www.jneurosci.org/sites/default/files/highwire/jneuro/42/35.cover-source.jpg",
      publishedAt: "2022-08-31T16:30:21Z",
      content:
        "Individual differences among human brains exist at many scales, spanning gene expression, white matter tissue properties, and the size and shape of cortical areas. One notable example is an approxima… [+2141 chars]",
    },
    {
      source: {
        id: null,
        name: "CleanTechnica",
      },
      author: "Jennifer Sensiba",
      title:
        "IKEA Partners With Electrify America To Offer Charging In US (No Assembly Required!)",
      description:
        "A few weeks ago, I covered the story of IKEA expanding EV charging in Sweden. At that time, the company announced plans to put 1,000 charging stations in its Sweden stores (in the company’s home country). The quick EV chargers were the product of working toge…",
      url: "https://cleantechnica.com/2022/08/31/ikea-partners-with-electrify-america-to-offer-charging-in-us-no-assembly-required/",
      urlToImage:
        "https://cleantechnica.com/files/2022/08/IKEA-Electrify-America-Press-Photo-Rendering.png",
      publishedAt: "2022-08-31T16:30:07Z",
      content:
        "A few weeks ago, I covered the story of IKEA expanding EV charging in Sweden. At that time, the company announced plans to put 1,000 charging stations in its Sweden stores (in the companys home count… [+6785 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Elizabeth MacBride, Senior Contributor, \n Elizabeth MacBride, Senior Contributor\n https://www.forbes.com/sites/elizabethmacbride/",
      title:
        "A Fragile Comeback, Fueled By Immigrants And An Incubator, In Buffalo",
      description:
        "Brady and Kumba talked with me as I was on a recent visit to the city as part of a book tour.",
      url: "https://www.forbes.com/sites/elizabethmacbride/2022/08/31/a-fragile-comeback-fueled-by-immigrants-and-an-incubator--in-buffalo/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/630f8ab041acf1330e604844/0x0.jpg?format=jpg&width=1200",
      publishedAt: "2022-08-31T16:27:09Z",
      content:
        "Rebecca Brady, founder of Top Seedz, employs about 30 people in her small factory. One of them is ... [+] Rosa Kumba, an immigrant from Angola.\r\nElizabeth MacBride\r\nRosa Kumba arrived in Buffalo, New… [+13382 chars]",
    },
    {
      source: {
        id: null,
        name: "Barron's",
      },
      author: "Al Root",
      title: "Tesla Stock-Price Targets Are Rising After the Split",
      description:
        "Wall Street price targets for Tesla stock are rising after the electric-vehicle maker's Aug. 25 stock split. Here's why.",
      url: "https://www.barrons.com/articles/tesla-stock-split-market-value-51661962666",
      urlToImage: "https://images.barrons.com/im-613960/social",
      publishedAt: "2022-08-31T16:25:41Z",
      content:
        "Wall Street price targets for \r\n Tesla\r\n stock are creeping up after the Aug. 25 stock split. Analysts view the company as a little more valuable for, essentially, three reasons. The third one is, fr… [+2638 chars]",
    },
    {
      source: {
        id: null,
        name: "Hvg.hu",
      },
      author: "hvg@hvg.hu",
      title: "Elon Musk szerint több olajra és gázra van szüksége a világnak",
      description:
        "Ahhoz, hogy a civilizáció ne omoljon össze, egyelőre növelni kellene a fosszilis energiahordozók kitermelését – véli az amerikai milliárdos.",
      url: "https://hvg.hu/tudomany/20220831_elon_musk_gaz_olaj_energiahordozo",
      urlToImage:
        "https://images.hvg.hu/image.jpg?id=3bab352c-6775-4b0d-b591-55f866b43f61&view=7fcefbf8-ac48-4ee6-aef5-32203afa118c",
      publishedAt: "2022-08-31T16:24:00Z",
      content:
        "Ahhoz, hogy a civilizáció ne omoljon össze, egyelre növelni kellene a fosszilis energiahordozók kitermelését véli az amerikai milliárdos.Meglep kijelentést tett nemrég Elon Musk egy Norvégiában rende… [+1479 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        'Jennifer "Jay" Palumbo, Contributor, \n Jennifer "Jay" Palumbo, Contributor\n https://www.forbes.com/sites/jenniferpalumbo/',
      title: "The Range Of Careers Options For Autistic Individuals",
      description:
        "It's time to change society's perception of how corporations can seamlessly employ and incorporate people with autism into their workplace and raise awareness that individuals with autism can be valuable productive employees in all industries.",
      url: "https://www.forbes.com/sites/jenniferpalumbo/2022/08/31/the-range-of-careers-options-for-autistic-individuals/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/630e878aeaeefac748145207/0x0.jpg?format=jpg&width=1200",
      publishedAt: "2022-08-31T16:23:08Z",
      content:
        "Hand putting wooden cube block on blue background with word CAREER and copy space for your text. ... [+] Business career planning growth to success concept\r\ngetty\r\nMany autistic individuals desire to… [+7866 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "gkay@insider.com (Grace Kay)",
      title:
        "A Tesla owner is suing the electric vehicle maker, alleging his Model 3 stops for random obstacles in 'frightening and dangerous nightmare'",
      description:
        "Earlier this year, the National Highway Traffic Safety Administration said it was investigating 416,000 Teslas over reports of phantom braking.",
      url: "https://www.businessinsider.com/tesla-owner-sues-carmaker-phantom-braking-2022-8",
      urlToImage:
        "https://i.insider.com/630f68f53e08f700196c286f?width=1200&format=jpeg",
      publishedAt: "2022-08-31T16:21:57Z",
      content:
        'A Tesla owner is suing the electric vehicle maker in a proposed class action lawsuit, alleging his Model 3 brakes "randomly and unexpectedly."\r\nJose Alvarez Toledo filed the lawsuit in federal court … [+2282 chars]',
    },
    {
      source: {
        id: null,
        name: "Watchgeneration.fr",
      },
      author: "Félix Cattafesta",
      title:
        "Seriez-vous prêt à vous faire implanter une puce pour vous simplifier la vie ?",
      description:
        "Autrefois cantonné aux films de science-fiction, les implants de puces sous la peau commencent doucement à faire parler d'eux. On vous relayait il y a peu l'histoire de Brandon Dalaly, un américain qui s'est fait implanter une puce NFC dans la main pour ouvri…",
      url: "https://www.watchgeneration.fr/sondage/2022/08/seriez-vous-pret-vous-faire-implanter-une-puce-pour-vous-simplifier-la-vie-13605",
      urlToImage:
        "https://cdn.mgig.fr/2022/08/mga-d0c413aa-w375-w1500-w750_accroche.jpg",
      publishedAt: "2022-08-31T16:00:00Z",
      content:
        "Autrefois cantonné aux films de science-fiction, les implants de puces sous la peau commencent doucement à faire parler d'eux. On vous relayait il y a peu l'histoire de Brandon Dalaly, un américain q… [+1989 chars]",
    },
    {
      source: {
        id: null,
        name: "Phonandroid",
      },
      author: "Kevin Dachez",
      title:
        "Voitures autonomes : la conduite sans les mains sera autorisée dès le 1er septembre en France",
      description:
        "Dès ce 1er septembre 2022, la conduite autonome de niveau 3 sera autorisée en France. Dans cet article, nous venons sous quelles conditions les conducteurs pourront en profiter, et les implications légales de l'utilisation de cette technologie.  Nous en parli…",
      url: "https://www.phonandroid.com/voitures-autonomes-la-conduite-sans-les-mains-sera-autorisee-des-le-1er-septembre-en-france.html",
      urlToImage:
        "https://img.phonandroid.com/2022/08/voitures-autonomes-france.jpg",
      publishedAt: "2022-08-31T15:48:26Z",
      content:
        "Dès ce 1er septembre 2022, la conduite autonome de niveau 3 sera autorisée en France. Dans cet article, nous venons sous quelles conditions les conducteurs pourront en profiter, et les implications l… [+4379 chars]",
    },
    {
      source: {
        id: null,
        name: "Futurism",
      },
      author: "Victor Tangermann",
      title:
        "Why These Tesla Owners Are Going on a Hunger Strike Against Tesla",
      description:
        'A group of fed up Tesla owners in Norway say they are going on a "hunger strike," because their cars suck. "Norway has the most Teslas per capita in the world," the group\'s hastily put together website reads. "But a lot of customers are not happy." The group …',
      url: "https://futurism.com/tesla-owners-hunger-strike",
      urlToImage:
        "https://wp-assets.futurism.com/2022/08/tesla-owners-hunger-strike.jpg",
      publishedAt: "2022-08-31T15:45:35Z",
      content:
        'A group of fed up Tesla owners in Norway say they are going on a "hunger strike," because of a litany of complaints about their vehicles.\r\n"Norway has the most Teslas per capita in the world," the gr… [+2575 chars]',
    },
    {
      source: {
        id: null,
        name: "Auto-swiat.pl",
      },
      author: "Janusz Borkowski",
      title:
        "W tym kraju jazda autem elektrycznym to przyjemność. Tak, nie jest to Polska",
      description:
        "Z powodu słabej infrastruktury ładowania jazda autem elektrycznym w Polsce to nadal wyzwanie mające, niestety, niewiele wspólnego z ekologią. Za kierownicami Škody Enyaq i Volkswagena ID.5 sprawdziliśmy, jak wygląda elektromobilność na południu Norwegii.",
      url: "https://www.auto-swiat.pl/ev/testy/w-tym-kraju-jazda-autem-elektrycznym-to-przyjemnosc-tak-nie-jest-to-polska/e8hkexj",
      urlToImage:
        "https://ocdn.eu/pulscms-transforms/1/wAIktkpTURBXy81OTUyZDUyNjE4ZTE3OTY4NWE4NjkxMjU5YTQzZmY2NS5qcGeSlQPNAQt8zRiezQ3akwXNBLDNAnY",
      publishedAt: "2022-08-31T15:41:56Z",
      content:
        "Kryzys energetyczny zwizany z wojn w Ukrainie spowodowa due zawirowania na rynku paliw. Droejce benzyna i olej napdowy sprawiy, e niektórzy polscy przedsibiorcy mimo nadal sabo rozwinitej struktury s… [+7558 chars]",
    },
    {
      source: {
        id: null,
        name: "Reviewgeek.com",
      },
      author: "Cory Gunther",
      title: "Teslas Make Weird Noises, but That's Apparently Normal",
      description:
        "If you’ve ever heard some wild noises or clunking sounds coming from your Tesla, chances are it’s completely normal. With so few moving parts compared to traditional gas vehicles, many owners hear a sound and instantly get worried.",
      url: "https://www.reviewgeek.com/127705/teslas-make-weird-noises-but-thats-apparently-normal/",
      urlToImage: "https://www.reviewgeek.com/p/uploads/2022/03/c0c27ea0.jpg",
      publishedAt: "2022-08-31T15:34:20Z",
      content:
        "Tesla\r\nIf you’ve ever heard some wild noises or clunking sounds coming from your Tesla, chances are it’s completely normal. With so few moving parts compared to traditional gas vehicles, many owners … [+1597 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Tiffany Ap",
      title: "America’s billionaires are twice as rich as previously estimated",
      description:
        "The stratospheric wealth of the top 0.1% in the US is hard to conceptualize but a new paper (pdf) from the National Bureau of Economic Research thinks the total share held by the super wealthy is likely much higher than previously estimated.Read more...",
      url: "https://qz.com/america-s-billionaires-are-twice-as-rich-as-previously-1849476086",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/q_75,w_1200,h_630,c_fill/f5d2e1350a65512db17803d6d38688e5.JPG",
      publishedAt: "2022-08-31T15:34:00Z",
      content:
        "The stratospheric wealth of the top 0.1% in the US is hard to conceptualize but a new paper (pdf) from the National Bureau of Economic Research thinks the total share held by the super wealthy is lik… [+2090 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Tiffany Ap",
      title: "America’s billionaires are twice as rich as previously estimated",
      description:
        "The stratospheric wealth of the top 0.1% in the US is hard to conceptualize but a new paper (pdf) from the National Bureau of Economic Research thinks the...",
      url: "https://finance.yahoo.com/news/america-billionaires-twice-rich-previously-153400142.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/dt.XflQzbSk9lwuCcVBiJg--~B/aD00MjQ7dz02MzY7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/quartz.com/ae13d4782850531f71e256eeb13ac0ce",
      publishedAt: "2022-08-31T15:34:00Z",
      content:
        "The stratospheric wealth of the top 0.1% in the US is hard to conceptualize but a new paper (pdf) from the National Bureau of Economic Research thinks the total share held by the super wealthy is lik… [+2090 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET France",
      },
      author: "Roch Arène",
      title: "BMW iX1 : un concurrent de taille pour la Tesla Model Y ?",
      description:
        "On connait le prix du nouveau SUV électrique de BMW et ça fait mal, très mal.",
      url: "https://www.cnetfrance.fr/news/bmw-ix1-un-concurrent-de-taille-pour-la-tesla-model-y-39946528.htm",
      urlToImage:
        "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2022/08/bmw-ix1-big.jpg",
      publishedAt: "2022-08-31T15:30:00Z",
      content:
        "Le BMW iX1 est la nouvelle version 100 % électrique du BMW X1, le SUV compact de la firme allemande. Avec une autonomie de 438 km (WLTP), un design affirmé et une longueur de 4,50 mètres, il se posit… [+854 chars]",
    },
    {
      source: {
        id: null,
        name: "RoadandTrack.com",
      },
      author: "Lucas Bell",
      title: "Faraday Future Employees Say Exec Is Tanking the Company",
      description:
        "A group of around 140 employees believe Sue Swenson is pushing the automaker towards bankruptcy.",
      url: "https://www.roadandtrack.com/news/a41041352/faraday-future-employees-say-exec-is-tanking-the-company/",
      urlToImage:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shot-10-v03-default-1661958436.jpeg?crop=1xw:0.8886255924170616xh;center,top&resize=1200:*",
      publishedAt: "2022-08-31T15:27:00Z",
      content:
        "A group of Faraday Future employees have sent a letter to the electric automaker’s board of directors and important shareholders asking for the removal of executive chairperson Susan Swenson from her… [+1995 chars]",
    },
    {
      source: {
        id: null,
        name: "MobileSyrup",
      },
      author: "Nida Zafar",
      title: "Snap to lay off more than a thousand employees",
      description:
        "Snap will lay off a fifth of its workforce starting today, according to The Verge.  The publication states the company has been planning the layoffs for weeks. Sources familiar with the matter state some departments will be impacted greater than others. This …",
      url: "https://mobilesyrup.com/2022/08/31/snap-to-lay-off-more-than-a-thousand-employees/",
      urlToImage:
        "https://cdn.mobilesyrup.com/wp-content/uploads/2022/08/header-snapchat-shutterstock-sized.jpg",
      publishedAt: "2022-08-31T15:23:28Z",
      content:
        "Snap will lay off a fifth of its workforce starting today, according to The Verge. \r\nThe publication states the company has been planning the layoffs for weeks.\r\nSources familiar with the matter stat… [+682 chars]",
    },
    {
      source: {
        id: null,
        name: "Diariomotor.com",
      },
      author: "Sergio Álvarez",
      title:
        "¿Por qué varios propietarios noruegos de Tesla han iniciado una huelga de hambre?",
      description:
        "Las huelgas de hambre no son acciones tomadas a la ligera. Pueden poner en serio peligro a la salud de la persona que la practica, y suelen ser usadas como forma de protesta, para tratar de corregir injusticias o para obtener un fin transcendental. En Noruega…",
      url: "https://www.diariomotor.com/breve/huelga-hambre-tesla/",
      urlToImage:
        "https://www.diariomotor.com/imagenes/2021/10/matriculaciones-septiembre-2021-tesla-model-3.jpg",
      publishedAt: "2022-08-31T15:21:56Z",
      content:
        "Las huelgas de hambre no son acciones tomadas a la ligera. Pueden poner en serio peligro a la salud de la persona que la practica, y suelen ser usadas como forma de protesta, para tratar de corregir … [+1786 chars]",
    },
    {
      source: {
        id: "wirtschafts-woche",
        name: "Wirtschafts Woche",
      },
      author: "Martin Seiwert",
      title:
        "Elektroautos: Wie neuartige Batterien alle Rohstoffprobleme lösen könnten",
      description:
        "Das US-Start-up Alsym Energy hat eine Wasserbatterie entwickelt, die ohne Lithium und Kobalt auskommt und noch dazu sicher und unschlagbar günstig sein soll. Solche Innovationen zeigen: Dass das E-Auto an der Rohstoffversorgung scheitert, ist ein Mythos.",
      url: "https://www.wiwo.de/unternehmen/auto/elektroautos-wie-neuartige-batterien-alle-rohstoffprobleme-loesen-koennten/28643514.html",
      urlToImage:
        "https://www.wiwo.de/images/schnittmodell-lithium-ion-batterie-akku-50-kwh-lithium-ion-batterie-216-zellen-in-18-modulen-reichweite-330-km-vo/28643546/3-format11240.jpg",
      publishedAt: "2022-08-31T15:12:24Z",
      content:
        "Rohstoffe für Elektroautobatterien wie etwa Kobalt, Lithium oder Nickel sind teuer. Angesichts des weltweiten E-Auto-Booms bleiben sie es vorerst auch. Doch scheitern wird das E-Auto an der Rohstoffv… [+5271 chars]",
    },
    {
      source: {
        id: null,
        name: "TheWrap",
      },
      author: "Andi Ortiz",
      title:
        "Corden Scoffs at Elon Musk’s Promise to Roll Out Self-Driving Teslas This Year: ‘It Sounds More Like a Warning’ (Video)",
      description:
        "The late night host has some serious doubts about these cars",
      url: "http://www.thewrap.com/james-corden-mocks-elon-musk-self-driving-tesla/",
      urlToImage:
        "https://www.thewrap.com/wp-content/uploads/2022/08/James-Corden.jpg",
      publishedAt: "2022-08-31T15:12:21Z",
      content:
        "James Corden is pretty skeptical about Elon Musk’s announcement this week that completely autonomous Teslas will be rolled out by the end of this year. The late night host joked on Tuesday that more … [+1424 chars]",
    },
    {
      source: {
        id: null,
        name: "RoadandTrack.com",
      },
      author: "Brendan McAleer",
      title:
        "The Bisimoto 935 K3V Is Proof Creativity Can Thrive in a Battery-­Powered Future",
      description: "A New-Wave Porsche, Remixed With Techno Tesla Power.",
      url: "https://www.roadandtrack.com/car-culture/a40880744/the-bisimoto-935-k3v-is-proof-creativity-can-thrive-in-a-battery-powered-future/",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/zIj_BiDLGsOoYA.T.ptsIw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDE-/https://media.zenfs.com/en/road_track_223/f4b11fd34845f55efeebcd7ecaafc490",
      publishedAt: "2022-08-31T15:09:00Z",
      content:
        "Photo credit: Evan Tetreault\r\nPhoto credit: Evan Tetreault\r\nHeres what hope looks like, wrought from carbon fiber. The Bisimoto 935 K3V has no internal-­combustion heartbeat, but itll still quicken t… [+4801 chars]",
    },
    {
      source: {
        id: null,
        name: "Seeking Alpha",
      },
      author: "Fund Letters",
      title: "Old West Investment Management Q2 2022 Investor Letter",
      description:
        "Old West's All Cap portfolio was down 16.7%, Small Cap portfolio was down 19.1%, & 3 L.P.’s performed well. Click here to read the full fund letter.",
      url: "https://seekingalpha.com/article/4538161-old-west-investment-management-q2-2022-investor-letter",
      urlToImage:
        "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1362504103/image_1362504103.jpg?io=getty-c-w750",
      publishedAt: "2022-08-31T15:08:00Z",
      content:
        "alleachday/iStock via Getty Images\r\nDear Investor,\r\n As we cross the halfway point of 2022, financial markets around the world are in full correction. The S&amp;P 500 was down 21%, the NASDAQ was dow… [+9641 chars]",
    },
    {
      source: {
        id: null,
        name: "Habr.com",
      },
      author: "AnnieBronson",
      title:
        "Владельцы Tesla в Норвегии объявили голодовку, пытаясь привлечь внимание Маска к проблемам с машинами",
      description:
        "Группа владельцев Tesla в Норвегии заявила о начале голодовки в попытке привлечь внимание Илона Маска к проблемам с автомобилями. Они составили длинный список нерешённых неполадок и просят других владельцев присоединиться к ним, чтобы глава Tesla наверняка их…",
      url: "https://habr.com/ru/news/t/685710/#post-content-body",
      urlToImage:
        "https://habrastorage.org/getpro/habr/upload_files/194/ff3/3ed/194ff33edcb487af6742f7fedc648d02.jpg",
      publishedAt: "2022-08-31T15:04:59Z",
      content:
        "Tesla . , Tesla .\r\n, Tesla, . , .\r\n : , , , , , , , , , . \r\n , , . , Electrek Bilklager. « , , ». , «» , Tesla , , Tesla.\r\nTesla . 26 000 , 11 . Tesla, « » .\r\n , Tesla Tesla . , $16 000.",
    },
    {
      source: {
        id: null,
        name: "Motor.ru",
      },
      author: "Анастасия Мельник",
      title: "На Tesla подали в суд из-за «фантомного торможения»",
      description:
        "Еще один владелец электрокара Tesla Model 3 из Сан-Франциско подал иск к калифорнийскому производителю из-за некорректной работы автопилота. Дефект уже получил неофициальное название «фантомное торможение». Неисправность заключается в том, что автопилот автом…",
      url: "https://motor.ru/news/tesla-brake-problems-31-08-2022.htm",
      urlToImage:
        "https://motor.ru/imgs/2022/08/31/13/5565242/a51de7f1783de041c16b837f0d6a692340af3f7a.jpg",
      publishedAt: "2022-08-31T15:01:14Z",
      content: ", 750 , . , , 400 . , Model 3 Model Y.",
    },
    {
      source: {
        id: null,
        name: "Motorpasión",
      },
      author: "Álvaro Ruiz",
      title:
        "El Mercedes-Benz EQS SUV ya tiene precio. Se mete directo entre los cinco coches eléctricos más caros de España",
      description:
        "La gama eléctrica de Mercedes-Benz sigue tomando forma, esta vez con su buque insignia, el Mercedes-Benz EQS SUV. Unos meses después de su presentación, el hermano todocamino de la berlina EQS ya tiene precio.\n<!-- BREAK 1 -->\nSu tarifa de partida lo conviert…",
      url: "https://www.motorpasion.com/coches-electricos/mercedes-benz-eqs-suv-tiene-precio-se-mete-directo-cinco-coches-electricos-caros-espana",
      urlToImage:
        "https://img.remediosdigitales.com/9eeb34/mercedes-benz-eqs-suv-3/840_560.jpeg",
      publishedAt: "2022-08-31T15:00:44Z",
      content:
        "La gama eléctrica de Mercedes-Benz sigue tomando forma, esta vez con su buque insignia, el Mercedes-Benz EQS SUV. Unos meses después de su presentación, el hermano todocamino de la berlina EQS ya tie… [+4953 chars]",
    },
    {
      source: {
        id: null,
        name: "Hdmotori.it",
      },
      author: "HDblog.it",
      title:
        "La Fiat 500 è l'auto elettrica più venduta in Europa a luglio 2022",
      description: "A luglio crescono solo le BEV in Europa.",
      url: "https://www.hdmotori.it/fiat/articoli/n560457/mercato-auto-europa-luglio-2022-elettriche/",
      urlToImage: "https://hd2.tudocdn.net/969615?w=1920",
      publishedAt: "2022-08-31T15:00:00Z",
      content:
        "Il mercato auto europeo anche a luglio 2022 ha chiuso con il segno meno. Secondo i dati di Jato Dynamics, il calo è stato comunque significativamente inferiore di quello registrato a marzo, aprile, m… [+2803 chars]",
    },
    {
      source: {
        id: null,
        name: "Jalopnik",
      },
      author: "José Rodríguez Jr.",
      title:
        "The New Mini EV Cabrio Is a Rare Convertible Electric Car, And Possibly the Cutest EV",
      description:
        "The best-selling EV in the world is going with the top down, after all. General Motor’s joint venture in China, SAIC-GM-Wuling, says the Mini EV Cabrio is going on to production, as Automotive News reports. It’s a small production run between 100 and 200 Mini…",
      url: "https://jalopnik.com/the-new-mini-ev-cabrio-is-a-rare-convertible-electric-c-1849478607",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/25f4c65c35532fc66ce0cf4ed7c7cc79.jpg",
      publishedAt: "2022-08-31T15:00:00Z",
      content:
        "The best-selling EV in the world is going with the top down, after all. General Motors joint venture in China, SAIC-GM-Wuling, says the Mini EV Cabrio is going on to production, asAutomotive News rep… [+2391 chars]",
    },
    {
      source: {
        id: null,
        name: "Jornaldenegocios.pt",
      },
      author: "jng@negocios.pt (Jornal de Negócios)",
      title: "Toyota investe 5,3 mil milhões na produção de baterias",
      description:
        "A fabricante de carros japonesa junta-se assim à Ford e General Motors. Trata-se de mais uma empresa do setor a avançar com um projeto de grande dimensão na produção de baterias para veículos elétricos.",
      url: "https://www.jornaldenegocios.pt/empresas/detalhe/toyota-investe-53-mil-milhoes-na-producao-de-baterias",
      urlToImage:
        "https://cdn.jornaldenegocios.pt/images/2021-12/img_1200x676$2021_12_14_11_45_16_418386.jpg",
      publishedAt: "2022-08-31T14:51:06Z",
      content:
        "A Toyota vai investir cerca de 730 mil milhões de ienes (5,3 mil milhões de euros, à taxa de câmbio atual) para acelerar a produção de baterias, naquela que marca a mais recente tentativa de uma fabr… [+1815 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Ethan Karp, Contributor, \n Ethan Karp, Contributor\n https://www.forbes.com/sites/ethankarp/",
      title:
        "Manufacturing And Electric Vehicles: A Primer On Timelines, Opportunities, And How To Prepare",
      description:
        "The way horse and buggy companies dropped off, so too will combustion engine  manufacturers. This phase is likely starting and with good reason. Recent EV innovations have crafted a product that is simply better than what’s currently on our roads, as they are…",
      url: "https://www.forbes.com/sites/ethankarp/2022/08/31/manufacturing-and-electric-vehicles-a-primer-on-timelines-opportunities-and-how-to-prepare/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/630f73c5a2f2e283725a5e16/0x0.jpg?format=jpg&crop=2679,1507,x0,y138,safe&width=1200",
      publishedAt: "2022-08-31T14:45:39Z",
      content:
        "The number of companies that existed to build horse and buggies plummeted at the turn of the 20th centuryfrom 13,800 in 1890 to only 90 in 1920. A century later, as fate would have it, its likely wer… [+6104 chars]",
    },
    {
      source: {
        id: null,
        name: "Creative Bloq",
      },
      author: "Daniel Piper",
      title: "Turns out Elon Musk's SpaceX logo has a hidden message",
      description: "Can you spot it?",
      url: "https://www.creativebloq.com/news/tesla-spacex-logo",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/ZccnF4C57CmMNrRrDrMite-1200-80.jpg",
      publishedAt: "2022-08-31T14:44:00Z",
      content:
        "Logo design can be a complicated business. Even the most apparently simple symbols can go through multiple transformations during the design process, and a dodgy line here or off-angle there will hav… [+1679 chars]",
    },
    {
      source: {
        id: null,
        name: "futurezone.at",
      },
      author: "futurezone.at",
      title:
        "Tesla-Besitzer drohen Hungerstreik an, wenn Elon Musk sie nicht beachtet",
      description:
        "Auf einer Website wurden alle Probleme aufgelistet, welche die Betroffenen mit ihren Teslas haben.",
      url: "https://futurezone.at/digital-life/tesla-besitzer-drohen-hungerstreik-an-wenn-elon-musk-sie-nicht-beachtet/402130076",
      urlToImage:
        "https://image.futurezone.at/images/facebook/7014772/46-186553482.jpg",
      publishedAt: "2022-08-31T14:33:16Z",
      content:
        "Auf einer Website wurden alle Probleme aufgelistet, welche die Betroffenen mit ihren Teslas haben.",
    },
    {
      source: {
        id: null,
        name: "WinFuture",
      },
      author: "Witold Pryjda",
      title:
        '"Elon Musk, hilf uns": Tesla-Besitzer in Norwegen gehen in Hungerstreik',
      description:
        "Der US-Autobauer hat eine fanatische Anhängerschaft, entsprechend intensiv und emotional werden Tesla-Themen auch diskutiert. In Norwegen haben sich mehrere Besitzer zu einem Hungerstreik zusammengetan, sie wollen auf Probleme aufmerksam machen. Doch es gibt …",
      url: "https://winfuture.de/news,131590.html",
      urlToImage: "https://i.wfcdn.de/teaser/1920/47840.png",
      publishedAt: "2022-08-31T14:31:00Z",
      content:
        "Der US-Autobauer hat eine fanatische Anhängerschaft, entsprechend intensiv und emotional werden Tesla-Themen auch diskutiert. In Norwegen haben sich mehrere Besitzer zu einem Hungerstreik zusammenget… [+2303 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "James Morris, Contributor, \n James Morris, Contributor\n https://www.forbes.com/sites/jamesmorris/",
      title: "Could XPENG Be China’s Answer To Tesla?",
      description:
        "One of the leading Chinese companies mounting the challenge to Tesla's EV dominance is XPENG. It sees the mature, premium European market as key to its growing success.",
      url: "https://www.forbes.com/sites/jamesmorris/2022/08/31/could-xpeng-be-chinas-answer-to-tesla/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/630f6ddcd0b639e256515c95/0x0.jpg?format=jpg&width=1200",
      publishedAt: "2022-08-31T14:26:21Z",
      content:
        "Every startup in the electric vehicle market is gunning for Tesla. In the USA, Lucid and Rivian hope to challenge Elon Musks company. But the bigger threat could be from outside America, where so man… [+7359 chars]",
    },
    {
      source: {
        id: null,
        name: "PCMag.com",
      },
      author: "Matthew Humphries",
      title: "Fiery Tesla Crash Was Faked Using Pyrotechnics",
      description:
        "Insurance company Axa performed a fake crash test in an attempt to show that electric vehicles cause more accidents.\nFrench insurance company Axa has been caught using pyrotechnics as part of a fake crash test demonstration that tried to make it look like a T…",
      url: "https://uk.pcmag.com/cars-auto/142393/fiery-tesla-crash-was-faked-using-pyrotechnics",
      urlToImage:
        "https://sm.pcmag.com/t/pcmag_uk/news/f/fiery-tesl/fiery-tesla-crash-was-faked-using-pyrotechnics_qnj1.1200.jpg",
      publishedAt: "2022-08-31T14:23:39Z",
      content:
        "French insurance company Axa has been caught using pyrotechnics as part of a fake crash test demonstration that tried to make it look like a Tesla burst into flames following a collision.\r\nAs Electre… [+1274 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Philip van Doorn",
      title:
        "Deep Dive: Here are the worst (and best) performing stocks of August and for 2022",
      description:
        "U.S. stocks reversed gains from July, led by technology companies.",
      url: "https://www.marketwatch.com/story/here-are-the-worst-and-best-performing-stocks-of-august-and-for-2022-11661955242",
      urlToImage: "https://images.mktw.net/im-614011/social",
      publishedAt: "2022-08-31T14:20:13Z",
      content:
        "After a strong showing in July, when stock indexes rebounded from their 2022 lows of June, U.S. equities abruptly reversed course in August.All price changes in this article exclude dividends.The S&a… [+11194 chars]",
    },
    {
      source: {
        id: null,
        name: "3dnews.ru",
      },
      author: null,
      title:
        "Запрет продаж автомобилей с ДВС с 2035 года вслед за Калифорнией введут и другие штаты",
      description:
        "После ввода на прошлой неделе Калифорнийским советом по воздушным ресурсам (California Air Resources Board, CARB) в действие новых правил, согласно которым в штате в 2035 году вступит в силу запрет на продажи новых автомобилей с двигателем внутреннего сгорани…",
      url: "https://3dnews.ru/1073299/po-primeru-kalifornii-ryad-shtatov-zapretit-prodagu-avtomobiley-s-dvs-k-2035-godu",
      urlToImage:
        "https://3dnews.ru/assets/external/illustrations/2022/08/31/1073299/35876dbc-0350-4ebc-af22-f85076c44dd0.jpg",
      publishedAt: "2022-08-31T14:14:00Z",
      content:
        "(California Air Resources Board, CARB) , 2035 (), .\r\n: Tesla\r\n(Clean Air Act) , , . , .\r\n , 2021 2035 . (Jason Miyares) , , .\r\n15 , , , - .\r\n , (, ). 2020 , , , , .\r\n , , 2035 . , .\r\n , , 2035 .\r\n, -… [+36 chars]",
    },
    {
      source: {
        id: null,
        name: "Www.vg.no",
      },
      author: "Shazia Majid",
      title: "Musk er smart, men han er en pøbel",
      description:
        "Tesla-gründer Elon Musk har vært på Norgesbesøk. Han ble mottatt med nesegrus beundring. Det er pinlig.",
      url: "https://www.vg.no/nyheter/meninger/i/47nPbV/musk-er-smart-men-han-er-en-poebel",
      urlToImage:
        "https://akamai.vgc.no/v2/images/b65a636c-6f09-42c4-b699-05f2bc96bdbf?fit=crop&format=auto&h=1265&w=1900&s=d7cb4eacd378dcc58efcd1d1e1c1b0feec8f4856",
      publishedAt: "2022-08-31T14:12:15Z",
      content:
        "FRELST: Elon Musk var over seg av begeistring da han besøkte Norge mandag denne uken. Det samme var pressen. Foto: Carina Johansen / NTB\r\nTesla-gründer Elon Musk har vært på Norgesbesøk. Han ble mott… [+5610 chars]",
    },
    {
      source: {
        id: null,
        name: "Pravda.sk",
      },
      author: "Tomáš Andrejčák",
      title: "Vernosť zákazníkov k luxusným značkám upadá. Výnimky sú len tri",
      description:
        "Väčšina prémiových výrobcov registruje pokles vernosti. Jednoducho, ich pôvodní zákazníci sa obracajú k iným značkám.",
      url: "https://auto.pravda.sk/magazin/clanok/638598-vernost-zakaznikov-luxusnym-znackam-upada-vynimky-su-len-tri/",
      urlToImage:
        "http://ipravda.sk/res/2015/07/16/thumbs/audi-bmw-mercedes-logo-clanokW.jpg",
      publishedAt: "2022-08-31T14:00:00Z",
      content:
        "Väina prémiových výrobcov registruje pokles vernosti. Jednoducho, ich pôvodní zákazníci sa obracajú k iným znakám.Vernos k znake je pre automobilky dôleitá. Verná klientela sa toti vracia a je záruko… [+2965 chars]",
    },
    {
      source: {
        id: null,
        name: "Interia.pl",
      },
      author: "Kamil Kuran",
      title: "Na hulajnodze, pod wpływem i we dwóch. Mandat - 2,8 tys. zł",
      description:
        "Policjanci z Olsztyna zatrzymali dwóch mężczyzn, którzy podróżowali jedną hulajnogą.",
      url: "https://motoryzacja.interia.pl/raporty/raport-polskie-drogi/wiadomosci/news-na-hulajnodze-pod-wplywem-i-we-dwoch-mandat-2-8-tys-zl,nId,6255642",
      urlToImage: "https://i.iplsc.com/-/000G09NUU0JNPLTC-C429.jpg",
      publishedAt: "2022-08-31T13:50:46Z",
      content:
        "Elektryczne hulajnogi z definicji przeznaczone s wycznie dla jednej osoby. Nic wic dziwnego, e dwóch mczyzn podróujcych na jednej hulajnodze, wywoao zainteresowanie policjantów. \r\nJak si w okazao, pa… [+738 chars]",
    },
    {
      source: {
        id: null,
        name: "Investopedia",
      },
      author: "Staff Author",
      title: "First Solar to Invest $1 Billion in New U.S. Factory",
      description:
        "First Solar, the largest U.S.-based solar panel manufacturer, announced on Tuesday it is planning to spend up to $1 billion to construct a new manufacturing facility in the U.S.",
      url: "https://www.investopedia.com/first-solar-to-invest-1-billion-in-new-u-s-factory-6541142",
      urlToImage:
        "https://www.investopedia.com/thmb/ap6MpWBOn3H5GuIUyBNgIF0Zq3o=/2121x1413/filters:fill(auto,1)/GettyImages-1368229727-a7ad723699ec426088080236cda78ec7.jpg",
      publishedAt: "2022-08-31T13:47:08Z",
      content:
        "First Solar, the largest U.S.-based solar panel manufacturer, announced on Tuesday it is planning to spend up to $1 billion to construct a new manufacturing facility in the U.S. The companys announce… [+956 chars]",
    },
    {
      source: {
        id: null,
        name: "Interia.pl",
      },
      author: "INTERIA.PL",
      title:
        "Podsumowanie wakacji. Ponad 20 000 pijanych kierowców na polskich drogach",
      description:
        "20 927 – tylu pijanych kierowców zatrzymano łącznie w lipcu i sierpniu bieżącego roku. To o 27 proc. więcej niż podczas zeszłorocznych wakacji. Według statystyk polskiej policji w sezonie urlopowym doszło również do pobicia kilku bardzo niebezpiecznych rekord…",
      url: "https://motoryzacja.interia.pl/raporty/raport-pijani/pijani/news-podsumowanie-wakacji-ponad-20-000-pijanych-kierowcow-na-pols,nId,6255751",
      urlToImage: "https://i.iplsc.com/-/000G0ACDNS30RW7C-C429.jpg",
      publishedAt: "2022-08-31T13:40:56Z",
      content:
        "W dniach 1-31 lipca suby zanotoway a 10 645 przypadków kierowania po spoyciu alkoholu. Jest to najwyszy miesiczny wynik zarejestrowany w tym roku. W porównaniu z lipcem 2021 liczba zatrzymanych na po… [+2488 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Anviksha Patel",
      title:
        ": BYD shares sink in response to Warren Buffett’s Berkshire Hathaway partial stake sale",
      description:
        "Chinese electric car and battery maker BYD’s stock dropped by almost 13% in Hong Kong trading after Warren Buffett cut its 7.7% stake in the firm.",
      url: "https://www.marketwatch.com/story/byd-shares-sink-in-response-to-warren-buffetts-berkshire-hathaway-partial-stake-sale-11661952690",
      urlToImage: "https://images.mktw.net/im-613906/social",
      publishedAt: "2022-08-31T13:39:17Z",
      content:
        "Chinese electric car and battery maker BYDs \r\n 1211,\r\n -7.91%\r\nstock dropped as much as 12% in Hong Kong trading after Berkshire Hathaway \r\n BRK.B,\r\n +0.38%\r\nBRK.A,\r\n +0.19%\r\ncut part of its 7.7% sta… [+2290 chars]",
    },
    {
      source: {
        id: null,
        name: "Abril.com.br",
      },
      author: "João Vitor Ferreira",
      title:
        "Grupo de noruegueses insatisfeitos com a Tesla ameaça fazer greve de fome",
      description:
        "Aparentemente, eles ainda amam Elon Musk, mas ameaçam tomar uma medida drástica se os defeitos não pararem de aparecer em seus carros",
      url: "https://quatrorodas.abril.com.br/noticias/grupo-de-noruegueses-insatisfeitos-com-a-tesla-ameaca-fazer-greve-de-fome/",
      urlToImage:
        "https://quatrorodas.abril.com.br/wp-content/uploads/2022/08/1FLP9149-e1661807205779.jpg?quality=70&strip=info",
      publishedAt: "2022-08-31T13:30:00Z",
      content:
        "O que você faria se seu carro desse problema constantemente? Provavelmente a resposta seria trocar de modelo, de preferência por um de outra marca. Essa resposta parece óbvia, mas não se você for dev… [+2492 chars]",
    },
    {
      source: {
        id: null,
        name: "Resilience",
      },
      author: "Roger Blanchard",
      title: "The Status of Global Oil Production (Part 5)",
      description:
        "Environmentalists like to say that oil can be easily replaced with electric and fuel cell vehicles in the transportation sector.  But how realistic is that assertion?",
      url: "https://www.resilience.org/stories/2022-08-31/the-status-of-global-oil-production-part-5/",
      urlToImage:
        "https://www.resilience.org/wp-content/uploads/2022/08/Fietsstraat.jpg",
      publishedAt: "2022-08-31T13:26:52Z",
      content:
        "Ed. note: Parts 1, 2, 3, and 4 of this series can be found on Resilience.org here, here, here, and here.\r\nWhat are the Alternatives to Oil?\r\n A key area in which oil distillates, which come from oil,… [+14644 chars]",
    },
    {
      source: {
        id: null,
        name: "Leganerd.com",
      },
      author: "Laura Della Corte",
      title: "Echoes, la recensione: suspence dove sei?",
      description:
        "Ad ogni recensione il suo dilemma è così anche quella di Echoes, una serie limitata di Netflix su gemelle identiche e ingannevoli, potrebbe aver funzionato sulla carta ma non del tutto sullo schermo. Ha gli elementi di un thriller intrigante: due sorelle impe…",
      url: "https://leganerd.com/2022/08/31/echoes-la-recensione-suspence-dove-sei/",
      urlToImage:
        "https://leganerd.com/wp-content/uploads/2022/08/Echoes-cover.jpeg",
      publishedAt: "2022-08-31T13:10:35Z",
      content:
        "Ad ogni recensione il suo dilemma è così anche quella di Echoes, una serie limitata di Netflix su gemelle identiche e ingannevoli, potrebbe aver funzionato sulla carta ma non del tutto sullo schermo.… [+8786 chars]",
    },
    {
      source: {
        id: null,
        name: "WinFuture",
      },
      author: "Nadine Juliana Dressler",
      title:
        'Tesla-Crash mit "Akku-Brand": Versicherung beim Schummeln erwischt',
      description:
        "Der Versuch, über Risiken bei Autounfällen aufzuklären, geht in diesem Jahr für die Axa Versicherung nach hinten los. Das Medienecho auf einen von der Versicherung durchgeführten - aber manipulierten - Tesla-Crash mit brennendem Akku ist dafür jetzt besonders…",
      url: "https://winfuture.de/news,131589.html",
      urlToImage: "https://i.wfcdn.de/teaser/1920/47856.png",
      publishedAt: "2022-08-31T13:07:00Z",
      content:
        "Der Versuch, über Risiken bei Autounfällen aufzuklären, geht in diesem Jahr für die Axa Versicherung nach hinten los. Das Medienecho auf einen von der Versicherung durchgeführten - aber manipulierten… [+4379 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "awarner",
      title:
        "Some Carmakers Say Recycling Car Parts Is the Future. But Is It Realistic?",
      description:
        "Car tailpipes belch out an estimated 4.6 metric tons of carbon dioxide yearly. They begin to use energy and emit carbon through extraction and production of the steel, rubber, plastics, glass,... #netherlandscar #europeangreendeal #carcompanies #carmakers #ca…",
      url: "https://biztoc.com/p/fauduynh?ref=rss",
      urlToImage: "https://cdn.biztoc.com/og/fauduynh.jpg",
      publishedAt: "2022-08-31T13:02:40Z",
      content:
        "Car tailpipes belch out an estimated 4.6 metric tons of carbon dioxide yearly. They begin to use energy and emit carbon through extraction and production of the steel, rubber, plastics, glass, lithiu… [+1305 chars]",
    },
    {
      source: {
        id: null,
        name: "Turbo.fr",
      },
      author: "Hugo Quintal",
      title: "Toyota bZ3, celle qui veut tuer la Tesla Model 3",
      description:
        "Des images en fuite de la Toyota bZ3 de série ont fait surface sur la Toile. Il s'agit d'une berline 100% électrique qui rejoindra le bZ4X dans la famille des véhicules électriques du constructeur japonais.\nLa bZ3 a été présentée en avant-première l'année der…",
      url: "https://www.turbo.fr/actualite-automobile/toyota-bz3-celle-qui-veut-tuer-la-tesla-model-3-187052",
      urlToImage:
        "https://www.turbo.fr/sites/default/files/2022-08/Toyota-BZ3_1.jpg",
      publishedAt: "2022-08-31T13:00:57Z",
      content:
        "Des images en fuite de la Toyota bZ3 de série ont fait surface sur la Toile. Il s'agit d'une berline 100% électrique qui rejoindra le bZ4X dans la famille des véhicules électriques du constructeur ja… [+2064 chars]",
    },
    {
      source: {
        id: null,
        name: "Tomshw.it",
      },
      author: "Francesco Daghini",
      title: "Elon Musk a ruota libera: Starship, FSD, eolico e nucleare",
      description:
        "Elon Musk ha parlato del prossimo futuro durante una conferenza in Norvegia: spera di avere FSD entro fine anno.",
      url: "https://www.tomshw.it/automotive/elon-musk-a-ruota-libera-starship-fsd-eolico-e-nucleare/",
      urlToImage:
        "https://www.tomshw.it/images/images/2021/08/elon-musk-critiche-libro-178853.jpg",
      publishedAt: "2022-08-31T13:00:15Z",
      content:
        "Auto Elon Musk a ruota libera: Starship, FSD, eolico e nucleare\r\nTom's Hardware vive grazie al suo pubblico. Quando compri qualcosa dai nostri link, potremmo guadagnare una commissione. Scopri di più… [+2575 chars]",
    },
    {
      source: {
        id: null,
        name: "PRNewswire",
      },
      author: null,
      title:
        "WeaveGrid launches evPulse for Northern and Central California-based EV drivers",
      description:
        "Program improving electric grid resilience expected to be the largest electric vehicle smart charging program in the U.S. SAN FRANCISCO, Aug. 31, 2022 /PRNewswire/ -- WeaveGrid, a software company that builds data products to enable increased adoption of elec…",
      url: "https://www.prnewswire.com/news-releases/weavegrid-launches-evpulse-for-northern-and-central-california-based-ev-drivers-301615281.html",
      urlToImage: null,
      publishedAt: "2022-08-31T13:00:00Z",
      content:
        "Program improving electric grid resilience expected to be the largest electric vehicle smart charging program in the U.S.\r\nSAN FRANCISCO, Aug. 31, 2022 /PRNewswire/ -- WeaveGrid, a software company t… [+4277 chars]",
    },
    {
      source: {
        id: null,
        name: "Pythonforbeginners.com",
      },
      author: "Josh Petty",
      title: "Python for Beginners: Python Lists Cheat Sheet",
      description:
        "Python Lists Cheat Sheet will help you improve your python skills with easy to follow examples and tutorials.",
      url: "https://www.pythonforbeginners.com/lists/python-lists-cheat-sheet-2",
      urlToImage: null,
      publishedAt: "2022-08-31T13:00:00Z",
      content:
        "What is a List?\r\nPython Lists are used to store collections of data. Python can assign multiple values to a single list, which is handy if youre dealing with a lot of data.\r\nLists can hold any type o… [+9513 chars]",
    },
    {
      source: {
        id: null,
        name: "Seeking Alpha",
      },
      author: "Clark Schultz",
      title:
        "Tesla improves delivery turnaround time in China for some Model Ys",
      description:
        "Tesla (TSLA) is making some process in China in catching up to demand with delivery waiting times for its rear-wheel drive Model Ys in China. Read more.",
      url: "https://seekingalpha.com/news/3878893-tesla-improves-delivery-turnaround-time-in-china-for-some-model-ys",
      urlToImage:
        "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/81543188/image_81543188.jpg?io=getty-c-w750",
      publishedAt: "2022-08-31T12:56:12Z",
      content:
        "Win McNamee/Getty Images News\r\nTesla (NASDAQ:TSLA) is making some process in China in catching up to demand with delivery waiting times for its rear-wheel drive Model Ys in China shortened to a perio… [+616 chars]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "feedfeeder",
      title:
        "BYD Plunges as Buffett's Stake Sale Spurs Bets on More Selling - Bloomberg",
      description:
        "BYD Plunges as Buffett's Stake Sale Spurs Bets on More SellingBloomberg BYD shares sink in Hong Kong after Warren Buffett's Berkshire trims stakeCNBC Television BYD plunges after Buffett trims his stake; one fund manager says it could be a warning signCNBC St…",
      url: "https://slashdot.org/firehose.pl?op=view&amp;id=165647205",
      urlToImage: null,
      publishedAt: "2022-08-31T12:53:56Z",
      content:
        "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
    },
    {
      source: {
        id: "handelsblatt",
        name: "Handelsblatt",
      },
      author: "Ozan Demircan",
      title:
        "Togg: Türkisches Elektroauto: Minister gibt Verkaufsdatum bekannt",
      description:
        "Kommt der „türkische Tesla“ wirklich? Der Industrieminister in Ankara scheint davon überzeugt. Das Werk südlich von Istanbul soll schon bald die ersten Togg-Modelle produzieren.",
      url: "https://www.handelsblatt.com/unternehmen/industrie/togg-tuerkisches-elektroauto-minister-gibt-verkaufsdatum-bekannt/28642518.html",
      urlToImage:
        "https://www.handelsblatt.com/images/togg-elektroauto/26278122/4-format2003.jpg",
      publishedAt: "2022-08-31T12:53:54Z",
      content:
        "Istanbul Das türkische Elektroauto gehört zu den ambitioniertesten Projekten der Automobilbranche in den vergangenen Jahren. Im Schatten heftiger wirtschaftlicher Turbulenzen in der Türkei hat der eh… [+3042 chars]",
    },
    {
      source: {
        id: null,
        name: "Barron's",
      },
      author: "Al Root",
      title: "Toyota Is Upping Its EV Game to Catch GM, Ford, and Tesla",
      description:
        "The car company said it would spend $5.3 billion for battery-production capacity in the U.S. and Japan. More electric vehicles are coming.",
      url: "https://www.barrons.com/articles/toyota-batteries-evs-51661950078",
      urlToImage: "https://images.barrons.com/im-538435/social",
      publishedAt: "2022-08-31T12:52:20Z",
      content:
        "The automotive giant \r\n Toyota Motor\r\n is starting to pivot away from hybrid electric vehicles and lean into the all-battery electric trend. That shift, which means more competition for the likes of … [+2661 chars]",
    },
    {
      source: {
        id: null,
        name: "Interia.pl",
      },
      author: "Kamil Kuran",
      title:
        "U bogatych kryzysu nie widać. Tesla, Porsche i Maserati ze wzrostami sprzedaży",
      description:
        "Choć cały rynek sprzedaży samochodów w Europie zaliczył spadek o 11 proc. rok do roku, to niektóre marki radzą sobie nad wyraz dobrze. Wśród nich znajdziemy m.in. Teslę, Porsche i Maserati",
      url: "https://motoryzacja.interia.pl/wiadomosci/producenci/news-u-bogatych-kryzysu-nie-widac-tesla-porsche-i-maserati-ze-wzr,nId,6255517",
      urlToImage: "https://i.iplsc.com/-/00077EP2AVLE8Y71-C429.jpg",
      publishedAt: "2022-08-31T12:50:25Z",
      content:
        "Pi marek oferowanych na europejskim rynku zanotowao w lipcu 2022 roku wzrost sprzeday o ponad 100 proc. w stosunku do lipca 2021. Siedem kolejnych miao wzrosty dwucyfrowe.\r\nProducenci, którzy zanotow… [+1416 chars]",
    },
    {
      source: {
        id: null,
        name: "Interia.pl",
      },
      author: "INTERIA.PL",
      title:
        "Jechał nad jezioro po ścieżce rowerowej. Samochodem. Stracił prawo jazdy",
      description:
        "Wczasowicz ze Śląska postanowił, że niedzielne popołudnie spędzi w Myślenicach nad rzeką Rabą. Choć jechał samochodem, to na miejsce wypoczynku dotarł ścieżką pieszo-rowerową. Policjanci zatrzymali kierowcy prawo jazdy.",
      url: "https://motoryzacja.interia.pl/raporty/raport-polskie-drogi/wiadomosci/news-jechal-nad-jezioro-po-sciezce-rowerowej-samochodem-stracil-p,nId,6255699",
      urlToImage: "https://i.iplsc.com/-/000G0A06GO4H437N-C429.jpg",
      publishedAt: "2022-08-31T12:45:38Z",
      content:
        "Policjanci z Wydziau Ruchu Drogowego mylenickiej komendy otrzymali zgoszenie, e na Zarabiu ciek spacerowo-rowerow jedzie samochód osobowy. Jak wynikao ze zgoszenia, mczyzna za nic mia rowerzystów i o… [+1464 chars]",
    },
    {
      source: {
        id: null,
        name: "Premiumbeat.com",
      },
      author: "Mike Maher",
      title: "The Best VR Movies (So Far) Ranked",
      description:
        "Whether you have an Oculus, HTC Vive, PSVR, here are some of the best VR movies you can watch. Whether you have an Oculus, HTC Vive, PSVR, here are some of the best VR movies you can watch.",
      url: "https://www.premiumbeat.com/blog/the-best-vr-movies/",
      urlToImage:
        "https://pbblogassets.s3.amazonaws.com/uploads/2022/08/31071130/Best-VR-Film.jpg",
      publishedAt: "2022-08-31T12:45:32Z",
      content:
        "So you finally took the dive into buying a VR headset. Whether it’s an Oculus (er uh Meta Quest), HTC Vive, PSVR, or another headset, here are some of the best VR movies you can find and where to wat… [+6911 chars]",
    },
    {
      source: {
        id: null,
        name: "Interia.pl",
      },
      author: "Kamil Kuran",
      title: "Apple CarPlay zastąpi fabryczny interfejs samochodu?",
      description:
        "Najnowsza wersja oprogramowania CarPlay od Apple to nie tylko możliwość przeniesienia zawartości ekranu telefonu na główny ekran w samochodzie.",
      url: "https://motoryzacja.interia.pl/wiadomosci/producenci/news-apple-carplay-zastapi-fabryczny-interfejs-samochodu,nId,6255401",
      urlToImage: "https://i.iplsc.com/-/000G08PCYGCCNDU7-C429.jpg",
      publishedAt: "2022-08-31T12:42:00Z",
      content:
        "Spis treci:\r\nNowa wersja oprogramowania Apple CarPlay to z punktu widzenia kierowcy wiksza wygoda korzystania z telefonu w czasie jazdy. Jednak z punktu widzenia producentów samochodów moe to by pewn… [+2035 chars]",
    },
    {
      source: {
        id: null,
        name: "Aktualne.cz",
      },
      author: "Jan Matoušek",
      title:
        "Další čínská auta na březích Evropy: elektromobily BYD navrhoval bývalý designér Audi",
      description:
        "Na evropské trhy míří další čínská automobilka. BYD sází na elektromobily i spolupráci s někdejším designérem Audi.",
      url: "https://zpravy.aktualne.cz/ekonomika/auto/dalsi-cinska-auta-na-brezich-evropy-elektromobily-byd-navrho/r~07229322279211ed9ae20cc47ab5f122/",
      urlToImage:
        "https://cdn.xsd.cz/original/678350415f5b39979027eae8511215dc.jpg",
      publishedAt: "2022-08-31T12:40:33Z",
      content:
        'Automobilka BYD, což je zkratka pro Build Your Dreams, v překladu "postavte si své sny", nepatří k historickým velikánům. Vznikla v roce 1995 jako producent baterií a až v roce 2003 začala s vývojem … [+5265 chars]',
    },
    {
      source: {
        id: null,
        name: "CarScoops",
      },
      author: "Sam D. Smith",
      title:
        "Skoda Vision 7S Concept, VW Tavendor For China, And Musk Wants Self-Driving Teslas By End Of Year: Your Morning Brief",
      description:
        "Plus, Dongfeng's new Hummer-inspired EV brand, and mystery Mustang hood bulge solved.",
      url: "https://www.carscoops.com/2022/08/skoda-vision-7s-concept-vw-tavendor-for-china-and-musk-wants-self-driving-teslas-by-end-of-year-your-morning-brief/",
      urlToImage:
        "https://www.carscoops.com/wp-content/uploads/2022/08/Aug-31.jpg",
      publishedAt: "2022-08-31T12:35:23Z",
      content:
        "Good morning and welcome to our daily digest of automotive news from around the globe, starting with\r\nElectric Vehicles Cause More Expensive Collisions, Do More Damage\r\nFrench insurer AXA has found t… [+4804 chars]",
    },
    {
      source: {
        id: null,
        name: "Interia.pl",
      },
      author: "INTERIA.PL",
      title:
        'Orlen przedłuża promocję "30 groszy taniej". 100 litrów paliwa z rabatem',
      description:
        'Dosłownie "za pięć dwunasta" Orlen zdecydował się przedłużyć promocję na paliwa. 31 sierpnia, w dniu, w którym wakacyjna promocja miała się zakończyć, prezes PKN Orlen Daniel Obajtek ogłosił na Twitterze, że zostanie ona przedłużona o dwa tygodnie.',
      url: "https://motoryzacja.interia.pl/raporty/raport-rynek-paliw/wiadomosci/news-orlen-przedluza-promocje-30-groszy-taniej-100-litrow-paliwa-,nId,6255661",
      urlToImage: "https://i.iplsc.com/-/000G09SJX070G8VN-C429.jpg",
      publishedAt: "2022-08-31T12:34:46Z",
      content:
        "Spis treci:\r\nDecyzja o przedueniu promocji musiaa by podejmowana w trybie doranym i pilnym, bo jako pierwszy poinformowa o tym na Twitterze Obajtek, a dopiero nieco póniej wpis pojawi si na profilu P… [+2179 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author:
        "Tinglong Dai, Professor of Operations Management & Business Analytics, Carey Business School, Johns Hopkins University, Christopher S. Tang, Professor of Supply Chain Management, University of California, Los Angeles, and Ho-Yin Mak, Associate Professor in Operations & Information Management, Georgetown University",
      title:
        "Making EVs without imports from China – 3 supply chain experts outline a strategy",
      description:
        "Automaker GMC shows off its Hummer EVs at a plant in Detroit. Nic Antaya/Getty ImagesTwo electrifying moves in recent weeks have the potential to ignite...",
      url: "https://news.yahoo.com/making-evs-without-imports-china-123006233.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/KI.O1PvcbuG5kRcOV0OOyw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02OTM-/https://media.zenfs.com/en/the_conversation_us_articles_815/b2721cbdc79f2456d2b01b5114ae95d6",
      publishedAt: "2022-08-31T12:30:06Z",
      content:
        "Two electrifying moves in recent weeks have the potential to ignite electric vehicle demand in the United States. First, Congress passed the Inflation Reduction Act, expanding federal tax rebates for… [+8973 chars]",
    },
    {
      source: {
        id: null,
        name: "The Conversation Africa",
      },
      author:
        "Ho-Yin Mak, Associate Professor in Operations & Information Management, Georgetown University, Christopher S. Tang, Professor of Supply Chain Management, University of California, Los Angeles, Tinglong Dai, Professor of Operations Management & Business Analytics, Carey Business School, Johns Hopkins University",
      title:
        "Making EVs without imports from China – 3 supply chain experts outline a strategy",
      description:
        "China controls much of the global EV supply chain, but electric vehicles that use its parts and minerals won’t qualify for new US EV tax credits. Can America build its own supply chain?",
      url: "https://theconversation.com/making-evs-without-imports-from-china-3-supply-chain-experts-outline-a-strategy-189453",
      urlToImage:
        "https://images.theconversation.com/files/481667/original/file-20220829-6542-2d2rkb.jpg?ixlib=rb-1.1.0&rect=792%2C1377%2C4085%2C2039&q=45&auto=format&w=1356&h=668&fit=crop",
      publishedAt: "2022-08-31T12:30:06Z",
      content:
        "Automaker GMC shows off its Hummer EVs at a plant in Detroit. Nic Antaya/Getty Images\r\nTwo electrifying moves in recent weeks have the potential to ignite electric vehicle demand in the United States… [+8849 chars]",
    },
    {
      source: {
        id: null,
        name: "The Conversation Africa",
      },
      author:
        "Ho-Yin Mak, Associate Professor in Operations & Information Management, Georgetown University, Christopher S. Tang, Professor of Supply Chain Management, University of California, Los Angeles, Tinglong Dai, Professor of Operations Management & Business Analytics, Carey Business School, Johns Hopkins University",
      title:
        "Making EVs without China's supply chain is hard, but not impossible – 3 supply chain experts outline a strategy",
      description:
        "China controls much of the global EV supply chain, but electric vehicles that use its parts and minerals won’t qualify for new US EV tax credits. Can America build its own supply chain?",
      url: "https://theconversation.com/making-evs-without-chinas-supply-chain-is-hard-but-not-impossible-3-supply-chain-experts-outline-a-strategy-189453",
      urlToImage:
        "https://images.theconversation.com/files/481667/original/file-20220829-6542-2d2rkb.jpg?ixlib=rb-1.1.0&rect=792%2C1377%2C4085%2C2039&q=45&auto=format&w=1356&h=668&fit=crop",
      publishedAt: "2022-08-31T12:30:06Z",
      content:
        "Automaker GMC shows off its Hummer EVs at a plant in Detroit. Nic Antaya/Getty Images\r\nTwo electrifying moves in recent weeks have the potential to ignite electric vehicle demand in the United States… [+8849 chars]",
    },
    {
      source: {
        id: null,
        name: "Motley Fool",
      },
      author: "newsfeedback@fool.com (Beth McKenna)",
      title: "EV Maker Polestar and Candela Team Up to Produce Electric Boats",
      description:
        "The electric boat revolution is underway, with Candela already producing premium electric leisure watercraft and planning to enter the commercial market.",
      url: "https://www.fool.com/investing/2022/08/31/electric-boat-stocks-candela-polestar/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/698485/electric-boat-candela-c-8-polestar-stock-partnership.jpg",
      publishedAt: "2022-08-31T12:30:00Z",
      content:
        'Sweden\'s Candela -- being dubbed the "Tesla of the seas" -- is one of the companies at the forefront of the electric watercraft revolution, which is about a decade behind the electric car revolution,… [+4248 chars]',
    },
    {
      source: {
        id: null,
        name: "Motley Fool",
      },
      author: "newsfeedback@fool.com (Anthony Di Pizio)",
      title:
        "Tech Sell-Off: 1 Stock-Split Stock You'll Regret Not Buying on the Dip",
      description:
        "There have been a string of high-profile stock splits in 2022, and there's another one around the corner.",
      url: "https://www.fool.com/investing/2022/08/31/tech-sell-off-1-stock-split-stock-not-buying-dip/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/698508/a-picture-of-a-dollar-coin-being-split-in-half-on-top-of-a-blue-share-certificate.jpg",
      publishedAt: "2022-08-31T12:28:00Z",
      content:
        "The Nasdaq-100 technology index is firmly in bear market territory right now, with a loss of 25% for the year so far, even despite staging a convincing rebound over the last two months. It's a tricky… [+4783 chars]",
    },
    {
      source: {
        id: null,
        name: "Interia.pl",
      },
      author: "Kamil Kuran",
      title:
        "Nowe Lamborghini najwcześniej za półtora roku. Wszystkie się wyprzedały",
      description:
        "Lamborghini wyprzedane na najbliższe półtora roku. Stephan Winkelmann, prezes Lamborghini przyznał, że lista złożonych zamówień zamyka możliwości produkcyjne na kolejnych 18 miesięcy. To zwiastuje nowe rekordy sprzedaży w Sant'Agata Bolognese.",
      url: "https://motoryzacja.interia.pl/samochody-nowe/news-nowe-lamborghini-najwczesniej-za-poltora-roku-wszystkie-sie-,nId,6255669",
      urlToImage: "https://i.iplsc.com/-/000FF9J2A3IEEV67-C429.jpg",
      publishedAt: "2022-08-31T12:22:18Z",
      content:
        "Kryzys? Jaki kryzys? - mógby zapyta prezes Lamborghini. Mimo inflacji i wszechogarniajcej Europ droyzny, s brane, które nie odczuwaj adnych problemów. Dotyczy to chociaby sprzeday aut luksusowych.\r\nJ… [+1263 chars]",
    },
    {
      source: {
        id: null,
        name: "COMPUTER BILD",
      },
      author: "Manuel Bauer",
      title: "Tesla: Sammelklage wegen grundloser Bremsungen",
      description:
        "Weil die Fahrzeuge des Herstellers ohne erkennbaren Grund abbremsen und Verkehrsteilnehmer damit in Lebensgefahr bringen, hat ein Model-3-Besitzer aus Kalifornien eine Sammelklage gegen Tesla eingereicht.",
      url: "https://www.computerbild.de/artikel/cb-News-Connected-Car-Grundlose-Bremsmanoever-Sammelklage-gegen-Tesla-gestartet-33419567.html",
      urlToImage:
        "https://i.computer-bild.de/imgs/1/4/5/1/6/9/0/5/1-928958fbc210e85b.jpg",
      publishedAt: "2022-08-31T12:20:00Z",
      content:
        "Angebote bei Finn: Tesla im Auto-Abo fahren\r\nDie Fahrzeuge von Autobauer Tesla sind nicht nur bei E-Autofans beliebt. Das führt teilweise zu langen Wartezeiten. Der schnellere Weg zum Tesla kann über… [+53 chars]",
    },
    {
      source: {
        id: null,
        name: "Autoblog",
      },
      author: "Reuters",
      title:
        "Toyota triples planned investment to $3.8 billion in U.S. battery plant",
      description:
        "Filed under:\n Green,Plants/Manufacturing,Toyota\n Continue reading Toyota triples planned investment to $3.8 billion in U.S. battery plant\nToyota triples planned investment to $3.8 billion in U.S. battery plant originally appeared on Autoblog on Wed, 31 Aug 20…",
      url: "https://www.autoblog.com/2022/08/31/toyota-investment-north-carolina-battery-plant/",
      urlToImage:
        "https://o.aolcdn.com/images/dims3/GLOB/crop/4968x2795+0+587/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2022-08/08a9df80-2926-11ed-978b-28241bd7283c",
      publishedAt: "2022-08-31T12:11:00Z",
      content:
        "Toyota will boost its planned investment in a new U.S. battery plant from $1.29 billion to $3.8 billion, partly in response to rising consumer demand for electric vehicles, the company said on Wednes… [+1773 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Brad Templeton, Senior Contributor, \n Brad Templeton, Senior Contributor\n https://www.forbes.com/sites/bradtempleton/",
      title:
        "Tesla Raises ‘FSD’ Price To $15K. Does It Signal They Are Giving Up?",
      description:
        "What if the increase in Tesla's FSD price means they can just buy another company that produces self-driving, then resell that system at a profit they already collected?",
      url: "https://www.forbes.com/sites/bradtempleton/2022/08/31/tesla-raises-fsd-price-to-15k--does-it-signal-they-are-giving-up/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/6204926938f58cc79b66de04/0x0.jpg?format=jpg&width=1200",
      publishedAt: "2022-08-31T12:08:00Z",
      content:
        "Tesla, in FSD test mode, shows the map it has created of the road\r\nBrad Templeton\r\nTesla recently announced that the price to buy their FSD package, which includes a small package of automation featu… [+10904 chars]",
    },
    {
      source: {
        id: null,
        name: "Barron's",
      },
      author: "Al Root",
      title: "GM Has a New EV Coming in China. It's a Convertible.",
      description:
        "The company is launching the car, a version of the popular and inexpensive Hongguang Mini EV, with its joint venture partner SAIC, in September.",
      url: "https://www.barrons.com/articles/gm-china-mini-ev-convertible-51661946827",
      urlToImage: "https://images.barrons.com/im-393632/social",
      publishedAt: "2022-08-31T12:07:38Z",
      content:
        "This September, GM (ticker: GM) and Chinese joint venture partner \r\n SAIC Motor\r\n (600104. China) are launching a Cabrio, or convertible, version of their very popular Hongguang Mini EV, according to… [+1637 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Wire",
      },
      author: null,
      title:
        "Apple Already Has Greatest Future Vehicle Consideration Among Automakers, Reports Strategic Vision",
      description:
        "SAN DIEGO--(BUSINESS WIRE)-- #NVES--Apple has yet produce an automobile but already enjoys high future brand consideration and Love among recent new-vehicle buyers, says Strategic Vision",
      url: "https://www.businesswire.com/news/home/20220831005309/en/Apple-Already-Has-Greatest-Future-Vehicle-Consideration-Among-Automakers-Reports-Strategic-Vision",
      urlToImage:
        "https://mms.businesswire.com/media/20220831005309/en/1557803/23/SV_color_block_300dpi.jpg",
      publishedAt: "2022-08-31T12:05:11Z",
      content:
        "SAN DIEGO--(BUSINESS WIRE)--Even though Apple has yet to announce plans to produce an automobile, the brand already has some of the highest future brand consideration among recent new vehicle buyers,… [+3857 chars]",
    },
    {
      source: {
        id: null,
        name: "3dnews.ru",
      },
      author: null,
      title:
        "Норвежские автовладельцы пригрозили Маску голодовкой, если он не исправит 25 проблем в электрокарах Tesla",
      description:
        "У покупателей продукции Tesla хватает претензий как к работе бортового программного обеспечения, так и к качеству сборки самих машин, что в целом не особо мешает компании считаться крупнейшим поставщиком электромобилей в мире. Группа норвежских потребителей о…",
      url: "https://3dnews.ru/1073293/gruppa-norvegskih-avtovladeltsev-vikatila-spisok-iz-25-nedostatkov-elektromobiley-tesla",
      urlToImage:
        "https://3dnews.ru/assets/external/illustrations/2022/08/31/1073293/norway.jpg",
      publishedAt: "2022-08-31T12:04:00Z",
      content:
        "Tesla , , . Tesla, , (Elon Musk) .\r\n: Tesla Hunger Strike\r\nTesla . , . , , , , :\r\n<ol><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li>- </li><li></li><li></li><li></li><li></li><li… [+176 chars]",
    },
    {
      source: {
        id: null,
        name: "Tomshw.it",
      },
      author: "Francesco Daghini",
      title: "Tesla Model S, i crash test di AXA sono completamente finti",
      description:
        "La Tesla Model S di AXA ha fatto una brutta fine, ma i crash test erano finti e organizzati per promuovere un report sulla sicurezza.",
      url: "https://www.tomshw.it/automotive/tesla-model-s-i-crash-test-di-axa-sono-completamente-finti/",
      urlToImage:
        "https://www.tomshw.it/images/images/2022/08/auto-generica-244562.jpg",
      publishedAt: "2022-08-31T12:00:51Z",
      content:
        "Auto Tesla Model S, i crash test di AXA sono completamente finti\r\nTom's Hardware vive grazie al suo pubblico. Quando compri qualcosa dai nostri link, potremmo guadagnare una commissione. Scopri di pi… [+2139 chars]",
    },
    {
      source: {
        id: null,
        name: "Www.hln.be",
      },
      author: "Brecht Vanhaelewyn",
      title:
        "Meer ervaring dan Tesla: dit Chinese automerk lanceert dit jaar nog drie modellen in België",
      description:
        "De Chinezen komen niet, ze zijn er al. Je kan in ons land al merken als Aiways (via Cardoen), Bestune, DFSK en Seres (via invoerder OneAutomotive) en MG (via invoerder Astara) krijgen. De tip van de ijsberg, volgens onze mobiliteitsexpert Brecht Vanhaelewyn. …",
      url: "https://www.hln.be/mobiliteit/meer-ervaring-dan-tesla-dit-chinese-automerk-lanceert-dit-jaar-nog-drie-modellen-in-belgie~a109bde1/",
      urlToImage:
        "https://images0.persgroep.net/rcs/thlR34P26zI1swTsif4R4hlKcso/diocontent/220517888/_fill/1200/630/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7",
      publishedAt: "2022-08-31T12:00:45Z",
      content:
        "Een compacte elektrische cross-over\r\nDe Tang is een grote SUV, de Han is een sedan en de Atto3 is de belangrijkste, namelijk een compacte SUV (voor het C-segment). Die zal met andere woorden aantrede… [+4012 chars]",
    },
    {
      source: {
        id: "new-york-magazine",
        name: "New York Magazine",
      },
      author: "msn",
      title: "Altruists Fear Apocalypse...",
      description: "A conversation with the philosopher William MacAskill.",
      url: "http://nymag.com/intelligencer/2022/08/why-effective-altruists-fear-the-ai-apocalypse.html?utm_source=msn&amp;utm_medium=f1&amp;utm_campaign=feed-part",
      urlToImage:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA11h8xl.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg",
      publishedAt: "2022-08-31T12:00:04Z",
      content:
        "Why Effective Altruists Fear the AI Apocalypse\nHumanity is a wayward teenager. Our species has its whole life ahead of it, but the decisions we make now will irrevocably shape the course of our adult… [+32822 chars]",
    },
    {
      source: {
        id: null,
        name: "Origo.hu",
      },
      author: null,
      title: "Patkányt talált egy autós a szervizből visszakapott Teslájában",
      description:
        "Esete nem egyedi: ragasztószalaggal javított autóról is érkeztek bejelentések, a tulajdonosok egyre elégedetlenebbek.",
      url: "https://www.origo.hu/gazdasag/20220831-gazdasag-penz-tesla-szerviz-patkany-musk.html",
      urlToImage:
        "https://cdn.nwmgroups.hu/s/img/i/2112/20211213tesla-model-y-tesla-auto1.jpg?w=1024",
      publishedAt: "2022-08-31T12:00:00Z",
      content:
        "Egy Tesla tulajdonosa állítólag döglött egeret és patkánymérget talált autója csomagtartójában, miután elhozta azt a szervizbl - írja a BusinessInsider.A Tesla ügyfelei több ezer panaszt nyújtottak b… [+2090 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "PR Newswire",
      title:
        "Global Passenger Vehicle OEMs' Customer Service Channels Analysis Report 2022 - Service Segment Leaders and Standout OES Maintenance Offerings",
      description:
        "The \"Growth Opportunities from Benchmarking Global Passenger Vehicle OEMs' Customer Service Channels\" report has been added to ResearchAndMarkets.com's...",
      url: "https://finance.yahoo.com/news/global-passenger-vehicle-oems-customer-120000905.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/wDGPSO44TROYKbQSONxNmQ--~B/aD00Mjt3PTQwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/prnewswire.com/e75ef6f3096d7cb6f5dd43ba82eca2fe",
      publishedAt: "2022-08-31T12:00:00Z",
      content:
        "DUBLIN, Aug. 31, 2022 /PRNewswire/ -- The \"Growth Opportunities from Benchmarking Global Passenger Vehicle OEMs' Customer Service Channels\" report has been added to ResearchAndMarkets.com's offering.… [+8048 chars]",
    },
    {
      source: {
        id: null,
        name: "Adweek",
      },
      author: "Brad Pareso",
      title:
        "Elon Musk Says Twitter Whistleblower Is Another Reason He Doesn’t Want to Buy Company",
      description:
        "Tesla CEO Elon Musk has again filed paperwork to terminate his agreement to buy Twitter, this time based on information in a whistleblower complaint filed by Twitter’s former head of security. (NBC News/AP) Musk’s legal team sent a letter to Twitter highlight…",
      url: "https://www.adweek.com/blognetwork/elon-musk-says-twitter-whistleblower-is-another-reason-he-doesnt-want-to-buy-company/97865",
      urlToImage:
        "https://www.adweek.com/wp-content/images/blognetwork/share-300x615.png",
      publishedAt: "2022-08-31T11:56:52Z",
      content:
        "Tesla CEO Elon Musk has again filed paperwork to terminate his agreement to buy Twitter, this time based on information in a whistleblower complaint filed by Twitters former head of security. (NBC Ne… [+335 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Invesco Ltd.",
      title: "Invesco Ltd.: Form 8.3 - Darktrace PLC",
      description:
        "FORM 8.3 PUBLIC DEALING DISCLOSURE BYA PERSON WITH INTERESTS IN RELEVANT SECURITIES REPRESENTING 1% OR MORERule 8.3 of the Takeover Code (the “Code”) 1.KEY...",
      url: "https://finance.yahoo.com/news/invesco-ltd-form-8-3-115600670.html",
      urlToImage:
        "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
      publishedAt: "2022-08-31T11:56:00Z",
      content:
        "With a total net worth of $137 billion, Indian-born Gautam Adanis extraordinary wealth gain in 2022 has far surpassed that of any other billionaire, many of whom have seen their fortunes drop this ye… [+507 chars]",
    },
    {
      source: {
        id: null,
        name: "Yanko Design",
      },
      author: "Srishti Mitra",
      title:
        "Top 10 electric bikes that’ll get every automotive lover’s heart thumping",
      description:
        "Top 10 electric bikes that’ll get every automotive lover’s heart thumpingBikes get the heart of almost every Automotive lover thumping! Make them electric – and you have the best of both worlds! They’re powerful, super-fast,...",
      url: "https://www.yankodesign.com/2022/08/31/top-10-electric-bikes-thatll-get-every-automotive-lovers-heart-thumping/",
      urlToImage:
        "https://www.yankodesign.com/images/design_news/2022/08/top-10-electric-bikes-thatll-get-every-automotive-lovers-heart-thumping/top_10_automotive_designs_yanko_design_hero.jpg",
      publishedAt: "2022-08-31T11:40:15Z",
      content:
        "Bikes get the heart of almost every Automotive lover thumping! Make them electric and you have the best of both worlds! Theyre powerful, super-fast, menacing to look at, and not to mention a boon to … [+6285 chars]",
    },
    {
      source: {
        id: null,
        name: "Dagospia.com",
      },
      author: null,
      title:
        "CONTINUA IL GIOCO DELL’OPA TRA MUSK E TWITTER – LE NUOVE SCOTTANTI DICHIARAZIONI DELL’EX CAPO DELLA SICUREZZA DEL SOCIAL, PEITER ZATKO, CHE HA DENUNCIATO “GRAVI CARENZE” SUL FRONTE PRIVACY, POTREBBERO FAR DECADERE IL CONTRATTO DA 44 MILIARDI PER LA VENDITA DELLA PIATTAFORMA. ELON MUSK, NON VEDE L'ORA DI SFILARSI: HA CAPITO CHE SONO SOLDI BUTTATI VISTO CHE TWITTER NON FA UTILI – MA DAL SOCIAL RINTIGNANO: \"BISOGNA CHIUDERE AL PREZZO E ALLE CONDIZIONI GIÀ CONCORDATE” - VIDEO",
      description:
        "Flavio Pompetti per “il Messaggero”   peiter zatko 9 Non si arrende Elon Musk, il cui obiettivo primo ora è rescindere l'accordo con il quale nel mese di aprile si era impegnato ad acquistare il colosso Twitter per 44 miliardi di dollari.   Ieri il patron di …",
      url: "https://www.dagospia.com/rubrica-4/business/continua-gioco-dell-rsquo-opa-musk-twitter-nbsp-ndash-nuove-322742.htm",
      urlToImage:
        "https://cdn-static.dagospia.com/img/patch/04-2022/elon-musk-twitter-1646686.jpeg",
      publishedAt: "2022-08-31T11:40:00Z",
      content:
        "Flavio Pompetti per “il Messaggero”\r\npeiter zatko 9\r\nNon si arrende Elon Musk, il cui obiettivo primo ora è rescindere l'accordo con il quale nel mese di aprile si era impegnato ad acquistare il colo… [+2645 chars]",
    },
    {
      source: {
        id: null,
        name: "Barron's",
      },
      author: null,
      title: "Goldman Heralds Another Return-to-Office Push",
      description:
        "Wealthier consumers are still in “pretty good shape,” Elon Musk cites another reason to cancel Twitter deal, Republican politicians ramp up ESG battle, and other news to start your day.",
      url: "https://www.barrons.com/articles/things-to-know-today-51661945545",
      urlToImage: "https://images.barrons.com/im-613934/social",
      publishedAt: "2022-08-31T11:37:26Z",
      content:
        "David Solomons side gig as a DJ demonstrates the \r\n Goldman Sachs\r\n CEO believes staff should enjoy themselves after hours. But the Wall Street supremo is also clear about where they should be during… [+10187 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Anmar Frangoul",
      title:
        "Toyota pledges up to $5.6 billion for EV battery production, ramps up investment in North Carolina plant",
      description:
        "North Carolina facility will manufacture batteries for both plug-in hybrid and battery electric vehicles.",
      url: "https://www.cnbc.com/2022/08/31/toyota-says-it-will-invest-extra-2point5-billion-in-north-carolina-plant.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107111778-1661932874011-gettyimages-1231052731-JAPAN_CARS.jpeg?v=1661933019&w=1920&h=1080",
      publishedAt: "2022-08-31T11:36:02Z",
      content:
        "Automotive giant Toyota said Wednesday it would invest an extra $2.5 billion in a U.S. facility that will manufacture batteries for both hybrid electric and battery electric vehicles.\r\nToyota Battery… [+2370 chars]",
    },
    {
      source: {
        id: null,
        name: "Telegraph.co.uk",
      },
      author: "Will Bolton",
      title:
        "Woman killed in Range Rover crash 'had to be identified by her fingerprints'",
      description:
        "Yagmur Ozden, 33, died after the car hit a Tesla charging point at up to 100mph and flipped onto the tracks at Park Royal station",
      url: "https://www.telegraph.co.uk/news/2022/08/31/woman-killed-range-rover-crash-had-identified-fingerprints/",
      urlToImage: "https://img.youtube.com/vi/GtOWgavD2uw/maxresdefault.jpg",
      publishedAt: "2022-08-31T11:31:43Z",
      content:
        'Detective Constable Ben Simpson from the Metropolitan Polices serious collisions investigation unit said the "full circumstances" of the incident were being investigated.  \r\nSpeaking after the crash,… [+618 chars]',
    },
    {
      source: {
        id: null,
        name: "Seeking Alpha",
      },
      author: "Keith Williams",
      title: "Volkswagen And Getting Electrified",
      description:
        "Volkswagen is negotiating complexity in transition from ICE to BEV, but success is by no means assured. See why I'm on hold for the stock.",
      url: "https://seekingalpha.com/article/4538100-volkswagen-stock-getting-electrified",
      urlToImage:
        "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1313844769/image_1313844769.jpg?io=getty-c-w750",
      publishedAt: "2022-08-31T11:30:32Z",
      content:
        "Tramino\r\nIf you want a clear picture of where the world is heading for ICE (Internal Combustion Engine) car makers, look no further than the announcement by Volkswagen, one of the world’s biggest ICE… [+12954 chars]",
    },
    {
      source: {
        id: null,
        name: "Www.bnr.nl",
      },
      author: "ANP",
      title: "Toyota investeert miljarden in accu's voor elektrische auto's",
      description:
        "De Japanse autofabrikant Toyota gaat miljarden investeren in de productie van accu's voor elektrische voertuigen in Japan en de Verenigde Staten. Met de verkoop van batterijen wil de grootste autoproducent ter wereld inspringen op de toenemende vraag naar sch…",
      url: "https://www.bnr.nl/nieuws/mobiliteit/10486749/toyota-investeert-miljarden-in-accu-s-voor-elektrische-auto-s",
      urlToImage:
        "https://bnr-external-prod.imgix.net/92XEHDVTYl3CqXCJKXyb2i9RHAY.jpg?q=45",
      publishedAt: "2022-08-31T11:30:00Z",
      content:
        "Toyota trekt tot 730 miljard yen, zo'n 5,3 miljard euro, uit voor de productie van accu's waarmee het bedrijf tussen 2024 en 2026 denkt te kunnen beginnen. \"Deze investering is bedoeld om Toyota in s… [+1575 chars]",
    },
    {
      source: {
        id: null,
        name: "Automotive News",
      },
      author: null,
      title: "First Shift: Online auction company sues for access",
      description:
        "• Lawsuit: Software access denied\n\n     • Tesla challenges Louisiana\n\n     • Output shrinks at Toyota",
      url: "https://www.autonews.com/video/first-shift/first-shift-online-auction-company-sues-access",
      urlToImage: "https://s3-prod.autonews.com/s3fs-public/BUTTON_27.png",
      publishedAt: "2022-08-31T11:21:04Z",
      content:
        "1155 Gratiot AvenueDetroit, Michigan48207-2997\r\n(877) 812-1584\r\nEmail us\r\nAutomotive NewsISSN 0005-1551 (print)ISSN 1557-7686 (online)\r\nFixed Ops JournalISSN 2576-1064 (print)ISSN 2576-1072 (online)",
    },
    {
      source: {
        id: null,
        name: "Techbang.com",
      },
      author: "janus",
      title:
        "納智捷聯手鴻海突襲預告，電動車Model C 即將開放預購、預估售價百萬元以下",
      description:
        "鴻海去年10月亮相過的電動休旅車Model C，今天與納智捷同步在臉書上發出了訊息，將在明天上午九點開放預購。鴻海去年10月亮相過的電動休旅車Model C，今天與納智捷同步在臉書上發出了訊息，將在明天上午九點開放預購，也釋出了預購的倒數計時網站。業界預估Model C的售價將有機會到百萬元以下，以電動休旅車來說這個價位將很有吸引力。\n\n鴻海的官方FB，也引用了納智捷所PO出的短片，可以看到在影片中展示一台汽車的輪廓。臉書上寫著：台灣車壇將有大事發生，你準備好了嗎？⁣⁣⁣⁣今晚就來聽一首好聽的歌，叫做「納」年夏天…",
      url: "https://www.techbang.com/posts/99567-nazhijie-and-hon-hai-raided-the-preview-the-electric-vehicle",
      urlToImage:
        "https://cdn2.techbang.com/system/excerpt_images/99567/original/3209cacd191507b3ef0036001b3acc6b.jpg?1661944905",
      publishedAt: "2022-08-31T11:21:00Z",
      content:
        "10Model CModel C\r\nFBPO\r\nModel CModel C 5+2 4,640mm 2,860mm 0~1003.8700km\r\nMIH20222023C\r\nTeslaMIH\r\nB2CB2B MIH 1,200",
    },
    {
      source: {
        id: null,
        name: "New Statesman",
      },
      author: "Kate Aronoff",
      title: "Towards a unified theory of Biden’s climate deal",
      description:
        "Passed into law on 16 August, the Inflation Reduction Act is the largest piece of climate spending in American history, totalling nearly $370 billion in investments for carbon emissions reductions, en",
      url: "https://www.newstatesman.com/ideas/2022/08/unified-theory-biden-inflation-reduction-act-climate",
      urlToImage:
        "https://www.newstatesman.com/wp-content/uploads/sites/2/2022/08/00001108-scaled.jpg",
      publishedAt: "2022-08-31T11:16:24Z",
      content:
        "Passed into law on 16 August, the Inflation Reduction Act is the largest piece of climate spending in American history, totalling nearly $370 billion in investments for carbon emissions reductions, e… [+12805 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Pete Wilkins, Contributor, \n Pete Wilkins, Contributor\n https://www.forbes.com/sites/peterandrewwilkins/",
      title:
        "Why The University Of Illinois Is A Top College For Entrepreneurs",
      description:
        "The University of Illinois is one of the hottest destinations for the next generation of successful founders",
      url: "https://www.forbes.com/sites/peterandrewwilkins/2022/08/31/why-the-university-of-illinois-is-a-top-college-for-entrepreneurs/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/630bdd1367f96735a868ecd2/0x0.jpg?format=jpg&crop=2191,1233,x0,y177,safe&width=1200",
      publishedAt: "2022-08-31T11:12:07Z",
      content:
        "The University of Illinois is one of the hottest destinations for the next generation of successful ... [+] founders\r\nPhoto: Amy Koester\r\nThe University of Illinois has an incredible history of produ… [+12603 chars]",
    },
    {
      source: {
        id: null,
        name: "International Business Times",
      },
      author: "Keith Calayag",
      title:
        "This College Dropout Just Became Third-Richest Person In The World",
      description:
        "Gautam Adani, who has a net worth of $143 billion, is now richer than LVMH chairman Bernard Arnault.",
      url: "https://www.ibtimes.com/this-college-dropout-just-became-third-richest-person-world-3607706",
      urlToImage:
        "https://d.ibtimes.com/en/full/3808767/indian-billionaire-gautam-adani-addresses-delegates-during-bengal-global-business-summit-kolkata.jpg",
      publishedAt: "2022-08-31T11:11:01Z",
      content:
        "KEY POINTS\r\n<ul><li>Indian billionaire Gautam Adani overtook luxury goods magnate Bernard Arnault to become the world's third-richest person</li><li>He founded Adani Group, whose interests span infra… [+3101 chars]",
    },
    {
      source: {
        id: null,
        name: "Dodbuzz.com",
      },
      author: "Alexis Alden",
      title: "Car Accident Palos Verdes {August 2022} How It Happened!",
      description:
        "You can discover more about this accident after reading this comprehensive article on Car Accident Palos Verdes. Did you hear about the recent car accident in Los Angeles? There are a lot of car accidents that happen daily, and the cases are increasing day by…",
      url: "https://www.dodbuzz.com/car-accident-palos-verdes/",
      urlToImage:
        "https://www.dodbuzz.com/wp-content/uploads/2021/05/Dodbuzz-Logo-Header.png",
      publishedAt: "2022-08-31T11:09:50Z",
      content:
        "You can discover more about this accident after reading this comprehensive article on Car Accident Palos Verdes.\r\nDid you hear about the recent car accident in Los Angeles? There are a lot of car acc… [+2604 chars]",
    },
    {
      source: {
        id: null,
        name: "Dou.ua",
      },
      author: "Vira Kachmar",
      title:
        "ІТ Арена 2022: Тех-конференція відбудеться попри війну, 30 вересня — 1 жовтня, Львів",
      description:
        "Дата: 30 вересня — 1 жовтняМісце: Львів\n\n30 вересня-1 жовтня у Львові відбудеться IT Arena — одна з наймасштабніших тех-конференцій Східної Європи. Подія пройде офлайн та об’єднає тех-експертів для обговорення найважливіших подій 2022 року в світі технологій …",
      url: "https://dou.ua/calendar/44795/",
      urlToImage:
        "https://s.dou.ua/CACHE/images/img/announces/tech-event-it-arena-1200x630/0ca47d5783492230765c3b01e189c009.png",
      publishedAt: "2022-08-31T11:09:15Z",
      content:
        "30 -1   IT Arena    - .   - 2022     .\r\n , - ,   .  ,     , IT Arena 2022   ,  ,   . \r\n IT Arena ,   ,     :\r\n IT Arena  , ,   . IT Arena -,   ,   .\r\n IT Arena 2022 , Baykar  - , , CEO Dragonfly, , A… [+348 chars]",
    },
    {
      source: {
        id: null,
        name: "Siècle Digital",
      },
      author: "Valentin Blanchot",
      title:
        "Au Japon, Tesla inaugure une nouvelle centrale électrique virtuelle",
      description:
        "Sur l’île de Miyako-jima au Japon, Tesla a installé 300 de ses batteries Powerwall afin de créer un réseau électrique virtuel.",
      url: "https://siecledigital.fr/2022/08/31/au-japon-tesla-inaugure-une-nouvelle-centrale-electrique-virtuelle/",
      urlToImage:
        "https://siecledigital.fr/wp-content/uploads/2022/08/tesla-batteries-japon.jpg",
      publishedAt: "2022-08-31T11:07:39Z",
      content:
        "Tesla compte déjà plusieurs installations de ce type à travers le monde.\r\nSur l’île de Miyako-jima au Japon, Tesla a installé 300 de ses batteries Powerwall afin de créer un réseau électrique virtuel… [+1797 chars]",
    },
    {
      source: {
        id: null,
        name: "Motley Fool",
      },
      author: "newsfeedback@fool.com (Neha Chamaria)",
      title:
        "Warren Buffett Is Selling His Favorite Electric Vehicle Stock. Should You?",
      description:
        "Buffett just sold some shares of the world's largest manufacturer of electric and plug-in hybrid vehicles.",
      url: "https://www.fool.com/investing/2022/08/31/warren-buffett-selling-ev-stock-should-you/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/698720/ev-electric-vehicle-charging-station-waiting.jpg",
      publishedAt: "2022-08-31T11:07:00Z",
      content:
        "Electric vehicle (EV) stocks may have been a hot topic over the past year or so, but you'd have barely heard Warren Buffett make a move on EVs. However, the legendary investor has a favorite EV stock… [+4165 chars]",
    },
    {
      source: {
        id: null,
        name: "Ing.dk",
      },
      author: "Bjørn Godske",
      title:
        "Producenter vil gøre det anderledes - men ender med at gøre det samme",
      description:
        "Illustration: Bjørn Godske\n\n“Vi siger farvel til resten af branchen og kører vores egen vej”\n\nSådan cirka lød det, da Polestar præsenterede deres konceptbil kaldet for “precept”.\n\nPointen var, at Polestar ikke længere vil gøre hvad alle andre gør.\n\nDe vil sæl…",
      url: "https://ing.dk/blog/producenter-vil-goere-anderledes-ender-med-at-goere-samme-260259",
      urlToImage:
        "https://ing.dk/sites/ing/files/styles/large/public/illustration/2022/08/8c07a1a2-e800-4d31-a8b1-e65e6f53ccb6.jpg?itok=S3q7wtcx",
      publishedAt: "2022-08-31T11:03:00Z",
      content:
        "Illustration: Bjørn Godske\r\nVi siger farvel til resten af branchen og kører vores egen vej\r\nSådan cirka lød det, da Polestar præsenterede deres konceptbil kaldet for precept.\r\nPointen var, at Polesta… [+2018 chars]",
    },
    {
      source: {
        id: null,
        name: "Interia.pl",
      },
      author: "Krzysztof Mocek",
      title: "Kolejny problem dla producentów - może zabraknąć... szkła",
      description:
        "Trwająca wojna w Ukrainie oraz związane z nią konsekwencje ekonomiczne, w coraz większy stopniu dają się we znaki producentom samochodów. Podczas, gdy ceny ropy i gazu gwałtownie wzrosły, a rynek półprzewodników wciąż zmaga się z olbrzymim niedoborem, zachodn…",
      url: "https://motoryzacja.interia.pl/wiadomosci/producenci/news-kolejny-problem-dla-producentow-moze-zabraknac-szkla,nId,6255571",
      urlToImage: "https://i.iplsc.com/-/000G09BJ2RO6REOA-C429.jpg",
      publishedAt: "2022-08-31T11:02:53Z",
      content:
        "Wedug najnowszego raportu opublikowanego na amach Wall Street Journal, ju niebawem europejscy producenci samochodów mog si boryka z niedoborem szka. Powodem ma by Rosja, która zapowiedziaa ograniczen… [+968 chars]",
    },
  ];  
  return (
    <>
      <div className="container my-3">
        <h1 className="mb-3">News Headlines</h1>
        <div className="row">
            {articles.map((item) => {



              return (
                <div className="col-md-4">
                <Newsitem
                  title={item.title}
                  description={item.description}
                  imgurl="https://thumbs.dreamstime.com/z/d-world-news-background-digital-breaking-studio-report-live-208423108.jpg"
                />
                </div>
              )
             })} 
        </div>
      </div>
    </>
  );
};

export default News;
