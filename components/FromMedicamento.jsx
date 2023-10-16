import React from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const FormMedicamento = ({ isOpen, onClose, addMedicamento }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (medicamento) => {
    if (!medicamento.nombre || !medicamento.descripcion || !medicamento.cantidad) {
      return; // Evitar la creación de medicamentos con campos vacíos
    }

    const newMedicamento = {
      nombre: medicamento.nombre,
      descripcion: medicamento.descripcion,
      cantidad: parseInt(medicamento.cantidad),
      // Otras propiedades si es necesario
    };

    addMedicamento(newMedicamento);
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent fontFamily="Poppins">
        <DrawerCloseButton />
        <DrawerHeader>Agregar Medicamento</DrawerHeader>

        <DrawerBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={5}>
              <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input
                  {...register("nombre", {
                    required: true,
                  })}
                  placeholder="Nombre"
                />

                {errors.nombre?.type === "required" && (
                  <Alert status="error">
                    <AlertIcon />
                    Este Campo es obligatorio
                  </Alert>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Descripción</FormLabel>
                <Textarea
                  {...register("descripcion", {
                    required: true,
                  })}
                  placeholder="Descripción"
                />
                {errors.descripcion?.type === "required" && (
                  <Alert status="error">
                    <AlertIcon />
                    Este Campo es obligatorio
                  </Alert>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Cantidad</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="Cantidad" />
                  <Input
                    type="number"
                    {...register("cantidad", {
                      required: true,
                    })}
                  />
                </InputGroup>
                {errors.cantidad?.type === "required" && (
                  <Alert status="error">
                    <AlertIcon />
                    Este Campo es obligatorio
                  </Alert>
                )}
              </FormControl>

              <Button type="submit">Agregar Medicamento</Button>
            </Stack>
          </form>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default FormMedicamento;
