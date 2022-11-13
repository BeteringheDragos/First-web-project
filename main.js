
//buttons

const quotesClick=()=>{
    document.querySelector(".quotes-container").style.display="block";
    document.querySelector(".counter-container").style.display = "none";
    document.querySelector(".phf-container").style.display="none";
    document.querySelector(".others-container").style.display="none"
}

const counterClick= ()=>{
document.querySelector(".counter-container").style.display = "block";
document.querySelector(".quotes-container").style.display = "none";
document.querySelector(".phf-container").style.display="none";
document.querySelector(".others-container").style.display="none"
}

const phfClick= ()=>{
    document.querySelector(".counter-container").style.display = "none";
    document.querySelector(".quotes-container").style.display = "none";
    document.querySelector(".phf-container").style.display="block";
    document.querySelector(".others-container").style.display="none"
    }

    const otherClick = () =>{
        document.querySelector(".counter-container").style.display = "none";
    document.querySelector(".quotes-container").style.display = "none";
    document.querySelector(".phf-container").style.display="none";
    document.querySelector(".others-container").style.display="block"
    }

//random quotes

const newQuote=()=>{ 
   const quotes= [
        'Daca fericirea ta depinde de ceva ce face altcineva, atunci chiar ai o problema. (Richard Bach)',
        'Dragostea inseamna sa iubeste ce este greu de iubit. Altfe, nu poate fi numita o virtute. (Gilbert Keith Chesterton)',
        'Televizorul este guma de mestecat pentru ochi. (Frank Lloyd Wright)',
        'Raspandeste lumina, iar intunericul se va risipi de la sine. (Erasmus)',
        'Pot rezuma in doua cuvinte tot ce am invatat despre viata: merge inainte. (Robert Frost)',
        'Cei doi mari inamici ai fericirii sunt durerea si plictiseala. (Arthur Schopenhauer)',
        'Nimic nu valoreaza mai mult decat ziua de azi. (Goethe)',
        'Daca nu-ti convine ceva, schimba acel lucru. Daca nu-l poti schimba, schimba modul in care te gandesti la lucrul respectiv. (Mary Engelbreit)',
        'Nu-mi place de acel om. Trebuie sa-l cunosc mai bine. (Abraham Lincoln)',
        'Nimeni nu poate trai fara prieteni, chiar daca stapaneste toate bunurile lumii. (Aristotel)',
        'Continua sa-ti spui ca lucrurile vor merge rau si ai sanse mari sa devii un profet. (Isaac Singer)',
        'Viitorul. Perioada aceea in care afacerile noastre prospera, prietenii ne sunt prieteni adevarati si fericirea ne este asigurata. (Ambrose Bierce)',
        'Nu poti trai o zi perfecta fara sa faci ceva pentru cineva care nu te va putea rasplati niciodata. (John Wooden)',
        'A avea un prieten este mai vital decat a avea un inger. (Nichita Stanescu)',
        'Fa trei preziceri corecte, consecutiv si vei fi considerat un expert. (Legea lui Murphy)',
        'Intoarce-ti fata catre soare si umbrele vor ramane in urma ta. (proverb din Noua Zeelanda)',
        'Cuvintele sunt precum frunzele. Acolo unde ele abunda, arareori mai gasesti si roade imprejur. (Alexander Pope)',
        'Adevarul nu este proprietatea unei singure persoane, ci comoara intregii omeniri. (Ralph Waldo Emerson)',
        'Imposibilul poate fi impartit oricand in posibilitati. (Autor necunoscut)',
        'Viata este ceva ce faci cand nu te poti duce la culcare. (Fran Lebowitz)',
        'Casnicia nu ne face nici mai buni, nici mai rai, ci doar intensifica la bine si la rau ceea ce deja se gaseste in noi. (Sydney J. Harris)',
        'O fapta buna este precum un clopot care cheama oamenii la inchinare. (proverb danez)',
        'Tot ce e bun: ori e imoral, ori este ilegal, ori ingrasa. (Legea lui Murphy)',
        'A fura idei de la cineva, este plagiat. A le fura de la mai multi, este cercetare. (Legea lui Murphy)',
        'Procrastinarea este arta de a tine pasul cu ziua de ieri. (Don Marquis)',
        'Cand iubesti profund, gasesti intotdeauna ceva nou in persoana iubita. (Blaise Pascal)',
        'Cand iubesti, descoperi in tine o nebanuita bogatie de tandrete si duiosie si nici nu-ti vine sa crezi ca esti in stare de o astfel de dragoste. (A. P.Cehov)',
        'Nu mi-a ridicat nimeni un monument, iar numele meu va fi in curand uitat. Dar am iubit din tot sufletul si din toata inima, iar pentru mine asta a fost intotdeauna de ajuns. (Nicholas Sparks)',
        'In iubire, totul se schimba, toate devin insemnate: dintr-un nimic se naste un colos. (Tudor Arghezi)',
        'Iti dai seama ca te-ai indragostit daca nu mai vrei sa adormi pentru ca realitatea este in sfarsit mai buna decat vizele tale. (Dr. Seuss)',
        'Dragostea este triumful imaginatiei asupra inteligentei. (H.L. Mencken)',
        'Acolo unde este dragoste, este viata. (Mahatma Gandhi)',
        'In iubire ne gustam, ne savuram pe noi insine, ne incantam cu voluptatile tremurului nostru erotic, din acest motiv, iubirea este cu atat mai intensa si mai profunda cu cat distanta de persoana iubita e mai mare. (Emil Cioran)',
        'Oamenii care se iubesc nu insista asupra greselilor celuilalt. (proverb kenyan)',
        'Caut persoanele care sa ma iubeasca nu in ciuda defectelor si vulnerabilitatii mele, ci datorita lor. Caut prietenii care imi sunt alaturi si inoata impreuna cu mine spre adancimi. (Brene Brown)',
        'Atunci cand n-am sa mai pot iubi pe nimeni, am sa mor. Voi, cei care stiti ca meritati dragostea mea, aveti grija sa nu ma ucideti. (Geo Bogza)',
        'Suntem cu totii putin ciudati. Si viata este putin ciudata. Iar cand intalnim pe cineva a carui ciudatenie este compatibila cu a noastra, creem cu el o conexiune si o ciudatenie mutual satisfacatoare pe care o numim dragoste. Dragoste adevarata. (Robert Fulghum)',
        'Indiferent din ce sunt facute sufletele noastre, al meu si al lui sunt la fel. (Emily Bronte)',
        'Iubirea este o forta. Nu este un rezultat; este o cauza. (Anne Morrow Lindbergh)',
        'Te iubesc pentru ca ma iubesti: acesta e un schimb, dar nu e iubire. Te iubesc pentru ca te iubesc, si nimic mai mult; te iubesc numai pentru ca te iubesc: aci incepe iubirea. Iti multumesc din suflet ca te iubesc: acesta e cantecul iubirii. (Liviu Rebreanu)',
        'Dragostea este dorinta de a contribui la fericirea celuilalt. (Max Jacob)',
        'Iubeste-ma cand o merit cel mai putin, caci atunci am cea mai mare nevoie. (proverb chinezesc)',
        'Pentru noi doi, acasa nu este un loc. Este o persoana. Si suntem in sfarsit acasa. (Stephanie Perkins)',
        'Te iubesc fara sa stiu cum sau cand sau de unde. Te iubesc pur si simplu, fara complexitati sau mandrie; te iubesc pentru ca nu stiu alta cale… (Pablo Neruda)',
        'Pentru a intelege iubirea, trebuie in primul rind sa fiti plini de iubire. (Osho)',
        'A iubi inseamna sa te angajezi fara garantie, sa te daruiesti in totalitate in speranta ca iubirea ta va produce iubire in persoana iubita. (Erich Fromm)',
        'Daca as fi avut o floare pentru fiecare moment in care m-am gandit la tine, as putea sa ma plimb prin propria mea gradina pentru totdeauna. (Alfred Tennyson)',
        'Sa fii iubit de cineva iti da putere, iar sa iubesti pe cineva iti da curaj. (Lao Tzu)',
        'Nu e nevoie de motiv pentru a iubi. (Paulo Coelho)',
        'A iubi nu inseamna a ne privi unul pe celalalt, ci a privi amandoi in aceeasi directie. (Antoine de Saint Exupery)',
        'Cand iubesti, descoperi in tine o nebanuita bogatie de tandrete si duiosie si nici nu-ti vine sa crezi ca esti in stare de o astfel de dragoste. (A. P.Cehov)',
        'Cine iubeste cu adevarat nu uita niciodata. (Inigo Lopez de Mendoza)',
        'Este atat de scurta dragostea si este atat de lunga uitarea (Pablo Neruda)',
        'Exista doua feluri de a-ti dovedi dragostea pentru o femeie; casatorindu-te cu ea daca este libera si respectand-o daca nu este. (Alexandre Dumas)',
        'Le-as dovedi oamenilor cat gresesc gandind ca inceteaza sa iubeasca atunci cand imbatranesc, fara sa stie ca imbatranesc numai cand inceteaza sa iubeasca. (Gabriel Garcia Marquez)',
        'Iubirea, ca si lumina, nu ramane ascunsa. (Rabindranath Tagore)',
        'Dragostea este dorinta de a contribui la fericirea celuilalt. (Max Jacob)',
        'Un impuls nebunesc sa ma intind spre el si sa il ating, sa ii mangai fata perfecta doar o data, in intuneric, aproape m-a coplesit. (Stephenie Meyer)',
        'Conditia dragostei este sa caute, nu sa descopere, sa vrea sa stie, fara sa afle, sa fie ritmul unei continue miscari spre un orizont mereu vazut, dar mereu indepartat. Mai mult decat curiozitate: nostalgie. (Ionel Teodoreanu)',
        'Bratele dragostei te cuprind cu tot prezentul tau, cu trecutul si viitorul tau. (Antoine de Saint-Exupery)',
        'Dragostea nu-i un foc pe care sa-l tii in mana. (Marguerite de Navarre)',
        'Atunci cand n-am sa mai pot iubi pe nimeni, am sa mor. Voi, cei care stiti ca meritati dragostea mea, aveti grija sa nu ma ucideti. (Geo Bogza)',
        'Aud vibrand vocea ta in toate zgomotele lumii. (Paul Eluard)',
        'Iubirea este o forta. Nu este un rezultat; este o cauza. (Anne Morrow Lindbergh)',
        'In dragoste, a intelege pe jumatate un cuvant inseamna mai mult decat a-l intelege in intregime. (Joan Maragall)',
        'Este mai bine sa fii iubit chiar daca ai pierdut, decat sa nu fii iubit de loc. (Alfred Tennyson)',
        'Abia acum am inteles ca iubirea nu ar avea nici o competenta fara aceasta minciuna care este un adevar! (Sorin Cerin)',
        'In zadar fugim de ceea ce ne este drag, imaginea sa, mai iute decat marea si vanturile, ne urmareste pana la capatul lumii; si oriunde am merge, ducem cu noi ceea ce ne ajuta sa traim. (Jean Jacques Rousseau)',
        'Dragostea? Universul redus la doua stele… copulative. (Costel Zagan)',
        'Plangerea nr. a unei femei in cadrul unei relatii este: “simt ca nu ma asculta nimeni. Pana si aceasta plangere este gresit interpretata de barbat. (John Gray)',
        'Nu pot cunoaste adevarata dragoste, decat depasind-o. (Mircea Eliade)',
        'Nu mai trage cu ochiul, imi vei sageta inima. (Ionut Caragea)',
        'Iubirea–hoata care ne buzunareste mereu si mereu. (Ionut Caragea)',
        'Te iubesc si te voi iubi toata viata, iar daca si dupa moarte oamenii iubesc, aunci te voi iubi pentru totdeauna. (Dante Alighieri)',
        'Suferinta apare atunci cand asteptam ca ceilalti sa ne iubeasca in felul dorit de noi. (Paulo Coelho)',
    ];

    const random = Math.floor(Math.random() * (quotes.length));
    document.querySelector('.quoteView').innerHTML = quotes[random];
}


// counter click

const onResetClick =  () =>{

  const counter = document.querySelector("h3");
  const value = parseInt(counter.textContent, 10);
  counter.innerText = 0;
};

const onIncrementClick =  () =>{

  const counter = document.querySelector("h3");
  const value = parseInt(counter.textContent, 10);
  counter.innerText = value + 1;
};

const onDecrementClick =  () =>{

  const counter = document.querySelector("h3");
  const value = parseInt(counter.textContent, 10);
  counter.innerText = value - 1;
};

//$%$%$#%#$%#$%#$%#$%#$%#$%

  // Piatra hartie foarfeca

const phfGame = () =>{
    const choices = ["piatra", "hartie", "foarfeca"];
//const computerChoice=document.querySelector('#computer').innerHTML;
//const userChoice=document.querySelector('#user').innerHTML;
//const result=document.querySelector('#winner').innerHTML = quotes[random];



const random1 = Math.floor(Math.random() * choices.length);
const computer=choices[random1]
document.querySelector('#computer').innerHTML=computer;

  const random = Math.floor(Math.random() * choices.length);
  const user = choices[random];
  document.querySelector('#user').innerHTML=user;


  if (user == "piatra" && computer == "hartie") {
    document.querySelector('#winner').innerHTML = "Computer";
  }
   
  if (user == "piatra" && computer == "foarfeca") {
    document.querySelector('#winner').innerHTML ="User";
  }
    
  
  if (user == "hartie" && computer == "piatra") {
    document.querySelector('#winner').innerHTML ="User";
  }
  
  if (user == "hartie" && computer == "foarfeca") {
    document.querySelector('#winner').innerHTML ="Computer";
  }

  if (user == "foarfeca" && computer == "hartie"){
    document.querySelector('#winner').innerHTML ="User";
  }

  if (user == "foarfeca" && computer == "piatra"){
    document.querySelector('#winner').innerHTML ="Computer";
  }


  if (user == computer) {
    document.querySelector('#winner').innerHTML ="Egalitate";
  } 

};






  


