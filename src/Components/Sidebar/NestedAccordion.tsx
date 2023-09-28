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
                  key={mainCategory}
                  sx={{ border: 'none', boxShadow: 'none' }}
                >
                  <AccordionSummary
                    expandIcon={<AiOutlineArrowUp />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    // onClick={() => setSelectedCategory(mainCategory.categoryName)}
                  >
                    <Typography sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                      {mainCategory}
                    </Typography>
                  </AccordionSummary>
                
                </Accordion>
              ))}
            </List>
          </Box>
        );
      }
      
      export default NestedMenuAccordion;