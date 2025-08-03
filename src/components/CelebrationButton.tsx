import { useCelebration } from "./useCelebration"

const CelebrationButton = () => {
    const { visible, hide, bindButton } = useCelebration()

    return (
        <div className="relative flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-[#667eea] to-[#764ba2] px-4 sm:px-6 lg:px-8">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
                <div className="absolute top-20 right-16 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000" />
                <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-500" />
                <div className="absolute bottom-20 right-10 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-700" />
            </div>

            <div className="text-center text-white z-10 max-w-sm sm:max-w-md lg:max-w-lg">
                <div className="mb-6 sm:mb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wider mb-3 sm:mb-4 animate-fade-in-up">
                        Something Special Awaits
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl opacity-90 animate-fade-in-up animation-delay-300">
                        Click the button below for a surprise!
                    </p>
                </div>

                <div className="relative inline-block animate-fade-in-up animation-delay-600">
                    <button
                        aria-label="Click me for a celebration"
                        className="group relative inline-flex items-center justify-center gap-2 sm:gap-3
                     px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5
                     text-base sm:text-lg lg:text-xl font-bold text-white
                     bg-gradient-to-r from-[#ff6b6b] to-[#feca57]
                     rounded-full shadow-lg hover:shadow-xl
                     transform transition-all duration-300 ease-out
                     hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-4 focus:ring-white/30
                     animate-pulse-gentle"
                        {...bindButton}
                    >
                        {/* Custom Sparkle Icon */}
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-3.01L12 0z" />
                        </svg>

                        <span className="relative z-10">Click Me!</span>

                        {/* Custom Star Icon */}
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce-gentle" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-3.01L12 2z" />
                        </svg>

                        {/* Sparkle effects */}
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-1 bg-white rounded-full opacity-0 animate-sparkle"
                                    style={{
                                        top: `${20 + i * 10}%`,
                                        left: `${15 + i * 12}%`,
                                        animationDelay: `${i * 0.3}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </button>
                </div>
            </div>

            {/* Celebration Modal */}
            {visible && (
                <div
                    onClick={hide}
                    className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm
                   transition-all duration-500 z-50 px-4 sm:px-6"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="celebration-title"
                >
                    <div
                        className="relative flex flex-col items-center justify-center
                     bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl
                     p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg
                     shadow-2xl border border-white/20
                     animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Balloon */}
                        <div className="relative mb-4 sm:mb-6 animate-float">
                            <div className="relative">
                                {/* Main balloon body */}
                                <div
                                    className="w-32 h-40 sm:w-40 sm:h-48 lg:w-48 lg:h-56
                           bg-gradient-to-br from-[#ff6b6b] via-[#feca57] to-[#48cae4]
                           rounded-full shadow-2xl
                           relative overflow-hidden"
                                    style={{
                                        borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                                    }}
                                >
                                    {/* Balloon highlight */}
                                    <div
                                        className="absolute top-4 left-4 w-6 h-8 sm:w-8 sm:h-10
                                bg-white/30 rounded-full blur-sm"
                                    />

                                    {/* Balloon knot */}
                                    <div
                                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2
                                w-0 h-0 border-l-[8px] border-r-[8px] border-t-[16px]
                                border-l-transparent border-r-transparent border-t-[#ff6b6b]"
                                    />
                                </div>

                                {/* Balloon string */}
                                <div className="w-0.5 h-16 sm:h-20 bg-gray-800 mx-auto" />
                            </div>
                        </div>

                        {/* Celebration message */}
                        <div className="text-center text-white space-y-2 sm:space-y-3">
                            <h2
                                id="celebration-title"
                                className="text-sm sm:text-base lg:text-lg font-medium tracking-widest opacity-90"
                            >
                                WELCOME TO
                            </h2>
                            <h1
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold
                           bg-gradient-to-r from-[#feca57] to-[#ff6b6b]
                           bg-clip-text text-transparent animate-bounce-gentle"
                            >
                                200 STREAK
                            </h1>
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">BISOLA</h2>
                            <div className="text-2xl sm:text-3xl lg:text-4xl mt-4 animate-bounce-gentle animation-delay-500">
                                🎉✨🎈
                            </div>
                        </div>

                        {/* Enhanced confetti */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl">
                            {[...Array(20)].map((_, i) => {
                                const colors = ["#ff6b6b", "#48cae4", "#feca57", "#764ba2", "#667eea"]
                                const shapes = ["circle", "square", "triangle"]
                                const color = colors[i % colors.length]
                                const shape = shapes[i % shapes.length]
                                const delay = (i * 0.1).toFixed(1)
                                const duration = (2 + Math.random() * 2).toFixed(1)
                                const leftPos = Math.random() * 100

                                return (
                                    <div
                                        key={i}
                                        className={`absolute w-2 h-2 sm:w-3 sm:h-3 animate-confetti-fall`}
                                        style={{
                                            left: `${leftPos}%`,
                                            top: "-10px",
                                            backgroundColor: color,
                                            borderRadius: shape === "circle" ? "50%" : shape === "square" ? "0" : "0",
                                            clipPath: shape === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "none",
                                            animationDelay: `${delay}s`,
                                            animationDuration: `${duration}s`,
                                        }}
                                    />
                                )
                            })}
                        </div>

                        {/* Close hint */}
                        <p className="text-xs sm:text-sm text-white/60 mt-4 sm:mt-6">Tap anywhere to close</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CelebrationButton
