import Header from "../Header/Header";
import { Container, Content } from "./style";
import { Footer } from "../Footer/Footer";

export default function LayoutDefault({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}
