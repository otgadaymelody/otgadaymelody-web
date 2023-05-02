import React, { type FC } from 'react';
import '../franchise-about-us/franchise-about-us.css';
import franchisePreview from '../../assets/images/franchise/franchise-preview.png';




const FranchiseAboutUs:  FC = () => {


    return(
        <section className='FranchiseAboutUs_Container'>
<div className='FranchiseAboutUs_descriptionContainer'>
 <div className='FranchiseAboutUs_titleContainer'>
    <h1 className='FranchiseAboutUs_title'>Что такое 
        <span className='FranchiseAboutUs_title__pink'> Отгадай мелодию?</span></h1>
 </div>
 <div className='FranchiseAboutUs_textContainer'>
    <p className='FranchiseAboutUs_text'>«Отгадай Мелодию» — это самая народная интеллектуально-музыкальная битва, в которой неважно насколько музыкально продвинутые игроки, главное, что на протяжении 2,5 — 3 часов они будут находится в непередаваемой атмосфере, отгадывать знакомые мелодии, петь во весь голос, танцевать и веселиться от души.</p>
 </div>

 <div className='FranchiseAboutUs_rulesContainer'>
    <div className='FranchiseAboutUs_rules'></div>
    <div className='FranchiseAboutUs_rules'></div>
    <div className='FranchiseAboutUs_rules'></div>
    <div className='FranchiseAboutUs_rules'></div>
 </div>
</div>

<div className='FranchiseAboutUs__imageContainer'>
    <img className='FranchiseAboutUs__image' src={franchisePreview}></img>
</div>

        </section>
    )
}

export default FranchiseAboutUs;