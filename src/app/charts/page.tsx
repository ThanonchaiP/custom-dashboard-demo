"use client";

import { Button, Card, Flex, Table, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { useRouter } from "next/navigation";
import { useDataStore } from "@/store";
import { DeleteOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import dayjs from "dayjs";
import { dictionaryCharts } from "@/mock-data";

export default function ChartsPage() {
  const router = useRouter();
  const { charts, removeChart } = useDataStore();

  const columns: TableProps<(typeof charts)[0]>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Type",
      dataIndex: "chart",
      key: "type",
      align: "center",
      render: (text) => dictionaryCharts?.[text] ?? text,
    },
    {
      title: "Dataset",
      dataIndex: "dataset",
      key: "dataset",
    },
    {
      key: "date",
      title: "Created At",
      dataIndex: "date",
      render: (date) => dayjs(date).format("DD/MM/YYYY HH:mm"),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <DeleteOutlined
          className={css`
            cursor: pointer;
            color: red;
          `}
          onClick={() => removeChart(record.name)}
        />
      ),
    },
  ];

  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        className={css`
          padding: 16px;
          background-color: #fff;
          position: sticky;
          top: 0;
          left: 0;
          border-bottom: 1px solid rgb(224, 224, 224);
          z-index: 99;
        `}
      >
        <Typography.Title level={2} style={{ margin: 0 }}>
          Charts
        </Typography.Title>
        <Button
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => router.push("/charts/add")}
        >
          CHART
        </Button>
      </Flex>

      <Card style={{ margin: 16 }}>
        <Table rowKey="name" columns={columns} dataSource={charts} />
      </Card>
    </>
  );
}
