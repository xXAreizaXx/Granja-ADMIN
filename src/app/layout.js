// NextJS
import { Poppins } from "next/font/google";

// Styles
import "./globals.css";

// Fonts
const poppins = Poppins({
    subsets: ["latin"],
    style: "normal",
    weight: ["400", "600", "800"],
});

// Metadata
export const metadata = {
    title: "Granja SA | CRUD",
    description: "Granja SA CRUD",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
