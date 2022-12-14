import { View, Image, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { GAMES } from '../../utils/games';
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />

      <Heading 
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList 
        data={ GAMES }
        keyExtractor={game => game.id}
        renderItem= {({ item:game }) => (
          <GameCard 
            data={ game }
          />
        )}
        showsHorizontalScrollIndicator={ false }
        horizontal
        contentContainerStyle={ styles.contentList }
      />
    </View>
  );
}