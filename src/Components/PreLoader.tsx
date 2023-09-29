"use client"
import React from 'react'
import { Box,  Container, Typography } from "@mui/material"
import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'
import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import Testimonials from './Testimonials/Testimonials'

const 
PreLoader = ({data,resImages}:any) => {
  const router= useRouter();
  
  const cates = 
  
  // resImages?.first ? [resImages?.first , resImages?.second , resImages?.third , resImages?.fourth ,resImages?.fifth] : [
  //   'https://i0.wp.com/shoppinglebanese.com/wp-content/uploads/2020/06/Dairy-Products-%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D9%84%D8%A8%D8%A7%D9%86.png?w=660&ssl=1',
  //   'https://i0.wp.com/shoppinglebanese.com/wp-content/uploads/2020/06/Combo-Offers-%D8%B9%D8%B1%D9%88%D8%B6-%D8%A7%D9%84%D9%83%D9%88%D9%85%D8%A8%D9%88.png?w=660&ssl=1',
  //   'https://i0.wp.com/shoppinglebanese.com/wp-content/uploads/2020/06/%D9%85%D8%B1%D8%A8%D9%89-jam.png?w=660&ssl=1',
  //   'https://ucarecdn.com/bfb9f54b-ee34-4cdc-930c-3a97234595fe/WhatsAppImage20230824at191719.jpeg',
  //   'https://ucarecdn.com/d01c6f74-4d3b-46c4-9d31-67966950b09e/WhatsAppImage20230824at191720.jpeg'
  // ];
  
  
  [{img:'https://ucarecdn.com/687fd25e-ea81-492f-bc1a-a2a0669f84b4/368362857_132782813232408_476171586487259028_n.jpg',category:'Pickles'},
  {img:'https://ucarecdn.com/349f33dd-f82b-42ff-89f7-7bdbfa15874f/357499238_109376385573051_2323533096997451482_n.jpg',category:'Dairy Products'},
  {img:'https://ucarecdn.com/237061ab-45c4-4b7c-99b5-e5103612b9ec/371123875_135707726273250_3281640845018484081_n.jpg',category:' Jam'} ,
  
  ]
  return (
    <Box >
      <MainCarousel resImages={resImages}/>
    <Container disableGutters className='wrap auto flex' sx={{px:{sm:1},maxWidth:'xl',display:'flex'}}>

        
         <Typography
                className='sectionTitle text-center auto center box'
                sx={{
                  py:'.15em',
                  // pt:9,
                  display:'flex',
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                flex:1,
                px:1,
                pt:4,
                fontWeight: '300'
            }}>
              
              Lebanese Mouneh Combo Offers - عروض كومبو المونة اللبنانية

            </Typography>
         

            <Box className='wrap  space-evenly' sx={{width:'100%',mx:1,my:3,display:{xs:'flex'}}}>

        {cates.map((i:any)=>{
            return <Box

            onClick={()=>router.push(`${i?.category.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
            key={i?.img} className='cursor'
             sx={{borderRadius:'50%',height:{xs:'31vw',sm:'24vw',md:'24vw',lg:'15vw'},
             my:2,width:{xs:'31vw',sm:'24vw',md:'24vw',lg:'15vw'}}}>
                    <img src={i?.img} alt={`${i?.category ,'image'}`} style={{borderRadius:'50%'}} className="img" />
                    <Typography sx={{fontWeight:'500',fontSize:'.65em',textAlign: 'center',px:1}}>
             {i?.category}
            </Typography>
            </Box>

        })}
        </Box>

{/* {resImages?.first && <Box

onClick={()=>router.push(`${'circut machines'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
 className='cursor'
 sx={{borderRadius:'50%',height:{xs:'48vw',sm:'24vw',md:'24vw',lg:'15vw'},
 my:2,width:{xs:'48vw',sm:'24vw',md:'24vw',lg:'15vw'}}}>
        <img src={resImages?.first} alt={`Circut Machines Images image`} style={{borderRadius:'2%'}} className="img" />
        <Typography sx={{fontWeight:'500',fontSize:'.65em',textAlign: 'center',px:1}}>
        Circut Machines
</Typography>
</Box>}


{resImages?.second && <Box
  onClick={() => router.push(`${'customizable-blanks'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={`${resImages?.second}`} alt={`Customizable Blanks Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    Customizable Blanks
  </Typography>

</Box>}
{resImages?.third && <Box
  onClick={() => router.push(`${'hot-offers'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={resImages?.third} alt={`Hot Offers Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    Hot Offers
  </Typography>
</Box>}
{resImages?.fourth && <Box
  onClick={() => router.push(`${'new-arrivals'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={resImages?.fourth} alt={`New Arrivals Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    New Arrivals
  </Typography>
</Box>}
{resImages?.fifth && <Box
  onClick={() => router.push(`${'materials'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={resImages?.fifth} alt={`Materials Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    Materials
  </Typography>
</Box>} */}


            {/* </Box> */}

     {/* </Box> */}

      <Box/>
        <HomeProductCollection products={data?.featuredProducts?.slice(0,10)}/>
       
    </Container>

        

        
        {/* <Perks/> */}
        {/* <ContactSection/> */}
  </Box>
  )
}

export default PreLoader