// "use client";

// import { ReactGridLayout } from "@/components/react-grid-layout";
// import React from "react";
// import { Layout } from "react-grid-layout";

// export default function DragFromOutsideLayout() {
//   let savedLayouts: { [breakpoint: string]: Layout[] } = {};
//   if (typeof window !== "undefined") {
//     const hasSavedLayouts =
//       window.localStorage && window.localStorage.getItem("gridLayoutConfig");
//     savedLayouts = hasSavedLayouts ? JSON.parse(hasSavedLayouts) : {};
//   }

//   console.log(savedLayouts);

//   return (
//     <>
//       <ReactGridLayout
//         savedLayouts={savedLayouts}
//         rowHeight={30}
//         cols={{ lg: 24, md: 12, sm: 6, xs: 3, xxs: 1 }}
//         isBounded={true}
//         useCSSTransforms={false}
//         defaultPanelHeight={2}
//         defaultPanelWidth={6}
//       />
//     </>
//   );
// }

"use client";

import { FunctionComponent, useState, useEffect } from "react";
import _ from "lodash";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Tag } from "antd";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function DragFromOutsideLayout() {
  const [compactType, setcompactType] = useState<string>("vertical");
  const [mounted, setmounted] = useState(false);
  const [breakpoint, setbreakpoint] = useState("lg");
  const [layouts, setLayouts] = useState<{ [index: string]: any[] }>({
    lg: [
      { i: "a", x: 0, y: 0, w: 1, h: 2 },
      { i: "b", x: 1, y: 0, w: 3, h: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
      { i: "d", x: 0, y: 2, w: 1, h: 2 },
    ],
  });

  const onLayoutChange = (layout: any, layouts: any) => {
    setLayouts({ ...layouts });
  };

  useEffect(() => {
    setmounted(true);
  }, []);

  // const onCompactTypeChange = () => {
  //   const oldCompactType = compactType;
  //   const compactType =
  //     oldCompactType === "horizontal"
  //       ? "vertical"
  //       : oldCompactType === "vertical"
  //       ? null
  //       : "horizontal";
  //   setcompactType(compactType);
  // };

  const onDrop = (elemParams: ReactGridLayout.Layout[]) => {
    alert(
      `Element parameters:\n${JSON.stringify(
        elemParams,
        ["x", "y", "w", "h"],
        2
      )}`
    );
  };

  let savedLayouts: { [breakpoint: string]: Layout[] } = {};
  if (typeof window !== "undefined") {
    const hasSavedLayouts =
      window.localStorage && window.localStorage.getItem("gridLayoutConfig");
    savedLayouts = hasSavedLayouts ? JSON.parse(hasSavedLayouts) : {};
  }

  // console.log(breakpoint);
  // console.log(layouts.lg);

  return (
    <div>
      <div
        className="droppable-element"
        draggable={true}
        unselectable="on"
        onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
      >
        Droppable Element (Drag me!)
      </div>
      <ResponsiveReactGridLayout
        rowHeight={30}
        cols={{ lg: 24, md: 12, sm: 6, xs: 3, xxs: 1 }}
        // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        layouts={layouts}
        onBreakpointChange={setbreakpoint}
        onLayoutChange={onLayoutChange}
        onDrop={(element) => onDrop(element)}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        compactType="vertical"
        preventCollision={!compactType}
        isDroppable
        droppingItem={{ i: "xx", h: 2, w: 6 }}
      >
        {_.map(layouts?.[breakpoint] ?? layouts.lg, (l, i) => {
          return (
            <div key={i} data-grid={l} className="block">
              {i}
              <Tag color="blue">Block - {l.i}</Tag>
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
}
