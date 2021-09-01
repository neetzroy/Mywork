
const { Console, clear } = require('console')
const ps=require('prompt-sync')

const prompt=ps()

class Musician
{
    constructor(musName1,musType1,yearsPlaying1,hourlyRate1,interestFact1)
    {
        this.musName= musName1
        this.musType=musType1
        this.yearsPlaying= yearsPlaying1
        this.hourlyRate= hourlyRate1
        this.interestFact=interestFact1
    } 
    displayDetails()
    {
        console.log("SHOWING MUSICIAN DETAILS AND THEIR INTERESTING FACT----> " +" I AM "+this.musName+ "\n"+" I AM A "
            + this.musType+" & "+" INTERESTING FACT ABOUT ME IS : "+ this.interestFact)
    }
 
}

        var musName1=prompt("Enter Musician name: ").toLowerCase()
        while (musName1.length>30 || musName1.length<3 )
        {
        musName1 = prompt('Enter a name between 3 and 30 character ')
        }

        var types= ['guitarist','bassist','percussionist','flautist']
        var i=0
        do
        {  
                    switch(musType1)
                        {
                            case types[0]:
                            case types[1]:
                            case types[2]:
                            case types[3]:
                                var musType1=prompt("Enter Musician Type: ").toLowerCase()
                                break
                            default:
                                musType1=prompt("Enter a valid musician type from the list: guitarist/bassist/percussionist/flautist---> ")
                        }
        }
        while (types.indexOf(musType1) === -1);
        

        var yearsPlaying1=prompt("Enter Musician year playing: ")
        while( (yearsPlaying1<1) || isNaN(yearsPlaying1) || yearsPlaying1.length>4)
        {
            yearsPlaying1=prompt("Enter a non negative year: ")
        }

        var hourlyRate1=prompt("Enter Musician rate: ")
        while((hourlyRate1<=50) || isNaN(hourlyRate1))
        {
            hourlyRate1=prompt("Enter rate greater than 50: ")
        }
        var interestFact1=prompt("Enter Interesting Fact: ").toLowerCase()
      

      
class Guitarist extends Musician{
   constructor()
   {   
       super()  
   }
  
   displayDetails()
   {
       if(musType1.toLowerCase()=='guitarist')
       {
       var musician= 'Musician Name: '+musName1 + "\n"+'Year of Playing: '+yearsPlaying1+'Hourly Rate: '+hourlyRate1
       console.log("RECORDING GUITARIST DETAILS :----------> "+ musician)
       }
   }
  
}  
class Bassist extends Musician{
    constructor()
    {   
        super()
    }
    displayDetails()
    {
        if(musType1.toLowerCase()=='bassist')
        {
        var musician= 'Musician Name: '+musName1 + "\n"+'Year of Playing: '+yearsPlaying1+'Hourly Rate: '+hourlyRate1
        console.log("REOCORDING BASSIST DETAILS:---------->  "+ musician)
        }
    }

}
class Percussionist extends Musician{
    constructor()
    {   
        super()
    }
    displayDetails()
    {
        if(musType1.toLowerCase()=='percussionist')
        {
        var musician= 'Musician Name: '+musName1 + "\n"+'Year of Playing: '+yearsPlaying1+'Hourly Rate: '+hourlyRate1
        console.log("RECORDING PERCUSSIONIST DETAILS :----------> "+ musician)
        }
    }

}
    class Flautist extends Musician{
        constructor()
        {   
            super()
        }
        displayDetails()
        {
            if(musType1.toLowerCase()=='flautist')
            {
            var musician= 'Musician Name: '+musName1 + "\n"+' Year of Playing: '+yearsPlaying1+' Hourly Rate: '+hourlyRate1
            console.log("RECORDING FLAUTIST DETAILS----------> : "+ musician)
            }
        }
}    

class Troupe{
    constructor(troupeName,noOfInstrument,genreTroupe,durationTroupe,hourlyRateTroupe)
    {
        this.troupeName= troupeName
        this.noOfInstrument=noOfInstrument
        this.genreTroupe=genreTroupe
        this.durationTroupe=durationTroupe
        this.hourlyRateTroupe=hourlyRateTroupe
    }
    addMusician()
    {       
      
            var musDetails= "Musician name: "+ musName1+"\n"
            +"Musician Playing Year: "+yearsPlaying1
            +"\n"+"Hourly Rate: "+hourlyRate1

            console.log('ADDED MUSICIAN DETAILS:---------->'+'\n'+ musDetails)
          
    }
    
    showMusicianSummary()
    {
        
            console.log("SHOWING MUSICIAN DETAILS AND THEIR INTERESTING FACT----------> " +" I AM "+musName1+
            "\n"+" I AM A "+ musType1+" & "+" INTERESTING FACT ABOUT ME IS : "+ interestFact1)
    }
    showtroupeSummary()
    {  
        var genre = ['jass','rock','pop']
        //for (const each_value of genre)
        //{
            if((this.genreTroupe==genre[0] ||this.genreTroupe==genre[1] ||this.genreTroupe==genre[2]) )
            {
            if(this.durationTroupe<3 || this.durationTroupe >0.5)
            {
                var troupeSummary= "Troupe Name is:"+this.troupeName+
                "\n"+"No of instruments included: "+this.noOfInstrument+
                "\n"+"Genre Playing: "+this.genreTroupe+
                "\n"+"Duration of Play :"+this.durationTroupe+
                "\n"+"Hourly rate of troupe: "+this.hourlyRateTroupe
    
                console.log("TROUPE DETAILS:----------> "+'\n'+troupeSummary)
            }  
            
       }
       else 
       {
   
       throw new Error(' enter genre from list or duration time between 0.5 & 3') 
       }
    }
    costOfTroupe()
    {
        let cost= parseFloat(this.durationTroupe*this.hourlyRateTroupe)
        console.log("COST OF TROUPE :----------> "+cost)
    }
    readMusListFile()
    {
        const fs = require('fs')
        const r = fs.readFileSync('MusicianList.txt','utf8') 
        const list = r.split('\r\n')

        console.log("POPULATING TROUPE LIST FROM READ TEXT FILE---------->")
        console.log(list)

    return list
    }
    writeMusListFile()
    {
        const fs= require('fs')

        let data= "TROUPE DETAILED SUMMARY----------> "+
        '\n'+"Troupe Name is:"+this.troupeName+
        "\n"+"No of instruments included: "+this.noOfInstrument+
        "\n"+"Genre Playing: "+this.genreTroupe+
        "\n"+"Duration of Play :"+this.durationTroupe+
        "\n"+"Hourly rate of troupe: "+this.hourlyRateTroupe

        fs.writeFileSync('MusicianListNew.txt',data)
    }
}

let guitar1=new Guitarist()
guitar1.displayDetails()

let bass1=new Bassist()
bass1.displayDetails()

let percuss1=new Percussionist()
percuss1.displayDetails()

let flaut1=new Flautist()
flaut1.displayDetails()


let mus1= new Musician('John','Guitarist',2020,50,'I love my guitar strings')
mus1.displayDetails()

let mus2= new Musician('Kim','Bassist',2010,60,'I love my bass rhythm')
mus2.displayDetails()

let mus3= new Musician('Sara','Percussionist',1989,70,'I love my percussion harmony')
mus3.displayDetails()

let mus4= new Musician('Liam','Bassist',1950,80,'I love my old bass')
mus4.displayDetails()

let mus5= new Musician('Clare','Flautist',2015,90,'I love my flaute symphony')
mus5.displayDetails()


let troupe= new Troupe()
troupe.addMusician()
troupe.showMusicianSummary()

troupe.readMusListFile()
troupe.writeMusListFile()

let troupe1= new Troupe('Best troupe',10,'bass',-1,100)
troupe1.showtroupeSummary()
troupe1.costOfTroupe()
troupe1.writeMusListFile()

let troupe2=new Troupe('Top star troupe',6,'rock',3,50)
troupe2.showtroupeSummary()
troupe2.costOfTroupe()
troupe2.writeMusListFile()

let troupe3=new Troupe(list[0],8,'pop',1,80)
troupe3.showtroupeSummary()
troupe3.costOfTroupe()
troupe3.writeMusListFile()

