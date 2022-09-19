export interface WeekFormat {
  title: string,
}

const week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

export const weekData = week.map((day, index) => ({
  id: `$ID_{day}${index}`,
  title: day,
  initials: day.slice(0, 1),
}))