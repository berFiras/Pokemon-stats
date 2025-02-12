import Footer from "../../layout/footer/Footer.component";
import Header from "../../layout/header/Header.component";
import MainLayout from "../../layout/main-layout/MainLayout.component";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800 dark:text-white">
      <Header />
      <MainLayout />
      <Footer />
    </div>
  );
};

export default Home;
