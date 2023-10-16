import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  FormControl,
  Input,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Plus from "../components/images/plus.svg";
import FormMedicamento from "./FromMedicamento";
import Medicamento from "./Medicamento";
import Image from "next/image";

const Medicamentos = ({
  addMedicamento,
  data,
  error,
  deleteMedicamento,
  updateMedicamento,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        display="flex"
        backgroundColor="white"
        p={2}
        rounded="xl"
        gap={3}
      >
        <Image
          src={Plus}
          onClick={onOpen}
          width="40px"
          style={{
            marginTop: "0",
            cursor: "pointer",
          }}
        />
      </Box>

      <Stack marginTop={5}>
        {data.map((medicamento) => (
          <Medicamento
            key={medicamento.id}
            medicamento={medicamento}
            deleteMedicamento={deleteMedicamento}
            updateMedicamento={updateMedicamento}
            data={data}
          />
        ))}
      </Stack>

      {isOpen ? (
        <FormMedicamento
          addMedicamento={addMedicamento}
          isOpen={isOpen}
          onClose={onClose}
          data={data}
        />
      ) : null}
    </>
  );
};

export default Medicamentos;
