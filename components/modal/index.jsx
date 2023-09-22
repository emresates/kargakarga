import React from "react";

const Modal = ({ isOpen, setState, setIsOpen }) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-black">
          <div className="h-96 w-5/6 md:w-1/2 rounded-lg bg-white p-8 shadow-black shadow-xl overflow-y-scroll">
            <h2 className="mb-4 text-xl font-semibold">
              Personal Data Privacy Notice
            </h2>
            <div className="mb-4">
              <p>
                This Privacy Notice explains how we collect, use, and protect
                your personal data. We are committed to safeguarding your
                privacy and ensuring the security of your personal information.
              </p>
              <br />
              <ul>
                1. Information We Collect:
                <li>- Name</li>
                <li>- Address</li>
                <li>- Email Address</li>
                <li>- Phone Number</li>
                <li>- Date of Birth</li>
                <li>- Social Security Number</li>
                <li>- Financial Information (e.g., bank account details)</li>
                <li>- Employment History</li>
                <li>- Educational Background</li>
              </ul>
              <br />
              <ul>
                2. How We Use Your Information:
                <li>- To provide you with our services</li>
                <li>- To communicate with you</li>
                <li>- To process payments</li>
                <li>- To comply with legal obligations</li>
                <li>- To improve our products and services</li>
              </ul>
              <br />
              <p>
                3. Data Security: We have implemented security measures to
                protect your personal data from unauthorized access, disclosure,
                alteration, and destruction.
              </p>
              <br />
              <ul>
                4. Your Rights:
                <li>- You have the right to access your personal data.</li>
                <li>
                  - You have the right to correct inaccuracies in your personal
                  data.
                </li>
                <li>
                  - You have the right to request the deletion of your personal
                  data.
                </li>
                <li>
                  - You have the right to object to the processing of your
                  personal data.
                </li>
              </ul>
              <br />
              <p>
                5. Contact Us: If you have any questions or concerns about our
                use of your personal data, please contact us at [email address].
                Please review this Privacy Notice carefully. By using our
                services, you consent to the collection and use of your personal
                data as described in this notice.
              </p>
            </div>
            <div className="flex items-center justify-end gap-4">
              <button
                onClick={() => {
                  setState(false);
                  setIsOpen(false);
                }}
                className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              >
                Deny
              </button>
              <button
                onClick={() => {
                  setState(true);
                  setIsOpen(false);
                }}
                className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
