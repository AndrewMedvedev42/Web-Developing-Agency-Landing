import { NavigationMenu } from "./components/navigation-menu";
import { PageHeader } from "./components/header";
import { OurServices } from "./components/our-services";
import { AboutUs} from "./components/about-us";
import { ContactSection } from "./components/contact-us-section";
function App() {
  return (
    <div className="App">
      <NavigationMenu/>
      <PageHeader/>
      <OurServices/>
      <AboutUs/>
      <ContactSection/>
    </div>
  );
}

export default App;
