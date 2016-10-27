angular.module('gostilnaassignment').factory('dataService',function($rootScope) {

    var dataService = {
        si:{
            welcome:'Dobrodosli',
            about:'O nas',
            content:'Gostišče v avtokampu v Strunjanu vam nudi vse vrste hrane za zaključene družbe in večerje v dvoje. Prav tako gostimo manjše prireditve ter ostale dogodke.',
            reservation:'REZERVIRAJTE',
            dobrote:'dobrote',
            kuhinje:'KUHINJE',
            meals:'Nase jedi',
            secondcontent:'Pri nas vam postrežemo z ribjimi specialitetami, jedi z žara, dnevno sveže pripravljene malice, kosila in večerje.',
            seemenu:'OGLEJTE SI MENU',
            author:'Strunjan 23, 6320 Portorož, Slovenija',
            number:'Št'

        },
        en:{
            welcome:'Welcome',
            about:'About us',
            content:'Restaurant at the campsite in Strunjan offers all kinds of food for private parties and dinners for two. It also hosts smaller, and other events.',
            reservation:'BOOK NOW',
            dobrote:'kitchen',
            kuhinje:'DELICACIES',
            meals:'Our cuisine',
            secondcontent:'We serve fish specialties, grilled dishes, prepared fresh daily snacks, lunches and dinners.',
            seemenu:'SEE THE MENU',
            author:'Strunjan 23, 6320 Portoroz, Slovenia',
            number:'Num'

        },
        it:{
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
            number:'Num'

        }
    };

    $rootScope.lang = dataService.si;

    return dataService;
});
