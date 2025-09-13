import {
    CircleAlert, 
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

import { VStack } from "../../components/ui/vstack"

const LoginInput = () => {
  return (
    <VStack>
      <FormControl className="gap-3 w-full">
        <Input variant="outline">
          <InputSlot className="p-4">
            <InputIcon as={User} />
          </InputSlot>
          <InputField placeholder="Email" />
        </Input>
        <FormControlError>
            <FormControlErrorIcon as={CircleAlert}/>
            <FormControlErrorText>
                {/* Error text */}
            </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <FormControl className="gap-3 w-full">
        <Input variant="outline">
          <InputSlot className="p-4">
            <InputIcon as={KeyRound} />
          </InputSlot>
          <InputField placeholder="Password" />
        </Input>
      </FormControl>
    </VStack>
  );
}

export default LoginInput