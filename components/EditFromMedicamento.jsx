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
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { Image } from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

const EditFormMedicamento = ({
  isOpen,
  onClose,
  medicamento,
  data,
  updateMedicamento,
}) => {
  const { nombre, descripcion, cantidad, id } = medicamento;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataNew) => {
    const updatedMedicamento = {
      nombre: dataNew.nombre,
      descripcion: dataNew.descripcion,
      cantidad: dataNew.cantidad,
      id: id,
    };

    updateMedicamento(id, updatedMedicamento);
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Editar Medicamento</DrawerHeader>

        <DrawerBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={5}>
              <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input
                  {...register("nombre", {
                    required: true,
                  })}
                  defaultValue={nombre}
                />
                {errors.nombre?.type === "required" && (
                  <Alert status="error">
                    <AlertIcon />
                    Este campo es obligatorio
                  </Alert>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Descripción</FormLabel>
                <Textarea
                  {...register("descripcion")}
                  defaultValue={descripcion}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Cantidad</FormLabel>
                <Input
                  type="number"
                  {...register("cantidad", {
                    required: true,
                  })}
                  defaultValue={cantidad}
                />
                {errors.cantidad?.type === "required" && (
                  <Alert status="error">
                    <AlertIcon />
                    Este campo es obligatorio
                  </Alert>
                )}
              </FormControl>

              <Button type="submit">Editar Medicamento</Button>
            </Stack>
          </form>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default EditFormMedicamento;
