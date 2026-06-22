import Hero from "../components/Hero";
import Features from "../components/Features";
import CropCategories from "../components/CropCategories";
import HowItWorks from "../components/HowItWorks";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useState } from "react";
import Modal from "../components/ui/Modal";
function Home() {
  const [open, setOpen] = useState(false);
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
<div className="flex justify-center py-10">

  <button
    onClick={() => setOpen(true)}
    className="bg-green-600 text-white px-6 py-3 rounded-lg"
  >
    Open Modal
  </button>

</div>

<Modal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Pahadi AgriBot"
>

  <p className="mb-4">
    Welcome to the AI farming assistant for Uttarakhand farmers.
  </p>

  <button
    onClick={() => setOpen(false)}
    className="bg-green-600 text-white px-4 py-2 rounded"
  >
    Close
  </button>

</Modal>
    </>
  );
}


export default Home;