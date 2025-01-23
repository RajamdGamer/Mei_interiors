import { Carousel } from "@material-tailwind/react";

export function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 1 }} autoplay={{autoplay:true}} loop={{loop:true}} className="backdrop-opacity-10 rounded-xl">
      <img
        src="https://dlifeinteriors.com/wp-content/uploads/2022/07/interior-design-companies-in-Coimbatore-scaled.jpg"
        alt="image 1"
        className="h-half w-full object-contain bg-blend-screen"
      />
      <img
        src="https://www.assureshift.in/sites/default/files/images/content-images/traditional-living-room-design.jpg"
        alt="image 2"
        className="h-half w-full object-fit"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-fit"
      />
    </Carousel>
  );
}