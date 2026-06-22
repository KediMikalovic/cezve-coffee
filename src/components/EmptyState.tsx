import Hummingbird from "./Hummingbird";

export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="glass mt-6 flex flex-col items-center rounded-3xl p-12 text-center">
      <Hummingbird color="#9DB0A6" className="h-12 w-12" />
      <p className="mt-3 text-muted">{message}</p>
    </div>
  );
}
