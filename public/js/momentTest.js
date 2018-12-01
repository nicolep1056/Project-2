let date = '2018-11-28'; 
let dateAsMoment = moment(date, 'YYYY-MM-DD');  // specified parsed date
let currentDate = moment();  // 14 days before now, as a Moment
console.log(currentDate)
if (dateAsMoment.isBefore(currentDate)) {
  console.log('before');
} else {
  console.log('after');
}