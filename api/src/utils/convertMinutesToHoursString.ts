// 1100 => "18:30"
export default function convertMinutesToHoursString(minutesAmount:number) {
  const hour = `0${Math.floor(minutesAmount/60)}`.slice(-2);
  const min = `0${minutesAmount % 60}`.slice(-2);
  // ou usando o String(hour).padStart(2, '0') adiciona o 0 a esquerda caso hour seja menor que 2 chacteres

  return `${hour}:${min}`;
}