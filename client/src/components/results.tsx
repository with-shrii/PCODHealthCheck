import { AlertTriangle, CheckCircle, Info } from "lucide-react";
import DietRecommendations from "@/components/diet-recommendations";

interface ResultsProps {
  score: number;
  retakeAssessment: () => void;
}

export default function Results({ score, retakeAssessment }: ResultsProps) {
  // Determine risk level based on score
  const isHighRisk = score >= 10;
  const isModerateRisk = score >= 5 && score < 10;
  const isLowRisk = score < 5;
  
  return (
    <section>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {isHighRisk && (
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-red-500 mb-2">High Risk for PCOD</h3>
            <p className="text-gray-700 mb-4">
              Your responses indicate a high likelihood of PCOD. We recommend consulting with a healthcare provider for proper diagnosis and treatment.
            </p>
          </div>
        )}
        
        {isModerateRisk && (
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
              <Info className="h-8 w-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-yellow-600 mb-2">Moderate Risk for PCOD</h3>
            <p className="text-gray-700 mb-4">
              You're showing some symptoms that may be associated with PCOD. It's advisable to consult with a healthcare provider for further evaluation.
            </p>
          </div>
        )}
        
        {isLowRisk && (
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-green-600 mb-2">Low Risk for PCOD</h3>
            <p className="text-gray-700 mb-4">
              Based on your responses, you have a low likelihood of having PCOD. However, if you experience any concerning symptoms in the future, consider consulting with a healthcare provider.
            </p>
          </div>
        )}
        
        {isHighRisk && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Please follow the diet recommendations below and consider lifestyle changes to manage your symptoms.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {isModerateRisk && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Consider following the diet recommendations below as a preventive measure, and monitor your symptoms.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {isLowRisk && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">
                  Maintain a healthy lifestyle with balanced nutrition and regular exercise to keep your hormones in check.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {(isHighRisk || isModerateRisk) && <DietRecommendations />}
      
      <div className="text-center mb-8">
        <button 
          onClick={retakeAssessment}
          className="bg-primary hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition duration-300"
        >
          Retake Assessment
        </button>
      </div>
    </section>
  );
}
