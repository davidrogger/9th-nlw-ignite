import { Check, GameController } from 'phosphor-react';
import { SelectGame } from './SelectGame';
import InputModel from './InputModel';
import WeekButtom from './WeekButtom';

import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from 'react';

export default function AdModal() {
  const [voiceChannel, setVoiceChannel] = useState(false);
  const [weekList, setWeekList] = useState<string[]>([]);

  function handleCreateAd(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData);
    console.log(weekList)
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/75 inset-0 fixed" />
      
      <Dialog.Content
      className="fixed bg-[#2A2634] py-8 px-10 text-white rounded top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px]"
      >
        <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>

        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={handleCreateAd}
        >
          <div className="flex flex-col gap-2">
            <label className="font-semibold"> Qual o game? </label>

            <SelectGame />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <InputModel name="name" id="name" placeholder="Como te chamam dentro do game?" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor='yearsPLaying'>Joga há quantos anos?</label>
              <InputModel name="yearsPLaying" id="yearsPLaying" type="number" placeholder='Tudo bem ser ZERO' />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual seu discord?</label>
              <InputModel name="discord" id="discord" type="text" placeholder="Usuario#0000" />              
            </div>
          </div>



          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">Quando costuma jogar?</label>

                <WeekButtom 
                  weekList={ weekList }
                  setWeekList={ setWeekList }
                />

            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hoursStart">Qual horário do dia?</label>
              <div className="grid grid-cols-2 gap-1">
                <InputModel name="hourStart" id="hourStart" type="time" placeholder='De' />
                <InputModel name="hourEnd" id="hourEnd" type="time" placeholder='Até' />
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2 text-sm items-center">
            <Checkbox.Root
              checked={voiceChannel}
              onCheckedChange={() => setVoiceChannel(!voiceChannel)}
              id="voiceChat"
              className="bg-zinc-900 w-6 h-6 flex items-center justify-center rounded"
            >
              <Checkbox.Indicator>
                <Check 
                  className="w-4 h4 text-emerald-400"
                />
              </Checkbox.Indicator>
            </Checkbox.Root>
              <label htmlFor="voiceChat">Costumo me conectar ao chat de voz</label>
          </div>

          <footer className="mt 4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
            >
              Cancelar
            </Dialog.Close>

            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center justify-center gap-3 hover:bg-violet-600"
            >
              <GameController className="w-6 h-6" />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
