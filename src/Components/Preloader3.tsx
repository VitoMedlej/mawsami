"use client"
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import  { Autoplay } from 'swiper'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import Btn from './Btn/Btn';


const Preloader3 = ({res}:{res:any}) => {
    const router = useRouter()
    const [imgs,setImgs] = useState(
        [
            {
                img: "https://languagewave.com/wp-content/uploads/2020/06/Mouneh-pantry-rbc-scaled.jpg",
                text: ""
            },
            {
                img : "https://images.squarespace-cdn.com/content/v1/5c13e5c3372b969f8c4a5a1c/1593867192071-TXYEVDBNAN2D4YIT1N92/Labne-stuffed+olives+-+Lebanon+-+Feryal+the+mouneh+boutique.jpg"
            }
           
          ]
        
    )
    useEffect(() => {
    if (res && res?.MainCarousel && res?.MainCarousel?.length >0) {
        // console.log('res: ', );
        setImgs(res?.MainCarousel)
    }
    }, [])
    
    return (
        <Box
            className='relative'
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            maxWidth: 'lg',
            maxHeight:{xs:'100vh',md:'600px'},
            // maxWidth:'lg',
            margin: '0 auto',
            display: {
                xs: 'flex'
            },
            mt:0,
            pt:0,
            mb:2,
            height: '100%'
        }}>
            <Swiper
            
                navigation={true}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs.map((item) => {
    
                    return <SwiperSlide 
                        // onClick={() => router.push('/collection/products')}
                    className='ztop flex center items-center auto  relative' key={item.img}>
                        <Box
                            sx={{
         
                        
                                height: '100%',
                            width:'100%'
                        }}>
    
                            <img
            
                                className={`img   
                                `}
                                // ${item?.className}
                                src={`${item.img}`}
                                alt="Main Carousel Image"/>
                        </Box>
                        <Box sx={{position:'absolute',px:1}}  className="absolute flex col center auto items-center text-center">
                                <Typography sx={{color:"white",textShadow:'1px 1px black',fontSize:{xs:'2em',sm:'3em'},fontWeight:600,maxWidth:'600px'}}>
                                 A Taste of Lebanon&apos;s Natural Bounty By Mawsamiyet
                                </Typography>
                                <Btn
                                onClick={()=>router.push('/collection/products')}>
                                    Shop Now
                                </Btn>
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader3