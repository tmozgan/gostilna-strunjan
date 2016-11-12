angular.module('gostilnaassignment').factory('dataService',function($rootScope) {

    var dataService = {
        si:{
            /* home */
            welcome:'Dobrodošli',
            about:'O nas',
            content:'Gostišče v avtokampu v Strunjanu vam nudi vse vrste hrane za zaključene družbe in večerje v dvoje. Prav tako gostimo manjše prireditve ter ostale dogodke.',
            reservation:'REZERVIRAJTE',
            dobrote:'Dobrote',
            kuhinje:'KUHINJE',
            meals:'Naše jedi',
            secondcontent:'Pri nas vam postrežemo z ribjimi specialitetami, jedi z žara, dnevno sveže pripravljene malice, kosila in večerje.',
            seemenu:'OGLEJTE SI MENU',
            author:'Strunjan 23, 6320 Portorož, Slovenija',
            number:'Št',
            /* menu */
            menu: 'Meni',
            ponudba: 'NAŠA PONUDBA',
            /* rezervacija */
            naredite: 'Naredite',
            rezervacija: 'REZERVACIJO',
            kontaktirajte: 'KONTAKTIRAJTE NAS',
            contactcontent: "Lahko izpolnite obrazec ter tako naredite e-rezervacijo v polje about navedite st. oseb dan prihoda, ter uro prihoda. Sprejemamo rezervacije za kosila in vecerje. Za potrditev rezervacije nas poklicite na (027) 8338 145.",
            follow: 'SLEDITE NAM',
            /* kontakt */
            kontakt: 'Kontakt',
            najdete: 'KJE NAS NAJDETE',
            telefon: 'REZERVACIJA PREKO TELEFONA',
            kontaktirajtenas: 'Kontaktirajte nas na tel. 051348890',
            spremljajte: 'SPREMLJAJTE NAS NA',
            /* sidebar */
            domov: 'DOMOV',
            menu1: 'MENU',
            rezervacija1: 'REZERVACIJA',
            kontakt1: 'KONTAKT'

        },
        en:{
            /* home */
            welcome:'Welcome',
            about:'About us',
            content:'Restaurant at the campsite in Strunjan offers all kinds of food for private parties and dinners for two. It also hosts smaller, and other events.',
            reservation:'BOOK NOW',
            dobrote:'Kitchen',
            kuhinje:'DELICACIES',
            meals:'Our cuisine',
            secondcontent:'We serve fish specialties, grilled dishes, prepared fresh daily snacks, lunches and dinners.',
            seemenu:'SEE THE MENU',
            author:'Strunjan 23, 6320 Portoroz, Slovenia',
            number:'Num',
            /* menu */
            menu: 'Menu',
            ponudba: 'OUR OFFER',
            /* rezervacija */
            naredite: 'Make a',
            rezervacija: 'RESERVATION',
            kontaktirajte: 'CONTACT US',
            contactcontent: "You can fill out the form, and thus make an e-book in the field indicate about st. Persons arrival date and time of arrival. We accept reservations for lunch and dinner. To confirm booking please call us at (027) 8338 145th",
            follow: 'FOLLOW US',
            /* kontakt */
            kontakt: 'Contact',
            najdete: 'WHERE TO FIND US',
            telefon: 'BOOKING BY PHONE',
            kontaktirajtenas: 'Call us on tel. 051348890',
            spremljajte: 'FOLLOW US ON',
            /* sidebar */
            domov: 'HOME',
            menu1: 'MENU',
            rezervacija1: 'RESERVATION',
            kontakt1: 'CONTACT'

        },
        it:{
            /* home */
            welcome:'Benvenuti',
            about:'Riguardo a noi',
            content:'Ristorante del campeggio in Strugnano offre tutti i tipi di cibo per feste private e cene per due persone. Essa ospita anche eventi più piccoli e altri eventi.',
            reservation:'PRENOTA ORA',
            dobrote:'prelibatezze',
            kuhinje:'DA CUCINA',
            meals:'I nostri piatti',
            secondcontent:'Noi serviamo con specialità di pesce, piatti alla griglia, preparati al momento nasmalice, pranzo e cena.',
            seemenu:'VEDERE IL MENU',
            author:'Strugnano 23, 6320 Portorose, Slovenia',
            number:'Num',
            /* menu */
            menu: 'Menu',
            ponudba: 'NOSTRA OFFERTA',
            /* rezervacija */
            naredite: 'Fare',
            rezervacija: 'PRENOTAZIONE',
            kontaktirajte: 'CONTATTO',
            contactcontent: "È possibile compilare il modulo, e quindi rendere un e-book nel campo indicano su St. Le persone che la data di arrivo e l'ora di arrivo. Si accettano prenotazioni per pranzo e cena. Per confermare la prenotazione si prega di telefonare al (027) 8338 145",
            follow: 'SEGUICI',
            /* kontakt */
            kontakt: 'Contatto',
            najdete: 'DOVE SIAMO',
            telefon: 'PRENOTAZIONE VIA TELEFONO',
            kontaktirajtenas: 'Contatto di tel. 051348890',
            spremljajte: 'SEGUICI SU',
            /* sidebar */
            domov: 'CASA',
            menu1: 'MENU',
            rezervacija1: 'PRENOTA',
            kontakt1: 'CONTATTO'

        }
    };

    $rootScope.lang = dataService.si;

    return dataService;
});
