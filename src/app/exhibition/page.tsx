export default function ExhibitionPage() {
  return (
    <section className="container py-16">
      <div className="space-y-6">
        <div>
          <p className="text-sm text-neutral-500">
            Exhibition
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Projects and experiments.
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <h2 className="text-lg font-semibold">
              Project Title
            </h2>

            <p className="mt-2 text-sm text-neutral-600">
              Short description of the project goes here.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="text-lg font-semibold">
              Project Title
            </h2>

            <p className="mt-2 text-sm text-neutral-600">
              Short description of the project goes here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}