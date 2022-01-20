import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';



function Header() {
  return (
    <HeaderContainer>
      {/* HEader left */}
      <HeaderLeft>
        <HeaderAvatar/>
        <AccessTimeRoundedIcon/>
      </HeaderLeft>

      {/* Header search */}
      <HeaderSearch>
        <SearchRoundedIcon/>
        <input placeholder="Search..."/>
      </HeaderSearch>

      {/* header right */}
      <HeaderRight>
        <HelpOutlinedIcon/>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

//styled component
const HeaderContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack-color);
color: white;
`;

const HeaderLeft = styled.div`
  flex : 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  //targeting svg icon

  > .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderSearch = styled.div`
flex: 0.4;
opacity: 1;
border-radius: 6px;
background-color: #421f44;
text-align: center;
padding: 0 50px;
color: gray;
border: 1px gray solid;

>input{
  background-color: transparent;
  border: none;
  text-align: center;
  min-width: 30vw;
  outline: none;
  color: white;
}
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root{
    margin-right: 20px;
    margin-left: auto ;
  }
`;


//custem styled component

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover{
    opacity: 0.8;
  }
`;
