import { useContext, useState } from "react";
/* import { sendForm } from "../../../services/formApi"; */
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "../Cables/style";
import { Button, Buttons } from "../UserDataForm/style";
import { Fill, TermModal, TextBox } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { Container } from "../../Container";
import { sendForm } from "../../../services/formApi";
import { GlobalContext } from "../../../App";
import termos from "../../../assets/images/termos.png";

export default function Send({
  values,
  setDisplay,
  userData,
  extra,
  extraGames = false,
}) {
  const { setInitialValues } = useContext(GlobalContext);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  async function handleSubmit() {
    if (!checked) {
      return toast.warning(
        "Você deve aceitar os termos para enviar seu formulário!"
      );
    }
    try {
      setSending(true);
      toast.warn("Enviando formulário!");
      await sendForm(values, userData, extra, extraGames ? extraGames : false);
      toast.success("Formulário enviado com sucesso!");
      setSending(false);
      setTimeout(() => {
        toast.warn("Você sera redirecionado à página inicial!");
        setTimeout(() => {
          navigate("/");
          setInitialValues();
        }, 6000);
      }, 1000);
    } catch (error) {
      setSending(false);
      toast.error("Houve um erro ao enviar o formulário!");
      console.log(error);
    }
  }

  return (
    <Container height={"1000px"} hdScreen={"800px"} mobileScreen={"700px"}>
      <div>
        <Checkbox style={{ margin: "160px 0" }} send>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked((prev) => !prev)}
          />
          <h1>
            Confirmo o envio do formulário e aceito as
            <bold
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => setOpenModal(true)}
            >
              {" "}
              condições dos termos
            </bold>
          </h1>
        </Checkbox>
      </div>
      <Buttons>
        <Button
          disabled={sending}
          onClick={() => setDisplay((prev) => prev - 1)}
        >
          Voltar
        </Button>
        <Button disabled={sending} onClick={handleSubmit}>
          Enviar
        </Button>
      </Buttons>
      <Fill openModal={openModal} />
      <TermModal openModal={openModal}>
        <AiFillCloseCircle onClick={() => setOpenModal(false)} />
        <img src={termos} alt="Icone termos" />
        <TextBox>
          <h4>
            <bold>Termos e Políticas de Vendas - Compra Joy</bold>
          </h4>
          <br />
          <br />
          <hr />
          <br />
          <p>
            <bold>Produtos Aceitos</bold>
            <br />
            <br />
            <h1>
              O Compra Joy tem o prazer de aceitar uma ampla variedade de
              produtos relacionados ao mercado de games eletrônicos, incluindo:
              <br />
              <br />
              <ol>
                <li>
                  Jogos em mídia física (não compramos digitais), como
                  cartuchos, DVDs e Blu-Rays.
                </li>
                <li>
                  Consoles, tanto das gerações antigas quanto das mais recentes.
                </li>
                <li>
                  Diversos acessórios, como joysticks, câmeras, headsets e
                  outros.
                </li>
              </ol>
            </h1>
            <br />
            <hr />
            <br />
            <bold>
              Condição dos Produtos, Estado de Conservação e Itens Inclusos
            </bold>
            <br />
            <br />
            <h1>
              Compramos apenas produtos em perfeitas condições de funcionamento
              e conservação. Preferencialmente eles devem acompanhar todos os
              itens originais de fábrica, como embalagem, encartes e manuais.
              <br />
              <br />
              Produtos com avarias ou defeitos serão analisados pela nossa
              equipe. Aceitaremos apenas itens que atendam às condições mínimas
              para comercialização, seguindo nosso padrão de qualidade.
              <br />
              <br />
              Não serão aceitos jogos em mídia física (CDs, DVDs ou Blu-Rays)
              com riscos que causem travamentos, cartuchos que não funcionem,
              cópias piratas ou obtidas ilegalmente, violando as leis vigentes
              no Brasil ou no exterior.
              <br />
              <br />
              Não garantimos a compra de produtos que não atendam aos requisitos
              de qualidade necessários ou que não sejam adequados ao nosso
              modelo de negócio.
            </h1>
            <br />
            <hr />
            <br />
            <bold>Solicitação de Avaliação de Produtos Usados</bold>
            <br />
            <br />
            <h1>
              Os clientes interessados em vender produtos usados devem acessar o
              site{" "}
              <a
                href="https://comprajoy.com.br"
                target={"_blank"}
                rel="noreferrer"
              >
                www.comprajoy.com.br
              </a>{" "}
              e preencher os campos da categoria escolhida com todos os dados
              necessários para uma avaliação. Após isso, entraremos em contato
              através do Whatsapp informado na finalização do formulário.
            </h1>
            <br />
            <hr />
            <br />
            <bold>Avaliação e precificação</bold>
            <br />
            <br />
            <h1>
              O Compra Joy tem um processo transparente e justo para precificar
              os produtos que adquirimos. Nossa equipe especializada leva em
              consideração diversos fatores para determinar os valores
              oferecidos aos clientes. A avaliação e precificação dos produtos
              são baseadas nos seguintes critérios:
              <br />
              <br />
              <ul>
                <li>
                  <bold>Tipo de Produto: </bold> Levamos em conta o tipo de
                  produto que está sendo vendido, como jogos em mídia física,
                  consoles ou acessórios. Cada categoria possui suas
                  características e demanda de mercado, o que influencia na
                  precificação.
                  <br />
                  <br />
                </li>
                <li>
                  <bold>Ano de Fabricação:</bold> A idade do produto é um fator
                  importante para determinar seu valor. Itens mais antigos podem
                  ser considerados itens de coleção e geralmente são mais
                  valorizados.
                  <br />
                  <br />
                </li>
                <li>
                  <bold>Funcionamento e Estado de Conservação:</bold> A condição
                  geral do produto é levada em consideração. Itens em perfeito
                  funcionamento e com poucos sinais de uso serão mais bem
                  avaliados, pois são mais procurados. No entanto, produtos com
                  avarias ou defeitos podem ser aceitos, desde que haja uma
                  análise de nossa equipe para determinar seu valor justo.
                  <br />
                  <br />
                </li>
                <li>
                  <bold>Itens Originais Inclusos:</bold> Acompanhar todos os
                  itens originais de fábrica, como embalagem, encartes e
                  manuais, pode aumentar o valor do produto. Itens completos e
                  em bom estado são mais atrativos.
                  <br />
                  <br />
                </li>
                <li>
                  <bold>Demanda de Mercado:</bold> A oferta e a procura também
                  influenciam na precificação. Consideramos a demanda atual no
                  mercado de games eletrônicos para determinar um bom valor, que
                  seja competitivo e atraente para nossos clientes.
                  <br />
                  <br />
                </li>
              </ul>
            </h1>
            Nosso objetivo é oferecer valores justos, tanto para quem vende
            quanto para quem compra. Levamos em conta todos os aspectos
            mencionados acima afim de garantir uma avaliação precisa e
            equilibrada. Queremos a satisfação de nossos clientes e buscamos
            proporcionar uma experiência positiva em todas as etapas da
            negociação.
            <br />
            <br />
            Estaremos sempre disponíveis para esclarecer dúvidas, fornecer
            detalhes adicionais e negociar valores, se necessário. Nossa
            intenção é estabelecer uma relação de confiança e transparência com
            nossos clientes, proporcionando um ambiente seguro e justo para a
            compra e venda de produtos.
            <br />
            <br />
            As informações enviadas pelo cliente serão analisadas por nossa
            equipe especializada, que entrará em contato via Whatsapp,
            apresentando uma proposta comercial com os valores de compra. O
            prazo para o envio da proposta comercial pode variar de acordo com a
            quantidade de produtos cotados e a demanda diária de solicitações.
            <br />
            <br />
            Cabe ao cliente aceitar ou recusar a proposta comercial enviada pela
            equipe do Compra Joy.
            <br />
            <br />
            <hr />
            <br />
            <bold>Formas de Envio</bold>
            <br />
            <br />
            Caso o cliente aceite a proposta comercial deverá trazer os produtos
            em horário comercial no seguinte endereço:
            <br />
            <br />
            <bold>Av. Independência, 3840, Loja 10</bold>
            <br />
            <br />
            <bold>Jardim Flórida</bold>
            <br />
            <br />
            <bold>Ribeirão Preto - São Paulo</bold>
            <br />
            <br />
            <bold>CEP: 14026-160</bold>
            <br />
            <br />
            Para moradores da cidade de Ribeirão Preto e região disponibilizamos
            um serviço de retirada dos produtos por motoboy, com custos
            adicionais a serem calculados.
            <br />
            <br />
            Caso o cliente seja de uma cidade diferente da sede do Compra Joy,
            será responsável pelos custos de envio dos produtos negociados na
            proposta comercial. O envio poderá ser realizado pelos Correios (via
            PAC ou SEDEX).
            <br />
            <br />
            <hr />
            <br />
            <bold>Análise e Conferência</bold>
            <br />
            <br />
            Após o recebimento dos produtos em nossa loja física, nossa equipe
            especializada realizará a análise e conferência para verificar se
            estão de acordo com as informações fornecidas pelo cliente durante a
            avaliação.
            <br />
            <br />O prazo para análise e testes será de até 7 dias úteis após o
            recebimento dos produtos em nossa loja.
            <br />
            <br /> Em caso de divergência entre as informações fornecidas pelo
            cliente e o estado real de conservação, quantidade das mercadorias e
            itens inclusos, o Compra Joy reserva-se o direito de invalidar a
            proposta comercial, permitindo a renegociação dos valores.
            <br />
            <br />
            Caso o cliente não aceite a renegociação dos valores, as mercadorias
            serão reenviadas para o endereço do remetente, sendo os custos do
            frete de reenvio de responsabilidade do próprio cliente.
            <br />
            <br />
            <hr />
            <br />
            <bold>Pagamento</bold>
            <br />
            <br />
            Após a análise de nossa equipe e a constatação de que as mercadorias
            estão de acordo com as informações fornecidas pelo cliente e
            consolidadas na proposta comercial, o pagamento será realizado.
            <br />
            <br />
            Poderá ser efetuado por transferência bancária, PIX, ou crédito na
            loja, conforme escolha do cliente. Ao optar pelo pagamento via
            transferência bancária ou PIX, os valores serão depositados
            diretamente na conta fornecida pelo cliente, informada por meio do
            Whatsapp.
            <br />
            <br /> É importante ressaltar que todas as transações financeiras
            são realizadas de forma <bold>segura</bold> e seguindo as normas de
            proteção ao consumidor.
            <br />
            <br />
            <hr />
            <br />
            <bold>Casos Não Previstos</bold>
            <br />
            <br />
            No caso de ocorrências não previstas nesses termos, solicitamos que
            o cliente entre em contato pelo número (16) 99219-8595 ou pelo
            e-mail contato@mundojoygames.com.br, fornecendo o máximo de detalhes
            possível. Estamos disponíveis para analisar e solucionar a questão
            de forma rápida, eficiente e satisfatória. Nosso objetivo é garantir
            a satisfação de nossos clientes, e estamos sempre à disposição para
            atendê-los.
            <br />
            <br />
            Contamos com sua confiança e esperamos fazer negócios com você em
            breve!
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />© 2023, Mundo Joy Games - CNPJ: 29.817.072/0001-08 © Todos os
            direitos reservados.
          </p>
        </TextBox>
      </TermModal>
    </Container>
  );
}
