import { Center } from "../components/ui/center";
import { Text } from "../components/ui/text";
import { Image } from "../components/ui/image";
import LoginInput from "../components/custom/LoginInput";

const LoginScreen = () => {
  return (
    <Center className="h-full p-4">
      <Text size="lg" bold>
        Welcome Back!
      </Text>
      <Image
        size="xl"
        source={{
          uri: require("../assets/images/Logo.png"),
        }}
        alt="Ariba Logo"
      />
      <LoginInput/>
    </Center>
  );
};

export default LoginScreen;
