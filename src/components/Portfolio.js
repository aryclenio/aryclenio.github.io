import React, { Component } from "react";
import { Row, Col } from "antd";
import { Card, Avatar, Button, Modal } from "antd";
import ImgsViewer from "react-images-viewer";
export default class Porfolio extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    const { Meta } = Card;
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
        <h1>Check Out Some of My Works.</h1>
        <Row type="flex" justify="center">
          {resumeData.portfolio &&
            resumeData.portfolio.map(item => {
              return (
                <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                  <Card
                    style={{ width: 300, marginBottom: 20 }}
                    bodyStyle={{ height: 200 }}
                    cover={<img alt="example" src={item.imgurl} />}
                    actions={[
                      <Button type="primary" icon="camera">
                        Images
                      </Button>,
                      <Button
                        type="dashed"
                        icon="github"
                        href={item.repo}
                        target="blank"
                      >
                        Repository
                      </Button>
                    ]}
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title={item.name}
                      description={item.description}
                    />
                  </Card>
                </Col>
              );
            })}
        </Row>
        <Row type="flex" justify="center">
          {resumeData.portfolio2 &&
            resumeData.portfolio2.map(item => {
              return (
                <Col xs={24} sm={24} md={12} lg={8} xl={6} key={item.repo}>
                  <Card
                    style={{ width: 300, marginBottom: 20 }}
                    bodyStyle={{ height: 200 }}
                    cover={<img alt="example" src={item.imgurl} />}
                    actions={[
                      <Button
                        type="primary"
                        icon="camera"
                        onClick={this.showModal}
                      >
                        Images
                      </Button>,
                      <Button
                        type="dashed"
                        icon="github"
                        href={item.repo}
                        target="blank"
                      >
                        Repository
                      </Button>
                    ]}
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title={item.name}
                      description={item.description}
                    />
                  </Card>
                </Col>
              );
            })}
        </Row>
        <Modal
          title="Basic Modal"
          centered
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <ImgsViewer
            imgs={[
              { src: "images/portfolio/ios.jpeg" },
              { src: "images/portfolio/ios.jpeg" }
            ]}
            isOpen={this.state.isOpen}
            onClickPrev={this.gotoPrevImg}
            onClickNext={this.gotoNextImg}
            onClose={this.closeImgsViewer}
          />
        </Modal>
      </section>
    );
  }
}
