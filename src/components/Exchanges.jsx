import React, { useState,useEffect } from 'react'
import { server } from '../main'
import axios from "axios"
import { Container, HStack, Heading, VStack, Image, Text} from '@chakra-ui/react'
import Loader from './Loader'
import Error from './Error'

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(()=>{
    const fetchExchanges = async()=>{
      try{
      const {data} = await axios.get(`${server}/exchanges`)
      setExchanges(data)
      setLoading(false)  
      } catch(error){
      setError(true)
      setLoading(true)  
      }  
    }
    fetchExchanges()
  },[])

  if(error) return <Error message={"Error while fetching exhchanges data..."}/>
  return (
    <Container maxW={'container.xl'}>
      {loading? <Loader/>:(<>
      <HStack wrap={'wrap'}>  
        {
          exchanges.map((i)=>(

             <ExhangeCard key={i.id}name={i.name} image={i.image} url={i.url} rank={i.trust_score_rank}/>
          ))
        }
      </HStack>
      </>)}
    </Container>
  )
}

const ExhangeCard =({name,image,url,rank})=>(
  
  <a href={url} target={'blank'}>
    <VStack w={'52'} shadow={'lg'} borderRadius={'lg'} p={'8'} transition={'all 0.4s'} m={'4'} css={{'&:hover':{
      transform:"scale(1.2)"
    }}}>
      <Image src={image} h={'10'} w={'10'} objectFit={'contain'} alt={'Exchange'}/>
      <Heading size={'md'} noOfLines={1}>{rank}</Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
)

export default Exchanges
