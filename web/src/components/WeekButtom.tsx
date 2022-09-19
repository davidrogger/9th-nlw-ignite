import { weekData } from "../utils/weekFormat";

export default function WeekButtom() {
  return (
    <div className="grid grid-cols-4 gap-2">
                { weekData.map(({ id, title, initials }) => {
                  return (
                    <button
                    key={ id }
                    className="w-8 h-8 rounded bg-zinc-900"
                    title={ title }
                    >{ initials }</button>
                    );
                  }) }
                  </div>
  );
}
