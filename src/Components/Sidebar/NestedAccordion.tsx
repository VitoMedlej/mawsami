import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { AiOutlineArrowUp } from 'react-icons/ai'; // Assuming you've imported the AiOutlineArrowUp icon
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { categories } from '../Navbar/Navbar';



    function NestedMenuAccordion({toggleDrawer}:any) {
        const [open, setOpen] = useState(false);
        const router = useRouter()
        const handleRoute = (category : string,mainCategory:string,subCategory?:string) => {
          toggleDrawer && toggleDrawer(false);
          router.push(`/${mainCategory.replace(/ /g, '-').toLocaleLowerCase()}/products?type=${category ? category.replace(/ /g, '-').toLocaleLowerCase() : null}&subcategory=${subCategory ? encodeURIComponent(subCategory).toLocaleLowerCase() : null}`)
          return
            };
      
        return (
          <Box sx={{ border: 'none', boxShadow: 'none' }}>
            <List disablePadding>
              {categories.map((mainCategory) => (
                <Accordion
                onClick={()=>router.push(`/${encodeURIComponent(mainCategory.toLocaleLowerCase())}/products`)}
                className='cursor '
                  key={mainCategory}
                  sx={{ border: 'none',py:1.5,px:3, boxShadow: 'none' }}
                >
                
                    <Typography sx={{ fontWeight: 500, textTransform: 'capitalize' }}>
                      {mainCategory}
                    </Typography>
                
                </Accordion>
              ))}
            </List>
          </Box>
        );
      }
      
      export default NestedMenuAccordion;