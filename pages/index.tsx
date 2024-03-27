import { useState } from "react";
import { FormStepHandler } from "../components";
import { FaCheck } from "react-icons/fa";

function Home() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [firstnameInput, setFirstnameInput] = useState<string>("");
  const [lastnameInput, setLastnameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [phoneInput, setPhoneInput] = useState<string>("");

  const [storeURL, setStoreURL] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (step === 1) {
      if (firstnameInput && lastnameInput && emailInput && phoneInput) {
        setErrorMessage("");
        setStep(2);
      } else {
        setErrorMessage("All fields are required to continue.");
      }
    } else if (step === 2) {
      if (storeURL && platform) {
        setErrorMessage("");

        const dataToStore = {
          firstname: firstnameInput,
          lastname: lastnameInput,
          email: emailInput,
          phone: phoneInput,
          store: {
            url: storeURL,
            platform: platform,
          },
        };

        // In real life scenario we should send post request to api at this part (instead of storing data in localstorage)
        localStorage.setItem("requestFormData", JSON.stringify(dataToStore));

        setStep(3);
      } else {
        setErrorMessage("All fields are required to continue.");
      }
    }
  };

  return (
    <div className="p-4 max-w-[1000px] mx-auto">
      <h1 className="text-center text-primary font-bold mb-8">
        E-commerce Financial Support Request
      </h1>

      <FormStepHandler
        step={step}
        step1Text="Personal Info"
        step2Text="Store Info"
      />

      {step < 3 ? (
        <form onSubmit={handleSubmit} className="mt-8">
          {step === 1 ? (
            <>
              <input
                value={firstnameInput}
                onChange={(e) => setFirstnameInput(e.target.value)}
                type="text"
                placeholder="Firstname"
                className="outline-0 w-full p-2 rounded-md bg-white border border-gray-400"
              />

              <input
                value={lastnameInput}
                onChange={(e) => setLastnameInput(e.target.value)}
                type="text"
                placeholder="Lastname"
                className="outline-0 w-full p-2 mt-4 rounded-md bg-white border border-gray-400"
              />

              <input
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                type="text"
                placeholder="Email"
                className="outline-0 w-full p-2 mt-4 rounded-md bg-white border border-gray-400"
              />

              <input
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                type="text"
                placeholder="Phone"
                className="outline-0 w-full p-2 mt-4 rounded-md bg-white border border-gray-400"
              />
            </>
          ) : (
            <>
              <input
                value={storeURL}
                onChange={(e) => setStoreURL(e.target.value)}
                type="text"
                placeholder="Store URL"
                className="outline-0 w-full p-2 rounded-md bg-white border border-gray-400"
              />

              <div className="my-8 flex flex-col sm:flex-row sm:items-center">
                <p className="mr-2 mb-2 sm:mb-0 shrink-0 text-secondary">
                  Platform:
                </p>

                <div className="w-full grid grid-cols-3 gap-2">
                  <button
                    className={`${
                      platform === "Trendyol"
                        ? "border-primary"
                        : "border-gray-300"
                    } border-4 text-primary p-2 rounded-xl transition`}
                    type="button"
                    onClick={() => setPlatform("Trendyol")}
                  >
                    Trendyol
                  </button>

                  <button
                    className={`${
                      platform === "Hepsiburada"
                        ? "border-primary"
                        : "border-gray-300"
                    } border-4 text-primary p-2 rounded-xl transition truncate`}
                    type="button"
                    onClick={() => setPlatform("Hepsiburada")}
                  >
                    Hepsiburada
                  </button>

                  <button
                    className={`${
                      platform === "Amazon"
                        ? "border-primary"
                        : "border-gray-300"
                    } border-4 text-primary p-2 rounded-xl transition`}
                    type="button"
                    onClick={() => setPlatform("Amazon")}
                  >
                    Amazon
                  </button>
                </div>
              </div>
            </>
          )}

          <p className="text-red-500 text-center mt-6">{errorMessage}</p>

          <button
            className="flex items-center bg-green-500 hover:brightness-75 transition text-white rounded-full my-6 mx-auto py-4 px-8"
            type="submit"
          >
            {step === 1 ? "Next" : "Submit"}
          </button>
        </form>
      ) : step === 3 ? (
        <>
          <div className="flex justify-center items-center mx-auto mt-8 bg-green-500 text-white w-24 h-24 rounded-full">
            <FaCheck size={40} />
          </div>

          <p className="font-bold text-2xl text-green-500 text-center">
            Congratulations
          </p>
          <p className="font-bold text-sm text-center">
            We saved your request.
          </p>
        </>
      ) : null}
    </div>
  );
}

export default Home;
