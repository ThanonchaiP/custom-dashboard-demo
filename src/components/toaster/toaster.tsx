import type { FC } from "react";
import { Toaster as HotToaster } from "react-hot-toast";

export const Toaster: FC = () => {
  return <HotToaster position="bottom-right" />;
};
