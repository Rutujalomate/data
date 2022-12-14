import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Button, ButtonGroup,Box } from '@chakra-ui/react'
import Season from './HomeComp/Season'
import HomeThird from './HomeComp/HomeThird'
import { freeShipping, gifts, gifts2 } from './HomeComp/HomeData'
import './Home.css'
import Category from './HomeComp/Category'
import HomeFourth from './HomeComp/HomeFourth'
const Home = () => {
  return (
    <Box className={'bodywhole'}>
      {/* <Navbar/> */}
      <Season
      img={'https://img.shop.com/Image/homepage/shop-gbr-102789-holiday-hot-toys-banners-1600x300-img-min1669996056936.jpg'}/>
    <HomeThird data={freeShipping}/>
    <HomeThird data={gifts}/>
<Category/>
<HomeFourth data={gifts2}/>

    </Box>
  )
}

export default Home