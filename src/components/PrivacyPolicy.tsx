import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const PrivacyPolicy: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="text-center">
      {/* Footer link that opens modal */}
      <p className="hover:underline">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="text-light opacity-75  hover:underline"
        >
          Privacy Policy
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
              Privacy Policy
            </Dialog.Title>

            <div className="max-h-[60vh] overflow-y-auto text-left space-y-4 text-gray-700">
              <p>
                We value your privacy. This Privacy Policy explains how we
                collect, use, and protect your personal information when you
                use our services.
              </p>

              <h2 className="text-lg font-semibold">1. Information We Collect</h2>
              <p>
                We may collect personal details such as your name, email
                address, phone number, and usage data when you interact with
                our platform.
              </p>

              <h2 className="text-lg font-semibold">2. How We Use Information</h2>
              <p>
                The information collected is used to provide services, improve
                functionality, communicate updates, and ensure security.
              </p>

              <h2 className="text-lg font-semibold">3. Data Security</h2>
              <p>
                We take appropriate measures to safeguard your data against
                unauthorized access, disclosure, or misuse.
              </p>

              <h2 className="text-lg font-semibold">4. Third-Party Services</h2>
              <p>
                We may integrate third-party services (such as payment
                gateways). These services have their own privacy policies.
              </p>

              <h2 className="text-lg font-semibold">5. Your Rights</h2>
              <p>
                You may request access, correction, or deletion of your
                personal data at any time by contacting us.
              </p>

              <h2 className="text-lg font-semibold">6. Updates</h2>
              <p>
                We may update this Privacy Policy periodically. Continued use
                of our services implies acceptance of the revised policy.
              </p>
            </div>

            {/* Close Button */}
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default PrivacyPolicy;
