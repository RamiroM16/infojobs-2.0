import { Montserrat_Alternates as Font } from "next/font/google";
import "../styles/globals.scss";

const defaultFont = Font({
  variable: "--font-default",
  weight: ["300", "800"],
  style: "normal",
  subsets: ["latin-ext"],
  display: "swap",
});

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <html lang="es" className={defaultFont.variable}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
