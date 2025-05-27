import SignCard from "./SignCard";

const SignsList = ({ symptoms }) => {
  return (
    <section id="sign" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl p-7">
        <h1 className="mb-8 text-center text-4xl font-bold uppercase text-gray-800">
          Dấu hiệu giãn tĩnh mạch ở chân
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {symptoms.map((symptom, index) => (
            <SignCard symptom={symptom} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignsList;
