import { colorOptions, colorsScheme } from "@/mock-data/colors";
import { css } from "@emotion/css";
import { Flex, Form, Select, Tooltip, Typography } from "antd";

export const ChartColorFormItem = () => {
  return (
    <Form.Item label="COLOR SCHEME" name="color" initialValue="vintage">
      <Select
        options={colorOptions.map((item) => ({
          label: (
            <Tooltip
              title={
                <>
                  <Typography.Text style={{ color: "#fff", fontSize: 12 }}>
                    {item.label}
                  </Typography.Text>
                  <Flex
                    align="center"
                    gap={2}
                    className={css`
                      text-overflow: ellipsis;
                      overflow: hidden;
                      white-space: nowrap;
                      padding-bottom: 4px;
                    `}
                  >
                    {colorsScheme?.[item.value].map((item, index) => (
                      <span
                        key={index}
                        className={css`
                          min-width: 9px;
                          width: 9px;
                          height: 10px;
                          white-space: nowrap;
                          background-color: ${item};
                        `}
                      />
                    ))}
                  </Flex>
                </>
              }
            >
              <Flex align="center" gap={16}>
                <Typography.Text
                  className={css`
                    min-width: 87px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  `}
                >
                  {item.label}
                </Typography.Text>
                <Flex
                  align="center"
                  gap={2}
                  className={css`
                    flex: 1 1 100%;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  `}
                >
                  {colorsScheme?.[item.value].map((item, index) => (
                    <span
                      key={index}
                      className={css`
                        min-width: 9px;
                        width: 9px;
                        height: 10px;
                        white-space: nowrap;
                        background-color: ${item};
                      `}
                    />
                  ))}
                </Flex>
              </Flex>
            </Tooltip>
          ),
          value: item.value,
        }))}
        placeholder="Select..."
      />
    </Form.Item>
  );
};
