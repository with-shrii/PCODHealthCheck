import { Heart } from "lucide-react";
import Questionnaire from "@/components/questionnaire";
import { pcosInfo } from "@/data/pcos-info";
import { pcodInfo } from "@/data/pcod-info";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'pcod' | 'pcos'>('pcod');

  return (
    <div className="bg-gray-50 text-slate-900 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        {/* Header */}
        <header className="mb-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <Heart className="h-10 w-10 text-primary" />
            <h1 className="text-3xl font-bold ml-2 text-slate-900">
              PCOD/PCOS Assessment
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Answer questions to check for symptoms of Polycystic Ovary Disease (PCOD) or Polycystic Ovary Syndrome (PCOS) and receive personalized health status and diet recommendations.
          </p>
          
          {/* Tab Selection */}
          <div className="flex justify-center mt-4 border-b">
            <button
              className={`py-2 px-6 font-medium ${activeTab === 'pcod' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('pcod')}
            >
              PCOD
            </button>
            <button
              className={`py-2 px-6 font-medium ${activeTab === 'pcos' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('pcos')}
            >
              PCOS
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main>
          {/* Introduction Section */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">
              {activeTab === 'pcod' ? 'What is PCOD?' : 'What is PCOS?'}
            </h2>
            <div className="mb-4">
              <img 
                src={activeTab === 'pcod' 
                  ? "https://mantracare.org/wp-content/uploads/2021/08/pcod.png.webp" 
                  : "https://birlafertility.com/wp-content/uploads/2020/12/What-is-PCOS.jpg"
                } 
                alt={activeTab === 'pcod' ? "PCOD Illustration" : "PCOS Illustration"} 
                className="w-full max-w-md mx-auto rounded mb-4"
              />
              {activeTab === 'pcod' ? (
                <>
                  <p className="mb-3 text-gray-700">
                    PCOD stands for Polycystic Ovarian Disease. It is one of the most common conditions that affect 5% to 10% of women who lie in the age group of 12 to 45 years. It generally affects women in their reproductive age.
                  </p>
                  <p className="mb-3 text-gray-700">
                    The most prevalent problem that occurs in PCOD is the imbalance in the woman's hormones. It becomes evident when there are irregularities in the menstrual cycle and ovulation period.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-3 text-gray-700">
                    PCOS stands for Polycystic Ovary Syndrome. It is a hormonal disorder common among women of reproductive age. Women with PCOS may have infrequent or prolonged menstrual periods or excess male hormone (androgen) levels.
                  </p>
                  <p className="mb-3 text-gray-700">
                    The ovaries may develop numerous small collections of fluid (follicles) and fail to regularly release eggs. The exact cause of PCOS is unknown, but early diagnosis and treatment, along with weight loss, may reduce the risk of long-term complications.
                  </p>
                </>
              )}
            </div>
          </section>

          {/* Assessment Questionnaire */}
          <Questionnaire />

          {/* Footer */}
          <footer className="text-center text-gray-500 text-sm mt-8 pb-8">
            <p>This assessment is for informational purposes only and should not replace professional medical advice.</p>
            <p className="mt-2">Always consult with a healthcare provider before making any changes to your diet or lifestyle.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
