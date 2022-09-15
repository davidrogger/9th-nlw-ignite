interface IAdDB {
  id:string;
  name:string;
  weekDays:string;
  useVoiceChannel:boolean;
  yearsPlaying:string;
  hourStart:number;
  hourEnd:number;
}

interface IAdConverted {
  id:string;
  name:string;
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
