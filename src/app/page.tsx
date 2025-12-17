import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import ResPreview1 from "@/assets/ResPreview1.png";
import ResPreview2 from "@/assets/ResPreview2.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-900">
      <section className="relative flex min-h-[85vh] items-center overflow-hidden px-6">
        {/* Hero content - slightly right */}
        <div className="z-10 flex max-w-prose flex-col space-y-6 text-left lg:ml-auto lg:w-1/2 lg:pr-12">
          <Image src={logo} alt="Logo" width={220} height={220} />
          <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-5xl">
            Create the{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Perfect Resume
            </span>{" "}
            in Minutes
          </h1>
          <p className="text-lg text-gray-500">
            Our <span className="font-bold">AI resume builder</span> helps you
            design a professional resume quickly and easily.
          </p>
          <div className="inline-block">
            <Button asChild size="lg" variant="premium">
              <Link href="/resumes">Get started</Link>
            </Button>
          </div>
        </div>

        {/* Hero image - left tilt with full glow */}
        <div className="relative hidden justify-center lg:flex lg:w-1/2">
          {/* Full glow around image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[30rem] w-[30rem] rounded-full bg-green-400/30 blur-3xl"></div>
            <div className="absolute h-[32rem] w-[32rem] rounded-full bg-green-400/20 blur-2xl"></div>
          </div>
          <Image
            src={ResPreview1}
            alt="Resume Preview"
            width={480}
            height={640}
            className="rotate-6 rounded-xl shadow-2xl"
            priority
          />
        </div>
      </section>
      {/* Templates Section */}
      <section className="bg-gray-50 px-6 py-16 text-center">
        <h2 className="mb-10 text-4xl font-extrabold">
          Choose how you want to make your resume
        </h2>

        <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
          {/* Modern Template */}
          <div className="relative flex w-full flex-col items-center md:w-1/3">
            <div className="relative">
              <Image
                src={ResPreview1}
                alt="Modern Resume"
                width={350}
                height={500}
                className="mb-4 rounded-xl shadow-2xl"
                priority
              />
              <div className="absolute bottom-0 left-1/2 h-6 w-3/4 -translate-x-1/2 transform rounded-full bg-green-400/30 blur-xl"></div>
            </div>
            <span className="text-lg font-bold">Modern</span>
          </div>

          {/* Professional Template */}
          <div className="relative flex w-full flex-col items-center md:w-1/3">
            <div className="relative">
              <Image
                src={ResPreview2}
                alt="Professional Resume"
                width={350}
                height={500}
                className="mb-4 rounded-xl shadow-2xl"
                priority
              />
              <div className="absolute bottom-0 left-1/2 h-6 w-3/4 -translate-x-1/2 transform rounded-full bg-green-400/30 blur-xl"></div>
            </div>
            <span className="text-lg font-bold">Professional</span>
          </div>
        </div>
      </section>

      {/* Bento Cards Section */}
      <section className="bg-white px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Features</h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-gray-50 p-6 shadow transition hover:shadow-lg">
            <h3 className="mb-2 text-lg font-semibold">AI Generated Content</h3>
            <p className="text-sm text-gray-500">
              Automatically generate professional summaries and work experience
              for your resume using AI.
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-6 shadow transition hover:shadow-lg">
            <h3 className="mb-2 text-lg font-semibold">
              Customizable Templates
            </h3>
            <p className="text-sm text-gray-500">
              Choose from multiple designs, color themes, and layouts to create
              your ideal resume.
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-6 shadow transition hover:shadow-lg">
            <h3 className="mb-2 text-lg font-semibold">
              Subscription & Billing
            </h3>
            <p className="text-sm text-gray-500">
              Manage premium features and payments securely with Stripe
              integration.
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-6 shadow transition hover:shadow-lg">
            <h3 className="mb-2 text-lg font-semibold">Cloud Storage</h3>
            <p className="text-sm text-gray-500">
              Store your resumes, templates, and media securely with Vercel Blob
              and PostgreSQL.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-6 shadow">
            <h4 className="mb-2 font-semibold">
              How do I start building a resume?
            </h4>
            <p className="text-sm text-gray-500">
              Click Get Started and follow the simple steps to generate your
              first resume instantly.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-6 shadow">
            <h4 className="mb-2 font-semibold">Can I customize templates?</h4>
            <p className="text-sm text-gray-500">
              Yes, choose templates, colors, and drag-and-drop sections to fit
              your style.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-6 shadow">
            <h4 className="mb-2 font-semibold">Is my data safe?</h4>
            <p className="text-sm text-gray-500">
              All resumes and media are stored securely using PostgreSQL and
              Vercel Blob storage.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-6 shadow">
            <h4 className="mb-2 font-semibold">Do I need a subscription?</h4>
            <p className="text-sm text-gray-500">
              Basic features are free. Premium features require a Stripe
              subscription for enhanced access.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-between bg-gray-200 px-6 py-6 text-sm text-gray-700 sm:flex-row">
        <span>
          © {new Date().getFullYear()} CraftMyResume | Built by Khushi Singh
        </span>
        <Link
          href="https://www.linkedin.com/in/khushi-singh-55845431b/"
          className="mt-2 hover:underline sm:mt-0"
        >
          Contact Me
        </Link>
      </footer>
    </main>
  );
}
