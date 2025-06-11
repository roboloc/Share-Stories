import CompanyOverview from "./contents/homepage/company-overview/page";
import Hero from "./contents/homepage/hero/page";
import Mission from "./contents/homepage/mission-overview/page";
import Service from "./contents/homepage/services/page";
import Testimonials from "./contents/homepage/testimonials/page";
// import Statements from "./contents/homepage/mission-statement/page";

export default async function Home() {
  return (
    <main>
      <Hero></Hero>
      <Mission></Mission>
      <CompanyOverview></CompanyOverview>
      <Service></Service>
      <Testimonials></Testimonials>
    </main>
  );
}
