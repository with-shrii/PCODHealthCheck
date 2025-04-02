import { Heart } from "lucide-react";
import Questionnaire from "@/components/questionnaire";
import InfoAccordion from "@/components/info-accordion";
import { useAssessment } from "@/hooks/use-assessment";
import Results from "@/components/results";

export default function Home() {
  const { 
    currentState, 
    startAssessment,
    retakeAssessment
  } = useAssessment();

  return (
    <div className="bg-gray-50 text-slate-900 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        {/* Header */}
        <header className="mb-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <Heart className="h-10 w-10 text-primary" />
            <h1 className="text-3xl font-bold ml-2 text-slate-900">PCOD Assessment</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Answer the following questions to check for symptoms of Polycystic Ovary Disease (PCOD) and receive personalized diet recommendations.
          </p>
        </header>

        {/* Main Content Area */}
        <main>
          {currentState.view === 'intro' && (
            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">What is PCOD?</h2>
              <div className="mb-4">
                <img 
                  src="https://mantracare.org/wp-content/uploads/2021/08/pcod.png.webp" 
                  alt="PCOD Illustration" 
                  className="w-full max-w-md mx-auto rounded mb-4"
                />
                <p className="mb-3 text-gray-700">
                  PCOD stands for Polycystic Ovarian Disease. It is one of the most common conditions that affect 5% to 10% of women who lie in the age group of 12 to 45 years. It generally affects women in their reproductive age.
                </p>
                <p className="mb-3 text-gray-700">
                  The most prevalent problem that occurs in PCOD is the imbalance in the woman's hormones. It becomes evident when there are irregularities in the menstrual cycle and ovulation period.
                </p>
              </div>
              <div className="flex justify-center">
                <button 
                  onClick={startAssessment}
                  className="bg-primary hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 flex items-center"
                >
                  Start Assessment
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </button>
              </div>
            </section>
          )}

          {currentState.view === 'assessment' && <Questionnaire />}
          
          {currentState.view === 'results' && (
            <Results 
              score={currentState.score} 
              retakeAssessment={retakeAssessment} 
            />
          )}

          {/* More Information Section */}
          <InfoAccordion />
        </main>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm mt-8 pb-8">
          <p>This assessment is for informational purposes only and should not replace professional medical advice.</p>
          <p className="mt-2">Always consult with a healthcare provider before making any changes to your diet or lifestyle.</p>
        </footer>
      </div>
    </div>
  );
}
