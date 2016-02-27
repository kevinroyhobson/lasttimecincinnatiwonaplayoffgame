$(function() {
   var dateCincinnatiWon = moment('1991-01-06');
   var timeSinceCincinnatiWon = moment.duration(moment().diff(dateCincinnatiWon));
   var daysSinceCincinnatiWon = Math.floor(timeSinceCincinnatiWon.asDays());
   var displayStr = daysSinceCincinnatiWon.toLocaleString('en-US') + " days ago";
   
   // optimism
   if (daysSinceCincinnatiWon === 1) {
       displayStr = displayStr.replace('days', 'day');
   }
   
   $('.days-since').html(displayStr);
});