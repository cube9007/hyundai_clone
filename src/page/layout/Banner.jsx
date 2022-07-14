import React, { Component } from "react";
import { Icon } from 'semantic-ui-react'
//img

function HandleRight() {
    const banner = document.getElementById('banner-div');
    // if ( banner.style.marginLeft == 0 ) {
    //     banner.style.marginLeft = '-100%'
    //     document.getElementById('banner-bottom2').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
    //     document.getElementById('banner-bottom1').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    // } else if ( banner.style.marginLeft == '0px' ) {
    //     banner.style.marginLeft = '-100%'
    //     document.getElementById('banner-bottom2').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
    //     document.getElementById('banner-bottom1').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    // } else if ( banner.style.marginLeft == '-100%' ) {
    //     banner.style.marginLeft = '-200%'
    //     document.getElementById('banner-bottom3').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
    //     document.getElementById('banner-bottom2').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    // } else if ( banner.style.marginLeft == '-200%' ) {
    //     banner.style.marginLeft = '-300%'
    //     document.getElementById('banner-bottom4').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
    //     document.getElementById('banner-bottom3').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    // } else if ( banner.style.marginLeft == '-300%' ) {
    //     banner.style.marginLeft = '-400%'
    //     document.getElementById('banner-bottom5').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
    //     document.getElementById('banner-bottom4').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    // } else if ( banner.style.marginLeft == '-400%' ) {
    //     banner.style.marginLeft = 0
    //     document.getElementById('banner-bottom1').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
    //     document.getElementById('banner-bottom5').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    // } 

    let marginLeft;
    let id1;
    let id2;

    if (!banner.style.marginLeft) {
        banner.style.marginLeft = '-100%'
        document.getElementById('banner-bottom2').style.borderBottom = '3px solid rgb(255,255,255,0.7)';
        document.getElementById('banner-bottom1').style.borderBottom = '3px solid rgb(0,0,0,0.3)';
        return;
    }

    switch(banner.style.marginLeft) {
        case '0px':
            marginLeft = '-100%';
            id1 = 'banner-bottom2';
            id2 = 'banner-bottom1';
        break;
        case '-100%':
            marginLeft = '-200%';
            id1 = 'banner-bottom3';
            id2 = 'banner-bottom2';
        break;
        case '-200%':
            marginLeft = '-300%';
            id1 = 'banner-bottom4';
            id2 = 'banner-bottom3';
        break;
        case '-300%':
            marginLeft = '-400%';
            id1 = 'banner-bottom5';
            id2 = 'banner-bottom4';
        break;
        case '-400%':
            marginLeft = 0;
            id1 = 'banner-bottom1';
            id2 = 'banner-bottom5';
        break;
    }

    banner.style.marginLeft = marginLeft
    document.getElementById(id1).style.borderBottom = '3px solid rgb(255,255,255,0.7)';
    document.getElementById(id2).style.borderBottom = '3px solid rgb(0,0,0,0.3)';
}

function HandleLeft() {
    const banner = document.getElementById('banner-div');

    if ( banner.style.marginLeft == 0 ) {
        banner.style.marginLeft = '-400%'
        document.getElementById('banner-bottom5').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
        document.getElementById('banner-bottom1').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    } else if ( banner.style.marginLeft == '0px' ) {
        banner.style.marginLeft = '-400%'
        document.getElementById('banner-bottom5').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
        document.getElementById('banner-bottom1').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    } else if ( banner.style.marginLeft == '-400%' ) {
        banner.style.marginLeft = '-300%'
        document.getElementById('banner-bottom4').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
        document.getElementById('banner-bottom5').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    } else if ( banner.style.marginLeft == '-300%' ) {
        banner.style.marginLeft = '-200%'
        document.getElementById('banner-bottom3').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
        document.getElementById('banner-bottom4').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    } else if ( banner.style.marginLeft == '-200%' ) {
        banner.style.marginLeft = '-100%'
        document.getElementById('banner-bottom2').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
        document.getElementById('banner-bottom3').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    } else if ( banner.style.marginLeft == '-100%' ) {
        banner.style.marginLeft = 0
        document.getElementById('banner-bottom1').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
        document.getElementById('banner-bottom2').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    } 
}

function BannerBottom1() {
    const banner = document.getElementById('banner-div');
    banner.style.marginLeft = 0
    document.getElementById('banner-bottom1').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
    document.getElementById('banner-bottom2').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom3').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom4').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom5').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
}
function BannerBottom2() {
    const banner = document.getElementById('banner-div');
    banner.style.marginLeft = '-100%'
    document.getElementById('banner-bottom1').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom2').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
    document.getElementById('banner-bottom3').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom4').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom5').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
}
function BannerBottom3() {
    const banner = document.getElementById('banner-div');
    banner.style.marginLeft = '-200%'
    document.getElementById('banner-bottom1').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom2').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom3').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
    document.getElementById('banner-bottom4').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom5').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
}
function BannerBottom4() {
    const banner = document.getElementById('banner-div');
    banner.style.marginLeft = '-300%'
    document.getElementById('banner-bottom1').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom2').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom3').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom4').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
    document.getElementById('banner-bottom5').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
}
function BannerBottom5() {
    const banner = document.getElementById('banner-div');
    banner.style.marginLeft = '-400%'
    document.getElementById('banner-bottom1').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom2').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom3').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom4').style.borderBottom = '3px solid rgb(0,0,0,0.3)'
    document.getElementById('banner-bottom5').style.borderBottom = '3px solid rgb(255,255,255,0.7)'
}

setInterval(HandleRight, 6000)

class Banner extends Component {
    

    render() {
    return(
        <>
            <div className="banner">
                <div>
                    <div id="banner-div">
                        <div className="banner-1">
                            <ul>
                                <li>TUCSON</li>
                                <li>TUCSON Hybrid</li>
                                <li>TUCSON N Line</li>
                                <li>TUCSON N Line Hybrid</li>
                            </ul>
                        </div>
                        <div className="banner-2">
                            <ul>
                                <li>자세히보기</li>
                                <li>내 차 만들기 </li>
                            </ul>
                        </div>
                        <div className="banner-3">
                            <ul>
                                <li>GRANDEUR</li>
                                <li>GRANDERU Hybrid </li>
                            </ul>
                        </div>
                        <div className="banner-4">
                            <ul>
                                <li>자세히보기</li>
                                <li>내 차 만들기 </li>
                            </ul>
                        </div>
                        <div className="banner-5">
                            <ul>
                                <li>바로가기</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
                <div className="banner-bottom">
                    <div className="banner-arrow" >
                        <span id='handleLeft' onClick={HandleLeft}>
                            <Icon name='chevron left' size="big" />
                        </span>
                        <span id='handleRight' onClick={HandleRight}>
                            <Icon name='chevron right' size="big"/>
                        </span>
                    </div>
                    <div>
                        <ul id="banner-bottom1" onClick={BannerBottom1}>
                            <li>[TUCSON]</li>
                            <li>당신만의 특별한 공간</li>
                        </ul>
                        <ul id="banner-bottom2" onClick={BannerBottom2}>
                            <li>[PALISADE]</li>
                            <li>당신의 모든 세상</li>
                        </ul>
                        <ul id="banner-bottom3" onClick={BannerBottom3}>
                            <li>[GRANDEUR]</li>
                            <li>성공을 새롭게 정의하다</li>
                        </ul>
                        <ul id="banner-bottom4" onClick={BannerBottom4}>
                            <li>[STARIA]</li>
                            <li>삶의 여유를 주는 휴식 공간</li>
                        </ul>
                        <ul id="banner-bottom5" onClick={BannerBottom5}>
                            <li>[CASPER]</li>
                            <li>case by CASPER</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </>
      ); 
  }
}
export default Banner;