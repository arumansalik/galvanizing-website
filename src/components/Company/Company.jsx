// eslint-disable-next-line no-unused-vars
import React from "react";
import company1 from "../../assets/Company/company1.jpg";
import company2 from "../../assets/Company/company2.jpg";
import company3 from "../../assets/Company/company3.jpg";
import company4 from "../../assets/Company/company4.jpg";

const Company = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-5 mt-">
        <div className="flex flex-col justify-center">
          <div className="text-center">
            <h2 className="font-semibold text-3xl">Our Accreditation</h2>

            <p className="max-w-md mx-auto mt-5 text-gray-500">
              Our recognized accreditations highlight our commitment to quality,
              safety, and compliance, ensuring excellence, trust, and high
              standards across our services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={company1}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={company2}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full md:w-[700px] rounded-lg"
                src={company3}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={company4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
