interface IAdDB {
  id?:string;
  gameId: string,
  name:string;
  discord?: string;
  weekDays:string;
  useVoiceChannel:boolean;
  yearsPlaying:string;
  hourStart:number;
  hourEnd:number;
}

interface IAdConverted {
  id?:string;
  gameId: string;
  name:string;
  discord?: string;
  weekDays:string[];
  useVoiceChannel:boolean;
  yearsPlaying:string;
  hourStart:string;
  hourEnd:string;
}

export default IAdDB;
export {
  IAdConverted
};
