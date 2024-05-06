import { css } from "@emotion/css";
import { Flex, Form, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useCreateChartStore } from "@/store";
import { RightOutlined } from "@ant-design/icons";
import { columns } from "../chart-source-bar/mock-data";
import { useCallback } from "react";
import { CloseOutlined } from "@ant-design/icons";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd";

export const TabQuery = () => {
  const { column, setDraftColumn, removeDraftColumn, setDraftColumns } =
    useCreateChartStore();

  const getBackgroundColor = useCallback(
    (passKey: string) => {
      const alreadySelected = column.data.find(
        (item) => item.name === column.selectedColumn?.name
      );

      if (
        (column.isDragging && column.selectedColumn?.key !== passKey) ||
        alreadySelected
      ) {
        return {
          backgroundColor: "#ffd0d0",
          border: "1px solid #ffabab",
        };
      } else if (column.isDragging && column.selectedColumn?.key === passKey) {
        return {
          backgroundColor: "rgb(228, 242, 254)",
          border: "1px dashed #84c2f8",
        };
      }

      return {
        backgroundColor: "unset !important",
        border: "1px solid #eaeaea",
      };
    },
    [column.data, column.isDragging, column.selectedColumn]
  );

  const onDropColumn = (columnName: string) => {
    const alreadySelected = column.data.find(
      (item) => item.name === column.selectedColumn?.name
    );

    if (alreadySelected) return;

    const selectedColumn = columns.find((column) => column.name === columnName);
    if (selectedColumn === undefined) return;
    setDraftColumn(selectedColumn);
  };

  const onDropSort = (params: DropResult) => {
    const { source, destination } = params;
    let _arr = [...column.data];
    //extracting the source item from the list
    const _item = _arr.splice(source.index, 1)[0];
    //inserting it at the destination index.

    if (!destination) return;

    _arr.splice(destination.index, 0, _item);
    setDraftColumns(_arr);
  };

  return (
    <Form
      layout="vertical"
      className={css`
        .ant-form-item {
          margin-bottom: 12px !important;
        }

        .ant-form-item-label label {
          color: #666666;
          font-size: 12px;
          text-transform: uppercase;
        }

        .ant-form-item-label {
          padding: 0;
          text-transform: uppercase;
        }
      `}
    >
      <Form.Item label="Columns">
        <DragDropContext onDragEnd={onDropSort}>
          <Droppable droppableId="data_column">
            {(provided) => (
              <Flex
                gap={4}
                vertical
                className={css`
                  border: 1px solid #d9d9d9;
                  padding: 4px;
                  border-radius: 4px;
                  ${getBackgroundColor("column")}
                `}
                onDrop={(drop) => {
                  onDropColumn(drop.dataTransfer.getData("columnId"));
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.dataTransfer.dropEffect = "move";
                }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {column.data?.map((column, index) => (
                  <Draggable
                    index={index}
                    key={column.name}
                    draggableId={`${column.name}`}
                  >
                    {(draggableProvider) => (
                      <Flex
                        key={column.name}
                        align="center"
                        justify="space-between"
                        className={css`
                          padding: 5px 16px;
                          cursor: pointer;
                          background-color: #f7f7f7;
                          border-radius: 4px;

                          &:hover {
                            background-color: #f0f0f0;
                          }
                        `}
                        draggable
                        // onDragStart={(drag) => {
                        //   console.log(drag);
                        //   //   drag.dataTransfer.setData("columnId", column.key);
                        // }}
                        // onDrop={(drop) => {
                        //   console.log(drop);
                        // }}
                        // onDragOver={(e) => {
                        //   console.log(e);
                        // }}
                        ref={draggableProvider.innerRef}
                        {...draggableProvider.draggableProps}
                        {...draggableProvider.dragHandleProps}
                      >
                        <Flex align="center" gap={12}>
                          <CloseOutlined
                            style={{ fontSize: 12, color: "#333333" }}
                            onClick={() => removeDraftColumn(column)}
                          />
                          <Typography.Text
                            className={css`
                              font-size: 12px;
                              color: #333333;
                              overflow: hidden;
                              text-overflow: ellipsis;
                              white-space: nowrap;
                            `}
                          >
                            {column.name}
                          </Typography.Text>
                        </Flex>
                        <RightOutlined
                          style={{ fontSize: 12, color: "#333333" }}
                        />
                      </Flex>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <Flex
                  gap={4}
                  className={css`
                    border: 1px dashed #f7f7f7;
                    padding: 4px 8px;
                    font-size: 12px;
                    color: rgb(178, 178, 178);
                    border: 1px dashed rgb(224, 224, 224);
                    border-radius: 4px;
                    cursor: pointer;

                    &:hover {
                      background-color: #fafafa;
                    }
                  `}
                >
                  <PlusOutlined />
                  Drop columns here or click
                </Flex>
              </Flex>
            )}
          </Droppable>
        </DragDropContext>
      </Form.Item>
    </Form>
  );
};
