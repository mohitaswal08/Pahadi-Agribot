import Hero from "../components/Hero";
import Features from "../components/Features";
import CropCategories from "../components/CropCategories";
import HowItWorks from "../components/HowItWorks";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CropCategories />
      <HowItWorks />

      <div className="py-16 flex justify-center gap-4">
    <Button variant="primary">Primary Button</Button>
    <Button variant="secondary">Secondary Button</Button>
    <Button variant="outline">Outline Button</Button>
  </div>
  <div className="max-w-md mx-auto py-10">
  <Input
    label="Farmer Name"
    placeholder="Enter your name"
  />

  <div className="mt-6">
    <Input
      label="Crop Name"
      placeholder="Enter crop name"
      error="Crop name is required"
    />
  </div>
</div>
    </>
  );
}


export default Home;