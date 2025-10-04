import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Find your favorite place here!</h1>
      
      {/* Button Showcase Section */}
      <div className="mb-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Button Components</h2>
        
        {/* Small Buttons */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Small Buttons</h3>
          <div className="flex gap-4 flex-wrap">
            <Button title="Small Rounded SM" styles="px-3 py-1 text-sm rounded-sm" />
            <Button title="Small Rounded MD" styles="px-3 py-1 text-sm rounded-md" />
            <Button title="Small Rounded Full" styles="px-3 py-1 text-sm rounded-full" />
          </div>
        </div>

        {/* Medium Buttons */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Medium Buttons</h3>
          <div className="flex gap-4 flex-wrap">
            <Button title="Medium Rounded SM" styles="px-4 py-2 text-base rounded-sm" />
            <Button title="Medium Rounded MD" styles="px-4 py-2 text-base rounded-md" />
            <Button title="Medium Rounded Full" styles="px-4 py-2 text-base rounded-full" />
          </div>
        </div>

        {/* Large Buttons */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Large Buttons</h3>
          <div className="flex gap-4 flex-wrap">
            <Button title="Large Rounded SM" styles="px-6 py-3 text-lg rounded-sm" />
            <Button title="Large Rounded MD" styles="px-6 py-3 text-lg rounded-md" />
            <Button title="Large Rounded Full" styles="px-6 py-3 text-lg rounded-full" />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <h2 className="text-2xl font-semibold mb-6">Available Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Landing