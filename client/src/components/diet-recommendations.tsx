import { Zap } from "lucide-react";

export default function DietRecommendations() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Zap className="h-6 w-6 mr-2 text-blue-500" />
        Diet Recommendations for PCOD
      </h2>
      
      <div className="mb-6">
        <p className="mb-4 text-gray-700">
          According to Healthline and medical experts, dietary changes can significantly help manage PCOD symptoms. A balanced diet can improve insulin sensitivity, reduce inflammation, support weight management, and help restore hormonal balance. Here's a recommended dietary approach based on clinical recommendations:
        </p>
        
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2 text-primary">Foods to Include:</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-600 mb-2">High-Fiber Foods</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Whole grains (brown rice, oats, quinoa)</li>
                <li>Beans and lentils</li>
                <li>Fresh fruits with skin</li>
                <li>Vegetables (especially leafy greens)</li>
                <li>Nuts and seeds</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-600 mb-2">Lean Proteins</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Chicken and turkey (without skin)</li>
                <li>Fish (especially fatty fish like salmon)</li>
                <li>Tofu and tempeh</li>
                <li>Eggs</li>
                <li>Low-fat dairy (in moderation)</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-600 mb-2">Healthy Fats</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Avocados</li>
                <li>Olive oil</li>
                <li>Nuts (almonds, walnuts)</li>
                <li>Seeds (flax, chia, pumpkin)</li>
                <li>Fatty fish</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-600 mb-2">Anti-Inflammatory Foods</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Turmeric</li>
                <li>Ginger</li>
                <li>Berries</li>
                <li>Leafy greens</li>
                <li>Green tea</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-lg font-medium mb-2 text-red-500">Foods to Avoid or Limit:</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-500 mb-2">Refined Carbohydrates</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>White bread and pasta</li>
                <li>White rice</li>
                <li>Sugary breakfast cereals</li>
                <li>Pastries and cookies</li>
                <li>Cakes and donuts</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-500 mb-2">Added Sugars</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Candy and chocolate</li>
                <li>Sugary beverages and sodas</li>
                <li>Sweetened juices</li>
                <li>Ice cream</li>
                <li>Many processed foods</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-500 mb-2">Unhealthy Fats</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Fried foods</li>
                <li>Processed meats</li>
                <li>Margarine and shortening</li>
                <li>Many packaged snacks</li>
                <li>Fast food</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-500 mb-2">Other Items to Limit</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Alcohol</li>
                <li>Caffeine</li>
                <li>Highly processed foods</li>
                <li>High-sodium foods</li>
                <li>Artificial sweeteners</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-lg font-medium mb-4">Sample 7-Day Meal Plan for PCOD</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-3 border-b bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Day</th>
                <th className="py-2 px-3 border-b bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Breakfast</th>
                <th className="py-2 px-3 border-b bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Lunch</th>
                <th className="py-2 px-3 border-b bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Dinner</th>
                <th className="py-2 px-3 border-b bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Snacks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Monday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Oatmeal with berries and chopped nuts</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Grilled chicken salad with olive oil dressing</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Baked salmon with roasted vegetables</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Apple slices with almond butter</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Tuesday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Smoothie with spinach, berries, and protein powder</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Lentil soup with a side salad</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Turkey stir-fry with brown rice and vegetables</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Greek yogurt with cinnamon</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Wednesday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Scrambled eggs with spinach and tomatoes</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Quinoa bowl with chickpeas and vegetables</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Grilled fish with steamed broccoli</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Handful of mixed nuts</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Thursday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Chia seed pudding with berries</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Tuna salad with avocado on whole grain bread</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Chicken and vegetable soup</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Carrot sticks with hummus</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Friday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Whole grain toast with avocado and eggs</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Large mixed vegetable salad with grilled tofu</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Baked chicken with sweet potato and green beans</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Fresh fruit</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Saturday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Greek yogurt parfait with granola and fruit</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Vegetable soup with a side of whole grain crackers</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Grilled shrimp with quinoa and roasted vegetables</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Handful of berries</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Sunday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Vegetable omelet with whole grain toast</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Bean and vegetable salad</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Grilled lean beef with asparagus and small baked potato</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Small handful of dark chocolate chips</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Additional Tips</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong>Portion control:</strong> Be mindful of portion sizes even when eating healthy foods</li>
          <li><strong>Meal timing:</strong> Try to eat regular meals at consistent times</li>
          <li><strong>Hydration:</strong> Drink plenty of water throughout the day</li>
          <li><strong>Physical activity:</strong> Combine dietary changes with regular exercise (at least 30 minutes daily)</li>
          <li><strong>Sleep:</strong> Aim for 7-8 hours of quality sleep each night</li>
        </ul>
      </div>

      <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Healthline Recommended Diets for PCOD</h3>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <h4 className="font-medium text-purple-700 mb-1">Low Glycemic Index Diet</h4>
            <p className="text-sm text-gray-700">
              Focuses on foods that don't cause blood sugar spikes. This diet helps reduce insulin resistance, a common problem in PCOD.
            </p>
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <h4 className="font-medium text-purple-700 mb-1">Anti-Inflammatory Diet</h4>
            <p className="text-sm text-gray-700">
              Emphasizes foods that reduce inflammation in the body, which can help ease PCOD symptoms and improve hormonal balance.
            </p>
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <h4 className="font-medium text-purple-700 mb-1">DASH Diet</h4>
            <p className="text-sm text-gray-700">
              Originally designed to reduce blood pressure, the DASH diet may also help with weight management and insulin sensitivity in PCOD patients.
            </p>
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <h4 className="font-medium text-purple-700 mb-1">Mediterranean Diet</h4>
            <p className="text-sm text-gray-700">
              Rich in healthy fats, whole grains, and lean proteins, this diet pattern has been shown to improve metabolic and hormonal parameters in PCOD.
            </p>
          </div>
        </div>
      </div>
      
      <blockquote className="mt-6 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
        <p className="italic text-gray-700">
          "Remember that dietary changes should be made gradually and maintained consistently. Results may take time, but improved nutrition can significantly help manage PCOD symptoms and improve overall health." <span className="text-purple-600 font-medium">- Healthline</span>
        </p>
      </blockquote>
    </div>
  );
}