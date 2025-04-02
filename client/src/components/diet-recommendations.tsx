import { Zap } from "lucide-react";

export default function DietRecommendations() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Zap className="h-6 w-6 mr-2 text-emerald-500" />
        Diet Recommendations for PCOD
      </h2>
      
      <div className="mb-6">
        <p className="mb-4 text-gray-700">
          Following a PCOD-friendly diet can help manage your symptoms and improve your overall health. Here's a comprehensive diet plan to help you get started:
        </p>
        
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2 text-primary">Foods to Include:</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-600 mb-2">High-Fiber Foods</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Brown rice</li>
                <li>Quinoa</li>
                <li>Whole wheat bread</li>
                <li>Lentils and beans</li>
                <li>Broccoli and cauliflower</li>
                <li>Spinach</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-600 mb-2">Lean Protein Sources</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Fish (tuna, salmon, sardines)</li>
                <li>Tofu</li>
                <li>Lentils</li>
                <li>Skinless poultry</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-600 mb-2">Low-Glycemic Carbohydrates</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Sweet potatoes</li>
                <li>Quinoa</li>
                <li>Steel-cut oats</li>
                <li>Whole-grain pasta</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-600 mb-2">Antioxidant-Rich Fruits</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Berries (strawberries, blueberries)</li>
                <li>Cherries</li>
                <li>Kiwis</li>
                <li>Apples</li>
                <li>Pears</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-lg font-medium mb-2 text-red-500">Foods to Avoid:</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-500 mb-2">Refined Carbohydrates and Sugars</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>White bread, pasta, and rice</li>
                <li>Sugary snacks and desserts</li>
                <li>Sweetened beverages</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-500 mb-2">Processed and Fried Foods</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Packaged snacks and junk food</li>
                <li>Fast food</li>
                <li>Deep-fried items</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-lg font-medium mb-4">Weekly Diet Chart for PCOD</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-3 border-b bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Day</th>
                <th className="py-2 px-3 border-b bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Breakfast</th>
                <th className="py-2 px-3 border-b bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Lunch</th>
                <th className="py-2 px-3 border-b bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Dinner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Monday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Besan chilla with green chutney</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Dal, roti, mixed vegetable sabzi, cucumber salad</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Grilled paneer with sautéed vegetables</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Tuesday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Vegetable poha with peanuts</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Quinoa khichdi with raita and spinach sabzi</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Brown rice, palak dal, and sautéed broccoli</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Wednesday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Moong dal dosa with chutney</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Rajma, brown rice, and salad</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Grilled fish with mixed vegetables</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Thursday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Ragi dosa with sambar</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Bajra roti, vegetable curry, and cucumber raita</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Quinoa pulao with tofu and stir-fried vegetables</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Friday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Oats porridge with flax seeds and almonds</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Chicken curry with brown rice and salad</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Methi thepla with vegetable sabzi and curd</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Saturday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Vegetable upma with coconut chutney</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Masoor dal, roti, and mixed veg sabzi</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Baked fish with sweet potatoes</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Sunday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Multigrain paratha with curd and chutney</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Chana dal, quinoa pulao, and sautéed veggies</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Vegetable stir-fry with tofu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <blockquote className="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
        <p className="italic text-gray-700">
          "Remember, everyone's journey with PCOD is different. Be patient with yourself as you make dietary changes. Listen to your body, and let food be your ally in managing your symptoms and supporting fertility."
        </p>
        <footer className="mt-2 text-sm text-gray-600">
          - Dr. Deepika Mishra, MBBS, MS (Obstetrics & Gynaecology)
        </footer>
      </blockquote>
    </div>
  );
}
