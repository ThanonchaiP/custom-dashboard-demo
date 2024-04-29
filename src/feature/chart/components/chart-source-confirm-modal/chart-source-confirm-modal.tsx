"use client";

import { useCreateChartStore, useDataStore } from "@/store";
import { Form, Input } from "antd";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Modal = dynamic(() => import("antd/lib/modal"), { ssr: false });

const { Item } = Form;

type ChartSourceConfirmModalProps = {
  open: boolean;
  onClose: () => void;
};

export const ChartSourceConfirmModal = ({
  open,
  onClose,
}: ChartSourceConfirmModalProps) => {
  const [form] = Form.useForm();
  const router = useRouter();

  const { data, clearData } = useCreateChartStore();
  const { addChart } = useDataStore();

  const onSubmit = async () => {
    await form.validateFields();
    const values = form.getFieldsValue();

    addChart({
      ...values,
      ...data,
      chart: data.key,
      date: new Date().toISOString(),
    });
    clearData();
    onClose();
    router.push("/charts");
  };

  useEffect(() => {
    if (open) form.resetFields();
  }, [form, open]);

  return (
    <Modal
      open={open}
      centered
      title="Save chart"
      onCancel={onClose}
      onOk={onSubmit}
    >
      <Form layout="vertical" form={form}>
        <Item
          label="CHART NAME"
          name="name"
          rules={[{ required: true, message: "Please enter chart name" }]}
        >
          <Input />
        </Item>
      </Form>
    </Modal>
  );
};
