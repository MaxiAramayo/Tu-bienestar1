import { Button, Input, useDisclosure, Text } from "@chakra-ui/react";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
export const Recordatorio = ({ nombreMedicamento }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [fecha, setFecha] = React.useState("");

  const sendEmail = async () => {
    const fechaToMilisegundos = new Date(fecha).getTime();

    const fechaActual = new Date().getTime();

    const diferencia = fechaToMilisegundos - fechaActual;

    const mail = "gianluccacipriani@gmail.com";
    try {
      setTimeout(() => {
        fetch("http://localhost:3001/api/send-email", {
          method: "POST",
          body: JSON.stringify({
            message: "Recordatorio para tomar medicamento: http://localhost:3000/recordatorioMed",
          }),
          headers: { "Content-Type": "application/json" },
        });
      }, diferencia);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" size="xl">
        Recordatorio
      </Button>
      {isOpen ? (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
            <DrawerBody>
              <form>
                <Text>Medicamento: {nombreMedicamento}</Text>
                <Input placeholder="Cantidad" type="number" />
                <Input
                  placeholder="Fecha"
                  type="datetime-local"
                  onChange={(e) => {
                    setFecha(e.target.value);
                  }}
                />

                <Button onClick={sendEmail}>
                  <Text>Guardar</Text>
                </Button>

                <Button>
                  <Text>Cancelar</Text>
                </Button>
              </form>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      ) : null}
    </>
  );
};
