import { Tool } from "@/data/tools";
import ToolCard from "@/components/ToolCard";

export default function ToolList({ tools }: { tools: Tool[] }) {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </section>
  );
}
