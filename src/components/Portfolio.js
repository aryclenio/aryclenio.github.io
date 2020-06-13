import React, { Component } from "react";
import { Row, Col } from "antd";
import { Card, Avatar, Button, Tabs, Icon } from "antd";
export default class Porfolio extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    const { Meta } = Card;
    const { TabPane } = Tabs;
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
        <h1>Check Out Some of My Works.</h1>

        <Tabs defaultActiveKey="tab1">
          <TabPane
            tab={
              <span>
                <Icon type="radar-chart" />
                REACT.JS
              </span>
            }
            key="tab1"
          >
            <Row type="flex" justify="center">
              {resumeData.react &&
                resumeData.react.map((item) => {
                  return (
                    <Col xs={24} sm={24} md={12} lg={8} xl={6} key={item.repo}>
                      <Card
                        style={{ width: 300, marginBottom: 20 }}
                        bodyStyle={{ height: 200 }}
                        cover={<img alt="example" src={item.imgurl} />}
                        actions={[
                          <Button
                            type="dashed"
                            icon="github"
                            href={item.repo}
                            target="blank"
                          >
                            Repository
                          </Button>,
                        ]}
                      >
                        <Meta
                          avatar={<Avatar src="images/profile.jpeg" />}
                          title={item.name}
                          description={item.description}
                        />
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="android" />
                REACT NATIVE
              </span>
            }
            key="tab2"
          >
            <Row type="flex" justify="center">
              {resumeData.reactnative &&
                resumeData.reactnative.map((item) => {
                  return (
                    <Col xs={24} sm={24} md={12} lg={8} xl={6} key={item.repo}>
                      <Card
                        style={{ width: 300, marginBottom: 20 }}
                        bodyStyle={{ height: 200 }}
                        cover={<img alt="example" src={item.imgurl} />}
                        actions={[
                          <Button
                            type="dashed"
                            icon="github"
                            href={item.repo}
                            target="blank"
                          >
                            Repository
                          </Button>,
                        ]}
                      >
                        <Meta
                          avatar={<Avatar src="images/profile.jpeg" />}
                          title={item.name}
                          description={item.description}
                        />
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="html5" />
                PURE
              </span>
            }
            key="tab3"
          >
            <Row type="flex" justify="center">
              {resumeData.pug &&
                resumeData.pug.map((item) => {
                  return (
                    <Col xs={24} sm={24} md={12} lg={8} xl={6} key={item.repo}>
                      <Card
                        style={{ width: 300, marginBottom: 20 }}
                        bodyStyle={{ height: 200 }}
                        cover={<img alt="example" src={item.imgurl} />}
                        actions={[
                          <Button
                            type="dashed"
                            icon="github"
                            href={item.repo}
                            target="blank"
                            disabled={item.disabled}
                          >
                            Repository
                          </Button>,
                        ]}
                      >
                        <Meta
                          avatar={<Avatar src="images/profile.jpeg" />}
                          title={item.name}
                          description={item.description}
                        />
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="experiment" />
                BACK-END
              </span>
            }
            key="tab4"
          >
            <Row type="flex" justify="center">
              {resumeData.backend &&
                resumeData.backend.map((item) => {
                  return (
                    <Col
                      xs={24}
                      sm={24}
                      md={12}
                      lg={8}
                      xl={6}
                      key={item.imgurl}
                    >
                      <Card
                        style={{ width: 300, marginBottom: 20 }}
                        bodyStyle={{ height: 200 }}
                        cover={<img alt="example" src={item.imgurl} />}
                        actions={[
                          <Button
                            type="dashed"
                            icon="github"
                            href={item.repo}
                            target="blank"
                            disabled={item.disabled}
                          >
                            Repository
                          </Button>,
                        ]}
                      >
                        <Meta
                          avatar={<Avatar src="images/profile.jpeg" />}
                          title={item.name}
                          description={item.description}
                        />
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="experiment" />
                OTHER LANGUAGES
              </span>
            }
            key="tab5"
          >
            <Row type="flex" justify="center">
              {resumeData.other &&
                resumeData.other.map((item) => {
                  return (
                    <Col
                      xs={24}
                      sm={24}
                      md={12}
                      lg={8}
                      xl={6}
                      key={item.imgurl}
                    >
                      <Card
                        style={{ width: 300, marginBottom: 20 }}
                        bodyStyle={{ height: 200 }}
                        cover={<img alt="example" src={item.imgurl} />}
                        actions={[
                          <Button
                            type="dashed"
                            icon="github"
                            href={item.repo}
                            target="blank"
                          >
                            Repository
                          </Button>,
                        ]}
                      >
                        <Meta
                          avatar={<Avatar src="images/profile.jpeg" />}
                          title={item.name}
                          description={item.description}
                        />
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </TabPane>
        </Tabs>
      </section>
    );
  }
}
