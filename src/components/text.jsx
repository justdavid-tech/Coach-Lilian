import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSDemoPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AOS Attributes Demo</h1>
        <p className="text-xl">Scroll down to see all AOS animations in action</p>
      </header>

      <div className="container mx-auto px-4 py-12">
        
        {/* 1. Basic data-aos - fade-up */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 inline-block">
            1. Basic data-aos="fade-up"
          </h2>
          <div 
            data-aos="fade-up"
            className="bg-white rounded-lg shadow-md p-8 text-center"
          >
            <p className="text-gray-700">This animated with just: <code className="bg-gray-100 px-2 py-1 rounded">data-aos="fade-up"</code></p>
          </div>
        </section>

        {/* 2. data-aos-duration */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 inline-block">
            2. data-aos-duration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              data-aos="fade-up"
              data-aos-duration="500"
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <h3 className="font-bold text-lg mb-2">500ms</h3>
              <code className="text-sm">data-aos-duration="500"</code>
              <p className="text-gray-600 mt-2 text-sm">Fast animation</p>
            </div>
            <div 
              data-aos="fade-up"
              data-aos-duration="1500"
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <h3 className="font-bold text-lg mb-2">1500ms</h3>
              <code className="text-sm">data-aos-duration="1500"</code>
              <p className="text-gray-600 mt-2 text-sm">Medium animation</p>
            </div>
            <div 
              data-aos="fade-up"
              data-aos-duration="3000"
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <h3 className="font-bold text-lg mb-2">3000ms</h3>
              <code className="text-sm">data-aos-duration="3000"</code>
              <p className="text-gray-600 mt-2 text-sm">Slow animation</p>
            </div>
          </div>
        </section>

        {/* 3. data-aos-delay */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 inline-block">
            3. data-aos-delay (Staggered)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[0, 100, 200, 300].map((delay, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={delay}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-6 text-center"
              >
                <h3 className="font-bold text-xl mb-2">Delay: {delay}ms</h3>
                <code className="text-xs bg-black bg-opacity-20 px-2 py-1 rounded">
                  data-aos-delay="{delay}"
                </code>
              </div>
            ))}
          </div>
        </section>

        {/* 4. data-aos-easing */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 inline-block">
            4. data-aos-easing (Easing Functions)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="800"
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="font-bold text-lg">Linear</h3>
              <code>data-aos-easing="linear"</code>
            </div>
            <div 
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="font-bold text-lg">Ease In Out</h3>
              <code>data-aos-easing="ease-in-out"</code>
            </div>
            <div 
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="font-bold text-lg">Ease Out Cubic</h3>
              <code>data-aos-easing="ease-out-cubic"</code>
            </div>
            <div 
              data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-duration="800"
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="font-bold text-lg">Ease In Back</h3>
              <code>data-aos-easing="ease-in-back"</code>
            </div>
            <div 
              data-aos="fade-right"
              data-aos-easing="ease-out-quad"
              data-aos-duration="800"
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="font-bold text-lg">Ease Out Quad</h3>
              <code>data-aos-easing="ease-out-quad"</code>
            </div>
            <div 
              data-aos="fade-right"
              data-aos-easing="ease-in-out-circ"
              data-aos-duration="800"
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="font-bold text-lg">Ease In Out Circ</h3>
              <code>data-aos-easing="ease-in-out-circ"</code>
            </div>
          </div>
        </section>

        {/* 5. data-aos-once */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 inline-block">
            5. data-aos-once
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              data-aos="flip-left"
              data-aos-once="true"
              className="bg-yellow-100 border-l-4 border-yellow-500 rounded-lg p-6"
            >
              <h3 className="font-bold text-lg text-yellow-800">Once: true</h3>
              <code>data-aos-once="true"</code>
              <p className="mt-2 text-sm">Animates only ONCE when first viewed. Scroll away and back - no repeat animation.</p>
            </div>
            <div 
              data-aos="flip-left"
              data-aos-once="false"
              className="bg-green-100 border-l-4 border-green-500 rounded-lg p-6"
            >
              <h3 className="font-bold text-lg text-green-800">Once: false</h3>
              <code>data-aos-once="false"</code>
              <p className="mt-2 text-sm">Animates EVERY TIME you scroll past. Try scrolling away and back!</p>
            </div>
          </div>
        </section>

        {/* 6. data-aos-mirror */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 inline-block">
            6. data-aos-mirror
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              data-aos="slide-right"
              data-aos-mirror="false"
              data-aos-once="false"
              className="bg-purple-100 border-l-4 border-purple-500 rounded-lg p-6"
            >
              <h3 className="font-bold text-lg text-purple-800">Mirror: false</h3>
              <code>data-aos-mirror="false"</code>
              <p className="mt-2 text-sm">Animates when scrolling down, NO animation when scrolling up.</p>
            </div>
            <div 
              data-aos="slide-right"
              data-aos-mirror="true"
              data-aos-once="false"
              className="bg-pink-100 border-l-4 border-pink-500 rounded-lg p-6"
            >
              <h3 className="font-bold text-lg text-pink-800">Mirror: true</h3>
              <code>data-aos-mirror="true"</code>
              <p className="mt-2 text-sm">Animates when scrolling down AND when scrolling up!</p>
            </div>
          </div>
        </section>

        {/* 7. data-aos-offset */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 inline-block">
            7. data-aos-offset (Trigger Distance)
          </h2>
          <div className="space-y-8">
            <div 
              data-aos="fade-up"
              data-aos-offset="50"
              className="bg-blue-100 rounded-lg p-4 text-center"
            >
              <h3 className="font-bold">Offset: 50px</h3>
              <code>data-aos-offset="50"</code>
              <p className="text-sm mt-1">Triggers when element is 50px from viewport</p>
            </div>
            <div 
              data-aos="fade-up"
              data-aos-offset="200"
              className="bg-indigo-100 rounded-lg p-4 text-center"
            >
              <h3 className="font-bold">Offset: 200px</h3>
              <code>data-aos-offset="200"</code>
              <p className="text-sm mt-1">Triggers when element is 200px from viewport (much earlier!)</p>
            </div>
            <div 
              data-aos="fade-up"
              data-aos-offset="400"
              className="bg-purple-100 rounded-lg p-4 text-center"
            >
              <h3 className="font-bold">Offset: 400px</h3>
              <code>data-aos-offset="400"</code>
              <p className="text-sm mt-1">Triggers very early (400px from viewport)</p>
            </div>
          </div>
        </section>

        {/* 8. data-aos-anchor-placement */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 inline-block">
            8. data-aos-anchor-placement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="bg-orange-100 rounded-lg p-4 text-center"
            >
              <h3 className="font-bold">Top-Bottom</h3>
              <code>anchor-placement="top-bottom"</code>
              <p className="text-xs mt-1">Element top hits viewport bottom</p>
            </div>
            <div 
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              className="bg-red-100 rounded-lg p-4 text-center"
            >
              <h3 className="font-bold">Center-Center</h3>
              <code>anchor-placement="center-center"</code>
              <p className="text-xs mt-1">Element center hits viewport center</p>
            </div>
            <div 
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-top"
              className="bg-teal-100 rounded-lg p-4 text-center"
            >
              <h3 className="font-bold">Bottom-Top</h3>
              <code>anchor-placement="bottom-top"</code>
              <p className="text-xs mt-1">Element bottom hits viewport top</p>
            </div>
          </div>
        </section>

        {/* 9. data-aos-anchor (Custom Trigger) */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 inline-block">
            9. data-aos-anchor (Custom Trigger Element)
          </h2>
          <div 
            id="trigger-box"
            className="bg-gray-800 text-white rounded-lg p-8 text-center mb-8"
          >
            <p className="text-lg">🎯 I am the TRIGGER element (id="trigger-box")</p>
            <p className="text-sm mt-2">When I come into view, the box below will animate</p>
          </div>
          <div 
            data-aos="zoom-in"
            data-aos-anchor="#trigger-box"
            data-aos-anchor-placement="top-center"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg p-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-2">I animate when the trigger box above is visible!</h3>
            <code>data-aos-anchor="#trigger-box"</code>
            <p className="mt-4">Scroll up and down to see me animate based on the dark box above</p>
          </div>
        </section>

        {/* 10. All Animation Types Demo */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 inline-block">
            10. Different Animation Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div data-aos="fade-up" className="bg-blue-500 text-white p-4 text-center rounded">fade-up</div>
            <div data-aos="fade-down" className="bg-green-500 text-white p-4 text-center rounded">fade-down</div>
            <div data-aos="fade-left" className="bg-red-500 text-white p-4 text-center rounded">fade-left</div>
            <div data-aos="fade-right" className="bg-purple-500 text-white p-4 text-center rounded">fade-right</div>
            <div data-aos="zoom-in" className="bg-pink-500 text-white p-4 text-center rounded">zoom-in</div>
            <div data-aos="zoom-out" className="bg-indigo-500 text-white p-4 text-center rounded">zoom-out</div>
            <div data-aos="flip-left" className="bg-yellow-500 text-white p-4 text-center rounded">flip-left</div>
            <div data-aos="flip-right" className="bg-orange-500 text-white p-4 text-center rounded">flip-right</div>
            <div data-aos="slide-up" className="bg-teal-500 text-white p-4 text-center rounded">slide-up</div>
            <div data-aos="slide-down" className="bg-cyan-500 text-white p-4 text-center rounded">slide-down</div>
            <div data-aos="slide-left" className="bg-gray-500 text-white p-4 text-center rounded">slide-left</div>
            <div data-aos="slide-right" className="bg-lime-500 text-white p-4 text-center rounded">slide-right</div>
          </div>
        </section>

        {/* 11. Complete Example - All Attributes Together */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 inline-block">
            11. Complete Mega Example (All Attributes)
          </h2>
          <div 
            data-aos="flip-up"
            data-aos-duration="1500"
            data-aos-delay="200"
            data-aos-easing="ease-out-back"
            data-aos-once="false"
            data-aos-mirror="true"
            data-aos-offset="150"
            data-aos-anchor-placement="center-center"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-12 text-center shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">Complete Mega Example!</h3>
            <p className="text-lg mb-4">This uses EVERY AOS attribute:</p>
            <div className="bg-black bg-opacity-20 rounded-lg p-4 text-left">
              <code className="text-sm block">
                data-aos="flip-up"<br/>
                data-aos-duration="1500"<br/>
                data-aos-delay="200"<br/>
                data-aos-easing="ease-out-back"<br/>
                data-aos-once="false"<br/>
                data-aos-mirror="true"<br/>
                data-aos-offset="150"<br/>
                data-aos-anchor-placement="center-center"
              </code>
            </div>
            <p className="mt-6 text-sm">Scroll away and back to see it animate repeatedly with mirror="true"</p>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>All AOS attributes demonstrated above! Scroll up and down to see different behaviors.</p>
        <p className="text-sm mt-2 text-gray-400">AOS (Animate On Scroll) - Complete Demo</p>
      </footer>
    </div>
  );
};

export default AOSDemoPage;