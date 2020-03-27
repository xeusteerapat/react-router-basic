import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
const styleLayoutContent = {
  background: '#fff',
  padding: '24px',
  minHeight: '280px'
};
const demoTopLogo = {
  width: '120px',
  height: '31px',
  background: 'rgba(255, 255, 255, 0.2)',
  margin: '16px 24px 16px 0',
  float: 'left'
};
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>My Blog</h1>
        <div>
          <Layout className="layout">
            <Header>
              <div style={demoTopLogo} />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">
                  <Link to="/resume">Resume</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/login">Log in</Link>
                </Menu.Item>
                <Menu.Item key="3">About</Menu.Item>
                <Menu.Item key="4">Contact</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div style={styleLayoutContent}>
                <h2>Codecamp #5</h2>
                <p>
                  ร็อคยิมแจ็กพ็อตคาสิโนทำงาน มะกันโหงวสเตริโอภูมิทัศน์
                  แอคทีฟทัวริสต์ไฮเทคสุริยยาตร์แม็กกาซีน
                  ระโงกอัลตราแผดเผาแอร์เซ่นไหว้ สต๊อกคอนโทรลแอโรบิคเฮียแฟ้บ
                  บลูเบอร์รียอมรับไฮกุ เอาท์ แชมปิยองฟลุตจูเนียร์สต๊อก
                  โอยัวะสหัชญาณ วอลล์ธัมโมสเปค แรงใจ เหี่ยวย่นแยมโรลซีนีเพล็กซ์
                  สตูดิโอตังค์ สโตร์โปรน็อคโมเต็ล แชมปิยอง จิ๊กโก๋แชมป์จัมโบ้
                  ฮอตดอก ก๊วนโปรเจกเตอร์ซีนีเพล็กซ์โปรดิวเซอร์โรแมนติค
                  อัลมอนด์จ๊อกกี้น็อกเจ๊าะแจ๊ะ เซลส์คอนโด
                  ปาร์ตี้โบรชัวร์ออร์แกนิกแตงกวา จึ๊ก แดนเซอร์เอ็นทรานซ์
                  ตี๋อัลบั้ม โค้ชอาร์พีจี กรีนยูโรดีมานด์ แจ๊สเจ็ตรีโมท
                  สเปคเจ๊าะแจ๊ะสวีทต้าอ่วยอึ้ม เชอร์รี่
                  โฟล์คฮอตดอกโบรชัวร์ออดิชั่น ไฮเอนด์นินจาแบ็กโฮสต็อก
                  สต๊อคเอาต์ไอติมฮวงจุ้ย มอคคาโค้ชต่อยอด กรุ๊ป สวีทต่อยอดผ้าห่ม
                  ไฮไลท์อริยสงฆ์ตัวเองซิลเวอร์วิลล์ แทกติค เกจิแมนชั่นเทคโนงั้น
                  คณาญาติซัพพลาย คำสาป อึ๋มบูมบริกร เซ่นไหว้เอ๊าะ มายาคติ
                  ซิมโฟนี่ โมจิสหัสวรรษ คาแร็คเตอร์วัคค์แมชีนโปสเตอร์คอมพ์
                  วาริชศาสตร์แรลลี่เทควันโด เทรนด์เปปเปอร์มินต์เทค
                </p>
                <Button style={{ backgroundColor: '#52c41a', color: 'white' }}>
                  Read more
                </Button>
              </div>
              <div style={styleLayoutContent}>
                <h2>First Blog</h2>
                <p>
                  รองรับสตีลไรเฟิลแบด บ็อกซ์ฮวงจุ้ย
                  มอนสเตอร์แกรนด์โหลยโท่ยอัตลักษณ์
                  พาร์ตเนอร์แพ็คบ็อกซ์คาแรคเตอร์แฟนตาซี ไตรมาสดัมพ์อุปทาน
                  คอร์สเพรสซูมรีพอร์ทหล่อฮังก้วย
                  แรงใจคัตเอาต์คาวบอยช็อตกุมภาพันธ์ ช็อปกาญจน์ตัวเอง
                  โคโยตี้วอลนัทการันตีซี้บอดี้ ฮอตดอกบิ๊กจ๊าบเคลม เชฟ
                  แบรนด์สลัมแบรนด์ ปิโตรเคมี ลิมูซีน
                  วอฟเฟิลดีพาร์ตเมนต์ดิกชันนารี แพนด้าดีไซน์มอคคาวัคค์
                  ฮวงจุ้ยอุปนายิกาดยุค สเตเดียมสปิริตเยลลี่
                  เอเซียสมาพันธ์สโตร์วอลนัตฮิบรู โหลยโท่ยเทค
                  ซิมโฟนี่แยมโรลแบรนด์สเก็ตช์โดมิโน รามาธิบดี เทอร์โบโง่เขลา
                  เพียวภคันทลาพาธแชเชือนโปรดักชั่นควิก สตรอว์เบอร์รีสเตเดียม
                  ทัวร์นาเมนท์ซัมเมอร์ โอยัวะพฤหัสบูติก สหัสวรรษ
                  เอนทรานซ์มอบตัวสวีทโยเกิร์ตโฟน นางแบบ เซอร์วิสโปรดักชั่น
                  ออร์แกนบราพุทธภูมิหน่อมแน้มป๊อป
                </p>
                <Button style={{ backgroundColor: '#52c41a', color: 'white' }}>
                  Read more
                </Button>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Copy right ©2020 Created Teerapat
            </Footer>
          </Layout>
        </div>
      </div>
    );
  }
}
