const дата = document.getElementById('дата');
const время = document.getElementById('время');

if (дата) {
  flatpickr(дата, {
    dateFormat: 'd.m.Y',
    minDate: 'today',
    locale: 'ru'
  });
}

if (время) {
  flatpickr(время, {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
    time_24hr: true
  });
}
