import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography;

const data = [
  {
    ticketNo: 33,
    escritorio: 3,
    agente: "Fernando Herrera",
  },
  {
    ticketNo: 34,
    escritorio: 4,
    agente: "Melissa Flores",
  },
  {
    ticketNo: 35,
    escritorio: 5,
    agente: "Carlos Castro",
  },
  {
    ticketNo: 36,
    escritorio: 3,
    agente: "Fernando Herrera",
  },
  {
    ticketNo: 37,
    escritorio: 3,
    agente: "Fernando Herrera",
  },
  {
    ticketNo: 38,
    escritorio: 2,
    agente: "Melissa Flores",
  },
  {
    ticketNo: 39,
    escritorio: 5,
    agente: "Carlos Castro",
  },
];

export const Line = () => {
  useHideMenu(true);

  return (
    <>
      <Title level={1}>Attending the queue</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 10 }}
                  actions={[
                    <Tag color="volcano"> {item.agente}</Tag>,
                    <Tag color="magenta">Desktop: {item.escritorio}</Tag>,
                  ]}
                >
                  <Title>No. {item.ticketNo}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial </Divider>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket #${item.ticketNo}`}
                  description={
                    <>
                      <Text type="secondary">Desktop: </Text>
                      <Tag color="magenta">{item.escritorio}</Tag>
                      <Text type="secondary">Agent: </Text>
                      <Tag color="volcano"> {item.agente}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
