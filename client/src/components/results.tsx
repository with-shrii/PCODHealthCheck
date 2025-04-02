import { AlertCircle, ThumbsUp, AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResultsProps {
  score: number;
  retakeAssessment: () => void;
}

export default function Results({ score, retakeAssessment }: ResultsProps) {
  // Determine risk level and recommendations based on score
  let riskLevel = '';
  let recommendations = [];
  let color = '';
  let icon = null;
  
  if (score >= 18) {
    riskLevel = 'High Risk';
    recommendations = [
      'Consult with a healthcare provider as soon as possible',
      'Consider seeing an endocrinologist or gynecologist',
      'Keep track of all your symptoms to discuss with your doctor'
    ];
    color = 'red';
    icon = <AlertCircle className="h-16 w-16 text-red-500 mb-4" />;
  } else if (score >= 10) {
    riskLevel = 'Moderate Risk';
    recommendations = [
      'Schedule an appointment with your healthcare provider',
      'Monitor your symptoms and note any changes',
      'Consider lifestyle modifications like diet and exercise'
    ];
    color = 'orange';
    icon = <AlertTriangle className="h-16 w-16 text-amber-500 mb-4" />;
  } else {
    riskLevel = 'Low Risk';
    recommendations = [
      'Continue regular health check-ups',
      'Maintain a healthy lifestyle',
      'Be aware of any changes in your symptoms'
    ];
    color = 'green';
    icon = <ThumbsUp className="h-16 w-16 text-green-500 mb-4" />;
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="text-center mb-6">
        {icon}
        <h2 className="text-2xl font-bold mb-2">Your Assessment Results</h2>
        <div className={`inline-block py-1 px-3 rounded-full text-white bg-${color}-500 font-medium mb-4`}>
          {riskLevel}
        </div>
        <p className="text-gray-600">
          Based on your responses, your score is <span className="font-semibold">{score} points</span>.
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">What does this mean?</h3>
        <p className="text-gray-700 mb-4">
          {riskLevel === 'High Risk' ? (
            'Your answers suggest you may have several symptoms commonly associated with PCOS/PCOD. This does not mean you definitely have the condition, but it indicates that you should discuss these symptoms with a healthcare provider.'
          ) : riskLevel === 'Moderate Risk' ? (
            'Your answers indicate you have some symptoms that could be associated with PCOS/PCOD. It would be advisable to discuss these symptoms with a healthcare provider, especially if they are impacting your quality of life.'
          ) : (
            'Your answers suggest you have few or mild symptoms associated with PCOS/PCOD. However, if you have concerns about specific symptoms, you should still discuss them with your healthcare provider during regular check-ups.'
          )}
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Recommendations</h3>
        <ul className="list-disc pl-5 space-y-2">
          {recommendations.map((recommendation, index) => (
            <li key={index} className="text-gray-700">{recommendation}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Important Note</h3>
        <p className="text-gray-700">
          This assessment is not a medical diagnosis. Only a qualified healthcare professional can diagnose PCOS/PCOD through proper medical examination, blood tests, and sometimes ultrasound. Please use this result as a starting point for a conversation with your doctor.
        </p>
      </div>
      
      <div className="text-center">
        <Button onClick={retakeAssessment} variant="outline" className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          Retake Assessment
        </Button>
      </div>
    </div>
  );
}