import { Container } from "@src/components/Container";
import { Hero } from "@src/components/Hero";
import { SectionTitle } from "@src/components/SectionTitle";
import { Benefits } from "@src/components/Benefits";
import { Testimonials } from "@src/components/Testimonials";
import Landing from "@src/components/Landing";
import { benefitOne, benefitTwo } from "@src/components/data";
export default function Home() {
  return (
    <>
    <Landing/>
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Snappsavvy Benefits"
        title=" Why should you use Snapsavvy"
      >
SnapSavvy’s AI Restoration feature meticulously repairs old, damaged, or faded photographs. The advanced algorithms can remove scratches, fix blemishes, and enhance the overall quality of your images, making them look brand new. Preserve your precious memories with high fidelity.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our users said"
      >
      </SectionTitle>
      <Testimonials />
    </Container>
    </>
  );
}