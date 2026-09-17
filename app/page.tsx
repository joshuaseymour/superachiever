export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-24">
      <div className="max-w-4xl text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
            Superachiever
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Single Family Office Benefits
          </p>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Benefits That Uplift Your Success
          </h2>
          
          <p className="text-xl sm:text-2xl font-light text-gray-700 dark:text-gray-300">
            Unlock single family office resources
          </p>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Empowering individual superachievers with the strategic advantages and comprehensive benefits traditionally reserved for single family offices.
          </p>
        </div>
      </div>
    </main>
  );
}
