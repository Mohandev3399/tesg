import styled from '@emotion/styled'
import React from 'react'
import styles from "../../../src/app/page.module.css";




const CardContainer = styled.div`

width: '100%;
  
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  text-overflow:ellipse

`

const Icon = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
`


const Title = styled.h3`
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #f8f8f8;
  line-height: 1.5;
`;

const ActionButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #ffffff;
  color: #d6b4d7;
  border: none;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

interface CardComponentProps {
  title: string;
  description: string;
  icon: React.ReactNode; // Can be any valid JSX (like an icon or element)
  colorValue: string; // A string for the background color (e.g., '#FF5733')
}

const CardComponent: React.FC<CardComponentProps> = ({title, description, icon, colorValue }) => {
  return (
   <CardContainer style={{backgroundColor:`${colorValue}`}}>
    <Icon>{icon}</Icon>  
    <Title className={styles.customFont} style={{fontWeight:'300', textTransform:'uppercase', fontSize:'16px', color:'#ffffff'}}>{title}</Title>
  
      <Description className={styles.customFont} style={{fontSize:'12px',color:'#ffffff'}}>{description}</Description>
      <ActionButton>+</ActionButton>
    
    
   </CardContainer>
  )
}

export default CardComponent

