import React from 'react';
import { Button, Box, ChakraProvider } from '@chakra-ui/react';

function TwoButtonsPage() {
  const handleButton1Click = () => {  //button Tomar Medicamento
    alert('Excelente tomo su medicacion');
    window.location.href = 'http://localhost:3000';

    const onSubmit = (dataNew) => {
      // Obtener el valor del campo "cantidad" del formulario
      const cantidadValue = dataNew.cantidad;
    
      // Crear el objeto actualizado del medicamento
      const updatedMedicamento = {
        nombre: dataNew.nombre,
        descripcion: dataNew.descripcion,
        cantidad: cantidadValue,
        id: id,
      };
    
      // Actualizar la base de datos de Firebase
      updateMedicamento(id, updatedMedicamento);
    
      // Cerrar el formulario
      onClose();
    };
    
  };

  const handleButton2Click = () => { //button Posponer medicamento
    alert('En 2 minutos se le notificara de nuevo');
    window.location.href = 'http://localhost:3000';
  };

  return (
    <ChakraProvider>
      <Box textAlign="center" p={5}>
        <h1 style={{ fontSize: '36px' }}>RECORDATORIO</h1>

        <Button
          colorScheme="teal"
          size="lg"
          onClick={handleButton1Click}
          m={2}
        >
          Tomar Medicamento
        </Button>

        <Button
          colorScheme="blue"
          size="lg"
          onClick={handleButton2Click}
          m={2}
        >
          Posponer Medicamento
        </Button>
      </Box>
    </ChakraProvider>
  );
}

export default TwoButtonsPage;