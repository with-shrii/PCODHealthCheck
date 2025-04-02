import { Zap } from "lucide-react";

export default function PcosDietRecommendations() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Zap className="h-6 w-6 mr-2 text-purple-500" />
        Diet Recommendations for PCOS
      </h2>
      
      <div className="mb-6">
        <p className="mb-4 text-gray-700">
          A tailored PCOS diet can help manage symptoms, balance hormones, and improve insulin sensitivity. Here's a comprehensive diet plan designed specifically for PCOS:
        </p>
        
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2 text-primary">Foods to Include:</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-600 mb-2">Anti-Inflammatory Foods</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Fatty fish (salmon, sardines, mackerel)</li>
                <li>Leafy greens (spinach, kale)</li>
                <li>Colorful vegetables</li>
                <li>Berries</li>
                <li>Turmeric and ginger</li>
                <li>Olive oil</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-600 mb-2">Lean Protein Sources</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Chicken and turkey (skinless)</li>
                <li>Fish and seafood</li>
                <li>Eggs</li>
                <li>Legumes (lentils, chickpeas)</li>
                <li>Tofu and tempeh</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-600 mb-2">Low-Glycemic Carbohydrates</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Whole grains (quinoa, brown rice)</li>
                <li>Oats</li>
                <li>Sweet potatoes</li>
                <li>Beans and lentils</li>
                <li>Barley</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-600 mb-2">Healthy Fats</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Avocados</li>
                <li>Nuts (walnuts, almonds)</li>
                <li>Seeds (flax, chia)</li>
                <li>Extra virgin olive oil</li>
                <li>Fatty fish</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-lg font-medium mb-2 text-red-500">Foods to Avoid or Limit:</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-500 mb-2">High-Glycemic Foods</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>White bread, pasta, and rice</li>
                <li>Sugary breakfast cereals</li>
                <li>Pastries and cookies</li>
                <li>Candy and sweets</li>
                <li>Sweetened beverages</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-500 mb-2">Inflammatory Foods</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Fried foods</li>
                <li>Processed meats</li>
                <li>Trans fats</li>
                <li>Excessive red meat</li>
                <li>Highly processed foods</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-500 mb-2">Dairy Products</h4>
              <p className="text-sm text-gray-700 mb-2">
                Some women with PCOS find that reducing dairy improves their symptoms. Consider limiting:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Milk</li>
                <li>Cheese</li>
                <li>Ice cream</li>
                <li>Yogurt (except low-sugar Greek yogurt)</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-500 mb-2">Caffeine and Alcohol</h4>
              <p className="text-sm text-gray-700 mb-2">
                These can affect hormone balance and insulin sensitivity:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Coffee (limit to 1 cup daily)</li>
                <li>Energy drinks</li>
                <li>Alcoholic beverages</li>
                <li>Sugary sodas with caffeine</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-lg font-medium mb-4">Weekly Diet Plan for PCOS</h3>
        
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
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Greek yogurt with berries, chia seeds and walnuts</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Quinoa bowl with grilled chicken, avocado, and mixed vegetables</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Baked salmon with roasted Brussels sprouts and sweet potato</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Tuesday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Veggie omelet with spinach, tomatoes, and avocado</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Lentil soup with side salad and olive oil dressing</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Turkey stir-fry with brown rice and mixed vegetables</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Wednesday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Overnight oats with almond milk, cinnamon, and berries</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Mediterranean chickpea salad with olive oil and lemon</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Grilled fish with asparagus and quinoa</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Thursday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Protein smoothie with spinach, berries, and nut butter</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Grilled chicken salad with mixed greens and avocado</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Bean and vegetable chili with small side of brown rice</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Friday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Chia seed pudding with cinnamon and berries</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Tuna salad (olive oil based) with whole grain crackers</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Baked chicken with roasted vegetables and small sweet potato</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Saturday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Egg muffins with vegetables and side of berries</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Salmon and avocado salad with mixed greens</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Lentil and vegetable stew with small portion of brown rice</td>
              </tr>
              <tr>
                <td className="py-3 px-3 border-b border-gray-200 text-sm font-medium">Sunday</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Almond flour pancakes with berries (no syrup)</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Stuffed bell peppers with ground turkey and quinoa</td>
                <td className="py-3 px-3 border-b border-gray-200 text-sm">Grilled fish with a large salad and olive oil dressing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Additional Lifestyle Tips for PCOS</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong>Regular exercise:</strong> Aim for 30 minutes of moderate activity daily</li>
          <li><strong>Stress management:</strong> Try yoga, meditation, or deep breathing</li>
          <li><strong>Consistent meal timing:</strong> Eat at regular intervals to help regulate blood sugar</li>
          <li><strong>Hydration:</strong> Drink plenty of water throughout the day</li>
          <li><strong>Sleep:</strong> Prioritize 7-8 hours of quality sleep each night</li>
        </ul>
      </div>

      <blockquote className="mt-6 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
        <p className="italic text-gray-700">
          "PCOS management is highly individual. This diet plan serves as a starting point, but pay attention to how your body responds and adjust accordingly. Working with healthcare providers, including a nutritionist familiar with PCOS, can provide personalized guidance for your specific needs."
        </p>
        <footer className="mt-2 text-sm text-gray-600">
          - Dr. Sarah Johnson, Endocrinologist
        </footer>
      </blockquote>
    </div>
  );
}