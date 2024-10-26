// eslint-disable-next-line no-unused-vars
import React from "react";

const Location = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">Vist Us</h1>
          <p className="font-semibold text-3xl">Our Company Location</p>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.1961900748142!2d103.67624666954381!3d1.3041822999177193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0553ce93ed69%3A0x2e2fa9ae859d941c!2sSG%20Galvanizing%20(S)%20Pte%20Ltd!5e0!3m2!1sen!2sin!4v1729876943559!5m2!1sen!2sin"
                width="100%"
                height="480"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Our Address
                  </h3>
                  <p className="mt-1 text-gray-600">
                    22 Benoi Road - Singapore 629892
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-600">
                    Monday - Friday: 9am - 5pm
                  </p>
                  <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                  <p className="mt-1 text-gray-600">Sunday: Closed</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                  <p className="mt-1 text-gray-600">Email: cs@sggalv.com</p>
                  <p className="mt-1 text-gray-600">Phone: +65 6252 1880 (6 lines)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
