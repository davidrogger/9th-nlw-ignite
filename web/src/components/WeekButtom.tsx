import { weekData } from "../utils/weekFormat";
import * as ToogleGroup from '@radix-ui/react-toggle-group';
import { useState } from "react";

export interface Props {
  weekList: string[];
  setWeekList:React.Dispatch<React.SetStateAction<string[]>>;
}

export default function WeekButtom({ weekList, setWeekList }: Props) {

  return (
    <ToogleGroup.Root
      type="multiple"
      className="flex gap-2 h-full items-center flex-wrap justify-center"
      onValueChange={(days) => setWeekList(days)}
    >
      { weekData.map(({ id, title, initials }, index) => {
        return (
          <ToogleGroup.Item
            key={ id }
            className={`w-8 h-8 rounded  ${weekList.includes(index.toString()) ? 'bg-violet-500' : 'bg-zinc-900'}`}
            title={ title }
            value={ `${index}` }
            >
              { initials }
          </ToogleGroup.Item>
          );
        }) }
    </ToogleGroup.Root>
  );
}
