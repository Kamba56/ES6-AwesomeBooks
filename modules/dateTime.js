import { currentDate } from './elements.js';
import { DateTime } from './luxon.js';

const setDate = () => {
  const time = DateTime.now();
  setInterval(() => {
    currentDate.innerHTML = time.toLocaleString(DateTime.DATETIME_MED);
  }, 1000);
};

export default setDate;