import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/Listitem";

const gamesListData = [
  {
    Url: "https://www.twitch.tv/directory/game/Red%20Dead%20Redemption%202",
    imageUrl: "/assets/red2.png",
    alt: "Imagem do jogo Red Dead Redemption 2"
  },

  {
    Url:
      "https://www.twitch.tv/directory/game/Marvel's%20Spider-Man%3A%20Miles%20Morales",
    imageUrl: "/assets/spiderm.png",
    alt: "Imagem do jogo God of War"
  },

  {
    Url: "https://www.twitch.tv/directory/game/Grand%20Theft%20Auto%20V",
    imageUrl: "/assets/gta.png",
    alt: "Imagem do jogo GTA V"
  },

  {
    Url:
      "https://www.twitch.tv/directory/game/The%20Legend%20of%20Zelda%3A%20Breath%20of%20the%20Wild",
    imageUrl: "/assets/zelda.png",
    alt: "Imagem do jogo Zelda Breath of the Wild"
  }
];

const channelListData = [
  {
    Url: "https://www.twitch.tv/brksedu",
    imageUrl: "assets/brk.png",
    alt: "Imagem de BRKsEDU"
  },

  {
    Url: "https://www.twitch.tv/alanzoka",
    imageUrl: "/assets/alanzoka.png",
    alt: "Imagem de Alanzoka"
  },

  {
    Url: "https://www.twitch.tv/smzinho",
    imageUrl: "assets/smzinho.png",
    alt: "Imagem de Smzinho"
  }
];

const socialListDate = [
  {
    Url: "https://www.instagram.com/_html.rodrigues/",
    imageUrl: "/assets/instagram.svg",
    alt: "Instagram"
  },

  {
    Url: "https://wa.me/5521971724271",
    imageUrl: "/assets/wpp.svg",
    alt: "whatsapp"
  },

  {
    Url: "https://www.facebook.com/profile.php?id=100084647097154",
    imageUrl: "/assets/fcb.svg",
    alt: "facebook"
  },

  {
    Url: "https://www.linkedin.com/in/luiz-felipe-18742b188",
    imageUrl: "/assets/linkedin.svg",
    alt: "linkedin"
  }
];
export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          tittle=" Conheça-me Através da Minha Criação"
          subtittle="Seja bem-vindo(a) à minha página dedicada ao meu hobby favorito! Aqui, pretendo apresentar um pouco das minhas habilidades de programação, enquanto você tem a oportunidade de conhecer um pouco mais sobre quem eu sou. Espero que essa experiência seja tão prazerosa para você quanto é para mim!"
        />

        <Section
          tittle="Meus jogos"
          subtittle="Os games que mais curto jogar"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem
                Url={item.Url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          tittle="Canais e streamers"
          subtittle="Lista de canais e transmissões que não perco"
          className="channel-list"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem
                Url={item.Url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          tittle="Minhas redes"
          subtittle="Conecte-se comigo agora mesmo"
        >
          {socialListDate.map(function (item) {
            return (
              <ListItem
                Url={item.Url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
