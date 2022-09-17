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
              <Select.Trigger>
                <Select.Value
                  placeholder="Selecione o game que deseja jogar"
                />

                <Select.Icon>
                  <CaretDown
                    size={24}
                  />
                </Select.Icon>
              </Select.Trigger>
              <Select.Content>
                { games.map(({ title }) => {
                  return (
                    <Select.Item
                  value={ title }
                >
                  <Select.ItemText>{ title }</Select.ItemText>
                </Select.Item>
                  );
                }) }

              </Select.Content>
            </Select.Root>
  );
}