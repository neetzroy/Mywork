
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
        var dispData='\n\n'+"SHOWING MUSICIAN DETAILS AND THEIR INTERESTING FACT----> " +" I AM "+this.musName+ "\n"+" I AM A "
            + this.musType+" & "+" INTERESTING FACT ABOUT ME IS : "+ this.interestFact
            console.log(dispData)
            return dispData
    }
 
}

class Guitarist extends Musician{
    constructor()
    {   
        super()  
    }
   
    displayDetails()
    {
        if(myMus[0]=='guitarist')
        {
        var musician= 'Musician Name: '+myMus[0] + "\n"+'Year of Playing: '+myMus[2]+'Hourly Rate: '+myMus[3]
        console.log('\n'+"RECORDING GUITARIST DETAILS :----------> "+ musician)
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
 
         if(myMus[0]=='bassist')
         {
             var musician= 'Musician Name: '+myMus[0] + "\n"+'Year of Playing: '+myMus[2]+'Hourly Rate: '+myMus[3]
         console.log('\n'+"REOCORDING BASSIST DETAILS:---------->  "+ musician)
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
         if(myMus[0]=='percussionist')
         {
             var musician= 'Musician Name: '+myMus[0] + "\n"+'Year of Playing: '+myMus[2]+'Hourly Rate: '+myMus[3]
         console.log('\n'+"RECORDING PERCUSSIONIST DETAILS :----------> "+ musician)
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
             if(myMus[0]=='flautist')
             {
                 var musician= 'Musician Name: '+myMus[0] + "\n"+'Year of Playing: '+myMus[2]+'Hourly Rate: '+myMus[3]
             console.log('\n'+"RECORDING FLAUTIST DETAILS----------> : "+ musician)
             }
         }
 }    
class Troupe{
    
    constructor(troupeName,noOfInstrument,genreTroupe,durationTroupe,hourlyRateTroupe)
    {
        this.hourlyValue=''
        this.troupeName= troupeName
        this.noOfInstrument=noOfInstrument
        this.genreTroupe=genreTroupe
        this.durationTroupe=durationTroupe
        this.hourlyRateTroupe=hourlyRateTroupe
    }
    addMusician()
    {         
            var musDetails= "Musician name: "+ myMus[0]+"\n"
            +"Musician Playing Year: "+myMus[2]
            +"\n"+"Hourly Rate: "+myMus[3]

            console.log('\n'+'ADDED MUSICIAN DETAILS:---------->'+'\n'+ musDetails)
            return musDetails
          
    }
    
    showMusicianSummary()
    {

        
            console.log('\n'+"SHOWING MUSICIAN DETAILS AND THEIR INTERESTING FACT----------> " +" I AM "+myMus[0]+
            "\n"+" I AM A "+ myMus[1]+" & "+" INTERESTING FACT ABOUT ME IS : "+myMus[4])
    }
    setGenre(Troups)
    {
        var genre = ['jass','rock','pop']
        do
        {  
                    switch(Troups)
                        {
                            case genre[0]:
                            case genre[1]:
                            case genre[2]:
                            case genre[3]:
                                var Troups=prompt("Enter the Genre Type from the list: Jass/Rock/Pop---> : ").toLowerCase()
                                break
                            default:
                                Troups=prompt("Enter a valid genre type from the list: Jass/Rock/Pop---> ").toLowerCase()
                        }
        }
        while (genre.indexOf(Troups) === -1);

        return Troups 
    }
    setDuration(Durations)
    {
        var Durations=prompt("Enter a valid duration time between 0.5 & 3 ")
        while( (Durations>3) || isNaN(Durations) || (Durations<0.5))
        {
            Durations=prompt("Enter a valid duration time between 0.5 & 3: ")
        }
       
        return Durations
    }
    setHourlyVal(Val)
    {
       this.hourlyValue=Val 
    }
    showtroupeSummary()
    {  
                var troupeSummary= "Troupe Name is:"+this.troupeName+
                "\n"+"No of instruments included: "+this.noOfInstrument+
                "\n"+"Genre Playing: "+troupeVal+
                "\n"+"Duration of Play :"+durationsVal+
                "\n"+"Hourly rate of troupe: "+this.hourlyRateTroupe
    
                console.log('\n'+"TROUPE DETAILS:----------> "+'\n'+troupeSummary)
                return troupeSummary
    }  
    costOfTroupe()
    {
        let cost= parseFloat(this.hourlyValue*this.hourlyRateTroupe)
        console.log('\n'+"COST OF TROUPE :----------> "+cost)
        return cost
    }
    
    readMusListFile()
    {
        const fs = require('fs')
        const r = fs.readFileSync('MusicianList.txt','utf8') 
        const list = r.split('\r\n')

        console.log('\n\n'+"POPULATING TROUPE LIST FROM READ TEXT FILE---------->")
        console.log(list)

    return list
    }
    writeMusListFile()
    {
        const fs= require('fs')

        let data='\n\n'+ "TROUPE DETAILED SUMMARY----------> "+
        '\n'+"Troupe Name is:"+this.troupeName+
        "\n"+"No of instruments included: "+this.noOfInstrument+
        "\n"+"Genre Playing: "+troupeVal+
        "\n"+"Duration of Play :"+durationsVal+
        "\n"+"Hourly rate of troupe: "+this.hourlyRateTroupe

        fs.appendFile("MusicianListNew.txt", data,function(err){
            if(err) throw err;
            });

    }
}


//function for user input prompt
console.log('\n')
function enterMus()
{   

        var musName1=prompt("Enter Musician name: ").toLowerCase()
        while (musName1.length>30 || musName1.length<3 )
        {
        musName1 = prompt('Enter a name between 3 and 30 character ')
        }

        var types= ['guitarist','bassist','percussionist','flautist']
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
                                musType1=prompt("Enter a valid musician type from the list: guitarist/bassist/percussionist/flautist---> ").toLowerCase()
                        }
        }
        while (types.indexOf(musType1) === -1);
        musType1

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

        const musArr=[]
        musArr.push(musName1)   
        musArr.push(musType1)   
        musArr.push(yearsPlaying1) 
        musArr.push(hourlyRate1) 
        musArr.push(interestFact1) 

return musArr

}



/*

let myMus=enterMus()


let guitar1=new Guitarist()
guitar1.displayDetails()

let bass1=new Bassist()
bass1.displayDetails()

let percuss1=new Percussionist()
percuss1.displayDetails()

let flaut1=new Flautist()
flaut1.displayDetails() 


let troupe= new Troupe('Best troupe',10,'',[],100)
troupe.addMusician()
troupe.showMusicianSummary()

let troupeVal=troupe.setGenre()
let durationsVal=troupe.setDuration()
troupe.showtroupeSummary()

troupe.costOfTroupe()
troupe.writeMusListFile()

let mylist=troupe.readMusListFile()
let troupe2= new Troupe(mylist[0],10,troupeVal,durationsVal,200)
troupe2.showtroupeSummary()
troupe2.costOfTroupe()
troupe2.writeMusListFile()
*/
 

module.exports=Musician,Guitarist,Bassist,Flautist,Percussionist,Troupe
//module.exports=enterMus




