import {
  View,
  Row,
  ContentLogin,
  ContentBackground,
  Content,
  ButtonFx,
  Para,
  InputField,
  Button,
  Form,
  LoginText,
  ContentHeader,
} from "../../styles/Styled";
import Image from "next/image";
import { FaUser, FaHeart, FaLock } from "react-icons/fa";
export default function LoginView() {
  return (
    <View>
      <Row>
        <ContentLogin>
          <ContentHeader>
            <Image
              src="/images/logo.png"
              alt="logo"
              className="cursor-pointer"
              width={200}
              height={120}
            />

            <LoginText>Login</LoginText>
          </ContentHeader>

          <Content>
            <Form>
              <h1
                style={{
                  fontSize: "40px",
                }}
              >
                Login
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur ad</p>

              <InputField>
                <FaUser color="#ccc" />
                <input placeholder="Username" />
              </InputField>
              <InputField>
                <FaLock color="#ccc" />
                <input placeholder="password" />
              </InputField>
              <Para>Forget username and password?</Para>
              <Button>Login</Button>
              <ButtonFx>New to NASA express ? sign up</ButtonFx>
            </Form>
          </Content>
        </ContentLogin>
        <ContentBackground></ContentBackground>
      </Row>
    </View>
  );
}
