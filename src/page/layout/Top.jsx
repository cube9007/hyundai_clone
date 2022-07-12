import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Icon, Dropdown, Divider, Tab } from 'semantic-ui-react';

//layout

//img
import logo from "../../assets/img/logo.png";
import shop from "../../assets/img/shop.png";
import car1 from "../../assets/img/승용차1.png";
import car2 from "../../assets/img/승용차2.png";
import car3 from "../../assets/img/승용차3.png";
import car4 from "../../assets/img/승용차4.png";
import car5 from "../../assets/img/승용차5.png";
import car6 from "../../assets/img/승용차6.png";

class Top extends Component {
    
    render() {
        return(
            <>
                 <input className="radio radio-1" type='radio' name="menu" id="menu1"/>
                <input className="radio radio-2" type='radio' name="menu" id="menu2"/>
                <input className="radio radio-3" type='radio' name="menu" id="menu3"/>
                <input className="radio radio-4" type='radio' name="menu" id="menu4"/>
                <input className="radio radio-5" type='radio' name="menu" id="menu5"/>
                <input className="radio radio-6" type='radio' name="menu" id="menu6"/>
                <input className="radio radio-7" type='radio' name="menu" id="menu7"/>
                <input className="radio radio-8" type='radio' name="menu" id="bg"/>
                <div className="top">
                    <div className="top-top">
                        <a href="/"> App 다운로드 <Icon name="external alternate" ></Icon></a>
                        <a href="/">개인 로그인</a>
                        <a href="/"> 법인 로그인 </a>
                        <a href="/"> 회원 가입 </a>
                        <a href="/"> 월드 와이드 <Icon name="external alternate" /> </a>
                        <a className="top-top-dropdown">
                            <Dropdown text="Language">
                                <Dropdown.Menu >
                                    <Dropdown.Item text='한국어' />
                                    <Dropdown.Item text='English' />
                                    <Dropdown.Item text='中文' />
                                </Dropdown.Menu>
                            </Dropdown>
                        </a>
                        <a href="/"> 채용 </a>
                        <a href="/"> 검색 <Icon name="search"/></a>
                    </div>

                    <Divider className="fullwidth margin0" />

                    
                    <div className="top-bottom">
                        <a>
                            <img src={logo} />
                        </a>
                        
                        <label className="menu-label1" for='menu1'>
                            <p> 모델 </p>
                        </label>
                        <label for='menu2'>
                            <p> 구매정보 </p>
                        </label>
                        <label for='menu3'>
                            <p> 멤버쉽•차량관리 </p>
                        </label>
                        <label for='menu4'>
                            <p> 이벤트 </p>
                        </label>
                        <label for='menu5'>
                            <p> 고객지원 </p>
                        </label>
                        <label for='menu6'>
                            <p> 브랜드 </p>
                        </label>
                        <label for='menu7'>
                            <p> 회사소개 </p>
                        </label>
                        <a href="/"> 
                            <img src={shop} />
                        </a>
                    </div>

                    <Divider className="fullwidth margin0" />

                    <div className="menu menu-1">
                        <div>
                            <p className="menu-1-title">모델정보</p>
                            <div className="menu-1-name">
                                <p> 승용 </p>
                                <Icon name="angle right" />
                                <div className="menu-1-hover1">
                            <div >
                                <div className="menu-1-hover1-car">
                                    <img src={car1} />
                                    <p>아반떼</p>
                                    <p>1,866만원~</p>
                                    <div>
                                        <p>자세히 보기</p>
                                        <p>내 차 만들기 </p>
                                    </div>
                                </div>
                                <div className="menu-1-hover1-car">
                                    <img src={car2} />
                                    <p>아반떼 Hybride</p>
                                    <p>2,346만원~</p>
                                    <div>
                                        <p>자세히 보기</p>
                                        <p>내 차 만들기 </p>
                                    </div>
                                </div>
                                <div className="menu-1-hover1-car">
                                    <img src={car3} />
                                    <p>쏘나타</p>
                                    <p>2,547만원~</p>
                                    <div>
                                        <p>자세히 보기</p>
                                        <p>내 차 만들기 </p>
                                    </div>
                                </div>
                                <div className="menu-1-hover1-car">
                                    <img src={car4} />
                                    <p>쏘나타 Hybrid</p>
                                    <p>2,881만원~</p>
                                    <div>
                                        <p>자세히 보기</p>
                                        <p>내 차 만들기 </p>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="menu-1-hover1-car">
                                    <img src={car5} />
                                    <p>그렌져</p>
                                    <p>3,392만원~</p>
                                    <div>
                                        <p>자세히 보기</p>
                                        <p>내 차 만들기 </p>
                                    </div>
                                </div>
                                <div className="menu-1-hover1-car">
                                    <img src={car6} />
                                    <p>그렌져 Hybrid</p>
                                    <p>3,787만원~</p>
                                    <div>
                                        <p>자세히 보기</p>
                                        <p>내 차 만들기 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>
                            <div className="menu-1-name">
                                <p> SUV </p>
                                <Icon name="angle right" />
                            </div>
                            <div className="menu-1-name">
                                <p> MPV </p>
                                <Icon name="angle right" />
                            </div>
                            <div className="menu-1-name">
                                <p> 수소•전기차 </p>
                                <Icon name="angle right" />
                            </div>
                            <div className="menu-1-name">
                                <p> N•N Line</p>
                                <Icon name="angle right" />
                            </div>
                            <div className="menu-1-name">
                                <p> 소형상용•택시 </p>
                                <Icon name="angle right" />
                            </div>
                            <div className="menu-1-name">
                                <p> 트럭•버스 </p>
                                <Icon name="external alternate" size="small"/>
                            </div>
                            <div className="menu-1-name">
                                <p> GENESIS </p>
                                <Icon name="external alternate" size="small"/>
                            </div>
                            <div className="menu-1-name">
                                <p> CASPER </p>
                                <Icon name="external alternate" size="small"/>
                            </div>
                        </div>
                        
                    </div>

                    <div className="menu menu-1">
                        
                    </div>

                    <div className="menu menu-1">
                        
                    </div>

                    <div className="menu menu-1">
                        
                    </div>

                    <div className="menu menu-1">
                        
                    </div>

                    <div className="menu menu-1">
                        
                    </div>
                </div>
                <label for='bg'>
                        <div className="top-bottom-bg"> </div>
                </label>
            </>
        ); 
    }
}
export default Top;