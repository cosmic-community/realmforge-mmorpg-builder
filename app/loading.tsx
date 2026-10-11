export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-forge-primary-glow border-t-forge-accent rounded-full animate-spin" />
        <p className="text-forge-text-muted font-cinzel">Forging...</p>
      </div>
    </div>
  )
}