import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { SelectGame } from './SelectGame';

export default function AdModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/75 inset-0 fixed" />
      
      <Dialog.Content
      className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px]"
      >
        <Dialog.Title>Publique um anúncio</Dialog.Title>
        <form>
          <div>
            <label> Qual o game? </label>
            <SelectGame />
          </div>

          <div>
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <input name="name" id="name" placeholder="Como te chamam dentro do game?" />
          </div>

          <div>
            <label htmlFor='yearsPLaying'>Joga há quantos anos?</label>
            <input name="yearsPLaying" id="yearsPLaying" type="number" placeholder='Tudo bem ser ZERO' />
          </div>

          <div>
            <label htmlFor="discord">Qual seu discord?</label>
            <input name="discord" id="discord" type="text" />
          </div>

          <div>
            <div>
              <label htmlFor="weekDays">Quando costuma jogar?</label>
            </div>

            <div>
              <label htmlFor="hoursStart">Qual horário do dia?</label>
              <div>
                <input name="hourStart" id="hourStart" type="time" placeholder='De' />
                <input name="hourEnd" id="hourEnd" type="time" placeholder='Até' />
              </div>
            </div>
          </div>

          <div>
            <input id="voiceChat" type="checkbox" />
            <label htmlFor="voiceChat">Costumo me conectar ao chat de voz</label>
          </div>

          <footer>
            <button>
              Cancelar
            </button>

            <button className="flex">
              <GameController />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
