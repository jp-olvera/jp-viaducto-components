export const MONTHS = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
};

export const DAYS = {
  en: ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'],
  es: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
};

export const getAllDaysInMonth = (month:number, year:number):number => (32 - new Date(year, month, 32).getDate());

export const getStarterDay = (year:number, month:number):number => new Date(year, month, 1).getDay();

export const fillDays = (data: number) => {
  const arr: number[] = [];
  for (let i = 0; i < data; i++) {
    arr.push(i);
  }
  return arr;
};

export const dateToString = (date:Date | number) : string => {
  const getDate = new Date(date);
  return `${getDate.getFullYear()}-${getDate.getMonth() + 1}-${getDate.getDate()}`;
};
