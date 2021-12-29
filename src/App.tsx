import { NavigationMenu } from "./components/navigation-menu";
import { PageHeader } from "./components/header";
import { OurServices } from "./components/our-services";
import { AboutUs} from "./components/about-us";
import { ContactSection } from "./components/contact-us-section";
function App() {
  return (
    <div className="App">
      <NavigationMenu/>
      <section className="page-container">
        <PageHeader/>
        <OurServices/>
        <AboutUs/>
        <ContactSection/>
      </section>
    </div>
  );
}

export default App;
