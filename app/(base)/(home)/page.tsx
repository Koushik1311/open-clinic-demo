import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        {/* Heading */}
        <h1 className="text-center text-5xl font-bold md:text-6xl mb-6 text-stone-900 leading-[4rem] md:leading-[5rem]">
          Your Complete Clinic <br className="md:inline hidden" />
          with AI
        </h1>
        {/* Subheading */}
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-lg text-stone-700 mb-8">
            Transform patient care as AI handles consultations and analysis,
            doctors focus on final decisions
          </p>
        </div>

        {/* Sign up button and Learn more button */}
        <div className="max-w-sm md:max-w-none mx-16 md:mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            href="/sign-up/doctor"
            className="border border-orange-500 bg-orange-500 w-full md:w-auto py-2 px-3 text-sm font-medium rounded-lg"
          >
            Doctor Sign up
          </Link>
          <Link
            href="/sign-up/patient"
            className="border border-orange-500 w-full md:w-auto py-2 px-3 text-sm font-medium rounded-lg"
          >
            Patient Sign up
          </Link>
        </div>
      </section>
    </main>
  );
}
