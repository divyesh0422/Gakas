import { useState } from 'react';

const EnhancedSubscribeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (formData.mobile && !/^[\d\s+-]+$/.test(formData.mobile)) {
      newErrors.mobile = 'Invalid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Subscribed:', formData);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: ''
      });
    } catch (err) {
      setErrors({
        ...errors,
        form: 'Subscription failed. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-green-50 border border-green-200 rounded-lg text-center">
        <div className="flex flex-col items-center">
          <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Thank you for subscribing!</h3>
          <p className="text-green-600 mb-6">You'll receive our updates soon.</p>
          <button
            onClick={() => setIsSuccess(false)}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Subscribe Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Stay Updated</h2>
        <p className="text-gray-600 mt-2">Subscribe to receive our latest news and updates</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.form && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-md">
            {errors.form}
          </div>
        )}

        {/* Name and Email - Horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name (Optional)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent ${
                errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'
              }`}
              placeholder="your@email.com"
              required
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
        </div>

        {/* Mobile and Message - Horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent ${
                errors.mobile ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'
              }`}
              placeholder="+1 (123) 456-7890"
            />
            {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Any special requests..."
            ></textarea>
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
            I agree to receive communications and accept the privacy policy
          </label>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            } transition flex items-center justify-center`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Subscribe Now'
            )}
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          We'll never share your information. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
};

export default EnhancedSubscribeForm;