import {
    CircleAlert, 
    Eye, 
    KeyRound, 
    User
} from "lucide-react-native";

import { 
    FormControl, 
    FormControlError,
    FormControlErrorIcon,
    FormControlErrorText
} from "../../components/ui/form-control"

import {
    Input,
    InputField,
    InputSlot,
    InputIcon
} from "../../components/ui/input"

import { Button, ButtonText } from "../../components/ui/button"
import { VStack } from "../../components/ui/vstack"
import { useState } from "react";

const LoginInput = () => {

  const [isViewPass, setViewPass] = useState(false);

  return (
    <VStack className="w-full gap-3">
      <FormControl className="gap-3 w-full">
        <Input variant="outline">
          <InputSlot className="p-2">
            <InputIcon as={User} />
          </InputSlot>
          <InputField placeholder="Email" />
        </Input>
        <FormControlError>
          <FormControlErrorIcon as={CircleAlert} />
          <FormControlErrorText>{/* Error text */}</FormControlErrorText>
        </FormControlError>
      </FormControl>

      <FormControl className="gap-3 w-full">
        <Input variant="outline">
          <InputSlot className="p-2">
            <InputIcon as={KeyRound} />
          </InputSlot>
          <InputField placeholder="Password" />
          <InputSlot className="p-2">
          
            <InputIcon as={Eye} />
          </InputSlot>
        </Input>
        <FormControlError>
          <FormControlErrorIcon as={CircleAlert} />
          <FormControlErrorText>{/* Error text */}</FormControlErrorText>
        </FormControlError>
      </FormControl>

      <Button>
        <ButtonText>Login</ButtonText>
      </Button>
    </VStack>
  );
}

export default LoginInput