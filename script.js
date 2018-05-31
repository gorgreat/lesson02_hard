let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    daysName = document.getElementsByTagName('p'),
    date = new Date(), //берем тукущую дату
    day = date.getDay() - 1, //определем номер дня недели
    curentDay; 

curentDay = week[day]; 

for (let i = 0; i < week.length; i++) {
  daysName[i].innerHTML = week[i]; 
  daysName[5].style.fontWeight = 'bold';
  daysName[6].style.fontWeight = 'bold';
  if (curentDay === week[i]) { //если номер дня недели совпадает с текущим true
    daysName[i].style.color = 'red';
    daysName[i].style.fontStyle = 'italic';
  }
}