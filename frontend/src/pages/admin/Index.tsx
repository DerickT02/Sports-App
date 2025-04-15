import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Box, Horizontal} from '../../components/layout/atoms'
import { AiOutlineEdit } from "react-icons/ai";
import styled from 'styled-components'


export default function Index() {
    const navigate = useNavigate()

    const ManageAthleteRedirect = styled(Horizontal)`
    width: 175px;
    height: 75px;
    border: 2px solid white;
    border-radius: 17px;
    `;
    
  return (
    <>
    <Box margin= "50px">Admin Home Page: Actions Below</Box>
    <ManageAthleteRedirect onClick={() => navigate('/admin-Manage_Athlete')}>
        <Box margin= "9px"><AiOutlineEdit/></Box>
        <Box >Manage Athletes</Box>
    </ManageAthleteRedirect>
    </>
  )
}



// other possible pages: edit testimonials