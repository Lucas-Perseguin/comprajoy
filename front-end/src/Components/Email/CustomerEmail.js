import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Container } from "@react-email/container";
import { Link } from "@react-email/link";

export default function CustomerEmail() {
  return (
    <Html lang="pt-BR" style={{ backgroundColor: "lightgrey" }}>
      <Container
        style={{
          margin: "10px",
          backgroundColor: "white",
          fontSize: "16px",
          boxSizing: "border-box",
          fontWeight: "400",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Text style={{ fontSize: "26px", fontWeight: "700" }}>
          E aí, beleza?
        </Text>
        <Text style={{ fontWeight: "700" }}>
          Ficamos contentes pelo interesse em vender seu game com a gente!
          Recebemos sua solicitação de cotação e já estamos providenciando uma
          avaliação, ok?
        </Text>
        <Text style={{ fontWeight: "700", fontSize: "20px" }}>
          Vender para a Joy é só vantagem!
        </Text>
        <ul style={{ textAlign: "start" }}>
          <li>
            <Text>
              Total segurança em tratar com uma empresa honesta e especialista
              que está no mercado de games há mais de 20 anos.
            </Text>
          </li>
          <li>
            <Text>
              O pagamento é feito <b>na hora</b> por transferência bancaria,
              dinheiro ou pix. A negociação é 100% segura.
            </Text>
          </li>
          <li>
            <Text>
              Fazemos uma avaliação justa, rápida e transparente. Só a gente te
              oferece um sistema de troca <b>exclusivo</b>, o Troca Joy, que
              garante um ótimo desconto na compra de produtos novos da loja
              física ou no site.
            </Text>
          </li>
        </ul>
        <Text style={{ fontWeight: "700" }}>Um pouco sobre a avaliação:</Text>
        <Text>
          A Mundo Joy Games é a loja de videogames e jogos seminovos mais bem
          avaliada do interior de São Paulo. Mas não para por aí não viu...
          Somos também uma das maiores do segmento no Brasil. O motivo desse
          mérito vem principalmente da nossa política de transparência que para
          a gente é fundamental e nos incentiva a continuar essa fantástica
          jornada de te guiar em novas aventuras pelo mundo dos games.
        </Text>
        <Text>
          No site da Joy você encontra os jogos mais baratos do mercado porque
          nosso negócio é preço. No entanto, para manter esse padrão, precisamos
          também comprar barato.
        </Text>
        <Text>
          Sabemos que você consegue uma graninha melhor vendendo seu game
          diretamente para algum amigo ou consumidor final. Por esse motivo
          precisamos deixar claro: vamos comprar o seu game seminovo para{" "}
          <b>REVENDER</b>.
        </Text>
        <Text style={{ fontWeight: "700" }}>Você precisa saber que: </Text>
        <ol
          style={{
            listStylePosition: "outside",
            listStyleType: "decimal",
            textAlign: "start",
          }}
        >
          <li>
            <Text>
              Não compramos jogos paralelos ou com defeito (riscos, manchas
              etc.) 🙁;
            </Text>
          </li>
          <li>
            <Text>Não compramos consoles com defeito.</Text>
          </li>
          <li>
            <Text>
              No caso de cotação de consoles, vamos sempre considerar os
              acessórios que o acompanham por padrão de fábrica: um controle e
              seus cabos de conexão. Caso esteja com itens faltando, por favor,
              nos avise, pois, teremos que revisar sua cotação.
            </Text>
          </li>
          <li>
            <Text>
              Compramos <b>controles</b> com defeito, mas somente após uma
              avaliação de sua integridade pela nossa assistência técnica.
            </Text>
          </li>
          <li>
            <Text>
              Caso o produto chegue aqui na loja em condições diferentes das
              informadas no formulário iremos entrar em contato e tentar outra
              negociação com base em uma nova avaliação. Caso não concorde e
              opte pela devolução do game, <b>o frete é por sua conta</b>. Para
              evitar desconfortos sempre prezamos por informações transparentes
              e esperamos que você tenha a mesma sensibilidade. Ao preencher a
              ficha do Compra Joy seja honesto, objetivo e sensato.
            </Text>
          </li>
        </ol>
        <Text style={{ fontWeight: "700" }}>É de outra Região?</Text>
        <Text>
          Caso o cliente seja de uma cidade diferente da sede do Compra Joy,
          será responsável pelos custos de envio dos produtos negociados na
          proposta comercial. O envio poderá ser realizado pelos Correios (via
          PAC ou SEDEX) para o seguinte endereço:
        </Text>
        <Text style={{ fontWeight: "700" }}>
          Av. Independência, 3840, Loja 10
        </Text>
        <Text style={{ fontWeight: "700" }}>Jardim Flórida</Text>
        <Text style={{ fontWeight: "700" }}>Ribeirão Preto - São Paulo</Text>
        <Text style={{ fontWeight: "700" }}>CEP: 14026-160</Text>
        <Text style={{ fontWeight: "700" }}>Tá curioso sobre a Joy?</Text>
        <Text>
          Então saiba que tem muita gente fechando negócio viu? Você pode
          conferir nossas avaliações no{" "}
          <Link href="https://g.page/r/CaxmRKnb7hj1EBE/review">Google</Link> e
          também nas redes sociais:{" "}
          <Link href="https://www.instagram.com/mundojoygames/">Instagram</Link>{" "}
          <Link href="https://www.facebook.com/mundojoygames/?locale=pt_BR">
            Facebook
          </Link>
        </Text>
        <Text style={{ fontWeight: "700" }}>
          Agora é só aguardar, jajá sua proposta chega aí!
        </Text>
        <Text>
          Vamos te responder pelo WhatsApp informado no formulário. Enquanto
          isso dá uma explorada no site da{" "}
          <Link href="https://www.mundojoygames.com.br/">Mundo Joy Games</Link>.
          Lá você vai encontrar os melhores lançamentos em games e consoles com
          excelentes condições e formas de pagamento.
        </Text>
        <Text>
          Em breve a gente volta com o resultado da sua avaliação, combinado?
        </Text>
        <Text>Até breve! 😉</Text>
        <Text>Atenciosamente,</Text>
        <Text style={{ fontWeight: "700" }}>
          Pedro Rafael - Atendimento Compras on-line
        </Text>
        <Text>
          <Link href="https://comprajoy.com.br">Compra Joy</Link>
        </Text>
      </Container>
    </Html>
  );
}
