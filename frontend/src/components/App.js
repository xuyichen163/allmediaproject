import React from 'react';
// import ReactDOM from 'react-dom'; 
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  // DesktopOutlined,
  PieChartOutlined,
  // FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
// import CardList from "./components/CardList";
import HomePage from "./HomePage";
import ScriptPub from "./ScriptPub";
import UserGroup from "./UserGroup";
import PersonalAuth from './PersonalAuth';
import Setting from './Setting';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SelectedComponent extends React.Component{

  state = {
    id:"1"
  }
  render(){
    let id = this.state.id;
    // console.log(id);
    if (id === '1'){
      return <HomePage />
    }else if (id === '2'){
      return <ScriptPub />
    }else if (id === "3"){
      return null
    }else if (id === "4"){
      return null
    }else if (id === "5"){
      return <UserGroup />
    }else if (id === "6"){
      return null
    }else if (id === "7"){
      return null
    }else if (id === "8"){
      return null
    }else if (id === "9"){
      return null
    }else if (id === "10"){
      return null
    }else if (id === "11"){
      return null
    }else if (id === "12"){
      return null
    }else if (id === "13"){
      return null
    }else if (id === "14"){
      return <PersonalAuth />
    }else if (id === "15"){
      return null
    }else if (id === "16"){
      return null
    }else if (id === "17"){
      return null
    }else if (id === "18"){
      return null
    }else if (id === "19"){
      return <Setting />
    }
  }

}


class SiderDemo extends React.Component {
    state = {
      collapsed: false,
    };

    onCollapse = collapsed => {
      // console.log(collapsed);
      this.setState({ collapsed });
    };
    // 点击在content页面展示
    redirectContent = (e) => {
      
      // console.log(this.refs.centerContent)
      let centerContent = this.refs.centerContent;
      let firstDir = this.refs.firstDir;
      let secondDir = this.refs.secondDir;
      console.log(firstDir)
      centerContent.setState({
        id: e.key
      });
      console.log(e);
      // firstText = e.item.props.children[1].props.children item
      // firstText = e.item.props.children[1] subitem
      // if ant-menu-item-only-child  in item.props.className 需要secondText 
      // secondText = e.item.props.parentMenu.props.title.props.children[1].props.children
      let flag =  "ant-menu-item-only-child";
      console.log(e.item.props.className.split(' '))
      let firstText = "";
      let secondText = "";
      if (flag === e.item.props.className.split(' ')[0]){
        firstText = e.item.props.children[1];
        secondText = e.item.props.parentMenu.props.title.props.children[1].props.children;
        firstDir.innerText = secondText;
        secondDir.innerText = firstText;
      }else{
        firstText = e.item.props.children[1].props.children;
        firstDir.innerText = firstText;
        secondDir.innerText = "";
      }



    };


    // 渲染完成
    componentDidMount(){

    }

    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo">
              <div>全媒体工作台</div>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />} onClick={this.redirectContent}>
                主页
              </Menu.Item>
              <SubMenu key="sub1" icon={<TeamOutlined />} title="稿件">
                <Menu.Item key="2" onClick={this.redirectContent}>已发布</Menu.Item>
                <Menu.Item key="3" onClick={this.redirectContent}>未通过</Menu.Item>
                <Menu.Item key="4" onClick={this.redirectContent}>已保存</Menu.Item>
              </SubMenu>
              <Menu.Item key="5" icon={<PieChartOutlined />} onClick={this.redirectContent}>
                人员
              </Menu.Item>
              <Menu.Item key="6" icon={<PieChartOutlined />} onClick={this.redirectContent}>
                稿件审核
              </Menu.Item>
              <SubMenu key="sub2" icon={<UserOutlined />} title="任务">
                <Menu.Item key="7" onClick={this.redirectContent} >已完成</Menu.Item>
                <Menu.Item key="8" onClick={this.redirectContent} >未完成</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<TeamOutlined />} title="素材">
                <Menu.Item key="9" onClick={this.redirectContent}>图片</Menu.Item>
                <Menu.Item key="10" onClick={this.redirectContent}>视频</Menu.Item>
                <Menu.Item key="11" onClick={this.redirectContent}>音频</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" icon={<UserOutlined />} title="消息提醒">
                <Menu.Item key="12" onClick={this.redirectContent}>已完成</Menu.Item>
                <Menu.Item key="13" onClick={this.redirectContent}>未完成</Menu.Item>
                
              </SubMenu>
              <SubMenu key="sub5" icon={<TeamOutlined />} title="权限认证">
                <Menu.Item key="14" onClick={this.redirectContent}>个人认证</Menu.Item>
                <Menu.Item key="15" onClick={this.redirectContent}>企业认证</Menu.Item>
                <Menu.Item key="16" onClick={this.redirectContent}>媒体认证</Menu.Item>
              </SubMenu>
              <SubMenu key="sub6" icon={<TeamOutlined />} title="认证审核">
                <Menu.Item key="17" onClick={this.redirectContent}>已完成</Menu.Item>
                <Menu.Item key="18" onClick={this.redirectContent}>未完成</Menu.Item>
              </SubMenu>
              <Menu.Item key="19" icon={<PieChartOutlined />} onClick={this.redirectContent}>
                设置
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item ><span ref="firstDir">主页</span></Breadcrumb.Item>
                <Breadcrumb.Item ><span ref="secondDir"></span></Breadcrumb.Item>
              </Breadcrumb>
              <div id="centerContent" className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <SelectedComponent id="1"  ref="centerContent"/>
                {/* <ScriptPub /> */}
                
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
          </Layout>
        </Layout>
      );
    }
}


export default SiderDemo;
