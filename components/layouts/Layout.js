import { Box } from "@chakra-ui/react";
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Your Title Here</title>
            </Head>
            <Box maxW="800px" mx="auto" px={4} py={8}>
                <Header />
                {children}
            </Box>
        </>
    );
};

export default Layout;

const Header = () => {
    return (
        <Box
            bg="white"
            h="60px"
            borderBottom="1px solid #E2E8F0"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={4}
        >
            {/* Your header content here */}
        </Box>
    );
};
