export default function Features() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-[#0B0B0F] p-4 rounded-lg">
            <h3 className="text-xl font-bold">Web Development</h3>
            <p className="mt-4 text-muted-foreground leading-normal">
              Creating responsive and robust websites tailored to your needs. We
              use the latest technologies and best practices to build websites
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
