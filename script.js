var time = moment().format('MMMM Do YYYY, h:mm:ss a');

$('#currentDay').append(time);

const workDayTimes = ["6.00", "7.00,"
    , '8.00', '9.00', '10.00', '11.00', '12.00'
    , '1.00', '2.00', '3.00', '4.00', '5.00', ];

for (i = 0; i < workDayTimes.length; i++) {
    addDiv();
    $('.container').children().eq(i).append('<div class="row col-md-3 d-flex justify-content-center bg-light ">')
    $('.container').children().eq(i).children().eq(0).append(workDayTimes[i])
    $('.container').children().eq(i).append('<div class="row col-md-6 d-flex justify-content-center bg-light">')
    $('.container').children().eq(i).children().eq(1).append('<textarea></textarea>')
    $('.container').children().eq(i).append('<div class="row col-md-3 d-flex justify-content-center bg-light">')
    $('.container').children().eq(i).children().eq(2).append('<button>Save</button>')
   
};


function addDiv() {
    $('.container').append('<div class="row col-12 d-flex justify-content-center m-2"></div>');
}

console.log($('.container').children().eq(1).children().eq(0))


function colorCode(){

    for(i=0;i<workDayTimes.length;i++){

        var thisHour = moment().format('h');
        console.log(thisHour); 
        console.log(thisHour==workDayTimes[i]);       
        if(thisHour > workDayTimes[i]){
            $('.container').children().eq(i).children().eq(1).children().css('background-color','grey')

        }

        else if(thisHour == workDayTimes[i]){
            $('.container').children().eq(i).children().eq(1).children().css('background-color','red')
            
        }

        else if(thisHour < workDayTimes[i]){
            $('.container').children().eq(i).children().eq(1).children().css('background-color','green')

        }

        
        

    }


}

colorCode();

