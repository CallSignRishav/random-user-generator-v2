import { NextUIProvider } from "@nextui-org/system";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextUIProvider>
        <main>{children}</main>
      </NextUIProvider>
    </>
  );
}
