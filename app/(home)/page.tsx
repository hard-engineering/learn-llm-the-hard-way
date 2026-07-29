import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center text-center flex-1 px-4">
      <h1 className="text-4xl font-bold mb-4">Learn LLM the Hard Way</h1>
      <p className="text-fd-muted-foreground max-w-xl mb-8">
        One human, one AI tutor, zero shortcuts. A working journal of building a
        mini LLM from first principles — counting models, backprop by hand in
        NumPy, then the modern PyTorch stack — with every wrong turn kept in.
      </p>
      <Link
        href="/docs"
        className="rounded-full bg-fd-primary text-fd-primary-foreground px-6 py-3 font-medium"
      >
        Start reading
      </Link>
    </div>
  );
}
