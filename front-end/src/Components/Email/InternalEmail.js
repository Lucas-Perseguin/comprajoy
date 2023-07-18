import { Html } from "@react-email/html";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";

export default function InternalEmail(props) {
  const { values, userData, extra, extraGames } = props;

  return (
    <Html lang="pt-BR">
      <Section>
        <Text style={{ fontWeight: "700" }}>Dados do cliente</Text>
        <Text>
          Nome: {userData.name}
          <br />
          Sobrenome: {userData.surname}
          <br />
          Email: {userData.email}
          <br />
          Número para contato: {userData.cellphone}
          <br />
          Cidade: {userData.city}
          <br />
        </Text>
      </Section>

      {values.console && (
        <Section>
          <Text style={{ fontWeight: "700" }}>
            Informações sobre o videogame
          </Text>
          <Text>
            Console: {values.console}
            <br />
            Vem na caixa: {values.box ? "Sim" : "Não"}
            <br />
            Estado de conservação: {values.state}
            <br />
            Acompanha cabo de energia: {values.energy ? "Sim" : "Não"}
            <br />
            Acompanha HDMI: {values.hdmi ? "Sim" : "Não"}
            <br />
            Outras Informações: {values.other}
            <br />
            Controles:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Quantidade: {values.controls.amount},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;São originais:{" "}
            {values.controls.original ? "Sim" : "Não"},
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Acompanha cabo de Carregamento:{" "}
            {values.controls.cable ? "Sim" : "Não"}
            <br />
          </Text>
        </Section>
      )}

      {values.games[0].name && (
        <Section>
          <Text style={{ fontWeight: "700" }}>
            Jogos que acompanham o console
          </Text>
          {values.games.map((game, index, array) => {
            return (
              <Text>
                Nome: {game.name}
                <br />
                Estado de conservação: {game.state}
                <br />
                Vem na caixa original: {game.box ? "Sim" : "Não"}
                <br />
                {index !== array.length - 1 && <br />}
              </Text>
            );
          })}
          <br />
        </Section>
      )}

      {values.accessories[0].name && (
        <Section>
          <Text style={{ fontWeight: "700" }}>Acessórios</Text>
          {values.accessories.map((accessory) => {
            return (
              <Text>
                Nome: {accessory.name}
                <br />
                Estado de Conservação: {accessory.state}
                <br />
                Vem na caixa orignial: {accessory.box ? "Sim" : "Não"}
                <br />
                Marca: {accessory.brand}
                <br />
                <br />
              </Text>
            );
          })}
          <br />
        </Section>
      )}

      {extraGames && (
        <Section>
          <Text style={{ fontWeight: "700" }}>Jogos de outros consoles</Text>
          {extraGames.games.map((game) => {
            return (
              <Text>
                Nome: {game.name}
                <br />
                Estado de conservação: {game.state}
                <br />
                Vem na caixa original: {game.box ? "Sim" : "Não"}
                <br />
                Console: {game.console}
                <br />
                <br />
              </Text>
            );
          })}
          <br />
        </Section>
      )}

      {(extra.toSell ||
        extra.console ||
        extra.accessories ||
        extra.controls.amount !== 0) && (
        <Section>
          <Text style={{ fontWeight: "700" }}>Outros itens</Text>
          {extra.toSell && (
            <Text>
              Item: {extra.toSell}
              <br />
              Estado de conservação: {extra.state}
              <br />
            </Text>
          )}
          {!extra.toSell && (
            <Text>
              Console: {extra.console}
              <br />
              Estado de conservação: {extra.state}
              <br />
              Controles:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Quantidade: {extra.controls.amount}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;São originais:{" "}
              {extra.controls.originals ? "Sim" : "Não"}
              <br />
              Acessórios: {extra.accessories}
              <br />
            </Text>
          )}
          <br />
        </Section>
      )}

      {extra.other && (
        <Section>
          <Text style={{ fontWeight: "700" }}>Informações Adicionais:</Text>
          <Text>{extra.other}</Text>
          <br />
          <br />
        </Section>
      )}
    </Html>
  );
}
