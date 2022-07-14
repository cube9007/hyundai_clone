import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Icon, Dropdown, Divider, Accordion } from 'semantic-ui-react';

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
import suv1 from "../../assets/img/suv1.png";
import suv2 from "../../assets/img/suv2.png";
import suv3 from "../../assets/img/suv3.png";
import suv4 from "../../assets/img/suv4.png";
import suv5 from "../../assets/img/suv5.png";
import suv6 from "../../assets/img/suv6.png";
import suv7 from "../../assets/img/suv7.png";
import suv8 from "../../assets/img/suv8.png";
import mpv1 from "../../assets/img/mpv1.png";
import mpv2 from "../../assets/img/mpv2.png";
import mpv3 from "../../assets/img/mpv3.png";
import mpv4 from "../../assets/img/mpv4.png";
import mpv5 from "../../assets/img/mpv5.png";
import mpv6 from "../../assets/img/mpv6.png";
import elec1 from "../../assets/img/elec1.png";
import elec2 from "../../assets/img/elec2.png";
import elec3 from "../../assets/img/elec3.png";
import elec4 from "../../assets/img/elec4.png";
import n1 from "../../assets/img/n1.png";
import n2 from "../../assets/img/n2.png";
import n3 from "../../assets/img/n3.png";
import n4 from "../../assets/img/n4.png";
import n5 from "../../assets/img/n5.png";
import n6 from "../../assets/img/n6.png";
import n7 from "../../assets/img/n7.png";
import n8 from "../../assets/img/n8.png";
import taxi1 from "../../assets/img/taxi1.png";
import taxi2 from "../../assets/img/taxi2.png";
import taxi3 from "../../assets/img/taxi3.png";
import taxi4 from "../../assets/img/taxi4.png";
import taxi5 from "../../assets/img/taxi5.png";


class TopTop extends Component {
    render() {
        return (
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
        )
    }
};

class TopBottom extends Component {
    render() {
        return (
            <div className="top-bottom">
                <a>
                    <img src={logo} />
                </a>
                
                <label className="menu-label1" for='menu1'>
                    <p> 모델 </p>
                </label>
                <label className="menu-label2" for='menu2'>
                    <p> 구매정보 </p>
                </label>
                <label className="menu-label3" for='menu3'>
                    <p> 멤버쉽•차량관리 </p>
                </label>
                <label className="menu-label4" for='menu4'>
                    <p> 이벤트 </p>
                </label>
                <label className="menu-label5" for='menu5'>
                    <p> 고객지원 </p>
                </label>
                <label className="menu-label6" for='menu6'>
                    <p> 브랜드 </p>
                </label>
                <label className="menu-label7" for='menu7'>
                    <p> 회사소개 </p>
                </label>
                <a href="/"> 
                    <img src={shop} />
                </a>
            </div>
        )
    }
};

class Menu1Car extends Component {
    render() {
        return (
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
        )
    }
};

class Menu1SUV extends Component {
    render() {
        return (
            <div className="menu-1-hover2">
                <div >
                    <div className="menu-1-hover2-SUV">
                        <img src={suv1} />
                        <p>펠리세이드</p>
                        <p>3,867만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover2-SUV">
                        <img src={suv2} />
                        <p>베뉴</p>
                        <p>1,689만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover2-SUV">
                        <img src={suv3} />
                        <p>코나</p>
                        <p>2,144만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover2-SUV">
                        <img src={suv4} />
                        <p>코나 Hybrid</p>
                        <p>2,558만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="menu-1-hover2-SUV">
                        <img src={suv5} />
                        <p>투싼</p>
                        <p>2,435만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover2-SUV">
                        <img src={suv6} />
                        <p>투싼 Hybrid</p>
                        <p>2,857만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover2-SUV">
                        <img src={suv7} />
                        <p>싼타페</p>
                        <p>3,156만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover2-SUV">
                        <img src={suv8} />
                        <p>싼타페 Hybrid</p>
                        <p>3,414만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

class Menu1MPV extends Component {
    render() {
        return (
            <div className="menu-1-hover3">
                <div >
                    <div className="menu-1-hover3-MPV">
                        <img src={mpv1} />
                        <p>스타리아 라운지</p>
                        <p>3,631만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover3-MPV">
                        <img src={mpv2} />
                        <p>스타리아</p>
                        <p>2,516만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover3-MPV">
                        <img src={mpv3} />
                        <p>스타리아 킨더</p>
                        <p>3,478만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover3-MPV">
                        <img src={mpv4} />
                        <p>스타리아 라운지 캠퍼</p>
                        <p>4,947만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="menu-1-hover3-MPV">
                        <img src={mpv5} />
                        <p>스타리아 라운지 리무진</p>
                        <p>5,792만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover3-MPV">
                        <img src={mpv6} />
                        <p>포터 || 포레스트</p>
                        <p>4,899만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
};

class Menu1Elec extends Component {
    render() {
        return (
            <div className="menu-1-hover4">
                <div >
                    <div className="menu-1-hover4-Elec">
                        <img src={elec1} />
                        <p>넥쏘</p>
                        <p>6,765만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover4-Elec">
                        <img src={elec2} />
                        <p>아이오닉 5</p>
                        <p>4,695만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover4-Elec">
                        <img src={elec3} />
                        <p>포터 || Electric</p>
                        <p>4,190만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover4-Elec">
                        <img src={elec4} />
                        <p>포터 || Electric 특장차</p>
                        <p>4,578만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

class Menu1N extends Component {
    render() {
        return (
            <div className="menu-1-hover5">
                <div >
                    <div className="menu-1-hover5-N">
                        <img src={n1} />
                        <p>벨로스터 N</p>
                        <p>3,019만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover5-N">
                        <img src={n2} />
                        <p>아반떼 N</p>
                        <p>3,212만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover5-N">
                        <img src={n3} />
                        <p>코나 N</p>
                        <p>3,418만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover5-N">
                        <img src={n4} />
                        <p>아반떼 N Line</p>
                        <p>2,318만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="menu-1-hover5-N">
                        <img src={n5} />
                        <p>쏘나타 N Line</p>
                        <p>3,074만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover5-N">
                        <img src={n6} />
                        <p>코나 N Line</p>
                        <p>2,815만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover5-N">
                        <img src={n7} />
                        <p>투싼 N Line</p>
                        <p>3,009만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover5-N">
                        <img src={n8} />
                        <p>투싼 N Line Hybrid</p>
                        <p>3,474만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

class Menu1Taxi extends Component {
    render() {
        return (
            <div className="menu-1-hover6">
                <div >
                    <div className="menu-1-hover6-taxi">
                        <img src={taxi1} />
                        <p>스타리아 라운지 모빌리티</p>
                        <p>3,971만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover6-taxi">
                        <img src={taxi2} />
                        <p>쏘나타 택시</p>
                        <p>1,945만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover6-taxi">
                        <img src={taxi3} />
                        <p>그렌져 택시</p>
                        <p>2,731만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                    <div className="menu-1-hover6-taxi">
                        <img src={taxi4} />
                        <p>포터 ||</p>
                        <p>1,804만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="menu-1-hover6-taxi">
                        <img src={taxi5} />
                        <p>포터 || 특장차</p>
                        <p>2,101만원~</p>
                        <div>
                            <p>자세히 보기</p>
                            <p>내 차 만들기 </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

class Menu1 extends Component {
    render() {
        return (
            <div className="menu menu-1">
                <div>
                    <div>
                        <p className="menu-1-title">모델정보</p>
                        <div className="menu-1-name">
                            <p> 승용 </p>
                            <Icon name="angle right" />
                            <Menu1Car />
                        </div>
                        <div className="menu-1-name">
                            <p> SUV </p>
                            <Icon name="angle right" />
                            <Menu1SUV />
                        </div>
                        <div className="menu-1-name">
                            <p> MPV </p>
                            <Icon name="angle right" />
                            <Menu1MPV />
                        </div>
                        <div className="menu-1-name">
                            <p> 수소•전기차 </p>
                            <Icon name="angle right" />
                            <Menu1Elec />
                        </div>
                        <div className="menu-1-name">
                            <p> N•N Line</p>
                            <Icon name="angle right" />
                            <Menu1N />
                        </div>
                        <div className="menu-1-name">
                            <p> 소형상용•택시 </p>
                            <Icon name="angle right" />
                            <Menu1Taxi />
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
            </div>
        )
    }
};

class Menu2 extends Component {
    render() {
        return (
            <div className="menu menu-2">
                <div className="flex">
                    <ul>
                        <li>내 차 만들기(견적)</li>
                        <li> 내 차 만들기 </li>
                        <li> 간편 할부 계산기 </li>
                    </ul>
                    <ul>
                        <li>판매 / 시승 네트워크</li>
                        <li> 판매 / 시승 네트워크 검색 </li>
                        <li> 신규 전시장 안내 </li>
                    </ul>
                    <ul>
                        <li>구매 상담 신청</li>
                    </ul>
                    <ul>
                        <li>시승 신청</li>
                    </ul>
                    <ul>
                        <li>이 달의 구매 혜택</li>
                    </ul>
                </div>
                <div className="flex">
                    <ul>
                        <li>내 차 추천받기</li>
                    </ul>
                    <ul>
                        <li>모델 비교</li>
                    </ul>
                    <ul>
                        <li>상세 모델 검색</li>
                    </ul>
                    <ul>
                        <li>카탈로그 / 가격표 </li>
                    </ul>
                    <ul>
                        <li>구매 가이드</li>
                        <li>구매 절차</li>
                        <li>제도 및 규정</li>
                        <li>장애인 차량 구매 가이드</li>
                    </ul>
                </div>
            </div>
        )
    }
};

class Menu3 extends Component {
    render() {
        return (
            <div className="menu menu-3">
                <div className="flex">
                    <ul>
                        <li>MyHyundai</li>
                        <li>서비스 소개</li>
                    </ul>
                    <ul>
                        <li>블루멤버스</li>
                        <li>블루멤버스 소개 </li>
                        <li>Hyundai Mobility 카드</li>
                        <li>차량관리 안내</li>
                        <li>블루멤버스 포인트</li>
                        <li>특화 프로그램</li>
                        <li>EV 충전솔루션</li>
                        <li>블루멤버스 실 운행자 차량 등록</li>
                    </ul>
                    <ul>
                        <li>현대 디지털 키</li>
                        <li>현대 디지털 키 1</li>
                        <li>현대 디지털 키 2</li>
                    </ul>
                    <ul>
                        <li>현대 카페이</li>
                        <li>현대 카페어 소개</li>
                        <li>제휴사</li>
                        <li>고객 지원</li>
                    </ul>
                    <ul>
                        <li>차량 관리 서비스</li>
                        <li>내비게이션 / 빌트인 캠 업데이트 </li>
                        <li>사양 조회하기</li>
                        <li>보증수리 안내</li>
                        <li>보증연장 상품</li>
                        <li>스마트기기 연계서비스</li>
                        <li>홈투홈 서비스</li>
                        <li>찾아가는 충전서비스</li>
                        <li>찾아가는 비포서비스 </li>
                        <li>차량점검 서비스</li>
                        <li>긴급출동 서비스</li>
                        <li>중고차</li>
                        <li>친환경 폐차</li>
                        <li>부품가격조회</li>
                        <li>자동차 교환환불제도 안내</li>
                    </ul>
                </div>
                <div className="flex">
                    <ul>
                        <li>현대 Shop</li>
                        <li>현대 Shop <Icon name='external alternate' size="small"/></li>
                        <li>서비스 소개</li>
                    </ul>
                    <ul>
                        <li>블루링크</li>
                        <li>서비스 소개</li>
                        <li>가입 / 이용 안내</li>
                        <li>고객센터 및 A/S 안내</li>
                        <li>현대 디지털 키 2</li>
                        <li>Hyundai N App</li>
                    </ul>
                    <ul>
                        <li>현대컬렉션</li>
                        <li>서비스 소개</li>
                    </ul>
                    <ul>
                        <li>운전결심</li>
                        <li>서비스 소개</li>
                    </ul>
                </div>
            </div>
        )
    }
};

class Menu4 extends Component {
    render() {
        return (
            <div className="menu menu-4">
                <div className="flex">
                    <ul>
                        <li>진행중인 이벤트</li>
                    </ul>
                    <ul>
                        <li>지난 이벤트</li>
                    </ul>
                </div>
            </div>
        )
    }
};

class Menu5 extends Component {
    render() {
        return (
            <div className="menu menu-5">
                <div className="flex">
                    <ul>
                        <li>고객센터</li>
                        <li>자주하는질문(FAQ)</li>
                        <li>1:1문의</li>
                    </ul>
                    <ul>
                        <li>지난 이벤트</li>
                        <li>서비스 네트워크 소개</li>
                        <li>서비스 예약안내(ARS)</li>
                        <li>서비스 네트워크 검색/예약</li>
                        <li>블루헨즈 안내</li>
                        <li>서비스 기술교육 소개</li>
                    </ul>
                    <ul>
                        <li>공지사항</li>
                    </ul>
                    <ul>
                        <li>사용설명서/동영상</li>
                        <li>사용설명서 다운로드(자료실)</li>
                        <li>How-To 동영상</li>
                        <li>아이오닉 디지털 오너스 메뉴얼</li>
                        <li>자동차 사양백과</li>
                    </ul>
                </div>
            </div>
        )
    }
};

class Menu6 extends Component {
    render() {
        return (
            <div className="menu menu-6">
                <div className="flex">
                    <ul>
                        <li>브랜드 스토리</li>
                        <li>브랜드 철학</li>
                        <li>Campaigns</li>
                        <li>TECH</li>
                        <li>Design</li>
                        <li>HYUNDAI COLLECTION</li>
                    </ul>
                    <ul>
                        <li>공장 소개</li>
                        <li>공장 소개</li>
                        <li>공장 견학 예약</li>
                    </ul>
                    <ul>
                        <li>현장 모터스튜디오</li>
                    </ul>
                    <ul>
                        <li>Heritage</li>
                        <li>Lineage of Hyundai Car</li>
                        <li>Model</li>
                    </ul>
                    <ul>
                        <li>고객소통채널 H-ear</li>
                        <li>서비스 소개</li>
                    </ul>
                </div>
                <div className="flex">
                    <ul>
                        <li>드라이빙 익스피리언스</li>
                    </ul>
                    <ul>
                        <li>모터스포츠</li>
                        <li>WRC</li>
                        <li>WTCR</li>
                        <li>뉘르부르크링 24시</li>
                    </ul>
                </div>
            </div>
        )
    }
};

class Menu7 extends Component {
    render() {
        return (
            <div className="menu menu-7">
                <div className="flex">
                    <ul>
                        <li>기업 정보</li>
                        <li>기업 이념</li>
                        <li>연혁</li>
                        <li>주요관계사</li>
                        <li>CI</li>
                        <li>수상내역</li>
                    </ul>
                    <ul>
                        <li>사업망</li>
                        <li>국내</li>
                        <li>글로벌 R&amp;D 네트워크</li>
                    </ul>
                    <ul>
                        <li>IR 정보</li>
                        <li>경영정보</li>
                        <li>재무정보</li>
                        <li>판매실적</li>
                        <li>공시</li>
                        <li>주식정보</li>
                        <li>IR현황</li>
                        <li>배당조회</li>

                    </ul>
                    <ul>
                        <li>지속가능경영</li>
                        <li>지속가능경영</li>
                        <li>CSV 소개</li>
                        <li>스토리</li>
                    </ul>
                    <ul>
                        <li>홍보실</li>
                        <li>뉴스 &amp; 공지</li>
                    </ul>
                </div>
                <div className="flex">
                    <ul>
                        <li>커리어</li>
                        <li>채용홈페이지</li>
                    </ul>
                    <ul>
                        <li>보고서</li>
                        <li>지속가능성</li>
                        <li>사회공헌백서</li>
                    </ul>
                </div>
            </div>
        )
    }
};

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
                    <TopTop />
                    <Divider className="fullwidth margin0" />
                    <TopBottom />
                    <Divider className="fullwidth margin0" />
                    <Menu1 />
                    <Menu2 />
                    <Menu3 />
                    <Menu4 />
                    <Menu5 />
                    <Menu6 />
                    <Menu7 />
                </div>
                <label for='bg'>
                        <div className="top-bottom-bg"> </div>
                </label>
            </>
        ); 
    }
};
export default Top;