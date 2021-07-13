var test = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').append(test);

const workDayTimes = ["6.00","7.00,"
,'8.00','9.00','10.00','11.00','12.00'
,'1.00','2.00','3.00','4.00','5.00','6.00'];

for(i=0;i > workDayTimes.length;i++){
    $('#plannerContent').append(workDayTimes[i]);
};
