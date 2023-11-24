import { Flex, Box } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './screens/Home';

function App() {
  return (
     <BrowserRouter>
      <Flex as='main' mt='72px' direction='row' bgColor='white.900'>
        <Box flex='1' p='6' overflow='auto'>
          
          <Routes>
            <Route path='/' element={<Home />} />
           
          </Routes>
        </Box>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
