import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const TermsOfService: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tosAccepted, setTosAccepted] = useState<boolean>(false);

  const handleAgree = () => {
    // TODO: Send tosAccepted info to backend here
    console.log("User agreed to ToS");
    setIsOpen(false);
  };

  return (
    <div className="text-center">
      {/* Footer link that opens modal */}
      <p className="hover:underline">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="text-light opacity-75 hover:underline"
        >
          Terms of Service
        </button>
      </p>

      {/* Modal Overlay */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
            <Dialog.Title className="text-xl font-semibold mb-4">
              Terms of Service
            </Dialog.Title>

            <div className="max-h-[60vh] overflow-y-auto text-left space-y-4 text-gray-700">
              <p>
                By using our services, you agree to the following Terms of
                Service. Please read them carefully before accessing or using
                our platform.
              </p>

              <h2 className="text-lg font-semibold">1. Acceptance of Terms</h2>
              <p>
                By accessing our website, apps, or services, you confirm that
                you have read, understood, and agree to be bound by these Terms
                of Service.
              </p>

              <h2 className="text-lg font-semibold">2. Eligibility</h2>
              <p>
                You must be at least 18 years old or have legal parental/guardian
                consent to use our services.
              </p>

              <h2 className="text-lg font-semibold">3. User Responsibilities</h2>
              <p>
                You agree not to misuse our services, including unauthorized
                access, data scraping, harassment, or activities that may harm
                the platform or other users.
              </p>

              <h2 className="text-lg font-semibold">4. Service Availability</h2>
              <p>
                We strive to provide reliable services but do not guarantee
                uninterrupted or error-free operation. We may suspend or modify
                services for maintenance, updates, or security reasons.
              </p>

              <h2 className="text-lg font-semibold">5. Intellectual Property</h2>
              <p>
                All content, trademarks, and intellectual property remain the
                property of the company. You may not copy, distribute, or
                reproduce without permission.
              </p>

              <h2 className="text-lg font-semibold">6. Limitation of Liability</h2>
              <p>
                We are not liable for damages arising from the use or inability
                to use our services, except as required by law.
              </p>

              <h2 className="text-lg font-semibold">7. Changes to Terms</h2>
              <p>
                We reserve the right to update or modify these Terms at any
                time. Continued use of the service constitutes acceptance of the
                revised terms.
              </p>
            </div>

            {/* Checkbox */}
            <div className="mt-4 flex items-center gap-2">
              <input
                type="checkbox"
                id="tosAgree"
                checked={tosAccepted}
                onChange={(e) => setTosAccepted(e.target.checked)}
                className="w-4 h-4"
              />
              <label htmlFor="tosAgree" className="text-gray-700">
                I have read and agree to the Terms of Service
              </label>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Close
              </button>

              <button
                type="button"
                disabled={!tosAccepted}
                onClick={handleAgree}
                className={`px-4 py-2 rounded-md text-white ${
                  tosAccepted
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Agree
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default TermsOfService;
