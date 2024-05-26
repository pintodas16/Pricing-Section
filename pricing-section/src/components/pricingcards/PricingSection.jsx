import Cards from "./Cards";
import NavButtons from "./NavButtons";

function PricingSection() {
  return (
    <section className="">
      {/* <!-- container div  --> */}
      <div className="max-w-7xl mx-auto my-12 ">
        {/* <!-- content  --> */}
        <div>
          {/* <!-- title  --> */}
          <h2 className=" font-satoshi text-4xl md:text-6xl font-medium text-center text-[#000000]">
            Choose your plan
          </h2>
          {/* <!-- navbar for pricing section  --> */}
          <NavButtons />

          {/* <!-- card section  --> */}
          <Cards />
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
