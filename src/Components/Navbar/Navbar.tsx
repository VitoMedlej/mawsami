"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {IoIosMenu} from 'react-icons/io'
// import {CiShoppingCart} from 'react-icons/ci'

import { useEffect, useState} from 'react';
// import { CartContext, DrawerContext } from '../../../pages/_app'; import
import SearchModal from './SearchModal';
import Link from 'next/link';
import {Badge, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import {CiSearch,CiShoppingCart} from 'react-icons/ci'
import {AiOutlineHome,AiOutlineShoppingCart} from 'react-icons/ai'
import SearchInput from './SearchInput';

import NavButtom from './NavButtom';
import { useCartContext, useDrawerContext } from '@/context/Contexts';
import Btn from '../Btn/Btn';



export const categories = [
    "Pickles",
    "Olives",
    "Sauce",
    "Honey",
    "Food",
    "Jam",
    "New Arrivals",
    "Offers",
    "Other",
]
export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,
        setOpenModal] = useState(false);
    
    const [localCart,
        setLocalCart] = useState([]);

    const {cartOpen, setCartOpen} = useCartContext();
    const router = useRouter()
    // const localCart = [1]
    useEffect(() => {
        const cart : any = []
        // const cart = loadState('sgh2j40-tlsit') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])


    return ( <>
     <Box
     id='navy'
    className='center auto relative   flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                py:0,
                width:'100%',
                boxShadow:'none',
        background:'black',
        border: 'none',
        px:0,
        flexGrow: 1
    }}>
      
        <AppBar
     id='navy2'

    className='center relative  flex'

            sx={{
                boxShadow:'none',
                background:'black',
                width:'100%',
                margin: '0 auto',
        }}>
             
            <Toolbar
     id='navy3'

    className=' relative  flex  w100  auto'

                sx={{
                    justifyContent: 'space-between',
                
                background:'black',
                    maxWidth:'lg',
                px:'0 !important',
                
                flexWrap: 'wrap'
            }}> 
           
                <Box
                    sx={{
                    px:1,

                    flexWrap: 'wrap',
                    justifyContent: {
                        xs: 'right',
                    },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                    }}
                        className='flex right'>
                             
                        

                     
    <IconButton
                            onClick={() => setOpen(!open)}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                            margin : '8px',padding:0,
                            color: 'white',
                            // margin: '0.1em',
                        
                        }}>
                            <IoIosMenu color='white'/>
                        </IconButton>
                   
   {/* <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' className='flex decor-none' rel='noopener'>

                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                     
                            <AiOutlinePhone color='black'/>

                        </IconButton>
    </a> */}
                    
                    </Box>

                </Box>
  {/* <SearchInput/> */}
  {/* <SearchInput
mobile/>  */}

                <Box
                    sx={{
                    px:1,

                    // flex: 1,
                    flexWrap: 'wrap',
                    // justifyContent: {
                    //     xs: 'right',
                    //     sm: 'end'
                    // },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
 
 {/* <IconButton
                            onClick={() => setOpenModal(!openModal)}
                            sx={{
                            color: 'black'
                        }}>

                                <CiSearch color='black'/>
                          
                        </IconButton> */}

                    
                        <Link className='flex center  aling-center items-center '  href='/' color='inherit'>

<Box
    sx={{
        flex: 1,

    mx: {
        sm: '1em'
    },
    width:{xs:'90px',sm: '120px'},
    height:{xs:'90px',sm: '100px'}
}}>
    <img
        className='img'
        src={`https://ucarecdn.com/c9e0bf93-4371-4dd1-819a-cdc9e364efc2/363347989_1007056764071357_3711776752683714269_n.jpg`}
        alt="mawsamiyet.elkaa logo"/>
</Box>
</Link>


                    
                    
                    </Box>
       
                </Box>
                <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{

                                mr:1,
                                color: 'white'
                        }}>
                                {/* <Typography sx={{px:1}}>
                                    0$
                                </Typography> */}
                            <Badge color='primary' badgeContent={`${localCart.length || '0'}`}>
                                <CiShoppingCart color='white'/>
                            </Badge>
                            </IconButton>
{/* <SearchModal openModal={openModal} setOpenModal={setOpenModal }/> */}
             
            </Toolbar>
<NavButtom/>

        </AppBar>
    </Box> 

    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}