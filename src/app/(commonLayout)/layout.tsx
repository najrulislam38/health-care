import Footer from "@/components/shared/Footer";
import PublicNavbar from "@/components/shared/PublicNavbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <PublicNavbar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
