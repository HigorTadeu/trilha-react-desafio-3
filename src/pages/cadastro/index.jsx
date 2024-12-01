import { MdEmail, MdLock } from 'react-icons/md';
import { IoMdPerson } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";

import { Column, Title, Wrapper, Container,CriarText, EsqueciText, Row, SubtitleCadastro,TitleCadastro } from "./styles";


const Cadastro = () => {
  const {control, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const onSubmit = () => {

  };

  return (<>
    <Header />
    <Container>
      <Column>
        <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleCadastro>Comece agora grátis</TitleCadastro>
          <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Input leftIcon={<IoMdPerson />} name="nome" placeholder="Nome completo" control={control}/>
            <Input leftIcon={<MdEmail />} name="email" placeholder="E-mail" control={control}/>
            <Input leftIcon={<MdLock />} name="senha" placeholder="Password" control={control}/>
          </form>
        </Wrapper>
      </Column>
    </Container>
</>)
};

export { Cadastro }
