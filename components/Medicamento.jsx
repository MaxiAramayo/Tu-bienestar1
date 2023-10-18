import React from "react";
import {
  Box,
  Stack,
  Text,
  Image,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { editPen } from "../components/images/editPen.svg";
import { trash } from "../components/images/trash.svg";
import EditFormMedicamento from "../components/EditFromMedicamento";
import { Recordatorio } from "./Recordatorio";

const Medicamento = ({
  key,
  medicamento,
  deleteMedicamento,
  updateMedicamento,
  data,
}) => {
  const { nombre, descripcion, cantidad, id } = medicamento;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const eliminarMedicamento = () => {
    // Lógica para eliminar un medicamento
    console.log("este es el id del medicamento que se quiere elimnar" + id);
    deleteMedicamento(id);
    console.log("Se elimina un medicamento");
  };

  return (
    <Stack
      backgroundColor="gray.100"
      justifyContent="space-between"
      flexDirection="row"
      p={2}
      alignItems="center"
      rounded="md"
    >
      <Box display="flex" alignItems="center" gap={2} width="70%">
        <Stack gap={2} fontFamily="Dosis">
          <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
            {nombre}
          </Text>
          <Text fontWeight="semibold" fontSize={{ base: "sm", md: "md" }}>
            Descripción: {descripcion}
          </Text>
          <Text fontWeight="semibold" fontSize={{ base: "sm", md: "md" }}>
            Cantidad: {cantidad}
          </Text>
        </Stack>
      </Box>

      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        width="30%"
        gap={{ base: "2" }}
      >
        <Button
          onClick={onOpen}
          colorScheme="teal"
          size="sm"
          leftIcon={<FontAwesomeIcon icon={editPen} />}
        >
          Editar
        </Button>

        <Button
          onClick={eliminarMedicamento}
          colorScheme="red"
          size="sm"
          leftIcon={<FontAwesomeIcon icon={trash} />}
        >
          Eliminar
        </Button>
        <Recordatorio nombreMedicamento={nombre} />
      </Box>

      {isOpen ? (
        <EditFormMedicamento
          isOpen={isOpen}
          onClose={onClose}
          medicamento={medicamento}
          data={data}
          updateMedicamento={updateMedicamento}
        />
      ) : null}
    </Stack>
  );
};

export default Medicamento;
