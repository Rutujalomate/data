import React from 'react'
import { Image, Text,Box,Flex ,Spacer} from '@chakra-ui/react'

const HomeThird = ({data}) => {
  return (
    <Box>
        <Flex backgroundColor={'white'} justifyContent={'center'} gap={'160px'} margin={'30px'} padding={'40px'}  >
    {data.map((item)=>{
        return(

    <Box  backgroundColor={''} alignItem='center' padding={'15px'} width={'330px'} height={'auto'} > 
    <Box boxShadow= {'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}>           <Image src={item.img}/></Box>
           
    <Text  textAlign='center' >{item.order}</Text>
    <Box alignItem="center">
            <Text textAlign='center'>{item.free}</Text>

    </Box>


</Box>

)
    })}

   
</Flex>
    </Box>
  )
}

export default HomeThird