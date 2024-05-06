// "use client";

// import { css } from "@emotion/css";
// import { Flex, Typography } from "antd";
// import { HolderOutlined } from "@ant-design/icons";
// import uniqBy from "lodash/uniqBy";

// import { columns } from "./mock-data";
// import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
// import { useState } from "react";

// export const ChartSourceBarColumn = () => {
//   const [state, setState] = useState<typeof columns>([]);
//   const [isDragging, setIsDragging] = useState(false);

//   const handleDragEnd = (result: any) => {
//     if (!result.destination) return;

//     const list = columns.filter((item) => item.name === result.draggableId);
//     setState((prev) => {
//       return uniqBy([...prev, ...list], (option) => option.name);
//     });
//     // setIsDragging(false);
//   };

//   return (
//     <>
//       <Typography.Paragraph
//         className={css`
//           margin-bottom: 8px;
//           font-size: 12px;
//           color: rgb(178, 178, 178);
//         `}
//       >
//         Showing 11 of 11
//       </Typography.Paragraph>

// <DragDropContext
//   onDragEnd={handleDragEnd}
//   onDragStart={() => setIsDragging(true)}
// >
//         <Droppable droppableId="column" isDropDisabled>
//           {(droppableProvider) => (
//             <Flex
//               vertical
//               gap={4}
//               ref={droppableProvider.innerRef}
//               {...droppableProvider.droppableProps}
//             >
//               {columns.map((column, index) => (
// <Draggable
//   index={index}
//   key={column.name}
//   draggableId={`${column.name}`}
// >
//                   {(draggableProvider) => (
//                     <>
//                       <Flex
//                         align="center"
//                         justify="space-between"
//                         className={css`
//                           padding: 5px 16px;
//                           cursor: pointer;
//                           background-color: #f7f7f7;
//                           border-radius: 4px;
//                           &:hover {
//                             background-color: #f0f0f0;
//                           }
//                         `}
// ref={draggableProvider.innerRef}
// {...draggableProvider.draggableProps}
// {...draggableProvider.dragHandleProps}
//                       >
//                         <Typography.Text
//                           className={css`
//                             font-size: 12px;
//                             color: #333333;
//                             overflow: hidden;
//                             text-overflow: ellipsis;
//                             white-space: nowrap;
//                           `}
//                         >
//                           {column.name}
//                         </Typography.Text>
//                         <HolderOutlined />
//                       </Flex>
//                     </>
//                   )}
//                 </Draggable>
//               ))}
//               {droppableProvider.placeholder}
//             </Flex>
//           )}
//         </Droppable>

//         <Droppable droppableId="columnsss">
//           {(droppableProvider, snapshot) => {
//             // console.log(snapshot);
//             return (
//               <div
//                 className={css`
//                   margin-top: 24px;
//                   min-height: 300px;
//                   padding: 16px 0;
//                   display: flex;
//                   flex-direction: column;
//                   gap: 4px;
//                   border: 1px dashed #84c2f8;
//                   background-color: ${isDragging
//                     ? "rgb(218, 237, 253)"
//                     : "unset"};
//                 `}
//                 ref={droppableProvider.innerRef}
//                 {...droppableProvider.droppableProps}
//               >
//                 {state.map((column, index) => (
//                   <Draggable
//                     index={index}
//                     key={column.name}
//                     draggableId={`${column.name}`}
//                   >
//                     {(draggableProvider) => (
//                       <Flex
//                         align="center"
//                         justify="space-between"
//                         className={css`
//                           padding: 5px 16px;
//                           cursor: pointer;
//                           background-color: #f7f7f7;
//                           border-radius: 4px;
//                           &:hover {
//                             background-color: #f0f0f0;
//                           }
//                         `}
//                         ref={draggableProvider.innerRef}
//                         {...draggableProvider.draggableProps}
//                         {...draggableProvider.dragHandleProps}
//                       >
//                         <Typography.Text
//                           className={css`
//                             font-size: 12px;
//                             color: #333333;
//                             overflow: hidden;
//                             text-overflow: ellipsis;
//                             white-space: nowrap;
//                           `}
//                         >
//                           {column.name}
//                         </Typography.Text>
//                         <HolderOutlined />
//                       </Flex>
//                     )}
//                   </Draggable>
//                 ))}
//                 {droppableProvider.placeholder}
//               </div>
//             );
//           }}
//         </Droppable>
//         {/*
//         <div
//           className={css`
//             margin-top: 24px;
//             min-height: 300px;
//             background-color: #84c2f8;
//           `}
//         >
//           <Droppable droppableId="column">
//             {(droppableProvider) => (
//               <Flex
//                 vertical
//                 gap={4}
//                 ref={droppableProvider.innerRef}
//                 {...droppableProvider.droppableProps}
//               >
//                 {droppableProvider.placeholder}
//               </Flex>
//             )}
//           </Droppable>
//         </div> */}
//       </DragDropContext>

//       {/* <div
//         className={css`
//           margin-top: 24px;
//           background-color: #84c2f8;
//         `}
//       >
//         <DragDropContext onDragEnd={handleDragEnd}>
//           <Droppable droppableId="column" isDropDisabled>
//             {(droppableProvider) => (
//               <Flex
//                 vertical
//                 gap={4}
//                 ref={droppableProvider.innerRef}
//                 {...droppableProvider.droppableProps}
//               >
//                 {columns.map((column, index) => (
//                   <Draggable
//                     index={index}
//                     key={column.name}
//                     draggableId={`${column.name}`}
//                   >
//                     {(draggableProvider) => (
//                       <Flex
//                         align="center"
//                         justify="space-between"
//                         className={css`
//                           padding: 5px 16px;
//                           cursor: pointer;
//                           background-color: #f7f7f7;
//                           border-radius: 4px;
//                           &:hover {
//                             background-color: #f0f0f0;
//                           }
//                         `}
//                         ref={draggableProvider.innerRef}
//                         {...draggableProvider.draggableProps}
//                         {...draggableProvider.dragHandleProps}
//                       >
//                         <Typography.Text
//                           className={css`
//                             font-size: 12px;
//                             color: #333333;
//                             overflow: hidden;
//                             text-overflow: ellipsis;
//                             white-space: nowrap;
//                           `}
//                         >
//                           {column.name}
//                         </Typography.Text>
//                         <HolderOutlined />
//                       </Flex>
//                     )}
//                   </Draggable>
//                 ))}
//                 {droppableProvider.placeholder}
//               </Flex>
//             )}
//           </Droppable>
//         </DragDropContext>
//       </div> */}
//       {/* <Flex vertical gap={4}>
//         {columns.map((column) => (
//           <Flex
//             key={column.name}
//             align="center"
//             justify="space-between"
//             // draggable
//             // onDragStart={console.log}
//             // onDragEnter={console.log}
//             // onDragEnd={console.log}
//             className={css`
//               padding: 5px 16px;
//               cursor: pointer;
//               background-color: #f7f7f7;
//               border-radius: 4px;
//               &:hover {
//                 background-color: #f0f0f0;
//               }
//             `}
//           >
//             <Typography.Text
//               className={css`
//                 font-size: 12px;
//                 color: #333333;
//                 overflow: hidden;
//                 text-overflow: ellipsis;
//                 white-space: nowrap;
//               `}
//             >
//               {column.name}
//             </Typography.Text>
//             <HolderOutlined />
//           </Flex>
//         ))}
//       </Flex> */}
//       {/* <DragDropContext onDragEnd={handleDragEnd}>
//         <h1>Todo App</h1>
//         <Droppable droppableId="todos">
//           {(droppableProvider) => (
//             <ul
//               ref={droppableProvider.innerRef}
//               {...droppableProvider.droppableProps}
//             >
//               {columns.map((todo, index) => (
//                 <Draggable
//                   index={index}
//                   key={todo.name}
//                   draggableId={`${todo.name}`}
//                 >
//                   {(draggableProvider) => (
//                     <li
//                       ref={draggableProvider.innerRef}
//                       {...draggableProvider.draggableProps}
//                       {...draggableProvider.dragHandleProps}
//                     >
//                       {todo.name}
//                     </li>
//                   )}
//                 </Draggable>
//               ))}
//               {droppableProvider.placeholder}
//             </ul>
//           )}
//         </Droppable>
//         <Droppable droppableId="todoss">
//           {(droppableProvider) => (
//             <ul
//               ref={droppableProvider.innerRef}
//               {...droppableProvider.droppableProps}
//             >
//               {columns.map((todo, index) => (
//                 <Draggable
//                   index={index}
//                   key={todo.name}
//                   draggableId={`${todo.name}`}
//                 >
//                   {(draggableProvider) => (
//                     <li
//                       ref={draggableProvider.innerRef}
//                       {...draggableProvider.draggableProps}
//                       {...draggableProvider.dragHandleProps}
//                     >
//                       {todo.name}
//                     </li>
//                   )}
//                 </Draggable>
//               ))}
//               {droppableProvider.placeholder}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext> */}
//     </>
//   );
// };

import { css } from "@emotion/css";
import { Flex, Typography } from "antd";
import { HolderOutlined } from "@ant-design/icons";

import { columns } from "./mock-data";
import { useState } from "react";
import { useCreateChartStore } from "@/store";

export const ChartSourceBarColumn = () => {
  const { setIsDragging, setSelectColumn } = useCreateChartStore();

  const handleOnDrag = (e: React.DragEvent, itemId: string) => {
    setIsDragging(true);
    setSelectColumn(columns.find((column) => column.name === itemId));
    e.dataTransfer.setData("columnId", itemId);
    e.dataTransfer.dropEffect = "move";
  };

  // const getBackgroundColor = (passKey: string) => {
  //   if (draging && selected?.key === passKey) {
  //     return {
  //       backgroundColor: "rgb(228, 242, 254)",
  //       border: "1px dashed #84c2f8",
  //     };
  //   } else if (draging && selected?.key !== passKey) {
  //     return {
  //       backgroundColor: "#ffd0d0",
  //       border: "1px solid #ffabab",
  //     };
  //   }

  //   return {
  //     backgroundColor: "unset !important",
  //     border: "1px solid #eaeaea",
  //   };
  // };

  return (
    <>
      <Typography.Paragraph
        className={css`
          margin-bottom: 8px;
          font-size: 12px;
          color: rgb(178, 178, 178);
        `}
      >
        Showing 11 of 11
      </Typography.Paragraph>
      <Flex vertical gap={4}>
        {columns.map((column) => (
          <Flex
            key={column.name}
            align="center"
            justify="space-between"
            draggable
            onDragStart={(e) => handleOnDrag(e, column.name)}
            onDragEnd={() => {
              setIsDragging(false);
              setSelectColumn(undefined);
            }}
            className={css`
              padding: 5px 16px;
              cursor: pointer;
              background-color: #f7f7f7;
              border-radius: 4px;
              &:hover {
                background-color: #f0f0f0;
              }
            `}
          >
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
            <HolderOutlined />
          </Flex>
        ))}
      </Flex>

      {/* <div
        className={css`
          margin-top: 24px;
          padding: 16px 0;
          min-height: 200px;
          border-radius: 4px;
          transition: 0.3s;
          ${getBackgroundColor("column")}
        `}
        onDrop={(drop) => {
          console.log(drop.dataTransfer.getData("columnId"));
        }}
        onDragOver={(e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = "move";
        }}
      ></div>

      <div
        className={css`
          margin-top: 24px;
          padding: 16px 0;
          min-height: 200px;
          border-radius: 4px;
          transition: 0.3s;
          ${getBackgroundColor("filter")}
        `}
        onDrop={(drop) => {
          console.log(drop.dataTransfer.getData("columnId"));
        }}
        onDragOver={(e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = "move";
        }}
      ></div> */}
    </>
  );
};
