import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Link,
} from "@chakra-ui/react";

import Layout from "../components/layouts/Layout";
import useFirebase from "../hooks/useFirebase";
import Medicamentos from "../components/Medicamentos";
import React, { useEffect, useState } from "react";

export default function Home() {
  const {
    data,
    error,
    addMedicamento,
    deleteMedicamento,
    updateMedicamento,
    searchData,
  } = useFirebase();

  useEffect(() => {
    searchData();
  }, []);

  console.log(data);

  return (
    <>
      <Layout>
        <Stack
          justifyContent="space-between"
          flexDir="row"
          alignItems="center"
          width={{
            base: "100%",
            md: "90%",
            lg: "75%",
            xl: "60%",
            "2xl": "60%",
          }}
          mx="auto"
          px={{ base: "2", md: "0" }}
        >
          <Box
            fontSize={{
              base: "lg",
              md: "xl",
              lg: "xl",
              xl: "xl",
              "2xl": "xl",
            }}
          >
            <Text
              fontFamily="Poppins"
              backgroundColor="white"
              p={2}
              fontWeight="semiBold"
            >
              Bienvenido
              <Text fontWeight="Bold">{}</Text>
            </Text>
          </Box>

          <Button
            w="120px"
            h="40px"
            p={2}
            rounded="md"
            color={"white"}
            bg={"#7C3AED"}
            border="2px"
            transition="all 0.2s ease"
            _hover={{
              bg: "white",
              color: "#7C3AED",
              border: "2px",
              borderColor: "#7C3AED",
              boxSizing: "content-box",
            }}
            onClick={() => {}}
          >
            Cerrar Sesión
          </Button>
        </Stack>

        <Box
          width={{
            base: "100%",
            md: "90%",
            lg: "75%",
            xl: "60%",
            "2xl": "60%",
          }}
          mx="auto"
          px={{ base: "2" }}
        >
          <Tabs isFitted variant="soft-rounded" colorScheme="green">
            <TabList backgroundColor="white" fontFamily="Poppins">
              <Tab
                fontSize={{
                  base: "lg",
                  md: "xl",
                  lg: "xl",
                  xl: "xl",
                  "2xl": "xl",
                }}
                fontWeight="bold"
              >
                medicamentos
              </Tab>
              <Tab
                fontSize={{
                  base: "lg",
                  md: "xl",
                  lg: "xl",
                  xl: "xl",
                  "2xl": "xl",
                }}
                fontWeight="bold"
              >
                Configuracion
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Medicamentos
                  data={data}
                  error={error}
                  deleteMedicamento={deleteMedicamento}
                  addMedicamento={addMedicamento}
                  updateMedicamento={updateMedicamento}
                />
              </TabPanel>

              <TabPanel>
                {/*<Configuracion
                  user={userMail}
                  data={data}
                  error={error}
                  deleteProductosDeCategoria={deleteProductosDeCategoria}
                />*/}
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Link
            href="https://www.google.com/maps/search/farmacias+cerca+de+mi+ubicacion"
            target="_blank"
            isExternal
          >
            Buscar Farmacias Cercanas
          </Link>
        </Box>
      </Layout>
    </>
  );
}
