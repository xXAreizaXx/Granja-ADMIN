// NextJS
import { DM_Sans } from "next/font/google";

// Utils
import { joinClassNames } from "@/utils/functions";

// Layouts
import AppLayout from "@/layouts/AppLayout";

// Sonner
import { Toaster } from "sonner";
// Styles
import "./globals.css";

// Fonts
const dmSans = DM_Sans({
    subsets: ["latin"],
    style: "normal",
    weight: ["400", "500", "700"],
});

// Metadata
export const metadata = {
    title: "La Granja SA | CRUD",
    description: "Granja SA CRUD",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full bg-white">
            <body className={joinClassNames(dmSans.className, "h-full")}>
                <AppLayout>
                    <Toaster position="top-center" closeButton richColors />
                    {children}
                </AppLayout>
            </body>
        </html>
    );
}
