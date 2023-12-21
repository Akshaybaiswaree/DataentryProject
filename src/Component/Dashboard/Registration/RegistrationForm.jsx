
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm, Controller } from "react-hook-form"


const RegistrationForm = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const { handleSubmit, register, control, reset, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const userDataPayload = {...data};

      const config = {
        method: "POST",
        url: `${apiUrl}/user/add_user`,
        data: userDataPayload,
      };

      const AdduserApiResponse = await axios(config);
      console.log("add", AdduserApiResponse);
      reset(); 
      navigate('/user/registration')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box mt="8" mx="auto" width={["90%", "50%"]}>
      <Box color="#DD372D" mb="1rem" fontSize={["1.5rem", "2rem"]} fontWeight="700">
        Add User
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
            name="name"
            id="name"
            type="text"
              {...register("name", { required: 'Name is Requird',message: "invalid input", })}
              placeholder="Enter Name"
              _hover={{ borderColor: "teal.500" }}
            />
            {errors.name && <Box color="red">{errors.name.message}</Box>}
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              id="email"
              type="email"
              name='email'
              {...register("email", { required: "Email is required" })}
              placeholder=".......@gmail.com"
              _hover={{ borderColor: "teal.500" }}
            />
            {errors.email && <Box color="red">{errors.email.message}</Box>}
          </FormControl>
          <FormControl>
            <FormLabel>Mobile Number</FormLabel>
            <Input
              type="number"
              id="mobile"
              name="mobile"
              {...register("mobile", { required: "Mobile number is required" })}
              placeholder="Enter Mobile No"
              _hover={{ borderColor: "teal.500" }}
            />
            {errors.number && <Box color="red">{errors.number.message}</Box>}
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input
              name="address"
              id="address"
              type="text"
              {...register("address", { required: "Address is required" })}
              placeholder="Address"
              _hover={{ borderColor: "teal.500" }}
            />
            {errors.address && <Box color="red">{errors.address.message}</Box>}
          </FormControl>
          <FormControl>
            <FormLabel>Plan</FormLabel>
            <Controller
              control={control}
              name="plan"
              rules={{ required: 'Plan is required' }}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select option"
                  _hover={{ borderColor: "teal.500" }}
                >
                  <option value="option1">Plan 1</option>
                  <option value="option2">Plan 2</option>
                  <option value="option3">Plan 3</option>
                  <option value="option4">Plan 4</option>
                </Select>
              )}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Caller</FormLabel>
            <Controller
              control={control}
              name="caller"
              rules={{ required: 'Caller is required' }}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select option"
                  _hover={{ borderColor: "teal.500" }}
                >
                  <option value="option1">Caller 1</option>
                  <option value="option2">Caller 2</option>
                  <option value="option3">Caller 3</option>
                  <option value="option4">Caller 4</option>
                </Select>
              )}
            />
          </FormControl>
        </Stack>

        
          <Button
            type="submit"
            colorScheme="teal"
            mt="4"
            mx="auto"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{ bgColor: "teal.600" }}
            fontSize="lg"
            fontWeight="bold"
            p={4}
            width="100%" // Set the width to 100% for mobile view
          >
            Save
          </Button>
        
      </form>
    </Box>
  );
};

export default RegistrationForm;

