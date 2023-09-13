import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="text-center py-10">{children}</div>
      <Footer />
    </>
  );
}
