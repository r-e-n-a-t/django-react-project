
import { createStandaloneToast } from '@chakra-ui/toast'

const { toast } = createStandaloneToast()
toast({
  title: 'An error occurred.',
  description: 'Unable to create user account.',
  status: 'error',
  duration: 9000,
  isClosable: true,
})