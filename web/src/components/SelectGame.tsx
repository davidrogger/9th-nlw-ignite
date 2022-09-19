import * as Select from '@radix-ui/react-select';
import axios from 'axios';
import { CaretDown } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { IGamesData } from '../interfaces/IGamesData';

export function SelectGame() {
  const [games, setGames] = useState<IGamesData[]>([]);

  useEffect(() => {
    async function getGames() {
      const apiGames = await axios.get('http://localhost:3333/games');
      setGames(apiGames.data);
    }

    getGames();

  }, []);

  return (
    <Select.Root>
              <Select.Trigger
                className="bg-zinc-900 py-3 px-4 rounded text-sm flex items-center justify-between text-zinc-500"
              >
                <Select.Value
                  placeholder="Selecione o game que deseja jogar"
                />

                <Select.Icon>
                  <CaretDown
                  className="text-zinc-500"
                    size={24}
                  />
                </Select.Icon>
              </Select.Trigger>
              <Select.Content
                className="bg-zinc-900 py-3 px-4 rounded text-sm flex overflow-hidden"
              >
                { games.map(({ title }, index) => {
                  return (
                    <Select.Item
                      key={`ID_${title}${index}`}
                      value={ title }
                      className="hover:bg-zinc-600 flex"
                    >
                  <Select.ItemText>{ title }</Select.ItemText>
                </Select.Item>
                  );
                }) }

              </Select.Content>
            </Select.Root>
  );
}