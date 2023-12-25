import { VStack, Heading , Text, Image} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard =({id, name,img,symbol,price, currencySymbol="₹"})=>(
  
    <Link to={`/coin/${id}`} target={'blank'}>
      <VStack w={'52'} shadow={'lg'} borderRadius={'lg'} p={'8'} transition={'all 0.4s'} m={'4'} css={{'&:hover':{
        transform:"scale(1.2)"
      }}}>
        <Image src={img} h={'10'} w={'10'} objectFit={'contain'} alt={'Coin'}/>
        <Heading size={'md'} noOfLines={1}>{symbol}</Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
      </VStack>
    </Link>
  )


export default CoinCard
