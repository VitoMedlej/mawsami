"use client"
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
// import MenuHover from './MenuHover'
import { categories } from './Navbar'
import MenuHover from './MenuHover'





const NavButtom = () => {

  return (
    <Box
        className=' wrap  space-evenly'
        sx={{
            width:'100%',
            flex:1,
            position:'relative',
        // width: '100%',
        mx: 0,
        display : {xs:'none',md:'flex'}
    }}>
        <Container
            className='flex   '
            sx={{
              
            maxWidth: 'lg',
            overflow:'hidden',
            py:1.5,

        }}>
{/* <Link className=' decor-none uppercase' href={`/collection/products`}>
                    <Typography  component='p' sx={{width:'max-content',fontWeight:400,fontSize:{xs:'.7em',sm:'.85em'}}}>
                    Sale
                    </Typography>
                </Link> */}
                <Link className='white decor-none uppercase' href={`/collection/products`}>

<Typography 
className=' cursor center flex gap1 white decor-none uppercase'
id="button"
component='p' sx={{width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:600,fontSize:{xs:'.6em',sm:'.75em'}}}>
Collections
</Typography>
</Link>

<Link className='white  decor-none uppercase' href={`/new-arrivals/products`}>
<Typography 
className='white cursor center flex gap1 white decor-none uppercase'
id="button"
component='p' sx={{width:'max-content',
alignItems: 'center',
mx:'1em',

fontWeight:600,fontSize:{xs:'.6em',sm:'.75em'}}}>
New Arrivals
</Typography>
</Link>
                {/* <Link className='white decor-none uppercase' href={`/birds/products`}>

                <Typography 
      className=' cursor center flex gap1 white decor-none uppercase'
        id="button"
        component='p' sx={{width:'max-content',
        mx:'1em',
        alignItems: 'center',
        
        fontWeight:600,fontSize:{xs:'.6em',sm:'.75em'}}}>
     Birds
   </Typography>
   </Link> */}
           

            { [
    {cate:"Categories",subCate:categories,img:`https://th.bing.com/th/id/OIP.YWzf9EeVLYVCYc2UL1HmTgHaJ4?pid=ImgDet&rs=1`},
    // {cate:"Dogs",subCate:dogsSubcategories,img:`https://mypetguru.com/imgs/uploads/toy-for-dog.jpg`},
    // {cate:"Offers",subCate:offersSubcategories,img:'https://i.pinimg.com/originals/bf/cb/59/bfcb59f20bddc43101e39de2cc142f7e.jpg'}
].map(i => {
                // return <Link className='clr decor-none uppercase' key={i} href={`/${i.replace(/ /g, '-').toLocaleLowerCase()}/products`}>
                //     <Typography  component='p' sx={{width:'max-content',fontWeight:600,fontSize:{xs:'.6em',sm:'.75em'}}}>                    
                //     {i}
                //     </Typography>
                // </Link>
                return  <MenuHover img={i.img} key={i.cate} category={i.cate} subcategories={i.subCate}/>
            })}

<Link className='white decor-none uppercase' href={`/offers/products`}>

<Typography 
className=' cursor white center flex gap1 white decor-none uppercase'
id="button"
component='p' sx={{width:'max-content',
alignItems: 'center',
mx:'1em',

fontWeight:600,fontSize:{xs:'.6em',sm:'.75em'}}}>
Offers
</Typography>
</Link>
        </Container>
        {/* <MenuHover category='HOVER HERE' subcategories={['test','test2']}/> */}
    </Box>
  )
}

export default NavButtom